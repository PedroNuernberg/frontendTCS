import { Usuario } from './../../usuarios/models/Usuario';

export interface Terceiro {
    id: string;
    razaoSocial: string;
    cnpjTerceiro: string;
    enderecoTerceiro: string;
    cepTerceiro: string;
    bairroTerceiro: string;
    numeroTerceiro: string;
    enumStatus: string;
    telefoneTerceiro: string;
    contatoTerceiro: string;
    usuario: Usuario;
}