import chalk from 'chalk'

class Logger {
    constructor() {
        this.logTypes = {
            ERROR: chalk.red,
            WARNING: chalk.yellow,
            INFO: chalk.blueBright,
            DEBUG: chalk.gray,
        };
    }

    #log(type, message) {
        if (this.logTypes[type]) {
            const coloredType = this.logTypes[type](type);
            const currentTime = chalk.gray(`(${new Date().toLocaleTimeString()})`)
            const text = `${currentTime} [${coloredType}] ${message}`
            console.log(text);
        } else {
            console.log(message);
        }
    }

    error(message) {
        this.#log('ERROR', message);
    }

    warn(message) {
        this.#log('WARNING', message);
    }

    info(message) {
        this.#log('INFO', message);
    }

    debug(message) {
        this.#log('DEBUG', message);
    }
}

export const logger = new Logger();