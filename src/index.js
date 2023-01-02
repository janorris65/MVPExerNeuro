// Imports
import { OneExer } from "./exercises";
let exerarray = OneExer;
import { One } from "./questions";
let cardQuestArray = One;
import { Two } from "./questions";
let wordsSynonymsAntonymsDefineQuestArray = Two;
import { Three } from "./questions";
let mathBasicQuestionsArray = Three;
import { Four } from "./questions";
let mathStrategyQuestionsArray = Four;
import { Five } from "./questions";
let literatureQuestionsArray = Five;

// declarations

let time;
let NumberExercises;
// 'type' does nothing now
let type;
let cognitiveArray = [];
let cognitiveCounter = 0;
let resultsArray = [];
let date = Date.now() % 1000;
let timePerExercise;
let exerciseCounter = 0;
let resetTime;
let repCounter = 0;
let highScoreStringify;
let highScoreParse;
let countingArray;
let i;
let userName;
let timerDown;
$("#cognitiveArrayLength").hide();
$("#startbutton").hide();
//$("main").hide();
//$("header div").hide();
$("article").hide();
$("aside").hide();
$("#finals").hide();
$("#exerciseInstructions2").hide();

// code block for entry page
/*$("#userYes").on("click", function (event) {
  $("header div").show();
});
$("#userNo").on("click", function (event) {
  $("header div").show();
});*/
$("#userNameEnter").on("click", function (event) {
  userName = $("#userName").val();
  localStorage.setItem("userName", userName);
  console.log(userName);
  console.log(localStorage.getItem("userName"));
  //$("main").show();
  //$("header").hide();
});

// code block for Start screen/creates workout
$("#searchme").on("click", function (event) {
  time = $("#time").val();
  NumberExercises = $("#NumberExercises").val();
  console.log(time);
  console.log(NumberExercises);
  $("#startbutton").show();
  $("main").hide();
  $("ul").show();
  timeForEach(time, NumberExercises);
  callmusclefunction(NumberExercises, exerarray);
});

// buttons for inputs for workout (only body weight currently) and cognitive array building, and display to page with '.text' and '.show'
$("#bodyWeightBtn").on("click", function (event) {
  type = "BodyWeight";
  console.log(type);
});
// For Memory Cards
$("#memoryBtn").on("click", function (event) {
  let y =
    Math.floor(date * Math.random() * (date * 1000000)) % cardQuestArray.length;
  let cognitive = cardQuestArray[y];
  cognitiveArray.push(cognitive);
  $("#cognitiveArrayLength").text(
    `${cognitiveArray.length} Cognitive Exercises`
  );

  $("#cognitiveArrayLength").show();
});
// For Word Relations
$("#wordsBtn").on("click", function (event) {
  let y =
    Math.floor(date * Math.random() * (date * 1000000)) %
    wordsSynonymsAntonymsDefineQuestArray.length;
  let cognitive = wordsSynonymsAntonymsDefineQuestArray[y];
  cognitiveArray.push(cognitive);
  $("#cognitiveArrayLength").text(
    `${cognitiveArray.length} Cognitive Exercises`
  );

  $("#cognitiveArrayLength").show();
});
// For Math Basic
$("#mathBasicBtn").on("click", function (event) {
  let y =
    Math.floor(date * Math.random() * (date * 1000000)) %
    mathBasicQuestionsArray.length;
  let cognitive = mathBasicQuestionsArray[y];
  cognitiveArray.push(cognitive);
  $("#cognitiveArrayLength").text(
    `${cognitiveArray.length} Cognitive Exercises`
  );

  $("#cognitiveArrayLength").show();
});
// For Math Strategy
$("#mathEstimateBtn").on("click", function (event) {
  let y =
    Math.floor(date * Math.random() * (date * 1000000)) %
    mathStrategyQuestionsArray.length;
  let cognitive = mathStrategyQuestionsArray[y];
  cognitiveArray.push(cognitive);
  $("#cognitiveArrayLength").text(
    `${cognitiveArray.length} Cognitive Exercises`
  );

  $("#cognitiveArrayLength").show();
});
// For Literature
$("#literatureBtn").on("click", function (event) {
  let y =
    Math.floor(date * Math.random() * (date * 1000000)) %
    literatureQuestionsArray.length;
  let cognitive = literatureQuestionsArray[y];
  cognitiveArray.push(cognitive);
  $("#cognitiveArrayLength").text(
    `${cognitiveArray.length} Cognitive Exercises`
  );

  $("#cognitiveArrayLength").show();
});

// code block that runs the workout
$("#startbutton").on("click", function (event) {
  console.log(resultsArray);
  console.log(timePerExercise);
  $("ul").hide();
  $("#startbutton").hide();
  $("article").show();
  countdown(timePerExercise);
  //displayExerciseFunction();
  displayCognitiveFunction(cognitiveCounter);
});
// code block to advance the Cognitive Questions with cognitiveCounter
$("#cognitiveNext").on("click", function (event) {
  cognitiveCounter++;
  $("p #array").remove();
  displayCognitiveFunction(cognitiveCounter);
});
// code block to "Extend Workout"
$("#extendExercise").on("click", function (event) {
  $("#extendExercise").hide();
  NumberExercises = 2;
  callmusclefunction(NumberExercises, exerarray);
  $("#startbutton").show();
});
// code block to skip exercise
$("#exerciseSkip").on("click", function (event) {
  exerciseCounter++;
  clearInterval(timerDown);
  countdown(timePerExercise);
});

// code block to tally reps
$("#repCount").on("click", function (event) {
  repCounter = repCounter + 10;
  $("#reps").text("Rep Count: " + repCounter);
});

// code block to finish exercise
$("#finishExercise").on("click", function (event) {
  $("aside").hide();
  $("#finals").show();
  $("#Congrats").text("Great Workout " + localStorage.getItem("userName"));
  $("#repsFinal").text("Total Rep Count:" + repCounter);
  saveDisplayScores(localStorage.getItem("userName", repCounter));
  $("ul li").remove();
});

// code block to buyNow function
$("#buyNow").on("click", function (event) {
  $("#finals").hide();
  //localStorage.clear("userName");
  $("header").show();
  repCounter = 0;
  countingArray = 0;
  resultsArray = [];
  exerciseCounter = 0;
  $("#reps").text("");
  $("main").show();
  cognitiveArray = [];
  $("#cognitiveArrayLength").hide();
});

// code block to reStart button
$("#reStart").on("click", function (event) {
  $("#finals").hide();
  //localStorage.clear("userName");
  $("header").show();
  repCounter = 0;
  countingArray = 0;
  resultsArray = [];
  exerciseCounter = 0;
  $("#reps").text("");
  $("main").show();
  cognitiveArray = [];
  $("#cognitiveArrayLength").hide();
});
// function to create exercises chosen, 'resultsArray'
function callmusclefunction(NumberExercises, exerarray) {
  if (exerarray.length > NumberExercises) {
    for (i = 0; i < NumberExercises; i++) {
      countingArray =
        Math.floor(date * Math.random() * (i + date * 1000000)) %
        exerarray.length;
      let randomChosenExercise = exerarray[countingArray];
      resultsArray.push(randomChosenExercise);
    }
    resultsArray.forEach(function (element) {
      let elInstructions =
        "<p id='hiddenIns'>" + element.getInstruction() + "</p>";
      $("ul").append("<li>" + element.getName() + "<li>" + elInstructions);
      $("li p").hide();
      $("ul").on("click", function (event) {
        $("li p").toggle();
        console.log(event.target);
      });
    });
  }
}
// Function to divide time
function timeForEach(time, NumberExercises) {
  timePerExercise = Math.floor((time / NumberExercises) * 60);
  resetTime = timePerExercise;
  console.log(timePerExercise);
  console.log(resetTime);
}
// function to run the timer and cycle the display function
function countdown(timeVariable) {
  timerDown = setInterval(function () {
    timeVariable--;
    $("#timer").text(timeVariable);
    console.log(timeVariable);
    if (timeVariable <= 0) {
      exerciseCounter++;
      clearInterval(timerDown);
      countdown(resetTime);
    } else if (exerciseCounter == resultsArray.length) {
      console.log("countdowntimearray");
      clearInterval(timerDown);
    }
    displayExerciseFunction(exerciseCounter);
    //displayCognitiveFunction(cognitiveCounter);
  }, 1000);
}
// function to display the exercise
function displayExerciseFunction() {
  if (exerciseCounter == resultsArray.length) {
    $("article").hide();
    $("aside").show();
  } else {
    $("#Exercise").text(resultsArray[exerciseCounter].getName());
    $("#exerciseInstructions2").text(
      resultsArray[exerciseCounter].getInstruction()
    );
    $("#exerciseInstructions1").on("click", function (event) {
      $("#exerciseInstructions2").show();
      $("#exerciseInstructions1").hide();
    });
    $("#exerciseInstructions2").on("click", function (event) {
      $("#exerciseInstructions2").hide();
      $("#exerciseInstructions1").show();
    });
  }
}
// Function to display the Cognitive Exercise
function displayCognitiveFunction() {
  if (cognitiveCounter == cognitiveArray.length) {
    $("#cognitiveName").hide();
    $("#cognitiveComponents").hide();
    $("#cognitiveInstructions").text("Can you recall your answers?");
  } else {
    $("#cognitiveName").text(cognitiveArray[cognitiveCounter].getTitle());
    $("#cognitiveInstructions").text(
      cognitiveArray[cognitiveCounter].getInstructions()
    );
    $("#cognitiveComponents").append(
      cognitiveArray[cognitiveCounter].getDisplay()
    );
  }
}
// code block and function for high score
function saveDisplayScores(username, repcounter) {
  repcounter = repCounter;
  const highScoreSet = {
    scoreUserName: username,
    scoreRepCounter: repcounter,
  };
  let scorelist = [];
  scorelist.push(highScoreSet);
  console.log(highScoreSet);
  console.log(scorelist);
  localStorage.setItem("list", JSON.stringify(scorelist));
  highScoreStringify = localStorage.getItem("list");
  highScoreParse = JSON.parse(highScoreStringify);
  highScoreParse.forEach(function (element) {
    $("#highscore").append(
      "<li>" + element.scoreUserName + ", " + element.scoreRepCounter
    );
  });
}
