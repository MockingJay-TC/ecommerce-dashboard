import React from "react";
import "./addimage.scss";
import { BsUpload } from "react-icons/bs";

const AddImage = () => {
  return (
    <div className="move w-full h-72 rounded-md shadow-lg border-dashed border-2 border-[tomato] flex items-center justify-center text-[tomato] text-2xl group bg-white ">
      <div className="relative w-full text-center">
        <BsUpload className="mx-auto text-7xl font-bold my-4" />
        <button className="tracking-widest uppercase text-3xl font-semibold relative cursor-pointer py-3 px-5 z-10 bg-[#f3f4fa] rounded-xl shadow-md mx-4">
          <input
            className="absolute z-20 opacity-0 w-full h-full text-xl top-0 left-0 cursor-pointer"
            type="file"
          />
          Upload file
        </button>
        <p className="my-3">jpg, png</p>
      </div>
    </div>
  );
};

export default AddImage;
