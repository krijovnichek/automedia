const { app, BrowserWindow } = require('electron')
  
  function createWindow () {
    // Создаем окно браузера.
    win = new BrowserWindow({ width: 800, height: 600 })
  
    // и загрузит index.html приложение.
    win.loadFile('index.html')
  }
  
  app.on('ready', createWindow)