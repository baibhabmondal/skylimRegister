<template>
    <div style="width:100%;border:1px;background-color:#E9EbEE" >
        <form @submit.prevent="submit1" id="jay">

    <h2 class="page-heading">EDUCATIONAL BACKGROUND</h2>
<!-- 10th board  -->
    <v-layout row>
        <v-flex xs3>
            <h3> X BOARD DETAILS</h3>
        </v-flex>
    </v-layout>
<!-- details of your 10 board -->
    <v-layout row>
        <v-flex xs4 pt-4 text-xs-right pr-4>
            <b>Name of the institution :</b>
        </v-flex>
        <v-flex xs4>
            <input v-model="form.xinstitute" type="text" placeholder="Institution name" name="X institution" v-validate="'required|alpha_spaces'" data-vv-delay="300"   :class="{'input': true, }" class="textinput">
            <span v-show="errors.has('X institution')" style="color:red;">{{ errors.first('X institution') }}</span>
        </v-flex>
    </v-layout>
<!-- name of the board         -->
    <v-layout row>
        <v-flex xs4 pt-4 text-xs-right pr-4>
            <b>Name of the board :</b>  
        </v-flex>
        <v-flex xs4>
            <input v-model="form.xboard" type="text" placeholder="Name of the board" name="X board" v-validate="'required|alpha_spaces'" data-vv-delay="300"   :class="{'input': true, }" class="textinput">  
            <span v-show="errors.has('X board')" style="color:red;">{{ errors.first('X board') }}</span>  
        </v-flex>
    </v-layout>
<!-- marks scored in 10    -->
    <v-layout row>
        <v-flex xs4 pt-4 text-xs-right pr-4>
         <b>Marks scored :</b>
        </v-flex>
        <v-flex xs4>
              <input v-model="form.xmarks" type="text" placeholder="Marks scored" name="X marks" v-validate="'required|alpha_spaces'" data-vv-delay="300"   :class="{'input': true, }" class="textinput">  
      <span v-show="errors.has('X marks')" style="color:red;">{{ errors.first('X marks') }}</span> 
           <!-- <v-text-field label="First Name"  required ></v-text-field> -->
        </v-flex>
    </v-layout>
<!-- year of passing 10         -->
    <v-layout row wrap>
          <v-flex xs4 pt-4 text-xs-right pr-4>
                <b>Year of passing :</b>
          </v-flex>
          <v-flex xs4 pt-3>
                 <div class="select-field">
                    <select v-model="form.xpassyear" name="X passing year" v-validate="'required'">
                        <option  value="" hidden>State</option>
                        <option  v-for="item in items">{{item.text}}</option>
                    </select>
                  </div> 

                   <span v-show="errors.has('X passing year')" style="color:red;">{{ errors.first('X passing year') }}</span>    
          </v-flex>
    </v-layout>
<!-- 12th board     -->
    <v-layout row>
        <v-flex xs3>
            <h3> XII BOARD DETAILS</h3>
        </v-flex>
    </v-layout>
<!-- details of your 12 board -->
    <v-layout row>
          <v-flex xs4 pt-4 text-xs-right pr-4>
              <b>Name of the institution :</b>
          </v-flex>
          <v-flex xs4>
              <input v-model="form.xiiinstitute" type="text" placeholder="Institution name" name="XII institution" v-validate="'required|alpha_spaces'" data-vv-delay="300"   :class="{'input': true, }" class="textinput">
              <span v-show="errors.has('XII institution')" style="color:red;">{{ errors.first('XII institution') }}</span>
          </v-flex>
    </v-layout>
<!-- name of the board         -->
    <v-layout row>
          <v-flex xs4 pt-4 text-xs-right pr-4>
             <b>Name of the board :</b>  
          </v-flex>
          <v-flex xs4>
             <input v-model="form.xiiboard" type="text" placeholder="Name of the board" name="XII board" v-validate="'required|alpha_spaces'" data-vv-delay="300"   :class="{'input': true, }" class="textinput">  
             <span v-show="errors.has('XII board')" style="color:red;">{{ errors.first('XII board') }}</span>  
          </v-flex>
    </v-layout>
<!-- marks scored in 12    -->
    <v-layout row>
        <v-flex xs4 pt-4 text-xs-right pr-4>
            <b>Marks scored :</b>
        </v-flex>
        <v-flex xs4>
            <input v-model="form.xiimarks" type="text" placeholder="Marks scored" name="XII marks" v-validate="'required|alpha_spaces'" data-vv-delay="300"   :class="{'input': true, }" class="textinput">  
            <span v-show="errors.has('XII marks')" style="color:red;">{{ errors.first('XII marks') }}</span> 
        </v-flex>
    </v-layout>
<!-- year of passing 12         -->
    <v-layout row wrap>
        <v-flex xs4 pt-4 text-xs-right pr-4>
              <b>Year of passing :</b>
        </v-flex>
        <v-flex xs4 pt-3>
            <div class="select-field">
                <select v-model="form.xiipassyear" name="XII passing year" v-validate="'required'">
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
            <v-btn v-on:click="submit" type="submit" color="primary">CONTINUE</v-btn>
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
                        this.$emit('to1push',this.form);//FIRST I WANT TO SEND THIS EVENT
                        this.$emit('form1validity',2);//THEN THIS EVENT AND THEN
                        
                        // Object.keys(this.form).forEach(key => this.form[key]="");//THIS THING
                        //FIRST TWO EVENT SENDING ARE IN SEQUENCE BUT BECAUSE OF THE THIRD THING
                        //ALL FORM DATA IS DELETED WHICH ALREADY BEEN EMITTED
                    }
                    return;
                    }
                });
        },
        res:function(){
                
        },
        submit1(){
            this.$validator.validateAll();
        },
        clear () {
            this.form.xinstitute="",
            this.form.xboard="",
            this.form.xmarks="",
            this.form.xpassyear="",
            this.form.xiiinstitute="",
            this.form.xiiboard="",
            this.form.xiimarks="",
            this.form.xiipassyear="",
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





