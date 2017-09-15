const path = require('path')
const Ginkgo = require('./ginkgo')

const configure = {
  directory: {
    APP_ROOT: path.join(__dirname)
  }
}

const ginkgo = new Ginkgo(configure)

ginkgo.run(8030)