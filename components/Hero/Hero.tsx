"use client";
import React, { useEffect } from "react";

type HeroProps = {};

const Hero = (props: HeroProps) => {
  return (
    <div className="h-screen w-full container space-y-14 pt-20">
      <p
        data-aos="zoom-in"
        data-aos-delay="300"
        className="text-[96px] font-title text-center leading-none"
      >
        Developer partners <br /> of
        <span className=" text-secondary"> creative souls</span>.
      </p>
      <p
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        className="font-bold text-tertiary text-center text-2xl"
      >
        Great design speaks for itself. But great design coupled with great{" "}
        <br />
        storytelling is like a match made in heaven. We bring ideas to life{" "}
        <br />
        through design for{" "}
        <span className="text-secondary">
          ambitious agencies and freelancers.
        </span>
      </p>
      <div className="w-full flex justify-center items-center gap-10">
        <button
          data-aos="fade-up"
          data-aos-delay="300"
          className="px-10 py-2 text-2xl font-bold rounded-full bg-secondary text-white relative group hover:-translate-y-3 transition-all duration-300 ease-in-out border-[3px] border-secondary"
        >
          {" "}
          <span className="w-10 h-10 rounded-lg border-[3px] rotate-45 group-hover:animate-bounce border-secondary bg-white absolute -left-3 -top-3"></span>{" "}
          view our works
        </button>
        <button
          data-aos="fade-up"
          data-aos-delay="500"
          className="px-10 py-2 text-2xl font-bold rounded-full bg-white border-[3px] border-tertiary text-tertiary relative group hover:-translate-y-3 transition-all duration-300 ease-in-out"
        >
          {" "}
          <span className="w-10 h-10 rounded-lg border-[3px] rotate-45 group-hover:animate-bounce border-tertiary bg-white absolute -right-3 -top-3"></span>{" "}
          get in touch
        </button>
      </div>
    </div>
  );
};

export default Hero;
