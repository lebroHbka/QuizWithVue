<template>
	<div class="form-group">
		<div v-for="a in answers" :key="a + sufix">
			<input type="radio"
					:value="a"
					v-model="checkedAnswers[0]"
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
				sufix: parseInt(Math.random() * 6482),
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
				this.changedAnswer();
			},
			changedAnswer() {
				this.$emit("changedAnswer", this.checkedAnswers);
			}
		}
	}
</script>