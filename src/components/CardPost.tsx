import React from "react";

const CardPost = () => {
  return (
    <div className="card w-full bg-center justify-between">
      <div className="card-body">
        <h2 className="card-title">Edit Product</h2>
        <div className="flex flex-col mt-8">
          <label>
            <span className="font-extrabold">Name Product </span>
            <div className=" items-center text-center -mt-8">
              <input
                type="text"
                placeholder="Name Product..."
                className="input input-bordered w-full max-w-xs border-black"
              />
            </div>
          </label>
        </div>
        <div className="flex flex-col mt-8">
          <label>
            <span className="font-extrabold">Stock </span>
            <div className=" items-center text-center -mt-7">
              <input
                type="text"
                placeholder="Input Your Stock..."
                className="input input-bordered w-full max-w-xs border-black"
              />
            </div>
          </label>
        </div>
        <div className="flex flex-col mt-8">
          <label>
            <span className="font-extrabold">Detail Product </span>
            <div className=" items-center text-center -mt-7">
              <input
                type="text"
                placeholder="Input Detail Product..."
                className="input input-bordered w-full max-w-xs border-black"
              />
            </div>
          </label>
        </div>
        <div className="flex flex-col mt-8">
          <label>
            <span className="font-extrabold">Upload Product</span>
            <div className=" items-center text-center -mt-8">
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
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

export default CardPost;