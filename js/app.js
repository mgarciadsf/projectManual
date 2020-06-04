/*var app = {
	inicio: function () {
        this.iniciaSw ();
        console.log("estas en inicio")
	},
	
    iniciaSw: function () {
    
      if (ServiceWorker in navigator) {
        try {
            navigator.serviceWorker.register("sw.js");
            console.log("ServiceWorker registrado");
        }catch (error){
            console.log("ServiceWorker no registrado");

        }
    }

}
};

if ('addEventListener' in document) {
	document.addEventListener ('load', function () {
		app.inicio();
	}, false);
	
}*/
window.addEventListener('load', e=>{
    console.log("estamos en aplicacion");

    if ('serviceWorker' in navigator) {
        try {
            navigator.serviceWorker.register("./sw.js");
            console.log("ServiceWorker registrado");
        }catch (error){
            console.log("ServiceWorker no registrado");

        }
    }

});
