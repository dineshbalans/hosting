import React, { useReducer } from "react";
import { LuPlus, LuMinus } from "react-icons/lu";
import { motion } from "framer-motion";

const initialArg = {
  faq_1: false,
  faq_2: false,
  faq_3: false,
  faq_4: false,
};

const reducerFn = (prevState, action) => {
  return action.type === "FAQ_1"
    ? { ...initialArg, faq_1: !prevState.faq_1 }
    : action.type === "FAQ_2"
    ? { ...initialArg, faq_2: !prevState.faq_2 }
    : action.type === "FAQ_3"
    ? { ...initialArg, faq_3: !prevState.faq_3 }
    : action.type === "FAQ_4"
    ? { ...initialArg, faq_4: !prevState.faq_4 }
    : initialArg;
};

const FAQ = () => {
  const [state, dispatchFn] = useReducer(reducerFn, initialArg);
  return (
    <section className="bg-white">
      <div className="pdng space-y-16 centerContainer">
        <div className="space-y-3">
          <h1 className="title">Frequently Asked Queries</h1>
          <p className="text-quadra w-full md:w-[70%] text-base leading-7 text-justify md:text-left">
            Efficiently productivate reliable paradigms before ubiquitous
            models. Continually utilize frictionless expertise whereas tactical
            relationships. Still have questions?
            <span className="text-primary"> Contact us</span>
          </p>
        </div>
        {/* FAQ SECTION */}
        <div className="space-y-5">
          <div
            className="space-y-6 cursor-pointer pt-1"
            onClick={() => dispatchFn({ type: "FAQ_1" })}
          >
            <div
              className="flex justify-between items-center
          font-semibold text-ternary"
            >
              <h1 className="">What is Web Hosting</h1>
              {state.faq_1 ? (
                <LuMinus className="scale-[1.35] text-quadra" />
              ) : (
                <LuPlus className="scale-[1.35] text-quadra" />
              )}
            </div>
            <hr />
            {state.faq_1 && (
              <div className="text-quadra pb-12 leading-7">
                Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                aesthetic synth nesciunt you probably haven't heard of them
                accusamus labore sustainable VHS.
              </div>
            )}
          </div>
          <div
            className="space-y-6 cursor-pointer pt-1"
            onClick={() => dispatchFn({ type: "FAQ_2" })}
          >
            <div
              className="flex justify-between items-center
          font-semibold text-ternary"
            >
              <h1 className="">
                What Are the Different Types of Web Hosting Products DreamHost
                Offers?
              </h1>
              {state.faq_2 ? (
                <LuMinus className="scale-[1.35] text-quadra" />
              ) : (
                <LuPlus className="scale-[1.35] text-quadra" />
              )}
            </div>
            <hr />
            {state.faq_2 && (
              <div className="text-quadra pb-12 leading-7">
                Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                beer farm-to-table, raw denim aesthetic synth nesciunt you
                probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            )}
          </div>
          <div
            className="space-y-6 cursor-pointer pt-1"
            onClick={() => dispatchFn({ type: "FAQ_3" })}
          >
            <div
              className="flex justify-between items-center
          font-semibold text-ternary"
            >
              <h1 className="">How Do I Buy a Domain Name?</h1>
              {state.faq_3 ? (
                <LuMinus className="scale-[1.35] text-quadra" />
              ) : (
                <LuPlus className="scale-[1.35] text-quadra" />
              )}
            </div>
            <hr />
            {state.faq_3 && (
              <div className="text-quadra pb-12 leading-7">
                Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                aesthetic synth nesciunt you probably haven't heard of them
                accusamus labore sustainable VHS.
              </div>
            )}
          </div>
          <div
            className="space-y-6 cursor-pointer pt-1"
            onClick={() => dispatchFn({ type: "FAQ_4" })}
          >
            <div
              className="flex justify-between items-center
          font-semibold text-ternary"
            >
              <h1 className="">
                Can You Help Me Understand More About WordPress?
              </h1>
              {state.faq_4 ? (
                <LuMinus className="scale-[1.35] text-quadra" />
              ) : (
                <LuPlus className="scale-[1.35] text-quadra" />
              )}
            </div>
            {state.faq_4 && <hr />}
            {state.faq_4 && (
              <div className="text-quadra pb-12 leading-7">
                Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                vice lomo. Leggings occaecat craft beer farm-to-table.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
