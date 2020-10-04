### Vuetifull is an open source tool for building UI design systems with Vue.js. It provides you and your team a set of organized tools, patterns & practices that work as the foundation for your application development.

Principles are the foundation of the system. They form the basis of a good product and help the team with decision making. They are here to guide you and your team when working with the myriad parts of the system and help you do better and more informed decisions.


## Installation

You can install Vuetifull through NPM or Yarn:

```html
    npm install vuetifull --save-dev
    yarn add vuetifull
```

## Usage
To use Vuetifull in your application, you can import only the components that you're really using. This will allow you to make your build way more compact than installing a full bundle.

```html
    import Vue from 'vue'
    import { vButton, vCard } from 'vuetifull/dist/system/components'
    import 'vuetifull/dist/system/system.css'

    Vue.use(Vuetifull)
```

If you want to use all components, you can use the full bundle of Vuetifull. This will import ALL components and UI Elements.

```html
    import Vue from 'vue'
    import Vuetifull from 'vuetifull'
    import 'vuetifull/dist/system/system.css'

    Vue.use(Vuetifull)
```

(CDN?)

Vuetifull provide you scss variables usable to keep a coherance between the library and your application. You can see all available assets thans to the tokens documentation
