let Valor_1 = 0
let Valor_2 = 0
input.onButtonPressed(Button.A, function () {
    Valor_1 = randint(0, 50)
    basic.showNumber(Valor_1)
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    Valor_2 = randint(15, 75)
    basic.showNumber(Valor_2)
    basic.pause(1000)
})
