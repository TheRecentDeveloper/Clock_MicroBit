input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    if (Sati < 23) {
        Start += 1
    } else {
        Start = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    Kontrola = 1
    Start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    if (Minute < 59) {
        Minute += 1
    } else {
        Minute = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    if (Minute < 10) {
        Vrijeme = "" + Sati + ":" + "0" + Minute
    } else {
        Vrijeme = "" + Sati + ":" + Minute
    }
    basic.clearScreen()
    basic.showString(Vrijeme)
    basic.showLeds(`
        . # # # .
        # . # . #
        # . # # #
        # . . . #
        . # # # .
        `)
})
let Start = 0
let Kontrola = 0
let Vrijeme = ""
let Sati = 0
let Minute = 0
Minute = 0
Sati = 0
Vrijeme = ""
Kontrola = 0
Start = 0
basic.showLeds(`
    . # # # .
    # . # . #
    # . # # #
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    if (Kontrola == 1) {
        if (Start + 60000 < input.runningTime()) {
            if (Minute < 59) {
                Minute += 1
            } else {
                Minute = 0
                if (Sati < 23) {
                    Sati += 1
                } else {
                    Sati = 0
                }
            }
            Start = input.runningTime()
        }
    }
    basic.showLeds(`
        . # # # .
        # . # . #
        # . # # #
        # . . . #
        . # # # .
        `)
})
