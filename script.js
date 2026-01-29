const reasons = [
        { text: "У тебя очень хороший вкус в музике", img: "images/music.jpg" },
    { text: "O,КОТИК!!!", img: "images/cat.jpg" },
    { text: "Мне нравится, как ты смеешься", img: "images/smile.jpg" },
    { text: "Πισουνακι", img: "images/znak.jpg" },
    { text: "Ты очень красива с чокером на шее", img: "images/" },
    { text: "67, не будет", img: "images/znak.jpg" },
    { text: "Ты красиво одеваешься", img: "images/" },
    { text: "...", img: "images/leg.webp" },
    { text: "У тебя прекрасные глаза", img: "images/glaza.jpg" },
    { text: "ладно, будет", img: "images/68.webp" },
    { text: "У тебя чуток ржавые волосы, и это прекрасно", img: "images/" },
    { text: "", img: "images/" },
    { text: "", img: "images/" },
    { text: "", img: "images/" },
    { text: "", img: "images/" },
    { text: "", img: "images/" },
    { text: "", img: "images/" },
    { text: "", img: "images/" },
    { text: "", img: "images/" },
    { text: "", img: "images/" },
    { text: "", img: "images/" },
    { text: "", img: "images/" },
    { text: "", img: "images/" },
    { text: "", img: "images/" },
    { text: "", img: "images/" },



];

let currentIndex = 0;

// Перемешиваем причины при загрузке
reasons.sort(() => Math.random() - 0.5);

const btn = document.getElementById('next-btn');
const text = document.getElementById('reason-text');
const img = document.getElementById('reason-img');

btn.addEventListener('click', () => {
    if (currentIndex < reasons.length) {
        text.innerText = reasons[currentIndex].text;
        img.src = reasons[currentIndex].img;
        currentIndex++;
        btn.innerText = "Ещё одну?";
    } else {
        // Финальный экран
        text.innerHTML = "<strong>И самая главная причина:</strong><br>Ты мне очень нравишься! Давай сходим куда-нибудь вместе?";
        img.src = "https://images.unsplash.com"; // Картинка с сердечком
        btn.style.display = "none"; // Прячем кнопку в конце
    }
});


