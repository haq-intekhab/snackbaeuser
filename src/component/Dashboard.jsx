import React, { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoWhatsapp } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { TbProgressHelp } from "react-icons/tb";
import { LuPhoneCall } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { RxCrossCircled } from "react-icons/rx";
import { GoFileSymlinkFile } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";

import { motion } from "framer-motion";
import axios from "axios";

const Dashboard = () => {

  var userID = localStorage.getItem('user');
  console.log("user id", userID);
  const id = userID;
  const resId = userID;
  const [resData, setResData] = useState();
  const [bestRatedMenu, setBestRatedMenu] = useState("");
  const [leastRatedMenu, setLeastRatedMenu] = useState("");
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [repeatingCustomer, setRepeatingCustomer] = useState(0);
  const [todaysCustomer, setTodaysCustomer] = useState(0);

  const [] = useState(0);
  const [menus, setmenus] = useState("");
  const top3menus = menus.slice(0, 4);

  const [showAllCategories, setShowAllCategories] = useState({});
  const toggleCategory = (categoryId) => {
    setGood(false);
    setNewone(true);
    setNotliked(false);
    setMustTry(false);
    setFilterone(false);

    setShowAllCategories((prevState) => ({
      ...prevState,
      [categoryId]: !prevState[categoryId],
    }));
  };

  const getRestaurantData = async (req, res) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://seashell-app-lgwmg.ondigitalocean.app/api/getRestaurantDetails/${resId}`,
      // url: `http://localhost:4000/api/getRestaurantDetails/${resId}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        console.log(response.data);
        setResData(response?.data);
        const resData = response.data;
        console.log(resData);
        console.log(resData.restaurant.menu);
        setmenus(resData?.restaurant?.menu);
        setRepeatingCustomer(resData.restaurant.returningCustomer);
        setTotalCustomers(resData.restaurant.totalCustomers);
        console.log(resData.restaurant.totalCustomersData);
        const today = new Date().toISOString().slice(0, 10);
        console.log(today);
        const todayCust = resData?.restaurant?.totalCustomersData.filter(
          (item) => item.createdAt && item.createdAt.slice(0, 10) === today
        );
        console.log(todayCust);
        setTodaysCustomer(todayCust.length);

        const highestRatedItem = resData?.restaurant?.menu.reduce(
          (prev, current) => (prev.rated > current.rated ? prev : current)
        );
        setBestRatedMenu(highestRatedItem?.name);

        const leastRatedItem = resData?.restaurant?.menu.reduce(
          (prev, current) => (prev.rated < current.rated ? prev : current)
        );
        setLeastRatedMenu(leastRatedItem?.name);

        console.log(resData);

        console.log(bestRatedMenu);
        console.log(leastRatedMenu);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [paymentData, setpaymentData] = useState();
  const getPaymentData = async (req, res) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://seashell-app-lgwmg.ondigitalocean.app/api/payments/${resId}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log("paymentdata", response.data);
        setpaymentData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const dateparameter = (dateStr) => {
    const dateString = dateStr;

    // Step 1: Parse the date string
    const date = new Date(dateString);

    // Step 2: Define arrays for month names
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Step 3: Extract day, month, and year from the date object
    const day = date.getUTCDate();
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();

    // Step 4: Format the date as "23 April 2001"
    const formattedDate = `${day} ${month} ${year}`;
    console.log(formattedDate); // Output: "18 May 2024"
    return formattedDate;
  };

  useEffect(() => {
    getRestaurantData();
    getPaymentData();
  }, [resId]);

  const sdata1 = [
    {
      photo: "/Oval.png",
      Name: "Amrobson",
      Date: "1 month ago",
      contant:
        "This place with good ambience and excellent food. Must try chicken steam momo which is best momo I have ever had and French fry was just melting in mouth. Literally awesome! Must try.",
      Emoji: "/Group 1171277601.png",
      Status: "New",
    },
    {
      photo: "/Oval.png",
      Name: "Amrobson",
      Date: "1 month ago",
      contant:
        "This place with good ambience and excellent food. Must try chicken steam momo which is best momo I have ever had and French fry was just melting in mouth. Literally awesome! Must try.",
      Emoji: "/Group 1171277601.png",
      Status: "Must try",
    },
    {
      photo: "/Oval.png",
      Name: "Amrobson",
      Date: "1 month ago",
      contant:
        "This place with good ambience and excellent food. Must try chicken steam momo which is best momo I have ever had and French fry was just melting in mouth. Literally awesome! Must try.",
      Emoji: "/Group 1171277601.png",
      Status: "Good",
    },
    {
      photo: "/Oval.png",
      Name: "Amrobson",
      Date: "1 month ago",
      contant:
        "This place with good ambience and excellent food. Must try chicken steam momo which is best momo I have ever had and French fry was just melting in mouth. Literally awesome! Must try.",
      Emoji: "/Group 1171277601.png",
      Status: "New",
    },
    {
      photo: "/Oval.png",
      Name: "Amrobson",
      Date: "1 month ago",
      contant:
        "This place with good ambience and excellent food. Must try chicken steam momo which is best momo I have ever had and French fry was just melting in mouth. Literally awesome! Must try.",
      Emoji: "/Group 1171277601.png",
      Status: "Not Liked",
    },
  ];

  const calculateTimeDifference = (fateDate) => {
    // Convert fate date to Date object
    const fateDateTime = new Date(fateDate);

    // Current date
    const currentDate = new Date();

    // Calculate time difference in milliseconds
    const timeDifference = currentDate.getTime() - fateDateTime.getTime();

    // Convert milliseconds to days, weeks, or months
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const weeksDifference = Math.floor(daysDifference / 7);
    const monthsDifference = Math.floor(daysDifference / 30);

    // Determine appropriate label based on time difference
    if (monthsDifference >= 1) {
      return `${monthsDifference} month${monthsDifference > 1 ? "s" : ""} ago`;
    } else if (weeksDifference >= 1) {
      return `${weeksDifference} week${weeksDifference > 1 ? "s" : ""} ago`;
    } else {
      if (daysDifference == 0) return "Today";
      else return `${daysDifference} day${daysDifference > 1 ? "s" : ""} ago`;
    }
  };

  const [switc, setswitch] = useState(false);

  const switch1 = () => {
    setswitch(!switc);
  };

  function openPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("restaurant").style.display = "block";
  }
  function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("restaurant").style.display = "none";
  }

  const [items, setitems] = useState(sdata1);

  //search bar
  const [search, setSearch] = useState("");
  const [searchMenuItems, setSearchMenuItems] = useState();

  const handleSearch = (e) => {
    console.log(search);
    const inputValue = e.target.value;
    setSearch(inputValue);
    if (!inputValue) {
      // If input value is empty or length is less than or equal to 1, clear search menu items
      setSearchMenuItems();
      return;
    }

    setSearch(inputValue);
    searchMenu();
  };
  const searchMenu = async (req, res) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://seashell-app-lgwmg.ondigitalocean.app/api/searchMenu/${id}/${search}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        console.log(response.data.menuItems);
        setSearchMenuItems(response.data.menuItems);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // comment array

  const [comments, setcomments] = useState([]);
  console.log("nitish");
  console.log(top3menus);
  console.log(top3menus[0]?.comments);
  //  useEffect(() => {
  //   // Initialize comments only if top3menus has data and comments are empty
  //   if (top3menus && comments.length === 0) {
  //     setcomments(top3menus[0]?.comments);
  //   }
  // }, [top3menus]);


  // if (top3menus && comments.length <= 0) {
  //   setcomments(top3menus[0]?.comments);
  // }

  useEffect(() => {
    if (top3menus && comments.length <= 0) {
      setcomments(top3menus[0]?.comments);
    }
  }, []);

  const [clicked, setclicked] = useState('665cbaafb9ba6f61a95b54de');

  function pinComment(com) {
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `https://seashell-app-lgwmg.ondigitalocean.app/api/pinComment/${com}/${clicked}`,
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        window.location.reload();

      })
      .catch((error) => {
        console.log(error);
      });

  };




  return (
    <div id="dashboard" className="w-full h-fit relative sm:mb-1 mb-10">
      {/* QR code popup */}
      <motion.div
        id="popup"
        whileInView={{ y: [400, 0] }}
        transition={{ duration: 0.5, type: "tween" }}
        className="sm:w-[500px]  w-[100%] sm:h-[500px] h-[650px]    sm:left-[30%] fixed bg-[#FFFFFF] hidden  z-[900] mt-[80px] rounded-2xl sm:p-4 p-4  "
      >
        <div className="flex  items-center justify-between font-Roboto sm:text-[1.2rem] text-[1.5rem] text-[#0F172A] px-4 mt-2 border-b-2 mb-4 pb-2">
          <p>Get QR Code</p>
          <RxCrossCircled
            onClick={closePopup}
            className="cursor-pointer text-[1.9rem]"
          />
        </div>
        <div className="flex flex-col gap-3 w-full sm:h-[500px] h-[00px] px-3 pb-[2rem] text-[#0F172A] font-inter sm:text-[.95rem]  ">
          <div className="w-full h-[] flex flex-col items-center justify-center sm:gap-2 gap-5  font-inter border-b sm:pb-8 pb-4 ">
            <div className="sm:w-[200px] sm:h-[200px] w-[250px] sm:mt-0 mt-5 border-2 border-[#000000B2] rounded-xl p-2">
              <img
                className="w-full h-full"
                src="/Group 1171277979.png"
                alt=""
              />
            </div>
            <p className="sm:text-[1.1rem] font-semibold text-[1.5rem]">
              FOODOOS
            </p>
            <p>AMP Baisakhi Mall,Salt Lake</p>
            <div className="flex gap-4 font-semibold sm:text-[1.1rem] text-[1.15rem] ">
              <button className="text-nowrap sm:px-6 px-7 rounded-md sm:py-2 py-4 bg-[#FFD628] text-black ">
                Share{" "}
              </button>
              <button className="text-nowrap px-6 rounded-md py-2 bg-[#004AAD] text-[#FFFFFF] ">
                Download QR
              </button>
            </div>
          </div>
          <div className="sm:text-[1rem] text-[1.4rem] flex items-center justify-center gap-2 my-3">
            <p>Need help?</p>
            <p className="text-[#004AAD] font-bold">ContactUs</p>
          </div>
        </div>
      </motion.div>


      <div className="sm:w-[80%] w-full  sm:h-[90px] h-[80px] z-10 bg-[#FDE030] mt-[70px] flex justify-between items-center px-7 sm:px-10 fixed ">
        <div>
          <p className="sm:text-[1.6rem] text-[2rem] font-semibold">
            Dashboard
          </p>
          <p className="text-[.9rem]">Welcome to your Dashboard</p>
        </div>

        <div className="flex gap-5 ">
          <Link to={`https://www.snackbae.in/profile/merchant/${id}`} target='_blank' className="hidden sm:block bg-white px-5 py-[.5rem] rounded-md border text-[.9rem] font-Roboto border-[#000000B2]">
            View Profile
          </Link>
          <button
            onClick={openPopup}
            className="bg-white px-5 sm:py-1 py-2 sm:rounded-md rounded-xl border text-[.9rem] font-Roboto  border-[#000000B2]"
          >
            Get QR Code
          </button>
        </div>
      </div>

      <div className="w-full h-fit  mt-[160px]  ">
        {/* total report */}
        <div className=" w-full sm:flex sm:px-2 gap-3 overflow-hidden">
          <div className="sm:w-[70%] w-full flex flex-col gap-2">
          <p className="text-[#000000] text-[1.6rem] font-semibold px-4 mt-4 ">
              Today's Report
            </p>
            <div className="w-full h-fit flex sm:flex-row flex-col justify-evenly gap-2  rounded-md bg-white p-4">

              <div className="sm:w-[50%] w-full h-full relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-between ">
                <p className="text-[#777980] text-[.9rem] font-semibold">
                  Today's Sales
                </p>
                <img
                  className="size-8 absolute right-2"
                  src="/Badge (1).png"
                  alt=""
                />

                <p className="text-[#1D1F2C] text-[1.9rem] font-semibold ">
                  ₹0
                </p>
                <div className="flex text-[.9rem] gap-1 font-bold">
                  <p className="text-[#018DF0] ">View Payments</p>
                </div>
              </div>
              <div className="sm:w-[50%] w-full relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-between ">
                <p className="text-[#777980] text-[.9rem] font-semibold">
                  Today's Customer
                </p>
                <img
                  className="size-8 absolute right-2"
                  src="/Badge (1).png"
                  alt=""
                />

                <p className="text-[#1D1F2C] text-[1.9rem] font-semibold ">
                  {todaysCustomer}
                </p>
                <div className="flex text-[.9rem] gap-1 text-[#1A9882] items-center">
                  <p className="font-bold ">30% </p>
                  <img src="/fi-rr-caret-up.png" alt="" />
                  <p className="text-[#858D9D] text-[.7rem]">Than yesterday</p>
                </div>
              </div>
            </div>
            <div className="w-full h-fit bg-white flex sm:flex-row flex-col items-center justify-evenly gap-2  rounded-md p-4 ">
              <Link to={`https://www.snackbae.in/profile/merchant/${id}`} target='_blank' className="sm:hidden flex items-center justify-between w-full h-[60px] border border-[#000000B2] rounded-lg p-5  text-[1.2rem] font-semibold">
                <p>View Profile</p>
                <GoFileSymlinkFile />
              </Link>
              <div className="sm:w-[66%] w-full flex gap-2">
                <div className=" w-[50%] h-[135px] relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-between ">
                  <p className="text-[#777980] text-[.9rem] font-semibold">
                    Total Customer
                  </p>
                  <img
                    className="size-8 absolute right-2"
                    src="/Badge.png"
                    alt=""
                  />

                  <p className="text-[#1D1F2C] text-[1.9rem] font-semibold ">
                    {totalCustomers}
                  </p>
                  <div className="flex text-[.9rem] gap-1 text-[#1A9882] items-center">
                    <p className="font-bold ">30% </p>
                    <img src="/fi-rr-caret-up.png" alt="" />
                    <p className="text-[#858D9D] text-[.7rem]">In last week</p>
                  </div>
                </div>
                <div className="w-[50%] h-[135px] relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-between ">
                  <p className="text-[#777980] text-[.9rem] font-semibold">
                    Returning Customer
                  </p>
                  <img
                    className="size-8 absolute right-2"
                    src="/Badge.png"
                    alt=""
                  />

                  <p className="text-[#1D1F2C] text-[1.9rem] font-semibold ">
                    {repeatingCustomer}
                  </p>
                  <div className="flex text-[.9rem] gap-1 text-[#1A9882] items-center">
                    <p className="font-bold ">30% </p>
                    <img src="/fi-rr-caret-up.png" alt="" />
                    <p className="text-[#858D9D] text-[.7rem]">In last week</p>
                  </div>
                </div>
              </div>

              <div className="sm:w-[33%] w-full h-[135px] relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-between ">
                <p className="text-[#777980] text-[.9rem] font-semibold">
                  Total Recommendation
                </p>
                <img
                  className="size-8 absolute right-2"
                  src="/Badge.png"
                  alt=""
                />

                <p className="text-[#1D1F2C] text-[1.9rem] font-semibold ">
                  {resData?.restaurant?.recommendationCount}
                </p>
                <div className="flex text-[.9rem] gap-1 text-[#1A9882] items-center">
                  <p className="font-bold ">30% </p>
                  <img src="/fi-rr-caret-up.png" alt="" />
                  <p className="text-[#858D9D] text-[.7rem]">In last week</p>
                </div>
              </div>
            </div>
            
          </div>
          {/* Relationship */}
          <div className="hidden  w-[28%] h-[370px] bg-white rounded-md py-4 px-5 sm:flex flex-col justify-evenly gap-4 sm:mt-4">
            <p className="text-[#0F172A] text-[1.2rem] font-semibold border-b border-[#F1F5F9] pb-3">
              Relationship Manager
            </p>
            <p className="text-[#64748B] text-[.8rem]  border-b pb-2">
              Need help? contact your Relationship manager{" "}
            </p>

            <div className="flex flex-col  gap-3">
              <div className="flex gap-2 items-center">
                <CiLocationOn className="text-[#94A3B8] font-bold text-[1.3rem]" />
                <p className="text-[.9rem] font-Roboto text-[#0F172A]">
                  Souvik Das
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <LuPhoneCall className="text-[#94A3B8] font-bold text-[1.3rem]" />
                <p className="text-[.9rem] font-Roboto text-[#0F172A]">
                  +91 7044292143
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <TbProgressHelp className="text-[#94A3B8] font-bold text-[1.3rem]" />
                <p className="text-[.9rem] font-Roboto text-[#0F172A]">
                  Connect.snackbae@gmail.com
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <CiCalendarDate className="text-[#94A3B8] font-bold text-[1.3rem]" />
                <p className="text-[.9rem] font-Roboto text-[#0F172A]">
                  24/7
                </p>
              </div>
            </div>

            <div className="w-full h-[40px] bg-[#FDE030] text-[1.3rem] font-bold rounded-lg flex items-center justify-center gap-3 text-[#004AAD]">
              <IoLogoWhatsapp />
              <p>+91 7044292143</p>
            </div>
          </div>
        </div>

        {/* Latest Transaction */}
        <div className="w-full hidden h-fit  flex-col ">
          <div className="w-full h-[80px] flex justify-between items-center px-6 ">
            <div>
              <p className="sm:text-[1.6rem] text-[1.2rem] font-semibold">
                Latest Transaction
              </p>
              <p className="text-[.9rem] text-[#000000]">
                Recent 5 transaction
              </p>
            </div>
            <div className="flex items-center gap-6">
              <p className="text-[#004AAD] sm:text-[1.3rem] text-[.9rem] font-Roboto">
                Notification
              </p>
              {switc ? (
                <div className="w-[40px] h-[22px] bg-slate-400 rounded-full flex items-center ">
                  <div
                    className="size-[18px] bg-white rounded-full ml-1"
                    onClick={switch1}
                  ></div>
                </div>
              ) : (
                <div className="w-[40px] h-[22px] bg-green-400 rounded-full flex items-center ">
                  <div
                    className="size-[18px] bg-white rounded-full ml-5"
                    onClick={switch1}
                  ></div>
                </div>
              )}
            </div>
          </div>
          <div className="w-full h-fit  mt-4  px-6 bg-[#F6F8FF]  rounded-md   ">
            <div className="text-[#6B7280] flex w-full justify-between mb-4 border-b-2 font-semibold text-[.9rem] gap-2">
              <div className="w-[40%] flex mb-3 items-center">
                <div className="flex w-full sm:w-[50%] text-center text-[1.05rem]  items-center justify-center">
                  Customer
                </div>
                <div className="sm:w-[50%] sm:block hidden text-center">
                  DATE & TIME
                </div>
              </div>
              <div className="grid sm:grid-cols-4 grid-cols-3 sm:text-[.9rem] text-[.8rem] mt-1  w-[60%] gap-2 justify-evenly ">
                <div className=" text-center">AMOUNT</div>
                <div className="  text-center">DISCOUNT</div>
                <div className="  text-center hidden sm:block ml-2">STATUS</div>
                <div className="text-center block">MODE</div>
              </div>
            </div>

            <div className="w-full h-fit overflow-y-hidden flex flex-col gap-1 ">
              {paymentData
                ?.slice(paymentData.length - 5, paymentData.length)
                ?.reverse()
                ?.map((item, index) => (
                  <div
                    key={index}
                    className="w-full flex mb-2  items-center justify-center sm:text-[.9rem] text-[.8rem] font-semibold sm:border-none border rounded-xl border-[#00000080] p-1"
                  >
                    <div className="w-[40%] flex sm:flex-row flex-col mb-3 items-center sm:justify-evenly ">
                      <p className="text-[#111827] sm:w-[50%] font-semibold text-[.9rem] flex sm:pl-14 items-center ">
                        {item?.userId?.name || "User"}
                      </p>
                      <p className="text-[#6B7280] sm:w-[50%] flex items-center justify-center">
                        {dateparameter(item.date)}
                      </p>
                    </div>

                    <div className="grid w-[60%] sm:grid-cols-4 grid-cols-3 gap-2 justify-evenly ">
                      {/* <p className='text-[#6B7280] flex items-center '>{item.Date}</p> */}
                      <p className="text-[black]   flex items-center justify-center">
                        ₹ {item.amount}
                      </p>
                      <p className="text-[#004AAD]   text-center flex items-center justify-center  ">
                        ₹ {item.discount}
                      </p>
                      <p
                        className={`rounded-3xl  w-full  h-[70%] py-[.5rem]   text-center mt-2 hidden sm:flex items-center justify-center 
                
                     bg-[#DEF7EC] text-green-700 
                    // : item.Status === "In Progress"
                    // ? "bg-[#E1EFFE] text-[#7157f1]"
                    // : item.Status === "Cancelled"
                    // ? "bg-[#FBD5D5] text-red-800"
                    // : ""
                }`}
                      >
                        complete
                      </p>
                      <p
                        className={`rounded-3xl    text-center p-1 flex mt-2 h-[70%] items-center justify-center 
                ${item.mode === "upi"
                            ? "bg-[#E1EFFE] text-[#1E429F]"
                            : item.mode === "wallet"
                              ? "bg-[#fbd9de] text-[#FD4A65]"
                              : item.mode === "netbanking"
                                ? "bg-[#E1EFFE] text-[#7157f1]"
                                : ""
                          }`}
                      >
                        {item.mode}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Menu Performance */}

        <div className="w-full h-fit flex flex-col bg-[#F6F8FF] gap-4 ">
          <div className="w-full h-fit flex flex-col  justify-start gap-3 sm:px-6 p-4 mt-4 ">
            <div>
              <p className="text-[1.6rem] font-semibold">Menu Performance</p>
              <p className="text-[.9rem] text-[#000000]">
                Based on your customer feedback
              </p>
            </div>

            <div className="w-full flex gap-2 sm:flex-row flex-col bg-white sm:p-4 rounded-md">
              <div className="sm:w-[66%] w-full flex gap-2">
                <div className=" w-[50%] h-[135px] relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-evenly ">
                  <p className="text-[#777980] sm:text-[.9rem] text-[.75rem] font-semibold">
                    Top Performing Item
                  </p>
                  <p className="text-[#1D1F2C] sm:text-[1.2rem] text-[1rem] font-semibold tracking-tight ">
                    {bestRatedMenu}
                  </p>
                </div>
                <div className=" w-[50%] h-[135px] relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-evenly ">
                  <p className="text-[#777980] sm:text-[.9rem] text-[.75rem] font-semibold">
                    Lowest Performing Item
                  </p>
                  <p className="text-[#1D1F2C] sm:text-[1.2rem] text-[1rem] font-semibold tracking-tight ">
                    Veg Maggi
                  </p>
                </div>
              </div>

              <div className="sm:w-[33%] w-full h-[135px] relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-evenly ">
                <p className="text-[#777980] text-[.9rem] font-semibold">
                  Total Interactions
                </p>

                <p className="text-[#1D1F2C] text-[2rem] font-semibold  ">
                  {totalCustomers}
                </p>
              </div>
            </div>
          </div>
          {/* search menu */}
          <div className="relative w-fit shadow rounded-md border-2 mx-[1rem]">
            <input
              className=" w-[220px] sm:w-[400px] focus:outline-none h-[2.4rem] sm:h-[3rem] px-[1rem]"
              type="text"
              placeholder="Search for dish"
              value={search}
              onChange={handleSearch}
            />
            <CiSearch className=" absolute right-[1rem] top-[50%] translate-y-[-50%] text-[1.3rem]" />
          </div>

          <div className="sm:p-5 flex sm:flex-row sm:h-[600px] flex-col w-full gap-3 ">

            <div className="sm:w-[50%] bg-white sm:h-[560px] h-fit rounded-lg sm:p-2">
              {
                searchMenuItems && <div className='w-full h-fit p-6 text-[1.5rem] font-semibold'>
                  <p>Search result</p>
                </div>
              }
              {
                !searchMenuItems && <div className='w-full h-fit py-5 px-4 text-[1.5rem] font-semibold'>
                  <p>Menu Recomendation</p>
                </div>
              }



              {search
                ? searchMenuItems &&
                searchMenuItems?.map((menu, index) => (
                  <div key={index}>
                    <div onClick={() => { setcomments(menu?.comments); setclicked(menu._id) }

                    } className=" h-fit   bg-white  flex items-center justify-evenly gap-2 my-4 mx-4 border border-[#00000080] rounded-lg p-2">
                      <div className="sm:w-[50%] w-[50%] h-full  flex-col sm:items-center justify-evenly font-semibold">

                        <div className="flex flex-col sm:block sm:items-center justify-center sm:ml-2   font-inter">
                          <p className="sm:text-[1.2rem] w-[70%] text-[.8rem]">
                            {menu.name}
                          </p>
                          <p className="text-[#000000B2] sm:text-[.8rem] text-[.6rem]">
                            Total Recomendation
                          </p>
                          <p className="sm:text-[1.1rem] text-[.6rem]">
                            {menu.notLikedCount +
                              menu.likedCount +
                              menu.mustTryCount}
                          </p>
                        </div>
                      </div>
                      <div className="sm:w-[50%] w-[50%] h-full flex justify-evenly gap-2 ">
                        <div className="flex flex-col text-[#000000] items-center justify-center font-inter">
                          <div className="flex gap-2">
                            <img
                              className="size-6"
                              src="/🦆 emoji _disappointed but relieved face_.png"
                              alt=""
                            />
                            <p className=" sm:text-[1.1rem] text-[.85rem]">
                              {menu.notLikedCount}
                            </p>
                          </div>
                          <p className="sm:text-[.85rem] text-[.7rem]">
                            Not Liked
                          </p>
                        </div>
                        <div className="flex flex-col text-[#000000] items-center justify-center font-inter">
                          <div className="flex gap-2">
                            <img
                              className="size-6"
                              src="/Group 1171277598.png"
                              alt=""
                            />
                            <p className=" text-[1.1rem]">{menu.likedCount}</p>
                          </div>
                          <p className="sm:text-[.85rem] text-[.7rem]">Good</p>
                        </div>
                        <div className="flex flex-col text-[#000000] items-center justify-center font-inter">
                          <div className="flex gap-2">
                            <img
                              className="size-6"
                              src="/Group 1171277601.png"
                              alt=""
                            />
                            <p className=" sm:text-[1.1rem] text-[.8rem]">
                              {menu.mustTryCount}
                            </p>
                          </div>
                          <p className="sm:text-[.85rem] text-[.7rem]">
                            Must Try
                          </p>
                        </div>

                      </div>
                    </div>

                  </div>
                ))
                : menus &&
                top3menus?.map((menu, index) => (
                  <>

                    <div onClick={() => {
                      if (menu?.comments.length > 0) { setcomments(menu?.comments) }
                      else { setcomments([]) }
                      ; setclicked(menu._id)
                    }} className=" h-fit   bg-white  flex items-center justify-evenly gap-2 my-3 mx-4 border border-[#00000080] rounded-lg p-2">
                      <div className="sm:w-[50%] w-[50%] h-full  flex-col sm:items-center justify-evenly font-semibold">

                        <div className="flex flex-col sm:block sm:items-center justify-center sm:ml-2   font-inter">
                          <p className="sm:text-[1.2rem] w-[70%] text-[.8rem] text-nowrap">
                            {menu.name}
                          </p>
                          <p className="text-[#000000B2] sm:text-[.8rem] text-[.6rem]">
                            Total Recomendation
                          </p>
                          <p className="sm:text-[1.1rem] text-[.6rem]">
                            {menu.notLikedCount +
                              menu.likedCount +
                              menu.mustTryCount}
                          </p>
                        </div>
                      </div>
                      <div className="sm:w-[50%] w-[50%] h-full flex justify-evenly gap-2 ">
                        <div className="flex flex-col text-[#000000] items-center justify-center font-inter">
                          <div className="flex gap-2">
                            <img
                              className="size-6"
                              src="/🦆 emoji _disappointed but relieved face_.png"
                              alt=""
                            />
                            <p className=" sm:text-[1.1rem] text-[.85rem]">
                              {menu.notLikedCount}
                            </p>
                          </div>
                          <p className="sm:text-[.85rem] text-nowrap text-[.7rem]">
                            Not Liked
                          </p>
                        </div>
                        <div className="flex flex-col text-[#000000] items-center justify-center font-inter">
                          <div className="flex gap-2">
                            <img
                              className="size-6"
                              src="/Group 1171277598.png"
                              alt=""
                            />
                            <p className=" sm:text-[1.1rem] text-[.8rem]">{menu.likedCount}</p>
                          </div>
                          <p className="sm:text-[.85rem] text-nowrap text-[.7rem]">Good</p>
                        </div>
                        <div className="flex flex-col text-[#000000] items-center justify-center font-inter">
                          <div className="flex gap-2">
                            <img
                              className="size-6"
                              src="/Group 1171277601.png"
                              alt=""
                            />
                            <p className=" sm:text-[1.1rem] text-[.8rem]">
                              {menu.mustTryCount}
                            </p>
                          </div>
                          <p className="sm:text-[.85rem] text-[.7rem] text-nowrap">
                            Must Try
                          </p>
                        </div>

                      </div>
                    </div>

                  </>
                ))}
            </div>

            <div className="sm:w-[50%] bg-white h-[560px] rounded-lg  flex flex-col items-center  ">
              <p className='w-full h-fit py-6 px-4 text-[1.5rem] font-semibold'>Customer Testimonials</p>
              <div className="w-full h-[80%]  overflow-y-scroll hideScroller sm:px-4 p-3 ">
                {comments
                  .map((item, index) => ({
                    ...item,
                    isActive: item.Active === "true" ? 1 : 0 // Assigning a value of 1 for active comments and 0 for inactive comments
                  }))
                  .sort((a, b) => b.isActive - a.isActive) // Sorting the comments based on the isActive value
                  .map((item, index) => (
                    <div
                      key={index}
                      className="h-[200px]  w-full  flex-col relative rounded-lg border font-inter border-[#00000099] p-4 gap-2 my-4"
                    >
                      <div className="flex justify-between items-center sm:px-4 gap-4 w-full h-[20%]">
                        <div className="flex items-center  sm:gap-5 gap-2">
                          <IoPersonCircleOutline className="size-8" />
                          <div className="flex flex-col items-center">
                            <p className=" text-nowrap ">{item.userId?.name}</p>
                            <p>{calculateTimeDifference(item?.createdAt)}</p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          {item?.Active == "true" ? (
                            <button onClick={() => {
                              pinComment(item._id)
                            }} className="px-4 py-1 border border-[#004AAD99] text-[#0F172A] rounded-lg">UnPin</button>
                          ) : <button onClick={() => {
                            pinComment(item._id)
                          }} className="px-4 py-1 border border-[#004AAD99] text-[#0F172A] rounded-lg">Pin</button>
                          }


                          <button className="px-4 py-1 border border-[#004AAD99] text-[#0F172A] rounded-lg">Report</button>
                        </div>


                      </div>
                      <p className="w-full h-[70%] mt-5 text-[#67727E] ">
                        {item?.description}
                      </p>
                      {item?.rated === "liked" && (
                        <div className="absolute right-4 bottom-3 bg-[#F5F6FA] flex flex-col items-center justify-center size-14 rounded-md">
                          <img
                            className="size-7"
                            src="/Group 1171277598.png"
                            alt=""
                          />
                          <p className="text-[.7rem]">Liked</p>
                        </div>
                      )}
                      {item?.rated === "mustTry" && (
                        <div className="absolute right-4 bottom-3 bg-[#F5F6FA] flex flex-col items-center justify-center size-14 rounded-md">
                          <img
                            className="size-7"
                            src="/Group 1171277601.png"
                            alt=""
                          />
                          <p className="text-[.7rem]">Must Try</p>
                        </div>
                      )}
                      {item?.rated === "notLike" && (
                        <div className="absolute right-4 bottom-3 bg-[#F5F6FA] flex flex-col items-center justify-center size-14 rounded-md">
                          <img
                            className="size-7"
                            src="/🦆 emoji _disappointed but relieved face_.png"
                            alt=""
                          />
                          <p className="text-[.7rem]">Must Try</p>
                        </div>
                      )}
                    </div>
                  ))}
              </div>



            </div>

          </div>


        </div>

        {/* footer */}
        <div className="p-4">
          <div className="flex sm:flex-row flex-col w-full h-fit sm:items-center border border-[#00000099]  rounded-md my-4 font-inter  sm:p-0 p-4">
            <img
              className="size-[120px] "
              src="/Customer feedback.png"
              alt=""
            />
            <div>
              <p>
                Help Us to make Snackbae better ! Share your feedbacks and
                request features that fits best for your Business
              </p>
              <Link to='https://forms.gle/GpTK9nF19Uggv6WBA' className="text-[#106CF6] border-b-2 w-fit border-[#106CF6] font-bold">
                Give Feedback
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
