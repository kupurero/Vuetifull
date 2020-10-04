<template>
    <section v-show="isActive" :aria-hidden="!isActive" class="tabs-component-panel" role="tabpanel">
        <slot />
    </section>
</template>

<script>
    export default {
        name: "vTab",
        status: "ready",
        release: "1.0.0",
        props: {
            /**
             * Name of the tab
            */
            name: {
                type: String,
                required: true
            },
            /**
             * Icon of the tab
            */
            icon: {
                type: String,
            },
            /** Set it to true to active tab
             * `true, false`
            */
            active: {
                type: Boolean,
                default: false
            },
            /** Set it to true to hide tab name
             * `true, false`
            */
            iconOnly: {
                type: Boolean,
                default: false
            },
        },

        data () {
            return {
                isActive: this.active,
            };
        },

        computed: {
            hash() {
                const hash = `#${this.name.toLowerCase().replace(/ /g, '-')}`

                return hash;
            },
        },
    };
</script>
