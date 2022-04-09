import { Pipe, PipeTransform } from '@angular/core';

import { LocationDTO } from '../../../interfaces/location.interface';
import { PositionDTO } from '../../../interfaces/position.interface';
import { Gender, UserDTO } from '../../../interfaces/user.interface';

@Pipe({
  name: 'filterGender'
})
export class FilterGenderPipe implements PipeTransform {

  transform(users: UserDTO<PositionDTO, LocationDTO>[], gender: Gender): UserDTO<PositionDTO, LocationDTO>[] {
    return gender === Gender.all ? users : users.filter(user => user.gender === gender);
  }
}
