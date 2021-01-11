import { useState } from "react";
import { useHistory } from "react-router-dom";
import { RegisterProps } from "./types";

export const useHandlers = ({ fetchRegister }: RegisterProps) => {
  const history = useHistory();

  const [user, setUser] = useState({pass: "", name: "", lastName: "", firstName: ""} as any);
  const [type, setType] = useState("");

  const handleUserType = (option: any) => {
    setType(option.value);
  }

  const handlePasswordChanged = (event: any) => {
    setUser({ ...user, pass: event.target.value });
  };

  const handleNameChanged = (event: any) => {
    setUser({ ...user, name: event.target.value });
  };

  const handleFirstNameChanged = (event: any) => {
    setUser({ ...user, firstName: event.target.value });
  };

  const handleLastNameChanged = (event: any) => {
    setUser({ ...user, lastName: event.target.value });
  };

  const validateFields = () => {
    return (
      user?.pass === "" ||
      user?.name === "" ||
      user?.firstName === "" ||
      user?.lastName === "" ||
      type === ""
    );
  };

  function getFirst(str: any) {
    var separatedString = str.split(/\s+/).filter( function (el: any) {
           return el.length;
        });
    return separatedString[0].toLowerCase();
  }

  const handleSubmit = () => {
    var email = getFirst(user?.firstName) + "." + getFirst(user?.lastName);

    if(type === "Student") {
      email += "@student.unitbv.ro";
    } else {
      email += "@unitbv.ro";
    }

    fetchRegister({...user, email: email});
    history.push("login");
  };
  return {
    user,
    handleUserType,
    handlePasswordChanged,
    handleNameChanged,
    handleFirstNameChanged,
    handleLastNameChanged,
    validateFields,
    handleSubmit,
  };
};
