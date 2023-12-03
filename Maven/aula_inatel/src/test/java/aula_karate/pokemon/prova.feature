Feature: Testes para a API pokeapi.co

Background:
  * url 'https://pokeapi.co/api/v2'

Scenario: Obter informações de um Pokémon específico usando o método GET
  Given path '/pokemon/1'
  When method GET
  Then status 200
  And match response.name == 'bulbasaur'
  And match response.base_experience == 64

Scenario: Pesquisar um Pokémon inexistente usando o método GET (Caso Negativo)
  Given path '/pokemon/999999'
  When method GET
  Then status 404

Scenario: Verificar se existe o tipo 'electric' na lista de tipos usando o método GET
  Given path '/type'
  When method GET
  Then status 200
  And match response.count == 20
  And match response.results[12].name == 'electric'

Scenario: Pesquisar um Pokémon usando o método GET
  Given path '/pokemon'
  When method GET
  Then status 200
  And match response.count == 1292
  And match response.results[5].name == 'charizard'

Scenario: Criar um novo Pokémon usando o método POST (método diferente do GET e vai falhar propositalmente)
  Given path '/pokemon'
  And request { name: 'pikachu', type: 'electric' }
  When method POST
  Then status 404
  
