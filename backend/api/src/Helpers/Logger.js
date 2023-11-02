import chalk from 'chalk'

export function logger() {
    return new Logger();
}

export class Logger {
    constructor(ignoredLogLevel) {
        this.ignoredLogLevel = ignoredLogLevel
        this.logTypes = {
            Error: chalk.red,
            Warning: chalk.yellow,
            Info: chalk.blueBright,
            Debug: chalk.green,
        };
    }

    #log(type, message) {
        if (this.logTypes[type]) {
            const coloredType = this.logTypes[type](type);
            console.log(`[${coloredType}] ${message}`);
        } else {
            console.log(message);
        }
    }

    error(message) {
        this.#log('Error', message);
    }

    warn(message) {
        this.#log('Warning', message);
    }

    info(message) {
        this.#log('Info', message);
    }

    debug(message) {
        this.#log('Debug', message);
    }
}