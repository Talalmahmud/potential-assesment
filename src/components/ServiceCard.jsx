import Image from "next/image";
import React from "react";

const ServiceCard = ({ serviceDetails }) => {
  return (
    <div className="h-[346px] w-[330px] flex-col gap-4 p-6 flex  items-start bg-[#F8F8F8] rounded-[12px]">
      <Image src={serviceDetails?.imgUrl} height={70} width={70} alt="" />
      <p className="text-[32px] font-semibold">{serviceDetails?.title}</p>
      <p className="text-[19px] text-justify">{serviceDetails?.description}</p>
    </div>
  );
};

export default ServiceCard;
