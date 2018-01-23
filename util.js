function set_color(element, color){
    // set the background-color of an element
    element.style['background-color'] = color;
};

function identical(array){
    for(let i = 0; i < array.length - 1; i++){
        if(array[i] !== array[i + 1]){
            return(false)
        };
    };
    return(true)
};
