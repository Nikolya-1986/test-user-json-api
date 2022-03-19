import { Pipe, PipeTransform } from '@angular/core';

import { EpisodeDTO } from '../../../interfaces/episode.interface';
import { UserDTO } from '../../../interfaces/user.interface';

@Pipe({
  name: 'filterAvailable'
})
export class FilterAvailablePipe implements PipeTransform {

  transform(users: UserDTO<EpisodeDTO>[], value: boolean): UserDTO<EpisodeDTO>[] {
    if(value) {
      return value === true ? users.filter(user => user.available === value) : users;
    }
    return users;
  }

}
