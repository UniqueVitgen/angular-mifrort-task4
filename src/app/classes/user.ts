import {SkillEnum} from '../enums/skill-enum.enum';
import {Email} from '../aliases/email';

export class User {
  constructor(object?) {
    if (object) {
      Object.assign(this, object);
    }
  }
  age: number;
  confirm: Email;
  email: Email;
  name: string;
  skill: SkillEnum | string;
}
