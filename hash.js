// const crypto = require("crypto");

// // Create an empty hash (object) to store friends' names and hashed phone numbers
// const friendsPhoneBook = {};

// // Store your friends' names and phone numbers
// const friends = [
//   { name: "John Doe", phoneNumber: "123-456-7890" },
//   { name: "Jane Smith", phoneNumber: "987-654-3210" },
//   // Add more friends here
// ];

// friends.forEach((friend) => {
//   const { name, phoneNumber } = friend;
//   const hashedPhoneNumber = crypto.createHash("sha256").update(phoneNumber).digest("hex");
//   friendsPhoneBook[name] = hashedPhoneNumber;
// });

// // Access hashed phone number using the friend's name
// const friendName = "John Doe";
// const hashedPhoneNumber = friendsPhoneBook[friendName];
// console.log("Hashed phone number of", friendName + ":", hashedPhoneNumber);
function hash(key){
  let hash =0
  // iterate through the key
  for(let i=0; i<key.length;i++){
    let char= key.charCodeAt(i)
    console.log(char)
    hash=(hash<<5)-hash+char
    hash|=0
  }
  return hash
}
hash("tesT")