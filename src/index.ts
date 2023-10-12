export async function getPokemonData(name: string): Promise<any> {
  try {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    return await result.json()
  } catch(error) {
    throw new Error('soy el error al obtener pokemon')
  }
}

export async function getEvolution(id: number): Promise<any> {
  try {
    const result = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}`)
    return await result.json()
  } catch(error) {
    throw new Error('error al obtener la evolución')
  }
}

export async function getIsBabyEvolutionByPokemonName(name: string): Promise<any> {
  try {
    const { id } = await getPokemonData(name)
    const { chain: { is_baby }} = await getEvolution(id + 100000000)
    return is_baby
  } catch(error) {
    console.log(error)
    return 'I had a error'
  }
}

