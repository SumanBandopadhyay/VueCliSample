import * as axios from 'axios'

let options = {}
// The server-side needs a full url to works
if (process.server) {
  options.baseURL = 'http://localhost:8081'
}

export default axios.create(options)