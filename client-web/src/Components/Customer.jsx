// import React, { useState } from 'react';

// const FormInput = ({ id, label, type, value, onChange }) => (
//   <div className='flex flex-col mb-4'>
//     {/* <label htmlFor={id} className='text-lg font-semibold'>{label}</label> */}
//     <input type={type} id={id} placeholder={label} value={value} onChange={onChange} className='p-2 border-none   bg-gray-200' />
//   </div>
// );

// const FormSelect = ({ id, label, value, onChange, options }) => (
//   <div className='flex flex-col mb-4'>
//     <label htmlFor={id} className='text-lg font-semibold'>{label}</label>
//     <select id={id} className='p-2 border  bg-white' value={value} onChange={onChange}>
//       {options.map((option, index) => (
//         <option key={index} value={option.value}>{option.label}</option>
//       ))}
//     </select>
//   </div>
// );

// const Customer = () => {
//   const [step, setStep] = useState(1); // Track current form step
//   const [formState, setFormState] = useState({
//     customerName: '',
//     customerAddress: '',
//     customerGstNo: '',
//     companyType: '',
//     companyRegNo: '',
//     authorizedPersonName: '',
//     mobileNo: '',
//     alternateContactNo: '',
//     mailId: '',
//     userId: '',
//     password: '',
//     files: null,
//   });

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormState((prevState) => ({
//       ...prevState,
//       [id]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFormState((prevState) => ({
//       ...prevState,
//       files: e.target.files,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Proceed to next step on successful form submission
//     if (step < 3) {
//       setStep(step + 1);
//     } else {
//       // Handle final submission logic here
//       const formData = new FormData();
//       Object.entries(formState).forEach(([key, value]) => {
//         if (key === 'files' && value) {
//           Array.from(value).forEach((file, index) => {
//             formData.append(`file_${index}`, file);
//           });
//         } else {
//           formData.append(key, value);
//         }
//       });
//       for (let [key, value] of formData.entries()) {
//         console.log(`${key}: ${value}`);
//       }
//       // Reset formState if needed
//       // setFormState({ ...initialFormState });
//     }
//   };

//   const fields = [
//     { id: 'customerName', label: "Customer Name", type: "text" },
//     { id: 'customerAddress', label: "Address Of Customer", type: "text" },
//     { id: 'customerGstNo', label: "Customer's GST NO", type: "tel" },
//     { id: 'companyRegNo', label: "Company RegNo", type: "tel" },
//     { id: 'authorizedPersonName', label: "Authorized Person Name", type: "text" },
//     { id: 'mobileNo', label: "Mobile No", type: "tel" },
//     { id: 'alternateContactNo', label: "Alternate Contact No", type: "tel" },
//     { id: 'mailId', label: "Mail id", type: "email" },
//     { id: 'userId', label: "User ID selection option", type: "text" },
//     { id: 'password', label: "Password", type: "password" },
//   ];

//   const companyOptions = [
//     { value: 'properitor', label: 'Properitor' },
//     { value: 'partnership', label: 'Partnership' },
//     { value: 'LLP', label: 'LLP' },
//     { value: 'Pvt', label: 'Pvt' },
//     { value: 'Ltd', label: 'Ltd' },
//   ];

//   return (
//     <div className='flex h-1/2'>
//       {/* Left Side - Helolo */}
//       <div className='relative w-2/3'>
//         <img src='/images/lap.jpg' className='w-full brightness-50' alt='Background' />
//         <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white'>
//           <h1 className='text-5xl font-bold'>Bidding Website</h1>
//           <p className='mt-4 text-lg'>
//             This is some text on the left side. This is some text on the left side.
//             This is some text on the left side. This is some text on the left side.
//           </p>
//         </div>
//       </div>

//       {/* Right Side - Form */}
//       <div className='flex flex-col w-full md:w-1/3 mr-10 bg-[#3F51B5] '>
//         <form onSubmit={handleSubmit} className='x mt-3.5 px-10 flex flex-col gap-8 '>
//           {/* Customer Details Section */}
//           {step === 1 && (
//             <div className='flex flex-col  justify-center p-5 rounded-lg'>
//               <h2 className='text-5xl font-bold mb-20 font-sans text-cyan-50 '>Customer Details</h2>
//               {fields.slice(0, 3).map((field) => (
//                 <FormInput
//                   key={field.id}
//                   id={field.id}
//                   label={field.label}
//                   type={field.type}
//                   value={formState[field.id]}
//                   onChange={handleChange}
//                 />
//               ))}
//               <center>
//             {step < 3 ? (
//               <button type='button' onClick={() => setStep(step + 1)} className=' flex flex-row bg-[#3F51B5] text-white border-2 border-slate-300 p-1 rounded-xl text-xl w-32 mt-16 mx-auto items-center'>
            
              
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                 </svg>
//                 <p>Next</p>
                
//               </button>
//             ) : (
//               <button type='submit' className='bg-[#3F51B5] text-white p-2 rounded-xl border-2 border-slate-300 text-xl w-40 mt-16 mx-auto'>Submit</button>
//             )}
//           </center>
//             </div>
//           )}

//           {/* Company Details Section */}
//           {step === 2 && (
//             <div className='flex flex-col'>
//               <h2 className='text-2xl font-bold mb-4'>Company Details</h2>
//               <FormSelect
//                 id="companyType"
//                 label="Company Type"
//                 value={formState.companyType}
//                 onChange={handleChange}
//                 options={companyOptions}
//               />
//               {fields.slice(3, 6).map((field) => (
//                 <FormInput
//                   key={field.id}
//                   id={field.id}
//                   label={field.label}
//                   type={field.type}
//                   value={formState[field.id]}
//                   onChange={handleChange}
//                 />
//               ))}
//               <center>
//             {step < 3 ? (
//               <button type='button' onClick={() => setStep(step + 1)} className='bg-[#3F51B5] text-white p-3 rounded-xl text-xl w-40 mt-16 mx-auto'>Next</button>
//             ) : (
//               <button type='submit' className='bg-[#3F51B5] text-white p-3 rounded-xl text-xl w-40 mt-16 mx-auto'>Submit</button>
//             )}
//           </center>
//             </div>
//           )}

//           {/* Contact Details Section */}
//           {step === 3 && (
//             <div className='flex flex-col'>
//               <h2 className='text-2xl font-bold mb-4'>Contact Details</h2>
//               {fields.slice(6, 10).map((field) => (
//                 <FormInput
//                   key={field.id}
//                   id={field.id}
//                   label={field.label}
//                   type={field.type}
//                   value={formState[field.id]}
//                   onChange={handleChange}
//                 />
//               ))}
//               <div className='flex flex-col mb-4'>
//                 <label htmlFor="upload" className='text-lg font-semibold'>Upload your document (GST, MSME, etc..)</label>
//                 <label className='flex gap-1 h-12 w-40 mt-2 justify-center bg-transparent border border-gray-500 rounded-2xl px-7 items-center text-xl cursor-pointer'>
//                   <input multiple type="file" className='hidden' onChange={handleFileChange} />
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
//                   </svg>
//                   Upload
//                 </label>
//               </div>
             
//             </div>
//           )}

          
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Customer;
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
    <label htmlFor={id} className='text-lg font-semibold mb-2'>{label}</label>
    <select
      id={id}
      className='p-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300'
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
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
    <div className='flex h-screen'>
      <div className='relative w-2/3'>
        <img src='/images/lap.jpg' className='w-full brightness-50 h-full object-cover' alt='Background' />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white'>
          <h1 className='text-5xl font-bold font-sans'>Bidding Website</h1>
          <p className='mt-4 text-lg font-light'>
            This is some text on the left side. This is some text on the left side.
            This is some text on the left side. This is some text on the left side.
          </p>
        </div>
      </div>

      <div className='flex flex-col w-full md:w-1/3 bg-[#3F51B5] px-10 py-12'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-8 mt-16'>
          {step === 1 && (
            <div className='flex flex-col p-5 rounded-lg'>
              <h2 className='text-3xl font-mono mb-8 text-white'>Customer Details</h2>
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
                  onClick={() => setStep(step + 1)}
                  className='flex items-center bg-indigo-500 text-white border border-indigo-700 p-2 rounded-xl text-xl w-32 mt-8 transition duration-300 hover:bg-indigo-600'
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
            <div className='flex flex-col'>
              <h2 className='text-3xl font-bold mb-8 text-white'>Company Details</h2>
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
                  onClick={() => setStep(step + 1)}
                  className='flex items-center bg-indigo-500 text-white border border-indigo-700 p-2 rounded-xl text-xl w-32 mt-8 transition duration-300 hover:bg-indigo-600'
                >
                  Next
                </button>
              </center>
            </div>
          )}

          {step === 3 && (
            <div className='flex flex-col'>
              <h2 className='text-3xl font-bold mb-8 text-white'>Contact Details</h2>
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
                <label htmlFor="upload" className='text-lg font-semibold mb-2 text-white'>Upload your document (GST, MSME, etc..)</label>
                <label className='flex gap-1 h-12 w-40 mt-2 justify-center bg-transparent border border-gray-300 rounded-2xl px-7 items-center text-xl text-white cursor-pointer hover:border-indigo-500 transition duration-300'>
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
                  className='bg-indigo-500 text-white border border-indigo-700 p-2 rounded-xl text-xl w-32 mt-8 transition duration-300 hover:bg-indigo-600'
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
