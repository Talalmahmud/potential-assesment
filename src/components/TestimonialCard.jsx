import Image from "next/image";
import React from "react";

const TestimonialCard = () => {
  return (
    <div className=" bg-[#F8F8F8] rounded-[12px] flex justify-center items-center gap-8 min-h-[344px] min-w-[1087px]">
      <Image src={"/icons/user.png"} height={235} width={235} alt="" />
      <div className="flex w-[698px] flex-col justify-between ">
        <p className=" text-[21px] ">
          <span className="text-orange-600 text-[32px] font-semibold">“</span>
          Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan.
          Id leo urna velit neque mattis id tellus arcu condimentum. Augue
          dictum dolor elementum convallis dignissim malesuada commodo ultrices.
          <span className="text-orange-600 text-[32px] font-semibold relative top-6">
            “
          </span>
        </p>
        <p className="text-[24px] font-semibold">Name</p>
        <p className=" text-[19px] ">CEO</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
