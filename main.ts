/**
 * תרגיל כיתה: 
 * 
 * 1.
 * 
 * להוסיף פעולה שמבטלת את המילה האחרונה.
 * 
 * 2.
 * 
 *  להוסיף פעולה שמציינת רווח בין מילים
 */
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        music.playTone(262, music.beat(BeatFraction.Quarter))
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    radio.sendNumber(1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(0)
})
radio.setGroup(1)
