let questions =
    [
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "The song &quot;Twin Size Mattress&quot; was written by which band?",
            "correct_answer": "The Front Bottoms",
            "answers": ["The Front Bottoms", "Twenty One Pilots", "The Wonder Years", "The Smith Street Band"]
        },
        {
            "category": "Vehicles",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which Japanese company is the world&#039;s largest manufacturer of motorcycles?",
            "correct_answer": "Honda",
            "answers": ["Yamaha", "Suzuki", "Kawasaki", "Honda"]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which of the following buildings is example of a structure primarily built in the Art Deco architectural style?",
            "correct_answer": "Niagara Mohawk Building",
            "answers": ["Niagara Mohawk Building", "Taipei 101", "One Detroit Center", "Westendstrasse 1"]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "easy",
            "question": "In most FPS video games such as Counter-Strike, shooting which part of the body does the highest damage?",
            "correct_answer": "Head",
            "answers": ["Arm", "Leg", "Chest", "Head"]
        },
        {
            "category": "General Knowledge",
            "type": "boolean",
            "difficulty": "medium",
            "question": "The term &quot;Spam&quot; came before the food product &quot;Spam&quot;.",
            "correct_answer": "False",
            "answers": ["True", "False"]
        },
        {
            "category": "Entertainment: Television",
            "type": "multiple",
            "difficulty": "easy",
            "question": "In the show Stranger Things, what is Eleven&#039;s favorite breakfast food?",
            "correct_answer": "Eggo Waffles",
            "answers": ["Toast", "Captain Crunch", "Bacon and Eggs", "Eggo Waffles"]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "In the game Paper Mario for the Nintendo 64 the first partner you meet is a Goomba, what is its name?",
            "correct_answer": "Goombario",
            "answers": ["Goombella", "Goombarry", "Goomby", "Goombario"]
        },
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "easy",
            "question": "When was Google founded?",
            "correct_answer": "September 4, 1998",
            "answers": ["October 9, 1997", "December 12, 1989", "Feburary 7th, 2000", "September 4, 1998"]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which is not a playable character in the 2005 video game Killer7?",
            "correct_answer": "Frank Smith",
            "answers": ["Frank Smith", "Mask de Smith", "Dan Smith", "Coyote Smith"]
        },
        {
            "category": "Geography",
            "type": "boolean",
            "difficulty": "medium",
            "question": "The capital of the US State Ohio is the city of Chillicothe.",
            "correct_answer": "False",
            "answers": ["True", "False"]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which company did Bethesda purchase the Fallout Series from?",
            "correct_answer": "Interplay Entertainment",
            "answers": ["Capcom", "Interplay Entertainment", "Blizzard Entertainment", "Nintendo"]
        },
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which iconic album cover features the pulsar waves of CP 1919 placed in the center of the cover?",
            "correct_answer": "Unknown Pleasures",
            "answers": ["The Dark Side of the Moon", "Unknown Pleasures", "London Calling", "The Velvet Underground &amp; Nico"]
        },
        {
            "category": "Politics",
            "type": "boolean",
            "difficulty": "medium",
            "question": "During the 2016 United States presidential election, the State of California possessed the most electoral votes, having 55.",
            "correct_answer": "True",
            "answers": ["False", "True"]
        },
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Who was the first prime minister of Canada?",
            "correct_answer": "John Macdonald",
            "answers": ["John Macdonald", "John Abbott", "Alexander Mackenzie", "Robert Borden"]
        },
        {
            "category": "Geography",
            "type": "multiple",
            "difficulty": "medium",
            "question": "The land mass of modern day Turkey is called what?",
            "correct_answer": "Anatolia",
            "answers": ["Anatolia", "Ismuth of Ottoma", "Ottoma", "Ismuth of Anatolia"]
        },
        {
            "category": "Sports",
            "type": "boolean",
            "difficulty": "easy",
            "question": "In association football, or soccer, a corner kick is when the game restarts after someone scores a goal.",
            "correct_answer": "False",
            "answers": ["True", "False"]
        },
        {
            "category": "Entertainment: Film",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Who played the Cenobite called &quot;Pinhead&quot; in the original Hellraiser films?",
            "correct_answer": "Doug Bradley",
            "answers": ["Doug Bradley", "Doug Jones", "Doug Savant", "Doug Benson"]
        },
        {
            "category": "Geography",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which of these countries is the smallest by population?",
            "correct_answer": "Norway",
            "answers": ["Slovakia", "Norway", "Finland", "Hong Kong"]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which internet company began life as an online bookstore called &#039;Cadabra&#039;?",
            "correct_answer": "Amazon",
            "answers": [
                "eBay",
                "Overstock",
                "Shopify",
                "Amazon"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Generally, which component of a computer draws the most power?",
            "correct_answer": "Video Card",
            "answers": [
                "Hard Drive",
                "Processor",
                "Power Supply",
                "Video Card"
            ]
        }];

let next = document.querySelector('.next');
let previous = document.querySelector('.previous');

let question = document.querySelector('.question');
let answers = document.querySelectorAll('.list-group-item');

let pointsElem = document.querySelector('.score');
let restart = document.querySelector('.restart');

let numberOfQuestion = document.querySelector('.numberOfQuestion');
let list = document.querySelector('.list');
let results = document.querySelector('.results');
let userScorePoint = document.querySelector('.userScorePoint');
let average = document.querySelector('.average');
let progress = document.querySelector('.progress');

let preQuestions;
let index = 0;
let points = 0;
let checkAnswers;

fetch('https://quiztai.herokuapp.com/api/quiz')
    .then(resp => resp.json())
    .then(resp => {
        preQuestions = resp;
        initData();
    }).catch((e) => {
    console.log('There is an error while fetching data... Getting data from local variable...', e);
    preQuestions = questions;
    initData();
});

function initData() {
    progress.style.display = 'block';
    progress.max = preQuestions.length;
    progress.value = 1;
    list.style.display = 'block';
    checkAnswers = new Array(preQuestions.length);
    setQuestion(index);
}

function activateAnswers() {
    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener('click', doAction);
    }
}

function setQuestion(index) {
    clearClass();
    numberOfQuestion.innerHTML = `${index + 1} / ${preQuestions.length}`;
    question.innerHTML = preQuestions[index].question;
    let answersLength = preQuestions[index].answers.length;

    activateAnswers();
    // Funkcja wyświetla odpowiednią liczbę pytań, w zależności od ilości pytań.
    // Możliwe jest cofnięcie się do pytania:
    // * jeżeli zaznaczyliśmy już odpowiedź, możliwe jest tylko podglądnięcie pytania
    // * jeżeli nie zaznaczyliśmy jeszcze odpowiedzi możemy ją zaznaczyć
    for (let i = 0; i < 4; i++) {
        if (i < answersLength) {
            answers[i].innerHTML = preQuestions[index].answers[i];
            answers[i].style.display = 'block';
            if(checkAnswers[index] === answers[i].innerHTML) {
                if (checkAnswers[index] === preQuestions[index].correct_answer) {
                    markCorrect(answers[i]);
                } else {
                    markInCorrect(answers[i]);
                }
                disableAnswers();
            }
        } else {
            answers[i].style.display = 'none';
        }
    }
}

next.addEventListener('click', function () {
    if (index < preQuestions.length - 1) {
        index++;
        setQuestion(index);
        progress.value = index + 1;
    } else {
        console.log("Saving data to local storage...");
        saveResultToLocalStorage();
        list.style.display = 'none';
        results.style.display = 'block';
        userScorePoint.innerHTML = points;

        //Wyświetlanie średniej do dwóch miejsc po przecinku
        average.innerHTML = parseFloat(localStorage.getItem('averageResult')).toFixed(2).toString();
    }
});

previous.addEventListener('click', function () {
    if (index > 0) {
        index--;
        progress.value = index + 1;
        setQuestion(index);
    }
});

restart.addEventListener('click', function (event) {
    event.preventDefault();
    index = 0;
    points = 0;
    progress.value = 1;

    let userScorePoint = document.querySelector('.score');
    userScorePoint.innerHTML = points;

    initData();
    list.style.display = 'block';
    results.style.display = 'none';
});

function saveResultToLocalStorage() {
    const savedResult = localStorage.getItem('averageResult');
    const gamesCount = localStorage.getItem('gamesCount');

    if (savedResult === null) {
        localStorage.setItem('averageResult', points);
        localStorage.setItem('gamesCount', '1');
    } else {
        const sum = parseFloat(savedResult) * parseInt(gamesCount);
        const averageResult = (sum + points) / (parseInt(gamesCount) + 1);
        localStorage.setItem('averageResult', averageResult.toString());
        localStorage.setItem('gamesCount', parseInt(gamesCount) + 1);
    }
}

function doAction(event) {
    if (event.target.innerHTML === preQuestions[index].correct_answer) {
        points++;
        pointsElem.innerText = points;
        markCorrect(event.target);
    } else {
        markInCorrect(event.target);
    }
    disableAnswers();
    checkAnswers[index] = event.target.innerHTML;
}

function markCorrect(elem) {
    elem.classList.add('correct');
}

function markInCorrect(elem) {
    elem.classList.add('incorrect');
}

function disableAnswers() {
    for (let i = 0; i < answers.length; i++) {
        answers[i].removeEventListener('click', doAction);
    }
}

function clearClass() {
    for (let i = 0; i < answers.length; i++) {
        answers[i].classList.remove('correct', 'incorrect');
    }
}
