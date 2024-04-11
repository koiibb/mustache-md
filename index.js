const fs = require('fs');
const Mustache = require('mustache');

const view = {
  title: "Joe",
  calc: () => ( 2 + 4 )
};

const output = Mustache.render(`
# {{title}} spends {{calc}}
`, view);
console.log(output);
fs.writeFileSync('output.md', output);