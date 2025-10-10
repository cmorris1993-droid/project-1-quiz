/* ====================================================================================
   1. QUIZ DATA: Store all questions, options, and answers in an array of objects.
   Each object represents a single question.
   ==================================================================================== */
const questions = [
    {
        question: "World War II officially began when Germany invaded which country?",
        options: ["A. France", "B. Poland", "C. Austria", "D. Czechoslovakia"],
        answer: "B. Poland",
        type: "multiple-choice",
        explanation: "Germany's invasion of Poland on September 1, 1939, prompted Britain and France to declare war, marking the official start of WWII in Europe."
    },
    {
        question: "True or False: The United States entered World War II immediately after the German invasion of Poland.",
        options: ["True", "False"],
        answer: "False",
        type: "true-false",
        explanation: "False. The U.S. remained officially neutral until the surprise attack on Pearl Harbor more than two years later, in December 1941."
    },
    {
        question: "The Allied invasion of Normandy on June 6, 1944, is famously known as _____.",
        answer: "D-Day",
        type: "fill-in-the-blank",
        explanation: "D-Day (Operation Overlord) was the massive Allied invasion that opened a crucial second front against Germany in Western Europe."
    },
    {
        question: "Who was the Prime Minister of the United Kingdom for most of World War II?",
        options: ["A. Neville Chamberlain", "B. Clement Attlee", "C. Winston Churchill", "D. Anthony Eden"],
        answer: "C. Winston Churchill",
        type: "multiple-choice",
        explanation: "Winston Churchill took office in May 1940 and served as the Prime Minister through the majority of the war, providing essential leadership."
    },
    {
        question: "True or False: Adolf Hitler committed suicide in his bunker after the Battle of Berlin.",
        options: ["True", "False"],
        answer: "True",
        type: "true-false",
        explanation: "True. Facing defeat, Hitler committed suicide in his Berlin bunker (the Führerbunker) on April 30, 1945, just before the city fell to the Soviets."
    },
    {
        question: "The decisive naval battle in the Pacific, considered the turning point of the war against Japan, was the Battle of _____.",
        answer: "Midway",
        type: "fill-in-the-blank",
        explanation: "The Battle of Midway (June 1942) was a decisive victory for the U.S. Navy, sinking four Japanese aircraft carriers and permanently shifting the balance of naval power in the Pacific."
    },
    {
        question: "The two Japanese cities targeted by atomic bombs in August 1945 were Hiroshima and...",
        options: ["A. Tokyo", "B. Nagasaki", "C. Okinawa", "D. Kyoto"],
        answer: "B. Nagasaki",
        type: "multiple-choice",
        explanation: "The first bomb was dropped on Hiroshima (August 6) and the second was dropped on Nagasaki (August 9), leading to Japan's surrender."
    },
    {
        question: "True or False: The Battle of Britain was primarily fought between naval fleets in the English Channel.",
        options: ["True", "False"],
        answer: "False",
        type: "true-false",
        explanation: "False. The Battle of Britain (1940) was primarily an air campaign fought between the RAF (Royal Air Force) and the German Luftwaffe."
    },
    {
        question: "The surprise Japanese attack on the U.S. naval base at _____ brought the United States into the war.",
        answer: "Pearl Harbor",
        type: "fill-in-the-blank",
        explanation: "The attack on Pearl Harbor on December 7, 1941, led the U.S. to formally declare war on Japan and enter WWII."
    },
    {
        question: "What was the name of the German Air Force during the Second World War?",
        options: ["A. Kriegsmarine", "B. Wehrmacht", "C. Luftwaffe", "D. Schutzstaffel (SS)"],
        answer: "C. Luftwaffe",
        type: "multiple-choice",
        explanation: "The Luftwaffe was the aerial warfare branch of the German Wehrmacht (armed forces) throughout WWII."
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
// *** NEW: Explanation Page Reference ***
const explanationsArea = document.getElementById("explanations-area"); 

// References for buttons
const startQuizBtn = document.getElementById("start-quiz-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const retakeQuizBtn = document.getElementById("retake-quiz-btn");
const homeBtnQuiz = document.getElementById("home-btn-quiz");
const homeBtnResults = document.getElementById("home-btn-results");
// *** NEW: Explanation Page Buttons ***
const reviewAnswersBtn = document.getElementById("review-answers-btn");
const homeBtnExplanations = document.getElementById("home-btn-explanations"); 

// References for content within the quiz and results areas
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const currentQuestionNumber = document.getElementById("current-question-number");
const correctAnswersCount = document.getElementById("correct-answers-count");
const finalScore = document.getElementById("final-score");
// *** NEW: Explanation Page Content References ***
const incorrectCount = document.getElementById("incorrect-count");
const explanationsContent = document.getElementById("explanations-content"); 


/* ====================================================================================
   3. GLOBAL VARIABLES
   Initialize variables needed to track the quiz state throughout the game.
   ==================================================================================== */

let currentQuestionIndex = 0; // Tracks the current question the user is on
let score = 0; // Tracks the user's score
let incorrectAnswers = []; // Stores details of incorrectly answered questions

/* ====================================================================================
   4. CORE FUNCTIONS
   Functions to manage the state and display of the quiz.
   ==================================================================================== */

/**
 * Initializes the quiz by shuffling questions, hiding the intro, and showing the quiz area.
 * This is the first function called when the user clicks 'Start Quiz'.
 * ***FIXED: Resets incorrectAnswers array here, instead of showResults.***
 */
function startQuiz() {
    // Shuffling the questions array to meet the randomness requirement
    shuffleQuestions(questions);

    // Resetting quiz state
    currentQuestionIndex = 0;
    score = 0;
    incorrectAnswers = []; // <-- CORRECTED: Resetting the incorrect answers array here

    // Hiding the 'How To' page and showing the 'Quiz Area'
    howToPage.classList.add('hidden');
    quizArea.classList.remove('hidden');

    // Load the first question
    loadQuestion();
}

/**
 * Utility function to shuffle an array (Fisher-Yates algorithm for efficient shuffling).
 * This meets the project requirement that questions should be loaded at random every time.
 */
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Pick a random remaining element
        const j = Math.floor(Math.random() * (i + 1));
        
        // Swap it with the current element
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Loads the current question and displays it on the page.
 * Handles display logic for multiple-choice/true-false vs. fill-in-the-blank.
 */
function loadQuestion() {
    // Check if we are past the last question
    if (currentQuestionIndex >= questions.length) {
        // If all questions are done, show the results screen
        showResults(); 
        return;
    }

    // Get the current question object
    const currentQuestion = questions[currentQuestionIndex];

    // Update the question number display
    currentQuestionNumber.textContent = currentQuestionIndex + 1;

    // Set the question text
    questionText.textContent = currentQuestion.question;

    // Clear any previous options/input fields
    optionsContainer.innerHTML = '';

    // Check the type of question to determine how to display the options
    if (currentQuestion.type === 'multiple-choice' || currentQuestion.type === 'true-false') {
        // If it's multiple-choice or true/false, create buttons for options
        createOptionButtons(currentQuestion);
    } else if (currentQuestion.type === 'fill-in-the-blank') {
        // If it's fill-in-the-blank, create an input field
        createFillInTheBlankInput();
    }
    
    // Manage visibility of the 'Next' and 'Submit' buttons
    // The 'Submit' button should only be visible on the last question
    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
    }
}

/**
 * Creates and appends buttons for multiple-choice and true/false questions.
 * @param {object} question The current question object.
 */
function createOptionButtons(question) {
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn'); // Use a class for CSS styling and targeting
        button.setAttribute('data-answer', option); // Store the answer text on the button
        optionsContainer.appendChild(button);
    });
}

/**
 * Creates and appends an input field for fill-in-the-blank questions.
 */
function createFillInTheBlankInput() {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Type your answer here...';
    input.id = 'fill-in-input'; // Give it a specific ID for easy targeting when checking the answer
    input.classList.add('fill-in-input');
    optionsContainer.appendChild(input);
}

/**
 * Checks the user's selected or typed answer against the correct answer.
 * @param {string} userAnswer The answer provided by the user.
 */
function checkAnswer(userAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    let correctAnswer = currentQuestion.answer;
    let isCorrect = false;

    // Normalize answers for comparison, especially for fill-in-the-blank
    if (currentQuestion.type === 'fill-in-the-blank') {
        // Trim whitespace and convert to lowercase for flexible checking
        const normalizedUserAnswer = userAnswer.trim().toLowerCase();
        const normalizedCorrectAnswer = correctAnswer.trim().toLowerCase();
        
        // Check against the primary answer
        isCorrect = normalizedUserAnswer === normalizedCorrectAnswer;

        // FIX: Check for alternate spelling (Harbour vs. Harbor)
        if (!isCorrect && normalizedCorrectAnswer === 'pearl harbor') {
            if (normalizedUserAnswer === 'pearl harbour') {
                isCorrect = true;
            }
        }
    } else {
        // For multiple-choice and true/false, a direct string comparison is fine
        isCorrect = userAnswer === correctAnswer;
    }

    if (isCorrect) {
        score++; // Increment the score if the answer is correct
    } else {
        // *** Store the question details if the answer was incorrect ***
        incorrectAnswers.push({
            question: currentQuestion.question,
            correctAnswer: currentQuestion.answer,
            explanation: currentQuestion.explanation,
            userAnswer: userAnswer || 'N/A' // Store the user's input for review
        });
    }

    // Move to the next question
    currentQuestionIndex++;
    
    loadQuestion();
}

/**
 * Handles the logic for showing the final results screen.
 * *** CORRECTED: This function no longer resets the incorrectAnswers array. ***
 */
function showResults() {
    // Hide the quiz area and show the results area
    quizArea.classList.add('hidden');
    resultsArea.classList.remove('hidden');

    // Update the final score displayed in the HTML
    correctAnswersCount.textContent = score;
    finalScore.textContent = `${score} / ${questions.length}`; 
    
    // Manage visibility of the 'Review Answers' button
    if (incorrectAnswers.length === 0) {
        reviewAnswersBtn.classList.add('hidden'); // Hide if perfect score (0 wrong)
    } else {
        reviewAnswersBtn.classList.remove('hidden'); // Show if user got some wrong
    }
}


/**
 * Generates and displays the detailed review page for incorrect answers.
 */
function showExplanations() {
    // Hide the results area and show the explanations area
    resultsArea.classList.add('hidden');
    explanationsArea.classList.remove('hidden');

    // Update the incorrect count in the intro message
    incorrectCount.textContent = incorrectAnswers.length;

    // Clear previous content
    explanationsContent.innerHTML = ''; 

    if (incorrectAnswers.length === 0) {
        explanationsContent.innerHTML = '<p>You got every question correct! No review needed.</p>';
        return;
    }

    // Generate HTML for each incorrect question
    incorrectAnswers.forEach((item, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item'); // Add a class for styling

        reviewItem.innerHTML = `
            <h4 class="review-question">Question ${index + 1}: ${item.question}</h4>
            <p class="user-answer">Your Answer: <span class="user-answer-text">${item.userAnswer}</span></p>
            <p class="correct-answer">Correct Answer: <span class="correct-answer-text">${item.correctAnswer}</span></p>
            <p class="explanation-text">${item.explanation}</p>
        `;

        explanationsContent.appendChild(reviewItem);
    });
}


/**
 * Resets the state and navigates back to the initial 'How To' page.
 */
function goToHome() {
    // Hide all main content areas
    quizArea.classList.add('hidden');
    resultsArea.classList.add('hidden');
    explanationsArea.classList.add('hidden'); 
    
    // Show the landing page
    howToPage.classList.remove('hidden');

    // Reset score and index 
    currentQuestionIndex = 0;
    score = 0;
    // We don't need to reset incorrectAnswers here because it's reset in startQuiz()
}

/**
 * Determines the user's answer from the input/selection and calls checkAnswer.
 * This function is now ONLY used for fill-in-the-blank questions.
 * The optionsContainer listener handles multiple-choice/true-false advancement.
 */
function handleNext() {
    const currentQuestion = questions[currentQuestionIndex];
    
    // We only need to process logic here for fill-in-the-blank
    if (currentQuestion.type === 'fill-in-the-blank') {
        // Get input from the text field
        const inputElement = document.getElementById('fill-in-input');
        
        // Ensure the user has typed something (basic validation)
        if (!inputElement || inputElement.value.trim() === '') {
            alert('Please type an answer before proceeding!');
            return; // Stop execution if input is empty
        }
        
        // Get the answer and check it
        let userAnswer = inputElement.value;
        checkAnswer(userAnswer);

    } else {
        // ERROR TRAP: If 'Next' is clicked on a multiple-choice/true-false question, 
        // it means the user advanced without selecting an option, so we should warn them
        alert("Please select an option before using the Next button. (The quiz will advance automatically when an option is selected.)");
        return; 
    }
}

/* ====================================================================================
   5. EVENT LISTENERS
   Attach event handlers to buttons to control the flow of the quiz.
   ==================================================================================== */

// 1. Controls the flow from the intro screen
startQuizBtn.addEventListener('click', startQuiz);

// 2. Controls advancing the quiz (handles options/input)
nextBtn.addEventListener('click', handleNext);
submitBtn.addEventListener('click', handleNext); // Submit acts like 'Next' but leads to results

// 3. Allows retaking the quiz from the results screen
retakeQuizBtn.addEventListener('click', startQuiz); 

// 4. Delegation for dynamically created option buttons
optionsContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('option-btn')) {
        // Pass the answer value stored in the data-answer attribute
        checkAnswer(event.target.getAttribute('data-answer'));
    }
});

// *** NEW: Explanation Page Listeners ***
reviewAnswersBtn.addEventListener('click', showExplanations);
homeBtnExplanations.addEventListener('click', goToHome);

// *** Home button listeners (for Quiz and Results pages) ***
homeBtnQuiz.addEventListener('click', goToHome);
homeBtnResults.addEventListener('click', goToHome);