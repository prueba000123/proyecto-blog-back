import { UserModel } from './blog.js';

const resolversBlog = {
  Query: {
    
    Blog: async (parent, args) => {
      const blog = await UserModel.findOne({ _id: args._id });
      return blog;
    },
  },
  Mutation: {
    crearBlog: async (parent, args) => {
      const blogCreado = await UserModel.create({
        categoria: args.categoria,
        slug: args.slug,
        texto: args.texto,
        fechaCreacion: args.fechaCreacion,
        fechaActualizacion: args.fechaActualizacion,
      });

      
      return blogCreado;
    },
    editarBlog: async (parent, args) => {
      const blogEditado = await UserModel.findByIdAndUpdate(
        args._id,
        {
            categoria: args.categoria,
            slug: args.slug,
            texto: args.texto,
            fechaActualizacion: args.fechaActualizacion,
        },
        { new: true }
      );
      return blogEditado;
    },
    eliminarblog: async (parent, args) => {      
        const blogEliminado = await UserModel.findOneAndDelete({ _id: args._id });
        return blogEliminado;
            
    },
  },
};

export { resolversBlog };