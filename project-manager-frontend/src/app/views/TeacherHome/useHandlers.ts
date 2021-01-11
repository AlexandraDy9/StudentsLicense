import { Student } from './../../models/Student';
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { verifyIfUserIsAuthentificated } from "../../localStorage/local-storage";
import { TeacherHomeProps } from './types';

export const useHandlers = ({ getTeacher, setStudentNote }: TeacherHomeProps) => {
  const history = useHistory();
  const [addModalVisibility, setAddModalVisibility] = useState(false);
  const [note, setNote] = useState(null);

  useEffect(() => {
    verifyIfUserIsAuthentificated(history);
    getTeacher();
  }, []);

  const handleAddModalVisibility = (value: boolean) => {
    setAddModalVisibility(value)
  };

  const handleStudentNote = (event: any) => {
    setNote(event.target.value);
  }

  const saveStudentNote = (student: Student) => {
    if(note !== null) {
      setStudentNote(note, student);
      setAddModalVisibility(false);
    }
  }

  return {
    addModalVisibility,
    handleAddModalVisibility,
    handleStudentNote,
    saveStudentNote
  };
};
