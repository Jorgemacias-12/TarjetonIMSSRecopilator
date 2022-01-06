from logging import log
import os

from selenium import webdriver

from dotenv import load_dotenv


envData = [] 

def readScript():
    with open('loader.js') as reader:
        return reader.read()


def checkDir():
    if (not os.path.exists('downloads')):
        os.mkdir('downloads')


def main():

    checkDir()
    
    profile = webdriver.FirefoxProfile()
    profile.set_preference("browser.download.folderList", 2)
    profile.set_preference("browser.download.manager.showWhenStarting", False)
    profile.set_preference("browser.download.dir", f'{os.getcwd()}/downlaods')
    profile.set_preference(
        "browser.helperApps.neverAsk.saveToDisk", "application/xml")
    profile.set_preference("browser.download.manager.useWindow", False)
    profile.update_preferences()

    driver = webdriver.Firefox(firefox_profile=profile)

    driver.get('http://rh.imss.gob.mx/TarjetonDigital/')
    driver.maximize_window()
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
    envData.append(
        os.getenv('firstRun')
    )
    driver.execute_script(
        readScript(),
        envData[0], envData[1], envData[2], envData[3]
    )
    driver.quit()