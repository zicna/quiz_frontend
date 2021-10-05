class Take{
    constructor({id, user_id, quiz_id, total_questions, responses}){
        this.id = id
        this.user_id = user_id
        this.quiz_id = quiz_id
        this.total_questions = total_questions
        this.responses = [responses.map(response=>{
            return new Response(response)
        })]
    }
}