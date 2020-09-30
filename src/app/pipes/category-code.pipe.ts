import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryCode'
})
export class CategoryCodePipe implements PipeTransform {

  transform(value:string): string {
    return value.substring(1);
  }

}
