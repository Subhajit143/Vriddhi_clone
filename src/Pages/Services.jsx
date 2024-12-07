import React from "react";
import log1 from "../assets/firstlogo.png"
import log2 from "../assets/secondslogo.png"
import log3 from "../assets/thirddlogo.png"
import log4 from "../assets/fourthLogo.png"

const Services = () => {
  return (
    <>
      <div className="flex flex-col w-full  justify-center px-16 ">
        <div>
          <div className="flex justify-center text-primary-dark text-2xl font-semibold py-10">
            <h1>What we do</h1>
          </div>

          <div class="flex items-center my-4 ">
            <div class="flex-grow h-0.5 bg-primary-dark"></div>
          </div>

          <div className="flex justify-between pb-10 px-24">
            <div className="w-96 flex">
            <img src={log1} alt="" className="w-14 h-14"/>
              <h1 className="text-4xl text-primary-dark   pl-5">
                Shifting The Narratives
              </h1>
            </div>
            <div>
              <h1 className="text-lg w-96">
                We help you in shifting all your negative PR into positive ones
                using our strategic UGC push.
              </h1>
            </div>
          </div>

          <div class="flex items-center my-4">
            <div class="flex-grow h-0.5 bg-primary-dark"></div>
          </div>

          <div className="flex justify-between pb-10 px-24">
            <div  className="w-80 flex">
            <img src={log2} alt="" className="w-14 h-14"/>
              <h1 className="text-4xl text-primary-dark   pl-5">
                Building An Online Presence
              </h1>
            </div>
            <div>
              <h1 className="text-lg w-96">
                We give your brand a much-needed push in all the relevant
                communities and forums to make sure that you don't go unnoticed.
              </h1>
            </div>
          </div>

          <div class="flex items-center my-4">
            <div class="flex-grow h-0.5 bg-primary-dark"></div>
          </div>
          <div className="flex justify-between pb-10 px-24">
            <div className="w-80 flex">
            <img src={log3} alt="" className="w-14 h-14"/>
              <h1 className="text-4xl text-primary-dark   pl-5">
                Building A Personal Brand
              </h1>
            </div>
            <div>
              <h1 className="text-lg w-96">
                People relate with founders much better than they relate with
                Brands. We help you become more relatable and connect with your
                audience on a deeper lever.
              </h1>
            </div>
          </div>

          <div class="flex items-center my-4">
            <div class="flex-grow h-0.5 bg-primary-dark"></div>
          </div>
          <div className="flex justify-between pb-10 px-24">
            <div className="w-80 flex">
                <img src={log4} alt="" className="w-14 h-14"/>
              <h1 className="text-4xl text-primary-dark  pl-5">
                Building Your Content Funnel
              </h1>
            </div>
            <div>
              <h1 className="text-lg w-96">
                Boost website traffic by 20% and brand awareness by 35%! Our
                all-in-one solution, encompassing research, writing,
                SEO-optimized blogs, and captivating videos, helps you build an
                impeccable content machine that gets results.
              </h1>
            </div>
          </div>

          <div class="flex items-center my-4">
            <div class="flex-grow h-0.5 bg-primary-dark"></div>
          </div>
          <div className="flex justify-center   py-10">
          <button className=' rounded-md text-xl px-4  py-3 text-primary-default border border-primary-dark hover:text-white hover:bg-primary-dark duration-300 cursor-pointer'>BOOK A MEETING</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
