import { Pipe, PipeTransform } from '@angular/core';

import { UserDTO } from '../../../interfaces/user.interface';

@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {

  transform(users: UserDTO[], value: string): UserDTO[] {

    const usersFilter = [...users];
    usersFilter.sort((a: UserDTO | any , b: UserDTO | any) => {
      if(value === 'Dafault'){
        return a.userId - b.userId;
      };
      if(value === 'Alphabet(Aa-Zz)'){
        return a.name.first.localeCompare(b.name.first)
      };
      if(value === 'Alphabet(Zz-Aa)'){
        return b.name.first.localeCompare(a.name.first)
      };
      return null;
    });
    return usersFilter;
  }
}
