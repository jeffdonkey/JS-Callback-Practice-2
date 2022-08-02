const inventory = newInventory()
move(inventory).to(0, 0)

/*below is added code from the directions.
purpose of this code is to set-up user inputed movement via
the arrow keys on the keyboard */

/*line 11 is declaring the value for the character
The value is created when the "..green-character.." value
is sent to the function newImage */
const character = newImage('assets/green-character/static.gif')
/*lines 13-15 and setting the initial screen placement for character */
let direction = null;
let x = 100;
let y = 250;

/*function moveCharacter will update x or y based
on inputs (west, east, north, south).  */
function moveCharacter(){ 
    if(direction === 'west'){
        x = x - 1
    }
    if(direction === 'north'){
        y = y + 1
    }
    if(direction === 'east'){
        x = x + 1
    }
    if(direction === 'south'){
        y = y - 1
    }
    /*I am not sure what the two lines below are doing.
    I think they are passing updated information back to
    function move; specifically to function moveToCoordinates
    that is within function move */
    character.style.left = x + 'px'
    character.style.bottom = y + 'px'
}

/*setInterval is a pre-set JavaScript function.
the first argument is the target (function moveCharacter).
The second argument is a number value for the amount
of milliseconds to run before re-invoking */
setInterval(moveCharacter, 1)

/* below is an alternate function where the 
in statements that would change the character's position
are inbedded within the function setInterval.
Activity directions expressed that it is our choice on which
function to use. 

setInterval(function(){ 
    if(direction === 'west'){
        x = x - 1
    }
    if(direction === 'north'){
        y = y + 1
    }
    if(direction === 'east'){
        x = x + 1
    }
    if(direction === 'south'){
        y = y - 1
    }
    character.style.left = x + 'px'
    character.style.bottom = y + 'px'
}, 1)
*/


move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)

document.addEventListener('keydown', function(e){
    if(e.repeat) return;

    if(e.key === 'ArrowLeft'){
        direction = 'west'
    }
    if(e.key === 'ArrowUp'){
        direction = 'north'
    }
    if(e.key === 'ArrowRight'){
        direction = 'east'
    }
    if(e.key === 'ArrowDown'){
        direction = 'south'
    }
})

document.addEventListener('keyup', function(e){
    direction = null
})
