import Vue from 'vue'
import _kebabCase from 'lodash/kebabCase'

// We don't scan .vue file directly because:
// A component can have sub-components that are not exported
// An index.js file can decide what to export and be named

const registerGlobalBaseComponents = () => {
  // Every index.js file
  const requireModule = require.context('./', true, /index\.js$/)

  requireModule.keys().forEach((fileName) => {
    if (fileName !== './index.js') {
      const module = requireModule(fileName).default

      // Remove "./" and "index.js"
      const moduleName = _kebabCase(fileName.replace(/(\.\/|index.js)/g, ''))

      Vue.component(moduleName, module)
    }
  })
}

registerGlobalBaseComponents()
