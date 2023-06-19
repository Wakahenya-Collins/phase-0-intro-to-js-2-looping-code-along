// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
//   }
//   const gifts = ["teddy bear", "drone", "doll"];

  // function wrapGifts(gifts) {
  //   for (let i = 0; i < gifts.length; i++) {
  //     console.log(`Wrapped ${gifts[i]} and added a bow!`);
  //     debugger;
  //   }
  
  //   return gifts;
  // }
  
  // wrapGifts(gifts);
  
  function writeCards(names) {
    let messages = [];  // Creating an empty array to hold the messages
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;  // Building the custom message using string interpolation
      messages.push(message);  // Adding the message to the new array
    }
  
    return messages;
  }
  
  // Example usage:
  let names = ["Alice", "Bob", "Charlie"];
  let event = "birthday";
  let result = writeCards(names, event);
  console.log(result);
  
  

  function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--;
    }
  }
  
  // Example usage:
  countDown(10);
  

