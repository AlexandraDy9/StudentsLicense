import { ERROR_TIMEOUT } from './../../variables/constants';
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { verifyIfUserIsAuthentificated } from "../../localStorage/local-storage";
import { StudentHomeProps } from "./types";

export const useHandlers = ({ getStudentDetails, student, teachers, getAllTeachers, handleUpdateStudentCoordinator }: StudentHomeProps) => {
  const history = useHistory();
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [changeTeacherModalVisibility, setChangeTeacherModalVisibility] = useState(false);

  useEffect(() => {
    verifyIfUserIsAuthentificated(history);
    getStudentDetails();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if(student?.license === null) {
        history.push("license");
      }
    }, ERROR_TIMEOUT)

    if(student?.license?.status === "declined") {
      getAllTeachers();
    }
  }, [student])

  const onEditClick = () => {
    setIsEditMode(!isEditMode);
  };

  const handleGetTeachersOptions = () => {
    let newTeachers: any[] = [];
    teachers?.map((teacher) => {
      if(teacher.name !== student?.teacher?.name) {
        newTeachers.push({
          value: teacher.email,
          label: teacher?.firstName + " " + teacher?.lastName,
        });
      }
    });

    return newTeachers;
  };

  const handleSelectedTeacher = (option: any) => {
    setSelectedTeacher(option.value);
  };

  const changeTeacher = () => {
    handleUpdateStudentCoordinator(selectedTeacher);
    setChangeTeacherModalVisibility(false)
  }

  const handleChangeTeacherModalVisibility = (value: boolean) => {
    setChangeTeacherModalVisibility(value)
  }

  return {
    isEditMode,
    changeTeacherModalVisibility,
    handleChangeTeacherModalVisibility,
    onEditClick,
    handleGetTeachersOptions,
    handleSelectedTeacher,
    changeTeacher
  };
};
