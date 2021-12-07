import { gql } from 'apollo-server-express';

const tiposEnums = gql`
  enum Enum_EstadoUsuario {
    PENDIENTE
    AUTORIZADO
    NO_AUTORIZADO
  }
  enum Enum_Rol {
    USUARIO
    ADMINISTRADOR
  }
  enum Enum_TipoTexto {
    CORTO
    LARGO
  }
`;

export { tiposEnums };