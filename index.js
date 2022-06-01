const canvas = document.querySelector("canvas");

//2D로 설정하기
const c = canvas.getContext("2d");

//canvas 넓이 설정
canvas.width = 1024;
canvas.height = 576;

// canvas 채울 색
c.fillStyle = "black";
// canvas 시작 위치와 크기 지정.
c.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 0.2;

class Sprite {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.height = 150;
  }

  draw() {
    //canvas에서 색 채우기.
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, 50, this.height);
  }

  update() {
    this.draw();
    this.position.y += this.velocity.y;

    if (this.position.y + this.height + this.velocity.y >= canvas.height) {
      this.velocity.y = 0;
    } else this.velocity.y += gravity;
  }
}
//위 constructor의 인자인 position에 {x, y}가 들어간다.
const player = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 10,
  },
});

const enemy = new Sprite({
  position: {
    x: 400,
    y: 100,
  },
  velocity: {
    x: 0,
    y: 0,
  },
});

console.log(player);

// 정지를 할 때까지 애니메이션을 계속 콜백 형식으로 불러오는 상황(무한루프)
// 배경을 전부 검은색으로 부르면서 player와 enemy의 update()를 사용하여 붉은색 직사각형이 지속적으로 내려오게 하는 방법
function animate() {
  window.requestAnimationFrame(animate);
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
  player.update();
  enemy.update();
}

animate();

// 28분
