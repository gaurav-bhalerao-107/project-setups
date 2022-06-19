from flask import Flask
from models import *
from functools import wraps
from flask_cors import CORS
from pymongo import MongoClient
from utils import JSONEncoder

app = Flask(__name__)
app.json_encoder = JSONEncoder
cors = CORS(app)

class Config(object):
  DB_HOST = "aceGaurav_07"
  DB_PASSWORD = "Gaurav123"
  MONGODB_HOST = "mongodb+srv://aceGaurav_07:Gaurav123@cluster0.kbwcx.mongodb.net/UniqueSalon?retryWrites=true&w=majority"
 
app.config.from_object(Config())
db.init_app(app)

# decorators
def master_admin_auth(f):
  @wraps(f)
  def decorator(*args, **kwargs):
    if 'master_admin_id' not in flask.session:
      return flask.abort(401)
    return f(*args, **kwargs)
  return decorator

def admin_auth(f):
  @wraps(f)
  def decorator(*args, **kwargs):
    if 'admin_id' not in flask.session:
      return flask.abort(401)
    return f(*args, **kwargs)
  return decorator

# view blueprints
from views.admin_view import *
from views.master_admin_view import *

if __name__ == "__main__":
  app.run(debug=True, host='0.0.0.0', port=5000)