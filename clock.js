setInterval(() => {
    const d = new Date();
    const htime = d.getHours();
    const mtime = d.getMinutes();
    const ntime = d.getSeconds();
    const hrotation = 30 * htime + mtime / 2;
    const mrotation = 6 * mtime;
    const nrotation = 6 * ntime;

    const hours = document.getElementById('hour');
    const minutes = document.getElementById('minute');
    const seconds = document.getElementById('second');

    hours.style.transform = `rotate(${hrotation}deg)`;
    minutes.style.transform = `rotate(${mrotation}deg)`;
    seconds.style.transform = `rotate(${nrotation}deg)`;
}, 1000);
