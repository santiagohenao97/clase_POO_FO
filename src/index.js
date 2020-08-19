import "./styles.css";

document.getElementById("app").innerHTML = `
Nuestra primera clase, ¡Que emoción!
`;

class Pizza {
  constructor(masa, tamaño, ingredientes) {
    this.masa = masa;
    this.tamaño = tamaño;
    this.ingredientes = ingredientes;
  }

  preparar() {
    console.log(
      `Preparando una pizza ${this.tamaño}, ${this.masa}, ingredientes: ${this.ingredientes}`
    );
    return this;
  }

  hornear() {
    console.log(`La pizza está en el horno`);
    setTimeout(() => console.log(`La pizza salió del horno`), 2000);
    return this;
  }

  empacar() {
    setTimeout(() => console.log(`La pizza se está empacando`), 3000);
    setTimeout(() => console.log(`La pizza está lista para ser enviada`), 4000);
    return this;
  }
}

const pizzaJamonQueso = new Pizza("Masa delgada", "Familiar", [
  "Jamón",
  "Queso",
  "Salsa"
]);
console.log(pizzaJamonQueso.preparar());
console.log(pizzaJamonQueso.hornear());
console.log(pizzaJamonQueso.empacar());

//const masa = prompt('Ingrese la masa deseada');
//const tamaño = prompt('Ingrese el tamaño')
/*
const PizzaHawaiana = new Pizza('Masa delgada', 'Familiar', ['Peperoni', 'Piña', 'Salsa', 'Jalapeños', 'Queso'])
console.log(PizzaHawaiana.preparar());
console.log(PizzaHawaiana.hornear());
console.log(PizzaHawaiana.empacar());*/

class Combo extends Pizza {
  constructor(masa, tamaño, ingredientes, bebida, postre, combo) {
    super(masa, tamaño, ingredientes);
    this.bebida = bebida;
    this.postre = postre;
    this.combo = combo;
  }

  elegirCombo() {
    this.preparar();
    this.hornear();
    this.empacar();
    setTimeout(
      () =>
        console.log(
          `Pedido: \nCombo: ${this.combo} 
      \nPizza: ${this.masa} ${this.tamaño} ${this.ingredientes}
      \nBebida: ${this.bebida}
      \npostre: ${this.postre}`
        ),
      6000
    );
    return this;
  }
}

/*
const pizzaPaisa = new Pizza("Masa gruesa", "Familiar", [
  "Queso",
  "guacamole",
  "maicitos",
  "salchicha",
  "nachos",
  "carne molida"
]);
console.log(pizzaPaisa.preparar());
console.log(pizzaPaisa.hornear());
console.log(pizzaPaisa.empacar());



const pedido = new Combo("Delgada","Pizza Familiar",['Salsa', 'Butifarra', 'Morcilla'], "Agua", "Ball Rolls", "Del terror");
console.log(pedido.elegirCombo());


//Juan Jose (Fachero)
const pizzaChocolate = new Pizza("Masa Gruesa", "Tamaño", [
  "Cholate",
  "Lecherita",
  "Queso"
]);
console.log(pizzaChocolate.preparar());
console.log(pizzaChocolate.hornear());
console.log(pizzaChocolate.empacar());




// Rattatouile ;v 
const pizzaSalchicha = new Pizza("Masa", "Grande", [
  "Salsa de tomate",
  "Queso",
  "Salchicha"
]);
console.log(pizzaSalchicha.preparar());
console.log(pizzaSalchicha.hornear());
console.log(pizzaSalchicha.empacar());

//
const PizzaVegetariana = new Pizza("Masa gruesa", "Mediana", [
  "Tomate",
  "Maicitos",
  "Champiñones",
  "Queso"
]);
console.log(PizzaVegetariana.preparar());
console.log(PizzaVegetariana.hornear());
console.log(PizzaVegetariana.empacar());

/*
*/
const pizzaTocineta = new Pizza("Masa gruesa", "Personal", [
  "Queso",
  "tocineta",
  "Maicitos"
]);
console.log(pizzaTocineta.preparar());
console.log(pizzaTocineta.hornear());
console.log(pizzaTocineta.empacar());
