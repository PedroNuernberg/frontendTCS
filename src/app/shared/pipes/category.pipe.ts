import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'EmProducao': return 'engineering';
      case 'AguardandoEnvio': return 'schedule_send';
    }
    return 'code';
  }

}