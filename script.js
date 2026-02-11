const reasons = [
    { text: "У тебя очень хороший вкус в музыке", img: "images/music.jpg" },
    { text: "O, КОТИК!!!", img: "images/cat.jpg" },
    { text: "Мне нравится, как ты смеешься", img: "images/smile.jpg" },
    { text: "Πισουνακι", img: "images/znak.jpg" },
    { text: "Ты очень красива с чокером на шее", img: "images/choker.webp" },
    { text: "67, не будет", img: "images/znak.jpg" },
    { text: "Ты красиво одеваешься", img: "images/odeshda.jpg" },
    { text: "...", img: "images/leg.webp" },
    { text: "У тебя прекрасные глаза", img: "images/glaza.jpg" },
    { text: "ладно, будет", img: "images/68.webp" },
    { text: "У тебя чуток ржавые волосы c фиолетовыми прядями, и это прекрасно", img: "images/volosi.jpg" },
    { text: "Мне нравится проводить с тобой время", img: "images/time.jpg" },
    { text: "Sigmo", img: "images/psix.jpg" },
    { text: "Спасибо за поддержку в любых ситуациях", img: "images/sup.jpg" },
    { text: "Ты вдохновляешь меня становиться лучше", img: "images/star.jpg" },
    { text: "Ты всегда знаешь, что сказать в нужный момент", img: "images/oorr.jpg" },
    { text: "Ты такая заботливая", img: "images/cering.jpg" },
    { text: "С тобой можно обсудить что угодно", img: "images/plesen.jpg" },
    { text: "Ты красиво рисуешь", img: "images/kartina.jpg" },
    { text: "У тебя присутствоет хорошое чутвство юмора", img: "images/jokes.jpg" },
];

let currentIndex = 0;
reasons.sort(() => Math.random() - 0.5);

const btn = document.getElementById('next-btn');
const textElem = document.getElementById('reason-text');
const imgElem = document.getElementById('reason-img');
const controls = document.getElementById('controls');

btn.addEventListener('click', () => {
    if (currentIndex < reasons.length) {
        textElem.innerText = reasons[currentIndex].text;
        imgElem.src = reasons[currentIndex].img;
        currentIndex++;
        btn.innerText = "Ещё одну?";
    } else {
        textElem.innerHTML = "<strong>И самая главная причина:</strong>";
        imgElem.src = "images/priznanie.jpg";
        btn.style.display = "none";
        controls.innerHTML = '';

        const yesBtn = document.createElement('button');
        yesBtn.innerText = "Да ❤️";
        yesBtn.style.alignItems = "center";


        const noBtn = document.createElement('button');
        noBtn.innerText = "Нет 💔";
        noBtn.style.margin = "5px";

        controls.appendChild(yesBtn);
        controls.appendChild(noBtn);

        yesBtn.addEventListener('click', () => {
            window.location.href = "https://t.me/+F45eskEwUWUxZThi";
        });

        noBtn.addEventListener('click', () => {
            const music = document.getElementById('sad-music');
            if(music) {
                music.volume = 0.2;
                music.play().catch(e => console.log("Музыка заблокирована браузером"));
            }
            alert("Жаль, надеюсь что тебе понравилось...");
        });
    }
});

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    const kinds = ['❤️', '💖', '💗', '💓', '🌸'];
    heart.innerText = kinds[Math.floor(Math.random() * kinds.length)];
    heart.style.left = Math.random() * 95 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}

setInterval(createHeart, 400);




