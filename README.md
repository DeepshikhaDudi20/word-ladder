# Word Ladder

# About project - Word Ladder

The purpose of this project is to develop a word ladder application which takes two words of equal length and calculates a "word ladder" that joins them. It is done using words taken from prepopulated array.

## Tech Stack

- ReactJS: ReactJS is chosen for its better performance due to virtual DOM, efficient UI updates
- SCSS (Sass): SCSS is used for styling to ensure clean and maintainable CSS. It reduces repetition, increases reusability, and helps maintain modular and organized stylesheets.
- ESLint: ESLint is used to catch linting errors, enforce consistent code style, and ensure code quality by following best practices.

## Key Features implemented

The Word Ladder App includes the following key features:

- Two takes two words of equal length and calculates a word ladder that joins them. 
- The input boxes allow input of alphabetical characters only. 
- The solve button is only active when the following are true
  -There are words in both the input boxes
   - Both words are the same length 
   - Both words are different
   - The button hasn't already been pressed already with the current word choice
- If word ladder calculation takes longer than 0.5 seconds, a spinner is shown.
- On success, the word ladder appears between the two input boxes  
- On failure, a modal dialog appears with an error message and a close button that closes the dialog box
- If a word ladder is displayed and either input box is edited, the word ladder clears out.
- If word ladder is longer than 8 words, it should be scrollable  

## Input words
- Input is taken from prepopulated array and algorithm is created to find neighbouring words.
- Following words that works:
 - "DOG" -> "DIG" -> "BIG" -> "BIN" -> "BUN"
 - "GLASS" -> "CLASS" -> "CLANS" -> "CLANK" -> "BLANK" -> "BLINK" -> "BRINK"
 - "CHARGE" -> "CHANGE" -> "CHANGS"-> "CHANTS" -> "CHINTS"-> "CHINES"-> "CHINED" -> "COINED" -> "COINER" -> "CONNER"

## Additional implementations

- Used responsive units like percentages or rem instead of fixed pixel values for sizing elements to ensures styles adapt to different screen sizes
- Utilized media queries to apply specific styles based on different screen sizes
- Use meaningful class names in BEM format, to make code more readable and maintainable
- Exception/Error handling
- Accessibility

# Project Styling

- Used sass library, followed modular approach (To have robust structure & easy maintenance)
- Stored all colors used across application in a common file named as colors.scss for consistent styles across app.

## Accessibility as per WCAG 2.1 - AA standards

- Checklist {https://www.w3.org/WAI/WCAG21/quickref/} : to confirm the project is meeting WCAG 2.1 - AA standards
- Made it screen readers compliant by providing appropriate roles and aria-\* attributes to elements
- Pressing the TAB or SHIFT + TAB keys to allow the user to navigate and interact with interactive elements on the page. (TAB moves to the next element, SHIFT + TAB moves to the previous element)
- Used axe devTools to check styling and other Accessibility standards
- Used Lighthouse to check Accessibility and performance

## Scope of Improvement

While the Word Ladder App is fully functional, there are several areas where further improvements can be made:

- Typescript Implementation
- Unit test cases using React testing Library and Jest
- Better word ladder alogorithm calculation  (May be from some API or any other algo)
- Separate Error and Loader component with better visuals. (Enhanced error handling mechanism.)
- End to end testing with Cypress
- Import i18next library and store language in a text file to make it in multiple languages

## Execution

- To install dependencies:
    - npm install
- To build app:
    - npm run build
- To spin up the app:
    - npm start