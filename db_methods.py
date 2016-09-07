from config import *
from flask_bcrypt import Bcrypt
import sqlalchemy.exc

def list_all_user():
    list_w_key = []
    all_user = User.query.all()
    for item in all_user:
        i = {
          'username':item.username,
          'email':item.email
          }
        list_w_key.append(i)
    return jsonify(list_w_key)

def add_new_user():
    if len(request.json['password']) < 6 :
        return jsonify({"status":"error", "message":"Password too short"})
    else:
        try:
            user_datastore.create_user(username=request.json['username'], email=request.json['email'], password=request.json['password'] )
            db.session.commit()
            return jsonify({"status": "Ok"})
        except sqlalchemy.exc.IntegrityError:
            return jsonify({"status":"error", "message":"Username already taken"})
