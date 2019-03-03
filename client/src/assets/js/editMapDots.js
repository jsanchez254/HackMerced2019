export function popOut(index){
    var popup = document.getElementsByClassName("popuptext");
    if(popup[index - 1].style.display == "block"){
        popup[index - 1].style.display = "none";
    }
    else{
        popup[index - 1].style.display = "block";
    }
}