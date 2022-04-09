import { Pipe, PipeTransform } from '@angular/core';

import { LocationDTO } from '../../../interfaces/location.interface';
import { PositionDTO } from '../../../interfaces/position.interface';
import { UserDTO } from '../../../interfaces/user.interface';

@Pipe({
  name: 'filterNameAge'
})
export class FilterNameAgePipe implements PipeTransform {

  transform(users: UserDTO<PositionDTO, LocationDTO>[], value: string): UserDTO<PositionDTO, LocationDTO>[] {

    const usersFilter = [...users];
    usersFilter.sort((a: UserDTO<PositionDTO, LocationDTO> | any , b: UserDTO<PositionDTO, LocationDTO> | any) => {
      if(value === 'Dafault'){
        return a.userId - b.userId;
      };
      if(value === 'Alphabet(Aa-Zz)'){
        return a.name.first.localeCompare(b.name.first)
      };
      if(value === 'Alphabet(Zz-Aa)'){
        return b.name.first.localeCompare(a.name.first)
      };
      if(value === 'Age(Old-young)'){
        return b.dob.age - a.dob.age
      };
      if(value === 'Age(Young-old)'){
        return a.dob.age - b.dob.age
      }
      return null;
    });
    return usersFilter;
  }
}
