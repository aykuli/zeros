module.exports = function zeros(expression) {
  let fact = 0;
  let numb = '';
  let count = [0, 0];
  let evenOddOrNone = 1;
  let count2 = 0;
  let count5 = 0;

  for (let i = 0; i < expression.length; i++) {
    if (expression[i] == '!') {
      fact++;

      if (i == expression.length - 1) {        
        numb = +numb;
        evenOddOrNone = evenOddOrNoneDef(fact, numb);
        count = count2and5s(evenOddOrNone, numb);
        count2 += +count[0];
        count5 += +count[1];
      }
    } else if (expression[i] =='*') {
      numb = +numb;
      evenOddOrNone = evenOddOrNoneDef(fact, numb);
      count = count2and5s(evenOddOrNone, numb);
      count2 += count[0];
      count5 += count[1];
      fact = 0;
      numb='';
    } else {
      numb += expression[i];
    }
  }

  return zerosCount( [count2, count5] );
}

function evenOddOrNoneDef(fact, numb) {
  return (fact == 1) ? 1 : ((fact == 2) ? ( (numb % 2) ? 3 : 2 ) : 'Error');
}

function zerosCount(count) {
  return (count[0] > count[1]) ? count[1] : count[0];
}

function count2and5s(evenOddOrNone, numb) {
  let count = [0, 0];
  let step = evenOddOrNone == 1 ? 1 : 2;
  
  for (let i = evenOddOrNone; i <=numb; i +=step) {
    let j = i;
    while( j % 2 == 0) {
      count[0]++;
      j /= 2;
    }

    while( j % 5 == 0) {
      count[1]++;
      j /= 5;
    }
  }

  return count;
}

function zerosInFactorial(expression) {
  let fact = 0;
  let numb = '';
  let count = [0, 0];
  let evenOddOrNone = 1;
  let count2 = 0;
  let count5 = 0;

  for (let i = 0; i < expression.length; i++) {
    if (expression[i] == '!') {
      fact++;

      if (i == expression.length - 1) {        
        numb = +numb;
        evenOddOrNone = evenOddOrNoneDef(fact, numb);
        count = count2and5s(evenOddOrNone, numb);
        count2 += +count[0];
        count5 += +count[1];
      }
    } else if (expression[i] =='*') {
      numb = +numb;
      evenOddOrNone = evenOddOrNoneDef(fact, numb);
      count = count2and5s(evenOddOrNone, numb);
      count2 += count[0];
      count5 += count[1];
      fact = 0;
      numb='';
    } else {
      numb += expression[i];
    }
  }

  return zerosCount( [count2, count5] );
}







