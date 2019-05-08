require('dotenv').config();
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
const { client } = require('electron-connect');
const chalk = require('chalk');
const electronOauth2 = require('electron-oauth2');
const db = require('./db');
const Account = require('./db/models/account.js');

const oauthConfig = require('./config');

const windowParams = {
  width: 600,
  height: 500,
  alwaysOnTop: true,
  autoHideMenuBar: true,
  webPreferences: {
    nodeIntegration: false,
  },
};

const googleOAuth = electronOauth2(oauthConfig.googleConfig, windowParams);
const facebookOAuth = electronOauth2(oauthConfig.facebookConfig, windowParams);

ipcMain.on('google-oauth', (event, arg) => {
  googleOAuth
    .getAccessToken(oauthConfig.googleOptions)
    .then((token) => {
      event.sender.send('google-oauth-reply', token);
    })
    .catch((err) => {
      console.log('Error while getting token', err);
    });
});

ipcMain.on('facebook-oauth', (event, arg) => {
  facebookOAuth
    .getAccessToken(oauthConfig.facebookOptions)
    .then((token) => {
      event.sender.send('facebook-oauth-reply', token);
    })
    .catch((err) => {
      console.log('Error while getting token', err);
    });
});

// Access to Database
ipcMain.on('get-accounts', (event) => {
  Account.findAll()
    .then((data) => {
      const values = [];
      data.forEach((obj) => {
        values.push(obj.dataValues);
      });
      event.sender.send('get-accounts-reply', values);
    })
    .catch(err => console.error(err));
});

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({ width: 800, height: 600 });

  // and load the index.html of the app.
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, 'public/index.html'),
      protocol: 'file:',
      slashes: true,
    }),
  );

  // Open the DevTools.
  win.webContents.openDevTools();

  client.create(win);

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });

  db.sync({ force: false })
    .then(() => {
      console.log(chalk.yellow('Database is running'));
    })
    .catch(err => console.error(err));
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
