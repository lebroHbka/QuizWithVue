<template>
	<div>
		<h2>{{question}}</h2>
		<hr>
		<component :is="getGroupType" 
					:answers="getTotalAnswers" 
					:needClear.sync="needClear"
					@changedAnswer="changedAnswer"></component>
		<hr>
		<button class="btn btn-primary" @click="clickedButton" :disabled="!isAnswerSelected">NEXT</button>
		{{this.correct_answer}}
	</div>
</template>
<script>
	import radioGroup from "./RadioGroup";
	import checkboxGroup from "./CheckboxGroup";
	export default {
		components: {
			radioGroup,
			checkboxGroup
		},
		props: {
			type: String,
            category: String,
            difficulty: String,
			question: String,
            correct_answer: String,
            incorrect_answers: Array
		},
		data(){
			return{
				isAnswerSelected: false,
				selectedAnswers: [],
				needClear: false
			}
		},
		methods: {
			changedAnswer(e) {
				this.isAnswerSelected = true;
				this.selectedAnswers = e;
			},
			clickedButton() {
				this.sendButtonClickMsg();
				this.clearSelectedAnswers();
			},
			clearSelectedAnswers(){
				this.$set(this, "selectedAnswers", []);
				this.needClear = true;
			},
			sendButtonClickMsg() {
				this.$emit("clickedButton");
				this.saveResultsInStore(this.isAnswersCorrect());
			},
			isAnswersCorrect(){
				let sa = this.selectedAnswers,
				    ca = this.correct_answer,
				    ta = this.getTotalAnswers;
				for (var i = sa.length - 1; i >= 0; i--) {
					if((sa[i] !== true && ta[i] === ca) || (sa[i] === true && ta[i] !== ca))
						return false;
				}
				return true;
			},
			saveResultsInStore(result) {
				this.$store.commit("saveAnswer", result);
			},

		},
		computed: {
			getGroupType() {
				switch(this.type){ 
					case "multiple":
						return "checkboxGroup";
					
					case "boolean":
						return "radioGroup";
				}	
			},
			getTotalAnswers() {
				return [...this.incorrect_answers, this.correct_answer];
			}
		}
	}
</script>