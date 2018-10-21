const electronVersion = document.querySelector('#version')
if (electronVersion) {
  electronVersion.innerHTML = process.versions.electron
}
