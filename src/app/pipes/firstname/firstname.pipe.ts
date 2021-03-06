import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstname'
})
export class FirstnamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (value !== null) ? value.split(/\s/)[0] : "";
  }

}
