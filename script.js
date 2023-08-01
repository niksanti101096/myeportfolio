/*
 <i><a class='continue' type='button' onclick='clicked()'>Continue</a></i>
*/

let btnContinue = document.querySelector(".continue");
let counter = 0;

function caller() {
  new Typed(".auto-typed", autoTypeDetails(counter));
}

function clicked() {
  counter += 1;
  caller();
}

function autoTypeDetails(count) {
  let speeds = {
    slow: 120,
    normal: 60,
    fast: 40,
    superfast: 10,
  };
  const text = [
    {
        strings: ["Hi! I am <b style='color: #db8d34'>Nikko James Santillan</b>. <i><a class='continue' type='button' onclick='clicked()'>Continue</a></i>"],
        typeSpeed: speeds.fast,
        showCursor: false
    },
    {
        strings: ["Currently a student in KodeGo PH, taking up Full-Stack Web Development. <i><a class='continue' type='button' onclick='clicked()'>Continue</a></i>"],
        typeSpeed: speeds.fast,
        showCursor: false
    },
    {
        strings: ["I do really love coding specially during in my college years.",
        "Here are some of the programming languages that I already tried on; <ul><li>C</li><li>Python</li><li>HTML</li><li>CSS</li><li>Javascript</li><li>Java</li><li>PHP</li></ul><i><a class='continue' type='button' onclick='clicked()'>Continue</a></i>"],
        typeSpeed: speeds.fast,
        showCursor: false
    },
    {
        strings: ["But when I finished my college, I took a separate path since I needed money at that time and for me, it was hard to apply to an IT industry way back, so I took the job opportunity my friend had recommended. <a class='continue' type='button' onclick='clicked()'>Continue</a>"],
        typeSpeed: speeds.fast,
        showCursor: false
    },
    {
        strings: ["Fast forward to now, I realised that in my previous job, there’s no growth in the position that I was in, so I was then looking for an online school just to refresh my knowledge that I have learned during my college years.",
        "Then I found <a id='kodegoLink' href='https://kodego.ph'>KodeGo</a>! While I was checking their backgrounds, I found out that they are not only teaching but helping their students to land a job after graduating. <i><a class='continue' type='button' onclick='clicked()'>Continue</a></i>"],
        typeSpeed: speeds.fast,
        backDelay: 2000,
        showCursor: false
    },
    {
      strings: [
        "Since you already know some of my background, what do you want next? <ul><li><button class='visitorSelection hover-underline-animation btn btn-lg' onclick='sendEmail()'>Send me an email</button></li><li><button class='visitorSelection hover-underline-animation btn btn-lg' onclick='codingSkills()'>Check my Coding Skills</button></li><li><button class='visitorSelection hover-underline-animation btn btn-lg' onclick='kodego()'>Check the projects and activities I've made in KodeGo</button></li></ul>",
      ],
      typeSpeed: speeds.superfast,
      backDelay: 2000,
      showCursor: false,
    }
  ];
  if (text.length > count) {
    return text[count];
  } else {
    return null;
  }
}
caller();

let codingskills = document.querySelector(".coding-skills");
var codingdisplay = 1;
function codingSkills() {
  if (codingdisplay == 1) {
    emaildisplay = 0;
    sendEmail();
    kodegodisplay = 0;
    kodego();
    codingskills.style.display = "block";
    codingdisplay = 0;
  } else {
    codingskills.style.display = "none";
    codingdisplay = 1;
  }
}

let sendemail = document.querySelector(".send-email");
var emaildisplay = 1;
function sendEmail() {
  if (emaildisplay == 1) {
    codingdisplay = 0;
    codingSkills();
    kodegodisplay = 0;
    kodego();
    sendemail.style.display = "block";
    emaildisplay = 0;
  } else {
    sendemail.style.display = "none";
    emaildisplay = 1;
  }
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let checkKodego = document.querySelector(".kodego");
var kodegodisplay = 1;

function kodego() {
  if (kodegodisplay == 1) {
    codingdisplay = 0;
    codingSkills();
    emaildisplay = 0;
    sendEmail();
    checkKodego.style.display = "block";
    kodegodisplay = 0;
  } else {
    checkKodego.style.display = "none";
    kodegodisplay = 1;
  }
}