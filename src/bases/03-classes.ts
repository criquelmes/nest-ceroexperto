import axios from "axios";
import { Move, PokeAPIResponse } from "../interfaces";

// export class Pokemon {
//   public id: number;
//   public name: string;

//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//     console.log("constructor llamado");
//   }
// }

export class Pokemon {
  get imageUrl(): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id}.png`;
  }
  constructor(public readonly id: number, public name: string) {
    console.log("contructor llamado con forma corta de definir una clase");
  }

  public scream() {
    console.log(`${this.name.toUpperCase()} says: "Pika-pika!"`);
    this.speak();
  }

  private speak() {
    console.log(`${this.name} says: ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    // const moves = 10;
    const { data } = await axios.get<PokeAPIResponse>(
      `https://pokeapi.co/api/v2/pokemon/${this.id}`
    );
    console.log(data.moves);
    return data.moves;
  }
}
export const charmander = new Pokemon(4, "Charmander");
// console.log(charmander.imageUrl);

// charmander.scream();
// charmander.speak();

// console.log(charmander.getMoves());
charmander.getMoves();
