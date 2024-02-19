console.clear();

const { gsap, CircleType } = window;

const cursorOuter = document.querySelector(".cursor--large");
const cursorInner = document.querySelector(".cursor--small");
const cursorTextContainerEl = document.querySelector(".cursor--text");
const cursorTextEl = cursorTextContainerEl.querySelector(".text");

const hoverItems = document.querySelectorAll(".cursor-hover-item");
const hoverEffectDuration = 0.3;
let isHovered = false;
let initialCursorHeight;

const cursorRotationDuration = 8;

let circleType = new CircleType(cursorTextEl);
circleType.radius(50);

setTimeout(() => {
	initialCursorHeight = circleType.container.style.getPropertyValue("height");
	console.log(initialCursorHeight);
}, 50);

hoverItems.forEach((item) => {
	item.addEventListener("pointerenter", handlePointerEnter);
	item.addEventListener("pointerleave", handlePointerLeave);
});

let mouse = {
	x: -100,
	y: -100
};

document.body.addEventListener("pointermove", updateCursorPosition);

function updateCursorPosition(e) {
	mouse.x = e.pageX;
	mouse.y = e.pageY;
}

function updateCursor() {
	gsap.set([cursorInner, cursorTextContainerEl], {
		x: mouse.x,
		y: mouse.y
	});

	gsap.to(cursorOuter, {
		duration: 0.15,
		x: mouse.x,
		y: mouse.y
	});

	if (!isHovered) {
		gsap.to(cursorTextContainerEl, hoverEffectDuration * 0.5, {
			opacity: 0
		});
		gsap.set(cursorTextContainerEl, {
			rotate: 0
		});
	}

	requestAnimationFrame(updateCursor);
}

updateCursor();

function handlePointerEnter(e) {
	isHovered = true;

	const target = e.currentTarget;
	updateCursorText(target);

	gsap.set([cursorTextContainerEl, cursorTextEl], {
		height: initialCursorHeight,
		width: initialCursorHeight
	});

	gsap.fromTo(
		cursorTextContainerEl,
		{
			rotate: 0
		},
		{
			duration: cursorRotationDuration,
			rotate: 360,
			ease: "none",
			repeat: -1
		}
	);

	gsap.to(cursorInner, hoverEffectDuration, {
		scale: 2
	});

	gsap.fromTo(
		cursorTextContainerEl,
		hoverEffectDuration,
		{
			scale: 1.2,
			opacity: 0
		},
		{
			delay: hoverEffectDuration * 0.75,
			scale: 1,
			opacity: 1
		}
	);
	gsap.to(cursorOuter, hoverEffectDuration, {
		scale: 1.2,
		opacity: 0
	});
}

function handlePointerLeave() {
	isHovered = false;
	gsap.to([cursorInner, cursorOuter], hoverEffectDuration, {
		scale: 1,
		opacity: 1
	});
}

function updateCursorText(textEl) {
	const cursorTextRepeatTimes = textEl.getAttribute("data-cursor-text-repeat");
	const cursorText = returnMultipleString(
		textEl.getAttribute("data-cursor-text"),
		cursorTextRepeatTimes
	);

	circleType.destroy();

	cursorTextEl.innerHTML = cursorText;
	circleType = new CircleType(cursorTextEl);
}

function returnMultipleString(string, count) {
	let s = "";
	for (let i = 0; i < count; i++) {
		s += ` ${string} `;
	}
	return s;
}

var i = 0;
var j = 0;
var k = 0;
var l = 0;
var m = 0;
var n = 0;
var vanBan1 = 'c++ java python RestfulAPI NodeJS Git AngularJs MySQL RDBMS Django Typescript';
var vanBan2 = 'selenium Jenkins Cypress OpenTest Jmeter PyTorch cucumber';
var vanBan3 = 'html css php javaScript';
var vanBan4 = 'Audio books website in India named AUDBUD in 2019 to download free audio books';
var vanBan5 = 'With computer vision, python, and deep learning 3D hand tracking to create any surface touchscreen 2020';
var vanBan6 = 'Emailing system for a company to send custom emails to customers all at once 2023';
var tocDo = 50;

function WriterOne() {
	if (i < vanBan1.length) {
     	document.getElementById("pelo_fakro").innerHTML += vanBan1.charAt(i);
     	i++;
     	setTimeout(WriterOne, tocDo );
   }
}
function WriterTwo() {
	if (j < vanBan2.length) {
     	document.getElementById("bijo_fakro").innerHTML += vanBan2.charAt(j);
     	j++;
     	setTimeout(WriterTwo, tocDo );
   }
}
function WriterThree() {
	if (k < vanBan3.length) {
     	document.getElementById("trijo_fakro").innerHTML += vanBan3.charAt(k);
     	k++;
     	setTimeout(WriterThree, tocDo );
   }
}
function WriterFour() {
	if (l < vanBan4.length) {
     	document.getElementById("chotho_fakro").innerHTML += vanBan4.charAt(l);
     	l++;
     	setTimeout(WriterFour, tocDo );
   }
}
function WriterFive() {
	if (m < vanBan5.length) {
     	document.getElementById("pachmo_fakro").innerHTML += vanBan5.charAt(m);
     	m++;
     	setTimeout(WriterFive, tocDo );
   }
}
function WriterSix() {
	if (n < vanBan6.length) {
     	document.getElementById("chhatho_fakro").innerHTML += vanBan6.charAt(n);
     	n++;
     	setTimeout(WriterSix, tocDo );
   }
}