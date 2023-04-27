import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'Processo': return 'code';
      case 'Concluida': return 'computer';
    }
    return 'code';
  }

}
