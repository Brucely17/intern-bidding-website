
import React, { useState } from 'react';

const FormInput = ({ id, label, type, value, onChange }) => (
  <div className='flex flex-col mb-6 mr-4 relative'>
    <label htmlFor={id} className='text-lg font-semibold mb-2 text-[#cccccc] '>{label}</label>
    <input
      type={type}
      id={id}
      placeholder={label}
      value={value}
      onChange={onChange}
      className='p-2 border-none bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 placeholder-gray-500' // Adjust placeholder color
    />
  </div>
);

const FormSelect = ({ id, label, value, onChange, options }) => (
  <div className='flex flex-col mb-6'>
    <label htmlFor={id} className='text-lg font-semibold mb-2 text-[#cccccc]'>{label}</label>
    <select
      id={id}
      className='p-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 text-gray-700 placeholder-gray-500 font-medium' // Adjust font and placeholder color
      value={value}
      onChange={onChange}
    >
      <option value="" disabled className="text-gray-500">Select {label}</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </select>
  </div>
);

const Vendor = () => {
  const [step, setStep] = useState(1); 
  const [animate, setAnimate] = useState(false);
  const [formState, setFormState] = useState({
    willingToSell: '',
    vendorBankDetails: {
      accountName: '',
      accountNo: '',
      bankName: '',
      ifscCode: '',
      branch: '',
    },
    yearOfRegistration: '',
    documents: null,
    vendorType: '',
    subCategory: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id.startsWith('vendorBankDetails.')) {
      const nestedField = id.split('.')[1];
      setFormState((prevState) => ({
        ...prevState,
        vendorBankDetails: {
          ...prevState.vendorBankDetails,
          [nestedField]: value,
        },
      }));
    } else {
      setFormState((prevState) => ({
        ...prevState,
        [id]: value,
      }));
    }
  };

  const nextStep = () => {
    setAnimate(true); 
    setTimeout(() => {
      setStep(step + 1);
      setAnimate(false); 
    }, 1000); 
  };

  const handleFileChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      documents: e.target.files,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form State:', formState);
  };

  const vendorFields = [
    { id: 'willingToSell', label: 'Willing to sell the products', type: 'text' },
    { id: 'vendorBankDetails.accountName', label: 'Account Name', type: 'text' },
    { id: 'vendorBankDetails.accountNo', label: 'Account No', type: 'text' },
    { id: 'vendorBankDetails.bankName', label: 'Bank Name', type: 'text' },
    { id: 'vendorBankDetails.ifscCode', label: 'IFSC Code', type: 'text' },
    { id: 'vendorBankDetails.branch', label: 'Branch', type: 'text' },
    { id: 'yearOfRegistration', label: 'Year of Registration', type: 'text' },
  ];

  const vendorTypeOptions = [
    { value: 'IT', label: 'IT' },
    { value: 'Electrical', label: 'Electrical' },
    { value: 'Electronics', label: 'Electronics' },
    { value: 'Furniture', label: 'Furniture' },
    { value: 'Civil', label: 'Civil' },
    { value: 'Infrastructure', label: 'Infrastructure' },
    { value: 'Others', label: 'Others' },
  ];

  const subCategoryOptions = [
    { value: 'Option1', label: 'Option 1' },
    { value: 'Option2', label: 'Option 2' },
    { value: 'Option3', label: 'Option 3' },
  ];

  return (
<<<<<<< HEAD
    <div className='md:flex h-screen'>
=======
    <div className='md:flex h-[92vh]'>
>>>>>>> origin/main
    
      <div className='relative md:w-2/3'>
        <img src='/images/lap.jpg' className='w-full brightness-50 h-full object-cover' alt='Background' />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-[#cccccc]'>
          <h1 className='md:text-5xl text-2xl font-bold font-sans'>Bidding Website</h1>
          <p className='mt-4 md:text-lg text-sm font-light'>
            This is some text on the left side. This is some text on the left side.
            This is some text on the left side. This is some text on the left side.
          </p>
        </div>
      </div>

<<<<<<< HEAD
      <div className='flex flex-col w-full md:w-1/3 bg-[#3F51B5] px-10 min-h-[65vh] md:h-full pt-44 py-12'>
=======
      <div className='flex flex-col w-full md:w-1/3 bg-[#3F51B5] px-10 min-h-[65vh] md:h-full py-12'>
>>>>>>> origin/main
        <form onSubmit={handleSubmit} className='flex flex-col gap-8 mt-16'>
          {step === 1 && (
            <div className={`flex flex-col p-5 rounded-lg ${animate ? 'animate-fadeoutleft' : ''}`}>
              <h2 className='text-3xl font-mono mb-8 text-[#cccccc]'>Vendor Details</h2>
              {vendorFields.slice(0, 1).map((field) => (
                <FormInput
                  key={field.id}
                  id={field.id}
                  label={field.label}
                  type={field.type}
                  value={formState[field.id]}
                  onChange={handleChange}
                />
              ))}
              <center>
                <button
                  type='button'
                  onClick={nextStep}
<<<<<<< HEAD
                  className=' bg-indigo-500 text-[#cccccc] border border-indigo-700 p-2 rounded-xl text-xl w-32 mt-8 transition duration-300 hover:bg-indigo-600'
=======
                  className='flex items-center bg-indigo-500 text-[#cccccc] border border-indigo-700 p-2 rounded-xl text-xl w-32 mt-8 transition duration-300 hover:bg-indigo-600'
>>>>>>> origin/main
                >
                  Next
                 
                </button>
              </center>
            </div>
          )}

<<<<<<< HEAD
          {step === 2 && (
            <div className={`flex flex-col rounded-lg `}>
            <h2 className='text-3xl font-bold mb-4  text-[#cccccc]  '>Bank Details</h2>
            <div className='flex flex-col max-h-[500px] overflow-y-auto'> 
              {vendorFields.slice(1, 7).map((field) => (
                <FormInput
                  key={field.id}
                  id={field.id}
                  label={field.label}
                  type={field.type}
                  value={field.id.startsWith('vendorBankDetails') ? formState.vendorBankDetails[field.id.split('.')[1]] : formState[field.id]}
                  onChange={handleChange}
                />

              ))}
              <center className='flex justify-center gap-10'>
                <button
                  type='button'
                  onClick={() => setStep(step - 1)}
                  className=' bg-indigo-500 text-[#cccccc] border border-indigo-700 p-2 rounded-xl text-xl w-32 mt-8 transition duration-300 hover:bg-indigo-600'
                >
                  Back
                </button>
                <button
                  type='button'
                  onClick={() => setStep(step + 1)}
                  className=' bg-indigo-500 text-[#cccccc] border border-indigo-700 p-2 rounded-xl text-xl w-32 mt-8 transition duration-300 hover:bg-indigo-600'
                >
                  Next
                </button>
              </center>
            </div>
            </div>
          )}

          {step === 3 && (
=======
          
    {step === 2 && (
             <>
             <h2 className='text-3xl font-bold mb-2  text-white  '>Bank Details</h2>
             <div className='flex flex-col max-h-[320px] overflow-y-auto'> 
              
               {vendorFields.slice(1, 7).map((field) => (
                 <FormInput
                   key={field.id}
                   id={field.id}
                   label={field.label}
                   type={field.type}
                   value={field.id.startsWith('vendorBankDetails') ? formState.vendorBankDetails[field.id.split('.')[1]] : formState[field.id]}
                   onChange={handleChange}
                 />

               ))}
               
             </div>
             <center>
                 <button
                   type='button'
                   onClick={() => setStep(step + 1)}
                   className='flex items-center bg-indigo-500 text-white border border-indigo-700 p-2 rounded-xl text-xl w-32 mt-8 transition duration-300 hover:bg-indigo-600'
                 >
                   Next
                   <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                 </button>
               </center>
           </>
        )}
{step === 3 && (
>>>>>>> origin/main
            <div className={`flex flex-col ${animate ? 'animate-fadeinright' : ''}`}>
              <h2 className='text-3xl font-bold mb-8 text-[#cccccc]'>Additional Details</h2>
              <FormSelect
                id="vendorType"
                label="Vendor Type"
                value={formState.vendorType}
                onChange={handleChange}
                options={vendorTypeOptions}
              />
              <FormSelect
                id="subCategory"
                label="Sub Category Option"
                value={formState.subCategory}
                onChange={handleChange}
                options={subCategoryOptions}
              />
              <div className='flex flex-col mb-4'>
                <label htmlFor="upload" className='text-lg font-semibold mb-2 text-[#cccccc]'>Upload your document (GST, MSME, etc..)</label>
                <label className='flex gap-1 h-12 w-40 mt-2 justify-center bg-transparent border border-gray-300 rounded-2xl px-7 items-center text-xl text-[#cccccc] cursor-pointer hover:border-indigo-500 transition duration-300'>
                  <input multiple type="file" className='hidden' onChange={handleFileChange} />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                  </svg>
                  Upload
                </label>
              </div>
              <center className='flex justify-center gap-10'>
              <button
              onClick={() => setStep(step - 1)}
                  type='submit'
                  className='flex items-center bg-indigo-500 text-[#cccccc] border border-indigo-700 p-2 rounded-xl text-xl w-32 mt-8 transition duration-300 hover:bg-indigo-600'
                >
                  Back
                </button>
                <button
                  type='submit'
                  className='flex items-center bg-indigo-500 text-[#cccccc] border border-indigo-700 p-2 rounded-xl text-xl w-32 mt-8 transition duration-300 hover:bg-indigo-600'
                >
                  Submit
                </button>
              </center>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Vendor;