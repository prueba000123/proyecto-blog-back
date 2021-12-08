import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
    categoria: {
        type: String,
        required: true,
      },
    titulo: {
    type: String,
    required: true,
    },
    slug: {
    type: String,
    required: true,
    },
    texto: {
    type: String,
    required: true,
    enum: ['CORTO', 'LARGO'],
    },
    fechaCreacion: {
        type: Date,
        required: true,
      },
      fechaActualizacion: {
        type: Date,
        required: true,
      },
});

userSchema.virtual('blogsCreados', {
  ref: 'Blog',
  localField: '_id',
  foreignField: 'usuario',
});

userSchema.virtual('actualizacionesCreadas', {
  ref: 'Actualizaciones',
  localField: '_id',
  foreignField: 'creadoPor',
});


const BlogModel = model('Blog', blogSchema);

export { BlogModel };