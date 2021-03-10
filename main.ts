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
let preffered_heading = 0
preffered_heading = 75
let current_heading = 0
let sampler = 0
basic.forever(function () {
    if (current_heading <= preffered_heading - 5) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
        maqueen.motorStop(maqueen.Motors.M2)
    } else if (current_heading >= preffered_heading + 5) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
        maqueen.motorStop(maqueen.Motors.M1)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
    }
})
control.inBackground(function () {
    while (true) {
        for (let index = 0; index <= 9; index++) {
            sampler += input.compassHeading()
            basic.pause(10)
        }
        current_heading = sampler / 10
        sampler = 0
    }
})
