import axios from 'axios'

const request = (config) => {
    const {url, params, dataType} = config
    dataType = dataType?"form":dataType
}

export default request