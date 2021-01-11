import { Project } from './../../models/Project';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { verifyIfUserIsAuthentificated } from '../../localStorage/local-storage';
import { TeacherThemesProps } from "./types";

export const useHandlers = ({ addTeacherProject, teacher, getTeacher }: TeacherThemesProps) => {
  const [chosenTheme, setChosenTheme] = useState(null);
  const [addModalVisibility, setAddModalVisibility] = useState(false);
  const [createdTheme, setCreatedTheme] = useState({} as Project);
  const [isEditable, setIsEditable] = useState(false);
  const [sessionOptions, setSessionOptions] = useState([
    { value: "2020", label: "2020" },
    { value: "2021", label: "2021" },
  ]);

  const [selectedSession, setSelectedSession] = useState(sessionOptions[sessionOptions?.length - 1]);
  const history = useHistory();

  useEffect(() => {
    verifyIfUserIsAuthentificated(history);
    getTeacher();
  }, []);

  const modifyClick = (theme: any) => {
    setChosenTheme(theme);
    setCreatedTheme(theme);
    setAddModalVisibility(true);
    setIsEditable(true);
  }

  const handleAddModalVisibility = (value: boolean) => {
    setAddModalVisibility(value)
  };

  const handleThemeTitle = (event: any) => {
    setCreatedTheme({...createdTheme, title: event.target.value});
  }

  const handleSession = (option: any) => {
    setSelectedSession(option);
  }

  const handleThemeDescription = (event: any) => {
    setCreatedTheme({...createdTheme, description: event.target.value});
  }

  const saveThemeDetails = () => {
    if(createdTheme?.title && createdTheme?.description) {
      addTeacherProject({...createdTheme, sessionYear: Number.parseInt(selectedSession.label)})
      setAddModalVisibility(false);
      setChosenTheme(null);
      setIsEditable(false);
      setCreatedTheme(null);
    }

  }

  return {
    chosenTheme,
    isEditable,
    addModalVisibility,
    sessionOptions,
    selectedSession,
    handleAddModalVisibility,
    handleThemeTitle,
    handleThemeDescription,
    handleSession,
    saveThemeDetails,
    modifyClick
  };
};
