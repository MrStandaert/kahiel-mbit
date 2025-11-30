let teller = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.No)
    teller += 1
    basic.showNumber(teller)
})
input.onButtonPressed(Button.A, function () {
    teller = 0
})
