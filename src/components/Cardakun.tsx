import React from "react";

const Cardakun = () => {
  return (
    <div className="card w-full bg-center justify-between">
      <div className="card-body">
        <h2 className="card-title">Edit Account</h2>
        <div className="flex flex-col mt-8">
       <label>
        <span className="font-extrabold">Name </span>
        <div className=" items-center text-center -mt-8">
       <input 
       type="text"
       placeholder="enter your name..."
       className="input input-bordered w-full max-w-xs border-black"/>
       </div>
       </label>
      </div>
        <div className="flex flex-col mt-8">
       <label>
        <span className="font-extrabold">Number Phone </span>
        <div className=" items-center text-center -mt-7">
       <input 
       type="text"
       placeholder="enter your number phone..."
       className="input input-bordered w-full max-w-xs border-black"/>
       </div>
       </label>
      </div>
        <div className="flex flex-col mt-8">
       <label>
        <span className="font-extrabold">address </span>
        <div className=" items-center text-center -mt-7">
       <input 
       type="text"
       placeholder="enter your address..."
       className="input input-bordered w-full max-w-xs border-black"/>
       </div>
       </label>
      </div>
      <div className="card-actions justify-end">
      <button className="btn bg-gray">Update</button>
    </div>
    </div>
    </div>
  );
};

export default Cardakun;
