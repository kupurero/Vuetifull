<template>
	<form-group>
        <label v-if="label" :for="id"> {{ label }} </label>

        <multiselect v-bind="$attrs" v-on="$listeners" :placeholder="placeholder" :label="tag" :id="id" :value="value"/>
    </form-group>
</template>

<script>
import { uniqId } from '@/assets/javascript/helpers';

import Multiselect from 'vue-multiselect'

/**
  *  The <v-select> component using custom styles. Optionally specify options based on an array or array of objects.
*/

export default {
    name: "vSelect",
    status: "ready",
    release: "1.0.0",

    components: {
        Multiselect,
    },

    data() {
        return {
            isFocused: false,
        }
    },

    props: {
         /**
         * Value of the input
         */
        value: {
            type: String|Object|Array,
        },
        /**
         * Name of the label
         */
        label: {
            type: String,
        },
        /**
         * placeholder
         */
        placeholder: {
            type: String,
            default: null
        },
        /**
         * key to display
         */
        tag: {
            type: String,
        },
    },

    computed: {
        id () {
            return uniqId();
        }
    }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss">
.multiselect {
    min-height: auto;
    height: 35px;

    .multiselect__select {
        height: 100%;
    }

    .multiselect__tags {
        height: 100%;
        min-height: auto;
        padding: 8px 36px 8px 12px;
        background: $color-ink-lighter;
        border: 1px solid $color-ink-lighter;
        box-shadow: none;
    }

    .multiselect__placeholder {
        color: $color-ink;
        margin: 0;
        padding: 0;
        font-size: 13px;
    }

    .multiselect__input,
    .multiselect__single {
        background: transparent;
        text-transform: capitalize;
        padding: 0;
        min-height: auto;
        font-size: 13px;
        color: $color-ink;
        line-height: 1.5;
    }

    .multiselect__content-wrapper {
        padding: 12px;
        top: 0;
        background: $color-white;
        border: 0 solid transparent;
        border-radius: 4px;
        box-shadow: 0 1px 8px $color-ink-light;
    }

    .multiselect__content {
        border: 0 solid transparent;

        .multiselect__element {
            .multiselect__option {
                display: flex;
                align-items: center;
                justify-content: space-between;
                text-transform: capitalize;
                font-size: 14px;

                &:after {
                    content: "";
                    display: block;
                    width: 10px;
                    height: 6px;
                    border-left: 4px solid transparent;
                    border-bottom: 4px solid transparent;
                    transform: rotate(-45deg);
                    padding: 0;
                    position: relative;
                    top: -2px;
                    background: transparent;
                }

                &.multiselect__option--selected {
                    pointer-events: none;

                    &:after {
                        border-color: $color-primary-light;
                    }

                    &.multiselect__option--highlight {
                        &:after {
                            border-color: $color-white;
                        }
                    }
                }

                &.multiselect__option--highlight {
                    background: $color-primary-light;
                    color: $color-white;
                    border-radius: 4px;
                }
            }
        }
    }

    .multiselect__option--selected {
        background: transparent;
    }

    .multiselect__option {
        padding: 8px 12px;
        min-height: auto;
    }
}
</style>

<docs>
## Overview
The <code><v-select></code> is a wrapper of <code>vue-multiselect</code> component.
For more informations you can check the <a href="https://vue-multiselect.js.org/#sub-getting-started" target="_blank">full documentation</a>.

```js
    new Vue({
        data: () => ({
            options: [{id: 1, name: 'First Option'}, {id: 2, name: 'Second Option'}],
        }),

        template:
        `<div>
            <v-select label="Choose an option" v-model="options" tag="name" :options="options" placeholder="Select Option" />
        </div>`
    })
```

## API
Select your desired component from below and see the available props, slots, events and functions.
</docs>
