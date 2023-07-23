const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');

const displayNameElement = document.getElementById('display-name');
displayNameElement.textContent = name;
    var levels = [
      {
        questions: [
        {
        question: "Apakah arti dari 'apple'?",
        image: "image/apple.webp",
        options: ["A. Jeruk", "B. Pisang", "C. Apel"],
        answer: 2
    },
    {
        question: "Apakah arti dari 'cat'?",
        image: "image/cat.png",
        options: ["A. Anjing", "B. Kucing", "C. Tikus"],
        answer: 1
    },
    {
        question: "Apakah arti dari 'book'?",
        image: "image/book.png",
        options: ["A. Buku", "B. Pena", "C. Meja"],
        answer: 0
    },
    {
        question: "Apakah arti dari 'cow'?",
        image: "image/bgsapi.png",
        options: ["A. Lampu", "B. Sapi", "C. Pensil"],
        answer: 1
    },
    {
        question: "Apakah arti dari 'grass'?",
        image: "image/rumput.png",
        options: ["A.  Rumput", "B. Helikopter", "C. Gelas"],
        answer: 0
    }

        ]
      },
      {
        questions: [
        {
        question: "Apakah arti dari sayuran 'carrot'?",
        image: "image/wortel.png",
        options: ["A. Jeruk", "B. Wortel", "C. Semangka"],
        answer: 1
      },
      {
        question: "Apakah arti dari 'car'?",
        image: "image/mobil.png",
        options: ["A. Anjing", "B. Kucing", "C.Mobil "],
        answer: 2
      },
      {
        question: "Apa bahasa inggrisnya 'Matahari'?",
        image: "image/matahari.png",
        options: ["A. Car", "B. Sun", "C. Grass"],
        answer: 1
      },
      {
        question: "Apa bahasa inggrisnya hewan 'Gajah'?",
        image: "image/gajah.png",
        options: ["A. Elephant", "B. Cat", "C. lion"],
        answer: 0
      },
      {
        question: "Apa bahasa inggrisnya 'topi'?",
        image: "image/topi.png",
        options: ["A.  Toy", "B. Holiday", "C. Hat"],
        answer: 2
      },
      {
        question: "Apa bahasa inggrisnya 'Budi Sedang Menulis'?",
        image: "image/budi.png",
        options: ["A.  Budi is Writing", "B. Writing", "C. Budi is Read"],
        answer: 0
      }

        ]
      },
      {
        questions: [
        {
        question: "Apa bahasa inggrisnya buah 'Anggur dan Nanas'?",
        image: "image/anggnanas.png",
        options: ["A. orange and pineapple", "B. grapes and pineapple", "C. Watermelon and grapes"],
        answer: 1
      },
      {
        question: "Apa bahasa inggrisnya  'Gunung'?",
        image: "image/gunung.png",
        options: ["A. Natural", "B. Insect", "C.Mountain "],
        answer: 2
      },
      {
        question: "Apa bahasa inggrisnya 'Lebah dan Sarang'?",
        image: "image/lebah.png",
        options: ["A. Bees and bull", "B. bees and hives", "C. hives and bees"],
        answer: 1
      },
      {
        question: "Apa bahasa inggrisnya hewan 'Laba-Laba'?",
        image: "image/laba.png",
        options: ["A. Spider", "B. Sleep", "C. Bathe"],
        answer: 0
      },
      {
        question: "Apa bahasa inggrisnya 'Banteng'?",
        image: "image/banteng.png",
        options: ["A.  Exciting", "B. Money", "C. bull"],
        answer: 2
      },
      {
        question: "Apa bahasa inggrisnya 'Padi'?",
        image: "image/padi.png",
        options: ["A.  Paddy", "B. Writing", "C. Wheat"],
        answer: 0
      },
      {
        question: "Apa bahasa inggrisnya 'Petani Menanam Padi'?",
        image: "image/menanampadi.png",
        options: ["A.  Self-growing rice", "B. Grow rice farmers", "C. Farmers Planting Rice"],
        answer: 2
      }

        ]
      },
      {
        questions: [
        {
        question: "Apa bahasa inggrisnya  'bintang'?",
        image: "image/bintang.png",
        options: ["A. rice", "B. paddy", "C. star"],
        answer: 2
      },
      {
        question: "Apa bahasa inggrisnya 'kancil'?",
        image: "image/kancil.png",
        options: ["A. dogs", "B. Mouse", "C.Mouse Deer "],
        answer: 2
      },
      {
        question: "Apa bahasa inggrisnya 'rambut'?",
        image: "image/rambut.png",
        options: ["A. Car", "B. hair", "C. sann"],
        answer: 1
      },
      {
        question: "Apa bahasa inggrisnya 'Petani membajak sawah'?",
        image: "image/bajakswah.png",
        options: ["A. farmer plowing the field", "B. asphalt plow farmers", "C. rice field farmer"],
        answer: 0
      },
      {
        question: "Apa bahasa inggrisnya 'mata'?",
        image: "image/mata.png",
        options: ["A.  Toy", "B. monday", "C. eye"],
        answer: 2
      },
      {
        question: "Apa bahasa inggrisnya 'buaya'?",
        image: "image/buaya.png",
        options: ["A.  crocodile", "B. Writing", "C. holiday"],
        answer: 0
      },
      {
        question: "Apa bahasa inggrisnya hewan yang berusara 'meow'?",
        image: "image/bingung.png",
        options: ["A.  cat", "B. dogs", "C. maouse"],
        answer: 0
      },
      {
        question: "Apa bahasa inggrisnya 'rusdi sedang menyanyi'?",
        image: "image/rusdi.png",
        options: ["A.  Rusdi is singing", "B. ruadi is good", "C. Budi is real"],
        answer: 0
      },
      {
        question: "Apa bahasa inggrisnya 'Singa'?",
        image: "image/singa.png",
        options: ["A. lion", "B. loin", "C. Read"],
        answer: 0
      }

        ]
      }
    ];

    var currentLevel = 0;
    var currentQuestion = 0;
    var score = 0;

    var questionTextElement = document.getElementById("question-text");
    var imageElement = document.getElementById("image");
    var optionsElement = document.getElementById("options");
    var resultElement = document.getElementById("result");
    var finishButton = document.getElementById("finish-button");
    var finishbrnd = document.getElementById("finish-beranda");

    function loadQuestion() {
      var question = levels[currentLevel].questions[currentQuestion];

      questionTextElement.textContent = question.question;
      imageElement.src = question.image;
      optionsElement.innerHTML = "";

      for (var i = 0; i < question.options.length; i++) {
        var option = document.createElement("div");
        option.textContent = question.options[i];
        option.classList.add("option");
        option.setAttribute("data-index", i);
        option.addEventListener("click", checkAnswer);
        optionsElement.appendChild(option);
      }
    }

    function checkAnswer(event) {
      var selectedOption = event.target;
      var selectedIndex = selectedOption.getAttribute("data-index");
      var question = levels[currentLevel].questions[currentQuestion];

      if (selectedIndex == question.answer) {
        selectedOption.style.backgroundColor = "#08f52b";
        score++;
        resultElement.textContent = "Jawaban benar!";
      } else {
        selectedOption.style.backgroundColor = "#FF4136";
        resultElement.textContent = "Jawaban salah!";
        
      }

      disableOptions();

      if (currentQuestion < levels[currentLevel].questions.length - 1) {
        currentQuestion++;
        setTimeout(loadQuestion, 1000);
      } else {
        if (currentLevel < levels.length - 1) {
          currentLevel++;
          currentQuestion = 0;
          resultElement.textContent = " Skor " + name + " : " + score + " dari " + levels[currentLevel - 1].questions.length + " Pertanyaan ,lanjut level selanjutnya ";
          finishButton.style.display = "block";
        } else {
          showScore();
        }
      }
    }

    function disableOptions() {
      var options = optionsElement.getElementsByClassName("option");

      for (var i = 0; i < options.length; i++) {
        options[i].style.pointerEvents = "none";
      }
    }

    function showScore() {
      questionTextElement.style.display = "none";
      imageElement.style.display = "none";
      optionsElement.style.display = "none";
      finishButton.style.display = "none";
      finishbrnd.style.display = "block";
      resultElement.textContent = "Skor : "+ name  + score + " dari " + levels[currentLevel].questions.length+ " pertanyaan " ;
      
    }
    
    finishButton.addEventListener("click", function() {
      currentQuestion = 0;
      score = 0;
      loadQuestion();
      resultElement.textContent = "";
      finishButton.style.display = "none";
     
    });
    finishbrnd.addEventListener("click", function () {
      window.location.href = "Beranda.html";

    });
    

    loadQuestion();