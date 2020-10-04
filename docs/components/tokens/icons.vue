<template>
    <section class="row">
        <v-card v-for="(value, name, index) in icons" :key="index" :title="name" :icon="name" class="col-md-3 col-sm-6" />
    </section>
</template>

<script>
export default {
    name: "Icons",

    computed: {
        icons () {
            const files = require.context('@/assets/icons', true, /^\.\/.*\.svg$/)

            let icons = {};

            files.keys().forEach(key => {
                const name = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))

                icons[name] = files(key)
            })

            return icons
        }
    }
}
</script>

<docs>
## ICONS
Icons are used to visually communicate core parts of the product and available actions. They can act as wayfinding tools to help users more easily understand where they are in the product.

```jsx
    <icons />
```
</docs>
