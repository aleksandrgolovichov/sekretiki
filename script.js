const reasons = [
    { text: "У тебя очень хороший вкус в музыке", img: "images/music.jpg" },
    { text: "O, КОТИК!!!", img: "images/cat.jpg" },
    { text: "Мне нравится, как ты смеешься", img: "images/smile.jpg" },
    { text: "Πισουνακι", img: "images/znak.jpg" },
    { text: "Ты очень красива с чокером на шее", img: "images/choker.jpg" },
    { text: "67, не будет", img: "images/znak.jpg" },
    { text: "Ты красиво одеваешься", img: "images/odeshda.jpg" },
    { text: "...", img: "images/leg.webp" },
    { text: "У тебя прекрасные глаза", img: "images/glaza.jpg" },
    { text: "ладно, будет", img: "images/68.webp" },
    { text: "У тебя чуток ржавые волосы, и это прекрасно", img: "images/volosi.jpg" },
    { text: "Мне нравится проводить с тобой время", img: "images/time.jpg" },
    { text: "Sigmo", img: "images/psix.jpg" },
    { text: "Спасибо за поддержку в любых ситуациях", img: "images/sup.jpg" },
    { text: "Ты вдохновляешь меня становиться лучше", img: "images/inspiration.jpg" },
    { text: "Ты всегда знаешь, что сказать в нужный момент", img: "images/words.jpg" },
    { text: "Ты такая заботливая", img: "images/cering.jpg" },
    { text: "С тобой можно обсудить что угодно", img: "images/plesen.jpg" },
];

let currentIndex = 0;
reasons.sort(() => Math.random() - 0.5);

const btn = document.getElementById('next-btn');
const text = document.getElementById('reason-text');
const img = document.getElementById('reason-img');
const controls = document.getElementById('controls');

btn.addEventListener('click', () => {
    if (currentIndex < reasons.length) {
        text.innerText = reasons[currentIndex].text;
        img.src = reasons[currentIndex].img;
        currentIndex++;
        btn.innerText = "Ещё одну?";
    } else {
        // Финальный этап
        text.innerHTML = "<strong>И самая главная причина:</strong><br>Ты мне очень нравишься! Это взаимно?";
        img.src = "images/final.jpg"; // Поставь тут финальную картинку
        btn.style.display = "none";

        // кнопки Да / Нет
        const yesBtn = document.createElement('button');
        yesBtn.innerText = "Да ❤️";
        const noBtn = document.createElement('button');
        noBtn.innerText = "Нет 💔";

        controls.appendChild(yesBtn);
        controls.appendChild(noBtn);

        // Клик на ДА
        yesBtn.addEventListener('click', () => {
            window.location.href = "https://t.me"; // ссылка
        });

        // Клик на НЕТ
        noBtn.addEventListener('click', () => {
            const music = document.getElementById('sad-music');
            music.play(music/volume = 0.2);
            alert("Жаль, надеюсь что тебе понравилось, но я всё равно рад , что ты посмотрела до конца...");
        });
    }
});

// Анимация сердечек
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    const kinds = ['❤️', '💖', '💗', '💓', '🌸'];
    heart.innerText = kinds[Math.floor(Math.random() * kinds.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    heart.style.opacity = Math.random();
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);




