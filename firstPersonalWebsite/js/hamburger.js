// العناصر
const menuIcon = document.getElementById("menu-icon");
const menuOverlay = document.getElementById("menu-overlay");
const closeBtn = document.getElementById("close-btn");
const menuLinks = document.querySelectorAll(".menu-content ul li a");

// فتح القائمة عند الضغط على الهامبرغر
menuIcon.addEventListener("click", () => {
    menuOverlay.style.display = "flex";
});

// إغلاق القائمة عند الضغط على زر ×
closeBtn.addEventListener("click", () => {
    menuOverlay.style.display = "none";
});

// إغلاق القائمة عند الضغط على أي رابط
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuOverlay.style.display = "none";
    });
});
