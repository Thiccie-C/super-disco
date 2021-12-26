var currentDate = moment().format('MMM Do YY')
var currentDay = document.querySelector("#currentDay")
var container = document.querySelector(".container")
currentDay.textContent = "Todays date is: " + currentDate
var currentHour = moment().format("H")
var savedSchedule = []
console.log(currentHour)
var hourArray = ["09", "10", "11", "12", "13", "14", "15", "16", "17"]
var loadScheduler = function(){
    for(var i=0; i<hourArray.length; i++){
        console.log(hourArray[i])
        var rowContainer = document.createElement("div")
        var saveBTN = document.createElement("div")
        var hourContainer= document.createElement("div")
        var textContainer = document.createElement("textarea")
        var textClasses = textContainer.className = "col-10 "
        if(currentHour === hourArray[i]){
        textContainer.className = textClasses + "present"
        }
        else if(currentHour > hourArray[i]){
        textContainer.className = textClasses + "past"
        }
        else if(currentHour < hourArray[i]){
        textContainer.className = textClasses + "future"
        }
        hourContainer.className = "col-1 hour"
        hourContainer.textContent = hourArray[i]
        rowContainer.className = "row"
        saveBTN.className = "saveBTN col-1"
        saveBTN.textContent = "Save"
        savedSchedule = localStorage.getItem(savedSchedule)
        textContainer.textContent = savedSchedule
        container.appendChild(rowContainer)
        rowContainer.appendChild(hourContainer)
        rowContainer.appendChild(textContainer)
        rowContainer.appendChild(saveBTN)
    }
}
loadScheduler()
