const mongoose = require("mongoose");
const { Schema } = mongoose;

const { serviceSchema } = require("./Service");

const partySchema = new Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    autor: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
      required: true,
    },
    orcamento: {
      type: Number,
      required: true,
    },
    imagem: {
      type: String,
      required: true,
    },
    services: {
      type: [serviceSchema],
    },
  },
  { timestamps: true }
);

const Party = mongoose.model("Party", partySchema);

module.exports = Party;
