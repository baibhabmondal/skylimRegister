<template>
  <div class="main">
    <div class="arrow-steps clearfix" style="margin: 0 0 5% 0; width: 100%;">
      <div class="step "> <span> Step 1</span> </div>
      <div class="step"> <span>Step 2</span> </div>
      <div class="step current"> <span> Step 3</span> </div>
      <div class="step"> <span>Step 4</span> </div>
      <div class="step"> <span>Step 5</span> </div>
    </div>
    <form @submit.prevent="submit1" id="jay">

      <h2 class="page-heading">EDUCATIONAL BACKGROUND</h2>
      <!-- 10th board  -->
      <v-layout row>
        <v-flex xs5 lg5>
          <h3> X BOARD DETAILS</h3>

        </v-flex>
      </v-layout>

      <!-- details of your 10 board -->
      <v-layout row v-if="!hideFields.has('X institution')">
        <v-flex xs4 lg5 pt-4 text-xs-right>
          <b>Name of the institution :</b>
        </v-flex>
        <v-flex xs4 lg4>
          <input v-model="xinstitute" type="text" placeholder="Institution name" name="X institution" v-validate="'required|alpha_spaces'"
            data-vv-delay="300" :class="{'input': true, }" class="textinput">
          <span v-show="errors.has('X institution')" style="color:red;">{{ errors.first('X institution') }}</span>
        </v-flex>
      </v-layout>
      <!-- name of the board  -->
      <v-layout row v-if="!hideFields.has('X board')">
        <v-flex xs4 lg5 pt-4 text-xs-right>
          <b>Name of the board :</b>
        </v-flex>
        <v-flex xs4 lg4>
          <input v-model="xboard" type="text" placeholder="Name of the board" name="X board" v-validate="'required|alpha_spaces'"
            data-vv-delay="300" :class="{'input': true, }" class="textinput">
          <span v-show="errors.has('X board')" style="color:red;">{{ errors.first('X board') }}</span>
        </v-flex>
      </v-layout>
      <!-- marks scored in 10    -->
      <v-layout row v-if="!hideFields.has('X marks')">
        <v-flex xs4 lg5 pt-4 text-xs-right>
          <b>Marks scored :</b>
        </v-flex>
        <v-flex xs4 lg4>
          <input v-model="xmarks" type="text" placeholder="Marks scored" name="X marks" v-validate="'required|alpha_spaces'" data-vv-delay="300"
            :class="{'input': true, }" class="textinput">
          <span v-show="errors.has('X marks')" style="color:red;">{{ errors.first('X marks') }}</span>
          <!-- <v-text-field label="First Name"  required ></v-text-field> -->
        </v-flex>
      </v-layout>
      <!-- year of passing 10         -->
      <v-layout row wrap v-if="!hideFields.has('X passing year')">
        <v-flex xs4 lg5 pt-4 text-xs-right>
          <b>Year of passing :</b>
        </v-flex>
        <v-flex xs4 lg4 pt-3>
          <div class="select-field">
            <select v-model="xpassyear" name="X passing year" v-validate="'required'">
                        <option  value="" hidden>State</option>
                        <option  v-for="item in items">{{item.text}}</option>
                    </select>
          </div>

          <span v-show="errors.has('X passing year')" style="color:red;">{{ errors.first('X passing year') }}</span>
        </v-flex>
      </v-layout>
      <!-- 12th board     -->
      <v-layout row >
        <v-flex xs5 lg5>
          <h3> XII BOARD DETAILS</h3>
        </v-flex>
      </v-layout>
      <!-- details of your 12 board -->
      <v-layout row v-if="!hideFields.has('XII institution')">
        <v-flex xs4 lg5 pt-4 text-xs-right>
          <b>Name of the institution :</b>
        </v-flex>
        <v-flex xs4 lg4>
          <input v-model="xiiinstitute" type="text" placeholder="Institution name" name="XII institution" v-validate="'required|alpha_spaces'"
            data-vv-delay="300" :class="{'input': true, }" class="textinput">
          <span v-show="errors.has('XII institution')" style="color:red;">{{ errors.first('XII institution') }}</span>
        </v-flex>
      </v-layout>
      <!-- name of the board -->
      <v-layout row v-if="!hideFields.has('XII board')">
        <v-flex xs4 lg5 pt-4 text-xs-right>
          <b>Name of the board :</b>
        </v-flex>
        <v-flex xs4 lg4>
          <input v-model="xiiboard" type="text" placeholder="Name of the board" name="XII board" v-validate="'required|alpha_spaces'"
            data-vv-delay="300" :class="{'input': true, }" class="textinput">
          <span v-show="errors.has('XII board')" style="color:red;">{{ errors.first('XII board') }}</span>
        </v-flex>
      </v-layout>
      <!-- marks scored in 12    -->
      <v-layout row v-if="!hideFields.has('XII marks')">
        <v-flex xs4 lg5 pt-4 text-xs-right>
          <b>Marks scored :</b>
        </v-flex>
        <v-flex xs4 lg4>
          <input v-model="xiimarks" type="text" placeholder="Marks scored" name="XII marks" v-validate="'required|alpha_spaces'"
            data-vv-delay="300" :class="{'input': true, }" class="textinput">
          <span v-show="errors.has('XII marks')" style="color:red;">{{ errors.first('XII marks') }}</span>
        </v-flex>
      </v-layout>
      <!-- year of passing 12         -->
      <v-layout row wrap v-if="!hideFields.has('XII passing year')">
        <v-flex xs4 lg5 pt-4 text-xs-right>
          <b>Year of passing :</b>
        </v-flex>
        <v-flex xs4 lg4 pt-3>
          <div class="select-field">
            <select v-model="xiipassyear" name="XII passing year" v-validate="'required'">
                    <option  value="" hidden>State</option>
                    <option  v-for="item in items">{{item.text}}</option>
                </select>
          </div>
          <span v-show="errors.has('XII passing year')" style="color:red;">{{ errors.first('XII passing year') }}</span>
        </v-flex>
      </v-layout>
      <!-- buttons-->
      <v-layout row wrap pt-3 pb-3>
        <v-flex xs4>
        </v-flex>
        <v-flex xs4>
          <v-btn v-on:click="submit" type="submit" style="background-color:#455553;color:white">CONTINUE</v-btn>
          <v-btn @click="clear" style="background-color:#455553;color:white">clear</v-btn>
        </v-flex>
      </v-layout>



    </form>

  </div>
</template>
<script>
  export default {
    props: ['content1','hideFields'],
    $_veeValidate: {
      validator: 'new'
    },
    computed: {
      form() {
        return this.$store.state.form;
      },
      items() {
        return this.$store.state.items;
      },
    },
    methods: {
      submit() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            if (this.errors.any() == false) {
              // this.$emit('to1push', this.form); //FIRST I WANT TO SEND THIS EVENT
              this.$emit('form1validity', 5); //THEN THIS EVENT AND THEN

              // Object.keys(this.form).forEach(key => this.form[key]="");//THIS THING
              //FIRST TWO EVENT SENDING ARE IN SEQUENCE BUT BECAUSE OF THE THIRD THING
              //ALL FORM DATA IS DELETED WHICH ALREADY BEEN EMITTED
            }
            return;
          }
        });
           this.form.xinstitute = this.xinstitute;
            this.form.xboard = this.xboard;
            this.form.xmarks = this.xmarks;
            this.form.xpassyear = this.xpassyear;
            this.form.xiiinstitute = this.xiiinstitute;
            this.form.xiiboard = this.xiiboard;
            this.form.xiimarks = this.xiimarks;
            this.form.xiipassyear = this.xiipassyear;

      },
      res: function () {

      },
      submit1() {
        this.$validator.validateAll();
      },
      clear() {
        this.form.xinstitute = "",
          this.form.xboard = "",
          this.form.xmarks = "",
          this.form.xpassyear = "",
          this.form.xiiinstitute = "",
          this.form.xiiboard = "",
          this.form.xiimarks = "",
          this.form.xiipassyear = "",
          this.$validator.reset()
      },
    },
    data() {
      return {

         xinstitute: "",
        xboard: "",
        xmarks: "",
        xpassyear: "",
        xiiinstitute: "",
        xiiboard: "",
        xiimarks: "",
        xiipassyear: "",

      }
    },
    mounted() {
      this.$validator.localize('en', this.dictionary)
    },
    watch: {
      menu(val) {
        val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
      }
    },
  }

</script>
<style scoped>
  .main {
    width: 100%;
    background-color: #FFFBFB;
    font-family: 'Source Sans Pro', sans-serif;
    padding-top: 2%;
    /* border: 1px solid black; */
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

  h3 {
    padding-top: 10%;
    padding-left: 15%;
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
    /* box-shadow: 0.1px 0.1px 0.1px 0.1px black ; */
  }

  input {
    border-radius: 4px;
  }


  .select-field {
    display: inline-block;
    width: 100%;
  border-radius: 4px;
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

  .select-field>select {
    float: left;
    width: 100%;
    margin: 0px;
    padding: 5px 5px 5px 7px;
    border: 0px;
    font-family: 'osbold';
    color: grey;

    position: relative;
    z-index: 3;
  }

  .select-field>select>option {
    padding: 10px;

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
	min-width: 19.3%;
	float: left;
	position: relative;
	background-color: #d9e3f7;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none; 
  transition: background-color 0.2s ease;
}


 @media screen and (max-width: 850px) {
  
  .arrow-steps .step {
	font-size: 14px;
	text-align: center;
	color: #666;
	cursor: default;
	margin: 0 3px;
	padding: 10px 10px 10px 30px;
	min-width: 18.8%;
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
	padding: 5px 5px 5px 15px;
	min-width: 18.3%;
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

</style>
