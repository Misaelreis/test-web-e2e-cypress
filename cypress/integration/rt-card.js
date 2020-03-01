import Actions from '../actions/main-action';
import Card from '../actions/cred-card-puchase-action';

const action = new Actions();
const card = new Card();

describe ('checkout_ow', ()=>{

    it('Preparar a home', ()=>{
        action.visit();
        action.desabilitarHotel();
    });

    it ('Preencher os campos de origem e destino', ()=>{
        action.preencherOrigemEDestino();
    });

    it ('Preencher data de ida, volta e pesquisar', ()=>{
        action.preencherDataDeIdaEVolta();
        action.clicarEmPesquisar();
    });

    it ('Selecionar um voo de ida', ()=>{
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