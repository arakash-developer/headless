import React, { useState } from 'react'
import postRegistration from '../lib/postRegistration'

const Demo3 = () => {
    const [formData, setFormData] = useState({
      username: "a",
      password: "a",
      email: "aaaa@gmail.com",
      firstName: "s",
      lastName: "s",
      title: "s",
      company: "s",
      phone: "s",
      extension: "s",
      code: "s",
    });
  
  let handlerData = async () => {
    let response = await postRegistration(formData);
    console.log(response);
  }

  return (

    <div>
      <h1>dd</h1>
      <p className='py-5 px-10 bg-red-400' onClick={handlerData}>GG</p>
    </div>
  )
}

export default Demo3
