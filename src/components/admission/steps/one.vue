<template>
<div style="width:100%;border:1px;background-color:#E9EbEE">
    <form @submit.prevent="submit1">
        <h2 class="page-heading"  style="" >STUDENT DETAILS</h2>
    <!--name first and last-->  
                        <v-layout row>
                            <v-flex pt-4 xs4 pr-4 text-xs-right><b>Name :</b></v-flex>
        
                            <v-flex xs4 >

                            
                                <!-- <v-text-field :error-messages="errors.collect('fname')" data-vv-name="fname" v-validate="'required|alpha'" label="First Name" required v-model="form.fname"></v-text-field> -->
                                <input required type="text" placeholder="First Name" name="firstname" v-validate="'required|alpha_spaces'" data-vv-delay="300" v-model="form.fname" :class="{'input': true, }" class="textinput">
                                <i v-show="errors.has('firstname')"></i>
                                <span v-show="errors.has('firstname')" style="color:red;">{{ errors.first('firstname') }}</span>
                            </v-flex>

                        </v-layout>
                        <v-layout>
                                <v-flex xs4>
        
                                </v-flex>
                                <v-flex xs4>
                                    <input type="text" placeholder="lastname" name="lastname" v-validate="'required|alpha'" data-vv-delay="300"   v-model="form.lname" :class="{'input': true, }" class="textinput">
                                <i v-show="errors.has('lastname')"></i>
                                <span v-show="errors.has('lastname')" style="color:red;">{{ errors.first('lastname') }}</span>
                                </v-flex>
                        </v-layout>

    <!--dob-->  
                        <v-layout row>
                            <v-flex pt-4 xs4 pr-4 text-xs-right > <b>D.O.B</b></v-flex>
                            <v-flex xs4 >
                                    <input type="date" class="textinput" v-model="form.dob">
                            </v-flex>
                        </v-layout>

    <!-- gender-->
                        <v-layout row>
                            <v-flex pt-4 xs4 pr-4 text-xs-right class="name"><b>GENDER</b></v-flex>
                                <v-radio-group :mandatory="true" row :error-messages="errors.collect('gender')" data-vv-name="gender" v-model="form.gender">
                                    <v-flex xs2>
                                    <v-radio name="radio_group_1" label="Male" :error-messages="errors.collect('gender')" data-vv-name="gender" v-validate="'required|in:1,2'" value="1" ></v-radio>
                                    </v-flex>
                                    <v-flex xs2>
                                    <v-radio name="radio_group_1" label="Female" value="2"></v-radio>
                                    </v-flex>
                                </v-radio-group>
                                <span v-show="errors.has('male')">{{ errors.any('radio_group_1') }}</span>
                        </v-layout>
    <!-- blood groups -->
                        <v-layout row wrap>
                                <v-flex pt-4 xs4 pr-4 text-xs-right><b>BLOOD GROUP</b></v-flex>
                                <v-flex xs4 pt-3>
                                <div class="select-field" label="Select">
                                    <select name="bloodgroup" label="Select" v-validate="'required'" data-vv-delay="300"  v-model="form.bloodgroup">
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
                            <v-flex pt-4 xs4 pr-4 text-xs-right><b>E-MAIL</b></v-flex>
                            <v-flex xs4>
                                <input type="text" placeholder="E-mail" name="e-mail" v-validate="'required|email'" data-vv-delay="300"   v-model="form.mail" :class="{'input': true, }" class="textinput">
                                <i v-show="errors.has('e-mail')"></i>
                                <span v-show="errors.has('e-mail')" style="color:red;">{{ errors.first('e-mail') }}</span>
                            
                                
                            </v-flex>
                        </v-layout>
        
    <!--permanent address -->
                        <v-layout row>
                            <v-flex pt-4 xs4 pr-4 text-xs-right>
                                <b>ADDRESS-1</b> 
                            </v-flex>

                            <v-flex xs4>
                                    <input type="text" placeholder="Address-1" name="address-1" v-validate="'required'" data-vv-delay="300"  v-model="form.add1" :class="{'input': true, }" class="textinput">
                                    <i v-show="errors.has('address-1')"></i>
                                        <span v-show="errors.has('address-1')" style="color:red;">{{ errors.first('address-1') }}</span>
                            </v-flex>
                                                    

                        </v-layout>
                
    <!-- city and state of permnent address -->
                        <v-layout row>
                            
                                        <v-flex pt-4 xs4 pr-4 text-xs-right>
                                            <b>CITY</b> 
                                        </v-flex>
                                        <v-flex xs4 pt-3>
                                            <div class="select-field">
                                    <select name="city-1" v-validate="'required'" data-vv-delay="300"  v-model="form.add1city">
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
                                    <b>STATE</b> 
                                </v-flex>
                                <v-flex xs4 pt-3 >
                                            <div class="select-field">
                                    <select name="state-1" v-validate="'required'"   v-model="form.add1state">
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
                                    <b>PINCODE</b> 
                                </v-flex>
                                <v-flex xs4 >
                                    <input type="text" placeholder="Pincode" name="pincode" v-validate="'required|digits:6'" data-vv-delay="300"  v-model="form.add1pincode" :class="{'input': true, }" class="textinput">
                                    <i v-show="errors.has('pincode')"></i>
                                        <span v-show="errors.has('pincode')" style="color:red;">{{ errors.first('pincode') }}</span>
                                    <!-- <v-text-field  v-model="form.add1pincode" v-validate="'required|digits:6'" label="pincode" required  :error-messages="errors.collect('pin')" data-vv-name="pin" ></v-text-field> -->
                                    
                            
                                </v-flex>
                        </v-layout>
            
    <!-- temporary address -->
                        <v-layout row>
                            <v-flex pt-4 xs4 pr-4 text-xs-right>
                                <b> ADDRESS-2</b> 
                            </v-flex>
                            <v-flex xs4>
                            <input type="text" placeholder="Address" name="address-2" v-model="form.add2" :class="{'input': true, }" class="textinput">
                            </v-flex>

                        </v-layout>

    <!-- state and address of temporry address -->
                        <v-layout row>
                            
                                        <v-flex pt-4 xs4 pr-4 text-xs-right>
                                            <b>CITY</b> 
                                        </v-flex>
                                        <v-flex xs4 pt-3>
                                            <div class="select-field">
                                    <select name="city-2"  v-model="form.add2city">
                                            <option value="" hidden>City</option>
                                            <option  v-for="items in items">{{items.text}}</option>
                                    </select>
                                    </div> 
                                    
                                </v-flex>

                            </v-layout>
                            <v-layout>
                            
                                <v-flex pt-4 xs4 pr-4 text-xs-right>
                                    <b>STATE</b> 
                                </v-flex>
                                <v-flex xs4 pt-3 >
                                            <div class="select-field">
                                            <select name="state-2" v-model="form.add2state">
                                            <option value="" hidden>State</option>
                                            <option  v-for="states in states">{{states.text}}</option>
                                    </select>
                                    </div> 
                                </v-flex>
                            
                            
                                
                        </v-layout>

    <!--pincode-->                    
                        <v-layout>
                            <v-flex pt-4 xs4 pr-4 text-xs-right>
                                    <b>PINCODE</b> 
                                </v-flex>
                                <v-flex xs4 >
                                    <input type="text" placeholder="pincode" name="pincode-2" v-model="form.add2pincode" :class="{'input': true, }" class="textinput">
                                </v-flex>
                        </v-layout>

    <!-- contact numbers -->
                    <v-layout>
                        <v-flex pt-4 xs4 pr-4 text-xs-right>
                          <b>CONTACT DETAILS</b> 
                        </v-flex>
                        <v-flex xs4> 
                               <input type="text" placeholder="Contact 1" name="contact1" v-validate="'required|digits:10'" data-vv-delay="300" v-model="form.contact1" :class="{'input': true, }" class="textinput">
                               <i v-show="errors.has('contact1')"></i>
                                <span v-show="errors.has('contact1')" style="color:red;">{{ errors.first('contact1') }}</span>
                        </v-flex>
                      </v-layout>
                      <v-layout row wrap>
                        <v-flex xs4>

                        </v-flex>
                            <v-flex xs4 >
                               <input type="text" placeholder="Contact 2" name="contact2"   v-model="form.contact2" :class="{'input': true, }" class="textinput">
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
        submit(){
            this.$validator.validateAll().then((result) => {
                if (result) {
                if(this.errors.any() == false){
                    this.$emit('form1validity',3);
                }
                return;
                }
            });
        },
        submit1(){
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
        valid:function(){
            return false;
        }

       
    }
};
</script>

<style scoped> 
    .page-heading{
        border-style:solid;
        border-width:0.5px 0 0.5px 0;
        border-color:#acabab;
        width:100%;
        display:block;
        background-color:#acabab;
    }
    .textinput{
    border-style: solid;
    border-color: #F3EFE7;
    background-color: white;
    border-width: 0.1px;
    width: 100%;
    padding: 5px 5px 5px 7px;
    vertical-align: middle;
    align-self: auto;
    margin-top: 18px;
    display: table-cell;
    /* box-shadow: 0.1px 0.1px 0.1px 0.1px black ; */
    }

    /* Main content style
    .main-content-wrapper {
        float: left;
        width: 100%;
        height: 100%;
        display: table;
        text-align: center;
        background-color: #2a303f;
    }
    .main-content-wrapper .main-content {
        width: 100%;
        height: 100%;
        display: table-cell;
        vertical-align: middle;
    } */

    /* Select field */
    .select-field {
        display: inline-block;
        width: 100%;	
        
        margin: 0px;
        padding: 0px;
        background-color: white;
        position: relative;
        z-index: 1;
    }
    .select-field:after {
        content: "";
        width: 0px;
        height: 0px;

        border-top: 9px solid lightslategray;
        border-right: 8px solid transparent;
        border-left: 8px solid transparent;

        position: absolute;
        top: 12px;
        right: 15px;
        z-index: 2;
    }
    .select-field > select {
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
    .select-field > select > option {
        padding: 10px;

    }
    /* .select{
    display: block;
    padding: 5px 5px 5px 7px;
    background-color: white; 
    width: 100%;
    border-style: solid;
    border-color: #F3EFE7;
    background: url()

    
    }
    .select option{
    margin: auto;
    color:red;
    padding: 5px;
    } */
    /* .name{
    padding-left: 40px;
    } */
</style>

