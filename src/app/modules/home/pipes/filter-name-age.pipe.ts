import { Pipe, PipeTransform } from '@angular/core';

import { EpisodeDTO } from '../../../interfaces/episode.interface';
import { UserDTO } from '../../../interfaces/user.interface';

@Pipe({
  name: 'filterNameAge'
})
export class FilterNameAgePipe implements PipeTransform {

  transform(users: UserDTO<EpisodeDTO>[], value: string): UserDTO<EpisodeDTO>[] {

    const usersFilter = [...users];
    usersFilter.sort((a: UserDTO<EpisodeDTO> | any , b: UserDTO<EpisodeDTO> | any) => {
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
