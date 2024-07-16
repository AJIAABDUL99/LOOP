for ( let i = 0 ; i < 5 ; i++) {
    console.log ("For loop itertion :" + i);
    i++;
}



for (i = 0; i < 10 ; i++)  {
    if (i==5) {
        break;
    }
        console.log("Loop with break:" +i);
}

for (i = 0; i < 10 ; i++) {
if (i%2 == 0){
    continue ;
}
console.log("Loop with continue:" +i);
}

for (i = 0; i < 10 ; i++){
if(i%2== 1){
    continue ;
}
console.log("Loop with continue:" +i);
}

for (i = 0; i < 3; i++){
    
    for (let j= 0; j < 3; j++){
         
        if (j===1){
            continue;
        }
          
          console.log(`i=${i}, j=${j}`);
        }

    }


