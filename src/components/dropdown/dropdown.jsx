import React, { useState } from "react";
import Image from "next/image";
import {
  dropdown,
  textItem,
  flechaflex,
  fachevronup,
  ul,
  li,
  ulOpen,
  iconFlechaOptionfalse,
  iconFlechaOption,
  textMasOption,
  col,
  lineVertical
} from "./dropdown.module.css";
export const Region = props => {
  const [dropdowns, setdropdown] = useState(true);
  const [item, setitem] = useState(props.sele);
  const returnSelect = (i, index) => {
    props.select(i, index);
    setitem(i);
  };
  return (
    <>
      <div
        className={`${dropdowns ? dropdown : dropdown}`}
        onClick={() => setdropdown(!dropdowns)}
        id="filter"
        tabIndex="0"
        onBlur={() => setdropdown(true)}
      >
        <div className={flechaflex}>
          <div className={textMasOption}>
            {props.message}
          </div>
          <div
            onClick={() => setdropdown(!dropdowns)}
            className={dropdowns ? iconFlechaOption : iconFlechaOptionfalse}
          >
            <Image
              src="/img/subir.svg"
              width="13"
              height="13"
              layout="fixed"
              alt="flecha subir"
              quality={1}
            />
          </div>
        </div>
        <i className={`fas ${!dropdowns ? { fachevronup } : ""}`}></i>
        <ul className={!dropdowns ? ulOpen : ul}>
          {props.data.map((i, index) => (
            <li className={li} key={index} onClick={() => returnSelect(i, index)}>
              <div className={col}>
                <div className={textItem}>{i}</div>
                <div className={(item == null&&props.message==i)|| i==item?lineVertical:""}></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Region;
