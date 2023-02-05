import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import banner2 from "../../assets/banner2.png";
import vec1 from '../../assets/work-vec1.png'
import vec2 from '../../assets/work-vec2.png'
import vec3 from '../../assets/work-vec3.png'
import shape from '../../assets/vector.png'

const Workout = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-7 lg:mt-28 mt-12 mb-12">
      <div className="flex justify-center px-3.5 relative" style={{
        background: `url(${shape})`,
        backgroundPosition: 'left',
        backgroundSize: 'cover'
      }}>
        <Image src={banner2} alt="banner" />

        <div className="flex bg-white py-2.5 px-5 rounded-xl absolute bottom-12 left-9 work-vac-1" >
            <div className="w-12 h-12 rounded-full flex justify-center items-center  bg-gradient-to-r from-blue-700 to-blue-300">
                <Image src={vec1} alt="banner vec" />
            </div>
            <div className="ml-2">
                <h4 className="text-base font-bold">800 Kall</h4>
                <p className="text-xs">Burn fat</p>
            </div>
        </div>

        <div className="w-12 h-12 rounded-full flex justify-center items-center bg-gradient-to-r from-blue-700 to-blue-300 absolute right-14 top-44 work-vec-2">
            <Image src={vec2} alt="banner vec" />
        </div>
        <div className="w-12 h-12 rounded-full flex justify-center items-center bg-gradient-to-r from-pink-700 to-pink-300 absolute top-10 left-14 work-vec-3">
            <Image src={vec3} alt="banner vec" />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <h2
          className="lg:text-7xl text-4xl font-bold"
          style={{ lineHeight: "55px", fontFamily: "Darker Grotesque" }}
        >
          Best full body workout to lose fat
        </h2>
        <p className="text-base mt-6 mb-8 pr-15">
        Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. 
        </p>
        <div className="mb-12">
        <button
            className="text-white font-bold py-3 px-8 rounded-lg flex"
            style={{ background: "#264373" }}
          >
            <Link href="/login">Get Started</Link>
            <div className="w-7 h-7 ml-6 flex justify-center items-center">
                <span className="text-xl"><FontAwesomeIcon className="w-4 h-4" icon={faRightLong} /></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Workout;
