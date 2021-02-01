input.onPinPressed(TouchPin.P0, function () {
    music.playTone(698, music.beat(BeatFraction.Whole))
})
input.onSound(DetectedSound.Loud, function () {
    basic.showString("Hello!")
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("C C5 C C5 C C5 C C5 ", 120)
})
input.onPinPressed(TouchPin.P1, function () {
    music.playMelody("E C5 C5 A C5 D F C ", 120)
})
input.onGesture(Gesture.Shake, function () {
    music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
})
pins.touchSetMode(TouchTarget.LOGO, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P0, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
input.setSoundThreshold(SoundThreshold.Loud, 192)
basic.forever(function () {
	
})
