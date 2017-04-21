/**
 * Created by manu on 21/04/17.
 */

class Bringit extends Monolith.bubble.ToDoListBubble {
    constructor(){
        super();
        this.addItem("Test1", false);
        this.addItem("Test2", false);
    }
}


/**
 * Register the custom bubble 'Bringit' in monolith
 */
Meteor.startup(function () {
    if(Meteor.isClient) {
        Monolith.bubble.addBubble("Bringit", function (message) {
            const bubble = new Bringit();
            return bubble;
        });
    }
});