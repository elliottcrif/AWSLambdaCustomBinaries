'use strict';

var spawn = require('child_process').spawn;
process.env["PATH"] = process.env["PATH"] + ":" + process.env["LAMBDA_TASK_ROOT"];

module.exports.hello = (event, context, callback) => {
  var opts = opts||{}
  const child = spawn("cat",['main.cpp'],opts);

   child.stdout.on('data', function(chunk) {
    console.log("data: " + chunk);
  });
  child.stderr.on('data', function(chunk) {
    console.log("data: " + chunk);
  });
  child.on('error', function (error) {
    console.log("data: " + error);
  });
  child.on('close', function (code, signal) {
    console.log("[] child process exited with code",code, "signal", signal);
  });

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Successfully ran srcml in the cloud! Binary Executables in the cloud',
      input: event,
    }),
  };

  callback(null, response);
};
