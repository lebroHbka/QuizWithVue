<template>
		<table class="table">
		<thead>
			<tr>
				<th v-for="c in columnTitles" :key="c"> {{c}}</th>
			</tr>
		</thead>
			<tbody>
				
				<tr v-for="(q, i) in getQuestions" :key="i">
					<td> {{q.question}} </td>
					<td> {{getQuestionsResult[i]}}</td>
				</tr>
			</tbody>
		</table>
</template>
<script>
	export default {
		data(){
			return {
				columnTitles: ["Question", "Correctness"]
			};
		},
		computed: {
			getQuestionsResult(){
				return this.$store.getters.getAnswers;
			},
			getQuestions() {
				return this.$store.getters.getQuestions;
			}
		},
		methods: {
			
		}
	}
</script>