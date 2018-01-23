function cycle_cols(obj){
    let old_col = obj.current;
    let new_col = obj.colors.shift();
    set_color(obj.element, new_col);
    obj.current = new_col;
    obj.colors.push(old_col);
    // console.log('color was: ' + old_col);
    // console.log('color is: ' + obj.current);
};

function cycle_all_cols(obj_list){
    // cycles the color on all objects in the list
    console.log("updating colors")
    let num_objs = obj_list.length;
    for (let i = 0; i < num_objs; i++) {
        let obj = obj_list[i];
        cycle_cols(obj = obj);
    };
};

function make_div_obj(id, colors, linked_ids){
    // get an element and make a dictionary with color information and linked objects
    // id = str, id of the div to get
    // colors = array of str color names
    // linked_ids = array of str id's of other divs to link with
    let obj = {
        id: id,
        element : document.getElementById(id),
        og: window.getComputedStyle(document.getElementById(id))['background-color'],
        current: window.getComputedStyle(document.getElementById(id))['background-color'],
        colors: colors,
        linked_ids: linked_ids
    };
    return(obj);
};

function find_div_obj_by_id(id, obj_list){
    // search the obj_list for a div_obj with the matching id
    let num_objs = obj_list.length;
    for (let i = 0; i < num_objs; i++) {
        let obj = obj_list[i];
        if(obj['id'] === id){
            return(obj)
        };
    };
    // console.log('didnt find a matching linked_obj in the obj_list for id: ' + id);
    // return() // ?? What to do here???
};

function get_linked_objs(div_obj, obj_list){
    // searches the obj_list object list for all div_obj objects that have a matching linked_id
    let matches = [];

    // find the matching objects in the list for each linked id
    for (let i = 0; i < div_obj['linked_ids'].length; i++) {
        let linked_id = div_obj['linked_ids'][i];
        let linked_objs = find_div_obj_by_id(id = linked_id, obj_list = obj_list);
        matches.push(linked_objs);
    };
    return(matches);
};

function get_current_cols(obj_list){
    // return an array of the current colors for all the objects in the list
    let current_colors = [];
    for (let i = 0; i < obj_list.length; i++) {
        let obj = obj_list[i]
        let col = obj.current
        current_colors.push(col)
    };
    return(current_colors);
};
