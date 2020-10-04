<template>
	<div class="component-status">
		<ul class="status-list">
			<li>
				<v-icon name="ready" :fill="tokens.color_success.value" size="sm"/>
				<p>Ready</p>
			</li>

			<li>
				<v-icon name="review" :fill="tokens.color_warning.value" size="sm"/>
				<p>Under review</p>
			</li>

			<li>
				<v-icon name="deprecated" :fill="tokens.color_danger.value" size="sm"/>
				<p>Deprecated</p>
			</li>

			<li>
				<v-icon name="prototype" :fill="tokens.color_primary.value" size="sm"/>
				<p>Prototype</p>
			</li>

			<li>
				<span>—</span>
				<p>Not applicable</p>
			</li>
		</ul>

		<v-table :columns="columns" :rows="components">
			<template slot-scope="props">
				<template v-if="props.props.column.field == 'status'">
					<v-icon v-if="props.props.row.status === 'ready'" name="ready" :fill="tokens.color_success.value" size="sm"/>
					<v-icon v-if="props.props.row.status === 'review'" name="review" :fill="tokens.color_warning.value" size="sm"/>
					<v-icon v-if="props.props.row.status === 'prototype'" name="prototype" :fill="tokens.color_primary.value" size="sm"/>
					<v-icon v-if="props.props.row.status === 'deprecated'" name="deprecated" :fill="tokens.color_danger.value" size="sm"/>
				</template>
			</template>
		</v-table>
  	</div>
</template>

<script>
// If you want to use your own tokens here, change the following line to:
// import designTokens from "@/assets/tokens/tokens.raw.json"
import designTokens from "@/assets/tokens/tokens.raw.json"
import orderBy from "lodash/orderBy"

export default {
	name: "components",
	data() {
		return {
			tokens: designTokens.props,
			columns: [{
				label: 'Element Name',
				field: 'name',
			}, {
				label: 'Released in',
				field: 'release',
			}, {
				label: 'Status',
				field: 'status',
			}],
		}
	},

	computed: {
		components () {
			const components = []

			let contexts = [require.context("@/components/", true, /\.vue$/)]

			contexts.forEach(context => {
				context.keys().forEach(key => components.push(context(key).default))
			})

     		return this.orderData(components)
		}
	},

	methods: {
		orderData: function(data) {
			return orderBy(data, "name", "asc")
		},
	},
}
</script>

<style lang="scss" scoped>
.status-list {
    margin: 0 0 24px;
    overflow: hidden;
    padding: 0;
    list-style: none;
    flex-direction: row;
    align-items: center;
	display: flex;

    li {
		margin: 0 24px 0 0;
		font-size: 13px;
		align-items: center;
		display: flex;

		svg,
		span {
			margin: -2px calc(16px / 2) 0 0;
		}

		p {
			margin-left: 8px;
		}
    }
}
</style>

<docs>
	```jsx
		<components />
	```
</docs>
