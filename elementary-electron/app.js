var electron = require('electron')

electron.app.on('ready', function () {
    var mainWindow = new electron.BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 800
    })
    mainWindow.loadURL('file://' + __dirname + '/index.html')
})