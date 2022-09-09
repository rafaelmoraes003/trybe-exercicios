type PizzaSlices = 4 | 6 | 8;

interface Pizza {
  flavor: string,
  slices: PizzaSlices,
};

const calabresa: Pizza = {
  flavor: "Calabresa",
  slices: 8,
};

const marguerita: Pizza = {
  flavor: "Marguerita",
  slices: 6,
};

const nutella: Pizza = {
  flavor: "Nutella",
  slices: 4,
};

type Common = "Calabresa" | "Frango" | "Pepperoni";
type Vegetarian = "Marguerita" | "Palmito" | "Cogumelo";
type Sweet = "Nutella" | "Goiabada com Queijo" | "Marshmallow";

interface CommonPizza extends Pizza {
  flavor: Common,
};

interface VegetarianPizza extends Pizza {
  flavor: Vegetarian,
};

interface SweetPizza extends Pizza {
  flavor: Sweet,
  slices: 4,
};

const othercalabresa: CommonPizza = {
  flavor: "Calabresa",
  slices: 4,
};

const frango: CommonPizza = {
  flavor: "Frango",
  slices: 6,
};

const pepino: CommonPizza = {
  flavor: "Pepperoni",
  slices: 8.
}

const palmito: VegetarianPizza = {
  flavor: "Palmito",
  slices: 4,
};

const othermarguerita: VegetarianPizza = {
  flavor: "Marguerita",
  slices: 6,
};

const othernutella: SweetPizza = {
  flavor: "Nutella",
  slices: 4
};