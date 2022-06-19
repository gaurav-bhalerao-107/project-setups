from app import app, admin_auth, master_admin_auth
import flask

@app.route('/api/master_admin/', methods=["GET"])
def hello_world_master():
    return flask.jsonify(ok=True, message="Hello World")