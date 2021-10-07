class Take {
  constructor({ id, user_id, quiz_id, total_questions, num_correct_answers }) {
    this.id = id;
    this.user_id = user_id;
    this.quiz_id = quiz_id;
    this.total_questions = total_questions;
    this.num_correct_answers = num_correct_answers;
  }

  static deleteTakeDOM(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
      const take_id = parseInt(el.id.split("-")[1]);
      takeCall.deleteTakeDB(take_id);
    }
  }
}
