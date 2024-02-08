import React from "react";
import InfoHeader from "../../../components/General/InfoHeader";
import TrustedCompanies from "../../../components/TrustedCompanies/TrustedCompanies";
import MainContext from "../../../components/General/MainContext";

const SubmitRequest = () => {
  return (
    <section>
      <InfoHeader
        title="Submit Request"
        desc="Credibly transform low-risk high-yield strategic theme
        areas through market positioning interfaces. Rapidiously synthesize 
        cutting-edge bandwidth."
      />
      <div className="pddng space-y-12 centerContainer">
        <MainContext
          title="Submit Your Request"
          subTitle="Synergistically impact innovative imperatives after magnetic bandwidth. 
          Collaboratively generate sustainable customer service without."
        />
        <form className="flex flex-wrap justify-between gap-6">
          <div className="w-full lg:w-[48.5%] space-y-2">
            <label htmlFor="help-options" className="font-medium text-ternary">
              Hi, what can we help you with?
            </label>
            <select
              id="help-options"
              className="w-full outline-none border rounded p-2 focus:border-primary"
            >
              <option value="1">Domain Registrations</option>
              <option value="2">Getting Started</option>
              <option value="3">Hosting</option>
              <option value="4">Domain Registrations</option>
              <option value="5">General</option>
            </select>
          </div>
          <div className="w-full lg:w-[48.5%] space-y-2">
            <label htmlFor="select-domain" className="font-medium text-ternary">
              Tell Us More
            </label>
            <select
              id="select-domain"
              className="w-full outline-none border rounded p-2 focus:border-primary"
            >
              <option value="1">What if my domain registration expires?</option>
              <option value="2">Getting Started</option>
              <option value="3">Hosting</option>
              <option value="4">Domain Registrations</option>
              <option value="5">General</option>
            </select>
          </div>
          {/* Name */}
          <div className="w-full lg:w-[48.5%] space-y-2">
            <label htmlFor="name" className="font-medium text-ternary">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full outline-none border rounded p-[10px] focus:border-primary text-[15px] placeholder:text-sm placeholder:font-light"
            />
          </div>
          {/* Email */}
          <div className="w-full lg:w-[48.5%] space-y-2">
            <label htmlFor="email" className="font-medium text-ternary">
              Your email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Email Address"
              className="w-full outline-none border rounded p-[10px] focus:border-primary text-[15px] placeholder:text-sm placeholder:font-light"
            />
          </div>
          {/* Website */}
          <div className="w-full lg:w-[48.5%] space-y-2">
            <label htmlFor="website" className="font-medium text-ternary">
              Your Website Link
            </label>
            <input
              type="text"
              id="website"
              placeholder="https:///"
              className="w-full outline-none border rounded p-[10px] focus:border-primary text-[15px] placeholder:text-sm placeholder:font-light"
            />
          </div>
          {/* Attachment */}
          <div className="w-full lg:w-[48.5%] space-y-2">
            <label htmlFor="dropzone-file" className="font-medium text-ternary">
              Attachments
            </label>
            <label
              for="dropzone-file"
              className="flex flex-col items-center justify-center w-full border border-gray-300 border-dashed rounded cursor-pointer bg-gray-50 hover:bg-gray-100 "
            >
              <h6 className="flex flex-col items-center justify-center p-[10px] text-gray-500">
                Upload Your Files
              </h6>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
          {/* Description */}
          <div className="w-full space-y-2">
            <label htmlFor="description" className="font-medium text-ternary">
              Provide a detailed description *
            </label>
            <textarea
              id="description"
              placeholder="How can we help you?"
              className="w-full h-32 outline-none border rounded p-[10px] focus:border-primary text-[15px] placeholder:text-sm placeholder:font-light"
            />
            <p className="text-[13px]">
              Please enter the details of your request. A member of our support
              staff will respond as soon as possible.
            </p>
          </div>
          <button className="primeBttn">SUBMIT A REQUEST</button>
        </form>
      </div>
      <TrustedCompanies />
    </section>
  );
};

export default SubmitRequest;
