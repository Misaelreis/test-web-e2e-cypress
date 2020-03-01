import Actions from '../actions/main-action';
import Transfer from '../actions/transfer-puchase-action';
const action = new Actions();
const transfer = new Transfer();

describe ('checkout-rt-transfer', ()=>{

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

    it ('Selecionar voos', ()=>{
        action.escolherVoos();
    });

    it ('Login checkout', ()=>{
        action.loginCheckout();
    });

    it ('Preencher os dados do passageiro adulto', ()=> {
        action.preencherDadosDoPassageiroAdulto();
    });

    it ('Preencher dados de transferencia',()=>{
        transfer.selecionaTransferencia();
        transfer.preencherDadosDaTransferencia();
        action.aceitarTermosECondicoes();
        transfer.finalizarCompraTransferenciaSim();
    });
});