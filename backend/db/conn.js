const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://lucasluann10:senha@cluster0.t9b3x4k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;
