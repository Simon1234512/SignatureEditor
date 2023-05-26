import React from "react";
import "./SiteEditor.scss";

import Slider from "react-slick";

// icons
import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineAntDesign } from "react-icons/ai";
import { TbTemplate, TbApps } from "react-icons/tb";
import { IoShareSocialSharp } from "react-icons/io5";
import General from "./General";
import Design from "./Design";

const SiteEditor = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,

    // slickNext: true,
    autoplay: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="siteditor">
        <div className="siteditor-header">
          {/* <Slider {...settings}></Slider> */}
          <TabBtn icon={<BiMenuAltLeft />}>General</TabBtn>
          <TabBtn icon={<AiOutlineAntDesign />}>Design</TabBtn>
          <TabBtn icon={<TbTemplate />}>Template</TabBtn>
          <TabBtn icon={<IoShareSocialSharp />}>Social</TabBtn>
          <TabBtn icon={<TbApps />}>Apps</TabBtn>
        </div>
        <div className="siteditor-content">
          <General />
          {/* <Design /> */}
        </div>
      </div>
    </>
  );
};

export default SiteEditor;

// Sub components

const TabBtn = (props) => {
  return (
    <>
      <div className="tabbtn">
        <button onClick={props.onClick}>
          {props.icon}
          {props.children}
        </button>
      </div>
    </>
  );
};
