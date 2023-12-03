Feature: Testando API Pokemon.

Background: executa antes de cada teste
    * def url_base = 'https://pokeapi.co/api/v2'

Scenario: Testando Retorno
    Given url 'https://pokeapi.co/api/v2/pokemon/pikachu'
    When method GET
    Then status 200

Scenario: Testando retorno people/1/ com informações válidas
    Given url 'https://pokeapi.co/api/v2/pokemon/chocolate'
    When method GET
    Then status 404

Scenario: Testando retorno pikachu e verificando json
    Given url url_base
    And path '/pokemon/pikachu'
    When method GET
    Then status 200
    And match response.name == 'pikachu'
    And match response.id == 25

Scenario: Testando retorno pokemon red e entrando em um dos elementos do array de idiomas e testando retorno do JSON
    Given url url_base
    And path '/version/1'
    When method GET
    Then status 200
    And def idioma = $.names[5].language.url
    And print idioma
    And url idioma
    Then match response.name == 'es'
    And match response.id == 7