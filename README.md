# React + Vite + Akkash

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

import React, { useEffect, useState } from "react";
// React Router dom........
import {
createRoutesFromElements,
createBrowserRouter,
Route,
RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
createRoutesFromElements(
<Route path='/' element={<RootLayout />}>
<Route index path='/' element={<Home />}></Route>
<Route index path='/home' element={<Home />}></Route>
<Route path='/about' element={<About />}></Route>
<Route path='/service' element={<Service />}></Route>
<Route path='\*' element={<Error />}/>
</Route>
)
);

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
{item.content?.rendered?.replace(/<[^>]\*>/g, "")}
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
nee

backup

<?php
/**
 * Plugin Name: Custom REST Register (Full Fields)
 * Description: Register WordPress users via REST with extended fields and no role set.
 * Version: 1.0
 * Author: Atiqur Rahman Akash
 */

// Allow CORS for frontend app
add_action('init', function () {
  // Define the allowed origins
  $allowed_origins = [
    'http://localhost:5173', 
    'https://4ami-jynw.wp1.sh',
  ];

  // Get the request origin
  $origin = $_SERVER['HTTP_ORIGIN'] ?? '';

  // Check if the request origin is in the allowed origins
  if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
  }

  // Handle OPTIONS request for pre-flight CORS checks
  if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    status_header(200);
    exit;
  }
});

// Register REST endpoint
add_action('rest_api_init', function () {
  register_rest_route('custom/v1', '/register', [
    'methods' => 'POST',
    'callback' => 'custom_full_register',
    'permission_callback' => '__return_true',
  ]);
});

function custom_full_register($request) {
  try {
    $params = $request->get_json_params();

    // Get data from request
    $username = sanitize_text_field($params['username'] ?? '');
    $email = sanitize_email($params['email'] ?? '');
    $password = $params['password'] ?? '';

    // Validate required fields
    if (empty($username) || empty($email) || empty($password)) {
      return new WP_REST_Response(['success' => false, 'error' => 'Missing required fields'], 400);
    }

    // Check if username or email already exists
    if (username_exists($username) || email_exists($email)) {
      return new WP_REST_Response(['success' => false, 'error' => 'Username or email already exists'], 409);
    }

    // Create the user
    $user_id = wp_create_user($username, $password, $email);
    if (is_wp_error($user_id)) {
      return new WP_REST_Response(['success' => false, 'error' => $user_id->get_error_message()], 500);
    }

    // Update first/last name
    wp_update_user([
      'ID' => $user_id,
      'first_name' => sanitize_text_field($params['firstName'] ?? ''),
      'last_name'  => sanitize_text_field($params['lastName'] ?? ''),
    ]);

    // Save custom user meta fields
    $meta_fields = ['code', 'title', 'company', 'phone', 'extension'];
    foreach ($meta_fields as $field) {
      if (!empty($params[$field])) {
        update_user_meta($user_id, $field, sanitize_text_field($params[$field]));
      }
    }

    // Return success response
    return new WP_REST_Response([
      'success' => true,
      'message' => 'User registered successfully',
      'user_id' => $user_id
    ], 200);

  } catch (Throwable $e) {
    // Return error response if exception occurs
    return new WP_REST_Response([
      'success' => false,
      'error' => $e->getMessage(),
      'line' => $e->getLine()
    ], 500);
  }
}
?>

<?php
/**
 * Plugin Name: Custom Admin Register via REST
 * Description: Registers users via REST API and assigns administrator role by default. User is inactive (`active = 0`) initially.
 * Version: 1.0
 * Author: Atiqur Rahman Akash
 */

// Allow CORS for frontend requests
add_action('init', function () {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    header("Access-Control-Allow-Credentials: true");

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        status_header(200);
        exit;
    }
});

// Register REST API endpoint
add_action('rest_api_init', function () {
    register_rest_route('custom/v1', '/register', [
        'methods' => 'POST',
        'callback' => 'custom_admin_register_user',
        'permission_callback' => '__return_true',
    ]);
});

// Main registration function
function custom_admin_register_user($request) {
    try {
        $params = $request->get_json_params();

        $username = sanitize_user($params['username'] ?? '');
        $email    = sanitize_email($params['email'] ?? '');
        $password = $params['password'] ?? '';

        if (empty($username) || empty($email) || empty($password)) {
            return new WP_REST_Response(['success' => false, 'error' => 'Missing required fields'], 400);
        }

        if (username_exists($username) || email_exists($email)) {
            return new WP_REST_Response(['success' => false, 'error' => 'Username or email already exists'], 409);
        }

        // Create user with no role
        $user_id = wp_create_user($username, $password, $email);
        if (is_wp_error($user_id)) {
            return new WP_REST_Response(['success' => false, 'error' => $user_id->get_error_message()], 500);
        }

        // Assign administrator role
        $user = new WP_User($user_id);
        $user->set_role('subscriber');

        // Update additional fields
        wp_update_user([
            'ID'         => $user_id,
            'first_name' => sanitize_text_field($params['firstName'] ?? ''),
            'last_name'  => sanitize_text_field($params['lastName'] ?? ''),
        ]);

        // Save custom meta fields
        $meta_fields = ['code', 'title', 'company', 'phone', 'extension'];
        foreach ($meta_fields as $field) {
            if (!empty($params[$field])) {
                update_user_meta($user_id, $field, sanitize_text_field($params[$field]));
            }
        }

        // Set active = 0 by default
        update_user_meta($user_id, 'active', 0);

        return new WP_REST_Response([
            'success' => true,
            'message' => 'Administrator user registered successfully (inactive)',
            'user_id' => $user_id
        ], 200);

    } catch (Throwable $e) {
        return new WP_REST_Response([
            'success' => false,
            'error' => $e->getMessage(),
            'line' => $e->getLine()
        ], 500);
    }
}
?>



    try {
      const response = await fetch(
        "https://4amitest-bli6.wp1.sh/wp-json/custom/v1/admin-register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (result.success) {
        setSuccessMessage("User registered successfully!");
        setFormData({
          email: "",
          username: "",
          password: "",
          firstName: "",
          lastName: "",
          title: "",
          company: "",
          phone: "",
          extension: "",
        });
      } else {
        setErrorMessage(
          result.error || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      setErrorMessage(
        "There was an error processing the request. Please try again later."
      );
    }