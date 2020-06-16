window.nodeRequire = require.__$__nodeRequire;
const electron= nodeRequire('electron');
let w=electron.remote.getCurrentWindow();
w.setBackgroundColor('#00000000');
w.setVibrancy('ultra-dark');
w.setFullScreen(true);