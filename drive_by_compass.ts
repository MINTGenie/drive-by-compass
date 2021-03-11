//% color="#4C97FF" icon="\uf0a4"
namespace OrientBit {
    /**
    * Orient in the direction of the value specified and move forward..
    * @param is the preferred_heading angle to orient to.
    * This function returns an array of 2 numbers which are speeds for left and right motor
    */
    //% block "Set heading direction to %preferred_heading degrees at speed %fwd_speed"
    //% preferred_heading.min=0 preferred_heading.max=359
    //% preferred_heading.defl=90
    //% fwd_speed.min=28 fwd_speed.max=100
    //% fwd_speed.defl=35
    export function course_correct (preferred_heading: number, fwd_speed: number): number[] {
        big_diff_speed = 30
        correction_speed_low = 28
        correction_speed_high = 35
        fwd_speed_norm = fwd_speed
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