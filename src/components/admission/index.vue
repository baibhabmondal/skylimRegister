<template>
    <div id="app">
        <v-app id="inspire">
            <v-card>
            <navbar class="mb-2"></navbar>

               
                   <v-container>

                   

                    <v-stepper v-model="e1">
                        <v-stepper-header>
                            <v-stepper-step step="1" :complete="e1 > 1" editable></v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step step="2" :complete="e1 > 2" editable></v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step step="3" editable></v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step step="4" editable></v-stepper-step>
                        </v-stepper-header>
                        
                        <v-stepper-items>
                            <v-container>
                            <v-stepper-content step="1">
                                <one :complete="e1" @form1validity="setE"></one>
                                <!-- <v-btn type="submit" color="primary"  @click.native="e1 = 2,submit" @click="">Continue</v-btn>                         -->
                            </v-stepper-content>
                            <v-stepper-content step="2">
                                <v-flex>EDUCATIONAL BACKGROUND</v-flex>
                                <two :complete="e1" @form1validity="setE"></two>
                                <!-- <v-btn :disabled="errors.any()" type="submit" color="primary" @click.native="e1 = 3" @click="one2">Continue</v-btn>                         -->
                                <v-btn color="primary" @click.native="e1 = 1">Go Back</v-btn>                        
                            
                            </v-stepper-content>
                            <v-stepper-content step="3">
                                <three></three>
                                <v-btn color="primary" @click.native="e1 = 1">Continue</v-btn>
                                <v-btn flat>Cancel</v-btn>
                            </v-stepper-content>
                            </v-container>
                        </v-stepper-items>
                
                    
                    </v-stepper>
            </v-container>
               </v-card>
        </v-app>
    </div>
</template>--->
  
<script>

import navbar from './../navbar.vue'

import one from './steps/one.vue'
import two from './steps/two.vue'
import three from './steps/three.vue'

export default {
  data () {
    return {
      e1: 0,
        combine:[]
    }
  },
  computed: {
        form(){
            return this.$store.state.form;
        },
        form2(){
            return this.$store.state.form2;
        },
  },
  methods:{
      one1:function(){
          console.log(this.form)

      },
       one2:function(){
           this.combine.push(this.form);
           this.combine.push(this.form2);
          console.log(this.combine)

      },
      submit () {
        this.$validator.validateAll()
      },
      setE(val){
          console.log(val);
          this.e1=parseInt(val);
      },
      incrementE(){
          this.e1++;
      },
      decrementE(){
          this.e1--;
      }
  },
  components:{navbar,one,two,three}
}
</script>