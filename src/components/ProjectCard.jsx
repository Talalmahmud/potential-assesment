import Image from "next/image";
import React from "react";

const ProjectCard = ({ projectDetails }) => {
  return (
    <div className=" flex w-[445px] flex-col gap-4">
      <Image src={"/icons/project-1.png"} height={489} width={445} alt="" />
      <p className="text-[19px] text-orange-400 font-semibold">
        {projectDetails?.title}
      </p>
      <p className=" text-[24px] font-bold">{projectDetails?.description} </p>
    </div>
  );
};

export default ProjectCard;
