import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'data'
})
export class DataPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 0) {
      const data = new Date(value);
    
      return data.toLocaleString("pt-br", {year:"numeric", month: "numeric", day: "numeric"});
    }

    return value;
  }
}