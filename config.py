from db_roles import *

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://xwuwfgmcawloyu:NeVnYhuVne3K51bHzvLjGFHjc7@ec2-54-217-244-3.eu-west-1.compute.amazonaws.com:5432/d4qa71tgnj8vt8'
app.config['SECRET_KEY'] = 'super-secret'
app.config['SECURITY_REGISTERABLE'] = True
app.config['WTF_CSRF_ENABLED'] = False
app.config['SECURITY_LOGIN_USER_TEMPLATE'] = 'index.html'
app.config['SECURITY_LOGIN_URL'] = '/api/users/login'
user_datastore = SQLAlchemyUserDatastore(db, User, Role)
security = Security(app, user_datastore)
