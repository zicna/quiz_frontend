// !still unused file if deletet make sure you take it off from index.html

class Helper{
    static getAllSiblings(parent){
        // debugger
        const container = parent.parentElement
        let firstSibling = container.firstElementChild
        let siblings = []
        while(firstSibling){
            siblings.push(firstSibling)
            firstSibling = firstSibling.nextElementSibling
        }
        return siblings
    }
}