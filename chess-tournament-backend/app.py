from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello from Flask!'

if __name__ == '__main__':
    app.run(debug=True) 
app.config['MYSQL_HOST'] = 'localhost' 
app.config['MYSQL_USER'] = 'root' 
app.config['MYSQL_PASSWORD'] = 'Zbigneiwpelli95!!'  
app.config['MYSQL_DB'] = 'chess_tournament' 

from flask_mysqldb import MySQL
mysql = MySQL(app) 
