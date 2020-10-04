<template>
	<div class="table-container" ref="table">
		<vue-good-table :columns="columns" :rows="rows" :search-options="searchOptions" :pagination-options="paginationOptions" styleClass="vgt-table">
            <template slot="table-row" slot-scope="props">
                <template v-if="$scopedSlots['default']">
                    <slot :props="props"/>
                </template>

                <template v-else>
                    <template v-if="props.column.field == 'actions'">
                        <v-dropdown class="vgt-actions" right hover>
                            <template slot="header">
                                <v-button icon="ellipsis" size="sm" secondary />
                            </template>

                            <ul> <slot name="actions" :props="props.row"/> </ul>
                        </v-dropdown>
                    </template>

                    <template v-else>
                        {{ props.formattedRow[props.column.field] }}
                    </template>
                </template>
			</template>
		</vue-good-table>
	</div>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css';
import { VueGoodTable } from 'vue-good-table';

/**
  * For displaying tabular data, <v-table> supports pagination, filtering, sorting, custom rendering
*/

export default {
	name: "VTable",
	status: "ready",
	release: "1.0.0",

	components: {
		VueGoodTable,
	},

	props: {
		/**
		 * Columns to be displayed in table head.
		*/
		columns: {
			type: Array,
			default: () => [],
			required: true,
		},
		/**
		 * Object to display in table
		**/
		rows: {
			type: Array,
			default: () => [],
			required: true,
		},
		/**
		 * If set to true, the table will be searchable
		 * @values true, false
		**/
		searchable: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		searchOptions () {
			const options = {
				enabled: this.searchable,
				placeholder: ''
			}

			return options;
		},

		paginationOptions () {
			const options = { enabled: false }

			return options;
        },
    },
}
</script>

<style lang="scss">
table.vgt-table {
    background: transparent;
    border-collapse: separate;
    border-spacing: 0 4px;
    border: none;

    thead {
		tr {
			th {
				background: transparent;
				color: $color-ink-light;
                font-weight: 700;
                font-size: 14px;
                border-color: transparent;
                padding: 0 24px 8px 0;
                border: none;

                &.sorting {
                    color: $color-ink;
                }

                &.sortable {
                    &.sorting-desc {
                        &::after {
                            transform: rotate(180deg);
                        }
                    }

                    &::after {
                        display: inline-block;
                        position: initial;
                        transition: all .3s;
                        border-bottom-color: currentColor;
                        margin: 0 0 2px 8px!important;
                    }
                }


                &::before { display: none; }
			}
		}
    }

    tbody {
        tr {
            td {
                position: relative;
                background-color: $color-white;
                font-size: 14px;
                padding: 16px 24px 16px 0;
                color: $color-ink;
                vertical-align: middle;
                cursor: pointer;

                .form-group {
                    padding: 0;
                }
            }

            &:hover {
                .vgt-actions {
                    opacity: 1;
                    visibility: visible;
                }
            }
        }
    }

    .vgt-actions {
        position: absolute;
        top: 23.5px;
        right: 24px;
        opacity: 0;
        visibility: hidden;
        transition: all .8s;

        .dropdown-toggle {
            .btn {
                background: transparent;
                color: $color-ink-light;
                border: none;

                &:hover,
                &:focus {
                    color: $color-primary;
                    box-shadow: none !important;
                }
            }
        }
    }
}
</style>

<docs>
## Overview
The <code><v-table></code> is a wrapper of <code>vue-good-table</code> component.
For more informations you can check the <a href="https://xaksis.github.io/vue-good-table/guide/" target="_blank">full documentation</a>.

```js
    new Vue({
        data: () => ({
            columns: [{
                    label: 'Name',
                    field: 'name',
                }, {
                    label: 'Age',
                    field: 'age',
                    type: 'number',
                }, {
                    label: 'Created On',
                    field: 'createdAt',
                    type: 'date',
                    dateInputFormat: 'yyyy-MM-dd',
                    dateOutputFormat: 'MMM do yy',
                }, {
                label: 'Percent',
                field: 'score',
                type: 'percentage',
            }],
            rows: [
                { id:1, name:"John", age: 20, createdAt: '',score: 0.03343 },
                { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
                { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
                { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
                { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
                { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
            ]
        }),
        template:
            `<v-table :columns="columns" :rows="rows">`
    })
```

## API
Select your desired component from below and see the available props, slots, events and functions.
</docs>
