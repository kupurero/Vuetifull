<template>
	<div>
       <div v-if="isOpen" class="modal-backdrop" @click.self="closeModal">
            <div class="modal-content" :class="[`modal-${size}`]">
                <div class="modal-header">
                    <v-heading v-if="title" level="h3"> {{ title }} </v-heading>

                    <p v-if="subtitle"> {{ subtitle }} </p>
                </div>

                <div class="modal-body">
                    <slot />
                </div>

                <footer class="modal-footer">
                    <slot name="footer" />
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
/**
  * Modals are streamlined, but flexible dialog prompts powered by JavaScript and CSS.
*/

export default {
	name: "vModal",
	status: "ready",
	release: "1.0.0",

	props: {
		/**
		 * Whether the modal is opened or not
		 * @values true, false
		 **/
		value: {
			type: Boolean,
			default: false,
		},
		/**
		 * The size of the modal. Defaults to medium.
         * @values sm, md, lg, xl
		*/
		size: {
			type: String,
			default: 'md',
			validator: value => {
				return value.match(/(sm|md|lg|xl)/)
			},
        },
        /**
		 * Title of the modal
		 **/
		title: {
			type: String,
			default: "",
		},
		/**
		 * Subtitle of the modal
		**/
		subtitle: {
			type: String,
			default: '',
		},
		/**
		 * Set it to false if you want to block modale closing
         * @values sm, md, lg, xl
		**/
		isClosable: {
			type: Boolean,
			default: true,
		}
  	},

	data() {
		return {
			isOpen: this.value,
		}
	},

	watch: {
		value() {
			this.isOpen = this.value
		},
	},

	computed: {},

	methods: {
		closeModal() {
			if (!this.isClosable) return;

			this.$emit('input', false)
			this.$emit('onClose')

			this.isOpen = false
		},
	},
}
</script>

<style lang="scss" scoped>
.modal-backdrop {
	position: fixed;
	z-index: 9999;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: transparentize($color-ink, 0.8);
	padding-top: 125px;
	cursor: pointer;

	.modal-content {
		background-color: $color-white;
		border: 1px solid $color-ink-lighter;
		position: relative;
		border-radius: 8px;
		width: 98%;
		margin: 0 auto;
		cursor: initial;

		&.modal-sm {
			max-width: 300px;
		}

		&.modal-md {
			max-width: 500px;
		}

		&.modal-lg {
			max-width: 800px;
		}

		&.modal-xl {
			max-width: 1140px;
		}

		.modal-header {
			padding: 24px 16px;
			text-align: center;
			position: relative;

			.heading {
				text-transform: capitalize;
				justify-content: center;
			}

			.modal-close {
				background: transparent;
				border: 0 solid;
				position: absolute;
				top: 27px;
				right: 16px;
				padding: 0;
			}
    	}

		.modal-body {
			padding: 0 16px 16px;
			max-height: 50vh;
			overflow: auto;

			&::-webkit-scrollbar {
				width: 0 !important;
			}
		}

		.modal-footer {
			display: flex;
			justify-content: flex-end;
			padding: 16px;
			margin: 0 -4px;

			.btn {
				margin: 0 4px;
			}
		}
  	}
}
</style>

<docs>

## Visibility
<code>v-model</code> property is always automatically synced with <code><v-modal></code> visible state and you can show/hide using <code>v-model</code>.

```js
    new Vue({
        data: () => ({
            showModal: false,
        }),

        template:
            `<div>
                <v-button primary @click="showModal = true">Show Modal</v-button>

                <v-modal v-model="showModal" title="Main title" subtitle="I am a subtitle">
                    I'm the default content!
                    <template slot="footer">
                        <v-button primary>Click me</v-button>
                    </template>
                </v-modal>
            </div>`
    })
```

## Sizing
Modals have multiple optional sizes, available via the prop size. Valid optional sizes are <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.

```js
    new Vue({
        data: () => ({
            showModalSm: false,
            showModalLg: false,
            showModalXl: false,
        }),

        template:
            `<div>
                <v-button primary @click="showModalSm = true">Modal sm</v-button>
                <v-button primary @click="showModalLg = true">Modal lg</v-button>
                <v-button primary @click="showModalXl = true">Modal xl</v-button>

                <v-modal v-model="showModalSm" title="Main title" subtitle="I am a subtitle" size="sm">
                    I'm the default content!
                </v-modal>

                <v-modal v-model="showModalLg" title="Main title" subtitle="I am a subtitle" size="lg">
                    I'm the default content!
                </v-modal>

                 <v-modal v-model="showModalXl" title="Main title" subtitle="I am a subtitle" size="xl">
                    I'm the default content!
                </v-modal>
            </div>`
    })
```

## API
Select your desired component from below and see the available props, slots, events and functions.
</docs>
