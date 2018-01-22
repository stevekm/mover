gameboxes = [
    make_div_obj(id = 'col1row1', colors = ['red'], linked_ids = ['col2row2']),
    make_div_obj(id = 'col2row1', colors = ['red'], linked_ids = ['col1row1']),
    make_div_obj(id = 'col1row2', colors = ['red'], linked_ids = ['col2row1']),
    make_div_obj(id = 'col2row2', colors = ['red'], linked_ids = ['col1row2'])
];
num_boxes = gameboxes.length;


// add event listener to update all objects on click
for (let i = 0; i < num_boxes; i++) {
    let box_obj = gameboxes[i];

    console.log('adding click action listener for ' + box_obj.id + ' div');

    // on click, update the div color, and the color of the assocaited div
    box_obj.element.addEventListener("click", (event) => {
        console.log(box_obj.id + ' was clicked');
        cycle_cols(box_obj);
        let linked_objs = get_linked_objs(div_obj = box_obj, obj_list = gameboxes);
        // console.log('linked objs are: ');
        // console.log(linked_objs);
        cycle_all_cols(linked_objs);
    });
};
