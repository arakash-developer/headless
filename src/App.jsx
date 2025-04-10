import React, { useEffect, useState } from "react";

const App = () => {
  const [postData, setPostData] = useState([]);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "akash1",
    email: "arakash.developer1@gmail.com",
    password: "akash556600",
    role: "administrator",
  });

  // Optional: Fetch posts from WordPress (you can remove this if not needed)
  const getdata = async () => {
    try {
      const res = await fetch(
        "https://4amitest-bli6.wp1.sh/wp-json/wp/v2/posts"
      );
      const data = await res.json();
      setPostData(data);
    } catch (error) {
      console.error("Failed to fetch posts", error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Submitting...");

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
        setMessage("✅ Registered: " + data.message);
      } else {
        setMessage("❌ Error: " + (data?.error || data?.message || "Unknown"));
      }
    } catch (error) {
      setMessage("❌ Network error: " + error.message);
    }
  };

  return (
    <div>
      <div className="py-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-gray-50">
          {postData.map((item, index) => (
            <div key={index} className="bg-white p-5 rounded-2xl shadow">
              <h3 className="text-xl font-semibold">{item.slug}</h3>
              <p className="text-sm text-gray-600">
                {item.content?.rendered?.replace(/<[^>]*>/g, "")}
              </p>
            </div>
          ))}
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-10 max-w-md mx-auto p-6 bg-white rounded-2xl shadow space-y-4"
      >
        <h2 className="text-2xl font-bold text-center capitalize">Headless Wp Register</h2>

        <div>
          <label htmlFor="username" className="block text-sm font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Role
          </label>
          <div className="flex flex-wrap gap-3">
            {["administrator", "editor", "author", "subscriber"].map(
              (roleOption) => (
                <label
                  key={roleOption}
                  className={`flex items-center px-3 py-1.5 text-xs border rounded-md cursor-pointer transition
          ${
            formData.role === roleOption
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.role === roleOption}
                    onChange={() =>
                      setFormData({ ...formData, role: roleOption })
                    }
                    className="hidden"
                  />
                  <span className="capitalize">{roleOption}</span>
                </label>
              )
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition cursor-pointer"
        >
          Register
        </button>
        {message && <p className="text-center mt-4">{message}</p>}
      </form>
    </div>
  );
};

export default App;
