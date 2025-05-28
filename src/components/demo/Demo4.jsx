import { useEffect } from "react";
import { decryptText, encryptText } from "@lib/cryptoUtils";

const Demo4 = () => {
  useEffect(() => {
    (async () => {
      const password = "my_secret_salt";
      const original = "Hello Akash!";
      const encrypted = await encryptText(original, password);
      const decrypted = await decryptText(encrypted, password);

      console.log("Encrypted:", encrypted);
      console.log("Decrypted:", decrypted);
    })();
  }, []);

  return null; // No UI
};

export default Demo4;
