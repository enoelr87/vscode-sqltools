export const VERSION = process.env.VERSION;
export const EXT_NAMESPACE = process.env.EXT_NAMESPACE;
export const EXT_CONFIG_NAMESPACE = process.env.EXT_CONFIG_NAMESPACE;
export const DISPLAY_NAME = process.env.DISPLAY_NAME;
export const AUTHOR = process.env.AUTHOR;
export const ENV = process.env.NODE_ENV || 'production';
export const DOCS_ROOT_URL = 'https://vscode-sqltools.mteixeira.dev';
export const TREE_SEP = '/-##-/';

// query parsing
export const LINE_SPLITTER_REGEX = /\r?\n/g;
export const DELIMITER_START_REGEX = /^\s*-{2,}\s*@block.*$/;

// notifications
export const ElectronNotSupportedNotification = 'Core/electronNotSupported';
export const MissingModuleNotification = 'Core/missingModule';