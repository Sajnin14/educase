import React from 'react';

const Page1 = () => {
    return (
        <div className='flex justify-center'>
            <div className="artboard phone-4 bg-[#F7F8F9] px-5 flex flex-col justify-end pb-10">
                <h2 className="text-2xl text-[#1D2226] mb-2">Welcome to PopX</h2>
                <p className='text-[#1D2226] opacity-60'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,</p>
                <button className='bg-[#6C25FF] text-white rounded-md text-[18px] text-center py-3 w-full mt-7'>Create Account</button>
                <button className='bg-[#6C25FF4B] text-[#1D2226] rounded-md text-[18px] text-center py-3 w-full mt-2'>Already Registered? Login</button>
            </div>
        </div>
    );
};

export default Page1;