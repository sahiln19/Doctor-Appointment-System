 let  getCurrentDate = () =>
{
    let d1 = new Date();
    let today = d1.getDate() + "/" + (d1.getMonth() + 1) + "/" + d1.getFullYear();
    console.log(today);
    return today;
}

function getCurrentTime()
{
    let d1 = new Date();
    let time = d1.getHours() + ":" + d1.getMinutes() + ":" + d1.getSeconds();
    console.log(time);
    return time;
}
 let getCurrentDateTime = function()
 {
    let getCurrentdatetme = getCurrentDate() + " " + getCurrentTime();      
    return getCurrentdatetme;
 }

 module.exports.getDate= getCurrentDateTime;   
 module.exports.getTime= getCurrentTime;
 module.exports.getDateTime = getCurrentDate;