"use client";

import React, { useEffect, ReactNode } from "react";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import AOS from "aos";
import "aos/dist/aos.css";

interface propsType {
  children: ReactNode;
  name: string;
  id: string;
}

function Skill(props: propsType) {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    tippy(`#${props.id}`, {
      content: props.name,
      trigger: "mouseenter",
      animation: "scale",
      theme: "tomato",
    });
  }, [props.name]);

  return <div id={props.id} data-aos="zoom-in-up" data-aos-duration="2000">{props.children}</div>;
}

export default Skill;
