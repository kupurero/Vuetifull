<template>
    <form-group :validator="v">
        <label v-if="label" :for="id">
            {{ label }}
            <template v-if="isRequired">*</template>
        </label>

        <div>
            <textarea class="form-control" :id="id" :value="value" @input="$emit('input', $event.target.value)" v-bind="$attrs">{{ placeholder }}</textarea>
            <v-icon v-if="isInvalid" class="error" name="error" />
            <v-icon v-if="isDisabled" name="lock" />
        </div>

        <span v-if="helper" class="form-helper"> {{ helper }} </span>
    </form-group>
</template>

<script>
import { uniqId } from '@/assets/javascript/helpers';

/**
  * Create multi-line text inputs.
*/

export default {
    name: "vTextarea",
    status: "ready",
    release: "1.0.0",

    props: {
        /**
         * Value of the input
         */
        value: {
            type: String|Number|Boolean|Array|Object|Date|Function,
        },
        /**
         * Name of the label
         */
        label: {
            type: String,
        },
        /**
         * placeholder of the input
         */
        placeholder: {
            type: String,
        },
        /**
         * helper text
         */
        helper: {
            type: String,
        },
        /**
         * Field object validations states
         **/
        v: {
            type: Object,
            default: () => {},
        },
    },

    computed: {
        id () {
            return uniqId();
        },

        isRequired () {
            if (!this.v) return;

            return this.v.$params.required;
        },

        isDisabled () {
            return this.$attrs['disabled'] != undefined
        },

        isInvalid () {
            if (!this.v) return;

            return this.v.$anyError;
        },
    },
}
</script>

<docs>
## Overview
The <code>v-textarea</code> component in its simplest form is a multi-line text-field, useful for larger amounts of text.

```js
    new Vue({
        data: () => ({
            value: 'Hello world!',
        }),

        template:
        `<v-textarea label="description" v-model.trim="value" />`
    })
```

## API
Select your desired component from below and see the available props, slots, events and functions.
</docs>
