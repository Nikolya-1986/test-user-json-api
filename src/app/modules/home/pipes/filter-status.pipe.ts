import { Pipe, PipeTransform } from '@angular/core';

import { EpisodeDTO } from '../../../interfaces/episode.interface';
import { Status, UserDTO } from '../../../interfaces/user.interface';

@Pipe({
  name: 'filterStatus'
})
export class FilterStatusPipe implements PipeTransform {

  transform(users: UserDTO<EpisodeDTO>[], status: Status): UserDTO<EpisodeDTO>[] {
    return status === Status.all ? users : users.filter(user => user.status === status);
  }
}
