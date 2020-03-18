var header__content;
var canvas;
var ctx;
var width;
var height;

document.addEventListener("DOMContentLoaded", () => {
    header__content = document.getElementById("header__content");

    canvas = document.getElementById("animation__code");
    ctx = canvas.getContext("2d");
    width = 0;
    height = 0;

    resize();

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll);
});

function onResize() {
    resize();
}

function resize() {
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientWidth * 0.3;

    width = canvas.width;
    height = canvas.height;
}

function onScroll() {
    let position = 0;

    if (document.documentElement && document.documentElement.scrollTop) {
        position = document.documentElement.scrollTop;
    } else if (document.body) {
        position = document.body.scrollTop;
    }

    //header__content.setAttribute("style", "opacity: " + (100 - position * 0.4) + "%");

    anim_code(position);
}

function anim_code(pos) {
    ctx.resetTransform();
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.rect(-0.5, -0.5, canvas.width + 1, canvas.height + 1);
    ctx.fillStyle = "rgba(255, 255, 255, 0.0)";;
    ctx.fill();

    // Calculate pivot and rotation
    const stair_height = height / 8;

    const step = height / 8;
    const offset = window.innerHeight;
    const i = pos < offset ? 0 : Math.ceil((pos - offset) / step);
    const pivot = { x: 0.5 + stair_height * i + width * 0.7, y: height - 0.5 - stair_height * i };
    const rot = i == 0 ? 0 : ((pos - offset) / step) - Math.floor((pos - offset) / step);

    // Render code
    ctx.fillStyle = "#3d3d3d";
    ctx.font = Math.ceil(height * 0.1) + 'px monospace';
    ctx.fillText("1. int step = " + (i - 1) + ";", width * 0.1, height * 0.5);
    ctx.fillText("2. int rotation = " + Math.ceil(270 * rot) + ";", width * 0.1, height * 0.6);

    // Render stairs
    ctx.strokeStyle = "#3d3d3d";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0.5, height + 15);

    for (let i = 0; i < 9; i++) {
        ctx.lineTo(stair_height * (i + 1) + width * 0.7 + 0.5, height - 0.5 - (stair_height * i));
        ctx.lineTo(stair_height * (i + 1) + width * 0.7 + 0.5, height - 0.5 - (stair_height * (i + 1)));
    }

    ctx.lineTo(canvas.width + 0.5, canvas.height + 0.5);
    ctx.lineTo(-0.5, height + 0.5);
    ctx.fillStyle = "white";
    ctx.fill();

    // Render square
    ctx.beginPath();
    ctx.moveTo(0, 0);

    ctx.translate(pivot.x, pivot.y);
    ctx.rotate(degreesToRadians(180 * rot));

    ctx.rect(0, 0, -stair_height, stair_height);

    ctx.lineWidth = 5;
    //ctx.strokeStyle = "#efb501";
    //ctx.stroke();
    //ctx.fillStyle = "#efb501";
    ctx.fillStyle = "white";
    ctx.fill();



}

function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
}