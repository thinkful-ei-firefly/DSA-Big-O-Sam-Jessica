'use strict';

function towersOfHanoi (n) {  
  let aPeg=[];
  let bPeg =[];
  let cPeg=[];

  for (let i=n; i>=1; i--) {
    aPeg.push(i);
  }
  console.log('Start:');
  console.log(`Source: ${aPeg}`);
  console.log(`Middle: ${bPeg}`);
  console.log(`Target: ${cPeg}`);
  console.log('###############');
  moveDisk(n, aPeg, bPeg, cPeg);
  
}

function moveDisk (n, aPeg, bPeg, cPeg, totalmoves=1) {
  
  if (totalmoves %2 !== 0 && n%2===0) {
    ///if totalmoves is odd & n is even
    ///move disk 1 a->b->c->a
    if (aPeg[aPeg.length-1] === 1) bPeg.push(aPeg.pop());
    else if (bPeg[bPeg.length-1] === 1) cPeg.push(bPeg.pop());
    else if (cPeg[cPeg.length-1] === 1) aPeg.push(cPeg.pop());
  } 
  else if (totalmoves %2 !== 0 && n%2!==0) {
    ///if totalmoves is odd & n is even
    ///move disk 1 a->c->b->a
    if (aPeg[aPeg.length-1] === 1) cPeg.push(aPeg.pop());
    else if (cPeg[cPeg.length-1] === 1) bPeg.push(cPeg.pop());
    else if (bPeg[bPeg.length-1] === 1) aPeg.push(bPeg.pop());    
  } 
  else {
    //find highest exposed disk and move to an empty tower if one exists
    const aLast = aPeg[aPeg.length-1];    
    const bLast = bPeg[bPeg.length-1];
    const cLast = cPeg[cPeg.length-1];
    const sortedDisks = [aLast, bLast, cLast].sort();
    if (!aLast) {
      if (bLast > cLast) aPeg.push(bPeg.pop()); 
      else aPeg.push(cPeg.pop());
    }
    else if (!bLast) {
      if (aLast > cLast) bPeg.push(aPeg.pop());
      else aPeg.push(cPeg.pop());
    }
    else if (!cLast) {
      if (bLast > aLast) cPeg.push(bPeg.pop());
      else cPeg.push(aPeg.pop());
    }
    else if (aLast === sortedDisks[1]) {
      if (bLast > cLast) bPeg.push(aPeg.pop());
      else cPeg.push(aPeg.pop());
    }
    else if (bLast === sortedDisks[1]) {
      if (aLast > cLast) aPeg.push(bPeg.pop());
      else cPeg.push(bPeg.pop());
    }
    else if (cLast === sortedDisks[1]) {
      if (aLast > bLast) aPeg.push(cPeg.pop());
      else bPeg.push(cPeg.pop());
    }

    //if no empty towers, move second highest exposed disk onto larger disk

  }


  console.log(`Move #${totalmoves}:`);
  console.log(`Source: ${aPeg}`);
  console.log(`Middle: ${bPeg}`);
  console.log(`Target: ${cPeg}`);
  console.log('###############');

  if (!checkFullStack(n, cPeg)) {
    moveDisk(n, aPeg, bPeg, cPeg, totalmoves+1);
  }
}

function checkFullStack (n, peg) {
  for (let i=0; i<n; i++) {
    if (peg[i] !== (n-i)) return false;
  }
  return true;
}



towersOfHanoi(5);

//After Move #7 with 5 disks, the stacks look like this:
// Source: 5,4
// Middle: 
// Target: 3,2,1

//With 3 disks, it takes 7 moves to complete the puzzle.

//With 4 disks, it takes 15 moves to complete the puzzle.

//With 5 disks, it takes 31 moves to complete the puzzle.

//With n disks, it takes 2^n -1 moves to complete the puzzle (Exponential time).