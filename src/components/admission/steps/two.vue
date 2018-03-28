<template>
  <div class="main">
    <div class="arrow-steps clearfix" style="margin: 0 0 5% 0; width: 100%;">
      <div class="step"> <span> Step 1</span> </div>
      <div class="step  current"> <span>Step 2</span> </div>
      <div class="step"> <span> Step 3</span> </div>
      <div class="step"> <span>Step 4</span> </div>
    </div>
    <form @submit.prevent="submit1">
      <label>
            <input type="radio" name="parent" value="Parent" v-model="parent" checked="checked" />
            <span>Parent</span>
      </label>
      <label>
        <input type="radio" name="parent" value="Guardian" v-model="parent"  />
        <span>Guardian</span>
      </label>
      <div v-if="!checkParent">
        <h2 class="page-heading">FATHERS INFO</h2>
        <div id="container">
          <!-- first and last name of father -->
          <v-layout row v-if="!hideFields.has('fathers firstname')">
            <v-flex pt-4 xs4 text-xs-right pr-4><b>Name:</b></v-flex>
            <v-flex xs4>

              <!-- <v-text-field :error-messages="errors.collect('name')" data-vv-name="name" v-validate="'required|alpha'" label="First Name" required v-model="form.ffname" ></v-text-field> -->
              <input type="text" placeholder="First Name" name="fathers firstname" v-validate="'required|alpha_spaces'" data-vv-delay="300"
                v-model="ffname" :class="{'input': true, }" class="textinput">
              <!-- <i v-show="errors.has('firstname')"></i> -->
              <span v-show="errors.has('fathers firstname')" style="color:red;">{{ errors.first('fathers firstname') }}</span>

            </v-flex>
          </v-layout>
          <v-layout row wrap v-if="!hideFields.has('fathers lastname')">
            <v-flex pt-4 xs4 text-xs-right pr-4></v-flex>
            <v-flex xs4>
              <input type="text" placeholder="Last Name" name="fathers lastname" v-validate="'required|alpha_spaces'" data-vv-delay="300"
                v-model="flname" :class="{'input': true, }" class="textinput">
              <i v-show="errors.has('lastname')"></i>
              <span v-show="errors.has('fathers lastname')" style="color:red;">{{ errors.first('fathers lastname') }}</span>

            </v-flex>
          </v-layout v-if="!hideFields.has('father contact')">
          <!-- contact nuber of father -->
          <v-layout>
            <v-flex xs4 pt-4 text-xs-right pr-4>
              <b>Contact number:</b>
            </v-flex>
            <v-flex xs4>
              <input type="text" placeholder="Contact 1" name="father contact" v-validate="'required|digits:10'" data-vv-delay="300" v-model="fcontact"
                :class="{'input': true, }" class="textinput">
              <!-- <i v-show="errors.has('contact1')"></i> -->
              <span v-show="errors.has('father contact')" style="color:red;">{{ errors.first('father contact') }}</span>
              <!-- <v-text-field  v-model="form.fcontact"  v-validate="'required|digits:10'" label="phone" required  :error-messages="errors.collect('phone')" data-vv-name="phone" ></v-text-field> -->
            </v-flex>
          </v-layout>
          <!-- email of father -->
          <v-layout v-if="!hideFields.has('father e-mail')">

            <v-flex xs4 pt-4 text-xs-right pr-4><b>E-mail:</b></v-flex>
            <v-flex xs4>
              <input type="text" placeholder="E-mail" name="father e-mail" v-validate="'required|email'" data-vv-delay="300" v-model="fmail"
                :class="{'input': true, }" class="textinput">
              <i v-show="errors.has('e-mail')"></i>
              <span v-show="errors.has('father e-mail')" style="color:red;">{{ errors.first('father e-mail') }}</span>

            </v-flex>
          </v-layout>
          <!-- occupation  and income of father -->
          <v-layout row v-if="!hideFields.has('father occupation')">
            <v-flex xs4 pt-4 text-xs-right pr-4>
              <b>Occupation:</b>
            </v-flex>
            <v-flex xs4 pt-3>
              <div class="select-field">
                <select name="father occupation" v-validate="'required'" v-model="foccupation">
                                            <option value="" hidden>Occupation</option>
                                            <option  v-for="items in items">{{items.text}}</option>
                                    </select>
              </div>
              <span v-show="errors.has('father occupation')" style="color:red;">{{ errors.first('father occupation') }}</span>

            </v-flex>
          </v-layout>
          <v-layout v-if="!hideFields.has('father income')">
            <v-flex pt-4 xs4 text-xs-right pr-4>
              <b>Income:</b>
            </v-flex>
            <v-flex xs4>
              <input type="text" placeholder="Income" name="father income" v-validate="'required|numeric'" data-vv-delay="300" v-model="fincome"
                :class="{'input': true, }" class="textinput">
              <span v-show="errors.has('father income')" style="color:red;">{{ errors.first('father income') }}</span>

            </v-flex>

          </v-layout>

          <br><br>
          <!-- mothers info starts -->


          <h2 class="page-heading">MOTHERS INFO</h2>
          <!-- first and last name of mother -->

          <v-layout row v-if="!hideFields.has('mother firstname')">
            <v-flex pt-4 xs4 text-xs-right pr-4><b>Name:</b></v-flex>

            <v-flex xs4>

              <input type="text" placeholder="First Name" name="mother firstname" v-validate="'required|alpha_spaces'" data-vv-delay="300"
                v-model="mfname" :class="{'input': true, }" class="textinput">
              <span v-show="errors.has('mother firstname')" style="color:red;">{{ errors.first('mother firstname') }}</span>

            </v-flex>

          </v-layout>

          <v-layout row wrap v-if="!hideFields.has('mother lastname')">
            <v-flex pt-4 xs4 text-xs-right pr-4>

            </v-flex>
            <v-flex xs4>
              <input type="text" placeholder="Last Name" name="mother lastname" v-validate="'required|alpha_spaces'" data-vv-delay="300"
                v-model="mlname" :class="{'input': true, }" class="textinput">
              <!-- <i v-show="errors.has('lastname')"></i> -->
              <span v-show="errors.has('mother lastname')" style="color:red;">{{ errors.first('mother lastname') }}</span>


              <!-- <v-text-field :error-messages="errors.collect('name')" data-vv-name="name" v-validate="'required|alpha'" label="Last Name" v-model="form.flname"></v-text-field> -->
            </v-flex>



          </v-layout>
          <!-- contact nuber of mother -->
          <v-layout v-if="!hideFields.has('mother contact')">
            <v-flex xs4 pt-4 text-xs-right pr-4>
              <b>Contact number:</b>
            </v-flex>
            <v-flex xs4>
              <input type="text" placeholder="Contact 1" name="mother contact" v-validate="'required|digits:10'" data-vv-delay="300" v-model="mcontact"
                :class="{'input': true, }" class="textinput">
              <!-- <i v-show="errors.has('contact1')"></i> -->
              <span v-show="errors.has('mother contact')" style="color:red;">{{ errors.first('mother contact') }}</span>
              <!-- <v-text-field  v-model="form.fcontact"  v-validate="'required|digits:10'" label="phone" required  :error-messages="errors.collect('phone')" data-vv-name="phone" ></v-text-field> -->
            </v-flex>
          </v-layout>
          <!-- email of mother -->
          <v-layout v-if="!hideFields.has('mother e-mail')">

            <v-flex xs4 pt-4 text-xs-right pr-4><b>E-mail:</b></v-flex>
            <v-flex xs4>
              <input type="text" placeholder="E-mail" name="mother e-mail" v-validate="'required|email'" data-vv-delay="300" v-model="mmail"
                :class="{'input': true, }" class="textinput">
              <!-- <i v-show="errors.has('e-mail')"></i> -->
              <span v-show="errors.has('mother e-mail')" style="color:red;">{{ errors.first('mother e-mail') }}</span>

            </v-flex>
          </v-layout>
          <!-- occupation  and income of mother -->
          <v-layout row v-if="!hideFields.has('mother occupation')">
            <v-flex xs4 pt-4 text-xs-right pr-4>
              <b>Occupation:</b>
            </v-flex>
            <v-flex xs4 pt-3>
              <div class="select-field">
                <select name="mother occupation" v-validate="'required'" v-model="moccupation">
                                            <option value="" hidden>Occupation</option>
                                            <option  v-for="items in items">{{items.text}}</option>
                                    </select>
              </div>
              <!-- <i v-show="errors.has('occupation')"></i> -->
              <span v-show="errors.has('mother occupation')" style="color:red;">{{ errors.first('mother occupation') }}</span>

            </v-flex>
          </v-layout>
          <v-layout v-if="!hideFields.has('mother income')">
            <v-flex pt-4 xs4 text-xs-right pr-4>
              <b>Income:</b>
            </v-flex>
            <v-flex xs4>
              <input type="text" placeholder="Income" name="mother income" v-validate="'required|numeric'" data-vv-delay="300" v-model="mincome"
                :class="{'input': true, }" class="textinput">
              <i v-show="errors.has('income')"></i>
              <span v-show="errors.has('mother income')" style="color:red;">{{ errors.first('mother income') }}</span>

            </v-flex>

          </v-layout>
        
          <br><br>
        </div>
      </div>
      <div>
          
          <!-- gardian info starts -->
      
        <div v-if="checkParent">
          <h2 class="page-heading">GUARDIANS INFO</h2>

          <!-- first and last name of gardian -->
          <v-layout row v-if="!hideFields.has('guardian firstname')">
            <v-flex pt-4 xs4 text-xs-right pr-4><b>Name:</b></v-flex>

            <v-flex xs4>
              <input type="text" placeholder="First Name" name="guardian firstname" v-model="gfname" :class="{'input': true, }" class="textinput">
            </v-flex>

          </v-layout>

          <v-layout row wrap v-if="!hideFields.has('guardian lastname')">
            <v-flex pt-4 xs4 text-xs-right pr-4>

            </v-flex>
            <v-flex xs4>
              <input type="text" placeholder="Last Name" name="guardian lastname" v-model="glname" :class="{'input': true, }" class="textinput">
            </v-flex>



          </v-layout>
          <!-- contact nuber of gardian -->
          <v-layout v-if="!hideFields.has('guardian contact')">
            <v-flex xs4 pt-4 text-xs-right pr-4>
              <b>Contact number:</b>
            </v-flex>
            <v-flex xs4>
              <input type="text" placeholder="Contact 1" name="guardian contact" v-model="gcontact" :class="{'input': true, }" class="textinput">
              <i v-show="errors.has('contact1')"></i>
            </v-flex>
          </v-layout>
          <!-- email of gardian -->
          <v-layout v-if="!hideFields.has('guardian e-mail')">

            <v-flex xs4 pt-4 text-xs-right pr-4><b>E-mail:</b></v-flex>
            <v-flex xs4>
              <input type="text" placeholder="E-mail" name="guardian e-mail" v-model="gmail" :class="{'input': true, }" class="textinput">
              <i v-show="errors.has('e-mail')"></i>
            </v-flex>
          </v-layout>
          <!-- occupation  and income of gardian -->
          <v-layout row v-if="!hideFields.has('guardian occupation')">
            <v-flex xs4 pt-4 text-xs-right pr-4>
              <b>Occupation:</b>
            </v-flex>
            <v-flex xs4 pt-3>
              <div class="select-field">
                <select name="guardian occupation" v-model="goccupation">
                                        <option value="" hidden>Occupation</option>
                                        <option  v-for="items in items">{{items.text}}</option>
                                </select>
              </div>

            </v-flex>
          </v-layout>
          <v-layout v-if="!hideFields.has('guardian income')">
            <v-flex pt-4 xs4 text-xs-right pr-4>
              <b>Income:</b>
            </v-flex>
            <v-flex xs4>
              <input type="text" placeholder="Income" name="guardian income" v-model="gincome" :class="{'input': true, }" class="textinput">
            </v-flex>

          </v-layout>
          </div>
          </div>
          <!-- buttons -->
          <v-layout row wrap pt-3 pb-3>
            <v-flex xs4>
            </v-flex>
            <v-flex xs4>
              <v-btn @click="submit" type="submit" dark>CONTINUE</v-btn>
              <v-btn @click="clear" dark>clear</v-btn>
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
        checkParent() {
            if (this.parent != "Parent") return "disabled";
            return false;
          }
    },
    methods: {
      submit() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            if (this.errors.any() == false) {
              // this.$emit('to1push',this.form);
              this.$emit('form1validity', 4);
              // setTimeout(function(){
              //     Object.keys(this.form).forEach(key => this.form[key]=null);
              // }, 2000);
            }
            return;
          }
        });
        this.form.ffname = this.ffname;
        this.form.flname = this.flname;
        this.form.fcontact = this.fcontact;
        this.form.ffmail = this.fmail;
        this.form.ffoccupation = this.foccupation;
        this.form.fincome = this.fincome;
        this.form.mfname = this.mfname;
        this.form.mlname = this.mlname;
        this.form.mcontact = this.mcontact;
        this.form.mmail = this.mmail;
        this.form.moccupation = this.moccupation;
        this.form.mincome = this.mincome;
        this.form.gfname = this.gfname;
        this.form.glname = this.glname;
        this.form.gcontact = this.gcontact;
        this.form.gmail = this.gmail;
        this.form.goccupation = this.goccupation;
        this.form.gincome = this.gincome;


      },
      submit1() {
        this.$validator.validateAll();
      },
      clear() {
        this.form.ffname = '',
          this.form.flname = '',
          this.form.fcontact = '',
          this.form.fmail = '',
          this.form.foccupasion = '',
          this.form.fincome = '',

          this.form.mfname = '',
          this.form.mlname = '',
          this.form.mcontact = '',
          this.form.mmail = '',
          this.form.moccupasion = '',
          this.form.mincome = '',

          this.form.gfname = '',
          this.form.glname = '',
          this.form.gcontact = '',
          this.form.gmail = '',
          this.form.goccupasion = '',
          this.form.gincome = '',
          this.$validator.reset()
      },
    },
    data() {
      return {
        parent: "Parent",
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
        gincome: "",
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

  #container {
    padding-top: 3%;
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
    border-radius: 4px;
  }

  input {
    border-radius: 4px;
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
    font-family: 'Source Sans Pro', sans-serif;
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

</style>
