<template>
	<i class="icon" v-html="svg" :class="['icon', `icon-${size}`]"/>
</template>

<script>
const req = require.context('@/assets/icons', true, /^\.\/.*\.svg$/)

/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. They can act as wayfinding tools to help users more
 * easily understand where they are in the product.
 */

export default {
	name: "vIcon",
    status: "ready",
	release: "1.0.0",

    props: {
		/**
		 * The name of the icon to display.
		*/
		name: {
			required: true,
			default: "close",
		},
		/**
		 * The fill color of the SVG icon.
		*/
		fill: {
			type: String,
			default: "currentColor",
		},
		/**
		 * The size of the icon. Defaults to medium.
		 * @values sm, md, lg
		*/
		size: {
			type: String,
			default: "md",
			validator: value => {
				return value.match(/(sm|md|lg)/)
			},
		},
	},

	data() {
		return {
			svg: req(`./${this.name}.svg`).replace(/^<svg /, `<svg style="fill: ${this.fill}" `),
		}
	},
}
</script>


<style lang="scss">
.icon {
	display: inline-flex;

	&-lg {
		svg {
			width: 32px;
			height: 32px;
		}
	}

	&-md {
		svg {
			width: 24px;
			height: 24px;
		}
	}

	&-sm {
		svg {
			width: 16px;
			height: 16px;
		}
	}
}
</style>

<docs>
## Overview
Icons can be used outside any component thanks to the <code><v-icon></code>. Specify the icon you want to call from the icons folder with
a <code>name</code> prop matching with an svg file name.

```jsx
    <div>
        <v-icon name="user" />
        <v-icon name="thumb-up" />
    </div>
```

## Sizing
You can change the size of the icon by using the prop <code>size</code> to specify an explicit size.

```jsx
    <div>
        <v-icon name="thumb-up" size="sm" />
        <v-icon name="thumb-up" />
        <v-icon name="thumb-up" size="lg" />
    </div>
```

## Color
You can change the color of the icon by setting the <code>fill</code> prop. The default is <code>currentColors</code>.

```jsx
    <div>
        <v-icon name="thumb-up" fill="rgb(255, 5, 5" />
        <v-icon name="thumb-up" fill="rgb(249, 205, 72)" />
        <v-icon name="thumb-up" fill="rgb(134, 193, 68)" />
    </div>
```

## API
Select your desired component from below and see the available props, slots, events and functions.
</docs>
