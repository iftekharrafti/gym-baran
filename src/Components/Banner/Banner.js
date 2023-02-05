import Image from "next/image";
import Link from "next/link";
import React from "react";
import brand1 from "../../assets/brand1.png";
import brand2 from "../../assets/brand2.png";
import brand3 from "../../assets/brand3.png";
import brand4 from "../../assets/brand4.png";
import banner from "../../assets/banner.png";
import bannerVec1 from "../../assets/banner-vec1.png";
import bannerVec2 from "../../assets/banner-vec2.png";
import bannerVec3 from "../../assets/banner-vec3.png";
import bannerVec4 from "../../assets/banner-vec4.png";
import shape from "../../assets/shape.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-7" >
      <div className="flex flex-col justify-center">
        <h2
          className="lg:text-7xl text-5xl font-bold"
          style={{ lineHeight: "65px", fontFamily: "Darker Grotesque" }}
        >
          Healthy in side <span style={{ color: "#6765F0" }}>fresh</span> out
          side
        </h2>
        <p className="text-base mt-6 mb-8 pr-15">
          Exercise is a very important need for our body. Health and fitness
          will be obtained if you can do regular exercise and run a healthy
          routine.
        </p>
        <div className="mb-12 lg:flex ">
          <button
            className="text-white font-bold py-3 px-8 rounded-lg flex mb-5"
            style={{ background: "#264373" }}
          >
            <Link href="/login">Get Started</Link>
            <div className="w-7 h-7 bg-white rounded-full ml-6 flex justify-center items-center">
                <span className="text-xl"><FontAwesomeIcon className="w-4 h-4" style={{color: '#264373'}} icon={faChevronRight} /></span>
            </div>
          </button>

          <button
            className="text-black bg-white font-bold py-3 px-8 rounded-lg lg:ml-9 flex mb-5"
            style={{ color: "#264373" }}
          >
            <div className="w-7 h-7 rounded-full flex justify-center items-center" style={{ background: "#264373" }}>
                <span><FontAwesomeIcon className="w-4 h-4 text-white" icon={faCaretRight} /></span>
            </div>
            <Link className="ml-6" href="/login">Learn more</Link>
          </button>
        </div>
        <p>Brands:</p>
        <div className="flex mt-3">
          <Image className="w-20 h-12 mr-1" src={brand1} alt="brand" />
          <Image className="w-20 h-12 mr-7" src={brand2} alt="brand" />
          <Image className="w-20 h-12 mr-7" src={brand3} alt="brand" />
          <Image className="w-20 h-12" src={brand4} alt="brand" />
        </div>
      </div>
      <div className="relative flex flex-col items-center">
        <Image className="w-10/12" src={banner} alt="banner" />

        <div className="flex bg-white py-2.5 px-5 rounded-xl absolute top-12 left-8 top-left" >
            <div className="w-12 h-13 rounded-full flex justify-center items-center  bg-gradient-to-r from-blue-700 to-blue-300">
                <Image src={bannerVec1} alt="banner vec" />
            </div>
            <div className="ml-2">
                <h4 className="text-base font-bold">150+</h4>
                <p className="text-xs">Members</p>
            </div>
        </div>

        <div className="w-12 h-12 rounded-full flex justify-center items-center bg-gradient-to-r from-blue-700 to-blue-300 absolute right-14 top-12 top-right">
            <Image src={bannerVec2} alt="banner vec" />
        </div>

        <div className="w-12 h-12 rounded-full flex justify-center items-center bg-gradient-to-r from-blue-700 to-blue-300 absolute left-14 bottom-14 bottom-left" >
            <Image src={bannerVec3} alt="banner vec" />
        </div>

        <div className="flex flex-col justify-center items-center bg-white py-2.5 px-5 rounded-xl absolute bottom-12 right-8 bottom-right">
            <Image src={bannerVec4} alt="banner vec" />
            <h4 className="text-base font-bold">Zaqky Simorang</h4>
            <p className="text-xs">Trainer</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
