var cpf = require('gerador-validador-cpf')
//import {validate} from 'gerador-validador-cpf'

export default {

    deliver: function() {

        var data = {
                nome: 'Teste Teste',
                cpf: cpf.generate(),
                email: 'teste@teste.com',
                whatsapp: '47474747474',
                endereco: {
                    cep: '89066695',
                    rua: 'Rua José Januário',
                    numero: '50',
                    complemento: 'casa',
                    bairro: 'Itoupavazinha',
                    cidade_uf: 'Blumenau/SC'
                },
                metodo_entrega: 'Moto',
                cnh: 'cnh-digital.jpg'
        }
        return data
    }
}