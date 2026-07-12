// =================================
// LOADING SCREEN
// =================================

const loader =
document.getElementById("loader");


window.addEventListener(

    "load",

    function () {

        setTimeout(

            function () {

                loader
                .classList
                .add("hide");

            },

            1200

        );

    }

);


// =================================
// MOBILE NAVIGATION
// =================================

const menuButton =
document.getElementById(
    "menuButton"
);


const navLinks =
document.getElementById(
    "navLinks"
);


menuButton.addEventListener(

    "click",

    function () {

        navLinks
        .classList
        .toggle("show");


        const icon =

        menuButton
        .querySelector("i");


        icon
        .classList
        .toggle("fa-bars");


        icon
        .classList
        .toggle("fa-xmark");

    }

);


document
.querySelectorAll(
    ".nav-links a"
)
.forEach(

    function (link) {

        link.addEventListener(

            "click",

            function () {

                navLinks
                .classList
                .remove("show");


                const icon =

                menuButton
                .querySelector("i");


                icon.className =

                "fa-solid fa-bars";

            }

        );

    }

);


// =================================
// TYPING EFFECT
// =================================

const typing =
document.getElementById(
    "typing"
);


const typingWords = [

    "modern websites.",

    "interactive experiences.",

    "responsive applications.",

    "useful solutions."

];


let currentWord = 0;

let currentLetter = 0;

let deleting = false;


function typingEffect() {


    const word =

    typingWords[
        currentWord
    ];


    if (
        deleting === false
    ) {

        typing.textContent =

        word.substring(

            0,

            currentLetter + 1

        );


        currentLetter++;


        if (

            currentLetter

            ===

            word.length

        ) {

            deleting = true;


            setTimeout(

                typingEffect,

                1600

            );


            return;

        }

    }


    else {


        typing.textContent =

        word.substring(

            0,

            currentLetter - 1

        );


        currentLetter--;


        if (

            currentLetter

            ===

            0

        ) {


            deleting = false;


            currentWord =

            (

                currentWord

                +

                1

            )

            %

            typingWords.length;

        }

    }


    setTimeout(

        typingEffect,

        deleting

        ?

        45

        :

        85

    );

}


typingEffect();


// =================================
// THEME
// =================================

const themeButton =

document.getElementById(

    "themeButton"

);


const storedTheme =

localStorage.getItem(

    "vamsi-theme"

);


if (

    storedTheme

    ===

    "light"

) {

    document
    .body
    .classList
    .add("light");

}


changeThemeIcon();


themeButton.addEventListener(

    "click",

    function () {


        document
        .body
        .classList
        .toggle("light");


        const light =

        document
        .body
        .classList
        .contains("light");


        localStorage.setItem(

            "vamsi-theme",

            light

            ?

            "light"

            :

            "dark"

        );


        changeThemeIcon();

    }

);


function changeThemeIcon() {


    const light =

    document
    .body
    .classList
    .contains("light");


    themeButton
    .querySelector("i")
    .className =

    light

    ?

    "fa-solid fa-sun"

    :

    "fa-solid fa-moon";

}


// =================================
// HEADER AND BACK TOP
// =================================

const header =

document.getElementById(
    "header"
);


const backTop =

document.getElementById(
    "backTop"
);


window.addEventListener(

    "scroll",

    function () {


        header
        .classList
        .toggle(

            "scrolled",

            window.scrollY

            >

            30

        );


        backTop
        .classList
        .toggle(

            "show",

            window.scrollY

            >

            600

        );

    }

);


// =================================
// SCROLL PROGRESS
// =================================

const progress =

document.getElementById(

    "scrollProgress"

);


window.addEventListener(

    "scroll",

    function () {


        const pageHeight =

        document
        .documentElement
        .scrollHeight

        -

        window.innerHeight;


        const scrollPercent =

        (

            window.scrollY

            /

            pageHeight

        )

        *

        100;


        progress.style.width =

        scrollPercent

        +

        "%";

    }

);


// =================================
// ACTIVE NAVIGATION
// =================================

const sections =

document.querySelectorAll(

    "main section"

);


const links =

document.querySelectorAll(

    ".nav-links a"

);


window.addEventListener(

    "scroll",

    function () {


        let activeSection =

        "home";


        sections.forEach(

            function (section) {


                if (

                    window.scrollY

                    >=

                    section.offsetTop

                    -

                    250

                ) {


                    activeSection =

                    section.id;

                }

            }

        );


        links.forEach(

            function (link) {


                link
                .classList
                .remove("active");


                if (

                    link
                    .getAttribute(
                        "href"
                    )

                    ===

                    "#"

                    +

                    activeSection

                ) {


                    link
                    .classList
                    .add("active");

                }

            }

        );

    }

);


// =================================
// SCROLL REVEAL
// =================================

const revealItems =

document.querySelectorAll(

    ".reveal"

);


const revealObserver =

new IntersectionObserver(

    function (entries) {


        entries.forEach(

            function (entry) {


                if (

                    entry
                    .isIntersecting

                ) {


                    entry
                    .target
                    .classList
                    .add("active");

                }

            }

        );

    },

    {

        threshold:
        0.12

    }

);


revealItems.forEach(

    function (item) {


        revealObserver
        .observe(item);

    }

);


// =================================
// SKILL PROGRESS
// =================================

const skillBars =

document.querySelectorAll(

    ".skill-progress span"

);


const skillObserver =

new IntersectionObserver(

    function (entries) {


        entries.forEach(

            function (entry) {


                if (

                    entry
                    .isIntersecting

                ) {


                    entry
                    .target
                    .style
                    .width =

                    entry
                    .target
                    .dataset
                    .width;

                }

            }

        );

    },

    {

        threshold:
        0.6

    }

);


skillBars.forEach(

    function (bar) {


        skillObserver
        .observe(bar);

    }

);


// =================================
// NUMBER COUNTER
// =================================

const counters =

document.querySelectorAll(

    ".counter"

);


const counterObserver =

new IntersectionObserver(

    function (entries) {


        entries.forEach(

            function (entry) {


                if (

                    entry
                    .isIntersecting

                ) {


                    const counter =

                    entry.target;


                    const target =

                    Number(

                        counter
                        .dataset
                        .target

                    );


                    let value = 0;


                    const count =

                    setInterval(

                        function () {


                            value++;


                            counter
                            .textContent =

                            value

                            +

                            "+";


                            if (

                                value

                                >=

                                target

                            ) {


                                clearInterval(

                                    count

                                );

                            }

                        },

                        180

                    );


                    counterObserver
                    .unobserve(

                        counter

                    );

                }

            }

        );

    }

);


counters.forEach(

    function (counter) {


        counterObserver
        .observe(counter);

    }

);


// =================================
// 3D TILT CARDS
// =================================

const cards =

document.querySelectorAll(

    ".tilt-card"

);


cards.forEach(

    function (card) {


        card.addEventListener(

            "mousemove",

            function (event) {


                if (

                    window.innerWidth

                    <

                    800

                ) {

                    return;

                }


                const box =

                card
                .getBoundingClientRect();


                const x =

                event.clientX

                -

                box.left;


                const y =

                event.clientY

                -

                box.top;


                const rotateY =

                (

                    x

                    -

                    box.width / 2

                )

                /

                18;


                const rotateX =

                -

                (

                    y

                    -

                    box.height / 2

                )

                /

                18;


                card.style.transform =

                `

                perspective(1000px)

                rotateX(

                    ${rotateX}deg

                )

                rotateY(

                    ${rotateY}deg

                )

                translateY(-8px)

                `;

            }

        );


        card.addEventListener(

            "mouseleave",

            function () {


                card.style.transform =

                `

                perspective(1000px)

                rotateX(0deg)

                rotateY(0deg)

                translateY(0)

                `;

            }

        );

    }

);


// =================================
// 3D MAIN LOGO
// =================================

const visualArea =

document.querySelector(

    ".visual-area"

);


const universe =

document.getElementById(

    "developerUniverse"

);


visualArea.addEventListener(

    "mousemove",

    function (event) {


        if (

            window.innerWidth

            <

            800

        ) {

            return;

        }


        const box =

        visualArea
        .getBoundingClientRect();


        const rotateY =

        (

            event.clientX

            -

            box.left

            -

            box.width / 2

        )

        /

        30;


        const rotateX =

        -

        (

            event.clientY

            -

            box.top

            -

            box.height / 2

        )

        /

        30;


        universe.style.transform =

        `

        rotateX(

            ${rotateX}deg

        )

        rotateY(

            ${rotateY}deg

        )

        `;

    }

);


visualArea.addEventListener(

    "mouseleave",

    function () {


        universe.style.transform =

        "rotateX(0) rotateY(0)";

    }

);


// =================================
// PARTICLES
// =================================

const particleArea =

document.getElementById(

    "particles"

);


for (

    let number = 0;

    number < 35;

    number++

) {


    const particle =

    document
    .createElement("span");


    particle
    .classList
    .add("particle");


    particle.style.left =

    Math.random()

    *

    100

    +

    "%";


    particle.style.animationDuration =

    8

    +

    Math.random()

    *

    12

    +

    "s";


    particle.style.animationDelay =

    Math.random()

    *

    10

    +

    "s";


    particleArea
    .appendChild(

        particle

    );

}


// =================================
// CUSTOM CURSOR
// =================================

const cursorDot =

document.querySelector(

    ".cursor-dot"

);


const cursorCircle =

document.querySelector(

    ".cursor-circle"

);


const mouseGlow =

document.querySelector(

    ".mouse-glow"

);


document.addEventListener(

    "mousemove",

    function (event) {


        cursorDot.style.left =

        event.clientX

        +

        "px";


        cursorDot.style.top =

        event.clientY

        +

        "px";


        mouseGlow.style.left =

        event.clientX

        +

        "px";


        mouseGlow.style.top =

        event.clientY

        +

        "px";


        cursorCircle.animate(

            {

                left:

                event.clientX

                +

                "px",


                top:

                event.clientY

                +

                "px"

            },

            {

                duration:
                350,

                fill:
                "forwards"

            }

        );

    }

);


// =================================
// CONTACT FORM
// =================================

const contactForm =

document.getElementById(

    "contactForm"

);


contactForm.addEventListener(

    "submit",

    function (event) {


        event.preventDefault();


        const name =

        document
        .getElementById(
            "name"
        )
        .value;


        const email =

        document
        .getElementById(
            "email"
        )
        .value;


        const subject =

        document
        .getElementById(
            "subject"
        )
        .value;


        const message =

        document
        .getElementById(
            "message"
        )
        .value;


        const emailMessage =

        `

Name:

${name}


Email:

${email}


Message:

${message}

        `;


        window.location.href =

        `mailto:

mrvamsi690@gmail.com

?subject=

${

encodeURIComponent(

    subject

)

}

&body=

${

encodeURIComponent(

    emailMessage

)

}`

        .replace(

            /\s/g,

            ""

        );


        contactForm
        .reset();

    }

);