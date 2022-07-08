const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deasline')
const items = document.querySelectorAll('.deadline-format')


let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()

const futuredate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0)

const year = futuredate.getFullYear()
const hours = futuredate.getHours()
const minutes = futuredate.getMinutes()

let month = futuredate.getMonth()
month = month[month]
const weekday = weekdays[futuredate.getDay()]
const date = futuredate.getTime()
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`

const futuretime = futuredate.getTime()

function getTheRemainingTime() {
    
    const  today = new Date().getTime()

    const t = futuretime - today





    const oneDay = 24*60*60*1000
    const oneHour = 60*60*1000
    const oneMinute = 60*1000


    let days = t / oneDay
    days = Math.floor(days)
    let hours = Math.floor((t % oneDay) / oneHour)
    let minutes = Math.floor ((t % oneHour) / oneMinute)
    let seconds = Math.floor((t % oneMinute) / 1000)


    const values = [days, hours, minutes, seconds]
    function format(item) {
        
        if(item < 10){

            return (item = `0${item}`)
        }

        return item
    }

    items.forEach(function(item, index){
        item.innerHTML = format(values[index])
    })

    if (t < 0) {
        
        clearInterval(countdown)
        deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired </h4>`
    }
}

let countdown = setInterval(getTheRemainingTime, 1000)

getTheRemainingTime()