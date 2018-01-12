function set_color(element, color){
    // set the background-color of an element
    element.style['background-color'] = color
}

function update_color(div_obj){
    // swap colors on the object
    new_color = div_obj.new
    old_color = div_obj.old
    set_color(div_obj.element, new_color)
    div_obj.new = old_color
    div_obj.old = new_color
}

function make_div_obj(id, new_color, linked_id){
    // get an element and make a dictionary with color information
    obj = {
        id: id,
        element : document.getElementById(id),
        og: window.getComputedStyle(document.getElementById(id))['background-color'],
        old: window.getComputedStyle(document.getElementById(id))['background-color'],
        new: new_color,
        linked_id: linked_id
    }
    return(obj)
}

function click_linked(div_obj){
    // trigger click event for element matching linked_id
    linked_id = div_obj['linked_id']
    div_obj[linked_id].element.click()
}

function update_linked(div_obj){
    // update the div_obj associated with the given obj
    linked_id = div_obj['linked_id']
    linked_obj = div_obj[linked_id]
    update_color(linked_obj)
}


// the divs we want to keep track of
let boxes_list = {
    'red': make_div_obj('red', 'blue', 'blue'),
    'blue': make_div_obj('blue', 'red', 'red')
}

num_boxes = Object.keys(boxes_list).length

for (let i = 0; i < num_boxes; i++) {
    let box_key = Object.keys(boxes_list)[i]
    let box = boxes_list[box_key].element

    console.log('adding click action listener for ' + box.id + ' div')

    // on click, update the div color, and the color of the assocaited div
    box.addEventListener("click", (event) => {
        console.log('updating color for ' + box.id)
        update_color(boxes_list[box.id])
        // click_linked(boxes_list[box.id])
        update_linked(boxes_list[box.id])
    })
}
