/** @type {HTMLCanvasElement} */
let c = document.getElementById("render-target");
const ctx = c.getContext("2d");

/** @type {string[]} */
const palette = [
    ""
];

/** @typedef {{ x: number; y: number; w: number; h: number; colorId: number; }} DrawCall */

/**
 * @param {DrawCall} data
 */
const applyRectangle = (data) => {
    ctx.fillStyle = palette[data.colorId];
    ctx.fillRect(data.x * 4, data.y * 4, data.w * 4, data.h * 4);
};

/** @type {DrawCall[]} */
const drawBuffer = [];

const endDrawing = () => {
    for (drawCall of drawBuffer) {
        applyRectangle(drawCall);
    }
};

/**
 * Buffers pixel for drawing in bulk later
 * @param {number} x
 * @param {number} y
 * @param {number} colorId
 */
const drawPixel = (x, y, colorId) => {
    drawBuffer.push({ x, y, w: 1, h: 1, colorId });
};

drawPixel(0, 5, 10, 1, "black");
