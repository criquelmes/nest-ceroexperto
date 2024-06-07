import { Move, PokeAPIResponse } from "../interfaces";
import { HttpAdapter, PokeApiAxiosAdapter } from "../api";

export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string,
    private readonly http: HttpAdapter
  ) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    // const { data } = await axios.get<PokeAPIResponse>(
    //   "https://pokeapi.co/api/v2/pokemon/4"
    // );
    const data = await this.http.get<PokeAPIResponse>(
      `https://pokeapi.co/api/v2/pokemon/${this.id}`
    );
    console.log(data.moves);

    return data.moves;
  }
}

const pokeApiAxios = new PokeApiAxiosAdapter();
const pokeApiFetch = new PokeApiAxiosAdapter();

// export const charmander = new Pokemon(4, "Charmander", new PokeApiAdapter());
export const charmander = new Pokemon(4, "Charmander", pokeApiAxios);

charmander.getMoves();
