/**
 * System.js creates the Component Library.
 * It’s used in the system itself and when exporting it.
 *
*/

import '@/assets/javascript/main';

// Define contexts to require
const contexts = [require.context("@/components/", true, /\.vue$/)]

// Define components
const components = []

contexts.forEach(context => {
    context.keys().forEach(key => components.push(context(key).default))
})

// Install the above defined components
const system = {
    install(Vue) {
      components.forEach(component => Vue.component(component.name, component))
    },
}

// Automatic installation if Vue has been added to the global scope
if (typeof window !== "undefined" && window.Vue) {
    window.Vue.use(system)
}

// Finally export as default
export default system
