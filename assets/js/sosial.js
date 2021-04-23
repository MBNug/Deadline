/* ================== Ganti Tanggal yang ada di variabel countDate sesuaikan dengan deadline yaaa ============== */
// Waktu yang di tuju
var countDate = new Date('May 20, 2021 23:59:00').getTime(); //TANGGAL TUJUAN

// Fungsi countdown
function deadline(){
    var now = new Date().getTime(); //SEKARANG
        gap = countDate - now; //Selisih

        var second = 1000;
        var minute = second * 60;
        var hour = minute * 60;
        var day = hour * 24;

        var d = Math.floor(gap / (day));
        var h = Math.floor((gap % (day)) / (hour));
        var m = Math.floor((gap % (hour)) / (minute));
        var s = Math.floor((gap % (minute)) / (second));

        document.getElementById('day').innerText = d;
        document.getElementById('hour').innerText = h;
        document.getElementById('minute').innerText = m;
        document.getElementById('second').innerText = s;

}

setInterval(function() {
    deadline();
}, 1000);


/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.countdown__container', {origin:'right', delay: 400});
sr.reveal('.countdown__container-subtitle', {origin:'left', delay: 500});
sr.reveal('.countdown__timer-time', {delay: 800});
