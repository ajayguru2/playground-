var fs = require('fs');
// fs.writeFileSync('new.txt','hello world');

// // fs module code
//
// //writing file asynchrounously
// fs.writeFile('ved.txt','ved iz a Dactur saab',(err) => {
//   if(err){
//     console.log('Unable to write file');
//     console.log(err);
//   }
//   console.log('Succesfully written file');
// });
//
// //writing file syncsly
// fs.writeFileSync('ajay.txt','ajay guru is awesome !!');
// console.log('Succesfully written the file ');
//
//
// // deleting file asncly
// fs.unlink('ved.txt',(err) => {
//   if(err){
//     console.log(`unable to delete file ${err}`);
//   }
//   else{console.log('Succesfully deleted the file');}
// });


// fs.stat('ajay.txt',(err, stats) => {
//   if(err){
//     console.log(`there seem to have crept in an error ${err}`);
//   }
//   else {
//     console.log(`stats: ${JSON.stringify(stats)}`);
//   }
// });



//bad code
// fs.rename('ajay.txt', 'guru.txt', (err) => {
//   if (err) {
//     console.log(`Encountered error: ${err}`);
//   }
//   else {
//     console.log(`Succesfully Renamed file`);
//   }
// });
//
//
// fs.stat('guru.txt', (err, stats) => {
//   if (err) {
//     console.log(`Encountered error: ${err}`);
//   }
//   else {
//     console.log(stats);
//   }
// });



// good code
// chained call backs


// fs.rename('ajay.txt', 'guru.txt', (err) => {
//   if (err) {
//     console.log(`Encountered error: ${err}`);
//   }
//   else {
//     console.log(`Succesfully Renamed file`);
//     fs.stat('guru.txt', (err, stats) => {
//       if (err) {
//         console.log(`Encountered error: ${err}`);
//       }
//       else {
//         console.log(stats);
//       }
//     });
//   }
// });


// console.log(process.cwd());

//fs watcher
//ye samajhna h bc

 // console.log(fs.watch('guru.txt'));
 // console.log('Started watcher');
 // fs.close('guru.txt');

// fs.watch('guru.txt', { encoding: 'buffer' }, (eventType, filename) => {
//   if (filename)
//     console.log(filename);
//     // Prints: <Buffer ...>
// });


//console.log(fs.FSWatcher);




//write stream

// var options = { encoding: 'utf-8' };
// var wstream = fs.createWriteStream('gurude.txt',options);
// wstream.write('hello world\n');
// wstream.write('ye bik gyi h gormint\nye bc saare milkr humko pagal bna rhe h madarchod k bache \nitne gaaand phati k h ye bhadwe!!');
// fs.wRE
// wstream.end();


// fs.access('guru.txt', fs.constants.R_OK, (err) => {
//   if(err){
//     console.log(err);
//   }
//   else {
//     console.log('Read permission granted');
//   }
// });
//
// fs.access('gurudev.txt', fs.constants.W_OK, (err) => {
//   if(err){
//     console.log(err);
//   }
//   else {
//     console.log(`write permission granted`);
//   }
// });
// fs.access('guru.txt', fs.constants.X_OK, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log('xecute madarchod');
//   }
// });



console.log(fs.accessSync('guru.txt', fs.constants.W_OK));
