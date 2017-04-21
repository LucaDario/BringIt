/**
 * Created by manu on 21/04/17.
 */

class TestBolla extends Monolith.bubble.ToDoListBubble {
    constructor(){
        super();
        this.addItem("Test1", false);
        this.addItem("Test2", false);
    }
}


Monolith.bubble.addBubble("test", function (message) {
    const bubble = new TestBolla();
    return bubble;
});
