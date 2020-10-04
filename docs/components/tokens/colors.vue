<template>
    <section class="row">
        <v-card v-for="(color, index) in colors" :key="index" :title="color.name.replace(/_/g, ' ').replace(/color/g, '')" :bg-color="color.value" class="col-md-3 col-sm-6">
            <p>
                <span>RGB:</span>
                {{ color.value }}
            </p>

            <p>
                <span>SCSS:</span>
                ${{ color.name.replace(/_/g, '-') }}
            </p>
        </v-card>
    </section>
</template>

<script>
import designTokens from "@/assets/tokens/tokens.raw.json"
import orderBy from "lodash/orderBy"

export default {
    name: "Colors",
    methods: {
        orderData (data) {
            let byName = orderBy(data, 'name', 'asc')
            let byCategoryAndName = orderBy(byName, 'category')

            return byCategoryAndName
        },
    },

    computed: {
        colors () {
            const colors = this.orderData(designTokens.props).filter(key => {
				return key.type == 'color'
            })

            return colors
        }
    }
}
</script>

<docs>
## Color Palette
Out of the box you get access to all colors through sass and javascript. These values can be used within your style sheets abd your component files.

```jsx
    <colors />
```
</docs>
