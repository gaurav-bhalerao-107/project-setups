from app import app, admin_auth, master_admin_auth
import flask
from models import *
from utils import dictify_document

@app.route('/api/admin/', methods=["GET"])
def hello_world():
    return flask.jsonify(ok=True, message="Hello World")

@app.route('/api/admin/register_admin_users/', methods=["POST"])
def register_admin_users():
  try:
    admin_users = AdminUsers()
    admin_users.firstname = "Gaurav"
    admin_users.lastname = "Bhalerao"
    admin_users.email = "gauravbhalerao107@gmail.com"
    admin_users.save()

    return flask.jsonify(ok=True, user=dictify_document(admin_users))
  except:
    return flask.jsonify(ok=False, error="Error while registering the user!")
    

    