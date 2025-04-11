import React from 'react'
import { Link } from 'react-router-dom'

const RegistrationSuccess = () => {
  return (
    <>
      <div className="p-[60px] bg-[#E9E9E9] max-w-[800px]">
        <h2 className='text-[#000] text-[32px] not-italic font-bold leading-10 text-center'>Registration Successful!</h2>
        <p className='pt-6 pb-10 text-[#000] text-center text-[16px] not-italic font-normal leading-6 max-w-[680px]'>Your account has been successfully created. You can now log in to access your dashboard and get started!</p>
        <div className="w-full flex justify-center">

        <Link to="/login" className='bg-[#ED272C] py-[18px] px-[60px] text-[#fff] text-[16px] not-italic font-medium leading-6 text-center rounded-[5px] text-[#FFF] text-[16px] not-italic font-semibold leading-7'>Log In</Link>
        </div>
      </div>
    </>
  )
}

export default RegistrationSuccess
