document.addEventListener("DOMContentLoaded", function() {
    const username = localStorage.getItem("username");
  
    if (username) {
      document.getElementById("greeting").textContent = `Привет, ${username}!`;
    } else {
      const user = prompt("Пожалуйста, представьтесь:");
      document.getElementById("greeting").textContent = `Привет, ${user}!`;
      localStorage.setItem("username", user);
    }
  });
  
  function runTask1() {
    const zodiacSign = (prompt('Какой у вас знак зодиака') ?? ' ').trim().toLowerCase();
    let alertText;
  
    switch(zodiacSign) {
      case 'овен':
        alertText = 'Здравствуйте, овен'
        break
      case 'телец':
        alertText = 'Здравствуйте, телец'
        break
      case 'близнецы':
        alertText = 'Здравствуйте, близнецы'
        break
      case 'рак':
        alertText = 'Здравствуйте, рак'
        break
      case 'лев':
        alertText = 'Здравствуйте, лев'
        break
      case 'дева':
        alertText = 'Здравствуйте, дева'
        break
      case 'весы':
        alertText = 'Здравствуйте, весы'
        break
      case 'скорпион':
        alertText = 'Здравствуйте, скорпион'
        break
        case 'стрелец':
          alertText = 'Здравствуйте, стрелец'
          break
        case 'козерог':
          alertText = 'Здравствуйте, козерог'
          break
        case 'водолей':
          alertText = 'Здравствуйте, водолей'
          break
        case 'рыбы':
          alertText = 'Здравствуйте, рыбы'
          break
      default:
        alertText = 'Здравствуйте, не знаю что это за знак такой';
    }
  
    alert(alertText);
  }
  
  
  function runTask2() {
    const secretNumber = 10;
  
    alert('Я загадал число больше 5, угадайте какое');
  
    while (true) {
      const answer = prompt('Введите число');
      const number = Number.parseFloat(answer);
  
      if (isNaN(number)) {
        alert("Введите пожалуйста число");
      } else if (number <= 5) {
        alert("Введите пожалуйста число больше 5");
      } else if (number !== secretNumber) {
        alert("Неверно");
      } else {
        alert("Угадали");
        break;
      }
    }
  }
  
  
  function startQuiz() {
    const quizQuestions = [
      "Что такое JavaScript?",
      "JavaScript и Java это одно и тоже?",
      "Где можно использовать JavaScript?",
      "Какие функции выполняет JS?",
      "Какие циклы есть в языке JavaScript?",
      "После какого HTML тега нужно вставить JavaScript?",
      "В каком разделе можно вставить JavaScript?",
      "Как можно вывести сообщение \"Hello World!\" с помощью JavaScript?",
      "Как объявить функцию в JavaScript?",
      "Как вызвать функцию \"myFunction\"?"
    ];
  
    let userAnswers = [];
  
    for (let i = 0; i < quizQuestions.length; i++) {
      const userAnswer = prompt(quizQuestions[i]);
      userAnswers.push(userAnswer);
    }
  
    showQuizResults(quizQuestions, userAnswers);
  }
  
  function showQuizResults(questions, userAnswers) {
    let correctAnswers = 0;
    let quizResultHTML = "<h2>Результаты теста:</h2><ul>";
  
    for (let i = 0; i < questions.length; i++) {
      const isCorrect = checkAnswer(questions[i], userAnswers[i]);
      if (isCorrect) {
        correctAnswers++;
      }
  
      quizResultHTML += `<li>${questions[i]} - ${isCorrect ? 'Верно' : 'Неверно'}</li>`;
    }
  
    quizResultHTML += `</ul><p>Вы правильно ответили на ${correctAnswers} из ${questions.length} вопросов.</p>`;
  
    const resultContainer = document.getElementById("quizResults");
    resultContainer.innerHTML = quizResultHTML;
  }
  
  function checkAnswer(question, userAnswer) {
    const expectedAnswer = getExpectedAnswer(question);
    return userAnswer.toLowerCase().trim() === expectedAnswer.toLowerCase().trim();
  }
  
  function getExpectedAnswer(question) {
    const answers = {
      "Что такое JavaScript?": "язык программирования",
      "JavaScript и Java это одно и тоже?": "нет",
      "Где можно использовать JavaScript?": "Веб-приложения",
      "Какие функции выполняет JS?": "Создает разметку на странице сайта",
      "Какие циклы есть в языке JavaScript?": "for, while, do while",
      "После какого HTML тега нужно вставить JavaScript?": "<script>",
      "В каком разделе можно вставить JavaScript?":"<head> и <body>",
      "Как можно вывести сообщение \"Hello World!\" с помощью JavaScript?":"alert(\"Hello World\");",
      "Как объявить функцию в JavaScript?": "function MyFunction()",
      "Как вызвать функцию \"myFunction\"?": "myFunction()"
         };
  
    return answers[question];
  }
  
  function showSplashScreen() {
    const splashScreen = document.createElement("div");
    splashScreen.style.position = "fixed";
    splashScreen.style.top = "0";
    splashScreen.style.left = "0";
    splashScreen.style.width = "100%";
    splashScreen.style.height = "100%";
    splashScreen.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    splashScreen.style.color = "#fff";
    splashScreen.style.display = "flex";
    splashScreen.style.alignItems = "center";
    splashScreen.style.justifyContent = "center";
  
    const currentDate = new Date().toLocaleDateString();
    const username = localStorage.getItem("username");
    splashScreen.innerHTML = `<p>Дата: ${currentDate}</p> <p>Имя пользователя: ${username}</p>`;
  
    splashScreen.onclick = function() {
      document.body.removeChild(splashScreen);
    };
  
    document.body.appendChild(splashScreen);
  }

  
