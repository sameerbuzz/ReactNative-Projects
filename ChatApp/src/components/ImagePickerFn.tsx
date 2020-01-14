import ImagePicker from 'react-native-image-crop-picker';
import { RNS3 } from 'react-native-aws3';

const myPicker = {

    getSinglePic : (callback) => {
        ImagePicker.openPicker({     
            cropping: true
        }).then(image => {
            callback(image.path)
        });  
    },

    getMultiplePic : (callback) => {
        let temp = [];
        ImagePicker.openPicker({     
        cropping: true,
        multiple: true,
    }).then(image => {
        image.forEach((item)=> {
        temp.push(item.path);
      });
      callback(temp)
        })
    },

    getCamera : (callback) => {
        ImagePicker.openCamera({     
            cropping: true
          }).then(image => {
            callback(image.path)
          });
    },

    getVideo : (callback) => {
        ImagePicker.openPicker({ 
            mediaType: 'video'    
            }).then(video => {
              callback(video.path)
        });
    },

    uploadmyPic : ( key, callback) => {
        
        const file= {
            uri: "file://"+key,
            name: "pics1",
            type: 'image/jpeg'
          }

        const options = {
            bucket: "appinventiv-development",
            region: "us-east-1",
            accessKey: "AKIAJ3UHQTWRRT2AH3RA",
            secretKey: "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"
          };

          RNS3.put(file, options).then(response => {
            if (response.status !== 201) {
              throw new Error('Failed to upload image to S3', response);
            }
            callback(response.body)
          })
          .catch(err => console.error(err))
         
    }
}


export default myPicker;