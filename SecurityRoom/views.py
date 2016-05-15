from flask import send_from_directory
from SecurityRoom import *

@app.route('/')
def index():
	return render_template('home.html')

@app.route('/blog/<blogname>')
def getBlog(blogname):
	blogname = blogname + '.html'
	return render_template(blogname)