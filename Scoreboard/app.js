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

const firstPlace = board.children[0].querySelector('.trophy');
  firstPlace.innerHTML = `
      <svg width="22" height="22" viewBox="0 0 24 24" stroke-width="1.5" stroke="gold" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" stroke-width="0" fill="gold" />
  </svg>
    `;
    
  const secondPlace = board.children[1].querySelector('.trophy');
  secondPlace.innerHTML = `
      <svg width="22" height="22" viewBox="0 0 24 24" stroke-width="1.5" stroke="gold" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" stroke-width="0" fill="#94A3B8" />
  </svg>
    `;
    
  const thirdPlace = board.children[2].querySelector('.trophy');
  thirdPlace.innerHTML = `
        <svg width="22" height="22" viewBox="0 0 24 24" stroke-width="1.5" stroke="gold" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" stroke-width="0" fill="#7D2D12" />
    </svg>
      `;

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
