const addButtons = document.querySelectorAll(".add-btn");
const msg = document.querySelector(".msg");
addButtons.forEach(btn => {
    const name = btn.previousElementSibling.textContent;
    btn.addEventListener('click', () => {
        msg.querySelector('span').innerText = name;
        msg.classList.add('top-[25%]');

        setTimeout(() => {
            msg.classList.remove('top-[25%]');
        }, 1300);
    });
});
