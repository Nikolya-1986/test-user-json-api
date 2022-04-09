import { Pipe, PipeTransform } from '@angular/core';

import { LocationDTO } from '../../../interfaces/location.interface';
import { PositionDTO } from '../../../interfaces/position.interface';
import { UserDTO } from '../../../interfaces/user.interface';

@Pipe({
  name: 'filterLaguage'
})
export class FilterLaguagePipe implements PipeTransform {

  transform(usersDTO: UserDTO<PositionDTO, LocationDTO>[], language: string): UserDTO<PositionDTO, LocationDTO>[] {
    if(language){
      const usersFilterLanguage = usersDTO.filter((users) => {
        const languages = users.language;
        const isIncludeslanguage = languages.includes(language);
        return isIncludeslanguage;
      })
      if(language === 'All languages'){
        return usersDTO;
      }
      return usersFilterLanguage;
    }
    return usersDTO;
  }
}
