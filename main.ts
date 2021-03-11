let celsius = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 60; index++) {
        celsius = input.temperature()
        serial.writeValue("celsius", celsius)
        basic.pause(1000)
    }
})
basic.forever(function () {
	
})
