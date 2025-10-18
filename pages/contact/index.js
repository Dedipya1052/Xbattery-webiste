import React, { useState } from "react";
import styles from "./styles.module.css";
import { FaRegEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Button } from "@chakra-ui/react";
import Image from "next/image";
import AnimatedDiv from "@/components/ui/Animate";
import IconWithGradient from "@/components/ui/IconGradient";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from reloading the page

    // Simple email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      // Send the email in JSON format to the API endpoint
      const res = await fetch(
        "https://a70b67b1955ee7fba12198dd1cf2e2.db.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/3fcf5123d0a54bd28b0f50caba32ac9e/triggers/manual/paths/invoke/?api-version=1&tenantId=tId&environmentName=a70b67b1-955e-e7fb-a121-98dd1cf2e2db&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=bGUX_Lth_qV_26pM9x5AVZyisP0-TKA-A-mor-c05eQ",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }), // Send email as JSON
        }
      );
      //console.log(res);

      if (res.ok) {
        // Handle success
        setMessage("Thank you for registering!");
      } else {
        // Handle API errors
        const errorData = await res.json();
        setMessage(errorData.message || "Oops! Something went wrong.");
      }
    } catch (error) {
      // Handle network or other unexpected errors
      setMessage("Error while submitting. Please try again.");
    }
  };

  return (
    <div className={styles.head1}>
      <div className=" text-white ">
        <div className="w-full h-[250px] md:h-[400px] xl:h-[350px] 2xl:h-[400px] relative overflow-hidden">
          <Image
            src="/images/contact/contactbg.png" // Ensure the correct path to your image
            width={1500}
            height={1500}
            className="w-full h-full  object-cover  opacity-[35%]"
            alt="career"
          />

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }} // Assuming you want it to always animate in
            transition={{ duration: 0.75, delay: 0 }}
            className="absolute md:top-0 md:left-0  md:right-0 top-[-0.5rem] w-full md:w-[90%] mx-auto h-full flex flex-col items-center md:items-start justify-center p-4 md:p-16 space-y-2 text-left"
          >
            <h1 className="text-white text-4xl lg:text-5xl  mb-4 font-bold">
              Contact our team
            </h1>
            <div className="text-white text-xl lg:text-2xl text-center md:text-left lg:ml-[0.3rem]">
              Let us know how we can help 
            </div>
            
          </motion.div>
        </div>

        <AnimatedDiv>
        <div className="flex justify-center items-center flex-wrap gap-6 max-w-4xl mx-auto my-8">
      {/* Email Block */}
      <div className="bg-gray-900 p-6 rounded-lg flex flex-col items-center text-center w-80 shadow-lg hover:shadow-xl transition-shadow duration-300 h-64">
        <div className="text-3xl mb-4">
          <IconWithGradient size={32}>
            <FaRegEnvelope />
          </IconWithGradient>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Contact Us</h3>
        <p className="text-gray-400 mb-4">Our support team is here to help with any inquiries or<br/> assistance.</p>
        <a
          href="mailto:sales@xbattery.energy"
          className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300 mt-auto font-medium"
        >
         sales@xbattery.energy
        </a>
      </div>

      {/* Location Block */}
      <div className="bg-gray-900 p-6 rounded-lg flex flex-col items-center text-center w-80 shadow-lg hover:shadow-xl transition-shadow duration-300 h-64">
        <div className="text-3xl mb-4">
          <IconWithGradient size={32}>
            <FaMapMarkerAlt />
          </IconWithGradient>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
        <div className="text-gray-400 mb-4 overflow-hidden max-h-24">
          <p className="line-clamp-3">
           {/* T-Works, Silpa Gram Craft Village, Rai Durg, Hyderabad, Telangana 500081, India 
           
           */}

           Sy No. 154, H.No. 7-107, Main Road, Gandipet Mandal, Narsingi, Rangareddy, Telangana - 500075


          </p>
        </div>
        <a
          href="https://www.google.com/maps/search/CoKarma+-+Coworking+Space/@17.3846746,78.3290788,17z?entry=ttu&g_ep=EgoyMDI1MTAwNi4wIKXMDSoASAFQAw%3D%3D"
          
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300 mt-auto font-medium"
        >
          View on Google Maps
        </a>
      </div>
    </div>
        </AnimatedDiv>

        <AnimatedDiv>
          <div
            className="email-registration text-center pt-[2rem] pb-[2.5rem] bg-[#151515]"
            //   ref={emailRef}
            id="registerEmail"
          >
            <h2
              className={`md:text-2xl font-semibold mb-[1.5rem] ${styles.color1} font-bolder xl:min-h-[3rem] leading-[45px] md:leading-[60px]`}
            >
              Get the updates from Xbattery
            </h2>
            <form
              onSubmit={handleSubmit}
              className="flex justify-center items-center mb-4]"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:border-[#bbbbbb] w-auto sm:w-[300px] bg-[#0f0f0f] text-white min-h-[48px] min-w-[48px]"
              />
              <button
                type="submit"
                className="px-6 py-2 border border-gray-300 text-white rounded-r-md hover:bg-[#181818] focus:outline-none focus:ring-2 min-h-[48px] min-w-[48px]"
              >
                Get Notified
              </button>
            </form>
            {message && <p className="text-gray-400 mt-4">{message}</p>}
          </div>
        </AnimatedDiv>
      </div>
    </div>
  );
};

export default Contact;
