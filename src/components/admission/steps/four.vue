
<template>
    <div >
        <div class="arrow-steps clearfix" style="margin: 0 0 5% 0; width: 100%;">
            <div class="step"> <span> Step 1</span> </div>
            <div class="step"> <span>Step 2</span> </div>
            <div class="step"> <span> Step 3</span> </div>
            <div class="step current"> <span>Step 4</span> </div>
        </div>
        <div style="border:1px solid black">
            <label>Attachments</label>
            <br><br>
             <div>
                 <v-btn raised style="background:#666; color: white; " @click="onPickFile">UPLOAD</v-btn>
                <input type="file" id="attachments" ref="fileInput" style="display: none;" @change="uploadFieldChange">
                <hr>
                <div>
                    <div v-for="(attachment, index) in attachments"> 
                        <span >{{ (index+1)+':-'+attachment.name + ' (' + Number((attachment.size / 1024 / 1024).toFixed(1)) + 'MB)'}}</span> 
                        <span  @click="removeAttachment(attachment)"><button>Remove</button></span>
                    </div>
                    <v-btn @click="submit">SUBMIT</v-btn>
                </div>
             </div>
             <br><br>
            <!-- <v-btn style="background:#455553; color: white;" raised @click="onPickFile">UPLOAD</v-btn>
            <input type="file" style="display: none;" ref="fileInput" accept="image/*" @change="onFilePicked">
            <img :src="imageURL" height="150"> -->
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        props: [
            'settings'
        ],
        data() {
            return {
                // You can store all your files here
                imageURL: "",
                image: null,
                attachments: [],
                // Each file will need to be sent as FormData element
                data: new FormData(),
                // errors: {
                // },
                percentCompleted: 0, // You can store upload progress 0-100 in value, and show it on the screen
            }
        },
        watch: {
        },
        computed: {
            form (){
                return this.$store.state.form;
            }
        },
        methods: {


          onPickFile(){
         
            this.$refs.fileInput.click()

          },



            getAttachmentSize() {
                
                this.upload_size = 0; // Reset to beginningƒ
                this.attachments.map((item) => { this.upload_size += parseInt(item.size); });
                
                this.upload_size = Number((this.upload_size).toFixed(1));
                this.$forceUpdate();
                console.log(this.attachments)
            },
            prepareFields() {
                
                if (this.attachments.length > 0) {
                    for (var i = 0; i < this.attachments.length; i++) {
                        let attachment = this.attachments[i];
                        this.data.append('attachments[]', attachment);
                    }
                                    console.log(this.attachments)

                }
            },
            removeAttachment(attachment) {
                
                this.attachments.splice(this.attachments.indexOf(attachment), 1);
                
                this.getAttachmentSize();
                                console.log(this.attachments)

            },
            // This function will be called every time you add a file
            uploadFieldChange(e) {
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                for (var i = files.length - 1; i >= 0; i--) {
                    this.attachments.push(files[i]);
                }
                                console.log(this.attachments)

                // Reset the form to avoid copying these files multiple times into this.attachments
                document.getElementById("attachments").value = [];
            },
            submit() {
                
            //    this.form.attachments[0] = this.attachments[0];
               console.log(this.form)
                // this.prepareFields();
                //  console.log(this.data)
                // var config = {
                //     headers: { 'Content-Type': 'multipart/form-data' } ,
                //     onUploadProgress: function(progressEvent) {
                //         this.percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
                //         this.$forceUpdate();
                //     }.bind(this)
                // };
                // // Make HTTP request to store announcement
                // axios.post('http://aadii.104', this.data, config)
                // .then(function (response) {
                //     console.log(response);
                //     if (response.data.success) {
                //         console.log('Successfull Upload');
                //         // toastr.success('Files Uploaded!', 'Success');
                //         this.resetData();
                //     } else {
                //         console.log('Unsuccessful Upload');
                //         this.errors = response.data.errors;
                //     }
                // }.bind(this)) // Make sure we bind Vue Component object to this funtion so we get a handle of it in order to call its other methods
                // .catch(function (error) {
                //     console.log(error);
                // });
            },
            // We want to clear the FormData object on every upload so we can re-calculate new files again.
            // Keep in mind that we can delete files as well so in the future we will need to keep track of that as well
            resetData() {
                this.data = new FormData(); // Reset it completely
                this.attachments = [];
            },
            start() {
                console.log('Starting File Management Component');
            },
        },
        created() {
            this.start();
        }
    }
</script>

<style scoped>
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