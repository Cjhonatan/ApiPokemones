const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/pokemon",{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=> console.log("Conexion con BD"))
.catch(err => console.log("Error conexion BD", err));

const pokemonSchema = new mongoose.Schema(
    {
        nombre:String,
        tipo: String,
        nivel: Number,

    }
);

const pokemonModel = mongoose.model("pokemones", pokemonSchema);

const nuevoPokemon = new pokemonModel({
    nombre:"charizard",
    tipo:"fuego",
    nivel:32,
});

nuevoPokemon.save().then(()=> console.log("Se creo el pokemon"))
.catch(err => console.log("No se creo el pokemon", err));

//mongoose.disconnect();

//leeer todos los registros

pokemonModel.find()
.then(pokemones => console.log("Estaos son todos lo pokemon: ", pokemones))
.catch(error => console.log("Se produjo un error al leer los pokemones", error));