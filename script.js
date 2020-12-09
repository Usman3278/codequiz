//DOM Selection//
let content = document.querySelector(".content");
let options = document.querySelector(".answer");
let count = document.querySelector(".timer");
let score = document.querySelector(".score");
let playBtn = document.querySelector("#play");
let highscore = document.querySelector(".highscore");
let topScore = document.querySelector(".top-score");
let opt1 = document.querySelector(".option1");
let opt2 = document.querySelector(".option2");
let opt3 = document.querySelector(".option3");
let opt4 = document.querySelector(".option4");
let name = document.querySelector("#name");
let submit = document.querySelector("#submit");
let repeat = document.querySelector("#repeat");
let timer = 120;
let currentScore = 0;
let allScores;

//Quiz Questtion//

const questions = {
  1: {
    q: "Which Programming Language Styles a Webpage?",
    opts: ["Html", "Css", "JavaScript", "JQuery"],
    ans: "CSS",
  },

  2: {
    q: "Which of these is Not a Primitive Data Type?",
    opts: ["Number", "String", "Float", "Boolean"],
    ans: "Float",
  },

  3: {
    q: "Which of the following is Not considered a JavaScript Operator?",
    opts: ["New", "This", "Delete", "Typeof"],
    ans: "This",
  },

  4: {
    q: "Using ___ Statement is how you test for a specific condition.",
    opts: ["if", "for", "select", "switch"],
    ans: "if",
  },

  5: {
    q: "The C in CSS stands for: ",
    opts: ["Coding", "Cursive", "Cascading", "Coded"],
    ans: "Cascading",
  },
  
  6: {
    q: "Which is not a JavaScript Framework?",
    opts: ["JQuery", "NodeJS", "Django", "Python Script"],
    ans: "Django",
  },

  7: {
    q: "Hyper Text Markup Language Stands for?",
    opts: ["HTML", "CSS", "JQuery", "XML"],
    ans: "HTML",
  },

  8: {
    q: "Which of these is not used to Loop?",
    opts: ["For", "Foreach", "While", "Sequence"],
    ans: "Sequence",
  },

  9: {
    q: "Which of these is not a Variable?",
    opts: ["Var", "Let", "Vet", "Const"],
    ans: "Vet",
  },

  10: {
    q: "Commonly used data type Does Not include?",
    opts: ["Booleans", "Strings", "Alerts", "Numbers"],
    ans: "Alerts",
  },
};

const scores = [];

//Start quiz function//

function startQuiz() {
  playBtn.style.visibility = "hidden";
  repeat.style.visibility = "hidden";
  score.style.visibility = "visible";
  options.style.visibility = "visible";
  content.textContent = questions[1].q;
  opt1.textContent = questions[1].opts[0];
  opt2.textContent = questions[1].opts[1];
  opt3.textContent = questions[1].opts[2];
  opt4.textContent = questions[1].opts[3];
  options.insertAdjacentElement("beforeend", opt1);
  options.insertAdjacentElement("beforeend", opt2);
  options.insertAdjacentElement("beforeend", opt3);
  options.insertAdjacentElement("beforeend", opt4);
  timerInt();
  runQuiz();
}
//Timer//

function timerInt() {
  setInterval(() => {
    if (timer === 0 || timer < 0) {
      count.textContent = "Time Left:" + timer + "  Score:" + currentScore;
      gameOver();
      return;
    }
    timer--;
    count.textContent = "Time Left:" + timer + "  Score:" + currentScore;
  }, 1000);
}
//
function checkAns(target) {

  if (content.textContent === questions[1].q) {
    if (target.textContent === questions[1].ans) {
      console.log(questions[1].ans);
      currentScore += 5;
      correctAns();
    } else {
      timer -= 15;
      wrongAns();
    }
  } 
    else if (content.textContent === questions[2].q) {
    if (target.textContent === questions[2].ans) {
      console.log(questions[2].ans);
      currentScore += 5;
      correctAns();
    } else {
      timer -= 15;
      wrongAns();
    }
  } 
    else if (content.textContent === questions[3].q) {
    if (target.textContent === questions[3].ans) {
      console.log(questions[3].ans);
      currentScore += 5;
      correctAns();
    } else {
      timer -= 15;
      wrongAns();
    }
  } 
    else if (content.textContent === questions[4].q) {
    if (target.textContent === questions[4].ans) {
      console.log(questions[4].ans);
      currentScore += 5;
      correctAns();
    } else {
      timer -= 15;
      wrongAns();
    }
  } 
    else if (content.textContent === questions[5].q) {
    if (target.textContent === questions[5].ans) {
      console.log(questions[5].ans);
      currentScore += 5;
      correctAns();
    } else {
      timer -= 15;
      wrongAns();
    }
  } 
    else if (content.textContent === questions[6].q) {
    if (target.textContent === questions[6].ans) {
      console.log(questions[6].ans);
      currentScore += 5;
      correctAns();
    } else {
      timer -= 15;
      wrongAns();
    }
  } 
    else if (content.textContent === questions[7].q) {
    if (target.textContent === questions[7].ans) {
      console.log(questions[7].ans);
      currentScore += 5;
      correctAns();
    } else {
      timer -= 15;
      wrongAns();
    }
  } 
    else if (content.textContent === questions[8].q) {
    if (target.textContent === questions[8].ans) {
      console.log(questions[8].ans);
      currentScore += 5;
      correctAns();
    } else {
      timer -= 15;
      wrongAns();
    }
  } 
    else if (content.textContent === questions[9].q) {
    if (target.textContent === questions[9].ans) {
      console.log(questions[9].ans);
      currentScore += 5;
      correctAns();
    } else {
      timer -= 15;
      wrongAns();
    }
  } 
    else if (content.textContent === questions[10].q) {
    if (target.textContent === questions[10].ans) {
      console.log(questions[10].ans);
      currentScore += 5;
      correctAns(true);
    } else {
      timer -= 15;
      wrongAns(true);
    }
  }
}

function correctAns(iffy) {
  if (iffy) {
    highscore.textContent = "";
    let correct = document.createElement("h2");
    correct.textContent = "Correct Answer";
    highscore.insertAdjacentElement("afterbegin", correct);
    highscore.style.visibility = "visible";
    highscore.style.visibility = "hidden";
    options.style.visibility = "hidden";
    topScore.style.visibility = "visible";
    nextQ();
  } else {
    highscore.textContent = "";
    let correct = document.createElement("h2");
    correct.textContent = "Correct Answer";
    highscore.insertAdjacentElement("afterbegin", correct);
    highscore.style.visibility = "visible";
    setInterval(() => {
      highscore.textContent = "";
      highscore.style.visibility = "hidden";
    }, 300);
    nextQ();
    console.log("done");
  }
}
function wrongAns(iffy) {
  if (iffy) {
    highscore.textContent = "";
    let correct = document.createElement("h2");
    correct.textContent = "Wrong Answer";
    highscore.insertAdjacentElement("afterbegin", correct);
    highscore.style.visibility = "visible";
    highscore.style.visibility = "hidden";
    options.style.visibility = "hidden";
    topScore.style.visibility = "visible";
    nextQ();
  } else {
    highscore.textContent = "";
    let correct = document.createElement("h2");
    correct.textContent = "Wrong Answer";
    highscore.insertAdjacentElement("afterbegin", correct);
    highscore.style.visibility = "visible";
    setInterval(() => {
      highscore.textContent = "";
      highscore.style.visibility = "hidden";
    }, 300);
    nextQ();
  }
}
function nextQ() {
  if (content.textContent === questions[1].q) {
    content.textContent = questions[2].q;
    opt1.textContent = questions[2].opts[0];
    opt2.textContent = questions[2].opts[1];
    opt3.textContent = questions[2].opts[2];
    opt4.textContent = questions[2].opts[3];
    options.insertAdjacentElement("beforeend", opt1);
    options.insertAdjacentElement("beforeend", opt2);
    options.insertAdjacentElement("beforeend", opt3);
    options.insertAdjacentElement("beforeend", opt4);
    console.log(content.textContent);
  } else if (content.textContent === questions[2].q) {
    content.textContent = questions[3].q;
    opt1.textContent = questions[3].opts[0];
    opt2.textContent = questions[3].opts[1];
    opt3.textContent = questions[3].opts[2];
    opt4.textContent = questions[3].opts[3];
    options.insertAdjacentElement("beforeend", opt1);
    options.insertAdjacentElement("beforeend", opt2);
    options.insertAdjacentElement("beforeend", opt3);
    options.insertAdjacentElement("beforeend", opt4);
    console.log(content.textContent);
  } else if (content.textContent === questions[3].q) {
    content.textContent = questions[4].q;
    opt1.textContent = questions[4].opts[0];
    opt2.textContent = questions[4].opts[1];
    opt3.textContent = questions[4].opts[2];
    opt4.textContent = questions[4].opts[3];
    options.insertAdjacentElement("beforeend", opt1);
    options.insertAdjacentElement("beforeend", opt2);
    options.insertAdjacentElement("beforeend", opt3);
    options.insertAdjacentElement("beforeend", opt4);
    console.log(content.textContent);
  } else if (content.textContent === questions[4].q) {
    content.textContent = questions[5].q;
    opt1.textContent = questions[5].opts[0];
    opt2.textContent = questions[5].opts[1];
    opt3.textContent = questions[5].opts[2];
    opt4.textContent = questions[5].opts[3];
    options.insertAdjacentElement("beforeend", opt1);
    options.insertAdjacentElement("beforeend", opt2);
    options.insertAdjacentElement("beforeend", opt3);
    options.insertAdjacentElement("beforeend", opt4);
    console.log(content.textContent);
  } else if (content.textContent === questions[5].q) {
    content.textContent = questions[6].q;
    opt1.textContent = questions[6].opts[0];
    opt2.textContent = questions[6].opts[1];
    opt3.textContent = questions[6].opts[2];
    opt4.textContent = questions[6].opts[3];
    options.insertAdjacentElement("beforeend", opt1);
    options.insertAdjacentElement("beforeend", opt2);
    options.insertAdjacentElement("beforeend", opt3);
    options.insertAdjacentElement("beforeend", opt4);
    console.log(content.textContent);
  } else if (content.textContent === questions[6].q) {
    content.textContent = questions[7].q;
    opt1.textContent = questions[7].opts[0];
    opt2.textContent = questions[7].opts[1];
    opt3.textContent = questions[7].opts[2];
    opt4.textContent = questions[7].opts[3];
    options.insertAdjacentElement("beforeend", opt1);
    options.insertAdjacentElement("beforeend", opt2);
    options.insertAdjacentElement("beforeend", opt3);
    options.insertAdjacentElement("beforeend", opt4);
    console.log(content.textContent);
  } else if (content.textContent === questions[7].q) {
    content.textContent = questions[8].q;
    opt1.textContent = questions[8].opts[0];
    opt2.textContent = questions[8].opts[1];
    opt3.textContent = questions[8].opts[2];
    opt4.textContent = questions[8].opts[3];
    options.insertAdjacentElement("beforeend", opt1);
    options.insertAdjacentElement("beforeend", opt2);
    options.insertAdjacentElement("beforeend", opt3);
    options.insertAdjacentElement("beforeend", opt4);
    console.log(content.textContent);
  } else if (content.textContent === questions[8].q) {
    content.textContent = questions[9].q;
    opt1.textContent = questions[9].opts[0];
    opt2.textContent = questions[9].opts[1];
    opt3.textContent = questions[9].opts[2];
    opt4.textContent = questions[9].opts[3];
    options.insertAdjacentElement("beforeend", opt1);
    options.insertAdjacentElement("beforeend", opt2);
    options.insertAdjacentElement("beforeend", opt3);
    options.insertAdjacentElement("beforeend", opt4);
    console.log(content.textContent);
  } else if (content.textContent === questions[9].q) {
    content.textContent = questions[10].q;
    opt1.textContent = questions[10].opts[0];
    opt2.textContent = questions[10].opts[1];
    opt3.textContent = questions[10].opts[2];
    opt4.textContent = questions[10].opts[3];
    options.insertAdjacentElement("beforeend", opt1);
    options.insertAdjacentElement("beforeend", opt2);
    options.insertAdjacentElement("beforeend", opt3);
    options.insertAdjacentElement("beforeend", opt4);
    console.log(content.textContent);
  } else if (content.textContent === questions[10].q) {
    gameOver();
  }
}
function gameOver() {
  if (content.childNodes === 0) {
    content.textContent = "Game Over";
  }
  highscore.style.visibility = "hidden";
  options.style.visibility = "hidden";
  topScore.style.visibility = "visible";
  score.style.visibility = "visible";
  submit.addEventListener("click", () => {
    console.log("post");
    playBtn.style.visibility = "hidden";
    topScore.style.visibility = "hidden";
    let currentPlayer = name.value;
    let point = {
      name: currentPlayer,
      score: currentScore,
    };
    scores.push(point);
    score.style.visibility = "hidden";
    for (i = 0; i < scores.length; i++) {
      content.textContent = "";
      let para = document.createElement("p");
      para.textContent = scores[i].name + " : " + scores[i].score;
      content.insertAdjacentElement("beforeend", para);
      allScores += para.textContent;
      console.log(allScores);
    }

    playAgain();
  });
}
function postScore() {
  console.log("post");
  playBtn.style.visibility = "hidden";
  topScore.style.visibility = "hidden";
  let currentPlayer = name.value;
  let point = {
    name: currentPlayer,
    score: currentScore,
  };
  scores.push(point);
  score.style.visibility = "hidden";
  for (i = 0; i < scores.length; i++) {
    content.textContent = "";
    let para = document.createElement("p");
    para.textContent = scores[i].name + " : " + scores[i].score;
    content.insertAdjacentElement("beforeend", para);
    allScores += para.textContent;
    console.log(allScores);
  }

  playAgain();
}

function playAgain() {
  highscore.style.visibility = "visible";
  topScore.style.visibility = "hidden";
  repeat.style.visibility = "visible";
  repeat.addEventListener("click", () => {
    startQuiz();
  });
}

function runQuiz() {
  options.addEventListener("click", (e) => {
    checkAns(e.target);
  });
}

//This buttom will start the quiz//
playBtn.addEventListener("click", startQuiz);
