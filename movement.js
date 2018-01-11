// https://gist.github.com/pathunstrom/574878278f7ae9d3cdab349b33920423
let box_mover = {
    focus_box: undefined,
    mouse_position: [0, 0],
    mouse_offset: [0, 0],
    moving: false,
    set_box: (event) => {
        this.mouse_position = [event.clientX, event.clientY]
        this.mouse_offset = [event.offsetX, event.offsetY]
        this.moving = true
    },
    animate: () => {
        if (this.moving) {

        }
    },
    move_position: (event) => {

    }
}
let boxes = document.getElementsByClassName("box")
let red = document.getElementById("red")
let blue = document.getElementById("blue")

console.log(red)
console.log(blue)
for (let i=0;i<boxes.length;i++) {
    let box = boxes.item(i)
    box.addEventListener("click", (event) => {console.log(event); console.log(box.id + " clicked!")})
}
