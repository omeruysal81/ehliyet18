input.onButtonPressed(Button.A, function () {
    yas += 1
    basic.showNumber(yas)
})
input.onButtonPressed(Button.B, function () {
    yas += -1
    basic.showNumber(yas)
})
let yas = 0
yas = 18
basic.showNumber(yas)
basic.forever(function () {
    if (yas >= 18) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
