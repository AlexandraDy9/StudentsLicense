import { useState } from "react";
import { useHistory } from "react-router-dom";
import { setLocalStorageElement } from "../../localStorage/local-storage";
import { token } from "../../utils/generate";
import { LoginProps } from "./types";

export const useHandlers = ({}: LoginProps) => {
  const history = useHistory();

  const [email, setEmail] = useState("@student.unitbv.ro");
  const [password, setPassword] = useState("");

  const handleEmailChanged = (event: any) => {
    setEmail(event.target.value);
  }

  const handlePasswordChanged = (event: any) => {
    setPassword(event.target.value);
  }

  const validateEmail = () => {
    if(email.includes("@student.unitbv.ro") || email.includes("@unitbv.ro"))
      return false;
    return true;
  }

  const handleSubmit = () => {
      let role = "";
      let homePath = "";
      if(email.includes("@student.unitbv.ro")) {
        role = "student";
        homePath = "student-home";

      } else if(email.includes("@unitbv.ro")) {
        role = "teacher";
        homePath = "teacher-home";
      }

      setLocalStorageElement("email", email);
      setLocalStorageElement("token", token());
      setLocalStorageElement("role", role);
      history.push(homePath);
  }

  const handleOpenRegisterPage = () => {
    history.push("register");
  }

  return {
    password,
    handleEmailChanged,
    handlePasswordChanged,
    validateEmail,
    handleSubmit,
    handleOpenRegisterPage
  };
};
