import os
import sys
from flask import Flask, flash, render_template, request, session, redirect, url_for, abort
#from flask_sslify import SSLify
app = Flask(__name__)

import SecurityRoom.views