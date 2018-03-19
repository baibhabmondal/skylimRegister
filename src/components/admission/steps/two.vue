<template>
<div style="width:100%;border:1px;background-color:#E9EbEE">
<form @submit.prevent="submit1">
    <h2 class="page-heading">FATHERS INFO</h2>
    <!-- first and last name of father -->
                        <v-layout row>
                            <v-flex pt-4 xs4 text-xs-right pr-4 ><b>Name :</b></v-flex>
                            <v-flex xs4  >
                            
                                <!-- <v-text-field :error-messages="errors.collect('name')" data-vv-name="name" v-validate="'required|alpha'" label="First Name" required v-model="form.ffname" ></v-text-field> -->
                                <input type="text" placeholder="firstname" name="fathers firstname" v-validate="'required|alpha_spaces'" data-vv-delay="300"   v-model="form.ffname" :class="{'input': true, }" class="textinput">
                                <!-- <i v-show="errors.has('firstname')"></i> -->
                                <span v-show="errors.has('fathers firstname')" style="color:red;">{{ errors.first('fathers firstname') }}</span>
                            
                            </v-flex> 
                        </v-layout>
                        <v-layout row wrap>
                            <v-flex pt-4 xs4 text-xs-right pr-4></v-flex>
                            <v-flex xs4 >
                                <input type="text" placeholder="lastname" name="fathers lastname" v-validate="'required|alpha_spaces'" data-vv-delay="300"   v-model="form.flname" :class="{'input': true, }" class="textinput">
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
                                    <input type="text" placeholder="Contact 1" name="father contact" v-validate="'required|digits:10'" data-vv-delay="300"   v-model="form.fcontact" :class="{'input': true, }" class="textinput">
                                    <!-- <i v-show="errors.has('contact1')"></i> -->
                                        <span v-show="errors.has('father contact')" style="color:red;">{{ errors.first('father contact') }}</span>
                                    <!-- <v-text-field  v-model="form.fcontact"  v-validate="'required|digits:10'" label="phone" required  :error-messages="errors.collect('phone')" data-vv-name="phone" ></v-text-field> -->
                            </v-flex>
                        </v-layout>
    <!-- email of father -->
                        <v-layout>

                            <v-flex xs4 pt-4 text-xs-right pr-4><b>E-mail :</b></v-flex>
                            <v-flex xs4>
                                <input type="text" placeholder="E-mail" name="father e-mail" v-validate="'required|email'" data-vv-delay="300"   v-model="form.fmail" :class="{'input': true, }" class="textinput">
                                <i v-show="errors.has('e-mail')"></i>
                                <span v-show="errors.has('father e-mail')" style="color:red;">{{ errors.first('father e-mail') }}</span>
                                
                            </v-flex>
                    </v-layout>
    <!-- occupation  and income of father -->
                        <v-layout row>
                            <v-flex xs4 pt-4 text-xs-right pr-4>
                                <b>Occupation :</b>
                            </v-flex>
                            <v-flex xs4 pt-3>
                                <div class="select-field">
                                            <select name="father occupation" v-validate="'required'"   v-model="form.foccupation">
                                            <option value="" hidden>Occupation</option>
                                            <option  v-for="items in items">{{items.text}}</option>
                                    </select>
                                    </div> 
                                    <span v-show="errors.has('father occupation')" style="color:red;">{{ errors.first('father occupation') }}</span>    

                            </v-flex>
                        </v-layout>
                        <v-layout>
                                <v-flex pt-4 xs4 text-xs-right pr-4 >
                                <b>Income :</b>
                            </v-flex>
                            <v-flex xs4>
                                    <input type="text" placeholder="Income" name="father income" v-validate="'required|numeric'" data-vv-delay="300"   v-model="form.fincome" :class="{'input': true, }" class="textinput">
                                <span v-show="errors.has('father income')" style="color:red;">{{ errors.first('father income') }}</span>

                            </v-flex>
                            
                        </v-layout>

    <br><br>
    <!-- mothers info starts -->
                        
        
                            <h2 class="page-heading">MOTHERS INFO</h2>
    <!-- first and last name of mother -->
                                
                        <v-layout row>
                            <v-flex pt-4 xs4 text-xs-right pr-4 ><b>Name :</b></v-flex>
        
                            <v-flex xs4  >
                            
                                <input type="text" placeholder="firstname" name="mother firstname" v-validate="'required|alpha_spaces'" data-vv-delay="300"   v-model="form.mfname" :class="{'input': true, }" class="textinput">
                                <span v-show="errors.has('mother firstname')" style="color:red;">{{ errors.first('mother firstname') }}</span>
                            
                            </v-flex> 
        
                            </v-layout>

                        <v-layout row wrap>
                            <v-flex pt-4 xs4 text-xs-right pr-4>

                            </v-flex>
                                <v-flex xs4 >
                                    <input type="text" placeholder="lastname" name="mother lastname" v-validate="'required|alpha_spaces'" data-vv-delay="300"   v-model="form.mlname" :class="{'input': true, }" class="textinput">
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
                                    <input type="text" placeholder="Contact 1" name="mother contact" v-validate="'required|digits:10'" data-vv-delay="300"   v-model="form.mcontact" :class="{'input': true, }" class="textinput">
                                    <!-- <i v-show="errors.has('contact1')"></i> -->
                                        <span v-show="errors.has('mother contact')" style="color:red;">{{ errors.first('mother contact') }}</span>
                                    <!-- <v-text-field  v-model="form.fcontact"  v-validate="'required|digits:10'" label="phone" required  :error-messages="errors.collect('phone')" data-vv-name="phone" ></v-text-field> -->
                            </v-flex>
                        </v-layout>
    <!-- email of mother -->
                        <v-layout>

                            <v-flex xs4 pt-4 text-xs-right pr-4><b>E-mail :</b></v-flex>
                            <v-flex xs4>
                                <input type="text" placeholder="E-mail" name="mother e-mail" v-validate="'required|email'" data-vv-delay="300"   v-model="form.mmail" :class="{'input': true, }" class="textinput">
                                <!-- <i v-show="errors.has('e-mail')"></i> -->
                                <span v-show="errors.has('mother e-mail')" style="color:red;">{{ errors.first('mother e-mail') }}</span>
                                
                            </v-flex>
                    </v-layout>
    <!-- occupation  and income of mother -->
                        <v-layout row>
                            <v-flex xs4 pt-4 text-xs-right pr-4>
                                <b>Occupation :</b>
                            </v-flex>
                            <v-flex xs4 pt-3>
                                <div class="select-field">
                                            <select name="mother occupation" v-validate="'required'"   v-model="form.moccupation">
                                            <option value="" hidden>Occupation</option>
                                            <option  v-for="items in items">{{items.text}}</option>
                                    </select>
                                    </div> 
                                    <!-- <i v-show="errors.has('occupation')"></i> -->
                                    <span v-show="errors.has('mother occupation')" style="color:red;">{{ errors.first('mother occupation') }}</span>    
                                
                            </v-flex>
                        </v-layout>
                        <v-layout>
                                <v-flex pt-4 xs4 text-xs-right pr-4 >
                                <b>Income :</b>
                            </v-flex>
                            <v-flex xs4>
                                    <input type="text" placeholder="Income" name="mother income" v-validate="'required|numeric'" data-vv-delay="300"   v-model="form.mincome" :class="{'input': true, }" class="textinput">
                                <i v-show="errors.has('income')"></i>
                                <span v-show="errors.has('mother income')" style="color:red;">{{ errors.first('mother income') }}</span>
                                    
                            </v-flex>
                            
                        </v-layout>
    <br><br>
    <!-- gardian info starts -->
                    
                        <h2 class="page-heading">GUARDIANS INFO</h2>
                        
    <!-- first and last name of gardian -->
                        <v-layout row>
                            <v-flex pt-4 xs4 text-xs-right pr-4 ><b>Name :</b></v-flex>
        
                            <v-flex xs4  >
                                <input type="text" placeholder="firstname" name="guardian firstname" v-model="form.gfname" :class="{'input': true, }" class="textinput">
                            </v-flex> 
        
                            </v-layout>

                        <v-layout row wrap>
                            <v-flex pt-4 xs4 text-xs-right pr-4>

                            </v-flex>
                                <v-flex xs4 >
                                    <input type="text" placeholder="lastname" name="guardian lastname"  v-model="form.glname" :class="{'input': true, }" class="textinput">
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

                            <v-flex xs4 pt-4 text-xs-right pr-4><b>E-mail :</b></v-flex>
                            <v-flex xs4>
                                <input type="text" placeholder="E-mail" name="guardian e-mail" v-model="form.gmail" :class="{'input': true, }" class="textinput">
                                <i v-show="errors.has('e-mail')"></i>
                            </v-flex>
                    </v-layout>
    <!-- occupation  and income of gardian -->
                    <v-layout row>
                        <v-flex xs4 pt-4 text-xs-right pr-4>
                            <b>Occupation :</b>
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
                        <v-flex pt-4 xs4 text-xs-right pr-4 >
                            <b>Income :</b>
                        </v-flex>
                        <v-flex xs4>
                                <input type="text" placeholder="Income" name="guardian income"  v-model="form.gincome" :class="{'input': true, }" class="textinput">
                        </v-flex>
                        
                    </v-layout>
    <!-- buttons -->
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
    props:['content1'],
    $_veeValidate: {
        validator: 'new'
    },
    computed: {
            form (){
                return this.$store.state.form ;
            },
            items(){
                return this.$store.state.items;
            },
    },
    methods: {
        submit(){
                this.$validator.validateAll().then((result) => {
                    if (result) {
                    if(this.errors.any() == false){
                        // this.$emit('to1push',this.form);
                        this.$emit('form1validity',4);
                        // setTimeout(function(){
                        //     Object.keys(this.form).forEach(key => this.form[key]=null);
                        // }, 2000);
                    }
                    return;
                    }
                });
        },
        submit1(){
            this.$validator.validateAll();
        },
        clear () {
                this.form.ffname='',
                this.form.flname= '',
                this.form.fcontact='',
                this.form.fmail='',
                this.form.foccupasion='',
                this.form.fincome='',

                this.form.mfname='',
                this.form.mlname= '',
                this.form.mcontact='',
                this.form.mmail='',
                this.form.moccupasion='',
                this.form.mincome='',

                this.form.gfname='',
                this.form.glname= '',
                this.form.gcontact='',
                this.form.gmail='',
                this.form.goccupasion='',
                this.form.gincome='',
                this.$validator.reset()
        },
    },
    data() {
            return {

            }
    },
    mounted () {
            this.$validator.localize('en', this.dictionary)
    },
    watch: {
            menu (val) {
                val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
            }
    },
}    
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

</style>
