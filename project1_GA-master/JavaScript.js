let reset = document.querySelector('.reset')
let cells_position = document.querySelectorAll('.space')
let head = document.querySelector('.header')
let Mass = document.createElement('h3')


// if grid is empty so game is active
let gameStatus = true;
//if it is true the x is turn if false o is turn
let XisNext = true;

//count
let x_player = document.querySelector('.p1');
let o_player = document.querySelector('.p2');
let x_count = 0
let o_count = 0;

//تعبيه
//add evenListener for each cell in grid 
for (let i = 0; i <= cells_position.length - 1; i++) {
    //to know which cell is clicked
    cells_position[i].addEventListener('click', A)
    cells_position[i].style.fontSize='50px'
    

}

//have win
let cell_count=0;
 function A() {
   
    //isClicked or not - if is empty then allow to click
    if ($(this).text() == "") {
        if (XisNext == true) {
            event.target.innerText = "x"
            Mass.innerText = 'O GO'
            Mass.style.color = '#e21a8fde'            
            head.appendChild(Mass)
            XisNext = false
            cell_count++;
        }
        else {
            event.target.innerText = "o"
            Mass.innerText = 'X GO'
            Mass.style.color =  'rgb(165, 61, 122)' 
            head.appendChild(Mass)
            XisNext = true
            cell_count++;

        }
    }

    if ((findWin() != -1) && (findWin() != " ")) {
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
     //no win
     //remove eveint if have win
     for (let i = 0; i <= cells_position.length - 1; i++) {
        //to know which cell is clicked
        cells_position[i].removeEventListener('click',A)
    
    }
    }
    
    else if(cell_count==9){
        console.log('TIEEEEEEEEEEEEEEEEE')
        Mass.innerText = 'TIE ,  YOU MUST PLAY AGAIN'
        Mass.style.color = 'rgba(207, 106, 106, 0.877)'
        head.appendChild(Mass)
    }
      
    }
    
    


function findWin() {
    let cell_0 = document.querySelector('#zero')
    let cell_1 = document.querySelector('#one')
    let cell_2 = document.querySelector('#two')
    let cell_3 = document.querySelector('#three')
    let cell_4 = document.querySelector('#four')
    let cell_5 = document.querySelector('#five')
    let cell_6 = document.querySelector('#six')
    let cell_7 = document.querySelector('#saven')
    let cell_8 = document.querySelector('#eight')
    //check rows
    //if row have same letter (X X X ) OR (O O O)
    if ((cell_0.innerText == cell_1.innerText) && (cell_1.innerText == cell_2.innerText)&&(cell_1.innerText !='')) {
        return cell_2.innerText
    }
    else if ((cell_3.innerText == cell_4.innerText) && (cell_4.innerText == cell_5.innerText)&&(cell_4.innerText !='')) {
        return cell_5.innerText
    } else if ((cell_6.innerText == cell_7.innerText) && (cell_7.innerText == cell_8.innerText)&&(cell_8.innerText !='')) {
        return cell_8.innerText
    }

    //check coluoms
    //check diagonal
    else if ((cell_0.innerText == cell_4.innerText) && (cell_4.innerText == cell_8.innerText)&&(cell_8.innerText !='')) {
        return cell_8.innerText
    }
    else if ((cell_0.innerText == cell_3.innerText) && (cell_3.innerText == cell_6.innerText)&&(cell_6.innerText !='')) {
        return cell_6.innerText
    }
    else if ((cell_2.innerText == cell_5.innerText) && (cell_5.innerText == cell_8.innerText)&&(cell_8.innerText !='')) {
        return cell_8.innerText
    }
    //check diagonal
    else if ((cell_2.innerText == cell_4.innerText) && (cell_4.innerText == cell_6.innerText)&&(cell_6.innerText !='')) {
        return cell_6.innerText
    }
    else if ((cell_1.innerText == cell_4.innerText) && (cell_4.innerText == cell_7.innerText)&&(cell_7.innerText !='')) {
        return cell_7.innerText
    }
    //no winner
    else {
        return -1;
    }
}




reset.addEventListener('click', function () {
    location.reload()
})

