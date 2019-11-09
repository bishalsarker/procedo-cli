var fs = require('fs');
var webPage = require('webpage');
var page = webPage.create();
var url = fs.read('tempurl.dat');

page.open(url, function (status) {
  var content = page.content;
  console.log(content);
  phantom.exit();
});

page.onError = function(msg, trace) {
  var msgStack = ['ERROR: ' + msg];
  if (trace && trace.length) {
    msgStack.push('TRACE:');
    trace.forEach(function(t) {
      msgStack.push(' -> ' + t.file + ': ' + t.line + (t.function ? ' (in function "' + t.function +'")' : ''));
    });
  }
  //console.error(msgStack.join('\n'));
};