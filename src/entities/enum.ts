export enum EStatus {
  PENDENTE = 'pendente',
  CONCLUIDA = 'concluida',
  CANCELADA = 'cancelada',
}

export type TStatusRoleType = 'pendente' | 'concluida' | 'cancelada';

export enum EPermission {
  ADMIN = 'admin',
  COLABORADOR = 'colaborador',
  GERENCIA = 'gerencia',
}

export type TPermissionType = 'admin' | 'colaborador' | 'gerencia';
