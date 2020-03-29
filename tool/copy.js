const fs = require('fs');
console.log(`read source filel[${process.argv[2]}]`);
const source = fs.readFileSync(process.argv[2]);
fs.writeFileSync(process.argv[3], source);
console.log(`copy to tanget file[${process.argv[3]}]:success`);
