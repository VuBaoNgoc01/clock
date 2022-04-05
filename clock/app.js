function clock() {
    const hours = new Date().getHours()
    const minutes = new Date().getMinutes()
    const seconds = new Date().getSeconds()

    var html_hours = document.getElementById('hours')
    var html_minutes = document.getElementById('minutes')
    var html_seconds = document.getElementById('seconds')

    html_hours.textContent = hours + ' giờ'
    html_minutes.textContent = minutes + ' phút'
    html_seconds.textContent = seconds + ' giây'
}

setInterval(clock, 1000)