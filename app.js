var express = require('express')
var app = express()
var cors = require('cors')
var bodyParser = require('body-parser');
var schedule = require('node-schedule');
var rest = require('restler');

/* 
O Script sera execudado de segunda a sexta-feira as 4:00 da manhã
*/

var rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(1, 5)];
rule.hour = 4;
rule.minute = 0;

var j = schedule.scheduleJob(rule, function(){
    rest.get('http://xxxxx').on('complete', function (result) {
        if (result instanceof Error) {
            console.log('Error:', result.message);
            this.retry(5000); // try again after 5 sec 
        } else {
            console.log('xxx')
        }
    });
})





app.listen(7070, function () {
    console.log('listening on ');
});