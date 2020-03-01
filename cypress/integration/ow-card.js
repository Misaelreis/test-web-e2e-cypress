import Actions from '../actions/main-action';
import Card from '../actions/cred-card-puchase-action';

const action = new Actions();
const card = new Card();

describe ('checkout-ow-card', ()=>{

    it('Preparar a home', ()=>{
        action.visit();
        action.desabilitarHotel();
    });

    it ('Preencher os campos de origem e destino', ()=>{
        action.preencherOrigemEDestino();
    });

    it ('Preencher data de ida e pesquisar', ()=>{
        action.preencherDataDeIda();
        action.clicarEmPesquisar();
    });

    it ('Selecionar voo', ()=>{
        action.escolherVoos();
    });

    it ('Login checkout', ()=>{
        action.loginCheckout();
    });

    it ('Preencher os dados do passageiro adulto', ()=> {
        action.preencherDadosDoPassageiroAdulto();
    });

    it ('Selecionar a opção de cartão de crédito', ()=>{
        card.selecionaCartao();
    })

    it ('Preencher dado do cartão', ()=>{
        card.preencherDadosDoCartao();
        action.aceitarTermosECondicoes();
    })

    it ('Finalizar compra', ()=>{
        card.finalizarCompraCard();
    })
});