<template>
    <form-group class="form-check">
        <input :id="id" class="form-control" type="checkbox" :checked="value" @change="$emit('input', $event.target.checked)" />
        <label :for="id"></label>
    </form-group>
</template>

<script>
import { uniqId } from '@/assets/javascript/helpers';

/**
  * Create switch checkboxes.
*/

export default {
    name: "vSwitch",
    status: "ready",
    release: "1.0.0",

    props: {
        /**
         * Value of the input
         */
        value: {
            type: Boolean,
            default: false
        },
    },

    computed: {
        id () {
            return uniqId();
        },
    },

    methods: {
        update() {
            this.$emit("click")
            this.localChecked = !this.localChecked
        },
    }
}
</script>

<style lang="scss">
.form-check {
    margin-bottom: 0;

    .form-control {
        display: none !important;

        & + label {
            display: block;
            width: 38px;
            height: 24px;
            border: 2px solid $color-ink-lighter;
            background: $color-white;
            border-radius: 12px;
            position: relative;
            margin: 0;
            cursor: pointer;
            transition: all .3s;

            &::after {
                content: '';
                position: absolute;
                width: 16px;
                height: 16px;
                background: $color-ink-lighter;
                border-radius: 50%;
                top: 0;
                bottom: 0;
                right: 4px;
                margin: auto;
                transition: all .3s;
            }
        }

        &:checked {
            & + label {
                background: $color-primary-light;
                border-color: $color-primary-light;

                &::after {
                    background: $color-white;
                    right: 16px;
                }
            }
        }
    }
}
</style>


<docs>
## Overview
The <code>v-switch</code> render a single checkbox a switch appearance.

```js
    new Vue({
        data: () => ({
            isActive: true
        }),

        template:
        `<div>
            <v-switch label="Active" v-model="isActive"/>
        </div>`
    })
```

## API
Select your desired component from below and see the available props, slots, events and functions.
</docs>
