import React from 'react';

const VenderForm = ({ onClose, disToast }) => {
  return (
    <div className='h-[461px] w-[591px] bg-white border-slate-600'>
      <div className='flex justify-between px-5 py-5'>
        <p className='font-semibold text-[14px]'>Send vendor form to users</p>
        <i
          className="fa-solid fa-xmark text-[23px] cursor-pointer"
          onClick={onClose}
        ></i>
      </div>

      <div className='flex justify-between'>
        <div className='w-[295.5px] h-[440px]'>
          <p className='text-[12px] text-gray-600 px-5 py-3'>Enter email address</p>
          <div className='w-[195px] h-[33px] bg-[#EBF5FF] rounded-lg mx-5 my-0'></div>

          <p className='text-[12px] text-gray-600 px-5 py-5 mt-2'>CC emails</p>
          <div className='w-[195px] h-[33px] bg-[#EBF5FF] rounded-lg mx-5 my-0'></div>

          <p className='text-[12px] text-gray-600 px-5 py-5 mt-2'>Select email template</p>
          <div className='w-[195px] h-[33px] bg-[#EBF5FF] rounded-lg mx-5 my-0'></div>
        </div>

        <div className='w-[295.5px] h-[397px]'>
          <div className='ml-[39px] h-[270px] w-[218px]'>
            <div className='w-[218px] h-8 border-b-2'>
              <p className='text-[11px] py-2 px-2'>Vendor Registration</p>
            </div>
            <div className='w-[218px] text-[11px] ml-2 mt-2 h-36 bg-white'>
              <p>Hi &#123;&#123;Name&#125;&#125;,</p>
              <p className='mt-3'>Hope all is well at your end.</p>
              <p>Pls fill the vendor form shared here with.</p>
              <p className='mt-3'>Thanks for your time and consideration.</p>
              <p className='mt-3'>Best Regards,</p>
            </div>
          </div>

          <p onClick={disToast} className="px-8 h-[34px] cursor-pointer w-[100px] absolute bottom-2 right-2 py-2 rounded-md  text-white text-[14px] bg-[#017194] font-semibold">
            Send
          </p>
        </div>
      </div>
    </div>
  );
};

export default VenderForm;
