
const PasswordReset = async (email,newPassword) => {
  try {
      const response = await fetch(
        "https://4amitest-bli6.wp1.sh/wp-json/custom/v1/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            new_password: newPassword,
          }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        return true;
      } else {
       throw new Error(data.message);
      }
    } catch (error) {
      throw new Error("API Error:", error);
    }
}

export default PasswordReset