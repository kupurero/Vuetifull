<template>
    <div class="tabs-component">
        <ul role="tablist" class="tabs-component-tabs" :class="{'tabs-component-tabs--justify': justified}">
            <li v-for="(tab, idx) in tabs" :key="idx" :class="{ 'is-active': tab.isActive, 'is-disabled': tab.isDisabled }" class="tabs-component-tab">
                <a :aria-controls="tab.hash" :aria-selected="tab.isActive" @click="toggle(tab.hash, $event)" :href="tab.hash" class="tabs-component-tab-link" role="tab">
                    <v-icon v-if="tab.icon" :name="tab.icon" />
                    <template v-if="!tab.iconOnly"> {{ tab.name }} </template>
                </a>
            </li>
        </ul>

        <div class="tabs-component-panels">
            <slot/>
        </div>
    </div>
</template>

<script>
/**
  * Tabs make it easy to explore, switch between different views and enable content organization at a high level, such as different data sets or functional aspects of an app.
*/

export default {
    name: "vTabs",
    status: "ready",
    release: "1.0.0",

    props: {
        justified: {
            type: Boolean,
            default: false
        }
    },

    data: () => ({
        tabs: []
    }),

     mounted () {
        this.tabs = this.$children.filter(child => {
            return child.$options.name == 'vTab'
        })
    },

    methods: {
        findTab(hash) {
            return this.tabs.find(tab => tab.hash === hash);
        },

        toggle(selectedTabHash, event) {
            event.preventDefault();

            const selectedTab = this.findTab(selectedTabHash);

            if (!selectedTab) return;

            this.tabs.forEach(tab => {
                tab.isActive = (tab.hash === selectedTab.hash);
            });
        },
    },
};
</script>

<style lang="scss">
.tabs-component {
    .tabs-component-tabs {
        border-bottom: 1px solid $color-ink-lighter;
        list-style-type: none;
        display: flex;

        &--justify {
            .tabs-component-tab {
                flex-basis: 0;
                flex-grow: 1;
                text-align: center;

                .tabs-component-tab-link {
                    justify-content: center;
                }
            }
        }

        .tabs-component-tab {
            .tabs-component-tab-link {
                text-decoration: none;
                position: relative;
                display: block;
                padding: 12px 16px;
                color: $color-ink-light;
                display: flex;
                align-items: center;
            }

            &.is-active {
                .tabs-component-tab-link {
                    color: $color-ink;

                    &::before {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        right: 0;
                        width: 100%;
                        height: 4px;
                        background: $color-primary-light;
                        border-radius: 4px;
                    }
                }
            }
        }
    }

    .tabs-component-panels {
        padding: 16px;
    }
}
</style>

<docs>
## Overview
The <code>v-tabs</code> component is used for hiding content behind a selectable item.
This can also be used as a pseudo-navigation for a page, where the tabs are links and the tab-items are the content.

```jsx
    <v-tabs>
        <v-tab name="Tab 1" active>
            This is the content of the first tab
        </v-tab>
        <v-tab name="Tab 2">
            This is the content of the second tab
        </v-tab>
    </v-tabs>
```

## Justified
For equal-width controls, use the <code>justified</code> prop. All horizontal space will be occupied by the controls
```jsx
    <v-tabs justified>
        <v-tab name="Tab 1" active>
            This is the content of the first tab
        </v-tab>
        <v-tab name="Tab 2">
            This is the content of the second tab
        </v-tab>
    </v-tabs>
```

## API
Select your desired component from below and see the available props, slots, events and functions.
</docs>
