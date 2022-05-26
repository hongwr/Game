const canvas = document.querySelector("canvas");

//2D로 설정하기
const c = canvas.getContext("2d");

//canvas 넓이 설정
canvas.width = 1024;
canvas.height = 576;

c.fillStyle = "black";
c.fillRect(0, 0, canvas.width, canvas.height);
