import { FaGraduationCap } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiCustomerService2Line, RiFolderVideoFill } from "react-icons/ri";

import aobutImg1 from "../../../assets/about_img01.png";
import aobutImg2 from "../../../assets/about_img02.png";

const AboutUs = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col-reverse lg:flex-row">
        <div className="md:w-1/2 relative">
          <img
            src={aobutImg2}
            className=" sm:hidden md:block max-w-sm absolute -right-0 top-20 rounded-lg shadow-2xl"
          />
          <img
            src={aobutImg1}
            className="max-w-sm rounded-lg w-full shadow-2xl"
          />
        </div>

        <div className="md:w-1/2 mr-auto">
          <h1 className="text-5xl font-bold">
            Discover Top{" "}
            <span className="text-[#1976D2]"> InstructorsAround</span> The World
          </h1>
          <p className="py-6">
            Borem ipsum dolor sit amet, consectetur adipiscing eliawe awUt elit
            ellus, luctus nec ullamcorper mattisBorem ipsum dolor awes atnse
            awctetur adipis we followelit. Borem.
          </p>
          <div className="grid grid-cols-2 gap-2 mb-5">
            <div className="flex items-center  gap-2">
              <div>
                <RiCustomerService2Line className=" text-[#2E98E5] text-4xl" />
              </div>
              <div>
                <p className="font-bold text-blue-950">2000+ </p>
                <h2 className="font-semibold">Expert Turors</h2>
              </div>
            </div>

            {/* item-2  */}
            <div className="flex items-center  gap-2">
              <div>
                <IoDocumentTextOutline className=" text-green-900 text-4xl" />
              </div>
              <div>
                <p className="font-bold text-blue-950">2000+ </p>
                <h2 className="font-semibold">Expert Turors</h2>
              </div>
            </div>

            {/* item-3  */}
            <div className="flex items-center  gap-2">
              <div>
                <FaGraduationCap className=" text-blue-800 text-4xl" />
              </div>
              <div>
                <p className="font-bold text-blue-950">2000+ </p>
                <h2 className="font-semibold">Expert Turors</h2>
              </div>
            </div>

            {/* item-4  */}
            <div className="flex items-center  gap-2">
              <div>
                <RiFolderVideoFill className=" text-red-900 text-4xl" />
              </div>
              <div>
                <p className="font-bold text-blue-950">2000+ </p>
                <h2 className="font-semibold">Expert Turors</h2>
              </div>
            </div>
          </div>
          <button className="uppercase btn btn-active bg-[#1976D2] hover:text-black text-white">
            explore courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
