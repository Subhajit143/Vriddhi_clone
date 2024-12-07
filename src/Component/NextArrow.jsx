import React from 'react'
import { SlArrowRight } from "react-icons/sl";

const PreviousArrow = (props) => {
  const {onClick}=props;
    return (
    <div onClick={onClick} className='w-14 h-14 rounded-full text-primary-dark flex items-center justify-center absolute top-[35%] right-0 z-10 '>
        <SlArrowRight className='text-4xl' />
    </div>
  )
}

export default PreviousArrow