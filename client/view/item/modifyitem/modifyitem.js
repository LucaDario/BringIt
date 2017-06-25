/**
 * Created by nicolo on 23/05/17.
 */
import {container, singleton, inject} from 'dependency-injection-es6';

export class modifyitem{
    constructor(){

    }

    modifyitemclicked(name,quantity,description,unity,image,item,listid,flag){
        let imagePath = undefined;

        if (flag) {
            const fileReader = new FileReader();
            fileReader.onloadend = (e) => {

                const arrayBuffer = e.target.result;
                const fileType = 'image/*';
                blobUtil.arrayBufferToBlob(arrayBuffer, fileType).then((blob) => {
                    const reader = new FileReader();
                    reader.addEventListener("load", () => {
                        //create item with base64image
                        item.setQuantity(quantity);
                        item.setDescription(description);
                        item.setMeasurementUnit(unity);
                        item.setName(name);
                        item.setImagePath(reader.result);
                        Meteor.subscribe('updateItem',listid,item);

                    }, false);

                    if (blob) {
                        reader.readAsDataURL(blob);
                    }

                });
            };
            fileReader.readAsArrayBuffer(image);
        }
        else{

            item.setQuantity(quantity);
            item.setDescription(description);
            item.setMeasurementUnit(unity);
            item.setName(name);
            Meteor.subscribe('updateItem',listid,item);

        }

    }
}

container.registerAsSingleton(modifyitem);
