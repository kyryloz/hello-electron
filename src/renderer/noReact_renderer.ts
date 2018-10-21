import { ipcRenderer, remote } from 'electron'
import {
  CREATE_NEW_WINDOW,
  RECEIVE_WINDOW_COUNT,
  WindowCountPayload,
  GET_WINDOW_COUNT,
} from '../main/events'

const electronVersion = <HTMLTextAreaElement>document.querySelector('#version')
electronVersion.innerText = process.versions.electron

const buttonNewWindowIpc = <HTMLButtonElement>document.querySelector('#new-window')
buttonNewWindowIpc.addEventListener('click', () => {
  ipcRenderer.send(CREATE_NEW_WINDOW, {
    x: 0,
    y: 0,
  })
})

const windowCount = <HTMLTextAreaElement>document.querySelector('#window-count')

ipcRenderer.on(RECEIVE_WINDOW_COUNT, (_event: any, params: WindowCountPayload) => {
  windowCount.innerText = String(params.count)
})

ipcRenderer.send(GET_WINDOW_COUNT)

const buttonNewWindowRemote = <HTMLButtonElement>document.querySelector('#new-window-remote')
buttonNewWindowRemote.addEventListener('click', () => {
  const window = new remote.BrowserWindow({
    width: 400,
    height: 400,
  })

  window.loadURL(`file://${__dirname}/index.html`)
})

const currentWindow = remote.getCurrentWindow()
const onBlur = () => document.body.style.setProperty('opacity', '0.2')
const onFocus = () => document.body.style.setProperty('opacity', '1')
currentWindow.on('blur', onBlur)
currentWindow.on('focus', onFocus)

window.addEventListener('beforeunload', () => {
  currentWindow.removeListener('blur', onBlur)
  currentWindow.removeListener('focus', onFocus)
})
