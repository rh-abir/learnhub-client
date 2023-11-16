import bannerImg from "../../../assets/banner_img.png";
const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-1/2">
          <img src={bannerImg} className=" rounded-lg  w-full ml-auto" />
        </div>
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">
            Learn <span className="text-[#1976D2]">Skills</span> From Our Top
            Instructors
          </h1>
          <p className="py-6 text-[#0a233d]">
            Embarking on a journey to acquire new skills is an enriching
            experience, and our platform is proud to offer a diverse array of
            learning opportunities with top-tier instructors. Our instructors
            are experts in their respective fields, bringing a
          </p>
          <button className="uppercase btn btn-active bg-[#1976D2] hover:text-black text-white">
            explore courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
