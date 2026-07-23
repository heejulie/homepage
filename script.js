const sky = document.getElementById('sky-mascot');
const speech = document.getElementById('speech');
const skyMoods = [
  { icon: '☀️', text: '맑은 날엔 하늘이 제일 예뻐' },
  { icon: '🌤️', text: '구름 사이로 햇살이 좋다' },
  { icon: '⛅', text: '뭉게구름 모양 보는 거 좋아해' },
  { icon: '🌥️', text: '흐린 하늘도 나름 운치 있지' },
  { icon: '🌆', text: '노을 지는 하늘이 제일 좋아' },
  { icon: '🌌', text: '별 보러 나가고 싶다 ✨' },
  { icon: '🌙', text: '오늘 밤하늘엔 달이 떴네' }
];
let moodIndex = 0;
let hideTimer;

sky.addEventListener('click', () => {
  moodIndex = (moodIndex + 1) % skyMoods.length;
  const mood = skyMoods[moodIndex];
  sky.textContent = mood.icon;
  speech.textContent = mood.text;
  speech.classList.add('show');
  clearTimeout(hideTimer);
  hideTimer = setTimeout(() => speech.classList.remove('show'), 1800);
});

