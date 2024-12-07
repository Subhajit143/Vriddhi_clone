import React from "react";

const Data = () => {
  return (
    <div className="px-44 flex flex-col items-center py-8">
      <div  className="flex justify-center text-primary-dark text-2xl font-semibold py-10">
        <h1>The Difference We've Made so Far</h1>
      </div>

      <div className="flex gap-10 items-center ">
        <div className="flex flex-col items-center gap-7 text-primary-dark" >
            <div className="text-4xl">
                <h1>50K+</h1>
            </div>
            <div className="text-xl px-5">
                <h1>Average impressions/per week/per brand</h1>
            </div>
        </div>

        <div className="flex flex-col items-center gap-3 text-primary-dark">
            <div className="text-4xl">
                <h1>15%</h1>
            </div>
            <div className="text-xl px-5">
                <h1>Average increase in sales within 3 months of our content Service</h1>
            </div>
        </div>

        <div className="flex flex-col items-center gap-3 text-primary-dark">
            <div className="text-4xl">
                <h1>30%</h1>
            </div>
            <div className="text-xl px-5">
                <h1>Better engagement on personal accounts within 2 months</h1>
            </div>
        </div>

        <div className="flex flex-col items-center gap-3 text-primary-dark">
            <div className="text-4xl">
                <h1>20+</h1>
            </div>
            <div className="text-xl px-5">
                <h1>Buisness Impacted so far</h1>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Data;
