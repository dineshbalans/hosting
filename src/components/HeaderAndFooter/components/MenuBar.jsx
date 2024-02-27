import React, { useReducer } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import {
  aboutSectionData,
  homeSectionData,
  hostingSectionData,
  pageSectionData,
  securitySectionData,
  serverSectionData,
  supportSectionData,
} from "../data/navBarData";
import ceo from "../../../assets/img/ceo.png";
import { Link } from "react-router-dom";
import BSearch from "../../BSearch/BSearch";

const initialState = {
  home: false,
  pages: false,
  hosting: false,
  server: false,
  security: false,
  support: false,
  about: false,
  domains: false,
};

const reducerFn = (prevState, action) => {
  return action.type === "home"
    ? { ...initialState, home: !prevState.home }
    : action.type === "pages"
    ? { ...initialState, pages: !prevState.pages }
    : action.type === "hosting"
    ? { ...initialState, hosting: !prevState.hosting }
    : action.type === "server"
    ? { ...initialState, server: !prevState.server }
    : action.type === "security"
    ? { ...initialState, security: !prevState.security }
    : action.type === "support"
    ? { ...initialState, support: !prevState.support }
    : action.type === "about"
    ? { ...initialState, about: !prevState.about }
    : action.type === "domains"
    ? { ...initialState, domains: !prevState.domains }
    : initialState;
};

const MenuBar = ({ setMenuBar }) => {
  const [menu, dispatchFn] = useReducer(reducerFn, initialState);

  return (
    <section className="bg-white w-full p-5 lg:hidden space-y-5">
      <ul className="px-3 md:px-16 font-medium space-y-3">
        {/* Home */}
        <li
          onClick={() => dispatchFn({ type: "home" })}
          className={`flex justify-between items-center ${
            menu.home ? "text-primeBlue" : "text-quadra"
          }`}
        >
          <span className="capitalize">home</span>
          {menu.home ? <BiMinus /> : <BiPlus />}
        </li>
        {menu.home && (
          <div
            className="bg-white rounded-r-lg space-y-4 pt-3 pb-6 pl-5 
          h-48 overflow-scroll border-l-2 border-primeBlue"
          >
            <div className="space-y-5">
              <h1 className="font-semibold text-[17px]">
                {homeSectionData.sec2.title}
              </h1>
              <ul className="text-[15px] space-y-3 font-medium text-quadra">
                {homeSectionData.sec2.sec2Items.map(
                  ({ id, item, isHot, URL }) => (
                    <li
                      key={id}
                      className="flex items-center gap-2"
                      onClick={setMenuBar}
                    >
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
            <div className="">
              <ul className="text-[15px] space-y-3 font-medium text-quadra">
                {homeSectionData.sec3.sec3Items.map(
                  ({ id, item, URL, isNew }) => (
                    <li
                      key={id}
                      className="flex items-center gap-2"
                      onClick={setMenuBar}
                    >
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
        )}
        {/* Pages */}
        <li
          onClick={() => dispatchFn({ type: "pages" })}
          className={`flex justify-between items-center ${
            menu.pages ? "text-primeBlue" : "text-quadra"
          }`}
        >
          <span className="capitalize">pages</span>
          {menu.pages ? <BiMinus /> : <BiPlus />}
        </li>
        {menu.pages && (
          <ul
            className="text-[15px] space-y-3 font-medium text-quadra w-full 
          pt-3 pb-6 pl-5 h-48 overflow-scroll border-l-2 border-primeBlue"
          >
            {pageSectionData.map(({ id, item, URL, isNew }) => (
              <li
                className="flex items-center w-full gap-1"
                key={id}
                onClick={setMenuBar}
              >
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
        )}
        {/* Hosting */}
        <li
          onClick={() => dispatchFn({ type: "hosting" })}
          className={`flex justify-between items-center ${
            menu.hosting ? "text-primeBlue" : "text-quadra"
          }`}
        >
          <span className="capitalize">hosting</span>
          {menu.hosting ? <BiMinus /> : <BiPlus />}
        </li>
        {menu.hosting && (
          <ul
            className="text-[15px] space-y-3 font-medium text-quadra w-full
            pt-3 pb-6 pl-5 h-48 overflow-scroll border-l-2 border-primeBlue 
          flex flex-wrap justify-between items-center gap-1"
          >
            {hostingSectionData.items.map(
              ({ id, title, subTitle, URL, Icon, price }, index) => (
                <li
                  className="flex items-center group"
                  key={id}
                  onClick={setMenuBar}
                >
                  <Link to={URL} className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <Icon className="scale-[1.5] text-primeBlue -translate-y-1" />
                      <div>
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
                          <span>{subTitle}</span>
                          <span>{price}</span>
                        </h4>
                      </div>
                    </div>
                  </Link>
                </li>
              )
            )}
          </ul>
        )}
        {/* Server */}
        <li
          onClick={() => dispatchFn({ type: "server" })}
          className={`flex justify-between items-center ${
            menu.server ? "text-primeBlue" : "text-quadra"
          }`}
        >
          <span className="capitalize">Server</span>
          {menu.server ? <BiMinus /> : <BiPlus />}
        </li>
        {menu.server && (
          <ul
            className="text-[15px] space-y-3 font-medium text-quadra w-full px-7 lg:pt-7
          pt-3 pb-6 pl-5 h-48 overflow-scroll border-l-2 border-primeBlue"
          >
            {serverSectionData.items.map(
              ({ id, title, subTitle, Icon, URL }, index) => (
                <li
                  className="w-full space-y-3 group"
                  key={id}
                  onClick={setMenuBar}
                >
                  <Link to={URL} className="flex items-center justify-between">
                    <div className="flex items-center gap-7">
                      <Icon className="scale-[4] text-primeBlue" />
                      <div>
                        <h1 className="flex items-center gap-2 font-semibold transition-all ease-linear text-ternary group-hover:text-primeBlue">
                          <span>{title}</span>
                        </h1>
                        <h4 className="text-[13px]">
                          <span>{subTitle.substring(0, 50)}...</span>
                        </h4>
                      </div>
                    </div>
                  </Link>
                  {!(index === serverSectionData.items.length - 1) && <hr />}
                </li>
              )
            )}
          </ul>
        )}
        {/* Security */}
        <li
          onClick={() => dispatchFn({ type: "security" })}
          className={`flex justify-between items-center ${
            menu.security ? "text-primeBlue" : "text-quadra"
          }`}
        >
          <span className="capitalize">Security</span>
          {menu.security ? <BiMinus /> : <BiPlus />}
        </li>
        {menu.security && (
          <ul
            className="text-[15px] space-y-3 font-medium text-quadra w-full px-7 lg:pt-7
        pt-3 pb-6 pl-5 h-48 overflow-scroll border-l-2 border-primeBlue"
          >
            {securitySectionData.items.map(
              ({ id, title, subTitle, Icon, URL }, index) => (
                <li
                  className="w-full space-y-3 group"
                  key={id}
                  onClick={setMenuBar}
                >
                  <Link to={URL} className="flex items-center justify-between">
                    <div className="flex items-center gap-7">
                      <Icon className="scale-[4] text-primeBlue" />
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
                  {!(index === serverSectionData.items.length - 1) && <hr />}
                </li>
              )
            )}
          </ul>
        )}
        {/* Support */}
        <li
          onClick={() => dispatchFn({ type: "support" })}
          className={`flex justify-between items-center ${
            menu.support ? "text-primeBlue" : "text-quadra"
          }`}
        >
          <span className="capitalize">support</span>
          {menu.support ? <BiMinus /> : <BiPlus />}
        </li>
        {menu.support && (
          <ul
            className="text-[15px] space-y-3 font-medium text-quadra w-full px-7 lg:pt-7
            pt-3 pb-6 pl-5 h-48 overflow-scroll border-l-2 border-primeBlue"
          >
            {supportSectionData.map(
              ({ id, title, subTitle, Icon, URL }, index) => (
                <li
                  className="w-full space-y-3 group"
                  key={id}
                  onClick={setMenuBar}
                >
                  <Link to={URL} className="flex items-center justify-between">
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
                  {!(index === supportSectionData.length - 1) && <hr />}
                </li>
              )
            )}
          </ul>
        )}
        {/* About */}
        {/* <li
          onClick={() => dispatchFn({ type: "about" })}
          className={`flex justify-between items-center ${
            menu.about ? "text-primeBlue" : "text-quadra"
          }`}
        >
          <span className="capitalize">about</span>
          {menu.about ? <BiMinus /> : <BiPlus />}
        </li> */}
        {menu.about && (
          <ul
            className="text-[15px] space-y-3 font-medium text-quadra w-full px-7 lg:pt-7
            pt-3 pb-6 pl-5 h-48 overflow-scroll border-l-2 border-primeBlue"
          >
            {aboutSectionData.map(
              ({ id, title, subTitle, Icon, URL }, index) => (
                <li
                  className="w-full space-y-3 group"
                  key={id}
                  onClick={setMenuBar}
                >
                  <Link to={URL} className="flex items-center justify-between">
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
        )}
        {/* Domains */}
        <li onClick={setMenuBar}>
          <Link to="/domain-search-one">Domains</Link>
        </li>
      </ul>
      <div className="flex px-3 md:px-16">
        <a
          className="px-6 py-3 text-sm text-white rounded bg-primary 
          hover:bg-primary/80 transition-all ease-linear w-full sml:w-1/2 text-center"
          href="https://portal.HostIT.com/client/login/"
          target="_blank"
        >
          Login
        </a>
      </div>
    </section>
  );
};

export default MenuBar;
