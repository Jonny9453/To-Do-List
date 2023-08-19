//jshint esversion:6

function date(){
    var today = new Date();
    let options= {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    };




    let day=today.toLocaleDateString("hi-IN", options)

    return day;
}

module.exports=date;