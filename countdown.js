function updateCountdown() {
  const countdownDate = new Date("January 1, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // 计算天数、小时数、分钟数和秒数
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // 显示结果
  document.getElementById('countdown').innerHTML = days + "天 " + hours + "小时 "
  + minutes + "分钟 " + seconds + "秒 ";

  // 如果倒计时结束，则显示一条消息
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('countdown').innerHTML = "新年快乐！";
  }
}

// 每隔1秒更新一次倒计时
const x = setInterval(updateCountdown, 1000);

// 页面加载时立即更新一次
updateCountdown();

function triggerFireworks() {
  const fireworksContainer = document.getElementById('fireworks');
  const firework = document.createElement('div');
  firework.classList.add('firework');
  firework.style.left = `${Math.random() * 100}vw`;
  firework.style.top = `${Math.random() * 100}vh`;
  firework.style.backgroundColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.9)`;
  fireworksContainer.appendChild(firework);

  setTimeout(() => {
    firework.remove();
  }, 1000);
}

// 每隔一定时间（例如每100毫秒）触发一次烟花效果
setInterval(triggerFireworks, 100);