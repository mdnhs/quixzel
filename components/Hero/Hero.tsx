"use client";
import React, { useEffect } from "react";
import Button from "../UI/Button";

type HeroProps = {};

const Hero = (props: HeroProps) => {
  return (
    <div className="h-fit w-full container space-y-14 py-20">
      <h1
        data-aos="zoom-in"
        data-aos-delay="300"
        className=" font-title text-center"
      >
        Developer partners <br /> of
        <span className=" text-secondary"> creative souls</span>.
      </h1>
      <div className=" flex justify-center">
        <p
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
          className=" text-tertiary text-center md:w-2/3 xl:w-1/2"
        >
          Great design speaks for itself. But great design coupled with great{" "}
          storytelling is like a match made in heaven. We bring ideas to life{" "}
          through design for{" "}
          <span className="text-secondary">
            ambitious agencies and freelancers.
          </span>
        </p>
      </div>
      <div className="w-full flex justify-center items-center gap-2 md:gap-5 lg:gap-10">
        <Button variant="primary">View our works</Button>
        <Button variant="secondary">Get in touch</Button>
      </div>
    </div>
  );
};

export default Hero;
