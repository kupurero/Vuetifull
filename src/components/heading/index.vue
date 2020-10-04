<template>
	<component :is="level" class="heading" :class="[level, { bordered: bordered }]"> <slot/> </component>
</template>

<script>
/**
 * Headings are used as the titles of each major section of a page in the
 * interface. For example, templates generally use headings as their title.
 * Heading element provides an option to change the level of the heading.
 */

export default {
	name: "vHeading",
	status: "ready",
	release: "1.0.0",
	props: {
    /**
     * The heading level used for the heading.
	 * @values h1, h2, h3, h4, h5
     */
	level: {
		type: String,
		default: "h1",
		validator: value => {
			return value.match(/(h1|h2|h3|h4|h5)/)
		},
	},
	/**
     * Set it to true to add border bottom to heading
     * @values true, false
     */
	bordered: {
		type: Boolean,
		default: false
	},
  },
}
</script>

<style lang="scss" scoped>
.heading {
	margin: 0 0 8px;
	display: flex;
	align-items: center;
	font-family: $font-heading;

	.btn {
		margin-right: 8px;
	}

	&.bordered {
		border-bottom: 1px solid $color-ink-light;
    	padding-bottom: 8px;
	}
}

h1,
.h1 {
	font-size: 32px;
	font-weight: 900;
	margin-bottom: 0;
}

h2,
.h2 {
	font-size: 20px;
	font-weight: 900;
}

h3,
.h3 {
	font-size: 18px;
	font-weight: 700;
}

h4,
.h4 {
	font-size: 16px;
	font-weight: 900;
}

h5,
.h5 {
	font-size: 13px;
	font-weight: 400;
}
</style>

<docs>
```jsx
    <p>
        Our core belief is that the products we design should work across anything that can access the web.
        Whether it’s a laptop, a smartphone, a watch, or even a browser integrated into a car’s dashboard.
    </p>

    <br>

    <v-heading level="h1">The quick brown fox</v-heading>
    <v-heading level="h2">The quick brown fox</v-heading>
    <v-heading level="h3">The quick brown fox</v-heading>
    <v-heading level="h4">The quick brown fox</v-heading>
    <v-heading level="h5">The quick brown fox</v-heading>
```

## API
Select your desired component from below and see the available props, slots, events and functions.
</docs>
