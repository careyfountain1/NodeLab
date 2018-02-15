

const path = require('path')
const fs = require('fs');

let chirps = [
    {
        name: "Carey Fountain",
        handle: "@fountainish",
        chirp: "hey whats up"
    },
    {
        name: "Suzy Suzman",
        handle: "@suzatizeme",
        chirp: "I just went to Africa"
    },
    {
        name: "Hugh Janus",
        handle: "@poop",
        chirp: "where the porty potties at!"
    },
    {
        name: "Penelope Pendletwat",
        handle: "@pineappleeasteregg",
        chirp: "Can I eat some bacon?"
    },
    {
        name: "Javier Muskrat",
        handle: "@muskiratonthem",
        chirp: "I ain't no snitch!"
    },
    {
        name: "Fern Chang Chong",
        handle: "@laos",
        chirp: "how do you use chopsticks?"
    }
]

let dataPath = path.join(__dirname, '../chirps.json');


fs.writeFile(dataPath, JSON.stringify(chirps), (err) => {
  if(err) console.log(err);
  
  console.log("thanks");
});
