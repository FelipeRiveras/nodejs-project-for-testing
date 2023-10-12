import { getIsBabyEvolutionByPokemonName, getPokemonData } from '../index'

describe('getPokemonData', () => {
  test('with valid data', async () => {
    // arrange
    const pokemonName = 'ditto'

    // act
    const result = await getPokemonData(pokemonName)

    // assert
    expect(result.id).toBe(132)
  })
  test('with invalid data', async () => {
    // arrange
    const pokemonName = 'dittos'

    // act

    // assert
    await expect(getPokemonData(pokemonName)).rejects.toThrow('soy el error')
  })
  test('with invalid data', async () => {
    // arrange
    const pokemonName = 'dittos'

    // act
    const result = await getIsBabyEvolutionByPokemonName(pokemonName)

    // assert
    expect(result).toBe('I had a error')
  })
  test('with valid data', async () => {
    // arrange
    const pokemonName = 'ditto'

    // act
    const result = await getIsBabyEvolutionByPokemonName(pokemonName)

    // assert
    expect(result).toBe(false)
  })
})
