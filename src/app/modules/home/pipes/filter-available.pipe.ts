import { Pipe, PipeTransform } from '@angular/core';

import { LocationDTO } from '../../../interfaces/location.interface';
import { PositionDTO } from '../../../interfaces/position.interface';
import { UserDTO } from '../../../interfaces/user.interface';

@Pipe({
  name: 'filterAvailable'
})
export class FilterAvailablePipe implements PipeTransform {

  transform(users: UserDTO<PositionDTO, LocationDTO>[], value: boolean): UserDTO<PositionDTO, LocationDTO>[] {
    if(value) {
      return value === true ? users.filter(user => user.available === value) : users;
    }
    return users;
  }

}
