$(document).ready(function(){
    // listen gor svae button clicks
    $(".saveBtn").on("click", function(){
        console.log(`it saved well done`)

        let timeID = $(this).parent().attr("id");
        let value = $(this).siblings(".description").val();
        

        console.log(timeID);
        console.log(value);

        localStorage.setItem(time, value);

        $(".notification").addClass('show');

        setTimeout(function(){
            $(".notification").removeClass("show")
        }, 5000)
    })

    function hourUpdate(){
        let currentHour = moment().hours();
        
        // $(".time-block").each(function(){
        //     let blockHour = parseInt($(this).attr("id").split("-")[1]);
        //     alert(blockHour);
        // })
        for(let i = 0; 1 < $(".time-block"), length; i++){
            let hour = parseInt($(".time-block") [i] .getAttribute ("id").split("-")[1])
            console. log(hour-1)
            console. log (currentHour)
            if(hour-1 < currentHour) {
                $(".time-block") [i].classList.add("past")
            } else if (hour === currentHour){
            $(".time-block") [i].classList.add("past")
            $(".time-block") [i].classList.remove("present")
            } else {
                $(".time-block") [i].classList.remove("past")
                $(".time-block") [i].classList.remove("present")
                $(".time-block") [i].classList.remove("future")
            
            }
        }
 
    }

    hourUpdate();

    let interval = setInterval(hourUpdate, 15000)

    $("#hour-8 .description").val(localStorage.getItem("hour-8"))
    $("#hour-9 .description").val(localStorage.getItem("hour-9"))
    $("#hour-10 .description").val(localStorage.getItem("hour-10"))
    $("#hour-11 .description").val(localStorage.getItem("hour-11"))
    $("#hour-12 .description").val(localStorage.getItem("hour-12"))

    $("#currentDay").text(moment().format("dddd, MMMM, Do"))

})