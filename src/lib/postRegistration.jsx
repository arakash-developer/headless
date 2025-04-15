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
      return "Registration successful!";
    } else if (res.status === 400) {
      return `Error: ${data.error || "Registration failed"}`;
    } else {
      return new Error(`Error: ${res.status} ${res.statusText}`);
    }
  } catch (err) {
    return new Error(err);
  } finally {
  }

}

export default postRegistration

