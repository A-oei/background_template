const baseURL: string = './config/';

interface Config {
    local: object,
    dev: object,
    prod: object,
    beta: object,

    [key: string]: any
}

let config: Config = {
    local: require(`${baseURL}local.config`),
    dev: require(`${baseURL}dev.config`),
    beta: require(`${baseURL}beta.config`),
    prod: require(`${baseURL}prod.config`)
}

export default config[process.env.VUE_APP_ENV_TYPE || 'prod'].default;

