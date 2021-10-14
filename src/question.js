class Question {
  constructor({ id, content, quiz_id, options }) {
    this.id = id;
    this.content = content;
    this.quiz_id = quiz_id;
    this.options = options.map((option) => new Option(option));
  }
}
