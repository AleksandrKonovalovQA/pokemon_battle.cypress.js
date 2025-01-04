// Зайти на сайт https://pokemonbattle.ru/
// Ввести правильный логин 
// Ввести правильный пароль
// Нажать "войти" 
// Открыть страницу своего тренера
// Открыть страницу Смену аватара 
// Нажать кнопку "купить"
// Вводи номер карты 
// Срок карты
// Код карты
// Имя карты
// Нажать кнопку "оплатить"
// Проверить текст ответа 


it('Покупка нового аватара', function () {
    cy.visit("https://pokemonbattle.ru/")
    cy.get(':nth-child(1) > .auth__input').type("koteika19922@yandex.ru") 
    cy.get('#password').type("35Ezipin") 
    cy.get('.auth__button').click();
    cy.get('.header__id-text_type_profile').click();
    cy.wait(2000)
    cy.scrollTo('bottom');
    cy.get('[href="/shop"]').click();
    cy.get('.available > button').first().click({ force: true });
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');;
    cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('NAME');
    cy.get('.pay-btn').click();
    cy.get('#cardnumber').type('56456');
    cy.get('.payment__submit-button').click();
    cy.contains('Покупка прошла успешно').should('be.visible');
})