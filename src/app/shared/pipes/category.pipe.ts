import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'EmProducao': return 'engineering';
      case 'AguardandoEnvio': return 'schedule_send';
      case 'EmEspera': return 'hourglass_empty';
      case 'Concluído': return 'check';
      case 'EmTransito': return 'local_shipping';
      case 'AguardandoColeta': return 'running_with_errors';
    }
    return 'check';
  }

}