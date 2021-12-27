var currentDate = moment().format('MMM Do YY')
var currentDay = document.querySelector("#currentDay")
var container = document.querySelector(".container")
currentDay.textContent = "Todays date is: " + currentDate
var currentHour = moment().format("H:00")
console.log(currentHour)
var hourArray = [
    {
    time: "09:00",
    hour: "Nine",
    data: "",
    },
    {
    time: "10:00",
    hour: "Ten",
    data: "", 
    },
    {
    time: "11:00",
    hour: "Eleven",
    data: ""
    },
    {
    time: "12:00",
    hour: "Noon",
    data: ""
    },
    {
    time: "13:00",
    hour: "One",
    data: ""
    },
    {
    time: "14:00",
    hour: "Two",
    data: "",
    },
    {
    time: "15:00",
    hour: "Three",
    data: "",
    },
    {
    time: "16:00",
    hour: "Four",
    data: "",
    },
    {
    time: "17:00",
    hour: "Five",
    data: "",
    },
]
var loadScheduler = function(){
for (var i = 0; i<hourArray.length; i++){
    var data = localStorage.getItem(hourArray[i].hour, hourArray[i].data);
    hourArray[i].data = data
}
for(i=0; i<hourArray.length; i++){
    var rowContainer = document.createElement("div")
    var saveBTN = document.createElement("div")
    var hourContainer= document.createElement("div")
    textContainer = document.createElement("textarea")
    var textClasses = textContainer.className = "description col-sm-8 col-lg-10 col-6 "
    var saveIcon = document.createElement("img")
    saveIcon.src ="Develop/save.png"
    if(currentHour === hourArray[i].time){
    textContainer.className = textClasses + "present"
    }
    else if(currentHour > hourArray[i].time){
    textContainer.className = textClasses + "past"
    }
    else if(currentHour < hourArray[i].time){
    textContainer.className = textClasses + "future"
    }
    saveBTN.id = JSON.stringify(hourArray[i].hour)
    textContainer.id = JSON.stringify(hourArray[i].hour)
    hourContainer.className = "col-sm-2 col-3 col-lg-1 hour"
    hourContainer.textContent = hourArray[i].time
    rowContainer.className = "row time-block"
    saveBTN.className = "saveBtn col-sm-2 col-3 col-lg-1"
    var data = localStorage.getItem(hourArray[i].hour, hourArray[i].data);
    textContainer.textContent = data
    container.appendChild(rowContainer)
    rowContainer.appendChild(hourContainer)
    rowContainer.appendChild(textContainer)
    rowContainer.appendChild(saveBTN)
    saveBTN.appendChild(saveIcon)
}
}
loadScheduler()
$(".saveBtn").on("click", "img", function() {
    for ( i = 0; i < hourArray.length; i++){
    var textArea = document.getElementById(JSON.stringify(hourArray[i].hour)).value

    localStorage.setItem(hourArray[i].hour, textArea);
}
})