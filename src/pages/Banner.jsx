import banner from "../assets/bg-shadow.png";
import bannerImg from "../assets/banner-main.png";

export default function Banner() {
  return (
    <>
      <section
        className=" my-5 md:my-10 min-h-[400px] md:min-h-[500px] p-10 max-w-7xl  mx-4 md:mx-auto md:mx-4 lg:mx-auto lg:mx-8  rounded-3xl  bg-cover bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className=" flex   flex-col min-h-[400px] md:min-h-[500px] items-center  justify-center  text-center   ">
          <img
            className="w-50  md:w-70 lg:w-80  mb-5 md:10  "
            src={bannerImg}
            alt=""
            srcset=""
          />
          <h1 className=" text-2xl  md:text-4xl lg:text-5xl font-bold">
            Assemble Your Ultimate Dream-11 Cricket Team
          </h1>
          <h3 className="text-sm md:text-xl mt-3 md:mt-5 font-semibold text-gray-500 mb-3 md:mb-4">
            Beyond Boundaries Beyond Limits
          </h3>

          <div className="border p-1 rounded-2xl border-[#E7FE29]">
            <button className=" border   bg-[#E7FE29] hover:bg-[#b0c210] text-black font-bold rounded-xl px-5 py-2">
              Claim Free Credit
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
