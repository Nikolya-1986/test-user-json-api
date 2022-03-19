import { Pipe, PipeTransform } from '@angular/core';

import { EpisodeDTO } from '../../../interfaces/episode.interface';
import { Gender, UserDTO } from '../../../interfaces/user.interface';

@Pipe({
  name: 'filterGender'
})
export class FilterGenderPipe implements PipeTransform {

  transform(users: UserDTO<EpisodeDTO>[], gender: Gender): UserDTO<EpisodeDTO>[] {
    return gender === Gender.all ? users : users.filter(user => user.gender === gender);
  }
}
