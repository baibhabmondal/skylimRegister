<template>
  <div class="main">
    <form @submit.prevent="submit1">
      <h2 class="page-heading">FATHERS INFO</h2>
      <div id="container">
      <!-- first and last name of father -->
      <v-layout row>
        <v-flex pt-4 xs4  text-xs-right pr-4><b>Name:</b></v-flex>
        <v-flex xs4>

          <!-- <v-text-field :error-messages="errors.collect('name')" data-vv-name="name" v-validate="'required|alpha'" label="First Name" required v-model="form.ffname" ></v-text-field> -->
          <input type="text" placeholder="First Name" name="fathers firstname" v-validate="'required|alpha_spaces'" data-vv-delay="300"
            v-model="form.ffname" :class="{'input': true, }" class="textinput">
          <!-- <i v-show="errors.has('firstname')"></i> -->
          <span v-show="errors.has('fathers firstname')" style="color:red;">{{ errors.first('fathers firstname') }}</span>

        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex pt-4 xs4 text-xs-right pr-4></v-flex>
        <v-flex xs4>
          <input type="text" placeholder="Last Name" name="fathers lastname" v-validate="'required|alpha_spaces'" data-vv-delay="300"
            v-model="form.flname" :class="{'input': true, }" class="textinput">
          <i v-show="errors.has('lastname')"></i>
          <span v-show="errors.has('fathers lastname')" style="color:red;">{{ errors.first('fathers lastname') }}</span>

        </v-flex>
      </v-layout>
      <!-- contact nuber of father -->
      <v-layout>
        <v-flex xs4 pt-4 text-xs-right pr-4>
          <b>Contact number:</b>
        </v-flex>
        <v-flex xs4>
          <input type="text" placeholder="Contact 1" name="father contact" v-validate="'required|digits:10'" data-vv-delay="300" v-model="form.fcontact"
            :class="{'input': true, }" class="textinput">
          <!-- <i v-show="errors.has('contact1')"></i> -->
          <span v-show="errors.has('father contact')" style="color:red;">{{ errors.first('father contact') }}</span>
          <!-- <v-text-field  v-model="form.fcontact"  v-validate="'required|digits:10'" label="phone" required  :error-messages="errors.collect('phone')" data-vv-name="phone" ></v-text-field> -->
        </v-flex>
      </v-layout>
      <!-- email of father -->
      <v-layout>

        <v-flex xs4 pt-4 text-xs-right pr-4><b>E-mail:</b></v-flex>
        <v-flex xs4>
          <input type="text" placeholder="E-mail" name="father e-mail" v-validate="'required|email'" data-vv-delay="300" v-model="form.fmail"
            :class="{'input': true, }" class="textinput">
          <i v-show="errors.has('e-mail')"></i>
          <span v-show="errors.has('father e-mail')" style="color:red;">{{ errors.first('father e-mail') }}</span>

        </v-flex>
      </v-layout>
      <!-- occupation  and income of father -->
      <v-layout row>
        <v-flex xs4 pt-4 text-xs-right pr-4>
          <b>Occupation:</b>
        </v-flex>
        <v-flex xs4 pt-3>
          <div class="select-field">
            <select name="father occupation" v-validate="'required'" v-model="form.foccupation">
                                            <option value="" hidden>Occupation</option>
                                            <option  v-for="items in items">{{items.text}}</option>
                                    </select>
          </div>
          <span v-show="errors.has('father occupation')" style="color:red;">{{ errors.first('father occupation') }}</span>

        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex pt-4 xs4 text-xs-right pr-4>
          <b>Income:</b>
        </v-flex>
        <v-flex xs4>
          <input type="text" placeholder="Income" name="father income" v-validate="'required|numeric'" data-vv-delay="300" v-model="form.fincome"
            :class="{'input': true, }" class="textinput">
          <span v-show="errors.has('father income')" style="color:red;">{{ errors.first('father income') }}</span>

        </v-flex>

      </v-layout>

      <br><br>
      <!-- mothers info starts -->


      <h2 class="page-heading">MOTHERS INFO</h2>
      <!-- first and last name of mother -->

      <v-layout row>
        <v-flex pt-4 xs4 text-xs-right pr-4><b>Name:</b></v-flex>

        <v-flex xs4>

          <input type="text" placeholder="First Name" name="mother firstname" v-validate="'required|alpha_spaces'" data-vv-delay="300"
            v-model="form.mfname" :class="{'input': true, }" class="textinput">
          <span v-show="errors.has('mother firstname')" style="color:red;">{{ errors.first('mother firstname') }}</span>

        </v-flex>

      </v-layout>

      <v-layout row wrap>
        <v-flex pt-4 xs4 text-xs-right pr-4>

        </v-flex>
        <v-flex xs4>
          <input type="text" placeholder="Last Name" name="mother lastname" v-validate="'required|alpha_spaces'" data-vv-delay="300"
            v-model="form.mlname" :class="{'input': true, }" class="textinput">
          <!-- <i v-show="errors.has('lastname')"></i> -->
          <span v-show="errors.has('mother lastname')" style="color:red;">{{ errors.first('mother lastname') }}</span>


          <!-- <v-text-field :error-messages="errors.collect('name')" data-vv-name="name" v-validate="'required|alpha'" label="Last Name" v-model="form.flname"></v-text-field> -->
        </v-flex>



      </v-layout>
      <!-- contact nuber of mother -->
      <v-layout>
        <v-flex xs4 pt-4 text-xs-right pr-4>
          <b>Contact number:</b>
        </v-flex>
        <v-flex xs4>
          <input type="text" placeholder="Contact 1" name="mother contact" v-validate="'required|digits:10'" data-vv-delay="300" v-model="form.mcontact"
            :class="{'input': true, }" class="textinput">
          <!-- <i v-show="errors.has('contact1')"></i> -->
          <span v-show="errors.has('mother contact')" style="color:red;">{{ errors.first('mother contact') }}</span>
          <!-- <v-text-field  v-model="form.fcontact"  v-validate="'required|digits:10'" label="phone" required  :error-messages="errors.collect('phone')" data-vv-name="phone" ></v-text-field> -->
        </v-flex>
      </v-layout>
      <!-- email of mother -->
      <v-layout>

        <v-flex xs4 pt-4 text-xs-right pr-4><b>E-mail:</b></v-flex>
        <v-flex xs4>
          <input type="text" placeholder="E-mail" name="mother e-mail" v-validate="'required|email'" data-vv-delay="300" v-model="form.mmail"
            :class="{'input': true, }" class="textinput">
          <!-- <i v-show="errors.has('e-mail')"></i> -->
          <span v-show="errors.has('mother e-mail')" style="color:red;">{{ errors.first('mother e-mail') }}</span>

        </v-flex>
      </v-layout>
      <!-- occupation  and income of mother -->
      <v-layout row>
        <v-flex xs4 pt-4 text-xs-right pr-4>
          <b>Occupation:</b>
        </v-flex>
        <v-flex xs4 pt-3>
          <div class="select-field">
            <select name="mother occupation" v-validate="'required'" v-model="form.moccupation">
                                            <option value="" hidden>Occupation</option>
                                            <option  v-for="items in items">{{items.text}}</option>
                                    </select>
          </div>
          <!-- <i v-show="errors.has('occupation')"></i> -->
          <span v-show="errors.has('mother occupation')" style="color:red;">{{ errors.first('mother occupation') }}</span>

        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex pt-4 xs4 text-xs-right pr-4>
          <b>Income:</b>
        </v-flex>
        <v-flex xs4>
          <input type="text" placeholder="Income" name="mother income" v-validate="'required|numeric'" data-vv-delay="300" v-model="form.mincome"
            :class="{'input': true, }" class="textinput">
          <i v-show="errors.has('income')"></i>
          <span v-show="errors.has('mother income')" style="color:red;">{{ errors.first('mother income') }}</span>

        </v-flex>

      </v-layout>
      <br><br>
      <!-- gardian info starts -->

      <h2 class="page-heading">GUARDIANS INFO</h2>

      <!-- first and last name of gardian -->
      <v-layout row>
        <v-flex pt-4 xs4 text-xs-right pr-4><b>Name:</b></v-flex>

        <v-flex xs4>
          <input type="text" placeholder="First Name" name="guardian firstname" v-model="form.gfname" :class="{'input': true, }" class="textinput">
        </v-flex>

      </v-layout>

      <v-layout row wrap>
        <v-flex pt-4 xs4 text-xs-right pr-4>

        </v-flex>
        <v-flex xs4>
          <input type="text" placeholder="Last Name" name="guardian lastname" v-model="form.glname" :class="{'input': true, }" class="textinput">
        </v-flex>



      </v-layout>
      <!-- contact nuber of gardian -->
      <v-layout>
        <v-flex xs4 pt-4 text-xs-right pr-4>
          <b>Contact number:</b>
        </v-flex>
        <v-flex xs4>
          <input type="text" placeholder="Contact 1" name="guardian contact" v-model="form.gcontact" :class="{'input': true, }" class="textinput">
          <i v-show="errors.has('contact1')"></i>
        </v-flex>
      </v-layout>
      <!-- email of gardian -->
      <v-layout>

        <v-flex xs4 pt-4 text-xs-right pr-4><b>E-mail:</b></v-flex>
        <v-flex xs4>
          <input type="text" placeholder="E-mail" name="guardian e-mail" v-model="form.gmail" :class="{'input': true, }" class="textinput">
          <i v-show="errors.has('e-mail')"></i>
        </v-flex>
      </v-layout>
      <!-- occupation  and income of gardian -->
      <v-layout row>
        <v-flex xs4 pt-4 text-xs-right pr-4>
          <b>Occupation:</b>
        </v-flex>
        <v-flex xs4 pt-3>
          <div class="select-field">
            <select name="guardian occupation" v-model="form.goccupation">
                                        <option value="" hidden>Occupation</option>
                                        <option  v-for="items in items">{{items.text}}</option>
                                </select>
          </div>

        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex pt-4 xs4 text-xs-right pr-4>
          <b>Income:</b>
        </v-flex>
        <v-flex xs4>
          <input type="text" placeholder="Income" name="guardian income" v-model="form.gincome" :class="{'input': true, }" class="textinput">
        </v-flex>

      </v-layout>
      <!-- buttons -->
      <v-layout row wrap pt-3 pb-3>
        <v-flex xs4>
        </v-flex>
        <v-flex xs4>
          <v-btn @click="submit" type="submit" dark>CONTINUE</v-btn>
          <v-btn @click="clear" dark>clear</v-btn>
        </v-flex>
      </v-layout>
</div>
    </form>

  </div>
</template>

<script>
  export default {
    props: ['content1'],
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
              // this.$emit('to1push',this.form);
              this.$emit('form1validity', 4);
              // setTimeout(function(){
              //     Object.keys(this.form).forEach(key => this.form[key]=null);
              // }, 2000);
            }
            return;
          }
        });
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

</style>
