# Regular-Expression-for-visa-card-validation
RULES OF VISA CARD VALIDATION
- First digit must be 4
- Must contain 13 to 16 digits depending on how recent the card is
- No alphabet or special character is required

## Table of Contents
* [Node_modules](https://github.com/giftibe/Regex-for-visa-card-validation/tree/main/node_modules)
* [.gitignore file](https://github.com/giftibe/Regex-for-visa-card-validation/blob/main/.gitignore)
* [package-lock.json](https://github.com/giftibe/Regex-for-visa-card-validation/blob/main/package-lock.json)
* [Package.json](https://github.com/giftibe/Regex-for-visa-card-validation/blob/main/package.json)
* [regex file](https://github.com/giftibe/Regex-for-visa-card-validation/blob/main/regex.js)


## General Information
- Using Regular expression (regex) to validate/determine if an atm card is visa  .
- understanding Regex (qantifiers, special-characters, assertion, anchors, etc) 

## Technologies Used
- node - version 18.12.1
- prompt-sync - version 2.0 (for executing prompt() on vscode terminal)
  


## Setup
- install node on your computer using 
  `npm install node` or refer to node website https://nodejs.org/
- install prompt-sync as a dependency using
  `npm install prompt-sync` if you decide to copy the code.
Else, have nodejs install on your computer, fork repository and run `npm install` to download dependencies

## Usage
- To run the code, cd to regex.js and run
`node regex.js`
- Enter your visa card number on prompting


## sample output

          regex:(main) ✗ node regex.js
          Enter the 13 or 16 digits of your visa card number: 1234567890123
          1234567890123 is NOT a valid visa card number
          
          regex:(main) ✗ node regex.js
          Enter the 13 or 16 digits of your visa card number: 42345abc90123
          42345abc90123 is NOT a valid visa card number
          
          regex:(main) ✗ node regex.js
          Enter the 13 or 16 digits of your visa card number: 4123096582931
          These digits (4123096582931): is a VALID Visa card number of length result 13 
          
          regex:(main) ✗ node regex.js
          Enter the 13 or 16 digits of your visa card number: 4854784504897809
          These digits (4854784504897809): is a VALID Visa card number of length result 16 

## Explanation
          let pattern = /^4[0-9]{12}(?:[0-9]{3})?$/
          

- From the character ^, we begin by telling the parser to find the beginning of the string and must start with 4
- Next, we also want a series of 12 numbers {12} between the range of 0 t0 9 [0-9] attached to the 4, totaling 13 digits.
- The bracket () is used for grouping and the program considers it as a single item when executing and hence interpreting that it is allowed/optional to add numbers ranging from 0 to 9, three times {3}.
- The question market symbol states that the nearest pattern/group "(?:[0-9]{3})" to its left is optional, or it can occur zero or one time; hence the grouped item is regarded optional.
- The square bracket [0-9] matches numbers ranging from 0 to 9. Note the hypen is used to represent "range".
- The ?: character signals that it is passive (non-capturing) group, Matches "[0-9]{3}" but does not remember the match. Hence, the matched substring cannot be recalled from the resulting array's elements or from the predefined RegExp object's properties
- The $ represents the ending of the string
- The forward slash // character is used to denote the boundaries of the regular expression



## Contact
Created by [@Odogwu_gifted](https://www.instagram.com/odogwu_gifted/?next=%2F) - feel free to contact me!
