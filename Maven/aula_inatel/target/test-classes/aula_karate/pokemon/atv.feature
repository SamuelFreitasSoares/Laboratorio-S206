Scenario: Testando Retorno de um Pokémon Inexistente
    Given url 'https://pokeapi.co/api/v2/pokemon/nonexistent'
    When method GET
    Then status 404
    
    Scenario: Testando retorno de um item inexistente
    Given url 'https://pokeapi.co/api/v2/item/nonexistent'
    When method GET
    Then status 404
    
    Scenario: Testando retorno de um movimento específico e verificando json
    Given url url_base
    And path '/move/1'
    When method GET
    Then status 200
    And match response.name == 'pound'
    And match response.id == 1
    
    Scenario: Testando retorno de uma habilidade e verificando json
    Given url url_base
    And path '/ability/4'
    When method GET
    Then status 200
    And match response.name == 'static'
    And match response.id == 4
    
    Scenario: Testando retorno de um tipo e verificando json
    Given url url_base
    And path '/type/3'
    When method GET
    Then status 200
    And match response.name == 'water'
    And match response.id == 3