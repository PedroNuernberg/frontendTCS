import { Terceiro } from './../../terceiros/models/Terceiro';
export interface Ordemproducao {
  id: string;
  dataInicialOp: string;
  statusOrdemProducao: string;
  qtdePecasOp: number;
  loteOp: string;
  terceiro: Terceiro;
}
