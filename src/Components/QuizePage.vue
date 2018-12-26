<template>
	<div>
		<controlsGroup class="form-group" 
				  v-if="isPageReady"
                  :type="getQuestions[currentAnswer].type"
                  :category="getQuestions[currentAnswer].category"
                  :difficulty="getQuestions[currentAnswer].difficulty"
 				  :question="getQuestions[currentAnswer].question"
                  :correct_answer="getQuestions[currentAnswer].correct_answer"
                  :incorrect_answers="getQuestions[currentAnswer].incorrect_answers"

                  @clickedButton="buttonClicked"
                  > 
    	</controlsGroup>
	</div>
</template>
<script>
	import controlsGroup from "./ControlsGroup";
	export default {
		components: {
			controlsGroup
		},
		data(){
			return{
				isQuestionsMode: true,
				currentAnswer: 0
			};
		},
		computed: {
			isPageReady() {
				return this.isQuestionsMode && this.$store.getters.issQuestionsLoaded;
			},
			getQuestions() {
				return this.$store.getters.getQuestions;
			},

		},
		methods:{
			loadQuestions(){
				this.$store.dispatch("loadQuestions");
			},
			buttonClicked(e) {
				if(!this.haveMoreQuestions()) {
					this.$emit("questionsOver");
				} else {
					this.currentAnswer++;
				}
			},
			haveMoreQuestions(){
				return this.currentAnswer + 1 < this.getQuestions.length;
			}
		},
		created(){
			this.loadQuestions();

		}
	}
</script>