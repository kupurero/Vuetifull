<template>
    <v-table :columns="columns" :rows="tokens">
        <template slot-scope="props">
            <template v-if="props.props.column.field == 'name'">
                {{ props.props.formattedRow.name.replace(/_/g, '-') }}
            </template>

            <template v-else-if="props.props.column.field == 'value'">
                <template v-if="props.props.row.type == 'color'">
                    <span class="token-bg" :style="{ backgroundColor: props.props.row.value }"></span>
                </template>

                <code class="token-code"> {{ props.props.formattedRow.value }} </code>
            </template>

            <template v-else>
                {{ props.props.formattedRow[props.props.column.field] }}
            </template>
        </template>
    </v-table>
</template>

<script>
import designTokens from "@/assets/tokens/tokens.raw.json"
import orderBy from "lodash/orderBy"

export default {
    name: "All",

    data() {
        return {
            tokens: this.orderData(designTokens.props),

            columns: [{
                label: 'Name',
                field: 'name',
            }, {
                label: 'Value',
                field: 'value',
            }, {
                label: 'Category',
                field: 'category',
            }]
        }
    },

    methods: {
        orderData (data) {
            let byName = orderBy(data, 'name', 'asc')
            let byCategoryAndName = orderBy(byName, 'category')

            return byCategoryAndName
        },
    },
}
</script>

<docs>
## TOKENS
Vuetifull comes with multiple sass variabled usable in you style sheets.

```
    <all />
```
</docs>
