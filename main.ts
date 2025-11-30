let teller = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.No)
    basic.clearScreen()
    teller += 1
    basic.showNumber(teller)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    teller = 0
})
