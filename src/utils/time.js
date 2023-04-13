export function getDate(stamp){
    var date = new Date(stamp);
    return (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();
}