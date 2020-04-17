export function debounce(func, delay){
    var timer;
    return function(event){
        if(timer) clearTimeout(timer);
        timer = setTimeout(func.bind(null, event), delay);
    };
}
