import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment'

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(date: string) {
    return moment(date).format('YYYY-MM-DD, h:mm:ss a');
  }
}
