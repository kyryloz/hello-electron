import { ipcRenderer } from 'electron'
import {
  CREATE_NEW_WINDOW,
  RECEIVE_WINDOW_COUNT,
  WindowCountPayload,
  GET_WINDOW_COUNT,
} from '../main/events'

const electronVersion = <HTMLTextAreaElement>document.querySelector('#version')
electronVersion.innerText = process.versions.electron

const button = <HTMLButtonElement>document.querySelector('#new-window')
button.addEventListener('click', () => {
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
