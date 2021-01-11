import { Project } from './Project';
import { Student } from './Student';

export interface Teacher {
  name?: string;
  firstName?: string;
  lastName?: string;
  pass?: string;
  email?: string;
  students?: Student[];
  projects?: Project[];
}
