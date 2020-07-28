function respon() {
    window.addEventListener("resize", () => {
        var x = window.innerWidth;
        document.querySelector("html").style.setProperty('--x', x);
    })
};

respon();

function cursor() {
    var cursor = document.querySelector(".cursor"),
        all = document.querySelectorAll("a");

    window.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "transform: " + "translateX(" + (e.pageX - 30) + "px)" + " " +
            "translateY(" + (e.pageY - 30) + "px)");
        if(e.pageX >= window.innerWidth){
            e.pageX = window.innerWidth;
        }
    });

    window.addEventListener("resize", () => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            cursor.remove();
        } else {
            document.body.insertBefore(cursor,document.body.firstChild);
        };
    })

    // all.forEach(link => {
    //     link.addEventListener("mouseover", () => {
    //         cursor.classList.add("link_grow");
    //     });
    //     link.addEventListener("mouseleave", () => {
    //         cursor.classList.remove("link_grow");
    //     });
    // });

    // t.addEventListener("mouseover", () => {
    //     cursor.classList.add("invert");
    // });
    // t.addEventListener("mouseleave", () => {
    //     cursor.classList.remove("invert");
    // });
};

cursor();

function soundoff() {
    var sound = document.querySelector(".sound");
    var audio = document.querySelector("audio");
    sound.onclick = function () {
        var svg = document.querySelector(".sound svg");
        if (svg.classList.contains("off") === true) {
            svg.classList.remove("off");
            audio.volume = 0.8;
        } else {
            svg.classList.add("off");
            audio.volume = 0;
        };
    }
}

soundoff();

function fade(){
    var char = document.querySelectorAll(".splitting .char");
    if(Splitting() === true){
        for(i=0;i<char.length;i++){
            char[i].classList.add("fadejs");
        }
    }
}

fade();

function menu() {
    var fmenu = document.querySelector(".frame__menu");
    var menu = document.querySelector(".menu");
    var overlay = document.querySelector(".menu_overlay");
    var i = document.querySelectorAll(".frame__menu i");
    fmenu.onclick = function () {
        if (menu.classList.contains("hide") === true) {
            menu.classList.remove("hide");
            i[0].classList.add("op1");
            i[1].classList.add("op2");
        } else {
            menu.classList.add("hide");
            i[0].classList.remove("op1");
            i[1].classList.remove("op2");
        }
    }
    overlay.onclick = function () {
        console.log("adasda");
        menu.classList.add("hide");
        i[0].classList.remove("op1");
        i[1].classList.remove("op2");
    }
}

menu();

//浏览器监测

function detective() {
    function is_wechat() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            return true;
        } else {
            return false;
        };
    }
    if (is_wechat()) {
        var jdg = document.createElement("div");
        var audio = document.querySelector("audio");
        jdg.appendChild(document.createTextNode('请使用较新的现代浏览器，使用PC可获得最佳体验'));
        var first = document.body.firstChild;
        document.body.insertBefore(jdg, first);
        jdg.className = 'jdg';
        audio.pause();
    }
}

detective();