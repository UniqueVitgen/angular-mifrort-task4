import {SkillEnum} from '../enums/skill-enum.enum';
import {Email} from '../aliases/email';


export interface UserInterface {
  name: string;
  age: number;
  email: Email;
  confirm: Email;
  skill: SkillEnum;
}
