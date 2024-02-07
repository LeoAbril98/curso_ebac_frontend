// Classe de uma abstração
class Animal {
    constructor(nome, idade) {
        this.nome = nome;
this.idade = idade;
}

emitirSom() {
console.log("O animal está emitindo um som.");
}
}

// Classes herdeiras
class Cachorro extends Animal {
constructor(nome, idade, raca) {
super(nome, idade);
this.raca = raca;
}

latir() {
console.log("Au au!");
}
}

class Gato extends Animal {
constructor(nome, idade, cor) {
super(nome, idade);
this.cor = cor;
}

miar() {
console.log("Miau!");
}
}

// Instâncias de objetos
const rex = new Cachorro("Rex", 3, "Labrador");
const felix = new Gato("Felix", 2, "Preto");
const luna = new Gato("Luna", 1, "Branco");

// Teste
console.log(rex);
console.log(felix);
console.log(luna);

rex.latir();
felix.miar();
luna.emitirSom();
