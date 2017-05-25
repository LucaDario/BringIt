/**
 * Created by nicolo on 23/05/17.
 */
import {container, singleton, inject} from 'dependency-injection-es6';

export class modifyitem{
    constructor(){

    }

    modifyitemclicked(name,quantity,description,unity,image,itemid,listid,flag){
        //itemid.setImagePath(image);

        if (flag) {
            const fileReader = new FileReader();
            fileReader.onloadend = (e) => {

                const arrayBuffer = e.target.result;
                const fileType = 'image/*';
                blobUtil.arrayBufferToBlob(arrayBuffer, fileType).then((blob) => {
                    const reader = new FileReader();
                    reader.addEventListener("load", () => {
                        //create item with base64image
                        itemid.setImagePath(reader.result);
                        console.log("dopo"+reader.result);

                    }, false);

                    if (blob) {
                        reader.readAsDataURL(blob);
                    }

                });
            };
            fileReader.readAsArrayBuffer(image);
        }

        //console.log("dopo"+reader.result);
        console.log("infine"+ itemid.getImagePath() );
        itemid.setQuantity(quantity);
        itemid.setDescription(description);
        itemid.setMeasurementUnit(unity);
        itemid.setName(name);
        Meteor.subscribe('updateItem',listid,itemid);
    }
}

container.registerAsSingleton(modifyitem);
