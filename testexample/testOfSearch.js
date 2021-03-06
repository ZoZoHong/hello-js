
var USART1_RX_BUF = [
    0x55, 0x56, 0x54, 0x55, 0x00, 0x55, 0x56, 0x54, 0x55, 0x00, 0x77,
    0x55, 0x52, 0xAA, 0xBC, 0xDA, 0x0A, 0xAA, 0xBC, 0xDA, 0x0A, 0x00,
    0x55, 0x51, 0xAA, 0xBC, 0xDA, 0x0A, 0xAA, 0xBC, 0xDA, 0x0A, 0x00,
    0x55, 0x52, 0xAA, 0xBC, 0xDA, 0x0A, 0xAA, 0xBC, 0xDA, 0x0A, 0x00,
    0x55, 0x53, 0xAA, 0xBC, 0xDA, 0x0A, 0xAA, 0xBC, 0xDA, 0x0A, 0x00,
    0x55, 0x51, 0xAA, 0xBC, 0xDA, 0x0A, 0xAA, 0xBC, 0xDA, 0x0A, 0x00,
    0x55, 0x52, 0xAA, 0xBC, 0xDA, 0x0A, 0xAA, 0xBC, 0xDA, 0x0A, 0x00,
    0x55, 0x53, 0xAA, 0xBC, 0xDA, 0x0A, 0xAA, 0xBC, 0xDA, 0x0A, 0x00,
    0x55, 0x51, 0xAA, 0xBC, 0xDA, 0x0A, 0xAA, 0xBC, 0xDA, 0x0A, 0x00,
    0x55, 0x52, 0xAA, 0xBC, 0xDA, 0x0A, 0xAA, 0xBC, 0xDA, 0x0A, 0x00,
    0x55, 0x53, 0xAA, 0xBC, 0xDA, 0x0A, 0xAA, 0xBC, 0xDA, 0x0A, 0x00,
    0x55, 0x51, 0xAA, 0xBC, 0xDA, 0x0A, 0xAA, 0xBC, 0xDA, 0x0A, 0x00,
    0x55, 0x52, 0xAA, 0xBC, 0xDA, 0x0A, 0xAA, 0xBC, 0xDA, 0x0A, 0x00,
    0x55, 0x53, 0xAA, 0xBC, 0xDA, 0x0A, 0xAA, 0xBC, 0xDA, 0x0A, 0x00,
    0x55, 0x51, 0xAA, 0xBC, 0xDA, 0x0A, 0xAA, 0xBC, 0xDA, 0x0A, 0x00,
    0x55, 0x52, 0xAA, 0xBC, 0xDA, 0x0A, 0xAA, 0xBC, 0xDA, 0x0A, 0x00,
    0x55, 0x53, 0xAA, 0xBC, 0xDA, 0x0A, 0xAA, 0xBC, 0xDA, 0x0A, 0x00,

]
let i = 0;

while (USART1_RX_BUF[i] !== 0x55 && USART1_RX_BUF[i + 1] !== 0x51) {
    i++;
}
let temp = i;
i = 0;
let angle = new Array(3).fill(0);
angle[0] = ((USART1_RX_BUF[temp + 25] << 8 | USART1_RX_BUF[temp + 24])) / 32768.0 * 180;   //X轴滚转角（x 轴）
angle[1] = ((USART1_RX_BUF[temp + 27] << 8 | USART1_RX_BUF[temp + 26])) / 32768.0 * 180;   //Y轴俯仰角（y 轴）
angle[2] = ((USART1_RX_BUF[temp + 29] << 8 | USART1_RX_BUF[temp + 28])) / 32768.0 * 180;   //Z轴偏航角（z 轴）  

console.log(angle);


console.log(1 !== 0 && 1 !== 1);
console.log(1 !== 0 || 1 !== 1);
console.log(0x55 !== 0x55 && 0x52 !== 0x51);

