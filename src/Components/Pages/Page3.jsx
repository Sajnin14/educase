import React from 'react';

const Page3 = () => {
    return (
        <div className='flex justify-center min-h-screen'>
            <div className="artboard phone-4 bg-[#F7F8F9] px-5 py-10 flex flex-col">
                <h3 className='text-[#1D2226] text-2xl tracking-wider mb-[14px] font-medium'>Create your <br /> PopX account</h3>

                <div className='space-y-5'>
                    <div className="mb-4 relative mt-[33px]">
                        <label className="absolute -top-2.5 left-3 text-sm text-purple-700 pl-1 pr-4 bg-[#F7F8F9]">Full Name<span className='text-red-600'>*</span></label>
                        <input
                            placeholder="Marry Doe"
                            className="w-full p-2 border border-[#CBCBCB] bg-[#F7F8F9] placeholder-[#1D2226] rounded-md"
                        />
                    </div>

                    <div className="mb-4 relative mt-[33px]">
                        <label className="absolute -top-2.5 left-3 text-sm text-purple-700 px-1 bg-[#F7F8F9]">Phone Number<span className='text-red-600'>*</span></label>
                        <input
                            placeholder="Marry Doe"
                            className="w-full p-2 border border-[#CBCBCB] bg-[#F7F8F9] placeholder-[#1D2226] rounded-md"
                        />
                    </div>

                    <div className="mb-4 relative mt-[33px]">
                        <label className="absolute -top-2.5 left-3 text-sm text-purple-700 px-1 bg-[#F7F8F9]">Email Address<span className='text-red-600'>*</span></label>
                        <input
                            placeholder="Marry Doe"
                            className="w-full p-2 border border-[#CBCBCB] bg-[#F7F8F9] placeholder-[#1D2226] rounded-md"
                        />
                    </div>

                    <div className="mb-4 relative mt-[33px]">
                        <label className="absolute -top-2.5 left-3 text-sm text-purple-700 pl-1 pr-6 bg-[#F7F8F9]">Password<span className='text-red-600'>*</span></label>
                        <input
                            placeholder="Marry Doe"
                            className="w-full p-2 border border-[#CBCBCB] bg-[#F7F8F9] placeholder-[#1D2226] rounded-md"
                        />
                    </div>

                    <div className="mb-4 relative mt-[33px]">
                        <label className="absolute -top-2.5 left-3 text-sm text-purple-700 px-1 bg-[#F7F8F9]">Company Name</label>
                        <input
                            placeholder="Marry Doe"
                            className="w-full p-2 border border-[#CBCBCB] bg-[#F7F8F9] placeholder-[#1D2226] rounded-md"
                        />
                    </div>

                    <div>
                        <p className='text-sm'>Are you an Agency?<span className='text-red-600'>*</span></p>

                        <div className='flex gap-6'>
                            <label className='flex items-center gap-3'>
                                <span>Yes</span>
                                <input type="radio" name="radio-1" className="radio radio-primary" checked/>
                            </label>

                            <label className='flex items-center gap-3'>
                                <span>No</span>
                                <input type="radio" name="radio-1" className="radio radio-primary" />
                            </label>
                        </div>

                    </div>
                </div>

                <button className='bg-[#6C25FF] text-white rounded-md text-[18px] text-center py-3 w-full mt-auto'>Create Account</button>
                    

            </div>
        </div>
    );
};

export default Page3;