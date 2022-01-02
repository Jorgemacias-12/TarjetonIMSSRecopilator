import os

from selenium import webdriver
from selenium.webdriver.firefox.options import Options

from dotenv import load_dotenv


def readScript():
    with open('loader.js') as reader:
        return reader.read()


def main():
    envData = []
    driver = webdriver.Firefox(
        executable_path=r'C:\webdriver\\geckodriver.exe'
    )
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
