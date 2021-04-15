# Tic Tac Toe 

I would like to thank Mr.Mohamed Joza, Mr.Sameh Kenawy, Mr.Raymond Maroun and Mr.Jaber Al-Salama for helping me. I thank all the people who helped me in the company from my supervisors and also my colleagues for helping me to do my best. 


# Project Goal

 Tic-Tac-Toe is a simple and fun game for 2 players, X and O. It is played on a 3x3 grid. Each player's goal is to make 3 in a row.
Players take turns placing their Mark, X or O, on an open square in the grid. The first player to make 3 of their own mark in a row vertically, horizontally, or diagonally wins the game.
If all 9 squares are filled and neither player has 3 in a row, the game is considered a Tie.

# Wireframe
![TicTacToe](https://media.git.generalassemb.ly/user/33079/files/16ac7300-4551-11eb-8d4e-6b75128569a5)

![XWin](https://media.git.generalassemb.ly/user/33079/files/f04aff80-4571-11eb-9c50-167ec9fc3e30)

![O win](https://media.git.generalassemb.ly/user/33079/files/1ec8da80-4572-11eb-85ba-76964d503cec)


# Getting Started
To run this project on your local machine,fork and run the follwing command 
- git clone https://pages.git.generalassemb.ly/ghadahalmugren/project1_GA/

# Technologies Used In The Project
- HTML
- CSS
- JavaScript / DOM
- jquery library
- VScode
- Git Bash
- Chrome



# User Stories

 - User should be able to start a new tic tac toe game if user is win or tie 
 - User should be able to click on a square to add X first and then O, and so on
 - User should be shown a message after each turn for if I win or tie
 - User should not be able to click the same square twice
 - User  should not be able to continue playing once I win or tie , must reset the game again
 - User should be able to play the game again without refreshing the page

# My planning about my development process and problem-solving strategy

- Games are one of the best projects you can create, because they are very easily enjoyed by the end user and are all around fun to make! There are JavaScript libraries that are pre-made for game development, but I prefer creating from scratch so that I can understand everything completely.
 
 - The grid was divided into 9 squares and each box had its own identifier, I created an if statement if the squares are empty, trigger X will start first, then a message will be displayed on the other O so I used (. Append ()) to add it after the title (TIC TAC TOE) Then I thought how to find the winner, so I created a function call findWin (), to compare all three cells in the row and all three cells in the column also 3 cells diagonally if all three contain X then X is the wise winner, other than that O is the winner, Therefore, a message will be displayed accordingly to inform who is the winner in the game after finding the winner.
but I encountered a problem with how the user could not click the same box twice. I searched and asked Joza about it and the first problem was solved.

# Determine the winner


```
 if((findWin() != -1) && (findWin() != " ")) {
        if (findWin() == "x") {
            Mass.innerText = 'X is Win'
            Mass.style.color = 'rgba(207, 106, 106, 0.877)'
            x_count++
            head.appendChild(Mass)
            //reset
            x_player.innerHTML += x_count
            console.log(gameStatus)//have a win
        }
        
        else if(findWin() == "o"){
            Mass.innerText = 'O is Win'
            Mass.style.color = 'rgba(207, 106, 106, 0.877)'
            o_count++
            head.appendChild(Mass)
            //reset
            o_player.innerHTML += o_count
            console.log(gameStatus)//have win
        }
```

#  Future Work
- Use localStorage to persist data locally to allow games to continue after page refresh or loss of internet connectivity
- Involve Audio in my game
- AI opponent
- Allow players to customize their tokens (X, O, name, picture, etc)

