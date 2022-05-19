import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'
import SignupFactory from '../factories/SignupFactory'
import SignupPage from '../pages/SignupPage'

describe('Cadastro', () => {

/*     beforeEach(function () {
        cy.fixture('deliver').then((d) => {
            this.deliver = d
        })
    }) */

    it.skip('Seja um entregador', function () {

        var deliver = SignupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
    })

    it.skip('CPF Invalido', function () {

        var deliver = SignupFactory.deliver()
        deliver.cpf = '000000141aa'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')


    })
    it.skip('Email Invalido', function () {

        var deliver = SignupFactory.deliver()
        deliver.email = 'teste.com'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
    })
    it('Required Fields', function(){
        SignupPage.go()
        SignupPage.submit()
        SignupPage.alertMessageShouldBe('É necessário informar o nome')
        SignupPage.alertMessageShouldBe('É necessário informar o CPF')
        SignupPage.alertMessageShouldBe('É necessário informar o email')
        SignupPage.alertMessageShouldBe('É necessário informar o CEP')
        SignupPage.alertMessageShouldBe('É necessário informar o número do endereço')
        SignupPage.alertMessageShouldBe('Selecione o método de entrega')
        SignupPage.alertMessageShouldBe('Adicione uma foto da sua CNH')
    })

})
