import Vue from 'vue'
// Setup event bus
export const eventBus = {
  install(app) {
    app.prototype.$bus = new Vue()
  },
}
