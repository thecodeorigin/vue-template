/* eslint-disable prettier/prettier */
// Any modules in @utils will be registered
export const utils = {
  install(Vue) {
    // Setup all utilities
    // Filters, directives global components and helper functions are setup

    // See docs: https://webpack.js.org/guides/dependency-management/#context-module-api
    const requireModule = require.context('./', true, /^(?!.*index).*\.js$/ /* Every javascript file except index.js file */)
    requireModule.keys().forEach((fileName) => {

      const module = requireModule(fileName).default

      const temp = fileName.replace(/(\.\/|\.js)/g /* Remove "./" and ".js" */, '').split('/')
      const moduleName = temp.length > 1 ? temp[temp.length - 1] : temp[0]

      switch (temp[0]) {
        case 'filters':
          Vue.filter(moduleName, module)
          break
        case 'directives':
          Vue.directive(moduleName, module)
          break
        case 'global-components':
          Vue.component(moduleName, module)
          break
        case 'functions':
          Vue.prototype[`$${moduleName}`] = module
          break
        default:
          break
      }

    })
  },
}
