import { gql } from 'apollo-server-express';

const tiposBlog = gql`
  type Blog {
    _id: ID!
    categoria: String!
    titulo: String!
    slug: String!
    texto: Enum_TipoTexto!
    fechaCreacion: Date!
    fechaActualizacion: Date
  }
  type Query {
    
    Blog(_id: String!): Blog
  type Mutation {
    crearBlog(
        categoria: String!
        titulo: String!
        slug: String!
        texto: Enum_TipoTexto!
        fechaCreacion: Date!
        fechaActualizacion: Date

    ): Blog
    editarBlog(
        categoria: String!
        titulo: String!
        slug: String!
        texto: Enum_TipoTexto!
        fechaActualizacion: Date

    ): Blog
    eliminarBlog(_id: String): Blog
  }
`;

export { tiposBlog };