import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    form: {
      fname: "",
      lname: "",
      dob: null,
      gender: "",
      bloodgroup: "",
      mail: "",
      add1: "",
      add1city: "",
      add1state: "",
      add1pincode: "",
      add2: "",
      add2city: "",
      add2state: "",
      add2pincode: "",
      contact1: "",
      contact2: ""
    },
    form2: {
      ffname: "",
      flname: "",
      fcontact: "",
      fmail: "",
      foccupation: "",
      fincome: "",

      mfname: "",
      mlname: "",
      mcontact: "",
      mmail: "",
      moccupation: "",
      mincome: "",

      gfname: "",
      glname: "",
      gcontact: "",
      gmail: "",
      goccupation: "",
      gincome: ""
    },

    items: [
      { text: "O positive" },
      { text: "O negative" },
      { text: "A negative" },
      { text: "A positive" },
      { text: "B  negative" },
      { text: "B positive" },
      { text: "AB negative" },
      { text: "AB positive" }
    ]
  },
  mutations: {
    //
  },
  actions: {
    //
  }
});
