input.onButtonPressed(Button.A, function () {
    preffered_heading += 15
    if (preffered_heading > 360) {
        preffered_heading = preffered_heading - 360
    }
})
input.onButtonPressed(Button.B, function () {
    preffered_heading += -15
    if (preffered_heading < 0) {
        preffered_heading = 360 + preffered_heading
    }
})
let l_speed_r_speed_arr: number[] = []
let preffered_heading = 0
preffered_heading = 120
basic.forever(function () {
    l_speed_r_speed_arr = OrientBit.course_correct(preffered_heading, 30)
})
