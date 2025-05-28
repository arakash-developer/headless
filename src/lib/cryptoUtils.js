// cryptoUtils.js

export async function encryptText(text, password) {
  const enc = new TextEncoder();
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const keyMaterial = await getKeyMaterial(password);
  const key = await getKey(keyMaterial, salt);

  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    enc.encode(text)
  );

  const combined = new Uint8Array(salt.length + iv.length + encrypted.byteLength);
  combined.set(salt, 0);
  combined.set(iv, salt.length);
  combined.set(new Uint8Array(encrypted), salt.length + iv.length);

  const base64 = btoa(String.fromCharCode(...combined));

  // Optionally strip slashes or special chars (for URLs)
  return base64.replace(/\//g, "_").replace(/\+/g, "-").replace(/=+$/, "");
}

export async function decryptText(encryptedBase64, password) {
  // Restore base64 (if URL-safe modified above)
  const restoredBase64 = encryptedBase64.replace(/_/g, "/").replace(/-/g, "+");
  const binaryStr = atob(restoredBase64);
  const data = new Uint8Array([...binaryStr].map(c => c.charCodeAt(0)));

  const salt = data.slice(0, 16);
  const iv = data.slice(16, 28);
  const encrypted = data.slice(28);

  const keyMaterial = await getKeyMaterial(password);
  const key = await getKey(keyMaterial, salt);

  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv },
    key,
    encrypted
  );

  return new TextDecoder().decode(decrypted);
}

async function getKeyMaterial(password) {
  const enc = new TextEncoder();
  return crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    "PBKDF2",
    false,
    ["deriveKey"]
  );
}

async function getKey(keyMaterial, salt) {
  return crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: salt,
      iterations: 100000,
      hash: "SHA-256"
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}
