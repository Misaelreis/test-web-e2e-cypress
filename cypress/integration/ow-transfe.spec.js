import Actions from '../actions/main-action';
import Transfer from '../actions/transfer-puchase-action';
const action = new Actions();
const transfer = new Transfer();

describe ('checkout-ow-transfer', ()=>{

    beforeEach(() => {
        action.visit();
        action.desabilitarHotel();
    });

    it ('Realizar compra ow-transfer', ()=>{
        action.preencherOrigemEDestino();
        action.preencherDataDeIda();
        action.clicarEmPesquisar();
        action.escolherVoos();
        action.loginCheckout();
        action.preencherDadosDoPassageiroAdulto();
        transfer.selecionaTransferencia();
        transfer.preencherDadosDaTransferencia();
        action.aceitarTermosECondicoes();
        //transfer.finalizarCompraTransferenciaSim();
    });
});