/* data */
const data = [
  {
    name: 'Chris',
    likes: '4189'
  },
  {
    name: 'Peter',
    likes: '4136'
  },
  {
    name: 'Clement',
    likes: '2644'
  },
  {
    name: 'Ansarullah',
    likes: '2366'
  },
  {
    name: 'CleaverMissFox',
    likes: '2238'
  },
  {
    name: 'Marcinmalecki',
    likes: '2213'
  },
  {
    name: 'Motlakz',
    likes: '1651'
  },
  {
    name: 'Kader',
    likes: '1206'
  },
  {
    name: 'Blackwolf',
    likes: '1202'
  },
];

const main = document.querySelector('main');
const board = document.getElementById('board');

data.forEach((item, index) => {
  const boardItem = document.createElement('div');
  let delay = 150;
  boardItem.classList.add('board-item');
  boardItem.style.transitionDelay = `${delay + index * delay}ms`;
  boardItem.innerHTML = `
    <p class="rank">${index + 1}</p>
    <p class="name">${item.name}</p>
    <p class="likes">${item.likes}</p>
    <p class="trophy"></p>
  `;
  board.appendChild(boardItem);
});

const boardItems = document.querySelectorAll('.board-item');

boardItems.forEach(item => {
  setTimeout(() => {
    item.style.transform = 'translateX(0)';
    
    
    
  }, 1200);
});

setTimeout(() => {
  main.classList.remove('hidden');
    board.children[0].style.transform = 'scale(1.1)';
    board.children[0].setAttribute('data-top-rank', 'true');
    board.style.setProperty('--__opacity', 1);
    board.style.setProperty('--__shadow', '0 6px 6px 2px rgba(200, 200, 200, 1)');
    
    
}, 2600);
