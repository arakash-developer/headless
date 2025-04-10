import React, { useEffect, useState } from "react";
import getAllPost from "./lib/getAllPost";

const App = () => {
  let [post, setPost] = useState("Default");
  let [title, setTitle] = useState("Default title");
  let [postData, setPostdata] = useState([]);
  let getdata = async () => {
    let data = await getAllPost();
    setPostdata(data);
    // const content = data[0].slug;
    // console.log(data);
    // console.log(content);
    // const plainText = content.replace(/<[^>]*>/g, "");
    // // console.log("Title:", title);
    // console.log("Content (clean):", plainText);
  };
  useEffect(() => {
    getdata();
  }, [getdata]);

  return (
    <div>
      <div className="mt-7">
        <div className="bg-white py-10 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Your Amazing Post Title Goes Here
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            A short, engaging description or excerpt that teases the content of
            the post. Hook the reader with something valuable or interesting.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-gray-50">
          {/* <!-- Post Card --> */}
          {postData.map((item,index) => (
            <div key={index} className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition duration-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.slug}
              </h3>
              <p className="text-sm text-gray-600">
                {item.content.rendered.replace(/<[^>]*>/g, "")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
