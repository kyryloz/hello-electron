import { app, BrowserWindow, ipcMain } from 'electron'
import { enableLiveReload } from 'electron-compile'
import installExtension, {
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS,
} from 'electron-devtools-installer'
import { createMainMenu } from './mainMenu'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let windows: Electron.BrowserWindow[] = []

const isDevMode = process.execPath.match(/[\\/]electron/)

if (isDevMode) {
  enableLiveReload({ strategy: 'react-hmr' })
}

const sendWindowCount = () => {
  windows.forEach(win => {
    win.webContents.send('window-count', { count: windows.length })
  })
}

const createWindow = async (params?: Electron.BrowserWindowConstructorOptions) => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    ...params,
  })

  // and load the index.html of the app.
  // mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.loadURL(`file://${__dirname}/index2.html`)

  // Open the DevTools.
  if (isDevMode) {
    await installExtension(REACT_DEVELOPER_TOOLS)
    await installExtension(REDUX_DEVTOOLS)
    mainWindow.webContents.openDevTools()
  }

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    windows.splice(windows.indexOf(mainWindow), 1)
    sendWindowCount()
  })

  mainWindow.on('ready-to-show', () => {
    if (mainWindow) {
      mainWindow.show()
    }
  })

  createMainMenu(mainWindow)

  windows.push(mainWindow)
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createWindow()

  ipcMain.on('new-window', (_event: any, props: Electron.BrowserWindowConstructorOptions) => {
    createWindow(props)
  })

  ipcMain.on('get-window-count', () => {
    sendWindowCount()
  })
})

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (windows.length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
