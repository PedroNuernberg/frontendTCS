import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'EmProducao': return 'conveyor_belt';
      case 'AguardandoEnvio': return 'departure_board';
      case 'EmEspera': return 'hourglass_empty';
      case 'Concluído': return 'check';
      case 'EmTransito': return 'local_shipping';
      case 'AguardandoColeta': return 'running_with_errors';
    }
    return 'check';
  }
}