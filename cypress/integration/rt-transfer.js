import Actions from '../actions/main-action';
import Transfer from '../actions/transfer-puchase-action';
const action = new Actions();
const transfer = new Transfer();

describe ('checkout-rt-transfer', ()=>{

    beforeEach(() => {
        action.visit();
        action.desabilitarHotel();
    });

    it ('Realizar compra rt-transfer', ()=>{
        action.preencherOrigemEDestino();
        action.preencherDataDeIdaEVolta();
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