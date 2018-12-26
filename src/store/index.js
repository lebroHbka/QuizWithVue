import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		questions: [],
		answers: [],
		isQuestionsLoaded: false
	},
	mutations:{
		saveQuestions(state, questions) {
			Vue.set(state, "questions", questions);
		},
		setQuestionsLoaded(state, val) {
			state.isQuestionsLoaded = val;
		},
		saveAnswer(state, val) {
			state.answers.push(val);
		}
	},
	getters : {
		getQuestions(state) {
			return state.questions;
		},
		issQuestionsLoaded(state) {
			return state.isQuestionsLoaded;
		},
		getAnswers(state) {
			return state.answers;
		}
	},
	actions:{
		loadQuestions(store) {
			Axios.get("https://opentdb.com/api.php?amount=5")
				 .then(response => {
				 	store.commit("saveQuestions", response.data.results);
				 	store.commit("setQuestionsLoaded", true);
				 });
		}
	}
});
