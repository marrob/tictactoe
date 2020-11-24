const grid = document.querySelector('.grid');

const result = document.querySelector('.result');
//mindig az o kezd
let user = 'o'
let table = [
                ['-', '-', '-' ],
                ['-', '-', '-' ],
                ['-', '-', '-' ],
            ];
function main(){

    //Itt van minden grid
    const girdItems = document.querySelectorAll('.grid-item');

    //Minden cella eseményét itt kezelem
    girdItems.forEach(cell=>cell.addEventListener('click',(e)=>{
        const state = e.target.getAttribute('state');
        if(state == '-')
        {
            const x = e.target.getAttribute('x');
            const y = e.target.getAttribute('y');
            console.log('poziciód:' + 'x=' + x + ' y=' + y);
            if(user == 'o')
            {
                e.target.classList.add('cell--o');
                e.target.setAttribute('state', 'o');
                table[x][y]='o';
            }
            else
            {
                e.target.setAttribute('state', 'x');
                e.target.classList.add('cell--x');
                table[x][y]='x';
            }
            //Játékos csere
            if(user == 'o')
                user = 'x';
            else
                user = 'o';
            //soroknként megnézem
            let winner = '-';
            for(let x = 0; x < 3; x++){
               if(table[x].every(item=>item=='o'))
                    winner = 'o';
                if(table[x].every(item=>item=='x'))
                    winner = 'x';
            }

            //folytatom ha nincs győztes
            if (winner =='-'){
                // fentről lefelé O
                for(let x=0;x<3;x++){
                    let isWin = true;
                    for(let y=0; y<3; y++)
                        if(table[y][x] != 'o'){
                            isWin = false;
                        }
                    if(isWin)
                    {
                        winner = 'o';
                        break;
                    }
                }
            } 
            if(winner == '-'){
                //fentről lefelé X
                for(let x=0;x<3;x++){
                    let isWin = true;
                    for(let y=0; y<3; y++)
                        if(table[y][x] != 'x'){
                            isWin = false;
                        }
                    if(isWin)
                    {
                        winner = 'x';
                        break;
                    }
                }
            } 
            if(winner == '-'){
            //jobb átlósan folytatom O
            
                let isWin = true;
                for(let x=0;x<3;x++){
                    if(table[x][x] != 'o'){
                        isWin = false;
                    }
                }
                if(isWin)
                    winner = 'o';
            } 
            if(winner == '-'){
                //jobb átlósan folytatom x
                let isWin = true;
                for(let x=0;x<3;x++){
                    if(table[x][x] != 'x'){
                        isWin = false;
                    }
                }
                if(isWin)
                    winner = 'x';
            }
            if(winner == '-'){
                if( table[0][2]=='o' && table[1][1] == 'o' && table[2][0] == 'o'){
                    winner = 'o';
                }
            }            
            if(winner == '-'){
                if( table[0][2]=='x' && table[1][1] == 'x' && table[2][0] == 'x'){
                    winner = 'x';
                }
            }

            if(winner !='-'){
                
                result.textContent = 'A győztes az '+ winner.toString();
            }
            console.log(table.flat(Infinity))
            console.log(winner);
        }
    }));

    //Új játékor leveszi az osztályokat
    const btnNew = document.querySelector('.button__newgame');
    btnNew.addEventListener('click', ()=>{
        girdItems.forEach(cell=>{
            cell.classList.remove('cell--o');
            cell.classList.remove('cell--x');
            cell.setAttribute('state','-')
            for(let x=0;x<3;x++)
                for(let y=0;y<3;y++)
                    table[x][y]='-';
            console.log(table.flat(Infinity));
            result.textContent = '-';

        });
    });
}

main();