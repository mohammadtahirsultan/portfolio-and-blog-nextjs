import React from "react";
import "../../../styles/custom.css";
// import LinkedInIcon from "@material-ui/icons/";
// import InstagramIcon from "@material-ui/icons/Instagram";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/ghareebstar";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <h1>About Us</h1>

        <div>
          <div >
            <Link
              href="/"
              className="rounded-full shadow-md"
            >
              <Image
                className="rounded-full object-cover"
                width={45}
                height={45}
                src={"/logo.png"}
                alt="brand logo" />
            </Link>
            <h2 className="mt-2">Mohammad Tahir</h2>
            <a href="https://youtube.com/@ghareebstar" target="blank">
              <Image
                className="rounded-full object-cover"
                width={35}
                height={35}
                src={"/youtube.png"}
                alt="brand logo" />
            </a>
            <span>
              Ghareeb Star Blog, Your Source for Programming Insights and Web Development Wonders!❤😎
              Explore the fusion of programming brilliance and web development artistry at Ghareeb Star Blog.Also Checkout YT Channel for Latest Tutorials
              😉😎🥰.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <h2>Our Brands</h2>
            <div className="grid grid-cols-5 gap-2">
              <a href="https://www.linkedin.com/in/ghareebstar" target="blank">
                <Image
                  className="rounded-full object-cover"
                  width={35}
                  height={35}
                  src={"/linkedin.png"}
                  alt="brand logo" />
              </a>

              <a href="https://instagram.com/ghareebstar" target="blank">
                <Image
                  className="rounded-full object-cover"
                  width={35}
                  height={35}
                  src={"/instagram.png"}
                  alt="brand logo" />
              </a>
              <a href="https://github.com/ghareebstar" target="blank">
                <Image
                  className="rounded-full object-cover"
                  width={35}
                  height={35}
                  src={"/github.png"}
                  alt="brand logo" />
              </a>
              <a href="https://youtube.com/@ghareebstar" target="blank">
                <Image
                  className="rounded-full object-cover"
                  width={35}
                  height={35}
                  src={"/youtube.png"}
                  alt="brand logo" />
              </a>

              <a href="https://facebook.com/ghareebstar" target="blank">
                <Image
                  className="rounded-full object-cover"
                  width={35}
                  height={35}
                  src={"/facebook.png"}
                  alt="brand logo" />
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
