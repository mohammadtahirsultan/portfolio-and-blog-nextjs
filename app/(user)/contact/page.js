import React from "react";
import "../../../styles/custom.css";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="contactContainer">

      <a className="mailBtn" href="mailto:tahirsultanofficial@gmail.com">
        <button>Contact: tahirsultanofficial@gmail.com</button>
      </a>

      <div className="mb-52 md:mb-20 flex justify-center items-center mailBtn">
        <p className="tracking-widest font-semibold mr-4">Contact Us on :</p>
        <a href="https://api.whatsapp.com/send?phone=03241553013">
          {/* <button className="tracking-widest font-semibold"> Send Message</button>/ */}
          <Image width={40} height={30} alt={"contact-us-on-whatsapp"} src="/whatsapp.png" />
        </a>
      </div>

    </div>
  );
};

export default Contact;
