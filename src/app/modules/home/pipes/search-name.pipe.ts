import { Pipe, PipeTransform } from '@angular/core';
import { UserDTO } from 'src/app/interfaces/user.interface';

@Pipe({
  name: 'searchName'
})
export class SearchNamePipe implements PipeTransform {

  transform(users: UserDTO[], searchUserName: string = ''): UserDTO[] {
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
