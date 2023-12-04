Feature: Testes para a API GoRest

Background:
    * url 'https://gorest.co.in/public/v2'
    * def token = '12e0063abf302b3dbe94793f3620f8f801714a5c33f62c5503008aa32558a450'

Scenario: Achando um usuário pelo ID
    Given path '/users'
    When method get
    And param id = 1
    Then status 200

Scenario: Achando uma postagem pelo ID
    Given path '/posts'
    When method get
    And param id = 122
    Then status 200

Scenario: Achando um comentário pelo ID
    Given path '/comments'
    When method get
    And param id = 243
    Then status 200

Scenario: Testando retorno com usuário inexistente
    Given path 'users/99999999'
    When method get
    Then status 404

Scenario: Testando retorno com postagem inexistente
    Given path 'posts/99999999'
    When method get
    Then status 404


Scenario: Tentando criar um usuário 
    Given path '/users'
    And request { "name": "Inatel", "gender": "Male", "email": "Inatel@Software.com", "status": "Active" }
    And header Authorization = 'Bearer ' + token
    When method post
    Then status 201