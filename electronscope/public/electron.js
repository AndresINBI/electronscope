const { app, BrowserWindow } = require('electron') // eslint-disable-line
const { join } = require('path')
const isDev = require('electron-is-dev')

let mainWindow
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
  })
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${join(__dirname, '../build/index.html')}`
  )
  mainWindow.on('closed', () => (mainWindow = null))
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
