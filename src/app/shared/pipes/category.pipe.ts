import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'andamento': return 'code';
      case 'trânsito': return 'computer';

    }
    return 'code';
  }

}
