class Take {
  constructor({ id, user_id, quiz_id, total_questions, responses, num_correct_answers }) {
    this.id = id;
    this.user_id = user_id;
    this.quiz_id = quiz_id;
    this.total_questions = total_questions;
    this.num_correct_answers = num_correct_answers
    //
    // !we need this logic because if we are getting take from db it will have responses
    // !if we are creating new take from frontend at the time of creating new take there are no responses
    if (!!responses === true) {
      this.responses = [
        responses.map((response) => {
          return new Response(response);
        }),
      ];
    }
  }
}
