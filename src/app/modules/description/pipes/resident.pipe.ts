import { Pipe, PipeTransform } from '@angular/core';

import { LocationDTO } from '../../../interfaces/location.interface';
import { PositionDTO } from '../../../interfaces/position.interface';
import { UserDTO } from '../../../interfaces/user.interface';

@Pipe({
  name: 'nameResident'
})
export class NameResidentPipe implements PipeTransform {

    transform(residentId: number, userDTO: UserDTO<PositionDTO, LocationDTO>[]): string {
        const user = userDTO.filter((elem) => elem.id === residentId);
        const userName = user.reduce((item, elem) => elem.name.first, '' );
        return userName;
    }
}
