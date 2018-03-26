import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    form: {
      //own info
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
        contact2: "",
      //father info
        ffname: "",
        flname: "",
        fcontact: "",
        fmail: "",
        foccupation: "",
        fincome: "",
      //mother info  
        mfname: "",
        mlname: "",
        mcontact: "",
        mmail: "",
        moccupation: "",
        mincome: "",
      //gardian info
        gfname: "",
        glname: "",
        gcontact: "",
        gmail: "",
        goccupation: "",
        gincome: "",
      // marks
        xinstitute:"",
        xboard:"",
        xmarks:"",
        xpassyear:"",
        xiiinstitute:"",
        xiiboard:"",
        xiimarks:"",
        xiipassyear:"",
        // attachments
        
        
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
    ],
    allstudents:[],
    indianstates: [
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
    // mutations: {
    //             pushing: (state, payload) => {
    //               state.allstudents.push(payload);
    //               console.log(state.allstudents);
    //               Object.keys(state.form).forEach(key => (state.form[key] = ""));
    //             }
    // }
})