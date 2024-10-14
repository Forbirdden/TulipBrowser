const { app, BrowserWindow } = require('electron');
const path = require('node:path');
const { shell } = require('electron');
const path3 = require('path');
const bdpi = path.join("./ByeDPI/byedpi.bat");
const { session } = require('electron')
function createWindow () {
const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path3.join(__dirname, 'preload.js')
    }
  })

function doSomething(){
   shell.openExternal(bdpi);
}

session.defaultSession.loadExtension('./NoScript').then(({ id }) => {
  // ...
})

session.defaultSession.loadExtension('./CookieBlock').then(({ id }) => {
  // ...
})


  mainWindow.loadFile('./BrowserLoader/duck.html')

}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
