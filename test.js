let exec = require('child_process').exec;
let option = process.argv.splice(2);
let message = option.length ? option : "add";
var command =  `git add . & git commit -m ${message} & git push origin master`;

exec(command,(error, stdout, stderr) =>{
    if (error) {
        console.error(`执行的错误: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
})