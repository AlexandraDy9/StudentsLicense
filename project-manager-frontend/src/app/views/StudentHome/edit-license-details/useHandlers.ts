import { useState } from "react";
import { allTechnologies } from "../../../variables/constants";
import { EditLicenseDetailsProps } from "./types";

export const useHandlers = ({
  student,
  putStudentDetails,
  toggleEditMode,
}: EditLicenseDetailsProps) => {
  const [closeUpload, setCloseUpload] = useState(false);
  const [technologies, setTechnologies] = useState([
    ...student?.license?.technologies,
  ]);
  const [selectedTechnologies, setSelectedTechnology] = useState(null);
  const [files, setFiles] = useState(null);
  const [description, setDescription] = useState(student?.license?.description);

  const addTechnology = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTechnology(null);
    const values = allTechnologies.filter(
      (value: any) => event.target.value === value
    )[0];
    setTechnologies([...technologies, values]);
  };

  const deleteTechnology = (value: any) => {
    setTechnologies(technologies.filter((item: any) => item !== value));
  };

  const handleDescription = (event: any) => {
    setDescription(event.target.value);
  };

  const handleClose = () => {
    setCloseUpload(false);
  };

  const handleSave = (files: any) => {
    setFiles(files);
    setCloseUpload(true);
  };

  const handleOpen = () => {
    setCloseUpload(true);
  };

  const onSaveButton = () => {
    toggleEditMode();
    putStudentDetails({
      ...student?.license,
      technologies: technologies,
      documentation: files,
      description: description,
    });
  };

  return {
    allTechnologies,
    technologies,
    closeUpload,
    selectedTechnologies,
    addTechnology,
    deleteTechnology,
    handleDescription,
    handleClose,
    handleSave,
    handleOpen,
    onSaveButton,
  };
};
