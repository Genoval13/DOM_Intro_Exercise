console.log("Javascript is alive!");


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('greeting').innerHTML = "Hello, World!";
})

document.addEventListener('DOMContentLoaded', function () {
   document.getElementById('essentials').style.backgroundColor = 'yellow';
        
})

document.addEventListener('DOMContentLoaded', function () {
    const newImg = new Image();
    newImg.src = 'http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif';
    document.getElementById('greeting').appendChild(newImg);
})

document.addEventListener('DOMContentLoaded', function () {
    const newList = document.createElement('ul');
    newList.className = "todo-items"
    document.body.appendChild(newList);
})

document.addEventListener('DOMContentLoaded', function () {
    let list = ['make coffee','eat donut','change diapers','drive to work'];
    for (let i = 0; i < list.length; i++) {
       let li = document.createElement('li')
       let liContent = document.createTextNode(list[i]);
       li.appendChild(liContent);
       document.getElementsByClassName('todo-items')[0].appendChild(li);
    }
})