<template>
  <div class="main">
<div class="arrow-steps clearfix" style="margin: 0 0 5% 0; width: 100%;">
  <div class="step current"> <span> Step 1</span> </div>
    <div class="step"> <span>Step 2</span> </div>
    <div class="step"> <span> Step 3</span> </div>
    <div class="step"> <span>Step 4</span> </div>
  </div>
    <form @submit.prevent="submit1">
      <h2 class="page-heading">STUDENT DETAILS</h2>


      <!--name first and last-->
      <div id="container">

        <v-layout row>

          <v-flex pt-4 xs4  pr-4 text-xs-right><b class="adjust">Name:</b></v-flex>

          <v-flex xs4 lg5>
            <!-- <v-text-field :error-messages="errors.collect('fname')" data-vv-name="fname" v-validate="'required|alpha'" label="First Name" required v-model="form.fname"></v-text-field> -->
            <input required type="text" placeholder="First Name" name="firstname" v-validate="'required|alpha_spaces'" data-vv-delay="300"
              v-model="fname" :class="{'input': true, }" class="textinput">
            <i v-show="errors.has('firstname')"></i>
            <span v-show="errors.has('firstname')" style="color:red;">{{ errors.first('firstname') }}</span>
          </v-flex>

        </v-layout>
        <v-layout>

          <v-flex offset-xs4 xs4 lg5>
            <input type="text" placeholder="Last Name" name="lastname" v-validate="'required|alpha'" data-vv-delay="300" v-model="lname"
              :class="{'input': true, }" class="textinput">
            <i v-show="errors.has('lastname')"></i>
            <span v-show="errors.has('lastname')" style="color:red;">{{ errors.first('lastname') }}</span>
          </v-flex>
        </v-layout>

        <!--dob-->
        <v-layout row>
          <v-flex pt-4 xs4 pr-4 text-xs-right> <b class="adjust">D.O.B:</b></v-flex>
          <v-flex xs4 lg5>
            <input type="date" class="textinput" v-model="dob">
          </v-flex>
        </v-layout>

        <!-- gender-->
        <v-layout row pt-3>
          <v-flex pt-4 xs4 pr-4 text-xs-right class="name adjust"><b>GENDER:</b></v-flex>
          <v-flex xs8>
            <v-radio-group :mandatory="true" row :error-messages="errors.collect('gender')" data-vv-name="gender" v-model="form.gender">
              <v-flex xs6 lg2 offset-lg1>
                <v-radio name="radio_group_1" label="Male" :error-messages="errors.collect('gender')" data-vv-name="gender" v-validate="'required|in:1,2'"
                  value="1"></v-radio>
              </v-flex>
              <v-flex xs6 lg2 offset-lg1>
                <v-radio name="radio_group_1" label="Female" value="2"></v-radio>
              </v-flex>
            </v-radio-group>
          </v-flex>
          <span v-show="errors.has('male')">{{ errors.any('radio_group_1') }}</span>
        </v-layout>
        <!-- blood groups -->
        <v-layout row wrap>
          <v-flex pt-4 xs4 pr-4 text-xs-right><b class="adjust">BLOOD GROUP:</b></v-flex>
          <v-flex xs4 pt-3 lg5>
            <div class="select-field" label="Select">
              <select name="bloodgroup" label="Select" v-validate="'required'" data-vv-delay="300" v-model="bloodgroup">
                                            <option value="" hidden>Blood group</option>
                                            <option  v-for="item in items">{{item.text}}</option>
                                    </select>
            </div>
            <i v-show="errors.has('bloodgroup')"></i>
            <span v-show="errors.has('bloodgroup')" style="color:red;">{{ errors.first('bloodgroup') }}</span>

          </v-flex>
        </v-layout>

        <!-- e-mail -->
        <v-layout row>
          <v-flex pt-4 xs4 pr-4 text-xs-right><b class="adjust">E-MAIL:</b></v-flex>
          <v-flex xs4 lg5>
            <input type="text" placeholder="E-mail" name="e-mail" v-validate="'required|email'" data-vv-delay="300" v-model="mail"
              :class="{'input': true, }" class="textinput">
            <i v-show="errors.has('e-mail')"></i>
            <span v-show="errors.has('e-mail')" style="color:red;">{{ errors.first('e-mail') }}</span>


          </v-flex>
        </v-layout>

        <!--permanent address -->
        <v-layout row>
          <v-flex pt-4 xs4 pr-4 text-xs-right>
            <b class="adjust">ADDRESS-1:</b>
          </v-flex>

          <v-flex xs4 lg5>
            <input type="text" placeholder="Address-1" name="address-1" v-validate="'required'" data-vv-delay="300" v-model="add1"
              :class="{'input': true, }" class="textinput">
            <i v-show="errors.has('address-1')"></i>
            <span v-show="errors.has('address-1')" style="color:red;">{{ errors.first('address-1') }}</span>
          </v-flex>


        </v-layout>

        <!-- city and state of permnent address -->
        <v-layout row>

          <v-flex pt-4 xs4 pr-4 text-xs-right>
            <b class="adjust">CITY:</b>
          </v-flex>
          <v-flex xs4 pt-3 lg5>
            <div class="select-field">
              <select name="city-1" v-validate="'required'" data-vv-delay="300" v-model="add1city">
                                            <option value="" hidden>City</option>
                                            <option  v-for="item in items">{{item.text}}</option>
                                    </select>
            </div>
            <i v-show="errors.has('city-1')"></i>
            <span v-show="errors.has('city-1')" style="color:red;">{{ errors.first('city-1') }}</span>


          </v-flex>

        </v-layout>
        <v-layout>

          <v-flex pt-4 xs4 pr-4 text-xs-right>
            <b class="adjust">STATE:</b>
          </v-flex>
          <v-flex xs4 pt-3 lg5>
            <div class="select-field">
              <select name="state-1" v-validate="'required'" v-model="add1state">
                                            <option value="" hidden>State</option>
                                            <option  v-for="item in items">{{item.text}}</option>
                                    </select>
            </div>
            <i v-show="errors.has('state-1')"></i>
            <span v-show="errors.has('state-1')" style="color:red;">{{ errors.first('state-1') }}</span>


          </v-flex>



        </v-layout>

        <!--pincode-->
        <v-layout>
          <v-flex pt-4 xs4 pr-4 text-xs-right>
            <b class="adjust">PINCODE:</b>
          </v-flex>
          <v-flex xs4 lg5>
            <input type="text" placeholder="Pincode" name="pincode" v-validate="'required|digits:6'" data-vv-delay="300" v-model="add1pincode"
              :class="{'input': true, }" class="textinput">
            <i v-show="errors.has('pincode')"></i>
            <span v-show="errors.has('pincode')" style="color:red;">{{ errors.first('pincode') }}</span>
            <!-- <v-text-field  v-model="form.add1pincode" v-validate="'required|digits:6'" label="pincode" required  :error-messages="errors.collect('pin')" data-vv-name="pin" ></v-text-field> -->


          </v-flex>
        </v-layout>

        <!-- temporary address -->
        <v-layout row>
          <v-flex pt-4 xs4 pr-4 text-xs-right>
            <b class="adjust"> ADDRESS-2:</b>
          </v-flex>
          <v-flex xs4 lg5>
            <input type="text" placeholder="Address" name="address-2" v-model="add2" :class="{'input': true, }" class="textinput">
          </v-flex>

        </v-layout>

        <!-- state and address of temporry address -->
        <v-layout row>

          <v-flex pt-4 xs4 pr-4 text-xs-right>
            <b class="adjust">CITY:</b>
          </v-flex>
          <v-flex xs4 pt-3 lg5>
            <div class="select-field">
              <select name="city-2" v-model="add2city">
                                            <option value="" hidden>City</option>
                                            <option  v-for="items in items">{{items.text}}</option>
                                    </select>
            </div>

          </v-flex>

        </v-layout>
        <v-layout>

          <v-flex pt-4 xs4 pr-4 text-xs-right>
            <b class="adjust">STATE:</b>
          </v-flex>
          <v-flex xs4 pt-3 lg5>
            <div class="select-field">
              <select name="state-2" v-model="add2state">
                                            <option value="" hidden>State</option>
                                            <option  v-for="states in states">{{states.text}}</option>
                                    </select>
            </div>
          </v-flex>



        </v-layout>

        <!--pincode-->
        <v-layout>
          <v-flex pt-4 xs4 pr-4 text-xs-right>
            <b class="adjust">PINCODE:</b>
          </v-flex>
          <v-flex xs4 lg5>
            <input type="text" placeholder="Pincode" name="pincode-2" v-model="add2pincode" :class="{'input': true, }" class="textinput">
          </v-flex>
        </v-layout>

        <!-- contact numbers -->
        <v-layout>
          <v-flex pt-4 xs4 pr-4 text-xs-right>
            <b class="adjust">CONTACT DETAILS:</b>
          </v-flex>
          <v-flex xs4 lg5>
            <input type="text" placeholder="Contact 1" name="contact1" v-validate="'required|digits:10'" data-vv-delay="300" v-model="contact1"
              :class="{'input': true, }" class="textinput">
            <i v-show="errors.has('contact1')"></i>
            <span v-show="errors.has('contact1')" style="color:red;">{{ errors.first('contact1') }}</span>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs4 lg5 offset-xs4>
            <input type="text" placeholder="Contact 2" name="contact2" v-model="contact2" :class="{'input': true, }" class="textinput">
          </v-flex>
        </v-layout>
        <!-- buttons-->
        <v-layout row wrap pt-3 pb-3>
          <v-flex xs4>

          </v-flex>
          <v-flex xs4>
            <v-btn @click="submit" type="submit" color="primary">CONTINUE</v-btn>
            <v-btn @click="clear" color="primary">clear</v-btn>
          </v-flex>



        </v-layout>
      </div>
    </form>
  </div>
</template>




<script>
  export default {
    $_veeValidate: {
      validator: "new"
    },
    computed: {
      form() {
        return this.$store.state.form;
      },
      items() {
        return this.$store.state.items;
      },
      states() {

        return this.$store.state.indianstates;
      }
    },
    data() {
      return {
        menu: false,
        fname: "",
        lname: "",
        dob: "",
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



        // valid: false,

      }
    },
    mounted() {
      this.$validator.localize("en", this.dictionary);
    },
    watch: {
      menu(val) {
        val && this.$nextTick(() => (this.$refs.picker.activePicker = "YEAR"));
      }
    },
    methods: {
      submit() {

        

        this.$validator.validateAll().then((result) => {
          if (result) {
            if (this.errors.any() == false) {
              this.$emit('form1validity', 3);
            }
            return;
          }
        });
         this.form.fname = this.fname;
          this.form.lname = this.lname;
          this.form.dob = this.dob;
          this.form.bloodgroup = this.bloodgroup;
          this.form.mail = this.mail;
          this.form.add1 = this.add1;
          this.form.add1city = this.add1city;
          this.form.add1state = this.add1state;
          this.form.add2pincode = this.add2pincode;
          this.form.contact1 = this.contact1;
          this.form.contact2 = this.contact2;
      },
      submit1() {
        this.$validator.validateAll();
      },
      clear() {
        this.form.fname = "",
          this.form.lname = "",
          this.form.dob = null,
          this.form.gender = "",
          this.form.bloodgroup = "",
          this.form.mail = "",
          this.form.add1 = "",
          this.form.add1city = "",
          this.form.add1state = "",
          this.form.add1pincode = "",
          this.form.add2 = "",
          this.form.add2city = "",
          this.form.add2state = "",
          this.form.add2pincode = "",
          this.form.contact1 = "",
          this.form.contact2 = "";
        this.$validator.reset();
      },
      valid: function () {
        return false;
      }


    }
  };

</script>

<style scoped>
  .main {
    width: 100%;
    background-color: #FFFBFB;
    font-family: 'Source Sans Pro', sans-serif;
    padding-top: 2%;
    /* border: 1px solid black; */
  }

  #container {
    padding-top: 3%;
  }

  .page-heading {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 520;
    color: white;
    font-size: 20px;
    margin-left: 10%;
    width: 70%;
    display: block;
    background-color: #455553;
    margin-left: 15%;
    padding: 0.2% 0;
    box-shadow: 2px 2px 4px -1px rgba(0, 0, 0, 0.75);
    letter-spacing: 0.05em;
    margin-top: 2%;
  }

  .textinput {
    border-style: solid;
    border-color: #F3EFE7;
    background-color: #F3EFEF;
    border-width: 0.1px;
    width: 100%;
    padding: 5px 5px 5px 10px;
    vertical-align: middle;
    align-self: auto;
    margin-top: 18px;
    display: table-cell;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3) inset, 0 1px rgba(255, 255, 255, 0.06);
    margin-left: 10%;
    /* padding-right: 100px; */
    /* box-shadow: 0.1px 0.1px 0.1px 0.1px black ; */
  }



  .select-field {
    display: inline-block;
    width: 100%;

    margin: 0px;
    margin-left: 10%;
    padding: 0px;
    padding-left: 5px;
    background-color: #F3EFEF;
    position: relative;
    z-index: 1;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3) inset, 0 1px rgba(255, 255, 255, 0.06);

  }

  .select-field:after {
    content: "";
    width: 0px;
    height: 0px;
    border-top: 7px solid lightslategray;
    border-right: 7px solid transparent;
    border-left: 7px solid transparent;
    position: absolute;
    top: 12px;
    right: 15px;
    z-index: 2;
  }

  .adjust {
    letter-spacing: 0.05em;
    text-transform: uppercase;

  }

.clearfix:after {
    clear: both;
    content: "";
    display: block;
    height: 0;
}


.arrow-steps .step {
	font-size: 14px;
	text-align: center;
	color: #666;
	cursor: default;
	margin: 0 3px;
	padding: 10px 10px 10px 30px;
	min-width: 24.3%;
	float: left;
	position: relative;
	background-color: #d9e3f7;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none; 
  transition: background-color 0.2s ease;
}


 @media screen and (max-width: 800px) {
  
  .arrow-steps .step {
	font-size: 14px;
	text-align: center;
	color: #666;
	cursor: default;
	margin: 0 3px;
	padding: 10px 10px 10px 30px;
	min-width: 24.1%;
	float: left;
	position: relative;
	background-color: #d9e3f7;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none; 
  transition: background-color 0.2s ease;
}

}

@media screen and (max-width: 480px) {
  
  .arrow-steps .step {
	font-size: 14px;
	text-align: center;
	color: #666;
	cursor: default;
	margin: 0 3px;
	padding: 10px 10px 10px 30px;
	min-width: 23.3%;
	float: left;
	position: relative;
	background-color: #d9e3f7;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none; 
  transition: background-color 0.2s ease;
}

}


.arrow-steps .step:after,
.arrow-steps .step:before {
	content: " ";
	position: absolute;
	top: 0;
	right: -17px;
	width: 0;
	height: 0;
	border-top: 19px solid transparent;
	border-bottom: 17px solid transparent;
	border-left: 17px solid #d9e3f7;	
	z-index: 2;
  transition: border-color 0.2s ease;
} 

.arrow-steps .step:before {
	right: auto;
	left: 0;
	border-left: 17px solid #fff;	
	z-index: 0;
}

.arrow-steps .step:first-child:before {
	border: none;
}

.arrow-steps .step:first-child {
	border-top-left-radius: 4px;
	border-bottom-left-radius: 4px;
}
.arrow-steps .step:last-child:after {
	/* border-right: 1px solid black; */
  display: none;
}
.arrow-steps .step span {
	position: relative;
}

.arrow-steps .step span:before {
	opacity: 0;
	content: "✔";
	position: absolute;
	top: -2px;
	left: -20px;
}

.arrow-steps .step.done span:before {
	opacity: 1;
	-webkit-transition: opacity 0.3s ease 0.5s;
	-moz-transition: opacity 0.3s ease 0.5s;
	-ms-transition: opacity 0.3s ease 0.5s;
	transition: opacity 0.3s ease 0.5s;
}

.arrow-steps .step.current {
	color: #fff;
	background-color: #455553;
}

.arrow-steps .step.current:after {
	border-left: 17px solid #455553;	
}
  input {
    border-radius: 4px;
  }

  .select-field {
    border-radius: 4px;
  }

  .select-field>select {
    float: left;
    width: 100%;
    margin: 0px;
    padding: 5px 5px 5px 7px;
    border: 0px;
    font-family: 'Source Sans Pro', sans-serif;

    color: grey;
    border-radius: 4px;

    /* border-radius: 4px; */
    position: relative;
    z-index: 3;
  }

  .select-field>select>option {
    padding: 10px;
  }

  

</style>
