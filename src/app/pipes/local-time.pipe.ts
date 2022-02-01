import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment'

@Pipe({
  name: 'localTime'
})
export class LocalTimePipe implements PipeTransform {

  transform(date: string) {
    return moment(date).format("YYYY-MM-DD'T'HH:mm:ss.SSS'Z'");
  }

}
