console.log("Javascript is alive!");


document.addEventListener('DOMContentLoaded', function () {
    //change greeting
    document.getElementById('greeting').innerHTML = "Hello, World!";
    
    //set bg color
    document.getElementById('essentials').style.backgroundColor = 'yellow';
    
    //create img
    const newImg = new Image();
    newImg.src = 'http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif';
    document.getElementById('greeting').appendChild(newImg);

    //create todo-list
    const newList = document.createElement('ul');
    newList.className = "todo-items"
    document.body.appendChild(newList);

    //create li from array & add to todo-list
    let list = ['make coffee','eat donut','change diapers','drive to work'];
    for (let i = 0; i < list.length; i++) {
       let li = document.createElement('li')
       let liContent = document.createTextNode(list[i]);
       li.appendChild(liContent);
       document.getElementsByClassName('todo-items')[0].appendChild(li);
    }
   

    //PART 2

    //add class of selected to clicked items
    const unorderedList = document.getElementsByTagName('ul')[0];
    const listItems = unorderedList.children

    unorderedList.addEventListener('click', (ev) => {
        if (ev.target.tagName === 'LI')   {
            for (let items of listItems)    {
                items.setAttribute('class', '');
            }
            ev.target.setAttribute('class' , 'selected');
        }

        //change image to last clicked
        const img = document.getElementsByTagName('img')[1];
        const lastClick = document.getElementsByClassName('selected')[0].textContent;
        img.src = `./images/${lastClick}.jpeg`
    });
    
    //remove gray div when mouseover
    const grayDiv = document.getElementById('ghosting');
    grayDiv.addEventListener('mouseover', (ev) =>   {
        grayDiv.hidden = true;
    });

    //supersize orange div moused over
    const orangeDiv = document.getElementById('resize');
    orangeDiv.addEventListener('mouseenter', (ev) => {
        orangeDiv.style.width = '400px';
    });

    //return orange div width mouse off
    orangeDiv.addEventListener('mouseleave', (ev) => {
        orangeDiv.style.width = '200px';
    });

    //reset button = PANIC!!!
    const panic = document.getElementById('reset');
    const img = document.getElementsByTagName('img')[1];
    panic.addEventListener('click', (ev) => {
        for (let items of listItems)   {
            items.removeAttribute('class');
        }
        img.src = `./images/panic.jpeg`  
    });

    //NUMBERZZZZ
    const keyMap = {
        0: '',
        1: '',
        2: '',
        3: '',
        4: '', 
        5: '',
        6: '',
        7: '',
        8: '',
        9: '',
        0: '',
    }
    /*const konamiCode = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a','b','a','Control','Meta'];
    let recordedKeys = [];
    let idx = 0;*/
    
    function numberPress (ev)   {
        console.log(ev);
        if (ev.keyMap)   {
            alert('I hates NUMBERZZZ')
        }
        //create empty array to record

        
    /*    if (ev.key === konamiCode[idx])   {
            console.log(recordedKeys);
            debugger;
            recordedKeys.push(konamiCode[idx]);
            idx++;
        if (recordedKeys.join("") === konamiCode.join(""))  {
            alert('KONAMI');
        }
        } else {
            recordedKeys = [];
            idx = 0;
        }
*/
    }
    document.addEventListener('keydown', numberPress);

    //Konami ('up','up',down,down,left,right,left,right,b,a,b,a,select,start)

})