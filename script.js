const grid = document.querySelector('.grid');


//mindig az o kezd
let user = 'o'
let table = [
                ['-', '-', '-' ],
                ['-', '-', '-' ],
                ['-', '-', '-' ],
            ];
function main(){

/*    grid.addEventListener('click',(e)=>{
        console.log(e)
    });
*/
    //Itt van minden grid
    const girdItems = document.querySelectorAll('.grid-item');

    //Minden cella eseményét itt kezelem
    girdItems.forEach(cell=>cell.addEventListener('click',(e)=>{
       // console.log(e);

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
        }
    }));

    //Új játékor leveszi az osztályokat
    const btnNew = document.querySelector('.button__newgame');
    btnNew.addEventListener('click', ()=>{
        girdItems.forEach(cell=>{
            cell.classList.remove('cell--o');
            cell.classList.remove('cell--x');
            cell.setAttribute('state','-')
            table.forEach(item=>item='-');        
        });
    });
}

main();