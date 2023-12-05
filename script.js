const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      currentIndex: 0,
      questions: [
        {
          id: 1,
          title: "What is your name?",
          answer: "",
        },
        {
          id: 2,
          title: "What is your hobby?",
          answer: "",
        },
        {
          id: 3,
          title: "What is your age?",
          answer: "",
        },
        {
          id: 4,
          title: "Are you single?",
          answer: "",
        },
      ],
    };
  },
  computed: {
    // same as getter in oop js (no need any parameteer and must return something)
    currentQuestion() {
      return this.questions[this.currentIndex];
    },
  },
  methods: {
    next() {
      this.currentIndex === this.questions.length - 1
        ? alert("you are at the end point of the questions")
        : (this.currentIndex += 1);

      this.$refs.answerInput.focus();
    },
    previous() {
      this.currentIndex === 0
        ? alert("you are at the start point of the questions")
        : (this.currentIndex -= 1);

      this.$refs.answerInput.focus();
    },
  },
});
app.mount("#app");
