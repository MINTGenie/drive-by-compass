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
    serial.writeValue("x", get_read)
    if (diff_motor_speed) {
        if (get_read <= pref) {
            Left_motor_speed = 30
            Right_motor_speed = 0
        } else if (get_read >= pref) {
            Left_motor_speed = 0
            Right_motor_speed = 30
        }
    } else {
        if (get_read <= pref - 1) {
            Left_motor_speed = 35
            Right_motor_speed = 28
        } else if (get_read >= pref + 1) {
            Left_motor_speed = 28
            Right_motor_speed = 35
        } else {
            Left_motor_speed = 32
            Right_motor_speed = 32
        }
    }
    motor_speed_l_r = [Left_motor_speed, Right_motor_speed]
    return motor_speed_l_r
}
let l_speed_r_speed_arr: number[] = []
let get_reading = 0
let motor_speed_l_r: number[] = []
let Right_motor_speed = 0
let Left_motor_speed = 0
let preffered_heading = 0
preffered_heading = 255
let sampler = 0
let current_heading = 0
let ready = false
basic.forever(function () {
    if (ready) {
        get_reading = current_heading
        if (Math.abs(get_reading - preffered_heading) > 15) {
            l_speed_r_speed_arr = course_correct(get_reading, preffered_heading, true)
        } else {
            l_speed_r_speed_arr = course_correct(get_reading, preffered_heading, false)
        }
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, l_speed_r_speed_arr[0])
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, l_speed_r_speed_arr[1])
    }
})
control.inBackground(function () {
    while (true) {
        for (let index = 0; index <= 4; index++) {
            sampler += input.compassHeading()
            basic.pause(2)
        }
        current_heading = sampler / 5
        sampler = 0
        ready = true
    }
})
