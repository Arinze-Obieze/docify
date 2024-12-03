import Layout from "@/components/layout";
import React from "react";

function Contact() {
  return (
    <Layout herotext={"Contact Our 24/7 Support"}>
      <div className="md:grid  md:grid-cols-2 md:justify-center">
        <div className="pt-12 md:pt-24 md:px-12">
          <div className="px-8">
            <h1 className="font-[700] md:text-[29px] text-left text-[22px] ">
              Hey there, Let's Solve your Problem Together! 🤓{" "}
            </h1>
            <div className="space-y-2 md:space-y-4 pt-4">
              <p className="text-[14px] md:text-[16px] md:leading-8 text-gray-600">
                We're more than happy to help with any issue you're having.
                Simply fill the form and send your message and we'll be in
                Touch.
              </p>
              <p className="text-[14px] md:text-[16px] md:leading-8 text-gray-600">
                We also highly recommend you to check out the below resources
                before opening your ticket to get help fast!
              </p>
            </div>
          </div>
          <div className="pt-8  font-[500] space-y-4 pl-8">
            <div className="bg-gray-100 w-fit px-4 py-2">
              <h3>See Frequently Asked Questions!</h3>
            </div>
            <div className="bg-gray-100 w-fit px-4 py-2">
              <h3>Search Our Help Center</h3>
            </div>
          </div>
        </div>



        <div className="flex md:px-8 mb-8 items-center  mt-12 justify-center">
  <div className="w-full shadow-xl border-2 border-gray-100 rounded-lg mx-4 px-4 py-6">
    <h4 className="text-2xl font-bold  text-gray-800">Shoot Your Message!</h4>
    <form className="flex flex-col mt-8 space-y-4">
      <input
        type="text"
        placeholder="Name"
        className="w-full px-4 py-2 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4831d4] focus:border-transparent"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-2 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4831d4] focus:border-transparent"
      />
      <textarea
        placeholder="Message"
        className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md resize-none h-32 focus:outline-none focus:ring-2 focus:ring-[#4831d4] focus:border-transparent"
      ></textarea>
      <button
        type="submit"
        className="w-full font-[500] py-2 text-white bg-[#4831d4] rounded-md hover:bg-[#4831d4] focus:outline-none focus:ring-2 focus:ring-[#4831d4] focus:ring-offset-2"
      >
        Send Message
      </button>
    </form>
  </div>
</div>

      </div>
    </Layout>
  );
}

export default Contact;
