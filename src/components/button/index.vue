<template>
	<component :is="markup" :href="href" class="btn" :class="[{'btn-outline': outline, 'btn-primary': primary, 'btn-warning': warning, 'btn-danger': danger, 'btn-success': success, 'btn-block': block, 'icon-only': iconOnly}, `btn-${size}`]" :disabled="disabled" v-on="$listeners">
        <span>
		    <v-icon v-if="icon" :size="size" :name="icon"/>
		    <slot/>
        </span>
	</component>
</template>

<script>
/**
  * Use v-button component for actions in forms, dialogs, and more.
*/

export default {
	name: "vButton",
	status: "ready",
	release: "1.0.0",

  	props: {
		/**
		 * Name of button's icon
     	**/
		icon: {
			type: String
        },
        /**
		 * If set to true, the button will have no background color
		 * @values true, false
        **/
        outline: {
            type: Boolean,
            default: false,
		},
		/**
		 * If set to true, the button will use a primary level
		 * @values true, false
		**/
        primary: {
            type: Boolean,
            default: false,
		},
		/**
		 * If set to true, the button will use a danger level
		 * @values true, false
		**/
		danger: {
			type: Boolean,
            default: false,
        },
        /**
		 * If set to true, the button will use a success level
		 * @values true, false
		**/
		success: {
			type: Boolean,
            default: false,
        },
        /**
		 * If set to true, the button will use a warning level
		 * @values true, false
		**/
		warning: {
			type: Boolean,
            default: false,
		},
		/**
		 * The size of the button. Defaults to medium.
         * @values sm, md, lg
		*/
		size: {
			type: String,
			default: "md",
			validator: value => {
				return value.match(/(sm|md|lg)/)
			},
		},
		/**
		 * If set to true, the button will have 100% width
		 * @values true, false
		**/
		block: {
			type: Boolean,
			default: false
        },
        /**
		 * If set to true, the button will be disabled
		 * @values true, false
		**/
		disabled: {
			type: Boolean,
			default: false
		},
		/**
		 * Link attribute
		**/
		href: {
			type: String,
		},
	},

	data () {
        return {
            iconOnly: !this.$slots.default,
        };
	},

	computed: {
		markup () {
			return this.href ? 'a' : 'button'
		}
	}
}
</script>

<style lang="scss">
.btn {
    vertical-align: bottom;
	transition: all 0.2s ease;
	display: inline-block;
	border-radius: 4px;
	background: $color-white;
	border: 1px solid $color-ink-light;
	color: $color-primary;
    text-decoration: none;
    line-height: 1;
    cursor: pointer;

    > span {
        display: flex;
        align-items: center;
        justify-content: center;
    }

	&:hover,
	&.hover {
		background-color: $color-primary-lighter;
		border-color: $color-primary-lighter;
		color: $color-primary;
	}

	&:active,
	&.active,
	&:focus,
	&.focus {
		background-color: $color-white;
		border-color: transparentize($color-primary, .8);
		box-shadow: 0 0 0 0.2rem transparentize($color-primary, .8);
		color: $color-primary;
	}

	&[disabled] {
		pointer-events: none;
		opacity: .65;
		cursor: not-allowed;
	}

	&:focus {
		outline: none;
	}

	&.icon-only:not(.btn-primary):not(.btn-danger) {
		padding: 0;
		background: transparent;
		border: none;

		.icon {
			margin: -3px;
		}
	}

	&-primary {
		background: $color-primary;
		border: 1px solid $color-primary;
		color: $color-white;

		&:hover,
		&.hover {
            background-color: $color-primary-dark;
            color: $color-white;
		}

		&:active,
		&.active,
		&:focus,
		&.focus {
			background-color: transparent;
			border-color: transparentize($color-primary, .8);
            box-shadow: 0 0 0 0.2rem transparentize($color-primary, .8);
			color: $color-primary;
        }

        &.btn-outline {
            background: transparent;
            color: $color-primary;

            &:hover,
            &.hover {
                background-color: $color-primary;
                color: $color-white;
            }

            &:active,
            &.active,
            &:focus,
            &.focus {
                background-color: transparent;
                color: $color-primary;
            }
        }
	}

	&-danger {
		background: $color-danger;
		border: 1px solid $color-danger;
		color: $color-white;

		&:hover,
		&.hover {
            color: $color-white;
			background-color: $color-danger-dark;
		}

		&:active,
		&.active,
		&:focus,
		&.focus {
            color: $color-danger;
            background-color: $color-white;
			border-color: transparentize($color-danger, .8);
            box-shadow: 0 0 0 0.2rem transparentize($color-danger, .8);
        }

        &.btn-outline {
            background: transparent;
            color: $color-danger;

            &:hover,
            &.hover {
                background-color: $color-danger;
                color: $color-white;
            }

            &:active,
            &.active,
            &:focus,
            &.focus {
                background-color: transparent;
                color: $color-danger;
            }
        }
    }

    &-warning {
		background: $color-warning;
		border: 1px solid $color-warning;
		color: $color-white;

		&:hover,
		&.hover {
            background-color: $color-warning-dark;
            color: $color-white;
		}

		&:active,
		&.active,
		&:focus,
		&.focus {
            color: $color-warning;
            background-color: $color-white;
			border-color: transparentize($color-warning, .8);
            box-shadow: 0 0 0 0.2rem transparentize($color-warning, .8);
        }

        &.btn-outline {
            background: transparent;
            color: $color-warning;

            &:hover,
            &.hover {
                background-color: $color-warning;
                color: $color-white;
            }

            &:active,
            &.active,
            &:focus,
            &.focus {
                background-color: transparent;
                color: $color-warning;
            }
        }
    }

    &-success {
		background: $color-success;
		border: 1px solid $color-success;
		color: $color-white;

		&:hover,
		&.hover {
            color: $color-white;
			background-color: $color-success-dark;
        }

		&:active,
		&.active,
		&:focus,
		&.focus {
            color: $color-success;
            background-color: $color-white;
			border-color: transparentize($color-success, .8);
            box-shadow: 0 0 0 0.2rem transparentize($color-success, .8);
        }

        &.btn-outline {
            background: transparent;
            color: $color-success;

            &:hover,
            &.hover {
                background-color: $color-success;
                color: $color-white;
            }

            &:active,
            &.active,
            &:focus,
            &.focus {
                background-color: transparent;
                color: $color-success;
            }
        }
    }

	&-block {
		width: 100%;
    }

	&-lg {
		padding: 8px 16px;
		font-size: 24px;

		.icon {
			margin: -16px 8px -16px -8px;
        }

        &.icon-only {
            .icon {
                margin: 8px 0;
            }
        }
	}

	&-md {
		padding: 8px 16px;
		font-size: 18px;

		.icon {
			margin: -16px 8px -16px -8px;
        }

        &.icon-only {
            .icon {
                margin: 8px 0;
            }
        }
	}

	&-sm {
		padding: 4px 8px;
		font-size: 12px;

		.icon {
			margin: -8px 8px -8px 0;
        }

        &.icon-only {
            .icon {
                margin: 4px 0;
            }
        }
    }
}
</style>

<docs>
## Element type
The <code><v-button></code> component generally renders a <code><button></code> element.
However, you can also render an <code><a></code> element by providing an href prop value.


```jsx
    <div>
        <v-button>I'm a button</v-button>
        <v-button href="#">I am a Link</v-button>
    </div>
```

## Block button
Create block level buttons — those that span the full width of a parent — by setting the <code>block</code> prop.

```jsx
    <v-button block>Block Level Button</v-button>
```

## Sizing
Fancy larger or smaller buttons? Specify <code>lg</code> or <code>sm</code> via the size prop.

```jsx
    <v-button size="sm">Small Button</v-button>
    <v-button>Default Button</v-button>
    <v-button size="lg">Large Button</v-button>
```

## Icon use
Easily use one of available icons via the <code>icon</code> prop. The prop should be set to a valid icon name. Icons will scale respective to the size prop.

```jsx
    <div>
        <v-button primary size="sm" icon="user">Button</v-button>
        <v-button primary icon="user">Button</v-button>
        <v-button primary size="lg" icon="user">Button</v-button>
    </div>

    <br>

    <div>
        <v-button primary size="sm" icon="user" />
        <v-button primary icon="user" />
        <v-button primary size="lg" icon="user" />
    </div>
```

## Contextual variants
For proper styling of <code><v-button></code> use one of the required contextual
variants by setting one of the following prop: <code>primary</code>, <code>success</code>, <code>warning</code> or <code>danger</code>.

```jsx
    <v-button>Default</v-button>
    <v-button primary>Primary</v-button>
    <v-button success>Success</v-button>
    <v-button warning>Warning</v-button>
    <v-button danger>Danger</v-button>
```

## Outline color variants
In need of a button, but not the hefty background colors they bring? Use the <code>outline</code> prop to remove all background colors on any <code><v-button></code>.

```jsx
    <v-button primary outline>Primary</v-button>
    <v-button success outline>Success</v-button>
    <v-button warning outline>Warning</v-button>
    <v-button danger outline>Danger</v-button>
```

## Disabled state
Set the <code>disabled</code> prop to disable button default functionality

```jsx
    <v-button primary disabled>Primary</v-button>
    <v-button success disabled>Success</v-button>
    <v-button warning disabled>Warning</v-button>
    <v-button danger disabled>Danger</v-button>
```

## API
Select your desired component from below and see the available props, slots, events and functions.
</docs>
