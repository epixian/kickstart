<template>
	<div class="ks-radio-group" :class="groupClass">
		<label class="ks-radio-group-title label">
			<slot>{{label}}</slot>
		</label>
		<div class="radio">
			<template v-for="option in optionsList">
				<ks-radio
					:name="name"
					:value="option.value"
					:label="option.label"
					:checked="value"
                    @input="selectRadio($event)"
				><slot v-if="$slots[option.value]" :name="option.value"></slot></ks-radio>
			</template>
		</div>
	</div>
</template>


<script>
	import KsRadio from './KsRadio.vue';
    import OptionGroups from './mixins/OptionGroups';

    export default {
		name: 'KsRadioGroup',

        mixins: [OptionGroups],

		model: {
			prop: 'value'
		},

		props: {
			value: {},
			label: String,
			name: {
				type: String,
				required: true
			},
		},

		data() {
			return {
				selectedValue: this.value
			};
		},

        methods: {
            selectRadio(value) {
                if ( this.value != value ) {
                    this.$emit('input', value);
                }
            }
        },

		components: {
			KsRadio
		}
	}
</script>
