import { ipcRenderer } from 'electron'

const electronVersion = <HTMLTextAreaElement>document.querySelector('#version')
electronVersion.innerText = process.versions.electron

const button = <HTMLButtonElement>document.querySelector('#new-window')
button.addEventListener('click', () => {
  ipcRenderer.send('new-window', {
    x: 0,
    y: 0,
  })
})

const windowCount = <HTMLTextAreaElement>document.querySelector('#window-count')

ipcRenderer.on('window-count', (_event: any, params: any) => {
  windowCount.innerText = params.count
})

ipcRenderer.send('get-window-count')
