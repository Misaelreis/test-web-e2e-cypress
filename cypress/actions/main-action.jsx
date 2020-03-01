class Actions {

    outbound_date = Cypress.moment().add(3, 'months').format("DD/MM/YYYY");
    inbound_date = Cypress.moment().add(4, 'months').format("DD/MM/YYYY");
    birthday_date = Cypress.moment().subtract(30, 'years').format("DDMMYYYY");

    visit(){
        cy.visit('');
    }
    
    preencherOrigemEDestino(){
        cy.get('.right').type('Recife');
        cy.get('[data-action="search-form-from-recife-recife-br"]').click()
        cy.get('.css-zovtsq > :nth-child(3) > .css-1owni4v').type('Montevideo');
        cy.get('[data-action="search-form-to-montevideo-montevideo-uy"]').click();
    }
    
    preencherDataDeIda(){
        cy.contains('Ida').click({ force: true });
        cy.get('#Ida_input').type(this.outbound_date);
        cy.get('[data-action="search-form-one-way"]').click();
    }
    
    preencherDataDeIdaEVolta(){
        cy.contains('Ida').click({ force: true });
        cy.get('#Ida_input').type(this.outbound_date);
        cy.contains('Volta').click({ force: true });
        cy.get('#Volta_input').type(this.inbound_date);
        cy.get('[data-action="search-form-flight-tab"]').click();
    }
    
    clicarEmPesquisar(){
        cy.get('#panel-0 > :nth-child(1) > .css-1i1s0a6 > .css-1yt4o9k > .css-k80hba > .css-538re4').click();
    }
    
    desabilitarHotel(){
        cy.get('#searchHotelCheckbox').click({ force: true });
    }
    
    escolherVoos(){
        cy.get(':nth-child(1) > [style="display: block;"] > .css-1n2cyye > .actions > .purchase-button > .css-tmmxyl').click();
        cy.wait(5000)
    }
    
    loginCheckout(){
        cy.contains("Comprar agora").click();
        cy.get('#email').type('misael.mm@gmail.com');
        //cy.get('[data-action="payment-user-identification-email"]').type('misael.mm@gmail.com');
        cy.contains('Avançar').click();
        cy.get('[data-action="payment-user-identification-password"]').type('max01milhas01');
        cy.contains('Avançar').click();
    }
    
    preencherDadosDoPassageiroAdulto(){
        cy.get('[data-action="passengers-treatment"]').select('Sr.');
        cy.get('[data-action="passengers-first-name"]').type('Jonas');
        cy.get('[data-action="passengers-last-name"]').type('Carlos Magno');
        cy.get('[data-action="passengers-document-ssn"]').type('687.846.700-45');
        cy.get('[data-action="passengers-birthday"]').type(this.birthday_date);
        cy.get('[data-action="passengers-phone"]').type('31987923527');
    }
    
    aceitarTermosECondicoes(){
        cy.get('[data-action="payment-accept-terms-conditions"]').click();
    }
}
export default Actions;
