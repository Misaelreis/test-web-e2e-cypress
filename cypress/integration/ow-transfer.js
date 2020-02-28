describe ('checkout', ()=>{

    it ('Preencher os campos de origem e destino', ()=>{
        cy.visit('');
        cy.get('.right').type('rec');
        cy.get('[data-action="search-form-from-recife-recife-br"]').click()
        cy.get('.css-zovtsq > :nth-child(3) > .css-1owni4v').type('Montevideo');
        cy.get('[data-action="search-form-to-montevideo-montevideo-uy"]').click();
        cy.contains('Ida').click({ force: true });
    });

    it ('Preencher data de ida e pesquisar', ()=>{
        cy.get('#Ida_input').type("20/12/2020");
        cy.get('#searchHotelCheckbox').click({ force: true });
        cy.contains('Volta').click({ force: true });
        cy.get('#Volta_input').type("30/12/2020");
        cy.get('#panel-0 > :nth-child(1) > .css-1i1s0a6 > .css-1yt4o9k > .css-k80hba > .css-538re4').click();
    });

    it ('Selecionar um voo', ()=>{
        cy.get(':nth-child(1) > [style="display: block;"] > .css-1n2cyye > .actions > .purchase-button > .css-tmmxyl').click();
        cy.contains('Comprar agora').click();
    });

    it ('Login', ()=>{
        cy.get('[data-action="payment-user-identification-email"]').type('misael.mm@gmail.com');
        cy.contains('Avançar').click();
        cy.get('[data-action="payment-user-identification-password"]').type('max01milhas01');
        cy.contains('Avançar').click();
    });

    it ('Preencher os dados do passageiro', ()=> {
        cy.get('[data-action="passengers-treatment"]').select('Sr.');
        cy.get('[data-action="passengers-first-name"]').type('Teste');
        cy.get('[data-action="passengers-last-name"]').type('Quality');
        cy.get('[data-action="passengers-document-ssn"]').type('687.846.700-45');
        cy.get('[data-action="passengers-birthday"]').type('12022000');
        cy.get('[data-action="passengers-phone"]').type('31988888888');
    });

    it ('Preencher dados de transferencia',()=>{
        cy.get('[data-action="payment-transfer"]').click();
        cy.get('#selectedPersonType').select('Pessoa Física');
        cy.get('#selectedAccountType').select('Conta Corrente');
        cy.get('[data-action="payment-transfer-bank"]').select('Banco do Brasil');
        cy.get('[data-action="payment-transfer-same-owner"]').click(); //bug
        cy.get('[data-action="payment-transfer-bank-account-name"]').type('Tester');
        cy.get('[data-action="payment-transfer-bank-account-email"]').type('test@email.com');
        cy.get('[data-action="payment-transfer-bank-account-cpf"]').type('58248361080')
        cy.get('[data-action="payment-transfer-bank-account-phone"]').type('31988888888');
        cy.get('[data-action="payment-accept-terms-conditions"]').click();
        cy.contains('Finalizar Compra').click();
        cy.get('.css-tpeh2k').type('SIM');
        //cy.contains('Confirmar').click();
        cy.get('[data-action="transfer-modal-click-cancel"]').click();
    });
});