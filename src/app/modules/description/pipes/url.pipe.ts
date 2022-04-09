import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlConvertNumber'
})
export class UrlPipe implements PipeTransform {

  transform(url: string): number {
    const urlSplit = url.split('/');
    const lastIndex = urlSplit.length - 1;
    const id = Number(urlSplit[lastIndex]);
    return id; 
  }
}
