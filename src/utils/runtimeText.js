
const runtimeText = minutes => { 

  let hours = 0;
  while (minutes >= 60) {
    minutes -= 60;
    hours++; 
  }


  const message = (
    (hours > 0 ? hours + 'h ' : '') + 
    (minutes > 0 ? minutes + 'min' : '')
  );

  return message;
}; 

export default runtimeText;