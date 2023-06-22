import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameCategory'
})
export class NameCategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'EmProducao': return 'Em produção';
      case 'AguardandoColeta': return 'Aguardando coleta';
      case 'Concluído': return 'Concluído';
      case 'AguardandoEnvio': return 'Aguardando envio';
      case 'EmEspera': return 'Em espera';
      case 'EmTransito': return 'Em trânsito';
      

    }
    return 'Em produção';
  }
}