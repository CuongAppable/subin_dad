import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

const json = JSON.stringify(jsf(schema));
const outputFile = './src/api/db.json';

fs.writeFile(outputFile, json, function(err){
  if(err){
    return console.log(chalk.red(err)) //eslint-disable-line no-console
  }else{
    console.log(chalk.green(`Mock Data Generated Here: ${outputFile}`)); //eslint-disable-line no-console
  }
})


// import faker from 'faker';
// jsf.extend("faker", function() {
//   return faker
// })

// jsf.resolve(schema).then(function(result) {
//   fs.writeFile(outputFile, JSON.stringify(result, null, 2), function(err){
//       if (err) {
//           return (console.log(r(err)));
//       } else {
//           console.log(g(`Mock Data Generated Here: ${outputFile}`));
//       }
//   });
// });
