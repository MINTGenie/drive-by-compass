// tests go here; this will not be compiled when this package is used as an extension.
basic.forever(function () {
    l_speed_r_speed_arr = OrientBit.course_correct(preffered_heading)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, l_speed_r_speed_arr[0])
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, l_speed_r_speed_arr[1])
})