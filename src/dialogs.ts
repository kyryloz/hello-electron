import { dialog, app, nativeImage } from 'electron'
import * as fs from 'fs'
import * as path from 'path'

export const showMessage = (mainWindow: Electron.BrowserWindow) => {
  dialog.showMessageBox(
    mainWindow,
    {
      type: 'info',
      icon: nativeImage.createFromPath('./resources/cat.png'),
      message: 'Hello',
      detail: 'Some message details',
      buttons: ['Meow', 'Close'],
      defaultId: 0,
    },
    clickedIndex => {
      console.log(clickedIndex)
    }
  )
}

export const showSaveDialog = (mainWindow: Electron.BrowserWindow) => {
  dialog.showSaveDialog(
    mainWindow,
    {
      defaultPath: path.join(app.getPath('downloads'), 'memory-info.txt'),
    },
    fileName => {
      if (fileName) {
        const memoryInfo = JSON.stringify(process.getProcessMemoryInfo(), null, 2)
        fs.writeFile(fileName, memoryInfo, 'utf8', err => {
          if (err) {
            dialog.showErrorBox('Error', err.message)
          }
        })
      }
    }
  )
}

export const showOpenDialog = (mainWindow: Electron.BrowserWindow) => {
  dialog.showOpenDialog(
    mainWindow,
    {
      defaultPath: app.getPath('documents'),
      filters: [{ name: 'Text Files', extensions: ['txt'] }],
    },
    fileNames => {
      if (fileNames) {
        console.log(fileNames, fs.readFileSync(fileNames[0], 'utf8'))
      }
    }
  )
}
