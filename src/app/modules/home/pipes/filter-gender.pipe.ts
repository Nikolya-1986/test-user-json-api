import { Pipe, PipeTransform } from '@angular/core';

import { Gender, UserDTO } from '../../../interfaces/user.interface';

@Pipe({
  name: 'filterGender'
})
export class FilterGenderPipe implements PipeTransform {

  transform(users: UserDTO[], gender: Gender): UserDTO[] {
    return gender === Gender.all ? users : users.filter(user => user.gender === gender);
  }
}
