import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../Component/NextArrow";
import PreviousArrow from "../Component/PreviousArrow";
const bannerData = [
  {
    name: "Rahul Jain",
    title:
      "Was a bit sceptical after having bad experiences with other agencies. Gave them a chance anyways and 3 months down the line before we even know it we are ranking like crazy and our sales were 30% up. ",
  },
  {
    name: "Subhajit Majumdar",
    title:
      "I've been loving the constant communication and updates from the team, their work ethic is impeccable. 10/10 recommend their UGC service. ",
  },
  {
    name: "Aditya Ghosh",
    title:
      "Was a bit sceptical after having bad experiences with other agencies. Gave them a chance anyways and 3 months down the line before we even know it we are ranking like crazy and our sales were 30% up.",
  },
];

const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    arrows: true,
  };

  return (
    <>
      
      <div className="p-20">
      <div className=" bg-pink-200 p-28">
     <div className="flex justify-center items-center">
     <h1 className=" text-primary-dark text-2xl font-semibold">The Difference We've Made so Far</h1>
     </div>
      <Slider {...settings} >
        {bannerData.map((item, index) => (
          <div key={index} className="flex justify-center px-16">
             <div  className="flex justify-center text-primary-dark text-2xl font-semibold py-10">
        
      </div>
            <div className="flex flex-col  px-96 gap-5 justify-center items-center">
              
              <p >{item.title}</p>
              <h3 className="text-2xl text-primary-dark">{item.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      </div>
    </>
  );
};

export default Review;
