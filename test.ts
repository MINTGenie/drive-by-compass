// tests go here; this will not be compiled when this package is used as an extension.
let lr_arr_test: number[] = []
let pref_head = 100
basic.forever(function () {
    lr_arr_test = OrientBit.course_correct(pref_head, 40)
    pins.digitalWritePin(DigitalPin.P0, lr_arr_test[0])
    pins.digitalWritePin(DigitalPin.P1, lr_arr_test[1])
})
