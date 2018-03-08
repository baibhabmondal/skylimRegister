<template>
   <div>
  
      
  
           <v-form v-model="valid">
   <v-container grid-list-md text-xs-center  height="100%">
              
  
                  <h2>FATHERS INFO</h2>
   <!-- first and last name of father -->
                   <v-layout row>
                       <v-flex pt-4 xs4 >NAME</v-flex>
  
                       <v-flex xs3  d-inline-fleX  >
                      
                           <v-text-field :error-messages="errors.collect('name')" data-vv-name="name" v-validate="'required|alpha'" label="First Name" required v-model="form2.ffname" ></v-text-field>
                       </v-flex>
  
                     
  
                       <v-flex xs3 offset-xs1>
                      
                           <v-text-field :error-messages="errors.collect('name')" data-vv-name="name" v-validate="'required|alpha'" label="Last Name" v-model="form2.flname"></v-text-field>
                       </v-flex>
  
                   </v-layout>
   <!-- contact nuber of father -->
                 <v-layout>
                     <v-flex xs4 pt-4>
                        CONTACT NUMBER
                     </v-flex>
                     <v-flex xs3>
                            <v-text-field  v-model="form2.fcontact"  v-validate="'required|digits:10'" label="phone" required  :error-messages="errors.collect('phone')" data-vv-name="phone" ></v-text-field>
                     </v-flex>
                 </v-layout>
   <!-- email of father -->
                <v-layout>

                      <v-flex xs4 pt-4>E-MAIL</v-flex>
                      <v-flex xs3>
                          <v-text-field  v-model="form2.fmail"
                           :error-messages="errors.collect('email')"
                           v-validate="'required|email'"
                           data-vv-name="email"
                           label="E-mail" 
                           required
                      ></v-text-field>
                      </v-flex>
               </v-layout>
   <!-- occupation  and income of father -->
                  <v-layout row>
                      <v-flex xs4 pt-4>
                          OCCUPATION
                      </v-flex>
                      <v-flex xs3>
                          <v-select  v-model="form2.foccupasion"
                               label="Select"
                                :items="items"
                                 :error-messages="errors.collect('select')"
                                    v-validate="'required'"
                                    data-vv-name="select"
                                    required
                                 item-value="text"
                              ></v-select>
                      </v-flex>
                      <v-flex pt-4 xs2 >
                         INCOME
                      </v-flex>
                      <v-flex xs3>
                                <v-select  v-model="form2.fincome"
                               label="Select"
                                :items="items"
                                 :error-messages="errors.collect('select')"
                                    v-validate="'required'"
                                    data-vv-name="select"
                                    required
                                 item-value="text"
                              ></v-select>
                      </v-flex>
                      </v-layout>

                      <v-divider></v-divider>
                     

                      <br><br>
   <!-- mothers info starts -->
                 
  
                      <h2 pt-4>MOTHERS INFO</h2>
   <!-- first and last name of mother -->
                   <v-layout row>
                       <v-flex pt-4 xs4 >NAME</v-flex>
  
                       <v-flex xs3  d-inline-fleX  >
                      
                           <v-text-field :error-messages="errors.collect('name')" data-vv-name="name" v-validate="'required|alpha'" label="First Name" required v-model="form2.mfname" ></v-text-field>
                       </v-flex>
  
                     
  
                       <v-flex xs3 offset-xs1>
                      
                           <v-text-field :error-messages="errors.collect('name')" data-vv-name="name" v-validate="'required|alpha'" label="First Name" required v-model="form2.mlname" ></v-text-field>
                       </v-flex>
  
                   </v-layout>
   <!-- contact nuber of mother -->
                 <v-layout>
                     <v-flex xs4 pt-4>
                        CONTACT NUMBER
                     </v-flex>
                     <v-flex xs3>
                            <v-text-field  v-model="form2.mcontact"  v-validate="'required|digits:10'" label="phone" required  :error-messages="errors.collect('phone')" data-vv-name="phone" ></v-text-field>
                     </v-flex>
                 </v-layout>
   <!-- email of mother -->
                <v-layout>

                      <v-flex xs4 pt-4>E-MAIL</v-flex>
                      <v-flex xs3>
                           <v-text-field  v-model="form2.mmail"
                           :error-messages="errors.collect('email')"
                           v-validate="'required|email'"
                           data-vv-name="email"
                           label="E-mail" 
                           required
                      ></v-text-field>
                      </v-flex>
               </v-layout>
   <!-- occupation and income of mother -->
                  <v-layout row>
                      <v-flex xs4 pt-4>
                          OCCUPATION
                      </v-flex>
                      <v-flex xs3>
                           <v-select  v-model="form2.moccupasion"
                               label="Select"
                                :items="items"
                                 :error-messages="errors.collect('select')"
                                    v-validate="'required'"
                                    data-vv-name="select"
                                    required
                                 item-value="text"
                              ></v-select>
                      </v-flex>
                      <v-flex pt-4 xs2 >
                         INCOME
                      </v-flex>
                      <v-flex >
                               <v-select  v-model="form2.mincome"
                               label="Select"
                                :items="items"
                                 :error-messages="errors.collect('select')"
                                    v-validate="'required'"
                                    data-vv-name="select"
                                    required
                                 item-value="text"
                              ></v-select>
                      </v-flex>

                  </v-layout>
                  <v-divider ></v-divider>
                  <br><br>
   <!-- guardian info starts -->
             
                  <h2 >GUARDIANS INFO</h2>
                 
   <!-- first and last name of guardian -->
                   <v-layout row>
                       <v-flex pt-4 xs4 >NAME</v-flex>
  
                       <v-flex xs3  d-inline-fleX  >
                      
                           <v-text-field :error-messages="errors.collect('name')" data-vv-name="name"  label="First Name"  v-model="form2.gfname" ></v-text-field>
                       </v-flex>
  
                     
  
                       <v-flex xs3 offset-xs1>
                      
                           <v-text-field  data-vv-name="name"  label="First Name"  v-model="form2.glname" ></v-text-field>
                       </v-flex>
  
                   </v-layout>
   <!-- contact nuber of guardian -->
                 <v-layout>
                     <v-flex xs4 pt-4>
                        CONTACT NUMBER
                     </v-flex>
                     <v-flex xs3>
                            <v-text-field  v-model="form2.gcontact"   label="phone"   data-vv-name="phone" ></v-text-field>
                     </v-flex>
                 </v-layout>
   <!-- email of guardian -->
                <v-layout>

                      <v-flex xs4 pt-4>E-MAIL</v-flex>
                      <v-flex xs3>
                           <v-text-field  v-model="form2.gmail"
                          
                           data-vv-name="email"
                           label="E-mail" 
                           
                      ></v-text-field>
                      </v-flex>
               </v-layout>
   <!-- occupation and annual income of guardian -->
                  <v-layout row>
                      <v-flex xs4 pt-4>
                          OCCUPATION
                      </v-flex>
                      <v-flex xs3>
                           <v-select  v-model="form2.goccupasion"
                               label="Select"
                                :items="items"
                                   
                                    data-vv-name="select"
                                    
                                 item-value="text"
                              ></v-select>
                      </v-flex>
                      <v-flex pt-4 xs2 >
                         INCOME
                      </v-flex>
                      <v-flex >
                               <v-select  v-model="form2.gincome"
                               label="Select"
                                :items="items"
                                    
                                    data-vv-name="select"
                                    
                                 item-value="text"
                              ></v-select>
                      </v-flex>

                  </v-layout>
   <v-btn @click="submit" type="submit" color="primary">CONTINUE</v-btn>
    <v-btn @click="clear" color="primary">clear</v-btn>

</v-container>     
  
           </v-form>
  
                 
  
   </div>
</template>




<script>
   export default {
  
       data() {
  
           return {
                items: [
         { text: 'O positive' },
         { text: 'O negative' },
         { text: 'A negative' },
         { text: 'A positive' },
         { text: 'B  negative' },
         { text: 'B positive' },
         { text: 'AB negative' },
        { text: 'AB positive' }
       ],
           }
       }
  
   }
</script>


<script>
   export default {
     
       props:['content1'],
       $_veeValidate: {
          validator: 'new'
       },
       computed: {
        form2 (){
            return this.$store.state.form2 ;
        },
        items(){
            return this.$store.state.items;
        },
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
          email: 'E-mail Address'
        },
        custom: {
            name: {
                required: () => 'Name can not be empty',
                max: 'The name field may not be greater than 10 characters'
            },
            address: {
                required: () => 'address can not be empty',
                max: 'The name field may not be greater than 10 characters'
            },
            select: {
                required: 'Select field is required'
            },
            pin: {
                required: 'pincode is required'
            },
            phone: {
                required: 'pincode is required'
            }
        }
      } 
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
methods: {
    submit () {
        this.$validator.validateAll();
        this.a=this.errors.any();
        if(this.a == false){
          this.$emit('form1validity',3);
        }
      },
       clear () {
                   
                   this.form2.ffname='',
                   this.form2.flname= '',
                   this.form2.fcontact='',
                   this.form2.fmail='',
                   this.form2.foccupasion='',
                   this.form2.fincome='',

                   this.form2.mfname='',
                   this.form2.mlname= '',
                   this.form2.mcontact='',
                   this.form2.mmail='',
                   this.form2.moccupasion='',
                   this.form2.mincome='',

                   this.form2.gfname='',
                   this.form2.glname= '',
                   this.form2.gcontact='',
                   this.form2.gmail='',
                   this.form2.goccupasion='',
                   this.form2.gincome='',
        this.$validator.reset()
      },
    create() {
            this.$validator.validateAll().then(()=>{
               console.log(this.form2 )
            })
    },
    
 save (date) {
   this.$refs.menu.save(date)
 },
 onFileChange(e) {
     var files = e.target.files || e.dataTransfer.files;
     if (!files.length)
       return;
     this.createImage(files[0]);
   },
   createImage(file) {
     var image = new Image();
     var reader = new FileReader();
     var vm = this;

     reader.onload = (e) => {
       vm.image = e.target.result;
     };
     reader.readAsDataURL(file);
   },
   removeImage: function (e) {
     this.image = '';
   }
}
   }
</script>

