let f = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    f = input.temperature() * 1.8 + 32
    basic.showNumber(f)
})
