import * as React from "react";

//style
import "./Loader.scss"
import {cn} from "../../utils";

const bem = cn("loader");

export default function Loader() {
  return (
    <div className={bem("loader-box")}>
      <div className={bem("loader")}/>
    </div>
  );
}
