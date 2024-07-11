

import React, { useState } from 'react';

const FormInput = ({ id, label, type, value, onChange }) => (
  <div className='flex flex-col mb-6'>
    <input
      type={type}
      id={id}
      placeholder={label}
      value={value}
      onChange={onChange}
      className='p-2 border-none bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300'
    />
  </div>
);

const FormSelect = ({ id, label, value, onChange, options }) => (
  <div className='flex flex-col mb-6'>
    {/* <label htmlFor={id} className='text-lg font-semibold mb-2'>{label}</label> */}
    <label htmlFor={id} className='text-lg font-semibold mb-2 text-[#cccccc]'>{label}</label>
    <select
    placeholder={label}
      id={id}
      className='p-2 border placeholder-gray-500 bg-white rounded-md focus:outline-none text-gray-700 font-medium focus:ring-2 focus:ring-indigo-500 transition duration-300'
      value={value}
      onChange={onChange}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </select>
  </div>
);

const Customer = () => {
  const [step, setStep] = useState(1); // Track current form step
  const [animate, setAnimate] = useState(false);
  const [formState, setFormState] = useState({
    customerName: '',
    customerAddress: '',
    customerGstNo: '',
    companyType: '',
    companyRegNo: '',
    authorizedPersonName: '',
    mobileNo: '',
    alternateContactNo: '',
    mailId: '',
    userId: '',
    password: '',
    files: null,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      files: e.target.files,
    }));
  };

  const nextStep = () => {
    setAnimate(true); 
    setTimeout(() => {
      setStep(step + 1);
      setAnimate(false); 
    }, 1000); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      nextStep();
    } else {
      const formData = new FormData();
      Object.entries(formState).forEach(([key, value]) => {
        if (key === 'files' && value) {
          Array.from(value).forEach((file, index) => {
            formData.append(`file_${index}`, file);
          });
        } else {
          formData.append(key, value);
        }
      });
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
    }
  };

  const fields = [
    { id: 'customerName', label: "Customer Name", type: "text" },
    { id: 'customerAddress', label: "Address Of Customer", type: "text" },
    { id: 'customerGstNo', label: "Customer's GST NO", type: "tel" },
    { id: 'companyRegNo', label: "Company RegNo", type: "tel" },
    { id: 'authorizedPersonName', label: "Authorized Person Name", type: "text" },
    { id: 'mobileNo', label: "Mobile No", type: "tel" },
    { id: 'alternateContactNo', label: "Alternate Contact No", type: "tel" },
    { id: 'mailId', label: "Mail id", type: "email" },
    { id: 'userId', label: "User ID selection option", type: "text" },
    { id: 'password', label: "Password", type: "password" },
  ];


  const companyOptions = [
    { value: 'properitor', label: 'Properitor' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'LLP', label: 'LLP' },
    { value: 'Pvt', label: 'Pvt' },
    { value: 'Ltd', label: 'Ltd' },
  ];

  return (
    <div className='md:flex h-[91.4vh]'>
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

      <div className='flex flex-col w-full md:w-1/3 bg-[#3F51B5] px-10 py-12'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-8 mt-16'>
          {step === 1 && (
            <div className={`flex flex-col p-5 rounded-lg ${animate ? 'animate-fadeoutleft' : ''}`}>
              <h2 className='text-3xl font-mono mb-8 text-[#cccccc]'>Customer Details</h2>
              {fields.slice(0, 3).map((field) => (
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
                  className='flex items-center bg-indigo-500 text-[#cccccc] border border-indigo-700 p-2 rounded-xl text-xl w-32 mt-8 transition duration-300 hover:bg-indigo-600'
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  Next
                </button>
              </center>
            </div>
          )}

          {step === 2 && (
            <div className={`flex flex-col p-5 rounded-lg ${animate ? 'animate-fadeinright' : ''}`}>
              <h2 className='text-3xl font-bold mb-8 text-[#cccccc]'>Company Details</h2>
              <FormSelect
                id="companyType"
                label="Company Type"
                value={formState.companyType}
                onChange={handleChange}
                options={companyOptions}
              />
              {fields.slice(3, 6).map((field) => (
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
                  className='flex items-center bg-indigo-500 text-[#cccccc] border border-indigo-700 p-2 rounded-xl text-xl w-32 mt-8 transition duration-300 hover:bg-indigo-600'
                >
                  Next
                </button>
              </center>
            </div>
          )}

          {step === 3 && (
            <div className={`flex flex-col ${animate ? 'animate-fadeinright' : ''}`}>
              <h2 className='text-3xl font-bold mb-8 text-[#cccccc]'>Contact Details</h2>
              {fields.slice(6, 10).map((field) => (
                <FormInput
                  key={field.id}
                  id={field.id}
                  label={field.label}
                  type={field.type}
                  value={formState[field.id]}
                  onChange={handleChange}
                />
              ))}
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
              <center>
                <button
                  type='submit'
                  className='bg-indigo-500 text-[#cccccc] border border-indigo-700 p-2 rounded-xl text-xl w-32 mt-8 transition duration-300 hover:bg-indigo-600'
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

export default Customer;
