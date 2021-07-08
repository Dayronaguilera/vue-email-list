Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            emails:[],//array vuoto che verra popolato dalla funzione!
            
        },
        created(){
            this.getemail();// richiamando la funzione colleghiamo la chiamata con array
            //altrimenti possiamo creare un bottone dove al click inseriremo modifichermo il dato che verra eseguio nel html!
            // this.arrayFull();
        },
        methods: {
            getemail: function () {
                for (let x = 0; x < 10; x++) {
                    
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')// inseriamo l'indirizzo al quale faremo la chiamata!
                    .then((response) => {  // appena il server ci risponde, si attiva questa funzione
                        this.emails.push(response.data.response);//pusha cio che abbiamo chiesto nella chiamata!
                        //ps: nn e ancora visibile dal array "array e vuoto"
                        
                    });
                    
                };
                
            },
            
        }    
    });

  

