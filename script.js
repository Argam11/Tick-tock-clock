const piano = Synth.createInstrument("piano");
let interval;

const line1 = document.querySelector(".line-1");
const line2 = document.querySelector(".line-2");
const line3 = document.querySelector(".line-3");
const line4 = document.querySelector(".line-4");
const line5 = document.querySelector(".line-5");
const line6 = document.querySelector(".line-6");
const line7 = document.querySelector(".line-7");
const line8 = document.querySelector(".line-8");
const line9 = document.querySelector(".line-9");
const line10 = document.querySelector(".line-10");
const line11 = document.querySelector(".line-11");
const line12 = document.querySelector(".line-12");
const line13 = document.querySelector(".line-13");
const line14 = document.querySelector(".line-14");
const line15 = document.querySelector(".line-15");
const line16 = document.querySelector(".line-16");

const initialData = [
  { line: line1, deg: 0, speed: 0.1, audio: ["C", 3, 2] },
  { line: line2, deg: 0, speed: 0.2, audio: ["D", 3, 2] },
  { line: line3, deg: 0, speed: 0.3, audio: ["E", 3, 2] },
  { line: line4, deg: 0, speed: 0.4, audio: ["F", 3, 2] },
  { line: line5, deg: 0, speed: 0.5, audio: ["G", 3, 2] },
  { line: line6, deg: 0, speed: 0.6, audio: ["A", 3, 2] },
  { line: line7, deg: 0, speed: 0.7, audio: ["B", 3, 2] },
  { line: line8, deg: 0, speed: 0.8, audio: ["C", 4, 2] },
  { line: line9, deg: 0, speed: 0.9, audio: ["D", 4, 2] },
  { line: line10, deg: 0, speed: 1, audio: ["E", 4, 2] },
  { line: line11, deg: 0, speed: 1.1, audio: ["F", 4, 2] },
  { line: line12, deg: 0, speed: 1.2, audio: ["G", 4, 2] },
  { line: line13, deg: 0, speed: 1.3, audio: ["A", 4, 2] },
  { line: line14, deg: 0, speed: 1.4, audio: ["B", 4, 2] },
  { line: line15, deg: 0, speed: 1.5, audio: ["C", 5, 2] },
  { line: line16, deg: 0, speed: 1.6, audio: ["D", 5, 2] },
];

function func({ line, deg, speed, audio }) {
  return function () {
    line.style.transform = `rotate(${deg}deg) translateX(-50%)`;
    deg = Math.round((deg + speed) * 10) / 10;

    if (deg >= 360) {
      deg = 720 - deg;
      speed *= -1;
      piano.play(...audio);
      setAlphe(line)
    }
    if (deg <= 0) {
      deg = Math.abs(deg);
      speed *= -1;
      piano.play(...audio);
      setAlphe(line);
    }

    return deg;
  };
}

function runFunc() {
  return initialData.map((obj) => func(obj));
}

let funcList = runFunc();

function play(el) {
  if (interval) clearInterval(interval);

  if(el.innerText === "Play") {
    interval = setInterval(() => {
      funcList.forEach((f) => f());
    }, 5);
    el.innerText = "Stop";
  } else {
    el.innerText = "Play";
  }
}

function reset() {
  if (interval) clearInterval(interval);
  funcList = runFunc();
  funcList.forEach((f) => f());
}

function setAlphe(el) {
  const bgColor = getComputedStyle(el).backgroundColor;
  el.style.backgroundColor = bgColor.split(")").concat([", 0.3)"]).join("");
  setTimeout(() => {
    el.style.backgroundColor = bgColor;
  }, 100);
}
