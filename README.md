# Web Game IV

This is an activity for FSWD Lesson 5.3.6- Callback Functions

Please refer to the Activity Guide in Canvas for directions.

jheller notes-
Task 1- ok
Task 2- ok
_____________________________________________________________________________

Task 3- seeing something I did not expect.  In part three we enable the arrow
keys for character movement.  When I run index.html in the browser it appears
that the character is not moving when arrow keys are pressed.  However, in the 
dev tools the position numbers for the character in the html file do change
when keys are depressed.

Did get the issue above fixed.  Susan saw that the function(move) was not being
invoked in function moveCharacter.

code can be found in: https://github.com/jeffdonkey/JS-Callback-Practice.git
________________________________________________________________________________

Task 4- copied code from Activity page; no joy; no character movement; no change
occurring in html file (see Part 3 notes).  

Looked at html file in browser tools.  The img for the character no longer has a
x and y position.

This issue turned-out to be me.  I misread the Activity text and did not put
logic in function moveWithArrowKeys.  Instead I had a blank
function moveWithArrowKeys inside of the function move and moveWithArrowKeys
as it's own function outside of function move.
_____________________________________________________________________________

Task 5-