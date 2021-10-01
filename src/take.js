class Take{
    constructor({id, user_id, quiz_id, responses}){
        this.id = id
        this.user_id = user_id
        this.quiz_id = quiz_id
        this.responses = [responses.map(response=>{
            return new Response(response)
        })]
    }
}