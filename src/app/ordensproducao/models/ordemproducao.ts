import { Usuario } from './../../usuarios/models/Usuario';
import { Terceiro } from './../../terceiros/models/Terceiro';
export interface Ordemproducao {
  id: string;
  dataInicialOp: string;
  dataFinalOp: string;
  statusOrdemProducao: string;
  qtdePecasOp: number;
  loteOp: string;
  obsOp: string;
  enumStatus: string;
  terceiro: Terceiro;
  usuario: Usuario;
}
