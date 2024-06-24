const mongoose = require("mongoose");

const { Schema } = mongoose;

const serviceSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
      required: true,
    },
    preco: {
      type: Number,
      required: true,
    },
    imagem: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Service = mongoose.model("Service", serviceSchema);

module.exports = {
  Service,
  serviceSchema,
};
