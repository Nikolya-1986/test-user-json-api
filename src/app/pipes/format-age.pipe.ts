import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';

@Pipe({
  name: 'formatAge'
})
export class FormatAgePipe implements PipeTransform {

  transform(dateOfBirthday: string): string {
    const today = moment();
    const birthDate = moment(dateOfBirthday);
    const years = today.diff(birthDate, 'years');
    let age: string = `${years} years and `;

    age += today.subtract(years, 'years').diff(birthDate, 'months') + ' months';

    return age;
  }
}
