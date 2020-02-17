{
    const canvas = document.getElementById("code_anim");
    let ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;

    resize();

    window.addEventListener("resize", onResize);

    function onResize() {
        resize();
    }

    function resize() {
        canvas.width = document.body.clientWidth;
        canvas.height = document.body.clientWidth * 0.3;

        width = canvas.width;
        height = canvas.height;
    }

    window.addEventListener("scroll", onScroll);

    function onScroll() {
        const position = document.body.scrollTop;

        anim_code(position);
    }

    function anim_code(pos) {
        ctx.resetTransform();
        ctx.clearRect(0, 0, width, height);

        // Calculate pivot and rotation
        const stair_height = height / 8;

        const step = height / 8;
        const offset = height / 0.8;
        const i = pos < offset ? 1 : Math.ceil((pos - offset) / step);
        const pivot = { x: 0.5 + stair_height * i + width * 0.7, y: height - 0.5 - stair_height * i };
        const rot = ((pos - offset) / step) - Math.floor((pos - offset) / step);

        // Render code
        ctx.fillStyle = "#3d3d3d";
        ctx.font = '32px monospace';
        ctx.fillText("1. int step = " + (i - 1) + ";", 120, 150);
        ctx.fillText("2. int rotation = " + Math.ceil(270 * rot) + ";", 120, 200);

        ctx.fillText("3. ", 120, 250);
        if (rot <= 0.5 && rot >= 0)
        {
            ctx.fillText("   step++;", 120, 250);
        }

        // Render stairs
        ctx.strokeStyle = "#3d3d3d";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0.5, height - 0.5);

        for (let i = 0; i < 9; i++)
        {
            ctx.lineTo(stair_height * (i + 1) + width * 0.7 + 0.5, height - 0.5 - (stair_height * i));
            ctx.lineTo(stair_height * (i + 1) + width * 0.7 + 0.5, height - 0.5 - (stair_height * (i + 1)));
        }
        ctx.stroke();

        // Render square
        ctx.beginPath();
        ctx.moveTo(0, 0);

        ctx.translate(pivot.x, pivot.y);
        ctx.rotate(degreesToRadians(180 * rot));

        ctx.rect(0, 0, -stair_height, stair_height);

        ctx.lineWidth = 5;
        ctx.strokeStyle = "#efb501";
        ctx.stroke();
        ctx.fillStyle = "#efb501";
        ctx.fill();



    }

    function degreesToRadians(degrees) {
        return degrees * (Math.PI / 180);
    }

    function radiansToDegrees(radians) {
        return radians * (180 / Math.PI);
    }
};