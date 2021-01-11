import { Student, Teacher } from "../../models";

export interface LoginProps {
}

export interface HandlerProps {
  password: string;
  handleEmailChanged: (event: any) => void;
  handlePasswordChanged: (event: any) => void;
  validateEmail: () => boolean;
  handleSubmit: () => void;
  handleOpenRegisterPage: () => void;
}
