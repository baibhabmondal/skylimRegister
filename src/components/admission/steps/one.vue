<template>
   <div>
       <v-card color="" class="mb-5" height="100%">
           <v-form v-model="valid" lazy-validation>
               <v-container grid-list-md text-xs-center>
              
              
                   <h2>STUDENT'S DETAILS</h2>
<!--name first and last-->  
                   <v-layout row>
                       <v-flex pt-4 xs4 >NAME</v-flex>
  
                       <v-flex xs3  d-inline-fleX  >
                      
                           <v-text-field :error-messages="errors.collect('fname')" data-vv-name="fname" v-validate="'required|alpha'" label="First Name" required v-model="form.fname" ></v-text-field>
                        <!-- <span v-show="errors.has('name')">
                            {{ errors.first('name') }}
                        </span> -->
                       </v-flex>
  
                     
  
                       <v-flex xs3 offset-xs1>
                      
                           <v-text-field :error-messages="errors.collect('lname')" data-vv-name="lname" v-validate="'required|alpha'" label="Last Name" v-model="form.lname"></v-text-field>
                       </v-flex>
  
                   </v-layout>

<!--dob-->  
                   <v-layout row>
                       <v-flex pt-4 xs4 >D.O.B</v-flex>
                       <v-flex xs3 >


                         <v-menu
                          ref="menu"
                          lazy
                          :close-on-content-click="false"
                          v-model="menu"
                          transition="slide-y-transition"
                          offset-y
                          bottom
                          center
                          full-width
                          :nudge-right="40"
                          min-width="190px"
                          required
                      >
                          <v-text-field  v-model="form.dob"
                              slot="activator"
                              label="D.O.B"
                              
                              prepend-icon="event"
                              readonly required>
                          </v-text-field>
                          <v-date-picker  v-model="form.dob"
                              landscape=""
                              ref="picker"
                              
                              @change="save"
                              min="1950-0  1-01"
                              :max="new Date().toISOString().substr(0, 10)">
                          </v-date-picker>
                      </v-menu>
                       </v-flex>
                   </v-layout>

<!-- gender-->
                   <v-layout row class="text-md-center">
                       <v-flex xs4 pt-4>GENDER</v-flex>
                      

                      
                        <v-radio-group :mandatory="false" row  v-model="form.gender">
                            <v-flex xs2>
                               <v-radio label="Male" value="male"  ></v-radio>
                            </v-flex>
                            <v-flex xs2 >
                               <v-radio label="Female" value="female"></v-radio>
                            </v-flex>
                           
                        </v-radio-group>
                       

                   </v-layout>
<!-- blood groups -->
                   <v-layout>
                        <v-flex xs4 pt-4>BLOOD GROUP</v-flex>
                        <v-flex xs3>
                            <v-select  v-model="form.bloodgroup"
                               label="Select"
                                :items="items"
                                 :error-messages="errors.collect('bloodGroupSelect')"
                                    v-validate="'required'"
                                    data-vv-name="boloodGroupSelect"
                                    required
                                 item-value="text"
                              ></v-select>
                        </v-flex>
                   </v-layout>

<!-- e-mail -->
                  <v-layout row>
                      <v-flex xs4 pt-4>E-MAIL</v-flex>
                      <v-flex xs3>
                           <v-text-field  v-model="form.mail"
                           :error-messages="errors.collect('email')"
                           v-validate="'required|email'"
                           data-vv-name="email"
                           label="E-mail" 
                           required
                      ></v-text-field>
                      </v-flex>
                  </v-layout>
   
<!--permanent address -->
                  <v-layout row>
                      <v-flex xs4 pt-4>
                          ADDRESS-1
                      </v-flex>
                     <v-flex xs8>
                         <v-text-field  v-model="form.add1"
                         :error-messages="errors.collect('address')" data-vv-name="address" v-validate="'required|alpha'"
                         label="PERMANENT ADDRESS"
                         :counter="10"
                         required
                      ></v-text-field>

                     </v-flex>

                  </v-layout>
        
<!-- city and state of permnent address -->
                  <v-layout row>
                     
                                <v-flex xs4 pt-4>
                                     CITY
                                </v-flex>
                                <v-flex xs2>
                              <v-select  v-model="form.add1city"
                               :error-messages="errors.collect('citySelect')"
                                    v-validate="'required'"
                                    data-vv-name="select"
                                    required
                                    label="Select"
                                    :items="items"
                                    item-value="text"
                              ></v-select>
                          </v-flex>
                      </v-flex>
                     
                           <v-flex xs2 pt-4>
                              STATE
                           </v-flex>
                           <v-flex xs2 >
                              <v-select  v-model="form.add1state"
                               :error-messages="errors.collect('stateSelect')"
                                    v-validate="'required'"
                                    data-vv-name="select"
                                    required
                               label="Select"
                                :items="items"
                                 item-value="text"
                              ></v-select>
                           </v-flex>
                     
                     
                         
                  </v-layout>

<!--pincode-->                    
                  <v-layout>
                      <v-flex xs4 pt-4>
                              PINCODE
                           </v-flex>
                           <v-flex xs2 >
                            <v-text-field  v-model="form.add1pincode" v-validate="'required|digits:6'" label="pincode" required  :error-messages="errors.collect('pin')" data-vv-name="pin" ></v-text-field>
                           </v-flex>
                  </v-layout>
      
<!-- temporary address -->
                  <v-layout row>
                      <v-flex xs4 pt-4>
                          ADDRESS-2
                      </v-flex>
                     <v-flex xs8>
                         <v-text-field  v-model="form.add2"
                         label="TEMPORARY ADDRESS"
                         :counter="10"
                         required
                      ></v-text-field>

                     </v-flex>

                  </v-layout>

<!-- state and address of temporry address -->
                  <v-layout row>
                             <v-flex xs4 pt-4>
                                     CITY
                            </v-flex>
                            <v-flex xs2>
                              <v-select  v-model="form.add2city"
                                    label="Select"
                                    :items="items"
                                    item-value="text"
                              ></v-select>
                            </v-flex>
                      
                     
                           <v-flex xs2 pt-4>
                              STATE
                           </v-flex>
                           <v-flex xs2 >
                              <v-select  v-model="form.add2state"
                               label="Select"
                                :items="items"
                                 item-value="text"
                              ></v-select>
                           </v-flex>
                  </v-layout>

<!--pincode-->                    
                  <v-layout>
                      <v-flex xs4 pt-4>
                              PINCODE
                           </v-flex>
                           <v-flex xs2 >
                            <v-text-field  v-model="form.add2pincode" label="pincode" :counter="6" required></v-text-field>
                           </v-flex>
                  </v-layout>

<!-- contact numbers -->
                    <v-layout>
                        <v-flex xs4 pt-4>
                           CONTACT DETAILS
                        </v-flex>
                        <v-flex xs2>
                            <v-text-field  v-model="form.contact1"  v-validate="'required|digits:10'" label="phone" required  :error-messages="errors.collect('phone')" data-vv-name="phone" ></v-text-field>
                        </v-flex>
                        <v-flex xs2 offset-xs1 >
                       <v-text-field   v-model="form.contact2" label="student-2" ></v-text-field>
                        </v-flex>
                    </v-layout>{{errors.any()}}
 
    <v-btn @click="submit" type="submit" color="primary">CONTINUE</v-btn>
    <v-btn @click="clear" color="primary">clear</v-btn>

               </v-container>
           </v-form>
       </v-card>
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
    }
  },
  data() {
    return {
        a:false,
      valid: true,
      date: null,
      menu: false,
      checkbox: null,
      dictionary: {
        attributes: {
          email: "E-mail Address"
        },
        custom: {
          fname: {
            required: () => "Name can not be empty",
            max: "The name field may not be greater than 10 characters"
          },
          lname: {
            required: () => "Name can not be empty",
            max: "The name field may not be greater than 10 characters"
          },
          address: {
            required: () => "address can not be empty",
            max: "The name field may not be greater than 10 characters"
          },
          bloodGroupSelect: {
            required:()=> "Select field is required"
          },
          citySelect: {
            required: "Select field is required"
          },
          stateSelect: {
            required: "Select field is required"
          },
          pin: {
            required: "pincode is required"
          },
          phone: {
            required: "phone is required"
          }
        }
      }
    };
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
    submit () {
        this.$validator.validateAll();
        this.a=this.errors.any();
        if(this.a == false){
          this.$emit('form1validity',2);
        }
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

    save(date) {
      this.$refs.menu.save(date);
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = e => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function(e) {
      this.image = "";
    }
  }
};
</script>



