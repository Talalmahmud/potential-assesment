import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import Image from "next/image";
import Link from "next/link";

const serviceList = [
  {
    title: "ux",
    imgUrl: "/icons/Group 18.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
  },
  {
    title: "ux",
    imgUrl: "/icons/Group 18.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
  },
  {
    title: "ux",
    imgUrl: "/icons/Group 18.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
  },
  {
    title: "ux",
    imgUrl: "/icons/Group 18.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
  },
];

const projectList = [
  {
    title: "ux",
    imgUrl: "/icons/project-1.png",
    description: "AirCalling Landing Page Design ",
  },
  {
    title: "ux",
    imgUrl: "/icons/project-1.png",
    description: "AirCalling Landing Page Design ",
  },
  {
    title: "ux",
    imgUrl: "/icons/project-1.png",
    description: "AirCalling Landing Page Design ",
  },
];

export default function Home() {
  return (
    <div className=" min-w-full  min-h-screen ">
      {/* navbar */}
      <div className=" w-[1420px] mx-auto mt-[61px] flex justify-between items-center ">
        <Image src="/icons/logo.svg" width={279} height={67} />
        <div className="flex items-center gap-8 ">
          <div className=" w-[807px] flex items-center justify-between">
            <Link href="/" className="text-[21px] text-black ">
              Home
            </Link>
            <Link href="/" className="text-[21px] text-black ">
              About Us
            </Link>
            <Link href="/" className="text-[21px] text-black ">
              Services
            </Link>
            <Link href="/" className="text-[21px] text-black ">
              Projects
            </Link>
            <Link href="/" className="text-[21px] text-black ">
              Testimonials
            </Link>
            <Link href="/" className="text-[21px] text-black ">
              Contact
            </Link>
          </div>
          <button className="h-[52px] w-[188px]  text-[21px] rounded-[5px] bg-[#FD6F00] text-white flex justify-center items-center">
            download cv
          </button>
        </div>
      </div>

      {/* hero section */}
      <div className="w-[1400px] mx-auto mt-[150px] flex items-center justify-between">
        <div>
          <div className=" w-[714px] flex flex-col ">
            <p className=" text-[24px] font-semibold">Hi I am </p>
            <p className="text-[#FD6F00] text-[32px]">Muhammad Umair </p>
            <p className=" text-[100px] font-bold m-0 -mt-6 ">UI & UX</p>
            <p className=" text-right text-[100px] font-bold m-0 -mt-16">
              Designer
            </p>
          </div>
          <div className="flex flex-col gap-4 w-[698px]">
            <p className=" tracking-widest text-justify text-[21px]">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium.
              Turpis tempus pharetra
            </p>
            <button className=" h-[52px] w-[188px] rounded-[5px] bg-[#FD6F00] text-white text-[21px] flex justify-center items-center">
              Hire Me
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 w-[538px]">
          <Image src={"/icons/user.png"} height={617} width={538} alt="" />
          <div className=" flex items-center gap-4">
            <Image
              src={"/icons/facebook.svg"}
              height={32.48}
              width={43.48}
              alt=""
            />
            <Image
              src={"/icons/facebook.svg"}
              height={32.48}
              width={43.48}
              alt=""
            />
            <Image
              src={"/icons/instagram.svg"}
              height={32.48}
              width={43.48}
              alt=""
            />
            <Image
              src={"/icons/linkedin.svg"}
              height={32.48}
              width={43.48}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* skills */}
      <div className="w-[1470px] h-[407px] mx-auto mt-[200px] flex items-center justify-between">
        <Image src={"/icons/user.png"} height={407} width={681} alt="" />
        <div className=" w-[756px] flex flex-col">
          <p className=" text-[65px] font-semibold">About Me</p>
          <p className=" pt-4 tracking-widest text-justify text-[21px]">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra
          </p>
          <div className=" mt-2 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label
                for="default-range"
                className="block mb-2 text-[24px] font-semibold "
              >
                ux
              </label>
              <input
                id="default-range"
                type="range"
                value="50"
                class="w-full h-3 bg-[#FD6F00] rounded-lg appearance-none cursor-pointer "
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                for="default-range"
                className="block mb-2 text-[24px] font-semibold "
              >
                Website Designer
              </label>
              <input
                id="default-range"
                type="range"
                value="50"
                class="w-full h-3 bg-[#FD6F00] rounded-lg appearance-none cursor-pointer "
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                for="default-range"
                className="block mb-2 text-[24px] font-semibold "
              >
                App Designer
              </label>
              <input
                id="default-range"
                type="range"
                value="50"
                class="w-full h-3 bg-[#FD6F00] rounded-lg appearance-none cursor-pointer "
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                for="default-range"
                className="block mb-2 text-[24px] font-semibold "
              >
                Graphics Designer
              </label>
              <input
                id="default-range"
                type="range"
                value="50"
                class="w-full h-3 bg-[#FD6F00] rounded-lg appearance-none cursor-pointer "
              />
            </div>
          </div>
        </div>
      </div>

      {/* services */}
      <div className="w-[1413px]  mx-auto mt-[200px] flex flex-col gap-6 items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <p className="text-[65px] font-semibold">Services</p>
          <p className=" w-[921px] tracking-widest  text-center text-[21px]">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium
          </p>
        </div>
        <div className=" w-full flex items-center justify-between">
          {serviceList?.map((item, index) => (
            <ServiceCard key={index} serviceDetails={item} />
          ))}
        </div>
      </div>
      {/* projects */}
      <div className="w-[1423px]  mx-auto mt-[200px] flex flex-col gap-6 items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <p className="text-[65px] font-semibold">My Projects</p>
          <p className=" w-[921px] tracking-widest  text-center text-[21px]">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium
          </p>

          <div className="flex gap-4">
            <button
              style={{ borderWidth: "0.5px" }}
              className=" px-[20px] py-[10px] text-[24px] active:bg-orange-400 hover:bg-[#FD6F00] hover:text-white active:text-white rounded-[12px] border-[#545454] bg-[#F8F8F8] "
            >
              ux
            </button>
            <button
              style={{ borderWidth: "0.5px" }}
              className=" px-[20px] py-[10px] text-[24px] active:bg-orange-400 hover:bg-[#FD6F00] hover:text-white active:text-white rounded-[12px] border-[#545454] bg-[#F8F8F8] "
            >
              ux
            </button>{" "}
            <button
              style={{ borderWidth: "0.5px" }}
              className=" px-[20px] py-[10px] text-[24px] active:bg-orange-400 hover:bg-[#FD6F00] hover:text-white active:text-white rounded-[12px] border-[#545454] bg-[#F8F8F8] "
            >
              ux
            </button>{" "}
            <button
              style={{ borderWidth: "0.5px" }}
              className=" px-[20px] py-[10px] text-[24px] active:bg-orange-400 hover:bg-[#FD6F00] hover:text-white active:text-white rounded-[12px] border-[#545454] bg-[#F8F8F8] "
            >
              ux
            </button>{" "}
            <button
              style={{ borderWidth: "0.5px" }}
              className=" px-[20px] py-[10px] text-[24px] active:bg-orange-400 hover:bg-[#FD6F00] hover:text-white active:text-white rounded-[12px] border-[#545454] bg-[#F8F8F8] "
            >
              ux
            </button>{" "}
            <button
              style={{ borderWidth: "0.5px" }}
              className=" px-[20px] py-[10px] text-[24px] active:bg-orange-400 hover:bg-[#FD6F00] hover:text-white active:text-white rounded-[12px] border-[#545454] bg-[#F8F8F8] "
            >
              ux
            </button>
          </div>
        </div>
        <div className=" w-full flex mt-4 items-center justify-between">
          {projectList?.map((item, index) => (
            <ProjectCard key={index} projectDetails={item} />
          ))}
        </div>
      </div>
      {/* testimonials */}
      <div className="w-[1423px]  mx-auto mt-[200px] flex flex-col gap-6 items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <p className="text-[65px] font-semibold">Testimonials</p>
          <p className=" w-[921px] tracking-widest  text-center text-[21px]">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium
          </p>
        </div>
        <div className=" w-full flex justify-center items-center">
          <TestimonialCard />
        </div>
        <div className="flex items-center gap-2">
          <button className=" w-[57px] h-[16px] hover:bg-[#FD6F00] active:bg-[#FD6F00] bg-[#D9D9D9] rounded-[8px]"></button>
          <button className=" w-[57px] h-[16px] hover:bg-[#FD6F00] active:bg-[#FD6F00] bg-[#D9D9D9] rounded-[8px]"></button>
          <button className=" w-[57px] h-[16px] hover:bg-[#FD6F00] active:bg-[#FD6F00] bg-[#D9D9D9] rounded-[8px]"></button>
          <button className=" w-[57px] h-[16px] hover:bg-[#FD6F00] active:bg-[#FD6F00] bg-[#D9D9D9] rounded-[8px]"></button>
        </div>
      </div>

      {/* contact */}
      <div className="w-[932px]  mx-auto mt-[176px] p-6 flex flex-col gap-6 items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <p className="text-[65px] font-semibold">Lets Design Together</p>
          <p className=" w-[921px] tracking-widest  text-center text-[21px]">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium
          </p>
        </div>
        <div className=" w-full py-4 flex items-center justify-between">
          <input
            type="text"
            className=" w-[627px] h-[75px] rounded-[12px] border-[1px] border-[#AFAFAF] bg-[#F8F8F8] outline-none "
          />
          <button className="bg-[#FD6F00] text-[24px] font-semibold rounded-[14px] text-white w-[222px] h-[75px] flex justify-center items-center">
            Contact Me
          </button>
        </div>
      </div>
      {/* footer */}
      <div className=" bg-[#F8F8F8] h-[552px] mt-[150px] flex flex-col justify-between pt-[140px] items-center">
        <Image src="/icons/logo.svg" width={279} height={67} />
        <div className="flex items-center gap-3">
          <Link href="/" className="text-[21px] text-black ">
            Home
          </Link>
          <Link href="/" className="text-[21px] text-black ">
            About Us
          </Link>
          <Link href="/" className="text-[21px] text-black ">
            Services
          </Link>
          <Link href="/" className="text-[21px] text-black ">
            Projects
          </Link>
          <Link href="/" className="text-[21px] text-black ">
            Testimonials
          </Link>
          <Link href="/" className="text-[21px] text-black ">
            Contact
          </Link>
        </div>
        <div className=" flex items-center gap-4 py-6">
          <Image
            src={"/icons/facebook.svg"}
            height={32.48}
            width={43.48}
            alt=""
          />
          <Image
            src={"/icons/facebook.svg"}
            height={32.48}
            width={43.48}
            alt=""
          />
          <Image
            src={"/icons/instagram.svg"}
            height={32.48}
            width={43.48}
            alt=""
          />
          <Image
            src={"/icons/linkedin.svg"}
            height={32.48}
            width={43.48}
            alt=""
          />
        </div>
        <p className=" tracking-widest text-white h-[84px] flex justify-center items-center text-[21px] font-semibold bg-[#545454] w-full">
          © 2023 <span className=" text-[#FD6F00]"> Mumair </span> All Rights
          Reserved , Inc.
        </p>
      </div>
    </div>
  );
}
