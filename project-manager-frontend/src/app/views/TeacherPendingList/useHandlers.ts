import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { verifyIfUserIsAuthentificated } from "../../localStorage/local-storage";
import { TeacherPendingListProps } from "./types";

export const useHandlers = ({ getTeacher }: TeacherPendingListProps) => {
  const history = useHistory();

  useEffect(() => {
    verifyIfUserIsAuthentificated(history);
    getTeacher();
  }, []);

  return {
  };
};
