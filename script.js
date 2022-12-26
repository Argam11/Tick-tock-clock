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

const obj1 = { line: line1, deg: 0, speed: 0.1 };
const obj2 = { line: line2, deg: 0, speed: 0.2 };
const obj3 = { line: line3, deg: 0, speed: 0.3 };
const obj4 = { line: line4, deg: 0, speed: 0.4 };
const obj5 = { line: line5, deg: 0, speed: 0.5 };
const obj6 = { line: line6, deg: 0, speed: 0.6 };
const obj7 = { line: line7, deg: 0, speed: 0.7 };
const obj8 = { line: line8, deg: 0, speed: 0.8 };
const obj9 = { line: line9, deg: 0, speed: 0.9 };
const obj10 = { line: line10, deg: 0, speed: 1 };
const obj11 = { line: line11, deg: 0, speed: 1.1 };
const obj12 = { line: line12, deg: 0, speed: 1.2 };
const obj13 = { line: line13, deg: 0, speed: 1.3 };
const obj14 = { line: line14, deg: 0, speed: 1.4 };
const obj15 = { line: line15, deg: 0, speed: 1.5 };
const obj16 = { line: line16, deg: 0, speed: 1.6 };

function func({ line, deg, speed }) {
  return function () {
    deg = Math.round((deg + speed) * 10) / 10;

    line.style.transform = `rotate(${deg}deg) translateX(-50%)`;

    const currentDegree = Number(line.style.transform.match(/([0-9]*[.])?[0-9]+/)[0]);
    if (deg >= 360) {
      deg = 720 - deg;
      speed *= -1;
    }
    if (deg <= 0) {
      deg = Math.abs(deg);
      speed *= -1;
    }
  };
}

const f1 = func(obj1);
const f2 = func(obj2);
const f3 = func(obj3);
const f4 = func(obj4);
const f5 = func(obj5);
const f6 = func(obj6);
const f7 = func(obj7);
const f8 = func(obj8);
const f9 = func(obj9);
const f10 = func(obj10);
const f11 = func(obj11);
const f12 = func(obj12);
const f13 = func(obj13);
const f14 = func(obj14);
const f15 = func(obj15);
const f16 = func(obj16);

setInterval(() => {
  f1();
  f2();
  f3();
  f4();
  f5();
  f6();
  f7();
  f8();
  f9();
  f10();
  f11();
  f12();
  f13();
  f14();
  f15();
  f16();
}, 5);
