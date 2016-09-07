from flask import render_template
from db_methods import *
import os

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/api/users", methods=["GET"])
@login_required
def get_all_user():
    return list_all_user()

@app.route("/api/users", methods=["POST"])
def post_user():
    return add_new_user()

@app.errorhandler(404)
def page_not_found(e):
    return render_template('index.html'), 404

if __name__ == "__main__":
  port = int(os.environ.get("PORT", 3001))
  app.run(host='0.0.0.0', port=port)
