import {SkillEnum} from '../enums/skill-enum.enum';


export interface UserInterface {
  name: string;
  age: number;
  email: string;
  confirm: string;
  skill: SkillEnum;
}
