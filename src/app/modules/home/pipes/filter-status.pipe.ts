import { Pipe, PipeTransform } from '@angular/core';

import { LocationDTO } from '../../../interfaces/location.interface';
import { PositionDTO } from '../../../interfaces/position.interface';
import { EpisodeDTO } from '../../../interfaces/episode.interface';
import { Status, UserDTO } from '../../../interfaces/user.interface';

@Pipe({
  name: 'filterStatus'
})
export class FilterStatusPipe implements PipeTransform {

  transform(users: UserDTO<PositionDTO, LocationDTO>[], status: Status): UserDTO<PositionDTO, LocationDTO>[] {
    return status === Status.all ? users : users.filter(user => user.status === status);
  }
}
