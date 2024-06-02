import React from "react";

const Header = () => {
  return (
    <div className="h-[11vh] w-100 ml-[73.8px] border-b-2 flex justify-between items-center">
      <div className=" w-[50%]">
        <h1 className="text-[25px] font-semibold px-5 py-5">Manage Vendor</h1>
      </div>

      <div className="h-full w-[25%] flex justify-between items-center">
        <div className="w-[50px] ml-3 h-[50px] border-[1px] border-gray-400 rounded-full">
          <i className="fa-regular fa-bell px-1 py-1 text-[23px] m-2.5 text-gray-500"></i>
        </div>
        <div className="h-[30px] w-[1px] border-l-[1px] border-gray-400"></div>
        <div className="flex items-center">
          <div className="w-[50px] h-[50px] mr-2">
            <img
              src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/4.jpg"
              alt="profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="ml-2 mr-8">
            <p className="text-[20px] ">Rohit Sharma</p>
            <p className="text-[12px]">rohit.sharma@growquest.in</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
