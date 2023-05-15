//For the e-mail.
/*
function sendEmail() {
    var form = document.getElementById("email-form");
    var name = form.elements["name"].value;
    var email = form.elements["email"].value;
    var message = form.elements["message"].value;
    var subject = '網站聯繫';

    var body = '聯絡 e-mail：' + email + "\n\n" + message + "\n\n" + name;

    var mailtoLink = 'mailto:' + "s10912125@cycu.edu.tw" +
    '?subject=' + encodeURIComponent(subject) +
    '&body=' + encodeURIComponent(body);

    window.location.href = mailtoLink;
}
*/


//loading doc.
document.addEventListener("DOMContentLoaded", function(event) {

    //Contact box setting.
    /*
    const expandBtn = document.getElementById("expandBtn");
    const expandDiv = document.getElementById("expandDiv");
    const collapseBtn = document.getElementById("collapseBtn");

    expandBtn.addEventListener("click", () => {
        expandDiv.classList.add("open");
        collapseBtn.style.display = "block";
        expandDiv.style.display = "block";

    });

    collapseBtn.addEventListener("click", () => {
        expandDiv.classList.remove("open");
        collapseBtn.style.display = "none";
        expandDiv.style.display = "none";
    });
    */

    //particle cursor.
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    let particlesArray;

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 4 + 1;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.size > 2) this.size -= 0.1;
        }

        draw() {
            ctx.fillStyle = "lemonchiffon";
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }
    }

    function init() {
        particlesArray = [];
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
    }

    init();
    animate();

    window.addEventListener("mousemove", (event) => {
        const x = event.clientX;
        const y = event.clientY;
        for (let i = 0; i < 1; i++) {
            particlesArray.push(new Particle(x, y));
        }
    });

    window.addEventListener("resize", function() {
        const canvas = document.getElementById("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    /*
    //table color change.
    $(function() {
        setInterval(function() {
            var colors = [
                "#95d1f5",
                "#85c9f4",
                "#75c1f3",
                "#65b9f2",
                "#56b1f1",
                "#46a9f0",  
                "#389fe9",
                "#2b95e2",
                "#1d8bdd",
                "#1181d6",
                "#0b76c3",
                "#076ca8"
            ];
            $("#program_table td:not(.blank)").each(function() {
                var color = colors[Math.floor(Math.random() * colors.length)];
                $(this).css('background-color', color);
            });
        }, 1500);
    });
    */

    //to the top botton.
    /*
    const scrollToTopBtn = document.querySelector("#scroll-to-top");

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = "block";
        } 
        else {
            scrollToTopBtn.style.display = "none";
        }
        });

        scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
    */
});

//test for prev and next botton for picture box.
/*
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
*/
//over