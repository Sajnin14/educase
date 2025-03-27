import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';
import Page1 from '../Pages/Page1';
import Page2 from '../Pages/Page2';
import Page3 from '../Pages/Page3';
import Page4 from '../Pages/Page4';

const Home = () => {
    const [pageCount, setPageCount] = useState(1);
    // const totalPage = 4;

    const changePage = () => {
         switch(pageCount) {
            case 1: return <Page1></Page1>;
            case 2: return <Page2></Page2>;
            case 3: return <Page3></Page3>;
            case 4: return <Page4></Page4>;
            default: return <Page1></Page1>
         }
    }

    const previous = () =>{
       setPageCount(pageCount === 1 ? 4 : pageCount-1)
    }

    const next = () => {
       setPageCount(pageCount === 4 ? 1 : pageCount+1)
    }
    return (
        <div className='w-11/12 mx-auto'>
            <div>
                {changePage()}
            </div>
            <div className='text-gray-300 flex items-center justify-center gap-3 mt-4'>
                <Link to='/'><MdHome className='text-3xl'></MdHome></Link>
                <div className='flex items-center justify-around'>
                    <button onClick={previous}><FaChevronLeft  className='text-2xl'/></button>
                    <p>{pageCount} out of 4</p>
                    <button onClick={next}><FaChevronRight className='text-2xl'/></button>
                </div>
            </div>
        </div>
    );
};

export default Home;