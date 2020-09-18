import Actions from '../actions/main-action';
import Card from '../actions/cred-card-puchase-action';

const action = new Actions();
const card = new Card();

describe ('checkout-ow-card', ()=>{

    beforeEach(() => {
        action.visit();
        action.desabilitarHotel();
    });

    it ('Realizar compra ow-card', ()=>{
        action.preencherOrigemEDestino();
        action.preencherDataDeIda();
        action.clicarEmPesquisar();
        action.escolherVoos();
        action.loginCheckout();
        action.preencherDadosDoPassageiroAdulto();
        card.selecionaCartao();
        card.preencherDadosDoCartao();
        action.aceitarTermosECondicoes();
        //card.finalizarCompraCard();
    })
});