"use strict";
let score = 0;

function getSadInterval(){
    return  Date.now() + 1000;
}
function getGoneInterval(){
    return Date.now() + Math.floor(Math.random()*18000) + 2000;
}

function getHungryInterval(){
    return Date.now() + Math.floor(Math.random()*3000) + 2000;
}

function getKingStatus() {
    return Math.random() > .9;
}

 const moles = [
     {
         status: 'sad',
         next: getSadInterval(),
         king: false,
         node:  document.querySelector('#hole-0'),


     },
     {
        status: 'sad',
        next: getSadInterval(),
        king: false,
        node:  document.querySelector('#hole-1'),
        

    },
    {
        status: 'sad',
        next: getSadInterval(),
        king: false,
        node:  document.querySelector('#hole-2'),


    },
    {
        status: 'sad',
        next: getSadInterval(),
        king: false,
        node:  document.querySelector('#hole-3'),


    },
    {
        status: 'sad',
        next: getSadInterval(),
        king: false,
        node:  document.querySelector('#hole-4'),


    },
    {
        status: 'sad',
        next: getSadInterval(),
        king: false,
        node:  document.querySelector('#hole-5'),


    },
    {
        status: 'sad',
        next: getSadInterval(),
        king: false,
        node:  document.querySelector('#hole-6'),


    },
    {
        status: 'sad',
        next: getSadInterval(),
        king: false,
        node:  document.querySelector('#hole-7'),


    },
    {
        status: 'sad',
        next: getSadInterval(),
        king: false,
        node:  document.querySelector('#hole-8'),


    },
    {
        status: 'sad',
        next: getSadInterval(),
        king: false,
        node:  document.querySelector('#hole-9'),


    },
    
 ];
function feed(){
    if(event.target.tagName !== 'IMG' || !event.target.classList.contains('hungry'))return;
    

    const mole = moles[parseInt(event.target.dataset.index)];

    mole.status = 'fed';
    mole.next = getSadInterval();
    if(mole.king){
        mole.node.children[0].src= './king-mole-game/mole-fed.png';
        score +=2;
    }else{
    mole.node.children[0].src= './mole-game/mole-fed.png';
    score++;
    }
    mole.node.children[0].classList.remove('hungry');
    

    if(score >= 10 ){
        win();
    }

document.querySelector('.worm-container').style.width = `${10*score}%`

}


function win(){
    document.querySelector('.bg').classList.add('hide');
    document.querySelector('.win').classList.remove('hide');
}

 function getNextStatus(mole){
     switch(mole.status){
         case 'fed':
         case 'sad':
             mole.next = getSadInterval();
             mole.status = 'leaving';
             if(mole.king){
                mole.node.children[0].src = './mole-game/king-mole-leaving.png';
            }else{
                mole.node.children[0].src = './mole-game/mole-leaving.png';
            }
             break;
        case 'leaving':
            mole.next = getGoneInterval();
            mole.status = 'gone';
            mole.node.children[0].classList.add('gone');
            break;
        case 'gone':
            mole.status = 'hungry';
            mole.king = getKingStatus();
            mole.next= getHungryInterval();
            mole.node.children[0].classList.add('hungry')
            mole.node.children[0].classList.remove('gone');
            if(mole.king){
                mole.node.children[0].src = './mole-game/king-mole-hungry.png';
            }else{
                mole.node.children[0].src = './mole-game/mole-hungry.png';
            }
            break;
        case 'hungry':
            mole.status = 'sad';
            getSadInterval();
            mole.node.children[0].classList.remove('hungry');
            mole.node.children[0].src = './mole-game/mole-sad.png';
            break;

     }
 }

 let runAgainAt = Date.now() + 100;

 function nextFrame(){
    const now = Date.now();

     if(runAgainAt <= now){
        for(let i = 0; i < moles.length; i++ ){
            if(moles[i].next <= now){
                getNextStatus(moles[i]);
            }
        }
        runAgainAt = now +100;
     }
    requestAnimationFrame(nextFrame);
 }

 document.querySelector('.bg').addEventListener('click', feed);



nextFrame();