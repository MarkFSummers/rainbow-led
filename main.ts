input.onButtonPressed(Button.A, function () {
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
})
basic.showString("Lets Go !")
let strip = neopixel.create(DigitalPin.P15, 8, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
CutebotPro.fullSpeedAhead()
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(100)
})
