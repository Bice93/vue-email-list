const app = new Vue(
    {
        el: '#root',

        data: {
            emails: [],
        },

        methods: {
            // **FUNZIONE CHE GENERA 10 EMAIL E LE AGGIUNGE ALL'ARRAY**
            generateNewEmail(){
                for(let i = 0; i <= 9; i++){
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        this.emails.push(response.data.response);
                    });
                };
                console.log(this.emails)
            },
        },

        created() {
            this.generateNewEmail();
        },


    },
);