function myFun() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  
  // Apply the function to all "Read more" buttons
  document.querySelectorAll("#myBtn").forEach(button => {
    button.addEventListener("click", function() {
      const content = this.closest("#content");
      const dots = content.querySelector("#dots");
      const moreText = content.querySelector("#more");
      
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        this.innerHTML = "Read more";
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        this.innerHTML = "Read less";
        moreText.style.display = "inline";
      }
    });
  });

//   cards

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function goNext() {
    showSlide(currentSlide + 1);
}

function goPrevious() {
    showSlide(currentSlide - 1);
}

function toggleDropdown(id) {
    document.getElementById(id).classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Initialize the first slide
showSlide(0);

// Auto-advance the carousel every 5 seconds
setInterval(goNext, 5000);

var comedyData = [       //array
    {
        id: "1",
        name:"I'm Not A Robot (Hindi Dubbed) ",
        timing: " 1 Season 16 Episodes",
        imgSrc: " https://qqcdnpictest.mxplay.com/pic/f7da7d4773de9e7046a7bf3c16303503/en/2x3/320x480/test_pic1674454342245_badged_1674454344691.webp",
        url: "https://www.mxplayer.in/show/watch-im-not-a-robot-hindi-dubbed/season-1/episode-1-online-b854c1ec591b61952b5a7cf460bec09d?watch=true ",
    },
    {
        id: "2 ",
        name:"Our Story (Hindi Dubbed) ",
        timing: "2 Seasons 200 Episodes ",
        imgSrc: "https://qqcdnpictest.mxplay.com/pic/8c042e67dbcb727a80953d0733519c95/en/2x3/320x480/test_pic1666776202522.webp ",
        url: "https://www.mxplayer.in/show/watch-our-story-hindi-dubbed/season-1/episode-1-online-d2f56c0515362115344229d744783b5e?watch=true ",
    },
    {
        id: " 3",
        name:"My Girlfriend Is An Alien (Hindi Dub ",
        timing: "1 Season 28 Episodes ",
        imgSrc: " https://qqcdnpictest.mxplay.com/pic/0930fb169d387f3cd0bdc0f920814a8b/en/16x9/320x180/test_pic1712130103514.webp",
        url: "https://www.mxplayer.in/show/watch-my-girlfriend-is-an-alien-hindi-dubbed/season-1/episode-1-online-9d2013d31d5835bb8400e3b3c5e7bb72?watch=true ",
    },
    {
        id: " 4",
        name:"Chakravyuh - An Inspector Virkar ",
        timing: " 1 Season 8 Episodes",
        imgSrc: " https://qqcdnpictest.mxplay.com/pic/9010f20b375287436132bf0834179614/en/16x9/320x180/test_pic1666766201271.webp",
        url: "https://www.mxplayer.in/show/watch-chakravyuh-an-inspector-virkar-crime-thriller/season-1/phishing-online-40dc6652eaaf1276e13817a89dcded65?watch=true ",
    },
    {
        id: "5 ",
        name:"Put Your Head On My Shoulder (Hindi Dubbed)",
        timing: " 1 Season 24 Episodes",
        imgSrc: " https://qqcdnpictest.mxplay.com/pic/c6382211316cb17d1757d82cf9605e4a/en/2x3/320x480/test_pic1666868994951.webp",
        url: "https://www.mxplayer.in/show/watch-put-your-head-on-my-shoulder-hindi-dubbed/season-1/episode-1-online-9debd1d12b430dc1409a615f00c433eb?watch=true ",
    },
    {
        id: "6 ",
        name:"Madhuri Talkies ",
        timing: "1 Season 10 Episodes",
        imgSrc: " https://qqcdnpictest.mxplay.com/pic/c8f020e263cb5e5bf056b41741bbde6f/en/16x9/320x180/test_pic1666864281239.webp",
        url: " https://www.mxplayer.in/show/watch-madhuri-talkies/season-1/bholenath-kasam-online-854baff816835ded869b629601340b18?watch=true",
    },
    {
        id: "7 ",
        name:" Forever Buddies (Telugu)",
        timing: "2 Seasons 18 Episodes ",
        imgSrc: "https://qqcdnpictest.mxplay.com/pic/f69797656b0068b0e6fcfc82a56acc32/en/16x9/320x180/test_pic1674542759298.webp ",
        url: " https://www.mxplayer.in/show/watch-forever-buddies-telugu/season-1/rendu-idli-online-d8aaab96187566917b28fd4781815ea8?watch=true",
    },
    {
        
        id: "8",
        name: "Dare to Love (Hindi Dubbed)",
        timing: "02 : 08 hrs",
        imgSrc: " https://qqcdnpictest.mxplay.com/pic/8f484e1869cc333bce98594fa2da59e4/en/2x3/320x480/test_pic1699952747033.webp",
        url: "https://www.mxplayer.in/show/watch-dare-to-love-hindi-dubbed/season-1/episode-1-online-859a4b393e818109edc56308c23bcb73?watch=true",
    },


    {
        id: "9",
        name: "Dear Comrade",
        // desc: " (Hindi Dubbed)Romance" ,
        timing: " 02 : 31 hrs",
        url: "https://www.mxplayer.in/movie/watch-dear-comrade-hindi-dubbed-movie-online-51b4d4703538b2f079dc953e42a115a0?watch=true ",
        imgSrc: " https://qqcdnpictest.mxplay.com/pic/51b4d4703538b2f079dc953e42a115a0/en/2x3/320x480/test_pic1688553034011.webp",
    },
    {
        id: "10 ",
        name: " Indori Ishq",
        // desc: " Indori Ishq is a story about love, romance, and the passion that comes with it.", 
        timing: " 1 Season 9 Episodes",
        url: " https://www.mxplayer.in/show/watch-indori-ishq/season-1/tum-toh-thehre-pardesi-online-f75755562489aebf38f49a5c07de8fc4?watch=true",
        imgSrc: "https://qqcdnpictest.mxplay.com/pic/263122ff620b8e608aedf7269f05d9ae/en/16x9/320x180/test_pic1666161953734.webp ",
    },

    {
        id: " 11",
        name: "Campus Diaries ",
        // desc: "Relive your college days through Campus Diaries first episode where the college begins with the welcoming of freshers by the senior.",
        timing: " 1 Season 12 Episodes",
        url: "https://www.mxplayer.in/show/watch-campus-diaries/season-1/episode-1-online-c7c453176a1e80e235ad7eb5ca1a3a1b?watch=true ",
        imgSrc: " https://qqcdnpictest.mxplay.com/pic/ee5f8ba6d087fc47627c1bb41bd9916d/en/16x9/320x180/test_pic1665995897686.webp",
    },
    {
        id: "12 ",
        name: " The Untamed (Hindi Dubbed)",
        // desc: "  After 16 years, Wei Wuxian, who was killed by his brother, Jiang Cheng, reincarnated into the body of Xunayu through a sacrificial ritual",
        timing: " 1 Season 50 Episodes",
        url: " https://www.mxplayer.in/show/watch-the-untamed-hindi-dubbed/season-1/episode-1-online-b212c2da80a1e3d1b38b8c55d6a2e159?watch=true",
        imgSrc: "https://qqcdnpictest.mxplay.com/pic/bc6309a65bda04da6ed5f22d04c02388/en/2x3/320x480/test_pic1678868081218.webp ",
    },

    {
        id: " 13",
        name: "Anamika",
        // desc: "Anamika Web Series In Hindi Online On MX Player. The episode begins with an attack on the Faridabad City Hospital by some masked goons.",
        timing: "1 Season 8 Episodes ",
        url: "https://www.mxplayer.in/show/watch-anamika/season-1/anamika-who-online-cda3ff79c25b9888e863b83851dd5341?watch=true ",
        imgSrc: " https://qqcdnpictest.mxplay.com/pic/282af57e7a289451caf52f64478bf7d4/en/16x9/320x180/test_pic1704959418246.webp",
    },
    {
        id: " 14",
        name: "Bisaat - Khel Shatranj Ka ",
        // desc: "A renowned industrialist Yash Kapoor is dead in the presence of Psychiatrist Kiyana Verma, she runs from the crime scene and goes to her best friend Saba Salim to confide in her.",
        timing: " 1 Season 8 Episodes",
        url: "https://www.mxplayer.in/show/watch-bisaat-khel-shatranj-ka/season-1/episode-1-online-389338221f501035592c5711c48002a9?watch=true ",
        imgSrc: " https://qqcdnpictest.mxplay.com/pic/552498356ff4d7dc0e375318de86f89c/en/16x9/320x180/test_pic1690441128361.webp",
    },
    {
        id: "15",
        name: "Matsya Kaand (Punjabi) ",
        // desc: " ",
        timing: "1 Season 11 Episodes",
        url: "https://www.mxplayer.in/show/watch-matsya-kaand-punjabi/season-1/abhimanyu-online-a0f0bb0f906459617f1622dd36b47000?watch=true",
        imgSrc: "https://qqcdnpictest.mxplay.com/pic/3aa27bdd56ae341e4d8846a56c2d016a/en/16x9/320x180/test_pic1704891504126.webp",
    },

    {
        id: "16",
        name: "Dollhouse Diaries (Hindi) ",
        // desc: " ",
        timing: "1 Season 13 Episodes ",
        url: "https://www.mxplayer.in/show/watch-dollhouse-diaries-hindi/season-1/episode-1-online-f626718b69d9e644976c8830566c0a42?watch=true",
        imgSrc: "https://qqcdnpictest.mxplay.com/pic/8387d19da9bb4ed0f09eb1720a76fbe6/en/16x9/320x180/test_pic1704898471754.webp ",
    },
    
];
localStorage.setItem("comedyData", JSON.stringify(comedyData));
var comedyContainer = document.getElementById("card_container");

function displayData(comedy) {
    comedy.map(function (ele, index) {
        var mainCard = document.createElement("div");
        var link = document.createElement("a");
        link.setAttribute("href", ele.url)

        var mainImg = document.createElement("img");
        mainImg.setAttribute("src", ele.imgSrc);
        mainImg.setAttribute("alt", ele.name);

        var title = document.createElement("h3");
        title.textContent = ele.name;

        var description = document.createElement("p");
        description.textContent = ele.desc;

        var timing = document.createElement("p");
        timing.textContent = ele.timing;
        link.appendChild(mainImg);
        mainCard.appendChild(link);
        mainCard.appendChild(title);
        mainCard.appendChild(description);
        mainCard.appendChild(timing);
        comedyContainer.appendChild(mainCard);
    });
}

var comedy = JSON.parse(localStorage.getItem("comedyData")) || [];
displayData(comedy);
