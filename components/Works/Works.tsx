import React from "react";
import Button from "../UI/Button";

type Props = {};

const Works = (props: Props) => {
  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <h2 data-aos="fade-right" className=" font-title">
          Recent <span className="text-secondary">Works</span>
        </h2>
        <div data-aos="fade-left">
          <Button variant="primary">get in touch</Button>
        </div>
      </div>
    </div>
  );
};

export default Works;
