class Card {
    selecionaCartao(){
        cy.contains('MasterCard').click();
    }

    preencherDadosDoCartao(){
        cy.get('[data-action="payment-credit-card-parcel"]').select('Pagamento à vista sem juros');
        cy.get('[data-action="payment-credit-card-number"]').type('5555666677778884');
        cy.get('[data-action="payment-credit-card-month"]').select('12');
        cy.get('[data-action="payment-credit-card-year"]').select('2031');
        cy.get('[data-action="payment-credit-card-name"]').type('Julia Vianna');
        cy.get('[data-action="payment-credit-card-cvv"]').type('123');
        cy.get('[data-action="payment-credit-card-cpf"]').type('81546478000');
        cy.get('[data-action="payment-credit-card-address-number"]').type('169');
        cy.get('[data-action="payment-credit-card-phone"]').type('31988875678');
        cy.get('[data-action="payment-credit-card-birthday"]').type('21051990');
        cy.get('[data-action="payment-credit-card-zip-code"]').type('30170050');
        //cy.get('[data-action="payment-credit-card-address-no-number"]').click();
    }

    finalizarCompraCard(){
        cy.contains('Finalizar Compra').click();
    }
}
export default Card;