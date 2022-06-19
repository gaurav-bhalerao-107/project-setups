from flask_mongoengine import MongoEngine

db = MongoEngine()

from .AdminUsers import AdminUsers
from .MasterAdminUsers import MasterAdminUsers