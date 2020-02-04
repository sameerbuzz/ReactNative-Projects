import ImagePicker from 'react-native-image-crop-picker';


const myPicker = {

    getSinglePic : (callback: Function) => {
        ImagePicker.openPicker({     
            cropping: false
        }).then((image: { path: string; }) => {
            // console.warn(image)
            callback(image)
        });  
    },

    getMultiplePic : (callback: Function) => {
        let temp: Array<string>;
        ImagePicker.openPicker({     
        cropping: false,
        multiple: true,
    }).then((image: Array<any>) => {
        temp = image.map( item => item.path);
      callback(temp)
        })
    },

    getCamera : (callback: Function) => {
        ImagePicker.openCamera({     
            cropping: true
          }).then((image: { path: string; }) => {
            callback(image.path)
          });
    },

    getVideo : (callback: Function) => {
        ImagePicker.openPicker({ 
            mediaType: 'video'    
            }).then((video: { path: string; }) => {
              callback(video.path)
        });
    },
}


export default myPicker;