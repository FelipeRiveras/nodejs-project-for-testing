export async function getPokemonData(name: string): Promise<any> {
  return (await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)).json()
}