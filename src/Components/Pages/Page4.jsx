import React from 'react';
import girl from '../../assets/Ellipse 114.png';
import camera from '../../assets/Group 1585.svg'
import { PiClipboard } from 'react-icons/pi';

const Page4 = () => {
    return (
        <div className='flex justify-center min-h-screen'>
            <div className="artboard phone-4 bg-[#F7F8F9] flex flex-col border border-[#CBCBCB]">
                <nav className='bg-white px-4 pt-7 pb-5 text-xl text-[#1D2226]'>Account Settings</nav>
                <div>
                    <div className='flex gap-5 px-5 pt-8'>
                        <div className='relative'>
                            <img src={girl} alt="" />
                            <img src={camera} className=' absolute top-14 left-14' />
                        </div>
                        <div>
                            <h3 className='text-[#1D2226]'>Marry Doe</h3>
                            <p className='text-[#1D2226] text-sm'>Marry@Gmail.Com</p>
                        </div>
                    </div>

                    <p className='my-8 text-sm px-5'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
                    <p className='border-2 border-t-[#F7F8F9] border-dashed'></p>
                </div>

                <p className='border-2 border-t-[#F7F8F9] border-dashed mt-auto mb-8'></p>
            </div>
        </div>
    );
};

export default Page4;