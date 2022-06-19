from models import db
from datetime import datetime

class AdminUsers(db.Document):
  firstname = db.StringField()
  lastname = db.StringField()
  email = db.StringField()