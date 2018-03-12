function a(){
    console.log("Legacy");
}

var b = () => {
    console.log('ES6');
};


b();

a();