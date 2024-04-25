const password = document.getElementById("password");
const showPassword = document.getElementById("show_password");
const toggleBall = document.getElementById("toggle-ball");

showPassword.addEventListener("click", () => {
    if (password.type === "text") {
        password.type = "password";
    } else {
        password.type = "text";
    }
});

toggleBall.addEventListener("click", () => {
    if (toggleBall.classList.contains("left-1")) {
        toggleBall.classList.add("left-[55%]");
        toggleBall.classList.remove("left-1");
    } else {
        toggleBall.classList.remove("left-[55%]");
        toggleBall.classList.add("left-1");
    }
});
