<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="index.html">
  <title>Hoa rơi</title>
  <style>
    html, body {
      margin: 0;
      height: 100%;
      background: #fce4ec;
      overflow: hidden;
    }
    .petal {
      position: absolute;
      width: 20px;
      height: 20px;
      background: radial-gradient(pink, deeppink);
      border-radius: 50% 50% 50% 50%;
      opacity: 0.8;
    }
  </style>
</head>
<body>

<script>
function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.style.left = Math.random() * window.innerWidth + 'px';
  petal.style.top = '-20px';
  document.body.appendChild(petal);

  let angle = Math.random() * 2 - 1;
  let speedY = 1 + Math.random() * 2;
  let x = parseFloat(petal.style.left);
  let y = -20;

  const fall = setInterval(() => {
    angle += 0.01;
    x += Math.sin(angle);
    y += speedY;
    petal.style.left = x + 'px';
    petal.style.top = y + 'px';

    if (y > window.innerHeight) {
      clearInterval(fall);
      petal.remove();
    }
  }, 20);
}

setInterval(createPetal, 300); // 1 cánh hoa mỗi 300ms
</script>

</body>
</html>
