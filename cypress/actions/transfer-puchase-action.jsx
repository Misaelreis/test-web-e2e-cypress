class Transfer {

    selecionaTransferencia(){
        cy.get('[data-action="payment-transfer"]').click();
    }
        
    preencherDadosDaTransferencia(){
        cy.get('#selectedPersonType').select('Pessoa Física');
        cy.get('#selectedAccountType').select('Conta Corrente');
        cy.get('[data-action="payment-transfer-bank"]').select('Banco do Brasil');
        cy.get('[data-action="payment-transfer-bank-account-name"]').type('Josiana Vianna');
        cy.get('[data-action="payment-transfer-bank-account-email"]').type('zael.au@gmail.com');
        cy.get('[data-action="payment-transfer-bank-account-cpf"]').type('58248361080')
        cy.get('[data-action="payment-transfer-bank-account-phone"]').type('31987923527');
    }
        
    finalizarCompraTransferenciaSim(){
        cy.contains('Finalizar Compra').click();
        cy.get('.css-tpeh2k').type('SIM');
        cy.contains('Confirmar').click();
    }
    
    finalizarCompraTransferenciaCancelar(){
        cy.contains('Finalizar Compra').click();
        cy.get('.css-tpeh2k').type('SIM');
        cy.get('[data-action="transfer-modal-click-cancel"]').click();
    }

}
export default Transfer;