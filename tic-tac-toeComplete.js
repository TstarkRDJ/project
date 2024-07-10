            let container= document.querySelector("#CrossNzero");
            let stick = document.querySelectorAll(".stick");
            let button = document.querySelectorAll(".button");
            console.log(typeof button)
            let resetG = document.querySelectorAll(".resetG")[0];
            let win = document.getElementsByTagName("h1")[0];
            let Choice = prompt("Choose X or O");
            Choice = Choice.toLocaleUpperCase();
            let computerChoice = 8;
            winList = [
                [0,1,2,0],
                [0,3,6,1],
                [0,4,8,2],
                [1,4,7,3],
                [3,4,5,4],
                [2,4,6,5],
                [2,5,8,6],
                [6,7,8,7]
            ]

            // set onclick attribute on div
            // set onclick attribute on div
            for(i=0;i<button.length;i++){
                button[i].setAttribute('onclick','opr()');
            }

            function opr(){
            event.target.removeAttribute("onclick","opr");
            event.target.removeAttribute("class","button");
            event.target.innerHTML = Choice;
            // if(Choice=="X"){
            //     event.target.innerHTML = "X";

            // }
            // else if(Choice=="O"){
            //     event.target.innerHTML = "X";
            // }
            // if(C){
            //     win.innerHTML = "You Choose Wrong"
            //     for(i in button){
            //         button[i].removeAttribute("class","button");
            //         button[i].removeAttribute("onclick","opr()");
            //     }
            // }
            // CONDITION FOR X WINS
            // CONDITION FOR X WINS

            checkWin();

            //COMPUTER MAKING TURN
            //COMPUTER MAKING TURN
            
            computerTurn();
            
            //CONDITION FOR O WINS
            //CONDITION FOR O WINS

            checkWin();
                
            }

            function computerTurn(){
                //update button due to remove class(button) on div when player click
                let button = document.querySelectorAll(".button");
                computerChoice-=1;
                console.log("computerChoice "+ computerChoice);
                let computerNum = Math.round(Math.random()*computerChoice);
                console.log(computerNum)
                // console.log("computerass "+computerNum );
                if(Choice=="X"){
                    button[computerNum].innerHTML = 'O';
                }
                else if(Choice=="O"){
                    button[computerNum].innerHTML = 'X';
                }
                else{
                    win.innerHTML = "You Choose Wrong"
                    for(i in button){
                        button[i].removeAttribute("class","button");
                        button[i].removeAttribute("onclick","opr()");
                    }
                }
                button[computerNum].removeAttribute("onclick","opr");
                button[computerNum].removeAttribute('class','button');
                computerChoice-=1;
                // console.log("computerNum "+ computer);
            }

            function reset(){
                win.innerHTML = "";
                computerChoice = 8;
                resetG.style.backgroundColor = "";
                resetG.style.fontSize = "";
                resetG.style.boxShadow = "";
                win.style.boxShadow = "";
                for(i=0;i<button.length;i++){
                    button[i].setAttribute('onclick','opr()');
                    button[i].setAttribute('class','button');
                    button[i].innerHTML = "";
                }
                for(sticks of stick){
                    sticks.style.display = "none";
                }
                Choice = prompt("Choose X or O");
                Choice = Choice.toLocaleUpperCase();
            }

            function checkWin(){
                winList.forEach(element => {
                    val1 = button[element[0]].innerHTML;
                    val2 = button[element[1]].innerHTML;
                    val3 = button[element[2]].innerHTML;
                    if(val1 !="" && val2 != "" && val3 !=""){
                        if(val1===val2 && val2===val3){
                            stick[element[3]].style.display = "block";
                            win.style.boxShadow = "0px 0px 10px 5px rgb(110, 108, 108)";
                            resetG.style.backgroundColor = 'rgb(0, 255, 255)';
                            resetG.style.fontSize = '25px';
                            resetG.style.boxShadow = "0px 0px 10px 3px rgb(0, 255, 255)";
                            buttons = document.querySelectorAll(".button");
                            console.log(buttons[0])
                            for(i=0;i<buttons.length;i++){
                                buttons[i].removeAttribute("class","button");
                                buttons[i].removeAttribute("onclick","opr");
                            }
                            if(val1 == Choice){
                                // console.log(val1);
                                win.innerHTML = "YOU WIN :)";
                            }
                            else{
                                // console.log(val1);
                                win.innerHTML = "YOU LOSE :(";
                            }
                        }
                    }
                });
                
            }