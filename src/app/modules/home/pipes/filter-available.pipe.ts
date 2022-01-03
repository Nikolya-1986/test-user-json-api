import { Pipe, PipeTransform } from '@angular/core';

import { UserDTO } from '../../../interfaces/user.interface';

@Pipe({
  name: 'filterAvailable'
})
export class FilterAvailablePipe implements PipeTransform {

  transform(users: UserDTO[], value: boolean): UserDTO[] {
    if(value) {
      return value === true ? users.filter(user => user.available === value) : users;
    }
    return users;
  }

}
