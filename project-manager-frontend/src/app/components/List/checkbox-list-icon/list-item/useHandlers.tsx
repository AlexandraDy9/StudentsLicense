import {useState, useEffect} from "react";
import {CustomListItemProps} from "./types";
import {string} from "prop-types";

export const useHandlers = ({value, handleSelectedColor, handleSelectedLink}: CustomListItemProps) => {
  const [color, setColor] = useState(value.color);
  const [link, setLink] = useState(value.link);

  const handleSocialColor = (color: any) => {
    value = {...value, color: color};
    setColor(color);
    handleSelectedColor(value);
  };

  const handleLinkChange = (event: any) => {
    debugger;
    value = {...value, link: event.target.value};
    setLink(link);
    handleSelectedLink(value);
  };

  return {
    color,
    link,
    handleSocialColor,
    handleLinkChange
  };
};
