// Descrizione
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina
// all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando
// sono stati tutti generati.

console.log("vue ok", Vue);

const app = Vue.createApp({
  data() {
    return {
      email: false,
    };
  },
  methods: {
    emailList() {
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((response) => {
            this.email = response.data;
            console.log(response.data);
          });
      }
    },
  },
});

app.mount("#app");
