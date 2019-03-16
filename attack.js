var bodyX = 200;
var bodyY = 200;
var bodyW = 100;
var bodyH = bodyW/2;
var dotX = bodyX - 5;
var dotY = bodyY - 105;
var eyes = (30, 30);
var hungry = (4, 1);
var hungry2 = (1, 4);

draw = function() {
    background(130, 93, 7);
    
    fill(36, 240, 63);
    ellipse(bodyX, bodyY, bodyW, bodyH); // pod 1
    ellipse(bodyX, bodyY+50, bodyW, bodyH); // pod 2
    ellipse(bodyX, bodyY-50, bodyW, bodyH); // pod 3
    ellipse(bodyX, bodyY-100, bodyW, bodyH); // pod 4
    
    fill(217, 31, 217);
    rect(dotX, dotY, 10, 10); // dot
    rect(dotX, dotY * 1.5, 10, 10); // dot
    rect(dotX, dotY * 2, 10, 10); // dot
    rect(dotX, dotY * 2.55, 10, 10); // dot
    
    fill(138, 138, 138); // grays of eyes
    ellipse(bodyX - 40, bodyY - 126, eyes, eyes); // gray of left eye
    ellipse(bodyX + 40, bodyY - 126, eyes, eyes); // gray of right eye
    
    fill(106, 154, 201); // pupils
    ellipse(bodyX - 40, bodyY - 126, eyes * 0.5, eyes * 0.5); // pupil of left eye
    ellipse(bodyX + 40, bodyY - 126, eyes * 0.5, eyes * 0.5); // pupil of right eye

    /* The following hungry 1 and 2 produce animated ellipses that grow due to being
       incremented. */
    

    fill(250, 10, 170);
    ellipse(10, 10, hungry, hungry);
    
    fill(193, 8, 196);
    ellipse(-20, -20, hungry2, hungry2);
    
    hungry++;
    hungry2++;
    
   };    



