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
function course_correct (get_read: number, pref: number, diff_motor_speed: boolean) {
    if (diff_motor_speed) {
        if (get_reading <= preffered_heading) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 0)
        } else if (get_reading >= preffered_heading) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 0)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
        }
    } else {
        if (get_reading <= preffered_heading - 2) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 35)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 28)
        } else if (get_reading >= preffered_heading + 2) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 28)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 35)
        } else {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
        }
    }
}
let get_reading = 0
let preffered_heading = 0
preffered_heading = 255
let sampler = 0
let current_heading = 0
let ready = false
basic.forever(function () {
    if (ready) {
        get_reading = current_heading
        if (Math.abs(get_reading - preffered_heading) > 15) {
            course_correct(get_reading, preffered_heading, true)
        } else {
            course_correct(get_reading, preffered_heading, false)
        }
    }
})
control.inBackground(function () {
    while (true) {
        for (let index = 0; index <= 9; index++) {
            sampler += input.compassHeading()
            basic.pause(2)
        }
        current_heading = sampler / 10
        sampler = 0
        ready = true
    }
})
