import React, { useState } from 'react'

const postRegistration = async (formData) => {


  try {
    const res = await fetch("https://4amitest-bli6.wp1.sh/wp-json/custom/v1/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      return {message: "Registration successful!", login:true};
    } else if (res.status === 400) {
      return `Error: ${data.error || "Registration failed"}`;
    } else {
     return `Error: ${data.error || "An unexpected error occurred"}`;
    }
  } catch (err) {
    return new Error(err.meessage);
  } finally {
  }

}

export default postRegistration

