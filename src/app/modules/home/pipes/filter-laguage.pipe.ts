import { Pipe, PipeTransform } from '@angular/core';

import { EpisodeDTO } from '../../../interfaces/episode.interface';
import { UserDTO } from '../../../interfaces/user.interface';

@Pipe({
  name: 'filterLaguage'
})
export class FilterLaguagePipe implements PipeTransform {

  transform(usersDTO: UserDTO<EpisodeDTO>[], language: string): UserDTO<EpisodeDTO>[] {
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
