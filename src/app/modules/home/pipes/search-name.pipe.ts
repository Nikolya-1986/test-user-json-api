import { Pipe, PipeTransform } from '@angular/core'

import { LocationDTO } from '../../../interfaces/location.interface';
import { PositionDTO } from '../../../interfaces/position.interface';
import { UserDTO } from '../../../interfaces/user.interface';

@Pipe({
  name: 'searchName'
})
export class SearchNamePipe implements PipeTransform {

  transform(users: UserDTO<PositionDTO, LocationDTO>[], searchUserName: string = ''): UserDTO<PositionDTO, LocationDTO>[] {
    if(searchUserName.trim()){
      const filterUsers = users.filter(user => {
        const lowerUserName = user.name.first.toLowerCase();
        const lowerSearchName = searchUserName.toLowerCase();
        const isUserNameIncludesSearchName = lowerUserName.includes(lowerSearchName);
        return isUserNameIncludesSearchName;
      })
      return filterUsers; 
    }
    return users;
  }
}
