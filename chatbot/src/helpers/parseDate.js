module.exports = function parseDate(dateinput){
    function checkForZero(target) {
        if (target < 10) {
            target = '0' + target;
        }
        return target
    }

    let date = new Date(dateinput);
    let year = date.getFullYear();
    let month = checkForZero(date.getMonth()+1);
    let dt = checkForZero(date.getDate());
    let h = checkForZero(date.getHours());
    let m = checkForZero(date.getMinutes());

    return dt+'.' + month + '.'+year+" - " + h + ":" + m;
}