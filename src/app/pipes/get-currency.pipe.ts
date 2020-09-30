import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getCurrency'
})
export class GetCurrencyPipe implements PipeTransform {

  transform(code):any {
    console.log(code);
    var codes = {
                  "EUR":"&#8364;"
                }
    return codes[code];
  }

}
