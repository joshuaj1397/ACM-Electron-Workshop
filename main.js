const {app, BrowserWindow} = require('electron');
// modules to load the index.html file
const path = require('path');
const url = require('url');

// Required to prevent the window from being closed automatically when the JavaScript object is garbage collected 
let win;

function createWindow() {
	// Create a new window and load in the index.html file in this directory. Include a custom icon on the window
	win = new BrowserWindow({width: 800, height: 600, icon: __dirname+'/img/ttu.ico'});
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true,
	}));
	
	// Include Chromium devtools to help us debug
	win.webContents.openDevTools();

	// Listen for the window closing
	win.on('closed', () => {
		win = null; // Clean up
	});
}

// Create the window when Electron is ready
app.on('ready', createWindow);

// Exit fully when all Electron windows have closed  by listening for the window-all-closed event
app.on('window-all-closed', () => {
	// Check if the system is OSX; 'darwin' is the name of the kernal (non-Unix) used by Apple's devices
	if(process.platform !== 'darwin') {
		app.quit();
	}
});
