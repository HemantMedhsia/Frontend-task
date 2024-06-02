"use client";
import React, { useState } from "react";
import Header from "./Header";
import VenderForm from "./VenderForm";

const MainScreen = () => {
  // State to manage the visibility of the VenderForm
  const [showVenderForm, setShowVenderForm] = useState(false);
  const [show, setshow] = useState(false);

  {show && setTimeout(()=>{
    setshow(false);
  },3000)}

  return (
    <>
      <Header />
      <div className="h-[100vh] text-white">
        <div className="h-[100vh] w-[5%] bg-[#F9FCFF] absolute top-0">
          <div className="flex pt-5 px-3 text-[#2E5A75]">
            {/* <i className="fa-brands fa-slack fa-2x"></i> */}
            <img className="h-12 w-12" src="https://i.pinimg.com/736x/58/ba/ce/58bace42e0e777c45691cecfc1f4167e.jpg"/>
            <div class="absolute top-0 left-0 rounded-[50%] h-16 w-16 bg-[#F9FCFF] opacity-20"></div>
          </div>

          <div className="mt-6 hover:bg-[#2E5A75] rounded-l-full">
            <i className="fa-regular fa-compass px-[24px] py-3 hover:text-[#F7FCFF] text-[#2E5A75] text-[22px]"></i>
          </div>

          <div className="mt-3 hover:bg-[#2E5A75] rounded-l-full">
            <i className="fa-regular fa-file px-[26px] py-3 hover:text-[#F7FCFF] text-[#2E5A75] text-[22px]"></i>
          </div>

          <div className="mt-3 hover:bg-[#2E5A75] rounded-l-full">
            <i className="fa-regular fa-user px-[26px] py-3 hover:text-[#F7FCFF] text-[#2E5A75] text-[21px]"></i>
          </div>

          <div className="mt-3 hover:bg-[#2E5A75] rounded-l-full">
            <i className="fa-solid fa-gear px-[25px] py-3 hover:text-[#F7FCFF] text-[#2E5A75] text-[21px]"></i>
          </div>
        </div>
      </div>
      <div className="w-[100%] flex h-[6%] mt-4 absolute top-[11vh] left-[5%]">
        <div className="flex justify-between w-[53%]">
          <i className="fa-solid fa-arrow-left text-[25px] m-[7px]"></i>
          <h1 className="m-[7px] text-lg font-semibold">
            OlaMoney Technologies India Pvt.Ltd
          </h1>
          <div className="mt-[7px] h-[30px] w-[160px] border-2 rounded-full border-[#5E4CFE]">
            <p className="px-5 py-[6.5px] text-[#5E4CFE] font-semibold text-[10px]">
              Awating Vendor Details
            </p>
          </div>
          <i className="fa-solid fa-circle-info my-[15px]"></i>
          <i className="fa-solid fa-list my-[15px]"></i>
          <i className="fa-regular fa-clock my-[15px]"></i>
          <i className="fa-regular fa-comment my-[15px]"></i>
          <i className="fa-solid fa-download my-[15px]"></i>
          <i className="fa-solid fa-share my-[15px]"></i>
        </div>

        <div className="flex justify-evenly w-[25%] ml-24">
          <div className="h-[42px] w-[168px] bg-[#F5FAF4] border-0 rounded-md">
            <p className="px-3 py-2 text-[20px] text-[#0A920A] font-semibold">
              <i className="fa-solid fa-check-to-slot px-2"></i>Save Draft
            </p>
          </div>

          <div className="h-80 w-[120px] border-0 rounded-md ml-4">
            <p className="px-3 h-[42px] py-2 rounded-md text-white text-[20px] bg-[#017194] font-semibold">
              Submit <i className="fa-solid fa-angle-right px-1"></i>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 h-[94vh] w-[76%] border-[1px] absolute top-[17vh] left-[5%] rounded-md">
        <div className="h-12 flex rounded-t-md border-[1px]">
          <p className="px-4 py-[12px] text-[#97b7cb] font-semibold text-[14px]">
            Vendor request details
          </p>
          <p className="px-6 text-[#2E5A75] py-[12px] font-semibold text-[14px]">
            Vendor form details
          </p>
          <p className="px-6 text-zinc-300 py-[12px] text-[14px]">
            Add finance details
          </p>
        </div>
        <div className="flex justify-start">
          <div>
            <p className="pb-0 font-semibold text-black px-5 py-5">
              Send vender form?
            </p>
            <div
              className="mt-3 border-[#125299] bg-[#EEF8FF] h-[30px] w-[160px] border-2 rounded-full ml-5 cursor-pointer"
              onClick={() => setShowVenderForm(true)}
            >
              <p className="px-7 text-[#125299] py-1 text-[13px] font-semibold">
                Yes, send form
              </p>
            </div>
          </div>
          <div className="mt-[55.5px] h-[30px] w-[135px] bg-[#EEF8FF] border-[#125299] border-2 rounded-full ml-5">
            <p className="text-[13px] text-[#125299] font-semibold py-1 px-4">
              No, fill manually
            </p>
          </div>
        </div>
      </div>
      {showVenderForm && (
        <div className="h-[100vh] fixed inset-0 z-50 bg-black bg-opacity-60">
          <div className="h-[461px] w-[591px] border-[1px] absolute top-[206px] left-[450px] rounded-md">
            <VenderForm
              onClose={() => setShowVenderForm(false)}
              disToast={() => {
                setshow(true), setShowVenderForm(false);
              }}
            />
          </div>
        </div>
      )}
      <div className="h-[94vh] rounded-md w-[17.6%] border-[1px] mt-8 absolute top-[17vh] right-[10px]">
        <div className="h-12 font-[13px] text-[#2E5A75] flex justify-between px-4 py-3 rounded-t-md border-[1px]">
          <p className="font-semibold">Attachments</p>
          <i className="fa-solid fa-paperclip py-1"></i>
        </div>

        <div className="px-4 py-5">
          <p className="text-[13px] font-bold">Vendor Contract</p>
          <div className="w-[140px] px-6 bg-[#d5e8ee] mt-3 ml-2 rounded-md h-[24px] border-2">
            <p className="text-[12px]">vvtech...ve.pdf</p>
          </div>

          <p className="text-[13px] font-bold mt-8">Vendor Final Proposal</p>
          <div className="w-[140px] mt-3 ml-2 bg-[#d5e8ee] px-6 rounded-md h-[24px] border-2">
            <p className="text-[12px]">vvtech...ve.pdf</p>
          </div>
        </div>
      </div>
      {show && (
        <div className="bg-zinc-700 w-[500px] font-semibold px-5 py-6 flex justify-between text-white absolute top-14 rounded-lg left-[36%] h-[100px]">
          <p>
            Vendor form sent to the vendor and stage moved to "awaiting vendor
            details"
          </p>
          <i onClick={()=>setshow(false)} className="fa-solid fa-xmark mt-2 text-[29px] cursor-pointer"></i>
        </div>
      )}
    </>
  );
};

export default MainScreen;
