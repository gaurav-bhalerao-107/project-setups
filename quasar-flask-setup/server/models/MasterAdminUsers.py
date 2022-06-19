from models import db
from datetime import datetime

class MasterAdminUsers(db.Document):
  firstname = db.StringField()
  lastname = db.StringField()
  email = db.StringField()