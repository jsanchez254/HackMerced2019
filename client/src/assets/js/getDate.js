var date = new Date();
export function getDate(){
    var month;
    var day;
    if(date.getMonth() + 1 < 10){
        day = "0" + date.getMonth();
    }
    if(date.getDate() < 10){
        month = "0" + (date.getDate() + 1);
    }
    var realDate = month + "-" + day + "-" + date.getFullYear();
    return realDate;
}