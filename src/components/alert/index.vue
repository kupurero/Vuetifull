<template>
    <div v-if="isShown" class="alert" :class="[{'alert-danger': danger, 'alert-success': success, 'alert-warning': warning}]">
        <slot/>
        <v-button v-if="dismissible" icon="close" class="alert-close" @click="close"/>
    </div>
</template>

<script>
var defaultCountDown;

/**
  * Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
*/

export default {
	name: "vAlert",
	status: "ready",
	release: "1.0.0",
    props: {
        /**
		 * Whether the alert is display or not
		 * @values true, false
		 **/
		value: {
			type: Boolean,
			default: true,
        },
        /**
		 * If set to true, the dismiss close button will be enabled
		 * @values true, false
		**/
        dismissible: {
            type: Boolean,
            default: false
        },
        /**
		 * Set to a number (seconds) to show and automatically dismiss the alert after the number of seconds has elapsed
		**/
        countDown: {
            type: Number,
        },
		/**
		 * If set to true, the alert will have success style
		 * @values true, false
		**/
        success: {
            type: Boolean,
            default: false
        },
        /**
		 * If set to true, the alert will have danger style
		 * @values true, false
		**/
        danger: {
            type: Boolean,
            default: false
        },
        /**
		 * If set to true, the alert will have danger style
		 * @values true, false
		**/
        warning: {
            type: Boolean,
            default: false,
        }
    },

    data () {
		return {
            isShown: this.value,
            dismissCountDown: this.countDown,
		}
    },

    mounted () {
        defaultCountDown = this.countDown
    },

    watch: {
		value() {
            this.isShown = this.value

            if (this.isShown && this.dismissCountDown) this.decreaseCountDown()
		},
	},

    methods: {
        close () {
            this.dismissCountDown = defaultCountDown
            this.$emit('countDownChanged', this.dismissCountDown)

            this.$emit('input', false)
			this.$emit('onClose')

            this.isShown = false
        },

        decreaseCountDown () {
            let timer = setInterval(() => {
                this.dismissCountDown = this.dismissCountDown - 1

                this.$emit('countDownChanged', this.dismissCountDown)

                if (this.dismissCountDown == 0) {
                    clearInterval(timer)

                    this.close()
                }
            }, 1000)
        }
    }
}
</script>

<style lang="scss" scoped>
.alert {
    position: relative;
    background: $color-ink-lighter;
    border: 1px solid $color-ink-light;
    color: $color-ink;
    padding: 12px 50px 12px 16px;
    margin-bottom: 24px;
    border-radius: 4px;
    text-align: left;
    font-weight: 700;
    font-size: 14px;
    overflow: hidden;

    .alert-close {
        position: absolute;
        right: 8px;
        top: 0;
        height: 100%;
        display: flex;
        align-items: center;
        color: currentColor;
    }

    &-success {
        background-color: transparentize($color-success-light, .8);
        color: $color-success-dark;
        border-color: transparentize($color-success-light, .6);
    }

    &-danger {
        background-color: transparentize($color-danger-light, .8);
        color: $color-danger-dark;
        border-color: transparentize($color-danger-lighter, .6);
    }

    &-warning {
        background-color: transparentize($color-warning-light, .8);
        color: $color-warning-dark;
        border-color: transparentize($color-warning-light, .6);
    }
}
</style>

<docs>
## Contextual variants
For proper styling of <code><v-alert></code> use one of the required contextual
variants by setting one of the following prop: <code>primary</code>, <code>success</code>, <code>warning</code> or <code>danger</code>.

```jsx
    <v-alert>Default Alert</v-alert>
    <v-alert success>Success Alert</v-alert>
    <v-alert danger>Danger Alert</v-alert>
    <v-alert warning>Warning Alert</v-alert>
```

## Dismissible alerts
Using the dismissible prop it's possible to dismiss any <code><v-alert></code> inline. This will add a close X button. Use the <code>dismissible</code> prop to change the hidden label text associated with the dismiss button.

```jsx
    <v-alert dismissible>Dismissible Alert! Click the close button over there ⇒</v-alert>
```

## Auto dismissing alerts
To create a <code><v-alert></code> that dismisses automatically after a period of time, set the <code>countDown</code> prop to the number of seconds you would like the
<code><v-alert></code> to remain visible for. Only integer number of seconds are supported.


```jsx
    <template>
        <div>
            <v-alert warning v-model="shown" :count-down="dismissCountDown" @countDownChanged="countDownChanged">
                This alert will dismiss after {{ dismissCountDown }} seconds...
            </v-alert>

            <v-button @click="toggleAlert">Show alert with count-down timer</v-button>
        </div>
    </template>

    <script>
        export default {
            data: () => ({
                shown: false,
                dismissCountDown: 5
            }),

            methods: {
                toggleAlert() {
                    this.shown = true
                },

                countDownChanged(value) {
                    this.dismissCountDown = value
                },
            }
        }
    </script>
```

## API
Select your desired component from below and see the available props, slots, events and functions.
</docs>
