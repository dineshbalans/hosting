import React, { useReducer, useState } from "react";
import {
  MdArrowRightAlt,
  MdKeyboardArrowDown,
  MdChevronRight,
} from "react-icons/md";
import { VscTriangleUp } from "react-icons/vsc";
import { PiCaretDoubleRightDuotone } from "react-icons/pi";
import { LuMenu } from "react-icons/lu";
import {
  homeSectionData,
  pageSectionData,
  hostingSectionData,
  elementSectionData,
  supportSectionData,
  aboutSectionData,
  serverSectionData,
  securitySectionData,
} from "../data/navBarData";
import logo from "../../../assets/MergoHostLogo.png";
import logo1 from "../../../assets/logo/HostIT-removebg-preview.png";
import logo2 from "../../../assets/logo/HostIT-removebg.png";
import ceo from "../../../assets/img/ceo.png";
import { Link } from "react-router-dom";
import BSearch from "../../BSearch/BSearch";
import MenuBar from "./MenuBar";

const initialState = {
  homeSection: false,
  pageSection: false,
  hostingSection: false,
  serverSection: false,
  securitySection: false,
  elementSection: false,
  supportSection: false,
  aboutSection: false,
  domainSection: false,
};

const reducerFn = (prevState, action) => {
  return action.type === "home"
    ? { ...initialState, homeSection: action.payload }
    : action.type === "page"
    ? { ...initialState, pageSection: action.payload }
    : action.type === "hosting"
    ? { ...initialState, hostingSection: action.payload }
    : action.type === "server"
    ? { ...initialState, serverSection: action.payload }
    : action.type === "security"
    ? { ...initialState, securitySection: action.payload }
    : action.type === "element"
    ? { ...initialState, elementSection: action.payload }
    : action.type === "support"
    ? { ...initialState, supportSection: action.payload }
    : action.type === "about"
    ? { ...initialState, aboutSection: action.payload }
    : action.type === "domain"
    ? { ...initialState, domainSection: action.payload }
    : initialState;
};

const NavBar = () => {
  const [navBar, dispatchFn] = useReducer(reducerFn, initialState);
  const [isMenuBarVisible, setIsMenuBarVisible] = useState(false);
  const menuBarHandler = () => {
    setIsMenuBarVisible((prevState) => !prevState);
  };
  return (
    <section className="text-quadra bg-white">
      <div
        className="px-8 md:px-14 lg:px-[75px] h-20   text-quadra font-medium
      flex items-center justify-between centerContainer"
      >
        <Link to="/">
          <img
            src={logo1}
            alt=""
            className="w-[200px] lg:w-[250px] object-contain  scale-150"
          />
        </Link>
        {/* <div className="hidden lg:flex items-center justify-center h-full gap-10"> */}
        <ul className="hidden lg:flex  text-sm">
          {/* Home */}
          <li
            className="flex items-center justify-center px-[10px] h-20 transition-colors ease-linear cursor-pointer hover:text-primary"
            onMouseEnter={() => dispatchFn({ type: "home", payload: true })}
            onMouseLeave={() => dispatchFn({ type: "home", payload: false })}
          >
            <Link className="w-full" to="/">
              <span>Home</span>
            </Link>
            <MdKeyboardArrowDown className="translate-y-[1px]" />
            {navBar.homeSection && (
              <VscTriangleUp className="absolute bottom-0 scale-[1.8] text-primeBlue" />
            )}
          </li>
          {/* Pages */}
          <li
            className="flex items-center justify-center px-[10px] h-20 transition-colors ease-linear cursor-pointer hover:text-primary"
            onMouseEnter={() => dispatchFn({ type: "page", payload: true })}
            onMouseLeave={() => dispatchFn({ type: "page", payload: false })}
          >
            <span>Pages</span>
            <MdKeyboardArrowDown className="translate-y-[1px]" />
            {navBar.pageSection && (
              <VscTriangleUp className="absolute bottom-0 scale-[1.8] text-primeBlue" />
            )}
          </li>
          {/* Hosting */}
          <li
            className="flex items-center justify-center h-20 px-[10px] transition-colors ease-linear cursor-pointer hover:text-primary"
            onMouseEnter={() => dispatchFn({ type: "hosting", payload: true })}
            onMouseLeave={() => dispatchFn({ type: "hosting", payload: false })}
          >
            <span>Hosting</span>
            <MdKeyboardArrowDown className="translate-y-[1px]" />
            {navBar.hostingSection && (
              <VscTriangleUp className="absolute bottom-0 scale-[1.8] text-primeBlue" />
            )}
          </li>
          {/* Server */}
          <li
            className="flex items-center justify-center h-20 px-[10px] transition-colors ease-linear cursor-pointer hover:text-primary"
            onMouseEnter={() => dispatchFn({ type: "server", payload: true })}
            onMouseLeave={() => dispatchFn({ type: "server", payload: false })}
          >
            <span>Servers</span>
            <MdKeyboardArrowDown className="translate-y-[1px]" />
            {navBar.serverSection && (
              <VscTriangleUp className="absolute bottom-0 scale-[1.8] text-primeBlue" />
            )}
          </li>
          {/* Security & Tools */}
          <li
            className="flex items-center justify-center h-20 px-[10px] transition-colors ease-linear cursor-pointer hover:text-primary"
            onMouseEnter={() => dispatchFn({ type: "security", payload: true })}
            onMouseLeave={() =>
              dispatchFn({ type: "security", payload: false })
            }
          >
            <span>Security & Tools</span>
            <MdKeyboardArrowDown className="translate-y-[1px]" />
            {navBar.securitySection && (
              <VscTriangleUp className="absolute bottom-0 scale-[1.8] text-primeBlue" />
            )}
          </li>
          {/* Element */}
          {/* <li
              className="flex items-center justify-center h-20 transition-colors ease-linear cursor-pointer hover:text-primary"
              onMouseEnter={() =>
                dispatchFn({ type: "element", payload: true })
              }
              onMouseLeave={() =>
                dispatchFn({ type: "element", payload: false })
              }
            >
              <span>Element</span>
              <MdKeyboardArrowDown className="translate-y-[1px]" />
              {navBar.elementSection && (
                <VscTriangleUp className="absolute bottom-0 scale-[1.8] text-primeBlue" />
              )}
            </li> */}
          {/* Support */}
          <li
            className="flex items-center justify-center px-[10px] h-20 transition-colors ease-linear cursor-pointer hover:text-primary"
            onMouseEnter={() => dispatchFn({ type: "support", payload: true })}
            onMouseLeave={() => dispatchFn({ type: "support", payload: false })}
          >
            <span>Support</span>
            <MdKeyboardArrowDown className="translate-y-[1px]" />
            {navBar.supportSection && (
              <VscTriangleUp className="absolute bottom-0 scale-[1.8] text-primeBlue" />
            )}
          </li>
          {/* Domain */}
          <li
            className="flex items-center justify-center px-[10px] h-20 transition-colors ease-linear cursor-pointer hover:text-primary"
            onMouseEnter={() => dispatchFn({ type: "domain", payload: true })}
            onMouseLeave={() => dispatchFn({ type: "domain", payload: false })}
          >
            <span>Domains</span>
            <MdKeyboardArrowDown className="translate-y-[1px]" />
            {navBar.domainSection && (
              <VscTriangleUp className="absolute bottom-0 scale-[1.8] text-primeBlue" />
            )}
          </li>
          {/* About */}
          {/* <li
            className="flex items-center justify-center h-20 transition-colors ease-linear cursor-pointer hover:text-primary"
            onMouseEnter={() => dispatchFn({ type: "about", payload: true })}
            onMouseLeave={() => dispatchFn({ type: "about", payload: false })}
          >
            <span>About</span>
            <MdKeyboardArrowDown className="translate-y-[1px]" />
            {navBar.aboutSection && (
              <VscTriangleUp className="absolute bottom-0 scale-[1.8] text-primeBlue" />
            )}
          </li> */}
        </ul>
        <Link
          to="/get-in"
          className="px-6 py-3 text-sm text-white rounded bg-primary 
          hover:bg-primary/80 transition-all ease-linear hidden lg:block"
          // href="https://portal.HostIT.com/client/login/"
          // target="_blank"
        >
          Login
        </Link>
        {/* </div> */}
        {/* Menu Bar Button*/}
        <button onClick={menuBarHandler} className="lg:hidden">
          <LuMenu className="scale-[1.5]" />
        </button>
      </div>

      {/* Mobile View */}
      {isMenuBarVisible && <MenuBar setMenuBar={menuBarHandler} />}

      <div className="relative centerContainer flex justify-center">
        {/* Home Section */}
        {navBar.homeSection && (
          <div
            className="bg-[#f1f1f1] absolute w-[80%]  rounded-lg border-t-2
      border-primeBlue shadow-shadowOne flex"
            onMouseEnter={() => dispatchFn({ type: "home", payload: true })}
            onMouseLeave={() => dispatchFn({ type: "home", payload: false })}
          >
            <div className="p-12 w-[40%] space-y-5">
              <h1 className="font-semibold text-[17px]">
                {homeSectionData.sec1.title}
              </h1>
              <ul className="text-[15px] space-y-2">
                {homeSectionData.sec1.sec1Items.map(({ id, bItem, item }) => (
                  <li className="flex items-center gap-1" key={id}>
                    <PiCaretDoubleRightDuotone />
                    <span>
                      {bItem && (
                        <strong className="pr-1 font-semibold">{bItem}</strong>
                      )}
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                className="bg-primeBlue text-white px-6 py-2 rounded
              flex items-center w-fit hover:bg-[#3171d8] transition-all ease-linear"
              >
                <span className="text-[15px]">Learn More</span>
                <MdChevronRight className="scale-125" />
              </Link>
            </div>
            <div
              className="bg-white w-[65%] p-12 rounded-r-lg
          flex "
            >
              <div className="w-1/2 space-y-5">
                <h1 className="font-semibold text-[17px]">
                  {homeSectionData.sec2.title}
                </h1>
                <ul className="text-[15px] space-y-3 font-medium text-quadra">
                  {homeSectionData.sec2.sec2Items.map(
                    ({ id, item, isHot, URL }) => (
                      <li key={id} className="flex items-center gap-2">
                        <Link
                          to={URL}
                          className="transition-all ease-linear hover:text-primeBlue"
                        >
                          <span>{item}</span>
                        </Link>
                        {isHot && (
                          <div className="px-2 text-xs text-white bg-red-600 rounded w-fit">
                            Hot
                          </div>
                        )}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="w-1/2">
                <ul className="text-[15px] space-y-3 font-medium text-quadra">
                  {homeSectionData.sec3.sec3Items.map(
                    ({ id, item, URL, isNew }) => (
                      <li key={id} className="flex items-center gap-2">
                        <Link
                          to={URL}
                          className="transition-all ease-linear hover:text-primeBlue"
                        >
                          <span>{item}</span>
                        </Link>
                        {isNew && (
                          <div className="px-2 text-xs text-white bg-green-600 rounded w-fit">
                            Hot
                          </div>
                        )}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        )}
        {/* Pages Section */}
        {navBar.pageSection && (
          <div
            className="bg-white absolute w-[20%]  rounded-lg border-t-2
      border-primeBlue -ml-[140px] shadow-shadowOne flex p-6"
            onMouseEnter={() => dispatchFn({ type: "page", payload: true })}
            onMouseLeave={() => dispatchFn({ type: "page", payload: false })}
          >
            <ul className="text-[15px] space-y-3 font-medium text-quadra w-full">
              {pageSectionData.map(({ id, item, URL, isNew }) => (
                <li className="flex items-center w-full gap-1" key={id}>
                  <Link
                    to={URL}
                    className="flex items-center justify-between w-full transition-all ease-linear hover:text-primeBlue"
                  >
                    <span>{item}</span>
                    {isNew && (
                      <div className="bg-yellow-500 text-ternary w-fit text-xs px-2 py-[1px] rounded">
                        New
                      </div>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* Hosting Section */}
        {navBar.hostingSection && (
          <div
            className="bg-white absolute w-[80%]  rounded-lg border-t-2
      border-primeBlue  shadow-shadowOne space-y-4 p-7"
            onMouseEnter={() => dispatchFn({ type: "hosting", payload: true })}
            onMouseLeave={() => dispatchFn({ type: "hosting", payload: false })}
          >
            <h1 className="font-semibold text-[19px] ">
              {securitySectionData.title}
            </h1>
            <ul
              className="text-[15px] space-y-3 font-medium text-quadra w-full 
          flex flex-wrap justify-between items-baseline"
            >
              {hostingSectionData.items.map(
                ({ id, title, subTitle, URL, Icon, price }, index) => (
                  <li
                    className="w-[49%] space-y-3 group border p-3 rounded"
                    key={id}
                  >
                    <Link
                      to={URL}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-7 pl-3">
                        <Icon className="scale-[2.5] text-primeBlue" />
                        <div className="space-y-1">
                          <h1 className="flex items-center gap-2 font-semibold transition-all ease-linear text-ternary group-hover:text-primeBlue">
                            <span>{title}</span>
                            {(index === 2 || index === 6 || index === 7) && (
                              <div
                                className={`${
                                  index === 2
                                    ? "bg-green-500"
                                    : index === 6
                                    ? "bg-red-600"
                                    : "bg-primeBlue"
                                } text-white w-fit text-xs px-2 py-[1px] rounded`}
                              >
                                {index === 2
                                  ? "Popular"
                                  : index === 6
                                  ? "Hot"
                                  : "New"}
                              </div>
                            )}
                          </h1>
                          <h4 className="text-[13px]">
                            <span>{subTitle} </span>
                            <span className="font-semibold"> {price}</span>
                          </h4>
                        </div>
                      </div>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
        {/* Server Section */}
        {navBar.serverSection && (
          <div
            className="bg-white absolute w-[80%]  rounded-lg border-t-2
      border-primeBlue  shadow-shadowOne space-y-4 p-7"
            onMouseEnter={() => dispatchFn({ type: "server", payload: true })}
            onMouseLeave={() => dispatchFn({ type: "server", payload: false })}
          >
            <h1 className="font-semibold text-[19px] ">
              {serverSectionData.title}
            </h1>
            <ul
              className="text-[15px] space-y-3 font-medium text-quadra w-full
            flex flex-wrap justify-between items-baseline"
            >
              {serverSectionData.items.map(
                ({ id, title, subTitle, Icon, URL }, index) => (
                  <li
                    className="w-[49%] space-y-3 group border p-3 rounded"
                    key={id}
                  >
                    <Link
                      to={URL}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-7 pl-3">
                        <Icon className="scale-[3.5] text-primeBlue" />
                        <div className="space-y-1">
                          <h1
                            className="flex items-center gap-2 font-semibold transition-all 
                          ease-linear text-ternary group-hover:text-primeBlue text-[17px]"
                          >
                            <span>{title}</span>
                          </h1>
                          <h4 className="text-[13.5px]">
                            <span>{subTitle}</span>
                          </h4>
                        </div>
                      </div>
                    </Link>
                    {/* {!(index === serverSectionData.items.length - 1) && <hr />} */}
                  </li>
                )
              )}
            </ul>
          </div>
        )}
        {/* Security & Tools Section */}
        {navBar.securitySection && (
          <div
            className="bg-white absolute w-[80%]  rounded-lg border-t-2
      border-primeBlue  shadow-shadowOne space-y-4 p-7"
            onMouseEnter={() => dispatchFn({ type: "security", payload: true })}
            onMouseLeave={() =>
              dispatchFn({ type: "security", payload: false })
            }
          >
            <h1 className="font-semibold text-[19px] ">
              {securitySectionData.title}
            </h1>
            <ul
              className="text-[15px] space-y-3 font-medium text-quadra w-full
            flex flex-wrap justify-between items-baseline"
            >
              {securitySectionData.items.map(
                ({ id, title, subTitle, Icon, URL }, index) => (
                  <li
                    className="w-[49%] space-y-3 group border p-3 rounded"
                    key={id}
                  >
                    <Link
                      to={URL}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-7 pl-3">
                        <Icon className="scale-[2.2] text-primeBlue" />
                        <div className="space-y-1">
                          <h1
                            className="flex items-center gap-2 font-semibold transition-all 
                          ease-linear text-ternary group-hover:text-primeBlue text-[17px]"
                          >
                            <span>{title}</span>
                          </h1>
                          <h4 className="text-[13.5px]">
                            <span>{subTitle}</span>
                          </h4>
                        </div>
                      </div>
                    </Link>
                    {/* {!(index === serverSectionData.items.length - 1) && <hr />} */}
                  </li>
                )
              )}
            </ul>
          </div>
        )}
        {/* Element Section */}
        {navBar.elementSection && (
          <div
            className="bg-white absolute w-[50%]  rounded-lg border-t-2
      border-primeBlue ml-[760px] shadow-shadowOne pt-10 space-y-4"
            onMouseEnter={() => dispatchFn({ type: "element", payload: true })}
            onMouseLeave={() => dispatchFn({ type: "element", payload: false })}
          >
            <h1 className="font-semibold text-[17px] px-10">
              {elementSectionData.title}
            </h1>
            <ul
              className="text-[15px] space-y-3 font-medium text-quadra
            w-full flex flex-wrap justify-between items-center px-10"
            >
              {elementSectionData.items.map(({ id, title, URL }) => (
                <li className="flex items-center w-1/3 gap-1" key={id}>
                  <Link
                    to={URL}
                    className="flex items-center justify-between w-full transition-all ease-linear hover:text-primeBlue"
                  >
                    <span>{title}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="w-full p-10 space-y-5 font-semibold text-white rounded-b-lg bg-secondary">
              <h1 className="text-lg text-center">
                Get 25% Discount Start Now
              </h1>
              <ul className="flex justify-between">
                {elementSectionData.discount.map(({ id, number, text }) => (
                  <li className="text-center" key={id}>
                    <h5 className="text-2xl text-[#f1f1f1f8]/75">{number}</h5>
                    <h6 className="">{text}</h6>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center">
                <Link
                  to="\"
                  className="bg-white text-secondary px-6 py-2
              flex justify-center items-center rounded gap-2
              hover:bg-[#f1f1f1] transition-all ease-linear"
                >
                  <span>Get Started</span>
                  <MdArrowRightAlt className="scale-150" />
                </Link>
              </div>
            </div>
          </div>
        )}
        {/* Support Section */}
        {navBar.supportSection && (
          <div
            className="bg-white absolute w-[80%]  rounded-lg border-t-2
          border-primeBlue  shadow-shadowOne space-y-4 p-7"
            onMouseEnter={() => dispatchFn({ type: "support", payload: true })}
            onMouseLeave={() => dispatchFn({ type: "support", payload: false })}
          >
            <ul
              className="text-[15px] space-y-3 font-medium text-quadra w-full
            flex flex-wrap justify-between items-baseline"
            >
              {supportSectionData.map(
                ({ id, title, subTitle, Icon, URL }, index) => (
                  <li
                    className="w-[49%] space-y-3 group border p-3 rounded"
                    key={id}
                  >
                    <Link
                      to={URL}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-7 pl-3">
                        <Icon className="scale-[2.2] text-primeBlue" />
                        <div className="space-y-1">
                          <h1
                            className="flex items-center gap-2 font-semibold transition-all 
                          ease-linear text-ternary group-hover:text-primeBlue text-[17px]"
                          >
                            <span>{title}</span>
                          </h1>
                          <h4 className="text-[13.5px]">
                            <span>{subTitle}</span>
                          </h4>
                        </div>
                      </div>
                    </Link>
                    {/* {!(index === serverSectionData.items.length - 1) && <hr />} */}
                  </li>
                )
              )}
            </ul>
            <div
              className="bg-[#f1f1f1] w-full p-7 text-sm font-medium
            flex justify-between rounded-b-lg"
            >
              <div>
                <h4 className="py-1">Check what's new</h4>
                <Link to="\" className="text-primeBlue hover:text-[#4099ff]">
                  Changelog
                </Link>
              </div>
              <div>
                <h4 className="py-1">Have a question?</h4>
                <Link to="\" className="text-primeBlue hover:text-[#4099ff]">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        )}
        {/* About Section */}
        {navBar.aboutSection && (
          <div
            className="bg-white absolute w-[30%]  rounded-lg border-t-2
      border-primeBlue ml-[710px] shadow-shadowOne space-y-4"
            onMouseEnter={() => dispatchFn({ type: "about", payload: true })}
            onMouseLeave={() => dispatchFn({ type: "about", payload: false })}
          >
            <ul className="text-[15px] space-y-3 font-medium text-quadra w-full px-7 pt-7">
              {aboutSectionData.map(
                ({ id, title, subTitle, Icon, URL }, index) => (
                  <li className="w-full space-y-3 group" key={id}>
                    <Link
                      to={URL}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-5">
                        <Icon className="scale-[1.7] text-primeBlue" />
                        <div>
                          <h1 className="flex items-center gap-2 font-semibold transition-all ease-linear text-ternary group-hover:text-primeBlue">
                            <span>{title}</span>
                          </h1>
                          <h4 className="text-[13px]">
                            <span>{subTitle}</span>
                          </h4>
                        </div>
                      </div>
                    </Link>
                    {!(index === aboutSectionData.length - 1) && <hr />}
                  </li>
                )
              )}
            </ul>
            <div
              className="bg-[#f1f1f1] w-full p-7 text-sm font-medium
            flex justify-between rounded-b-lg"
            >
              <div className="space-y-2">
                <h4 className="font-semibold text-ternary">
                  CEO Video Message
                </h4>
                <h5>Credibly synergize unique...</h5>
              </div>
              <img
                src={ceo}
                alt=""
                className="absolute bottom-0 right-0 object-contain h-24"
              />
            </div>
          </div>
        )}
        {/* Domain Section */}
        {navBar.domainSection && (
          <div
            className="bg-white absolute w-[80%]  rounded-lg border-t-2
      border-primeBlue  shadow-shadowOne  p-7 space-y-6"
            onMouseEnter={() => dispatchFn({ type: "domain", payload: true })}
            onMouseLeave={() => dispatchFn({ type: "domain", payload: false })}
          >
            <h1 className="text-xl font-medium">
              Search & Register Domain Names for Your Websites
            </h1>
            <BSearch style="space-y-5" />
          </div>
        )}
      </div>
    </section>
  );
};

export default NavBar;
