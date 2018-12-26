<template>
	<div class="form-group">
		<div v-for="(a, index) in answers" :key="a + sufix">
			<input type="checkbox"
					:value="a"
					v-model="checkedAnswers[index]"
					:id="a + sufix"
					@change="changedAnswer">
			<label :for="a+sufix">{{a}}</label>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			answers: Array,
			needClear: Boolean
		},
		data(){
			return {
				sufix: parseInt(Math.random() * 6192),
				checkedAnswers: []
			};
		},
		watch: {
			needClear(val) {			
				if(val) {
					this.$set(this, "checkedAnswers", []);
					this.$emit("update:needClear", false);
				}
			}
		},
		methods: {
			changedAnswer() {
				this.$emit("changedAnswer", this.checkedAnswers);
			}
		}
	}
</script>