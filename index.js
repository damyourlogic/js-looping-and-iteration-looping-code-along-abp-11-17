// Code your solutions in this file
  const printBadgeName =['Ada', 'Brendan', 'Ali']
 function printBadges(name){
  for (let x = 0; x < name.length; x++) {
    console.log(`Welcome ${name[x]}! You are employee #${x+1}.`)
  }
return name;
}
