Feature: SWAPI Tests

  Background:
    * url 'https://swapi.dev/api'

  Scenario: Verificar que Biggs Darklighter é retornado com sucesso
    Given path 'people/9'
    When method get
    Then status 200
    And match $.name == 'Biggs Darklighter'

  Scenario: Verificar que a Estrela da Morte é retornada com sucesso
    Given path 'starships/9'
    When method get
    Then status 200
    And match $.name == 'Death Star'