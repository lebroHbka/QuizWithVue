<template>
  <div class="wraper">
    <quize @questionsOver="questionsOver" v-if="!isQuestionsOver"></quize>
    <dashboard v-else></dashboard>
  </div>
</template>

<script>
  import quize from "./Components/QuizePage";
  import dashboard from "./Components/DashboardPage";
  export default {
    components:{
      quize,dashboard
    },
    data() {
      return {
        isQuestionsOver: false
      };
    },
    methods: {
      questionsOver() {
        this.isQuestionsOver = true;
      }
    }
      
  }
</script>

