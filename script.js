const heart = document.getElementById("heart");
const scareContainer = document.getElementById("scare-container");
const scareVideo = document.getElementById("scare-video");
const scareAudio = document.getElementById("scare-audio");

let clickCount = 0;

heart.addEventListener("click", () => {
    clickCount++;

    if (clickCount < 7) {
        // Di chuyển trái tim đến vị trí ngẫu nhiên
        const newX = Math.random() * (window.innerWidth - 50);
        const newY = Math.random() * (window.innerHeight - 50);
        heart.style.left = `${newX}px`;
        heart.style.top = `${newY}px`;
    } else {
        // Xuất hiện video hù dọa
        scareContainer.style.display = "flex";
        scareVideo.play();
        scareAudio.play();
        
        // Ẩn trái tim
        heart.style.display = "none";
    }
});
