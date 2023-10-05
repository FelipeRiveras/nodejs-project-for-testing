import { getPokemonData } from '../index'

describe('getPokemonData', () => {
  test('with valid data', async () => {
    // arrange
    const pokemonName = 'ditsto '

    // act
    const result = await getPokemonData(pokemonName)

    // assert
    expect(result.id).toBe(132)
  })
})
