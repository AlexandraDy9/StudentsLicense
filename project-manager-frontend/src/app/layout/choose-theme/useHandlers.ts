import { Project } from './../../models/Project';
import { useEffect } from 'react';
import { useState } from 'react';
import { ChooseThemeProps } from "./types";

export const useHandlers = ({ student, getAllTopics, setCreatedStudent, projects }: ChooseThemeProps) => {
  const [chosenTheme, setChosenTheme] = useState(null as Project);
  const [addModalVisibility, setAddModalVisibility] = useState(false);
  const [createdTheme, setCreatedTheme] = useState(null as Project);
  const [isAddedTheme, setIsAddedTheme] = useState(false);

  useEffect(() => {
    getAllTopics();
  }, [])

  useEffect(() => {
    if(projects?.length > 0) {
      var filteredProjects = projects.filter((project) => student?.license?.description && project?.description === student?.license?.description);
      if(student?.license?.description && filteredProjects.length === 0) {
        setIsAddedTheme(true);
        setCreatedTheme({title: student?.license?.title, description: student?.license?.description})
      }
    }
    if(student?.license?.title) {
      setChosenTheme({title: student?.license?.title, description: student?.license?.description});
    }
  }, [projects])

  useEffect(() => {
    setCreatedStudent({...student, license: { title: chosenTheme?.title, description: chosenTheme?.description}})
  }, [chosenTheme])

  const chooseClick = (theme: any) => {
    if(chosenTheme && chosenTheme?.title === theme?.title) {
      setChosenTheme(null);
    } else {
      setChosenTheme(theme);
    }
  }

  const handleAddModalVisibility = (value: boolean) => {
    setAddModalVisibility(value)
  };

  const handleThemeTitle = (event: any) => {
    setCreatedTheme({...createdTheme, title: event.target.value});
  }

  const handleThemeDescription = (event: any) => {
    setCreatedTheme({...createdTheme, description: event.target.value});
  }

  const saveThemeDetails = () => {
    if(createdTheme?.title && createdTheme?.description) {
      setIsAddedTheme(true);
      setChosenTheme(createdTheme);
    } else {
      setIsAddedTheme(false);
      setChosenTheme(null);
    }

    setAddModalVisibility(false);
  }

  return {
    chosenTheme,
    chooseClick,
    addModalVisibility,
    handleAddModalVisibility,
    createdTheme,
    isAddedTheme,
    handleThemeTitle,
    handleThemeDescription,
    saveThemeDetails
  };
};
