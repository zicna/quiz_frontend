class Take {
  constructor({ id, user_id, quiz_id, total_questions, responses }) {
    this.id = id;
    this.user_id = user_id;
    this.quiz_id = quiz_id;
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
