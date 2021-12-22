import { Pipe, PipeTransform } from '@angular/core';
import { Status, UserDTO } from '../../../interfaces/user.interface';

@Pipe({
  name: 'filterStatus'
})
export class FilterStatusPipe implements PipeTransform {

  transform(users: UserDTO[], status: Status): UserDTO[] {
    return status === Status.all ? users : users.filter(user => user.status === status);
  }
}
