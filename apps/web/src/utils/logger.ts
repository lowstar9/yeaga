const LEVELS: Record<string, number> = {
  DEBUG: 10,
  INFO: 20,
  WARN: 30,
  ERROR: 40,
  SILENT: 50,
};

const rawLevel = (import.meta.env.VITE_LOG_LEVEL || "INFO").toUpperCase();
const currentLevel = LEVELS[rawLevel] ?? LEVELS.INFO;

function shouldLog(level: keyof typeof LEVELS) {
  return LEVELS[level] >= currentLevel;
}

export function logDebug(message: string, ...args: unknown[]) {
  if (shouldLog("DEBUG")) {
    console.debug(message, ...args);
  }
}

export function logInfo(message: string, ...args: unknown[]) {
  if (shouldLog("INFO")) {
    console.info(message, ...args);
  }
}

export function logWarn(message: string, ...args: unknown[]) {
  if (shouldLog("WARN")) {
    console.warn(message, ...args);
  }
}

export function logError(message: string, ...args: unknown[]) {
  if (shouldLog("ERROR")) {
    console.error(message, ...args);
  }
}
