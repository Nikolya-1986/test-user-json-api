import { Pipe, PipeTransform } from '@angular/core';

import { UserDTO } from '../../../interfaces/user.interface';

@Pipe({
  name: 'filterLaguage'
})
export class FilterLaguagePipe implements PipeTransform {

  transform(usersDTO: UserDTO[], language: string): UserDTO[] {
    if(language){
      const usersFilterLanguage = usersDTO.filter((users) => {
        const languages = users.language;
        const isIncludeslanguage = languages.includes(language);
        return isIncludeslanguage;
      })
      return usersFilterLanguage;
    }
    return usersDTO;
  }
}
