const container = document.querySelector('.container');

const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

const btn = document.getElementById('circle');
const slide = document.getElementById('theme');
let t;

let flag = 1;

// position();

function clock() {
    setInterval(() => {
        if(t != undefined){
            t.classList.remove('glow');

        }
        let date = new Date;

        let hours = date.getHours() % 12;
        // console.log(hours)

        let secondX = 6 * date.getSeconds();
        let minuteX = 6 * date.getMinutes();
        let hourX = 30 * hours;

        console.log(secondX);

        // console.log(date.getHours())

        
        secondHand.style.transform = `rotate(${secondX}deg)`;
        minuteHand.style.transform = `rotate(${minuteX}deg)`;
        hourHand.style.transform = `rotate(${hourX}deg)`;
        
        // if(secondX == 354) {
        //     let timeout = setTimeout(() => {
        //     },1000)
        //     secondHand.style.transition = `transform 0s`;
        // }else {
        //     secondHand.style.transition = `transform 1s linear`;
        // }
        var x = secondX / 30;

        if(x % 1 == 0) {
            if(x == 0 || x == 3 || x == 6 || x == 9) return;
            let dot = document.querySelector(`.time${x}`);
            t = document.querySelector(`.time${x}`);
            dot.classList.add('glow');
            t = dot;
        }

    }, 1000);
}

clock();

slide.addEventListener('click', () => {
    // btn.style.transform = `translateX(75%)`
    btn.classList.toggle('btn-toggle');
    if(flag == 1) {
        document.body.style.backgroundColor = 'white';
        hourHand.style.backgroundColor = '#424242';
        slide.style.backgroundColor = "#424242";
        btn.style.backgroundColor = "white";
        btn.style.color = "#424242";
        btn.innerText = 'white';
        flag = 0;

    }else {
        document.body.style.backgroundColor = '#121212';
        hourHand.style.backgroundColor = 'white';
        slide.style.backgroundColor = "white";
        btn.style.backgroundColor = "#424242";
        btn.style.color = "white";
        btn.innerText = 'black';
        flag = 1;
    }
})

// function position() {
//     dots = document.querySelectorAll('.dots');
//     console.log(dots);
//     var cal = 5;

//     for(let i = 0; i < dots.length; i++) {
//         var deg = cal * 6;
//         dots[i].style.top = `${deg}%`;
//         dots[i].style.transform = `translate(${deg}%)`
//     }
// }