import { useEffect, useState } from "react";
import { allTechnologies } from "../../variables/constants";
import { LicenseDetailsProps } from "./types";

export const useHandlers = ({
  student,
  setCreatedStudent,
  getAllTeachers,
  teachers,
}: LicenseDetailsProps) => {
  const [closeUpload, setCloseUpload] = useState(false);
  const [technologies, setTechnologies] = useState(student?.license?.technologies || []);
  const [selectedTechnologies, setSelectedTechnology] = useState(null);
  const [files, setFiles] = useState(student?.license?.documentation ? [...student?.license?.documentation] : null);
  const [selectedTeacher, setSelectedTeacher] = useState(student?.teacher || null);
  const [title, setTitle] = useState(student?.license?.title || "");

  useEffect(() => {
    getAllTeachers();
  }, []);

  useEffect(() => {
    setCreatedStudent({
      ...student,
      teacher: selectedTeacher,
      license: {
        ...student?.license,
        documentation: files,
        technologies: technologies,
        title: title
      },
    });
  }, [technologies, files, selectedTeacher, title]);

  const handleTitleChange = (event: any) => {
    setTitle(event.target.value)
  }

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

  const handleClose = () => {
    setCloseUpload(false);
  };

  const handleSave = (files: any) => {
    setFiles(files);
    setCloseUpload(false);
  };

  const handleOpen = () => {
    setCloseUpload(true);
  };

  const handleGetTeachersOptions = () => {
    let newTeachers: any[] = [];
    teachers?.map((teacher) => {
      newTeachers.push({
        value: teacher,
        label: teacher?.firstName + " " + teacher?.lastName,
      });
    });

    return newTeachers;
  };

  const handleSelectedTeacher = (option: any) => {
    setSelectedTeacher(option.value);
  };

  return {
    technologies,
    closeUpload,
    selectedTechnologies,
    addTechnology,
    handleTitleChange,
    deleteTechnology,
    handleClose,
    handleSave,
    handleOpen,
    handleGetTeachersOptions,
    handleSelectedTeacher,
  };
};
