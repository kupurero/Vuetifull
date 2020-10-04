<template>
    <form-group :validator="v" :class="{'reverse': reverse}">
        <label v-if="label" :for="id">
            {{ label }} <template v-if="isRequired">*</template>
        </label>

        <div>
            <input class="form-control" :id="id" :type="type" :value="value" @input="$emit('input', $event.target.value)" v-bind="$attrs">
            <v-icon v-if="isInvalid" class="error" name="error" />
            <v-icon v-if="isDisabled" name="lock" />
        </div>

        <span v-if="helper" class="form-helper"> {{ helper }} </span>
    </form-group>
</template>

<script>
import { uniqId } from '@/assets/javascript/helpers';

/**
  * Create form inputs.
*/

export default {
    name: "vInput",
    status: "ready",
    release: "1.0.0",

    props: {
        /**
         * Value of the input
         */
        value: {
            type: String|Number|Boolean|Array|Object|Date|Function,
            default: ''
        },
        /**
         * Name of the label
         */
        label: {
            type: String,
        },
        /**
		 * Type of the input.
		 * `text, email, tel, number`
		*/
        type: {
            type: String,
            default: 'text',
            validator: value => {
                return value.match(/(text|email|tel|number|password)/)
            },
        },
        /**
         * placeholder of the input
         */
        placeholder: {
            type: String,
            default: ''
        },
        /**
         * Set it to true to revert label and field order
         */
        reverse: {
            type: Boolean,
            default: false
        },
        /**
         * helper text
         */
        helper: {
            type: String,
            default: ''
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
The <code>v-input</code> component gives you a baseline to create your own custom inputs.

```js
    var validators = require('vuelidate/lib/validators');

    new Vue({
        data: () => ({
            form: {
                name: 'John Doe',
                email: 'johndoe@mail.com',
                age: '21'
            }
        }),

        validations: {
            form: {
                name: {},
                email: {
                    required: validators.required,
                    email: validators.email
                },
                age: {
                    numeric: validators.numeric,
                    required: validators.required
                }
            }
        },

        template:
        `<div>
            <v-input label="Name" v-model.trim="$v.form.name.$model" placeholder="Enter Name"/>
            <v-input type="email" label="Email" v-model.trim="$v.form.email.$model" placeholder="Enter Email" :v="$v.form.email"/>
            <v-input type="text" label="Age" v-model.trim="$v.form.age.$model" :v="$v.form.age"/>
        </div>`
    })
```

## API
Select your desired component from below and see the available props, slots, events and functions.
</docs>
