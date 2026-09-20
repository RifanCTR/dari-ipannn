/* ========================================
   3D BALLOON PARALLAX
======================================== */

const balloons = document.querySelectorAll(".balloon");

let ticking = false;

window.addEventListener("scroll", () => {

    if (ticking) return;

    window.requestAnimationFrame(() => {

        const scrollY = window.scrollY;

        balloons.forEach((balloon, index) => {

            const speed =
                0.015 +
                (index * 0.004);

            balloon.style.marginTop =
                `${scrollY * speed}px`;

        });

        ticking = false;
    });

    ticking = true;
});


/* ========================================
   FOTO CARD TOUCH EFFECT
======================================== */

const cards =
    document.querySelectorAll(".photo-card");


cards.forEach(card => {

    card.addEventListener(
        "touchmove",
        (event) => {

            const touch =
                event.touches[0];

            const rect =
                card.getBoundingClientRect();

            const x =
                touch.clientX -
                rect.left;

            const y =
                touch.clientY -
                rect.top;


            const rotateY =
                ((x / rect.width) - 0.5) * 8;


            const rotateX =
                ((y / rect.height) - 0.5) * -8;


            card.style.transform =
                `
                perspective(700px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale(1.02)
                `;
        }
    );


    card.addEventListener(
        "touchend",
        () => {

            card.style.transform = "";

        }
    );

});


/* ========================================
   PHOTO LOAD CHECK
======================================== */

const photos =
    document.querySelectorAll("img");


photos.forEach(photo => {

    photo.addEventListener(
        "error",
        () => {

            console.warn(
                "Foto tidak ditemukan:",
                photo.src
            );

        }
    );

});