<template>
    <div :class="['avatar', `avatar-${size}`, {'avatar-primary': primary, 'avatar-danger': danger, 'avatar-success': success, 'avatar-warning': warning}]">
		<template v-if="icon"> <v-icon class="avatar_icon" :name="icon" :size="size" /> </template>

		<template v-else>
			<span v-if="title" class="avatar_title"> {{ title.charAt(0) }} </span>
			<img v-if="src" :src="src" class="avatar_image" :alt="title">
		</template>
	</div>
</template>

<script>
/**
  * Avatars are typically used to display a user profile as a picture, an icon, or short text.
*/

export default {
	name: "vAvatar",
	status: "ready",
	release: "1.0.0",
	props: {
		/**
		 * The fallback title of the avatar.
		 */
		title: {
			type: String,
			default: 'undefined',
		},
		/**
		 * The image source of the avatar.
		 */
		src: {
			type: String,
			default: null,
		},
		/**
		 * The icon source of the avatar.
		 */
		icon: {
			type: String,
			default: null,
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
		 * If set to true, the avatar will have primary style
		 * @values true, false
		**/
        primary: {
            type: Boolean,
            default: false
        },
		/**
		 * If set to true, the avatar will have success style
		 * @values true, false
		**/
        success: {
            type: Boolean,
            default: false
        },
        /**
		 * If set to true, the avatar will have danger style
		 * @values true, false
		**/
        danger: {
            type: Boolean,
            default: false
        },
        /**
		 * If set to true, the avatar will have danger style
		 * @values true, false
		**/
        warning: {
            type: Boolean,
            default: false,
        }
	},
}
</script>

<style lang="scss">
.avatar {
	overflow: hidden;
	position: relative;
	border-radius: 50%;
	border: 1px solid $color-ink-lighter;
	background-color: $color-ink;
	display: inline-block;
	font-weight: 900;
    color: $color-white;
	text-transform: uppercase;
	background-size: cover;
	background-repeat: no-repeat;

	&-primary {
        background-color: $color-primary;
        border-color: $color-primary-light;
    }

	&-success {
        background-color: $color-success;
        border-color: $color-success-light;
    }

    &-danger {
        background-color: $color-danger;
        border-color: $color-danger-light;
    }

    &-warning {
        background-color: $color-warning;
        border-color: $color-warning-light;
    }

	.avatar_image {
		position: absolute;
		top: 0;
		left: 0;
        max-width: none;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
	}

	.avatar_title,
	.avatar_icon {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		height: 100%;
		width: 100%;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
    }

    &-sm {
		width: 36px;
		height: 36px;
		flex: 0 0 36px;

		.avatar_title {
			font-size: 12px;
		}
	}


	&-md {
		width: 48px;
		height: 48px;
		flex: 0 0 48px;
	}

	&-lg {
		width: 56px;
		height: 56px;
		flex: 0 0 56px;

		.avatar_title {
			font-size: 24px;
		}
	}
}
</style>

<docs>
## Contextual variants
For proper styling of <code><v-avatar></code> use one of the required contextual
variants by setting one of the following prop: <code>success</code>, <code>warning</code> or <code>danger</code>.

```jsx
    <div>
        <v-avatar icon="user" />
        <v-avatar icon="user" primary />
        <v-avatar icon="user" success />
        <v-avatar icon="user" warning />
        <v-avatar icon="user" danger />
    </div>
```

## Sizing
You can change the size of the avatar by using the prop <code>size</code> to specify an explicit size.

```jsx
    <div>
        <v-avatar size="sm" icon="user" />
        <v-avatar icon="user" />
        <v-avatar size="lg" icon="user" />
    </div>
```

## Content
You can use different type of content with <code><v-avatar></code> component. You can specify a short string as the content of an avatar via the <code>title</code> prop.
Use the <code>src</code> prop to specify a URL of an image to use as the avatar content. The image will be scaled up or down to fit within the avatar's bounding box.
Easily use one of available icons as the avatar content via the <code>icon</code> prop. The prop should be set to a valid icon name. Icons will scale respective to the size prop.

```jsx
	<v-avatar icon="user" />
	<v-avatar text="MD" />
	<v-avatar src="https://placekitten.com/300/300" />
```

## API
Select your desired component from below and see the available props, slots, events and functions.

</docs>
