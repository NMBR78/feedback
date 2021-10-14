var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '92.205.7.58',
  user     : 'alexeyuser001',
  password : '48hfuhrf7374hf0hhf'
});

 connection.connect(function(err){
        if (err) {
          return console.error("Ошибка: " + err.message);
        }
        else{
          console.log("Подключение к серверу MySQL успешно установлено");
        }
     });
