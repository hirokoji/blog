import wd from 'wd';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

const PORT = 4723;

export const config = {
  platformName: 'Android',
  deviceName: 'Android Emulator',
  app:
    process.env.APK_PATH ||
    './android/app/build/outputs/apk/debug/app-debug.apk',
  unicodeKeyboard: true,
  resetKeyboard: true,
};

export const driver = wd.promiseChainRemote('localhost', PORT);
