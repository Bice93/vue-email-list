const app = new Vue(
    {
        el: '#root',

        data: {
            currentEmail: '',
        },

        methods: {

            generateNewEmail(){
                for(let i = 0; i <= 9; i++){
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        this.currentEmail = response.data.response;
                        console.log(this.currentEmail)
                    });
                };
            },
        },

        created() {
            this.generateNewEmail();
        },


    },
);