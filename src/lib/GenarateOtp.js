const GenarateOtp = async (email) => {
  const API_BASE = "https://4amitest-bli6.wp1.sh/wp-json/otp/v1";
  try {
    const res = await fetch(`${API_BASE}/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (res.ok) {
      return data.otp;
    } else {
      throw new Error(data.message || "Error sending OTP");
    }
  } catch (err) {
    throw new Error("Request failed. Please try again.");
  }
};
export default GenarateOtp;
