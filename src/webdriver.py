import os

from selenium import webdriver
from dotenv import load_dotenv
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.webdriver.firefox.firefox_binary import FirefoxBinary

def readScript():
    with open('loader.js') as reader:
        return reader.read()


def checkDir():
    if (os.path.exists('downloads')):
        print("Dir, already exists")
    else:
        os.mkdir('downloads')


def main():
    envData = []
    checkDir()
    driver.get('http://rh.imss.gob.mx/TarjetonDigital/')
    load_dotenv()
    envData.append(
        os.getenv('imssWorkerDelegation')
    )
    envData.append(
        os.getenv('imssWorkerID')
    )
    envData.append(
        os.getenv('imssWorkerPassword')
    )
    driver.execute_script(
        readScript(),
        envData[0], envData[1], envData[2]
    )
