Feature: First test with walnutjs
    @simple_web
    Scenario: Load Variables using params
        Given user stores the following list of variables:
            | "base_url" | "${params.[$.default.base_url]}" |
            | "cep"      | "02047-000"                      |

    @simple_web
    Scenario: I want see the Google Page
        Given user navigates to '${vars.base_url}'
        When user fills 'ConsultaCEP-SearchInput' by replacing text with '${vars.cep}'
        And user clicks on 'ConsultaCEP-SearchButton'
        And user waits for 3 seconds
        Then the 'ConsultaCEP-AddressTitle' has text equals to 'Rua Maria Prestes Maia'
        Then the 'ConsultaCEP-AddressZipCode' has text equals to '02047-000'