import React from 'react'
import { RxCrossCircled } from "react-icons/rx";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CiSearch } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";

const Menu = () => {

  const data1=[{
       "itemname":"Starter combo (12)",
       "status":"true",
  },
  {
    "itemname":"Starter combo (12)",
    "status":"true",
},
{
  "itemname":"Starter combo (12)",
  "status":"true",
},
{
  "itemname":"Starter combo (12)",
  "status":"true",
},
{
  "itemname":"Starter combo (12)",
  "status":"true",
},]


  const [switc, setswitch] = useState(false);

  const switch1 = () => {
      setswitch(!switc);
  }

  const [formData, setFormData] = useState({
    productName: '',
    productPrice: '',
    isVeg: '',
    category: '',
    description: '',
    productImage: null, // Added image state
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
      productImage: type === 'file' ? files[0] : prevData.productImage,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log('Form submitted:', formData);
  };

  function openPopup() {
    document.getElementById('popup').style.display = "block";


  }
  function closePopup() {
    document.getElementById('popup').style.display = "none";


  }

  function openPopup1() {
    document.getElementById('popup1').style.display = "block";
  

  }
  function closePopup1() {
    document.getElementById('popup1').style.display = "none";


  }



  return (

    <div id='menu' className='w-full h-fit relative px-'>

      {/* QR code popup */}
      <motion.div id="popup" whileInView={{ y: [400, 0] }} transition={{ duration: .5, type: "tween" }} className='sm:w-[500px] sm:h-[500px] w-full h-fit  sm:left-[30%] fixed bg-[#FFFFFF] hidden  z-40 mt-[80px] rounded-2xl sm:p-4 p-4'>
        <div className='flex  items-center justify-between font-Roboto sm:text-[1.2rem] text-[1.5rem] text-[#0F172A] px-4 mt-2 border-b-2 mb-4 pb-2'>
          <p>Add Menu item</p>
          <RxCrossCircled onClick={closePopup} className='cursor-pointer text-[1.9rem]' />
        </div>
        <form className='flex flex-col gap-3 w-full h-full px-3 text-[#0F172A] font-inter sm:text-[.95rem]  overflow-y-scroll' onSubmit={handleFormSubmit}>
          <div className=' flex flex-col  w-[50%]'>
            <p>item image*</p>
            <p className='text-[#64748B] text-[.8rem]'>Image format .jpg .jpeg .png and minimum size 300 x 300px</p>
            <div className='size-[130px] mt-2 bg-[#F8FAFC] rounded-md flex items-center justify-center relative '>
              <img src="/icon.png" alt="" />
              <input
                className='text-[#F8FAFC] absolute ml-[165%] mt-[75%]'
                type="file"
                id="productImage"
                name="productImage"
                accept="image/*"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className='flex sm:flex-row flex-col w-full gap-2 '>
            <div>
              <label htmlFor="productName">Product Name:</label>
              <input
                className='border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full'
                type="text"
                id="productName"
                name="productName"
                value={formData.productName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="productPrice">Product Price:</label>
              <input
                className='border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full'
                type="number"
                id="productPrice"
                name="productPrice"
                value={formData.productPrice}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className='flex sm:flex-row flex-col w-full gap-2'>
            <div>
              <label htmlFor="isVeg">Veg/Non-Veg:</label>
              <select
                className='border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full'
                id="isVeg"
                name="isVeg"
                value={formData.isVeg}
                onChange={handleInputChange}
              >
                <option value="">Select an option</option>
                <option value="Veg">Veg</option>
                <option value="Non-Veg">Non-Veg</option>
              </select>
            </div>
            <div>
              <label htmlFor="category">Category:</label>
              <select
                className='border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full'
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              >
                <option value="">Select a category</option>
                <option value="Fruits">Fruits</option>
                <option value="Vegetables">Vegetables</option>
                {/* Add more categories as needed */}
              </select>
            </div>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="description">Description:</label>
            <textarea
              className='border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full h-[70px]'
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
          <div className='flex gap-2 w-full '>
            <button className='text-[white] bg-[#004AAD] py-3 rounded-md flex w-full justify-center items-center '>Cancel</button>
            <button className='text-[white] bg-[#004AAD] py-3 rounded-md flex w-full justify-center items-center ' type="submit">Submit</button>
          </div>

        </form>


      </motion.div>

      {/* Add Category popup */}
      <motion.div id="popup1" whileInView={{ y: [400, 0] }} transition={{ duration: .5, type: "tween" }} className='sm:w-[500px] sm:h-[500px] w-full h-fit  sm:left-[30%] fixed bg-[#FFFFFF] hidden  z-40 mt-[80px] rounded-2xl sm:p-4 p-4'>
        <div className='flex  items-center justify-between font-Roboto sm:text-[1.2rem] text-[1.5rem] text-[#0F172A] px-4 mt-2 border-b-2 mb-4 pb-2'>
          <p>Add Category</p>
          <RxCrossCircled onClick={closePopup1} className='cursor-pointer text-[1.9rem]' />
        </div>

        <div className='w-full h-fit px-3 flex flex-col gap-4 border-b-2  py-4'>
          <p>Create New Category</p>
          <div className='flex justify-between gap-3'>
            <input className='px-2 py-2 border w-[80%] border-[#E2E8F0] rounded-md'
            type="text"  />
            <button className='px-4 py-2 bg-[#004AAD] text-white rounded-xl' >Create</button>
          </div>
        </div>

        <div className='flex w-full px-4 flex-col py-4 '>
          <p>All catagories</p>
          <div className='flex flex-col gap-2 my-4 '>
           {data1.map((item,index)=>(
            <div key={index} className='flex border font-semibold border-[#E2E8F0] justify-between py-2 px-4 rounded-md items-center'>
              <p className='sm:text-[1.2rem] text-[1.4rem]'>{item.itemname}</p>
              <div className='flex gap-6'>
              <RiDeleteBinLine />
              <RiDeleteBinLine className='text-[#004AAD] text-[1.5rem]' />
              </div>

            </div>
           ))}
            

          </div>

        </div>
        


      </motion.div>


      <div className='  w-full  h-[80px] z-10 bg-[#FDE030] mt-[70px] flex justify-between items-center px-5 sm:px-12   '>
        <div>
          <p className='text-[1.6rem] font-semibold'>Menu</p>
          <p className='text-[.9rem]'>Manage your menu item here</p>
        </div>

        <div className='flex gap-5 '>

          <button onClick={openPopup} className='bg-[#004AAD] px-5 py-1.5 rounded-md border text-[.9rem] font-Roboto  border-[#000000B2] text-white'> +  Add Menu</button>
        </div>


      </div>
      <div className='w-full h-fit  mt-[10px] px-12   '>

        <div className='bg-white px-3 flex flex-col gap-6 sm:py-5 py-2'>


          <div className='w-full h-fit flex sm:flex-row flex-col gap-2 sm:my-1 my-4  items-center justify-between   '>
            <div className='relative sm:w-[35%] w-full flex items-center rounded-md border border-[#407fd1]  '>
              <input
                className='w-full sm:py-2 py-4 px-8 rounded-lg'
                type="text"
                placeholder='Search menu ...'
              />
              <CiSearch className='absolute text-[1.3rem] font-semibold ml-2 ' />
            </div>
            <div className='flex gap-4 items-center justify-evenly text-[#64748B]'>
              <button className='px-5 sm:py-2 py-4 rounded-md border border-[#407fd1]' onClick={openPopup1}>All Categories</button>
              <button className='px-5 sm:py-2 py-4 rounded-md border border-[#407fd1]'>+ Add Category</button>
            </div>
          </div>

          <div className='w-full h-fit font-Roboto text-[1.3rem] sm:px-6 border-t-2'>

            {/* course indian 1*/}
            <div className='flex justify-between items-center  w-full mt-4 '>
              <p>Main Course Indian (12)</p>
              <img className='sm:size-5 size-4 mr-5' src="/Vector (2).png" alt="" />
            </div>
            
            <div className='w-full h-fit grid sm:grid-cols-3 gap-3 my-8'>
              {/* 1 */}
              <div className=' w-full h-[200px] border border-[#0000007D] p-3 rounded-md flex flex-col justify-evenly gap-1'>
                <div className='flex justify-between'>
                  <p className='font-inter'>Hulk Beast Burger</p>
                  {
                                switc ?
                                    <div className='w-[40px] h-[22px] bg-slate-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-1' onClick={switch1}></div>
                                    </div> :
                                    <div className='w-[40px] h-[22px] bg-green-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-5' onClick={switch1}></div>
                                    </div>
                            }

                </div>
                <div className='flex w-full'>
                  <div className='w-[70%]'>
                    <img src="Group 1171277690.png" alt="" />
                    <p className='text-[#0F172A] font-inter text-[.75rem]'>Hulk Beast burger is one of the signature dishes in this cafe ,stuffed double paty chicken with mouth watering sauce flavour</p>
                  </div>
                  <div className='w-[30%] flex items-center justify-center bg-[#F8FAFC] rounded-md'>
                    <img className='size-16' src="/image.png" alt="" />
                  </div>

                </div>

                <div className='flex justify-between font-Roboto'>
                  <p className='text-[1.1rem]'>₹399.00</p>
                  <button className='border border-[#0000007D] px-2 rounded-md text-[.9rem]'>Edit</button>
                </div>
              </div>

              {/* for delete when map is use */}
              <div className=' w-full h-[200px] border border-[#0000007D] p-3 rounded-md flex flex-col justify-evenly gap-1'>
                <div className='flex justify-between'>
                  <p className='font-inter'>Hulk Beast Burger</p>
                  {
                                switc ?
                                    <div className='w-[40px] h-[22px] bg-slate-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-1' onClick={switch1}></div>
                                    </div> :
                                    <div className='w-[40px] h-[22px] bg-green-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-5' onClick={switch1}></div>
                                    </div>
                            }

                </div>
                <div className='flex w-full'>
                  <div className='w-[70%]'>
                    <img src="Group 1171277690.png" alt="" />
                    <p className='text-[#0F172A] font-inter text-[.75rem]'>Hulk Beast burger is one of the signature dishes in this cafe ,stuffed double paty chicken with mouth watering sauce flavour</p>
                  </div>
                  <div className='w-[30%] flex items-center justify-center bg-[#F8FAFC] rounded-md'>
                    <img className='size-16' src="/image.png" alt="" />
                  </div>

                </div>

                <div className='flex justify-between font-Roboto'>
                  <p className='text-[1.1rem]'>₹399.00</p>
                  <button className='border border-[#0000007D] px-2 rounded-md text-[.9rem]'>Edit</button>
                </div>
              </div><div className=' w-full h-[200px] border border-[#0000007D] p-3 rounded-md flex flex-col justify-evenly gap-1'>
                <div className='flex justify-between'>
                  <p className='font-inter'>Hulk Beast Burger</p>
                  {
                                switc ?
                                    <div className='w-[40px] h-[22px] bg-slate-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-1' onClick={switch1}></div>
                                    </div> :
                                    <div className='w-[40px] h-[22px] bg-green-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-5' onClick={switch1}></div>
                                    </div>
                            }

                </div>
                <div className='flex w-full'>
                  <div className='w-[70%]'>
                    <img src="Group 1171277690.png" alt="" />
                    <p className='text-[#0F172A] font-inter text-[.75rem]'>Hulk Beast burger is one of the signature dishes in this cafe ,stuffed double paty chicken with mouth watering sauce flavour</p>
                  </div>
                  <div className='w-[30%] flex items-center justify-center bg-[#F8FAFC] rounded-md'>
                    <img className='size-16' src="/image.png" alt="" />
                  </div>

                </div>

                <div className='flex justify-between font-Roboto'>
                  <p className='text-[1.1rem]'>₹399.00</p>
                  <button className='border border-[#0000007D] px-2 rounded-md text-[.9rem]'>Edit</button>
                </div>
              </div><div className=' w-full h-[200px] border border-[#0000007D] p-3 rounded-md flex flex-col justify-evenly gap-1'>
                <div className='flex justify-between'>
                  <p className='font-inter'>Hulk Beast Burger</p>
                  {
                                switc ?
                                    <div className='w-[40px] h-[22px] bg-slate-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-1' onClick={switch1}></div>
                                    </div> :
                                    <div className='w-[40px] h-[22px] bg-green-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-5' onClick={switch1}></div>
                                    </div>
                            }

                </div>
                <div className='flex w-full'>
                  <div className='w-[70%]'>
                    <img src="Group 1171277690.png" alt="" />
                    <p className='text-[#0F172A] font-inter text-[.75rem]'>Hulk Beast burger is one of the signature dishes in this cafe ,stuffed double paty chicken with mouth watering sauce flavour</p>
                  </div>
                  <div className='w-[30%] flex items-center justify-center bg-[#F8FAFC] rounded-md'>
                    <img className='size-16' src="/image.png" alt="" />
                  </div>

                </div>

                <div className='flex justify-between font-Roboto'>
                  <p className='text-[1.1rem]'>₹399.00</p>
                  <button className='border border-[#0000007D] px-2 rounded-md text-[.9rem]'>Edit</button>
                </div>
              </div><div className=' w-full h-[200px] border border-[#0000007D] p-3 rounded-md flex flex-col justify-evenly gap-1'>
                <div className='flex justify-between'>
                  <p className='font-inter'>Hulk Beast Burger</p>
                  {
                                switc ?
                                    <div className='w-[40px] h-[22px] bg-slate-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-1' onClick={switch1}></div>
                                    </div> :
                                    <div className='w-[40px] h-[22px] bg-green-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-5' onClick={switch1}></div>
                                    </div>
                            }

                </div>
                <div className='flex w-full'>
                  <div className='w-[70%]'>
                    <img src="Group 1171277690.png" alt="" />
                    <p className='text-[#0F172A] font-inter text-[.75rem]'>Hulk Beast burger is one of the signature dishes in this cafe ,stuffed double paty chicken with mouth watering sauce flavour</p>
                  </div>
                  <div className='w-[30%] flex items-center justify-center bg-[#F8FAFC] rounded-md'>
                    <img className='size-16' src="/image.png" alt="" />
                  </div>

                </div>

                <div className='flex justify-between font-Roboto'>
                  <p className='text-[1.1rem]'>₹399.00</p>
                  <button className='border border-[#0000007D] px-2 rounded-md text-[.9rem]'>Edit</button>
                </div>
              </div><div className=' w-full h-[200px] border border-[#0000007D] p-3 rounded-md flex flex-col justify-evenly gap-1'>
                <div className='flex justify-between'>
                  <p className='font-inter'>Hulk Beast Burger</p>
                  {
                                switc ?
                                    <div className='w-[40px] h-[22px] bg-slate-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-1' onClick={switch1}></div>
                                    </div> :
                                    <div className='w-[40px] h-[22px] bg-green-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-5' onClick={switch1}></div>
                                    </div>
                            }

                </div>
                <div className='flex w-full'>
                  <div className='w-[70%]'>
                    <img src="Group 1171277690.png" alt="" />
                    <p className='text-[#0F172A] font-inter text-[.75rem]'>Hulk Beast burger is one of the signature dishes in this cafe ,stuffed double paty chicken with mouth watering sauce flavour</p>
                  </div>
                  <div className='w-[30%] flex items-center justify-center bg-[#F8FAFC] rounded-md'>
                    <img className='size-16' src="/image.png" alt="" />
                  </div>

                </div>

                <div className='flex justify-between font-Roboto'>
                  <p className='text-[1.1rem]'>₹399.00</p>
                  <button className='border border-[#0000007D] px-2 rounded-md text-[.9rem]'>Edit</button>
                </div>
              </div>

            </div>

            {/* course indian 2*/}
            <div className='flex justify-between items-center  w-full mt-4 '>
              <p>Main Course Indian (12)</p>
              <img className='sm:size-5 size-4 mr-5' src="/Vector (2).png" alt="" />
            </div>
            
            <div className='w-full h-fit grid sm:grid-cols-3 gap-3 my-8'>
              {/* 1 */}
              <div className=' w-full h-[200px] border border-[#0000007D] p-3 rounded-md flex flex-col justify-evenly gap-1'>
                <div className='flex justify-between'>
                  <p className='font-inter'>Hulk Beast Burger</p>
                  {
                                switc ?
                                    <div className='w-[40px] h-[22px] bg-slate-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-1' onClick={switch1}></div>
                                    </div> :
                                    <div className='w-[40px] h-[22px] bg-green-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-5' onClick={switch1}></div>
                                    </div>
                            }

                </div>
                <div className='flex w-full'>
                  <div className='w-[70%]'>
                    <img src="Group 1171277690.png" alt="" />
                    <p className='text-[#0F172A] font-inter text-[.75rem]'>Hulk Beast burger is one of the signature dishes in this cafe ,stuffed double paty chicken with mouth watering sauce flavour</p>
                  </div>
                  <div className='w-[30%] flex items-center justify-center bg-[#F8FAFC] rounded-md'>
                    <img className='size-16' src="/image.png" alt="" />
                  </div>

                </div>

                <div className='flex justify-between font-Roboto'>
                  <p className='text-[1.1rem]'>₹399.00</p>
                  <button className='border border-[#0000007D] px-2 rounded-md text-[.9rem]'>Edit</button>
                </div>
              </div>

              {/* for delete when map is use */}
              <div className=' w-full h-[200px] border border-[#0000007D] p-3 rounded-md flex flex-col justify-evenly gap-1'>
                <div className='flex justify-between'>
                  <p className='font-inter'>Hulk Beast Burger</p>
                  {
                                switc ?
                                    <div className='w-[40px] h-[22px] bg-slate-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-1' onClick={switch1}></div>
                                    </div> :
                                    <div className='w-[40px] h-[22px] bg-green-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-5' onClick={switch1}></div>
                                    </div>
                            }

                </div>
                <div className='flex w-full'>
                  <div className='w-[70%]'>
                    <img src="Group 1171277690.png" alt="" />
                    <p className='text-[#0F172A] font-inter text-[.75rem]'>Hulk Beast burger is one of the signature dishes in this cafe ,stuffed double paty chicken with mouth watering sauce flavour</p>
                  </div>
                  <div className='w-[30%] flex items-center justify-center bg-[#F8FAFC] rounded-md'>
                    <img className='size-16' src="/image.png" alt="" />
                  </div>

                </div>

                <div className='flex justify-between font-Roboto'>
                  <p className='text-[1.1rem]'>₹399.00</p>
                  <button className='border border-[#0000007D] px-2 rounded-md text-[.9rem]'>Edit</button>
                </div>
              </div><div className=' w-full h-[200px] border border-[#0000007D] p-3 rounded-md flex flex-col justify-evenly gap-1'>
                <div className='flex justify-between'>
                  <p className='font-inter'>Hulk Beast Burger</p>
                  {
                                switc ?
                                    <div className='w-[40px] h-[22px] bg-slate-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-1' onClick={switch1}></div>
                                    </div> :
                                    <div className='w-[40px] h-[22px] bg-green-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-5' onClick={switch1}></div>
                                    </div>
                            }

                </div>
                <div className='flex w-full'>
                  <div className='w-[70%]'>
                    <img src="Group 1171277690.png" alt="" />
                    <p className='text-[#0F172A] font-inter text-[.75rem]'>Hulk Beast burger is one of the signature dishes in this cafe ,stuffed double paty chicken with mouth watering sauce flavour</p>
                  </div>
                  <div className='w-[30%] flex items-center justify-center bg-[#F8FAFC] rounded-md'>
                    <img className='size-16' src="/image.png" alt="" />
                  </div>

                </div>

                <div className='flex justify-between font-Roboto'>
                  <p className='text-[1.1rem]'>₹399.00</p>
                  <button className='border border-[#0000007D] px-2 rounded-md text-[.9rem]'>Edit</button>
                </div>
              </div><div className=' w-full h-[200px] border border-[#0000007D] p-3 rounded-md flex flex-col justify-evenly gap-1'>
                <div className='flex justify-between'>
                  <p className='font-inter'>Hulk Beast Burger</p>
                  {
                                switc ?
                                    <div className='w-[40px] h-[22px] bg-slate-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-1' onClick={switch1}></div>
                                    </div> :
                                    <div className='w-[40px] h-[22px] bg-green-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-5' onClick={switch1}></div>
                                    </div>
                            }

                </div>
                <div className='flex w-full'>
                  <div className='w-[70%]'>
                    <img src="Group 1171277690.png" alt="" />
                    <p className='text-[#0F172A] font-inter text-[.75rem]'>Hulk Beast burger is one of the signature dishes in this cafe ,stuffed double paty chicken with mouth watering sauce flavour</p>
                  </div>
                  <div className='w-[30%] flex items-center justify-center bg-[#F8FAFC] rounded-md'>
                    <img className='size-16' src="/image.png" alt="" />
                  </div>

                </div>

                <div className='flex justify-between font-Roboto'>
                  <p className='text-[1.1rem]'>₹399.00</p>
                  <button className='border border-[#0000007D] px-2 rounded-md text-[.9rem]'>Edit</button>
                </div>
              </div><div className=' w-full h-[200px] border border-[#0000007D] p-3 rounded-md flex flex-col justify-evenly gap-1'>
                <div className='flex justify-between'>
                  <p className='font-inter'>Hulk Beast Burger</p>
                  {
                                switc ?
                                    <div className='w-[40px] h-[22px] bg-slate-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-1' onClick={switch1}></div>
                                    </div> :
                                    <div className='w-[40px] h-[22px] bg-green-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-5' onClick={switch1}></div>
                                    </div>
                            }

                </div>
                <div className='flex w-full'>
                  <div className='w-[70%]'>
                    <img src="Group 1171277690.png" alt="" />
                    <p className='text-[#0F172A] font-inter text-[.75rem]'>Hulk Beast burger is one of the signature dishes in this cafe ,stuffed double paty chicken with mouth watering sauce flavour</p>
                  </div>
                  <div className='w-[30%] flex items-center justify-center bg-[#F8FAFC] rounded-md'>
                    <img className='size-16' src="/image.png" alt="" />
                  </div>

                </div>

                <div className='flex justify-between font-Roboto'>
                  <p className='text-[1.1rem]'>₹399.00</p>
                  <button className='border border-[#0000007D] px-2 rounded-md text-[.9rem]'>Edit</button>
                </div>
              </div><div className=' w-full h-[200px] border border-[#0000007D] p-3 rounded-md flex flex-col justify-evenly gap-1'>
                <div className='flex justify-between'>
                  <p className='font-inter'>Hulk Beast Burger</p>
                  {
                                switc ?
                                    <div className='w-[40px] h-[22px] bg-slate-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-1' onClick={switch1}></div>
                                    </div> :
                                    <div className='w-[40px] h-[22px] bg-green-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-5' onClick={switch1}></div>
                                    </div>
                            }

                </div>
                <div className='flex w-full'>
                  <div className='w-[70%]'>
                    <img src="Group 1171277690.png" alt="" />
                    <p className='text-[#0F172A] font-inter text-[.75rem]'>Hulk Beast burger is one of the signature dishes in this cafe ,stuffed double paty chicken with mouth watering sauce flavour</p>
                  </div>
                  <div className='w-[30%] flex items-center justify-center bg-[#F8FAFC] rounded-md'>
                    <img className='size-16' src="/image.png" alt="" />
                  </div>

                </div>

                <div className='flex justify-between font-Roboto'>
                  <p className='text-[1.1rem]'>₹399.00</p>
                  <button className='border border-[#0000007D] px-2 rounded-md text-[.9rem]'>Edit</button>
                </div>
              </div>

            </div>

            {/* course indian 3*/}
            <div className='flex justify-between items-center  w-full mt-4 '>
              <p>Main Course Indian (12)</p>
              <img className='sm:size-5 size-4 mr-5' src="/Vector (2).png" alt="" />
            </div>
            
            <div className='w-full h-fit grid sm:grid-cols-3 gap-3 my-8'>
              {/* 1 */}
              <div className=' w-full h-[200px] border border-[#0000007D] p-3 rounded-md flex flex-col justify-evenly gap-1'>
                <div className='flex justify-between'>
                  <p className='font-inter'>Hulk Beast Burger</p>
                  {
                                switc ?
                                    <div className='w-[40px] h-[22px] bg-slate-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-1' onClick={switch1}></div>
                                    </div> :
                                    <div className='w-[40px] h-[22px] bg-green-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-5' onClick={switch1}></div>
                                    </div>
                            }

                </div>
                <div className='flex w-full'>
                  <div className='w-[70%]'>
                    <img src="Group 1171277690.png" alt="" />
                    <p className='text-[#0F172A] font-inter text-[.75rem]'>Hulk Beast burger is one of the signature dishes in this cafe ,stuffed double paty chicken with mouth watering sauce flavour</p>
                  </div>
                  <div className='w-[30%] flex items-center justify-center bg-[#F8FAFC] rounded-md'>
                    <img className='size-16' src="/image.png" alt="" />
                  </div>

                </div>

                <div className='flex justify-between font-Roboto'>
                  <p className='text-[1.1rem]'>₹399.00</p>
                  <button className='border border-[#0000007D] px-2 rounded-md text-[.9rem]'>Edit</button>
                </div>
              </div>

              {/* for delete when map is use */}
              <div className=' w-full h-[200px] border border-[#0000007D] p-3 rounded-md flex flex-col justify-evenly gap-1'>
                <div className='flex justify-between'>
                  <p className='font-inter'>Hulk Beast Burger</p>
                  {
                                switc ?
                                    <div className='w-[40px] h-[22px] bg-slate-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-1' onClick={switch1}></div>
                                    </div> :
                                    <div className='w-[40px] h-[22px] bg-green-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-5' onClick={switch1}></div>
                                    </div>
                            }

                </div>
                <div className='flex w-full'>
                  <div className='w-[70%]'>
                    <img src="Group 1171277690.png" alt="" />
                    <p className='text-[#0F172A] font-inter text-[.75rem]'>Hulk Beast burger is one of the signature dishes in this cafe ,stuffed double paty chicken with mouth watering sauce flavour</p>
                  </div>
                  <div className='w-[30%] flex items-center justify-center bg-[#F8FAFC] rounded-md'>
                    <img className='size-16' src="/image.png" alt="" />
                  </div>

                </div>

                <div className='flex justify-between font-Roboto'>
                  <p className='text-[1.1rem]'>₹399.00</p>
                  <button className='border border-[#0000007D] px-2 rounded-md text-[.9rem]'>Edit</button>
                </div>
              </div><div className=' w-full h-[200px] border border-[#0000007D] p-3 rounded-md flex flex-col justify-evenly gap-1'>
                <div className='flex justify-between'>
                  <p className='font-inter'>Hulk Beast Burger</p>
                  {
                                switc ?
                                    <div className='w-[40px] h-[22px] bg-slate-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-1' onClick={switch1}></div>
                                    </div> :
                                    <div className='w-[40px] h-[22px] bg-green-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-5' onClick={switch1}></div>
                                    </div>
                            }

                </div>
                <div className='flex w-full'>
                  <div className='w-[70%]'>
                    <img src="Group 1171277690.png" alt="" />
                    <p className='text-[#0F172A] font-inter text-[.75rem]'>Hulk Beast burger is one of the signature dishes in this cafe ,stuffed double paty chicken with mouth watering sauce flavour</p>
                  </div>
                  <div className='w-[30%] flex items-center justify-center bg-[#F8FAFC] rounded-md'>
                    <img className='size-16' src="/image.png" alt="" />
                  </div>

                </div>

                <div className='flex justify-between font-Roboto'>
                  <p className='text-[1.1rem]'>₹399.00</p>
                  <button className='border border-[#0000007D] px-2 rounded-md text-[.9rem]'>Edit</button>
                </div>
              </div><div className=' w-full h-[200px] border border-[#0000007D] p-3 rounded-md flex flex-col justify-evenly gap-1'>
                <div className='flex justify-between'>
                  <p className='font-inter'>Hulk Beast Burger</p>
                  {
                                switc ?
                                    <div className='w-[40px] h-[22px] bg-slate-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-1' onClick={switch1}></div>
                                    </div> :
                                    <div className='w-[40px] h-[22px] bg-green-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-5' onClick={switch1}></div>
                                    </div>
                            }

                </div>
                <div className='flex w-full'>
                  <div className='w-[70%]'>
                    <img src="Group 1171277690.png" alt="" />
                    <p className='text-[#0F172A] font-inter text-[.75rem]'>Hulk Beast burger is one of the signature dishes in this cafe ,stuffed double paty chicken with mouth watering sauce flavour</p>
                  </div>
                  <div className='w-[30%] flex items-center justify-center bg-[#F8FAFC] rounded-md'>
                    <img className='size-16' src="/image.png" alt="" />
                  </div>

                </div>

                <div className='flex justify-between font-Roboto'>
                  <p className='text-[1.1rem]'>₹399.00</p>
                  <button className='border border-[#0000007D] px-2 rounded-md text-[.9rem]'>Edit</button>
                </div>
              </div><div className=' w-full h-[200px] border border-[#0000007D] p-3 rounded-md flex flex-col justify-evenly gap-1'>
                <div className='flex justify-between'>
                  <p className='font-inter'>Hulk Beast Burger</p>
                  {
                                switc ?
                                    <div className='w-[40px] h-[22px] bg-slate-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-1' onClick={switch1}></div>
                                    </div> :
                                    <div className='w-[40px] h-[22px] bg-green-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-5' onClick={switch1}></div>
                                    </div>
                            }

                </div>
                <div className='flex w-full'>
                  <div className='w-[70%]'>
                    <img src="Group 1171277690.png" alt="" />
                    <p className='text-[#0F172A] font-inter text-[.75rem]'>Hulk Beast burger is one of the signature dishes in this cafe ,stuffed double paty chicken with mouth watering sauce flavour</p>
                  </div>
                  <div className='w-[30%] flex items-center justify-center bg-[#F8FAFC] rounded-md'>
                    <img className='size-16' src="/image.png" alt="" />
                  </div>

                </div>

                <div className='flex justify-between font-Roboto'>
                  <p className='text-[1.1rem]'>₹399.00</p>
                  <button className='border border-[#0000007D] px-2 rounded-md text-[.9rem]'>Edit</button>
                </div>
              </div><div className=' w-full h-[200px] border border-[#0000007D] p-3 rounded-md flex flex-col justify-evenly gap-1'>
                <div className='flex justify-between'>
                  <p className='font-inter'>Hulk Beast Burger</p>
                  {
                                switc ?
                                    <div className='w-[40px] h-[22px] bg-slate-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-1' onClick={switch1}></div>
                                    </div> :
                                    <div className='w-[40px] h-[22px] bg-green-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-5' onClick={switch1}></div>
                                    </div>
                            }

                </div>
                <div className='flex w-full'>
                  <div className='w-[70%]'>
                    <img src="Group 1171277690.png" alt="" />
                    <p className='text-[#0F172A] font-inter text-[.75rem]'>Hulk Beast burger is one of the signature dishes in this cafe ,stuffed double paty chicken with mouth watering sauce flavour</p>
                  </div>
                  <div className='w-[30%] flex items-center justify-center bg-[#F8FAFC] rounded-md'>
                    <img className='size-16' src="/image.png" alt="" />
                  </div>

                </div>

                <div className='flex justify-between font-Roboto'>
                  <p className='text-[1.1rem]'>₹399.00</p>
                  <button className='border border-[#0000007D] px-2 rounded-md text-[.9rem]'>Edit</button>
                </div>
              </div>

            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Menu