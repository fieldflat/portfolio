/* canvas */

const canvas = document.querySelector('canvas'),
  context = canvas.getContext('2d');
let stageW = 0,
  stageH = 0;

noise.seed(Math.random());


//逕ｻ髱｢繧ｵ繧､繧ｺ螟画峩
//蛻晄悄蛹�
onResize();

tick();

//繝ｪ繧ｵ繧､繧ｺ繧､繝吶Φ繝育匱逕滓凾縺ｫ螳溯｡�
window.addEventListener('resize', onResize);

function onResize() {
  //繧ｵ繧､繧ｺ蜿門ｾ�
  stageW = innerWidth * devicePixelRatio;
  stageH = (innerHeight - (document.querySelector('header').offsetHeight + document.querySelector('footer').offsetHeight)) * devicePixelRatio;
  //繧ｵ繧､繧ｺ隱ｿ謨ｴ
  canvas.width = stageW;
  canvas.height = stageH;
}

function tick() {
  requestAnimationFrame(tick);
  const time = Date.now() / 4000;
  drawWave(time);
  //  drawParticle(time);
}

function drawWave(time) {
  context.clearRect(0, 0, stageW, stageH); //蛻晄悄蛹�
  context.lineWidth = 1;  //邱壼ｹ�

  const segmentNum = 100, //蛻�牡謨ｰ
    lineNum = 150, //邱壹�謨ｰ
    amplitude = stageH / 2; //謖ｯ蟷�

  for (let j = 0; j < lineNum; j++) {
    context.beginPath();
    const h = Math.round((j / lineNum) * 45) + 180, //濶ｲ逶ｸ
      s = 100,  //蠖ｩ蠎ｦ
      l = Math.round((j / lineNum) * 85);  //譏主ｺｦ
    context.strokeStyle = `hsl(${h},${s}%,${l}%)`;  //濶ｲ

    for (let i = 0; i < segmentNum; i++) {
      const x = i / (segmentNum - 1) * stageW,
        px = i / (50 + j);  //讓ｪ蟷��蜈･蜉帛､
      py = j / 50 + time;  //譎る俣縺ｮ蜈･蜉帛､
      //y蠎ｧ讓�
      y = amplitude * noise.perlin2(px, py) + stageH / 2;

      if (i === 0) {
        context.moveTo(x, y);
      } else {
        context.lineTo(x, y);
      }
    }
    context.stroke();
  }
}

/* 繝代�繝�ぅ繧ｯ繝ｫ */
/*
let MAX_LIFE = 80;
const particles = [];
function emit(){
  const particle = {
    x: stageW * 0.5,
    y: (stageH*4)/5,
    vy: 0,
    life: MAX_LIFE
  };
  particles.push(particle);
}
setInterval(emit,1500);
function update(){
  for(let i=0;i<particles.length;i++){
    const particle = particles[i];
    particle.vy -= 1;
    particle.vy *= 0.92;
    particle.y += particle.vy;

    particle.life -= 1;
    if(particle.life <= 0){
      particle.splice(i, 1);
      i -= 1;
    }
  }
}

function drawParticle(){
  particles.forEach(particle => {
    context.beginPath();
    context.fillStyle = `white`;
    context.arc(particle.x, particle.y,100,0,Math.PI*2,false);
    context.fill();
    context.closePath;
  });
}*/