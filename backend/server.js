const http = require('http');
const cors = require('cors');
const axios = require('axios');
const express = require('express');
const mongoose = require('mongoose');
// dbMiranda ProjetoTeste
// mongodb+srv://dbMiranda:ProjetoTeste@cluster0-vmm7w.gcp.mongodb.net/dbMiranda?retryWrites=true&w=majority

const app = express(); // Inicia o Express

mongoose.connect('mongodb+srv://dbMiranda:ProjetoTeste@cluster0-vmm7w.gcp.mongodb.net/dbMiranda?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true }); // Iniciando o Database
const userSchema = new mongoose.Schema({
	username: String,
	password: String
});
const User = mongoose.model("User", userSchema)
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	console.log("MongoDB foi conectado.")
});

app.use(cors()); // Permite que seja feito o POST/GET do localhost

app.use(express.json()); // Usado para "tratar" os dados que são enviados via req.body

app.post("/login", async (req, res) => {
    /*res.json({
        message: "Logado Talvez",
        username: req.body.username,
        password: req.body.password,
    });
     //Criando nosso user
    const user = new User({username: req.body.username, password: req.body.password});
    console.log(user);
    user.save().then(()=>console.log("salvo"))
    */
	let query = await User.find({ username: req.body.username });
	if (query.length !== 0) {
		if (query[0].password === req.body.password) {
			res.json({logado: true});
		}
		else {
			res.json({logado: false});
		}
	}
	else {
		res.json({logado: false});
	}

});

app.get("/", (req, res) => {
	res.send("Logado");
});

app.listen(3001, () => console.log("Servidor iniciado na porta 3001"));