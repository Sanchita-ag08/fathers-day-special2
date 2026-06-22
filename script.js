
// ==============================
// Father's Day Messages
// ==============================

const messages = [

`❤️
प्रिय पापा,

आपका प्यार, आपका साथ और आपकी सीख
हमारी ज़िंदगी की सबसे बड़ी ताकत है।

Happy Father's Day ❤️
`,

`💙
पापा,

आप हमारे पहले हीरो,
हमारे सबसे अच्छे दोस्त
और हमारी सबसे बड़ी प्रेरणा हैं।

Love You Papa 💙
`,

`💕
Thank You Papa!

Har mushkil mein
aap hamesha hamare saath khade rahe.

Happy Father's Day ❤️
`,

`🌹
Papa,

Aapki muskaan hi
hamari sabse badi khushi hai.

Love You Forever ❤️
`,

`🥰
Dear Papa,

Thank you for everything.

You are simply the BEST.

Happy Father's Day ❤️
`

];

// ==============================
// Random Photos
// ==============================

const photos = [
"WhatsApp Image 2026-06-21 at 12.01.19.jpeg",
"WhatsApp Image 2026-06-21 at 12.02.39.jpeg",
"WhatsApp Image 2026-06-21 at 12.04.22.jpeg",
"WhatsApp Image 2026-06-21 at 12.05.34.jpeg",
"WhatsApp Image 2026-06-21 at 12.05.54.jpeg",
"WhatsApp Image 2026-06-21 at 12.06.46.jpeg",
"WhatsApp Image 2026-06-21 at 16.54.17.jpeg",
"WhatsApp Image 2026-06-21 at 16.54.18.jpeg",
"WhatsApp Image 2026-06-21 at 17.17.14.jpeg",
"WhatsApp Image 2026-06-21 at 17.09.28.jpeg",
"WhatsApp Image 2026-06-21 at 17.03.53.jpeg",
"WhatsApp Image 2026-06-21 at 17.01.51 (1).jpeg",
"WhatsApp Image 2026-06-21 at 16.54.19.jpeg"
];
photos.forEach(src => {
    const img = new Image();
    img.src = src;
});
// ==============================
// Button Click
// ==============================
let musicStarted = false;

function showWish() {

    // Start music only once
    if (!musicStarted) {

        const music = document.getElementById("bgMusic");

        music.play().catch(err => {
            console.log("Playback prevented:", err);
        });

        musicStarted = true;
    }

    // Show overlay
    document.getElementById("overlay").style.display = "block";

    // Show card
    const card = document.getElementById("messageCard");
    card.style.display = "block";

    // Small delay for animation
    setTimeout(() => {
        card.classList.add("show");
    }, 10);

    // Display first random message
    nextMessage();
}
let currentMessage = -1;

function nextMessage() {

    let random;

    do {
        random = Math.floor(Math.random() * messages.length);
    } while (random === currentMessage);

    currentMessage = random;

    document.getElementById("messageText").innerText =
        messages[random];

    // Change random photo
    const randomPhoto =
        Math.floor(Math.random() * photos.length);

    document.getElementById("photo").src =
        photos[randomPhoto];

    // Heart animation
    heartRain();
}
function closeCard() {

    const card = document.getElementById("messageCard");

    card.classList.remove("show");

    setTimeout(() => {

        card.style.display = "none";

        document.getElementById("overlay").style.display = "none";

    }, 300);

}
// ==============================
// Heart Confetti
// ==============================

function heartRain(){

const hearts=[
"❤️",
"💖",
"🌹",
"💕",
"💙",
"💜",
"💛"
];

for(let i=0;i<120;i++){

setTimeout(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=
hearts[Math.floor(Math.random()*hearts.length)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=
(15+Math.random()*30)+"px";

heart.style.animationDuration=
(3+Math.random()*4)+"s";

heart.style.setProperty(
"--drift",
(Math.random()*250-125)+"px"
);

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},7000);

},Math.random()*1800);

}

}


// ==============================
// Floating Hero Animation
// ==============================

setInterval(()=>{

const hero =
document.getElementById("heroImage");

hero.style.transform="scale(1.05)";

setTimeout(()=>{

hero.style.transform="scale(1)";

},500);

},3000);


// ==============================
// Random Photo Every 2 Seconds
// ==============================

setInterval(()=>{

const randomPhoto=
Math.floor(Math.random()*photos.length);

document.getElementById("photo").src=
photos[randomPhoto];

},2000);

let playing=false;

function toggleMusic(){

const music=document.getElementById("bgMusic");
const btn=document.getElementById("musicBtn");

if(playing){

music.pause();

btn.innerHTML="🔊 Play Music";

}else{

music.play();

btn.innerHTML="🔇 Pause Music";

}

playing=!playing;

}