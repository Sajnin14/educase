import React from 'react';

const Page2 = () => {
    return (
        <div className='flex justify-center'>
            <div className="artboard phone-4 bg-[#F7F8F9] px-5 py-10">
                <h3 className='text-[#1D2226] text-2xl tracking-wider mb-[14px] font-medium'>Signin to your <br /> PopX account</h3>
                <p className='text-[#1D2226] opacity-60'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,</p>

                <div className="mb-4 relative mt-[33px]">
                    <label className="absolute -top-2.5 left-3 text-sm font-semibold text-purple-700 pl-1 pr-4 bg-[#F7F8F9]">Email Address</label>
                    <input

                        placeholder="Enter email address"
                        className="w-full p-2 border border-[#CBCBCB] bg-[#F7F8F9] rounded-md"
                    />
                </div>

                <div className="my-4 relative">
                    <label className="absolute -top-2.5 left-3 text-sm font-semibold text-purple-700 pl-1 pr-4 bg-[#F7F8F9]">Password</label>
                    <input

                        placeholder="Enter password"
                        className="w-full p-2 border border-[#CBCBCB] bg-[#F7F8F9] rounded-md"
                    />
                </div>

                <button className='bg-[#CBCBCB] text-white rounded-md text-[18px] text-center py-3 w-full mt-2'>Login</button>
            </div>
        </div>
    );
};

export default Page2;