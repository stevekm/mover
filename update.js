// ~~~~~~~~~~~~~~
// FUNCTIONS
// ~~~~~~~~~~~~~~
function set_color(element, color){
    // set the background-color of an element
    element.style['background-color'] = color;
}

function update_color(div_obj){
    // swap colors on the object
    console.log('udpating color for ' + div_obj.id)
    new_color = div_obj.new;
    old_color = div_obj.old;
    set_color(div_obj.element, new_color);
    div_obj.new = old_color;
    div_obj.old = new_color;
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
    };
    return(obj);
}

function find_linked_obj(div_obj, obj_list){
    // get the object from the obj_list that should be updated with the div_obj
    linked_id = div_obj['linked_id'];

    num_objs = obj_list.length;
    for (let i = 0; i < num_objs; i++) {
        obj = obj_list[i]
        if(obj['id'] === linked_id){
            console.log('found linked obj: ' + obj['id']);
            return(obj);
        }
    }
    console.log('didnt find a matching linked_obj in the obj_list');
    // return(); // ?? What to do here???
}


// ~~~~~~~~~~~~~~
// SETUP
// ~~~~~~~~~~~~~~


// list of objects to contain div metadata
let boxes_list = [
    make_div_obj(id = 'red', new_color = 'blue', linked_id = 'blue'),
    make_div_obj(id = 'blue', new_color = 'red', linked_id = 'red')
];
num_boxes = boxes_list.length;


// ~~~~~~~~~~~~~~
// RUN
// ~~~~~~~~~~~~~~

// add event listener to update all objects on click
for (let i = 0; i < num_boxes; i++) {
    let box_obj = boxes_list[i];

    console.log('adding click action listener for ' + box_obj.id + ' div');

    // on click, update the div color, and the color of the assocaited div
    box_obj.element.addEventListener("click", (event) => {
        console.log(box_obj.id + ' was clicked');
        update_color(box_obj);
        let linked_obj = find_linked_obj(div_obj = box_obj, obj_list = boxes_list);
        update_color(linked_obj)
    })
}
