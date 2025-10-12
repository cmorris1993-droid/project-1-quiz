# Project 1: WW2 Online Quiz

## Project Goal
The primary goal was to build a fully interactive, multi-stage online quiz using pure JavaScript, HTML, and CSS. The project demonstrates core competence in DOM manipulation, state management, clear **navigation**, and applying responsive design principles.

## Value to the User
This quiz provides a quick and engaging way for **users to test and reinforce their knowledge of World War II facts and events**. It offers **immediate feedback on performance**, including a total score and summary of correct answers.

## Key Features
* **Multi-Format Questions:** The quiz **supports multiple question types**: multiple-choice, true/false, and fill-in-the-blank.
* **Question Randomisation:** Questions are **loaded at random** every time the quiz is taken, ensuring enhanced **replayability**.
* **Detailed Review Page:** After completing the quiz, users can **navigate to a dedicated review area** to see all incorrect answers, the correct answer, and a full **explanatory note**.
* **Comprehensive Scoring:** Tracks correct answers and displays a final performance summary (**score and correct count**).
* **Responsive Design:** The **layout is structured to maintain structural integrity** and a clean experience across various device screen sizes using CSS media queries.
* **Multi-Page Flow:** Clear navigation handles the **flow between the How-To Page, the Quiz Area, the Results Summary, and the Review Page**.

## Technologies Used
* HTML
* CSS
* JavaScript

## Quality Assurance & Standards Compliance

The project's code has been rigorously checked against official web standards to ensure maximum compatibility and performance across browsers:

* **HTML Validation:** The entire `index.html` file passed validation with **zero errors or warnings** using the [W3C Nu HTML Checker](https://validator.w3.org/nu/#textarea), confirming well-formed and semantically correct HTML5 structure.
* **CSS Validation:** The `style.css` file passed validation with **zero errors or warnings** using the [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/validator), guaranteeing fully compliant and robust styling.
* **JavaScript Linting:** The `script.js` file was run through JSHint. All initial warnings regarding modern syntax (`const`, `let`, arrow functions, template literals) were resolved by setting the **`esversion: 6`** directive, confirming compliance with **modern JavaScript (ES2015+)** best practices.

## Attribution & Acknowledgements
This section is reserved for listing any external code, libraries, or **tutorials used** in the project, as required by the project brief.

* **Question Shuffling:** The **Fisher-Yates shuffle algorithm** was used to implement question **randomisation**. The implementation was based on the guide: **"Fisher-Yates Shuffle Algorithm in JavaScript - Free Video Tutorial and Guide"** by Noble Desktop, available at [https://www.nobledesktop.com/learn/javascript/fisher-yates-shuffle-algorithm](https://www.nobledesktop.com/learn/javascript/fisher-yates-shuffle-algorithm).
**Code Organisation Standard:** The use of visually distinct **block-comment banners** (e.g., `/* ===== SECTION ===== */`) for dividing code into logical, readable sections adheres to best practices for **Code Readability and Documentation**, as championed by resources like the **MDN Web Docs**' style guidelines: [https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript).
* **AI Assistance:** **Gemini** (a large language model by Google) was **utilised** as an **assistive development and debugging partner** to refine JavaScript logic, structure code, and finalise project **documentation**.

## How to Deploy
1.  **Clone the repository** to your local machine.
2.  **Open** `index.html` in your web browser to run the quiz locally.
3.  For **deployment via GitHub Pages**, navigate to the repository's 'Settings' tab, scroll to 'GitHub Pages', **select the Master branch** as the source, and click **Save**.

## Project Features Showcase

### 1. How To Screen

This page provides the user with clear instructions on the quiz format, navigation, and scoring before they begin.

### 2. The Interactive Quiz Screen

The quiz features dynamic rendering of questions, randomisation, and support for multiple question types, including fill-in-the-blank (as shown) and multiple-choice.

### 3. Results Screen

Upon completion, the user receives immediate feedback, including their final score and the total number of correct answers.

### 4. Incorrect Answers Screen

A key feature of the quiz is the ability to review all incorrectly answered questions, along with the correct solution and a full explanation for educational value.
