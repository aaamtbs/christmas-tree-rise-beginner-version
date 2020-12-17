input.onSound(DetectedSound.Loud, function () {
    tree.triggerRise(duration)
})
input.onButtonPressed(Button.A, function () {
    duration += -1
})
input.onButtonPressed(Button.B, function () {
    duration += 1
})
let duration = 0
let tree: ChristmasTree.ChristmasTree = null
tree = ChristmasTree.create()
tree.changeMode(LEDMode.Free)
duration = 3
basic.forever(function () {
    tree.moveRise()
    tree.update()
})
