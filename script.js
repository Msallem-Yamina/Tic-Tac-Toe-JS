let turn = 'X',
    squares = document.querySelectorAll('.square'),
    title = document.querySelector('header'),
    arr = [];
squares.forEach ((el)=>{
    el.addEventListener('click', (e)=>{
       Game(e);
       winner();
    });
})
function Game(e){
    // Test if the box is empty or not and the value of Turn to put and replace X and O.
    if (e.target.innerHTML === '' && turn == 'X'){
        e.target.classList.add('clicked');
        e.target.innerHTML = turn;
        title.innerHTML = 'O';
        turn = 'O';
   }else {
    e.target.classList.add('clicked');
    e.target.innerHTML = turn;
    turn = 'X';
    title.innerHTML = `${turn}`;
   }
}
function End(n1,n2,n3){
    // Show The Winner 
    title.innerHTML = `${arr[n1]} winner`;
    document.getElementById('item'+n1).style.background = '#000';
    document.getElementById('item'+n2).style.background = '#000';
    document.getElementById('item'+n3).style.background = '#000';
    // Add ... to title and reload the page
    let i = 0,
    inter = setInterval(() => {
            title.innerHTML += `.`;
            i++;
            if (i === 3) {
                clearInterval(inter);
                i = 0;
                window.location.reload();
            }
        }, 1000);
}
function winner (){
    // Add the elements to the array to facilitate testing of their values.
    for (let i = 1; i < 10; i++) {
        arr[i] = document.getElementById(`item${i}`).innerHTML;
    }
    // compare values
    if (arr[1] == arr[2] && arr[2] == arr[3] && arr[1] !== ''){
        End (1,2,3);
    }else if (arr[4] == arr[5] && arr[5] == arr[6] && arr[5] !== ''){
        End(4,5,6);
    }else if (arr[7] == arr[8] && arr[7] == arr[9] && arr[9] !== ''){
        End(7,8,9);
    }else if (arr[1] == arr[5] && arr[5] == arr[9] && arr[9] !== ''){
        End(1,5,9);
    }else if (arr[7] == arr[5] && arr[5] == arr[3] && arr[5] !== ''){
        End(3,5,7);
    }else if (arr[3] == arr[6] && arr[9] == arr[3] && arr[3] !== ''){
        End(3,6,9);
    }else if (arr[2] == arr[5] && arr[2] == arr[8] && arr[8] !== ''){
        End(2,5,8);
    }else if (arr[1] == arr[4] && arr[4] == arr[7] && arr[7] !== ''){
        End(1,4,7);
    };
}