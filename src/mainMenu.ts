import { app, Menu } from 'electron'
import { showMessage, showSaveDialog, showOpenDialog } from './dialogs'

const isWindows = process.platform === 'win32'

export const createMainMenu = (mainWindow: Electron.BrowserWindow) => {
  const template: Electron.MenuItemConstructorOptions[] = [
    {
      label: isWindows ? 'File' : app.getName(),
      submenu: [
        {
          label: 'Say Hello',
          click() {
            showMessage(mainWindow)
          },
        },
        {
          label: 'Save Memory Usage Info',
          click() {
            showSaveDialog(mainWindow)
          },
        },
        {
          label: 'Open File',
          click() {
            showOpenDialog(mainWindow)
          },
        },
        { type: 'separator' },
        {
          label: isWindows ? 'Exit' : `Quit ${app.getName()}`,
          accelerator: isWindows ? 'Alt+F4' : 'CmdOrCtrl+Q',
          click() {
            app.quit()
          },
        },
      ],
    },
    {
      label: 'Development',
      submenu: [
        {
          label: 'Refresh',
          accelerator: 'CmdOrCtrl+R',
          click() {
            mainWindow.reload()
          },
        },
      ],
    },
  ]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}
