# "C:\Users\s3q\Documents\GitHub\pylepra\geckodriver.exe"
from os import path
import random
from time import sleep
import smtplib
import imaplib
import email
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import re
import os
import json
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
# from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.common.by import By
import urllib3
from bs4 import BeautifulSoup
import posixpath
import urllib
import asyncio

browser_options = Options()

# browser_options.add_argument('--headless')

browser = webdriver.Firefox(
    executable_path="geckodriver.exe", options=browser_options)

browser.get("file:///C:/Users/s3q/Documents/GitHub/CO/CONTROLFLEX/index.html")
browser.find_element_by_css_selector("#checker").click()
