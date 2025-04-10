import React from 'react'

const getAllPost = async () => {
let response = await fetch("https://akashtest.wp1.sh/wp-json/wp/v2/posts");
let data = response.json();
return data;
}

export default getAllPost
