<template>
  <div>
    <div class="arrow-steps clearfix" style="margin: 0 0 5% 0; width: 100%;">
      <div class="step "> <span> Step 1</span> </div>
      <div class="step"> <span>Step 2</span> </div>
      <div class="step"> <span> Step 3</span> </div>
      <div class="step "> <span>Step 4</span> </div>
      <div class="step current"> <span> Step 5</span> </div>
    </div>
    <div>
      <h2 class="page-heading">ATTACHMENTS</h2>
      <v-container>
        <v-layout row>
          <v-flex xs4 lg5 pt-4 text-xs-right>
            <b>PHOTO : </b>
          </v-flex>
          <v-flex xs4 lg4>
            <v-btn raised style="background:#666; color: white; " @click="onPickFile('photo')">UPLOAD</v-btn>
            <input type="file" id="attachments" ref="photo" style="display: none;" @change="uploadFieldChange($event,'photo')">
          </v-flex>
          <v-flex xs4 lg4>
            <div v-if="pf">
              <span>{{ photo.name + ' (' + Number((photo.size / 1024 / 1024).toFixed(1)) + 'MB)'}}</span>
              <span @click="removeAttachment($event,'photo')"><button>Remove</button></span>
            </div>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs4 lg5 pt-4 text-xs-right>
            <b>X MARKSHEET : </b>
          </v-flex>
          <v-flex xs4 lg4>
            <v-btn raised style="background:#666; color: white; " @click="onPickFile('xmarksFile')">UPLOAD</v-btn>
            <input type="file" id="attachments" ref="xmarksFile" style="display: none;" @change="uploadFieldChange($event,'xmarksFile')">
          </v-flex>
          <v-flex xs4 lg4>
            <div v-if="xmf">
              <span>{{ xmarksFile.name + ' (' + Number((xmarksFile.size / 1024 / 1024).toFixed(1)) + 'MB)'}}</span>
              <span @click="removeAttachment($event,'xmarksFile')"><button>Remove</button></span>
            </div>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs4 lg5 pt-4 text-xs-right>
            <b>XII MARKSHEET : </b>
          </v-flex>
          <v-flex xs4 lg4>
            <v-btn raised style="background:#666; color: white; " @click="onPickFile('xiimarksFile')">UPLOAD</v-btn>
            <input type="file" id="attachments" ref="xiimarksFile" style="display: none;" @change="uploadFieldChange($event,'xiimarksFile')">
          </v-flex>
          <v-flex xs4 lg4>
            <div v-if="xiimf">
              <span>{{ xiimarksFile.name + ' (' + Number((xiimarksFile.size / 1024 / 1024).toFixed(1)) + 'MB)'}}</span>
              <span @click="removeAttachment($event,'xiimarksFile')"><button>Remove</button></span>
            </div>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs4 lg5 pt-4 text-xs-right>
            <b>ADHAR CARD PHOTO : </b>
          </v-flex>
          <v-flex xs4 lg4>
            <v-btn raised style="background:#666; color: white; " @click="onPickFile('adharPhoto')">UPLOAD</v-btn>
            <input type="file" id="attachments" ref="adharPhoto" style="display: none;" @change="uploadFieldChange($event,'adharPhoto')">
          </v-flex>
          <v-flex xs4 lg4>
            <div v-if="adharF">
              <span>{{ adharPhoto.name + ' (' + Number((adharPhoto.size / 1024 / 1024).toFixed(1)) + 'MB)'}}</span>
              <span @click="removeAttachment($event,'adharPhoto')"><button>Remove</button></span>
            </div>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs4 lg5 pt-4 text-xs-right>
            <b>ADHAR CARD NUMBER: </b>
          </v-flex>
          <v-flex xs4 lg4>
            <input v-model="adharNO" type="text" placeholder="ADHAR CARD NUMBER" name="adharNO" v-validate="'required|digits:12'" data-vv-delay="300"
              :class="{'input': true, }" class="textinput">
            <span v-show="errors.has('adharNO')" style="color:red;">{{ errors.first('adharNO') }}</span>
          </v-flex>
          <v-flex xs4 lg4>

          </v-flex>

        </v-layout>
      </v-container>

      <v-btn @click="submit">SUBMIT</v-btn>
      <v-btn @click="downloadpdf">Preview</v-btn>



      <!-- <v-btn style="background:#455553; color: white;" raised @click="onPickFile">UPLOAD</v-btn>
            <input type="file" style="display: none;" ref="fileInput" accept="image/*" @change="onFilePicked">
            <img :src="imageURL" height="150"> -->
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import pdfMake from "pdfmake/build/pdfmake";
  import pdfFonts from "pdfmake/build/vfs_fonts";
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  export default {
    $_veeValidate: {
      validator: 'new'
    },
    props: [
      'settings'
    ],
    data() {
      return {
        pf: 0,

        // You can store all your files here
        data:  new FormData(),
        attachments: [],
        xmf: 0,
        xiimf: 0,
        adharF: 0,
        photo: null,
        xmarksFile: null,
        xiimarksFile: null,
        adharPhoto: null,
        adharNO: "",
        photoURL: "",
        // Each file will need to be sent as FormData element
        // errors: {
        // },
        percentCompleted: 0, // You can store upload progress 0-150 in value, and show it on the screen
        dd: {
          pageSize: 'A4',
          pageMargins: [40, 20, 40, 20],
          content: [{
            text: 'SRM  Institute  Of  Science  And  Technology ,  Kattankulanthur',
            alignment: 'center',
            style: 'header',
          },
          {
            text: "AAAAAAAA"

            // text: this.photoURL,
            // width: 150
          },

          {
            text: 'Personal Details :',
            alignment: 'left',
            bold: true,
            fontSize: 12,
            margin: [10, 0, 0, 15]
          },
          {
            alignment: 'justify',
            columns: [

              {
                width: 150,
                text: [{
                  text: 'Full Name',
                  fontSize: 10,
                  bold: false,
                  margin: [0, 0, 10, 0]
                },],

                style: 'subheader'
              },
              {
                width: 20,
                text: [{
                  text: ':',
                  fontSize: 10,
                  bold: false,
                  margin: [0, 0, 10, 0]
                },],

                style: 'subheader'
              },

              {
                width: 200,
                text: [{
                  text: this.$store.state.form.fname,
                  fontSize: 10,
                  bold: true,
                },
                {
                  text: '   '
                },
                {
                  text: this.$store.state.form.lname,
                  fontSize: 10,
                  bold: true,
                },
                ],
                style: 'subheader'
              },
            ]
          },
          {
            alignment: 'justify',
            columns: [

              {
                width: 150,
                text: [{
                  text: 'Gender',
                  fontSize: 10,
                  bold: false,
                  margin: [0, 0, 10, 0]
                },],

                style: 'subheader'
              },
              {
                width: 20,
                text: [{
                  text: ':',
                  fontSize: 10,
                  bold: false,
                  margin: [0, 0, 10, 0]
                },],

                style: 'subheader'
              },

              {
                width: 200,
                text: [{
                  text: this.$store.state.form.gender,
                  fontSize: 10,
                  bold: true,
                }],
                style: 'subheader'
              },
            ]
          },
          {
            alignment: 'justify',
            columns: [

              {
                width: 150,
                text: [{
                  text: 'Date-of-birth',
                  fontSize: 10,
                  bold: false,
                  margin: [0, 0, 10, 0]
                },],

                style: 'subheader'
              },
              {
                width: 20,
                text: [{
                  text: ':',
                  fontSize: 10,
                  bold: false,
                  margin: [0, 0, 10, 0]
                },],

                style: 'subheader'
              },

              {
                width: 200,
                text: [{
                  text: this.$store.state.form.dob,
                  fontSize: 10,
                  bold: true,
                }
                ],
                style: 'subheader'
              },
            ]
          },
          {
            alignment: 'justify',
            columns: [

              {
                width: 150,
                text: [{
                  text: 'Father\'s Name',
                  fontSize: 10,
                  bold: false,
                  margin: [0, 0, 10, 0]
                },],

                style: 'subheader'
              },
              {
                width: 20,
                text: [{
                  text: ':',
                  fontSize: 10,
                  bold: false,
                  margin: [0, 0, 10, 0]
                },],

                style: 'subheader'
              },

              {
                width: 200,
                text: [{
                  text: this.$store.state.form.ffname,
                  fontSize: 10,
                  bold: true,
                },
                {
                  text: '   '
                },
                {
                  text: this.$store.state.form.flname,
                  fontSize: 10,
                  bold: true,
                },
                ],
                style: 'subheader'
              },
            ]
          },
          {
            alignment: 'justify',
            columns: [

              {
                width: 150,
                text: [{
                  text: 'Guardian\'s Name',
                  fontSize: 10,
                  bold: false,
                  margin: [0, 0, 10, 0]
                },],

                style: 'subheader'
              },
              {
                width: 20,
                text: [{
                  text: ':',
                  fontSize: 10,
                  bold: false,
                  margin: [0, 0, 10, 0]
                },],

                style: 'subheader'
              },

              {
                width: 200,
                text: [{
                  text: this.$store.state.form.gfname,
                  fontSize: 10,
                  bold: true,
                },
                {
                  text: '   '
                },
                {
                  text: this.$store.state.form.glname,
                  fontSize: 10,
                  bold: true,
                },
                ],
                style: 'subheader'
              },
            ]
          },
          {
            alignment: 'justify',
            columns: [

              {
                width: 150,
                text: [{
                  text: 'Email-Id',
                  fontSize: 10,
                  bold: false,
                  margin: [0, 0, 10, 0]
                },],

                style: 'subheader'
              },
              {
                width: 20,
                text: [{
                  text: ':',
                  fontSize: 10,
                  bold: false,
                  margin: [0, 0, 10, 0]
                },],

                style: 'subheader'
              },

              {
                width: 200,
                text: [{
                  text: this.$store.state.form.mail,
                  fontSize: 10
                }],
                style: 'subheader'
              },
            ]
          },
          {
            alignment: 'justify',
            columns: [

              {
                width: 150,
                text: [{
                  text: 'Address',
                  fontSize: 10,
                  bold: false,
                  margin: [0, 0, 10, 0]
                },],

                style: 'subheader'
              },
              {
                width: 20,
                text: [{
                  text: ':',
                  fontSize: 10,
                  bold: false,
                  margin: [0, 0, 10, 0]
                },],

                style: 'subheader'
              },

              {
                width: 200,
                text: [{
                  text: this.$store.state.form.add1,
                  fontSize: 10,
                  bold: true,
                }],
                style: 'subheader'
              },
            ]
          },
          {
            alignment: 'justify',
            columns: [

              {
                width: 150,
                text: [{
                  text: 'City',
                  fontSize: 10,
                  bold: false,
                  margin: [0, 0, 10, 0]
                },],

                style: 'subheader'
              },
              {
                width: 20,
                text: [{
                  text: ':',
                  fontSize: 10,
                  bold: false,
                  margin: [0, 0, 10, 0]
                },],

                style: 'subheader'
              },

              {
                width: 200,
                text: [{
                  text: this.$store.state.form.add1city,
                  fontSize: 10,
                  bold: true,
                }],
                style: 'subheader'
              },
            ]
          },
          {
            alignment: 'justify',
            columns: [

              {
                width: 150,
                text: [{
                  text: 'State',
                  fontSize: 10,
                  bold: false,
                  margin: [0, 0, 10, 0]
                },],

                style: 'subheader'
              },
              {
                width: 20,
                text: [{
                  text: ':',
                  fontSize: 10,
                  bold: false,
                  margin: [0, 0, 10, 0]
                },],

                style: 'subheader'
              },

              {
                width: 200,
                text: [{
                  text: this.$store.state.form.add1state,
                  fontSize: 10,
                  bold: true,
                }],
                style: 'subheader'
              },
            ]
          },
          {
            alignment: 'justify',
            columns: [

              {
                width: 150,
                text: [{
                  text: 'Contact',
                  fontSize: 10,
                  bold: false,
                  margin: [0, 0, 10, 0]
                },],

                style: 'subheader'
              },
              {
                width: 20,
                text: [{
                  text: ':',
                  fontSize: 10,
                  bold: false,
                  margin: [0, 0, 10, 0]
                },],

                style: 'subheader'
              },

              {
                width: 200,
                text: [{
                  text: this.$store.state.form.contact1,
                  fontSize: 10,
                  bold: true,
                }],
                style: 'subheader'
              },
            ]
          },

          {
            text: 'Academic Details :',
            alignment: 'left',
            bold: true,
            fontSize: 12,
            margin: [10, 20, 0, 20]
          },
          {
            style: 'tableExample',
            table: {
              widths: [80, 80, 230, 90],
              body: [
                [{
                  bold: true,
                  text: 'Class'
                },
                {
                  bold: true,
                  text: 'Name of Board'
                },
                {
                  bold: true,
                  text: 'Name of Institute'
                },
                {
                  bold: true,
                  text: 'Percentage'
                }
                ],
                ['X', this.$store.state.form.xboard, this.$store.state.form.xinstitute, this.$store.state.form.xmarks],
                ['XII', this.$store.state.form.xiiboard, this.$store.state.form.xiiinstitute, this.$store.state.form.xiimarks]
              ]
            }
          },

          {
            text: 'Course Details :',
            alignment: 'left',
            bold: true,
            fontSize: 12,
            margin: [10, 20, 0, 20]
          },
          // 

          {
            alignment: 'justify',
            columns: [

              {
                width: 150,
                text: [{
                  text: 'Programme',
                  fontSize: 10,
                  bold: false,
                  margin: [0, 0, 10, 0]
                },],

                style: 'subheader'
              },
              {
                width: 20,
                text: [{
                  text: ':',
                  fontSize: 10,
                  bold: false,
                  margin: [0, 0, 10, 0]
                },],

                style: 'subheader'
              },

              {
                width: 200,
                text: [{
                  text: this.$store.state.form.programme,
                  fontSize: 10,
                  bold: true,
                }
                ],
                style: 'subheader'
              },
            ]
          },

          {
            alignment: 'justify',
            columns: [

              {
                width: 150,
                text: [{
                  text: 'Discipline',
                  fontSize: 10,
                  bold: false,
                  margin: [0, 0, 10, 0]
                },],

                style: 'subheader'
              },
              {
                width: 20,
                text: [{
                  text: ':',
                  fontSize: 10,
                  bold: false,
                  margin: [0, 0, 10, 0]
                },],

                style: 'subheader'
              },

              {
                width: 200,
                text: [{
                  text: this.$store.state.form.discipline,
                  fontSize: 10,
                  bold: true
                }],
                style: 'subheader'
              },
            ]
          },
          {
            alignment: 'justify',
            columns: [

              {
                width: 150,
                text: [{
                  text: 'Fee-Type',
                  fontSize: 10,
                  bold: false,
                  margin: [0, 0, 10, 0]
                },],

                style: 'subheader'
              },
              {
                width: 20,
                text: [{
                  text: ':',
                  fontSize: 10,
                  bold: false,
                  margin: [0, 0, 10, 0]
                },],

                style: 'subheader'
              },

              {
                width: 200,
                text: [{
                  text: this.$store.state.form.feeType,
                  fontSize: 10,
                  bold: true
                }],
                style: 'subheader'
              },
            ]
          },
          {
            text: 'Fees Structure :',
            alignment: 'left',
            bold: true,
            fontSize: 12,
            margin: [10, 20, 0, 10]
          },
          {
            text: 'Hostel Fees  :',
            alignment: 'left',
            bold: true,
            fontSize: 12,
            margin: [10, 20, 0, 20]
          },
          {
            style: 'tableExample',
            table: {
              widths: [96, 72, 72, 72, 72, 72],
              body: [
                [{
                  bold: true,
                  text: 'Fees Type'
                },
                {
                  bold: true,
                  text: '1st Year'
                },
                {
                  bold: true,
                  text: '2nd Year'
                },
                {
                  bold: true,
                  text: '3rd Year'
                },
                {
                  bold: true,
                  text: '4th Year'
                },
                {
                  bold: true,
                  text: 'Total'
                }
                ],
                ['Room Fees', this.$store.state.form.hostelFees, this.$store.state.form.hostelFees,
                  this.$store.state.form.hostelFees, this.$store.state.form.hostelFees, this.$store.state.form.hostelFees],
                ['Mess Fees', this.$store.state.form.messFees, this.$store.state.form.messFees,
                  this.$store.state.form.messFees, this.$store.state.form.messFees, this.$store.state.form.messFees],
                ['laundry Fees', this.$store.state.form.laundryFees, this.$store.state.form.laundryFees,
                  this.$store.state.form.laundryFees, this.$store.state.form.laundryFees, this.$store.state.form.laundryFees],
                ['Grand Total', this.$store.state.form.total, this.$store.state.form.total,
                  this.$store.state.form.total, this.$store.state.form.total, this.$store.state.form.total],
              ]
            }
          },
          {
            text: 'Transport Fees  :',
            alignment: 'left',
            bold: true,
            fontSize: 12,
            margin: [10, 20, 0, 20]
          },

          {
            style: 'tableExample',
            table: {
              widths: [96, 72, 72, 72, 72, 72],
              body: [
                [{
                  bold: true,
                  text: 'Fees Type'
                },
                {
                  bold: true,
                  text: '1st Year'
                },
                {
                  bold: true,
                  text: '2nd Year'
                },
                {
                  bold: true,
                  text: '3rd Year'
                },
                {
                  bold: true,
                  text: '4th Year'
                },
                {
                  bold: true,
                  text: 'Total'
                }
                ],
                ['Transport Fees', this.$store.state.form.transportFees, this.$store.state.form.transportFees,
                  this.$store.state.form.transportFees, this.$store.state.form.transportFees, this.$store.state.form.transportFees],
                // ['Transport Fees', this.$store.state.fees.transportFees, this.$store.state.fees.transportFees,
                //   this.$store.state.fees.transportFees, this.$store.state.fees.transportFees, this.$store.state.fees.transportFees],
                ['Grand Total', this.$store.state.form.total, this.$store.state.form.total,
                  this.$store.state.form.total, this.$store.state.form.total, this.$store.state.form.total],
              ]
            }
          }



          ],
          styles: {
            header: {
              fontSize: 20,
              alignment: 'justify',
              margin: [0, 10, 0, 40],
              bold: true,
            },
            subheader: {
              fontSize: 10,
              alignment: 'left',
              margin: [10, 0, 0, 10]
            },
            tableExample: {
              margin: [10, 0, 0, 15]
            }
          }
        },

      }
    },
    watch: {},
    computed: {
      form() {
        return this.$store.state.form;
      }
    },
    methods: {
      onPickFile(arg) {

        if (arg == 'photo') {

          this.$refs.photo.click()
        }
        else if (arg == 'xmarksFile') {

          this.$refs.xmarksFile.click()
        }
        else if (arg == 'xiimarksFile') {

          this.$refs.xiimarksFile.click()
        }
        else if (arg == 'adharPhoto') {

          this.$refs.adharPhoto.click()
        }
      },
      prepareFields() {
        // console.log(this.form);

        // let data =  new FormData()
        // data.append("key", "Value")
        for (const key of Object.keys(this.form)) {
          // console.log(key, this.form[key])
        this.data.append(key, this.form[key]);
        // console.log(data)NPM RUN DEV;
        }
        console.log(this.data.getAll("fname"))

      },
      removeAttachment(e, arg) {
        switch (arg) {

          case "photo":
            this.photo = null;
            this.$refs.photo.value = null;

            this.pf = 0;
            break;
          case "xmarksFile": this.xmarksFile = null;
            this.$refs.xmarksFile.value = null;
            this.xmf = 0;
            break;
          case "xiimarksFile": this.xiimarksFile = null;
            this.$refs.xiimarksFile.value = null;
            this.xiimf = 0;
            break;
          case "adharPhoto": this.adharPhoto = null;
            this.$refs.adharPhoto.value = null;
            this.adharF = 0;
            break;
          default: return;

        }
      },
      // This function will be called every time you add a file
      uploadFieldChange(e, arg) {


        switch (arg) {
          case "photo": this.photo = e.target.files[0];

            const reader = new FileReader()
            reader.addEventListener('load', () => {
            this.photoURL = reader.result;
              this.photoURL = reader.readAsDataURL(this.photoURL)

            })
            //  var eventPhoto = e;
            this.pf = 1;
            // console.log(this.photo)
            break;
          case "xmarksFile": this.xmarksFile = e.target.files[0];
            // console.log(this.xmarksFile)
            this.xmf = 1;
            break;
          case "xiimarksFile": this.xiimarksFile = e.target.files[0];
            this.xiimf = 1;
            break;

          case "adharPhoto": this.adharPhoto = e.target.files[0];

            this.adharF = 1;
            break;
          default: return;
        }
      },
      submit() {

        //    this.form.attachments[0] = this.attachments[0];
        
        this.$emit('to1push', this.form);
        // console.log(this.data)
        this.form.photo = this.photo;
        this.form.xmarksFile = this.xmarksFile;
        this.form.xiimarksFile = this.xmarksFile;
        this.form.adharPhoto = this.adharPhoto;
        this.form.adharNO = this.adharNO;
        this.prepareFields();
        console.log('herll')
        axios.post('http://jsonplaceholder.typicode.com/posts', this.data)
        .then(response => { console.log(response) })
        .catch()
        





        // console.log(this.form)
      },
      downloadpdf() {
        
        console.log(this.form.total)
        var okay = pdfMake.createPdf(this.dd)
        okay.open()
        this.form.total =0;
        // okay.download('Report.pdf')
      },

      resetData() {
        this.data = new FormData(); // Reset it completely
        this.attachments = [];
      },
      start() {
        // console.log('Starting File Management Component');
      },
    },
    created() {
      this.start();
    }
  }

</script>

<style scoped>
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


  @media screen and (max-width: 800px) {

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