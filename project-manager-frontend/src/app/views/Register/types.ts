export interface RegisterProps {
  fetchRegister: (user: any) => void;
}

export interface HandlerProps {
  user: any;
  handleUserType: (option: any) => void;
  handlePasswordChanged: (event: any) => void;
  handleNameChanged: (event: any) => void;
  handleFirstNameChanged: (event: any) => void;
  handleLastNameChanged: (event: any) => void;
  validateFields: () => boolean;
  handleSubmit: () => void;
}
