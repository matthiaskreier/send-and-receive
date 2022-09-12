let message = "."

radio.setGroup(17)

input.onButtonPressed(Button.A, function () {
    message = "A"
    radio.sendString(message)
})

input.onButtonPressed(Button.B, function () {
    message = "B"
    radio.sendString(message)
})

radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})

basic.forever(function () {
    radio.sendString(message)
    basic.pause(10000)
})