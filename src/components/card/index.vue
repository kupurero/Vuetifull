<template>
	<button class="card-item__container" @click="$emit('click')">
		<header class="card-item__header">
			<div class="card-item__thumbnail" :style="{ background: bgColor }">
				<div class="card-item__image">
					<template v-if="icon">
						<v-icon :name="icon" size="lg" />
					</template>

					<template v-else>
						<img v-if="img" :src="img" :alt="title">

						<template v-else>
							<template v-if="!bgColor">
								<v-icon name="picture" size="lg" />
								<p>No preview available</p>
							</template>
						</template>
					</template>
				</div>
			</div>

			<div v-if="hasSlot('actions')" class="card-item__actions">
				<v-dropdown right hover>
					<template slot="header">
						<v-button secondary icon="ellipsis" />
					</template>

					<ul> <slot name="actions" /> </ul>
				</v-dropdown>
			</div>

			<v-heading level="h4" class="card-item__title">{{ title }}</v-heading>
			<v-heading level="h5" class="card-item__subtitle">{{ subtitle }}</v-heading>
		</header>

		<div class="card-item__body">
			<slot/>
		</div>
	</button>
</template>

<script>
/**
  * A card is a flexible and extensible content container.
*/

export default {
	name: "VCard",
	status: "ready",
	release: "1.0.0",

	props: {
		/**
		 * Image source of the card
		 */
		img: {
			type: String,
		},
		/**
		 * Color to display instead of image if not empty
		 */
		bgColor: {
			type: String,
		},
		/**
		 * Title of the card
		 */
		title: {
			type: String,
		},
		/**
		 * Subtitle of the card
		 */
		subtitle: {
			type: String,
		},
		/**
		 * Icon to display instead of image
		 */
		icon: {
			type: String,
		},
	},

	methods: {
        hasSlot (name) {
            return !!this.$slots[name]
        }
    }
}
</script>

<style lang="scss">
.card-item__container {
	cursor: pointer;
	border: none;
    background: transparent;
	width: 100%;
	margin: 4px 0;

	&:hover {
		.card-item__header {
			.card-item__actions {
				opacity: 1;
				visibility: visible;
			}
		}
	}

	&:active,
	&:focus {
		outline: none;
	}

	.card-item__header {
		position: relative;

		.card-item__actions {
			opacity: 0;
			visibility: hidden;
			transition: all .3s;
			position: absolute;
			top: 8px;
			right: 8px;

			.dropdown {
				.dropdown-toggle {
					.btn {
						padding: 0 8px;
						background: transparent;
						border: none;
						color: $color-ink;
					}
				}
			}
		}

		.card-item__thumbnail {
			border-radius: 8px;
			border: 1px solid $color-ink-lighter;
			box-shadow: 0px 1px 4px transparentize($color-ink, 0.8);
			background-color: $color-ink-lighter;
			overflow: hidden;
			position: relative;
			padding-top: 56.25%;

			.card-item__image {
				position: absolute;
				display: flex;
				align-items: center;
				flex-direction: column;
				justify-content: center;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;

				img {
					max-width: none;
					width: 100%;
					height: 100%;
					object-fit: cover;
					object-position: center center;
				}
			}
		}

		.card-item__title {
			text-align: left;
			text-transform: capitalize;
			padding-top: 24px;
		}

		.card-item__subtitle {
			text-align: left;
			color: transparentize($color-ink, .65);
		}
	}

	.card-item__body {
		text-align: left;
		line-height: 1.4;
	}
}
</style>

<docs>
## Overview
Cards are built with as little markup and styles as possible,
but still manage to deliver a ton of control and customization.
Built with flexbox, they offer easy alignment and mix well with other components.

<code><v-card></code> has no fixed width to start, so they'll naturally fill the full width of its parent element.

```jsx
	<div class="row">
		<v-card title="card title" subtitle="card subtitle" img="https://placekitten.com/480/210" class="col-md-4 col-sm-6">
			Some quick example text to build on the card title and make up the bulk of the card's content.
		</v-card>

		<v-card title="card title" subtitle="card subtitle" class="col-md-4 col-sm-6">
			Some quick example text to build on the card title and make up the bulk of the card's content.
		</v-card>
	</div>
```

## Icon use
Easily use one of available icons instead of image via the <code>icon</code> prop. The prop should be set to a valid icon name. Icons will scale respective to the size prop.

```jsx
	<div class="row">
		<v-card title="card title" subtitle="card subtitle" icon="user" class="col-md-4 col-sm-6">
			Some quick example text to build on the card title and make up the bulk of the card's content.
		</v-card>
	</div>
```

## Contextual variants
You can apply different background color on card thumbnail by using <code>bg-color</code> prop.

```jsx
	<div class="row">
		<v-card title="card title" subtitle="card subtitle" bg-color="rgb(255, 153, 153)" class="col-md-4 col-sm-6">
			Some quick example text to build on the card title and make up the bulk of the card's content.
		</v-card>
	</div>
```

## API
Select your desired component from below and see the available props, slots, events and functions.
</docs>
