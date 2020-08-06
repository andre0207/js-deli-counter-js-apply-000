const takeANumber = (currentLine, name) => {
  currentLine.push(name)
    let greet = `Welcome, ${name}. You are number ${currentLine.length} in line.`
    return greet;
}


const nowServing = (line) => {
  switch(line.length === 0) {
    case true:
      return 'There is nobody waiting to be served!'
      break;
    case false: 
      return `Currently serving ${line.shift()}.`
      break;
  }
}
  /* if (line.length === 0) {
    
    return 'There is nobody waiting to be served!'
    
  } else {
    
    return `Currently serving ${line.shift()}.`
   }
} */


const currentLine = (line) => {

  if (line.length === 0) {
    return 'The line is currently empty.'
  } 
  
  let nextLine = []
  for (let i = 0; i < line.length; i++) {
  nextLine.push(`${i + 1}. ${line[i]}`)
  }
  
  return 'The line is currently: ' + nextLine.join(', ')
} 





/*
const currentLine = (line) => {
  if (line.length === 0) {
    return 'The line is currently empty.'
  }


let nextLine = [];

  for (let i = 0; i < line.length; i++) {
  let num =`${i + 1}`
  let sent = num.concat(', ',`${line[i]}`)
  
  }
  return `The line is currently: ${sent}`
} 
*/