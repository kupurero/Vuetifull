<template>
    <div ref="dropdown" class="dropdown" @mouseover="openDropdown" @mouseleave="closeDropdown" v-click-outside="() => {isOpen = false}">
        <div class="dropdown-toggle" @click.stop="toggleDropdown">
            <span>
                <slot name="header" />
            </span>
        </div>

        <div  v-show="isOpen" :class="{'align-right': right}" class="dropdown-menu">
            <div class="dropdown-content">
                <slot/>
            </div>
        </div>
    </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

/**
  * Dropdowns are toggleable, contextual overlays for displaying lists of links and actions in a dropdown menu format.
*/

export default {
    name: "vDropdown",
	status: "ready",
    release: "1.0.0",

    directives: {
        ClickOutside
    },

    props: {
        /**
		 * Use this option align dropdown menu on right.
        */
        right: {
            type: Boolean,
            default: false
        },
        /**
		 * If set to true, the menu will display on hover
		 * @values true, false
		**/
        hover: {
            type: Boolean,
            default: false
        },
    },

    data: () => ({
        isOpen: false,
    }),

    mounted () {
        const $toggler = this.$refs.dropdown.querySelector('.dropdown-toggle > span')
		console.log("​mounted -> $toggler", $toggler)

        if ($toggler.firstChild.nodeName == 'BUTTON') $toggler.parentNode.classList.add('has-button');
    },

    methods: {
        toggleDropdown () {
            this.setDropdownPosition();

            this.isOpen = !this.isOpen;
        },

        openDropdown () {
            this.$emit('mouseover');

            this.setDropdownPosition();

            if(this.hover) this.isOpen = true;
        },

        closeDropdown () {
            this.$emit('mouseleave');

            this.$refs.dropdown.blur()

            this.isOpen = false;
        },

        setDropdownPosition () {
            const $el = this.$refs.dropdown;
            const scrollTop = window.scrollY;
            const topOffset = $el.offset().top;
            const relativeOffset = topOffset - scrollTop;
            const wHeight = window.innerHeight;

            const isReversed = $el.closest('tr').is(':last-child') || relativeOffset > wHeight / 2

            $el.querySelector(".dropdown-menu")[ isReversed ? 'addClass' : 'removeClass' ]('reverse');
        }
    }
}
</script>

<style lang="scss">
.dropdown {
    position: relative;
    display: inline-block;

    .dropdown-toggle {
        vertical-align: bottom;
        display: inline-block;
        cursor: pointer;

        > span {
            display: flex;
            align-items: center;
        }

        &.has-button > span > button > span:after,
        &:not(.has-button) > span:after {
            content: '';
            display: block;
            width: 0px;
            height: 0px;
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            border-top: 6px solid currentColor;
            margin-left: 8px;
            margin-top: 2px;
        }
    }

    .dropdown-menu {
        padding: 4px 0;
        position: absolute;
        min-width: 144px;
        max-width: 288px;
        z-index: 200;
        top: 100%;
        left: 0;

        &.reverse {
            top:auto;
            bottom:100%;
        }

        &.align-right {
            right: 0;
            left: inherit;
        }

        .dropdown-content {
            border-radius: 4px;
            border: 1px solid $color-ink-lighter;
            background-color: $color-white;
            white-space: nowrap;

            ul {
                list-style-type: none;
                margin: 0;
                padding: 0;

                li {
                    a,
                    button:not(.btn) {
                        font-size: 14px;
                        white-space: nowrap;
                        padding: 4px 24px;
                        display: flex;
                        width: 100%;
                        align-items: center;
                        color: $color-ink;
                        padding: 8px 16px;
                        text-decoration: none;
                        background: transparent;
                        border: none;
                        outline: none;
                        cursor: pointer;

                        &:hover,
                        &:active,
                        &:focus {
                            background-color: $color-primary-lighter;
                            color: $color-primary;
                        }

                        &[disabled] {
                            pointer-events: none;
                            color: $color-ink;
                            background-color: transparentize($color-ink, .9);
                        }

                        .icon {
                            margin-right: 4px;

                            svg {
                                width: 16px;
                                height: 16px;
                            }
                        }
                    }
                }

            }
        }
    }
}
</style>

<docs>
## Content
You can customize the content of the dropdown button by using the <code>header</code> slot. The slot allows you to use basic HTML or vue component.

```jsx
    <div>
        <v-dropdown>
            <template slot="header">
                <v-avatar title="U" />
            </template>

            <ul>
                <li>
                    <a href="#!">
                        <v-icon name="pen"/>
                        An item
                    </a>
                </li>
                <li>
                    <a href="#!">
                        <v-icon name="trash"/>
                        An other item
                    </a>
                </li>
            </ul>
        </v-dropdown>

         <v-dropdown>
            <template slot="header">
                <v-button primary>Click me</v-button>
            </template>

            <ul>
                <li>
                    <a href="#!">
                        <v-icon name="pen"/>
                        An item
                    </a>
                </li>
                <li>
                    <a href="#!">
                        <v-icon name="trash"/>
                        An other item
                    </a>
                </li>
            </ul>
        </v-dropdown>
    </div>
```

## Menu Alignment
The dropdown menu can either be left aligned (default) or right aligned with respect to the button above it. To have the dropdown aligned on the right, set the <code>right</code> prop.

```jsx
    <div>
        <v-dropdown>
            <template slot="header">
                <v-button primary>Click me</v-button>
            </template>

            <ul>
                <li>
                    <a href="#!">
                        <v-icon name="pen"/>
                        An item
                    </a>
                </li>
                <li>
                    <a href="#!">
                        <v-icon name="trash"/>
                        An other item
                    </a>
                </li>
            </ul>
        </v-dropdown>

         <v-dropdown right>
            <template slot="header">
                <v-button primary>Hover me</v-button>
            </template>

            <ul>
                <li>
                    <a href="#!">
                        <v-icon name="pen"/>
                        An item
                    </a>
                </li>
                <li>
                    <a href="#!">
                        <v-icon name="trash"/>
                        An other item
                    </a>
                </li>
            </ul>
        </v-dropdown>
    </div>
```

## Dropdown Toggling
Dropdown can be open by clicking on the header element (default) or on hover. To open it on hover, set the <code>hover</code> prop.

```jsx
    <div>
        <v-dropdown hover>
            <template slot="header">
                <v-button primary>Click me</v-button>
            </template>

            <ul>
                <li>
                    <a href="#!">
                        <v-icon name="pen"/>
                        An item
                    </a>
                </li>
                <li>
                    <a href="#!">
                        <v-icon name="trash"/>
                        An other item
                    </a>
                </li>
            </ul>
        </v-dropdown>
    </div>
```

## API
Select your desired component from below and see the available props, slots, events and functions.
</docs>
