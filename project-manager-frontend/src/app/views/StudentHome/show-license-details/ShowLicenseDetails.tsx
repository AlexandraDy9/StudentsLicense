import * as React from "react";
import { ShowLicenseDetailsProps, HandlerProps } from "./types";
//styles
import "./ShowLicenseDetails.scss";
import { cn } from "../../../utils";
import { useHandlers } from "./useHandlers";
import { Chip } from "@material-ui/core";
import TitleIcon from "@material-ui/icons/Title";
import DescriptionIcon from "@material-ui/icons/Description";
import SubjectIcon from "@material-ui/icons/Subject";
import InfoIcon from "@material-ui/icons/Info";
import AccessibilityIcon from '@material-ui/icons/Accessibility';
const bem = cn("show-license-details");

export default function ShowLicenseDetails(props: ShowLicenseDetailsProps) {
  const { literals, student, createMode } = props;
  const handler: HandlerProps = useHandlers(props);
  const fields = literals["student.license.fields"];

  return (
    <React.Fragment>
      <div className={bem("wrapper")}>
       {createMode && (
        <div className={bem("field")}>
            <div style={{ display: "flex" }}>
              <AccessibilityIcon /> <b className={bem("text")}>{"Profesor"}: </b>
            </div>
            <div>{student?.teacher?.firstName + " " + student?.teacher?.lastName}</div>
          </div>
       )}

       <div className={bem("field")}>
          <div style={{ display: "flex" }}>
            <TitleIcon /> <b className={bem("text")}>{fields[0]}: </b>
          </div>
          <div>{student?.license?.title}</div>
        </div>
        <div className={bem("field")}>
          <div style={{ display: "flex" }}>
            <DescriptionIcon /> <b>{fields[1]}: </b>
          </div>
          <div>{student?.license?.description || "Nu exista descriere"}</div>
        </div>

        <div className={bem("field")}>
          <div style={{ display: "flex" }}>
            <SubjectIcon /> <b>{fields[2]}: </b>
          </div>
          <div>{student?.license?.documentation?.length > 0 ? "1 fisier incarcat" : "Nu este incarcata documentatia"}</div>
        </div>
        <div className={bem("field")}>
          <div style={{ display: "flex" }}>
            <InfoIcon /> <b>{fields[3]}: </b>
          </div>
          <div>
            {student?.license?.technologies?.map((item: any, key: any) => {
              return (
                <Chip variant="outlined" size="small" label={item} key={key} />
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
