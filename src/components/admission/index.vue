<template>
    <div id="app" >
        <v-app id="inspire" style="background-color:#455553">
            <navbar class="mb-2"></navbar>

               <v-layout row wrap >
                   <v-flex lg8 offset-lg2>

                       <!-- <div style="display:none;"> -->
                           
                           <v-stepper v-model="e1"  style="box-shadow: none;background-color:#FFFBFB;">
                        <v-stepper-header style="box-shadow: none;">
                             <v-stepper-step step="1" :complete="e1 > 1" editable></v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step step="2" :complete="e1 > 2" editable></v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step step="3" :complete="e1 > 3" editable></v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step step="4" :complete="e1 > 4" editable></v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step step="5" editable></v-stepper-step>
                            <v-divider></v-divider>
                        </v-stepper-header>
                        <!-- </div> -->
                        <v-stepper-items style="padding:0px" >
                            <v-stepper-content step="1" style="width:100%;padding:0px;margin:0px" >
                                <intro></intro>
                                <v-btn color="primary" @click.native="e1 = 2">go to registration</v-btn>                        
                            </v-stepper-content>
                            <v-stepper-content step="2" style="width:100%;padding:0px;margin:0px" >
                                <one :complete="e1" @form1validity="setE" ></one>
                            </v-stepper-content>
                            <v-stepper-content step="3" style="margin:0;padding:0;">
                                <two :complete="e1" @form1validity="setE"></two>
                                <v-btn color="primary" @click.native="e1 = 2">Go Back</v-btn>                        
                            </v-stepper-content>
                            <v-stepper-content step="4" style="margin:0;padding:0;">
                                <three :complete="e1"  @form1validity="setE"></three>
                                <v-btn color="primary"  @click.native="e1 = 3">Go back</v-btn>
                            </v-stepper-content>
                              <v-stepper-content step="5" style="margin:0;padding:0;">
                                <four @to1push="pushing" :complete="e1"></four>
                                <v-btn color="primary" @click.native="e1 = 1">Continue</v-btn>
                                <v-btn flat>Cancel</v-btn>
                            </v-stepper-content>
                        </v-stepper-items>
                
                    
                    </v-stepper>
            </v-flex>
            </v-layout>
        </v-app>
    </div>
</template>
  
<script>

import navbar from './../navbar.vue'

import one from './steps/one.vue'
import two from './steps/two.vue'
import three from './steps/three.vue'
import four from './steps/four.vue'
import intro from './steps/intro.vue'
import {mapActions} from 'vuex';

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
        allstudents(){
            return this.$store.state.allstudents;
        }
    },
    methods:{
        setE(val){
            this.e1=parseInt(val);
        },
        pushing:function(arg){
            this.$store.commit('pushing',arg)
        },
  },
  components:{navbar,one,two,three,four,intro}
}
</script>