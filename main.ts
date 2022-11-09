let temperature = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    temperature = input.temperature() * 1.8
    temperature += 32
    basic.showNumber(temperature)
})
