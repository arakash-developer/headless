const postUser = async (e) => {
  const formData = {
    username: "a",
    password: "a",
    email: "a",
    firstName: "a",
    lastName: "a",
    title: "a",
    company: "a",
    phone: "a",
    extension: "a",
    code: "a",
  };

  try {
    const res = await fetch(
      "https://4amitest-bli6.wp1.sh/wp-json/custom/v1/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );

    const data = await res.json();

    if (res.ok) {
      return "✅ Registration successful!";
    } else {
      return `❌ ${data.error || "Registration failed"}`;
    }
  } catch (err) {
    return "❌ Error while registering. Please try again.";
  } finally {
  }
};
export default postUser;
