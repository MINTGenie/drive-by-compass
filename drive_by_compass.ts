//% color="#4C97FF"
namespace OrientBit {
    //% block
    //% preferred_heading.min=0 preferred_heading.max=359
    export function course_correct (preferred_heading: number): number[] {
        big_diff_speed = 30
        correction_speed_low = 28
        correction_speed_high = 35
        fwd_speed_norm = 32
        small_err_bounds = 1
        big_err_bounds = 15
        while (!(ready)) {
            basic.pause(2)
        }
        get_reading = current_heading
        if (Math.abs(get_reading - preffered_heading) > big_err_bounds) {
            if (get_reading <= preferred_heading) {
                Left_motor_speed = big_diff_speed
                Right_motor_speed = 0
            } else if (get_reading >= preferred_heading) {
                Left_motor_speed = 0
                Right_motor_speed = big_diff_speed
            }
        } else {
            if (get_reading <= preferred_heading - small_err_bounds) {
                Left_motor_speed = correction_speed_high
                Right_motor_speed = correction_speed_low
            } else if (get_reading >= preferred_heading + small_err_bounds) {
                Left_motor_speed = correction_speed_low
                Right_motor_speed = correction_speed_high
            } else {
                Left_motor_speed = fwd_speed_norm
                Right_motor_speed = fwd_speed_norm
            }
        }
        motor_speed_l_r = [Left_motor_speed, Right_motor_speed]
        return motor_speed_l_r
    }
    let sampler = 0
    let motor_speed_l_r: number[] = []
    let Right_motor_speed = 0
    let Left_motor_speed = 0
    let current_heading = 0
    let get_reading = 0
    let ready = false
    let big_err_bounds = 0
    let small_err_bounds = 0
    let fwd_speed_norm = 0
    let correction_speed_high = 0
    let correction_speed_low = 0
    let big_diff_speed = 0

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
}