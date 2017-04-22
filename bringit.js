/**
 * Created by manu on 21/04/17.
 */
import {Bringit} from './client/bringit/Bringit'


/**
 * Register the custom bubble 'Bringit' in monolith
 */
Meteor.startup(function () {
    if(Meteor.isClient) {
        Monolith.bubble.addBubble("Bringit", function (message) {
            const bubble = new Bringit("prova");
            return bubble;
        });
    }
});