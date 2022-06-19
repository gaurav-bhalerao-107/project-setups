from models import *
import json
from bson.objectid import ObjectId
import datetime

class JSONEncoder(json.JSONEncoder):
  def default(self, o):
    if isinstance(o, ObjectId):
      return str(o)
    if isinstance(o, datetime.datetime):
      return o.strftime('%Y-%m-%dT%H:%M:%SZ')
    return json.JSONEncoder.default(self, o)

def dictify_document(doc):
  return doc.to_mongo().to_dict()