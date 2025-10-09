/* ====================================================================================
   1. QUIZ DATA: Store all questions, options, and answers in an array of objects.
   Each object represents a single question.
   ==================================================================================== */
const questions = [
    {
        question: "World War II officially began when Germany invaded which country?",
        options: ["A. France", "B. Poland", "C. Austria", "D. Czechoslovakia"],
        answer: "B. Poland",
        type: "multiple-choice"
    },
    {
        question: "True or False: The United States entered World War II immediately after the German invasion of Poland.",
        options: ["True", "False"],
        answer: "False",
        type: "true-false"
    },
    {
        question: "The Allied invasion of Normandy on June 6, 1944, is famously known as D-Day.",
        answer: "D-Day",
        type: "fill-in-the-blank"
    },
    {
        question: "Who was the Prime Minister of the United Kingdom for most of World War II?",
        options: ["A. Neville Chamberlain", "B. Clement Attlee", "C. Winston Churchill", "D. Anthony Eden"],
        answer: "C. Winston Churchill",
        type: "multiple-choice"
    },
    {
        question: "True or False: Adolf Hitler committed suicide in his bunker after the Battle of Berlin.",
        options: ["True", "False"],
        answer: "True",
        type: "true-false"
    },
    {
        question: "The decisive naval battle in the Pacific, considered the turning point of the war against Japan, was the Battle of Midway.",
        answer: "Midway",
        type: "fill-in-the-blank"
    },
    {
        question: "The two Japanese cities targeted by atomic bombs in August 1945 were Hiroshima and...",
        options: ["A. Tokyo", "B. Nagasaki", "C. Okinawa", "D. Kyoto"],
        answer: "B. Nagasaki",
        type: "multiple-choice"
    },
    {
        question: "True or False: The Battle of Britain was primarily fought between naval fleets in the English Channel.",
        options: ["True", "False"],
        answer: "False",
        type: "true-false"
    },
    {
        question: "The surprise Japanese attack on the U.S. naval base at Pearl Harbor brought the United States into the war.",
        answer: "Pearl Harbor",
        type: "fill-in-the-blank"
    },
    {
        question: "What was the name of the German Air Force during the Second World War?",
        options: ["A. Kriegsmarine", "B. Wehrmacht", "C. Luftwaffe", "D. Schutzstaffel (SS)"],
        answer: "C. Luftwaffe",
        type: "multiple-choice"
    }
];

/* ====================================================================================
   2. DOM ELEMENT REFERENCES
   Store references to all the HTML elements that the JavaScript code will interact with.
   This is an efficient practice that prevents repeated searches of the DOM.
   ==================================================================================== */

// References to the quiz sections
const howToPage = document.getElementById("how-to-page");
const quizArea = document.getElementById("quiz-area");
const resultsArea = document.getElementById("results-area");

// References for buttons
const startQuizBtn = document.getElementById("start-quiz-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const retakeQuizBtn = document.getElementById("retake-quiz-btn");

// References for content within the quiz and results areas
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const currentQuestionNumber = document.getElementById("current-question-number");
const correctAnswersCount = document.getElementById("correct-answers-count");
const finalScore = document.getElementById("final-score");


/* ====================================================================================
   3. GLOBAL VARIABLES
   Initialize variables needed to track the quiz state throughout the game.
   ==================================================================================== */

let currentQuestionIndex = 0; // Tracks the current question the user is on
let score = 0; // Tracks the user's score