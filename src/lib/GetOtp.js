const GetOtp = async (email) => {
  const API_BASE = "https://4amitest-bli6.wp1.sh/wp-json/otp/v1";
  try {
    const res = await fetch(
      `${API_BASE}/get?email=${encodeURIComponent(email)}`
    );
    const data = await res.json();

    if (res.ok) {
      return data.otp;
    } else {
      return null;
    }
  } catch (err) {
    throw new Error("Failed to retrieve OTP.");
  }
};

export default GetOtp;
