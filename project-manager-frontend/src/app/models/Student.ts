import { License } from "./License";
import { Teacher } from "./Teacher";

export interface Student {
  name?: string;
  firstName?: string;
  lastName?: string;
  pass?: string;
  email?: string;
  teacher?: Teacher;
  license?: License;
}
