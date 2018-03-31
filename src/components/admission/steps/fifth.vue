<template>
    <div class="main">
        <div class="arrow-steps clearfix" style="margin: 0 0 5% 0; width: 100%;">
            <div class="step "> <span> Step 1</span> </div>
            <div class="step"> <span>Step 2</span> </div>
            <div class="step"> <span> Step 3</span> </div>
            <div class="step current"> <span>Step 4</span> </div>
            <div class="step"> <span> Step 5</span> </div>
        </div>
        <form @submit.prevent="submit1" id="jay">

            <h2 class="page-heading">FEE STRUCTURE</h2>
            <!-- 10th board  -->


            <!-- details of your 10 board -->

            <v-layout row>
                <v-flex xs4 lg5 pt-4 text-xs-right>
                    <b>PROGRAMME:</b>
                </v-flex>
            <v-flex xs4 lg4 pt-3>
                <div class="select-field">
                    <select v-model="programme" name="programme" v-validate="'required'">
                        <option  value="" hidden>programme</option>
                        <option  v-for="programme in programmes"><span v-if='programme.need'>{{programme.programme}}</span></option>
                    </select>
                </div>

                <span v-show="errors.has('discipline')" style="color:red;">{{ errors.first('discipline') }}</span>
            </v-flex>
            </v-layout>
            <!-- name of the board  -->
            <v-layout row>
                <v-flex xs4 lg5 pt-4 text-xs-right>
                    <b>DISCIPLINE:</b>
                </v-flex>
                <v-flex xs4 lg4 pt-3>
                    <div class="select-field">
                        <select v-model="discipline" name="discipline" v-validate="'required'">
                        <option  value="" hidden>discipline</option>
                        <option  v-for="discipline in disciplines"><span v-if='discipline.need'>{{discipline.course}}</span></option>
                    </select>
                    </div>

                    <span v-show="errors.has('discipline')" style="color:red;">{{ errors.first('discipline') }}</span>
                </v-flex>
            </v-layout>
            <!-- marks scored in 10    -->

            <!-- year of passing 10         -->
            <v-layout row wrap>
                <v-flex xs4 lg5 pt-4 text-xs-right>
                    <b>FEE TYPE :</b>
                </v-flex>
                <v-flex xs4 lg4 pt-3>
                    <div class="select-field">
                        <select v-model="feeType" name="feeType" v-validate="'required'">
                        <option  value="" hidden>SEAT TYPE</option>
                        <option  v-for="item in feeTypes">{{item.text}}</option>
                    </select>
                    </div>

                    <span v-show="errors.has('feeType')" style="color:red;">{{ errors.first('fees') }}</span>
                </v-flex>
            </v-layout>
            <v-layout row class="mt-3">
                <v-flex offset-lg5 lg2>
                    <label>
            <input type="radio" name="hostel" value="true" v-model="hostel"/>
            <span>Hostel</span>
      </label>
                </v-flex>
                <v-flex lg2>
                    <label>
        <input type="radio" name="hostel"  @change="hostel=!hostel"  />
        <span>Transport</span>
      </label>
                </v-flex>
                <!-- <p>{{ this.hostel }}</p> -->
            </v-layout>
            <div v-show="hostel">
                <v-layout row v-for="(fee,i) in fees" :key="i" v-show="fee.need" v-if="fee.feeTitle != 'TRANSPORT FEES'">
                    <v-flex xs4 lg5 pt-4 text-xs-right>
                        <b> {{ fee.feeTitle }} : </b>
                    </v-flex>
                    <v-flex xs4 lg2>
                        <!-- <strong>Rs. 500000</strong> -->
                        <h3 class="mr-1 mt-1">Rs. {{ fee.amount }} </h3>
                    </v-flex>
                </v-layout>
            </div>
            <div v-show="!hostel">
                <v-layout row v-for="(fee,i) in fees" :key="i" v-show="fee.need" v-if="fee.feeTitle == 'TRANSPORT FEES'">
                    <v-flex xs4 lg5 pt-4 text-xs-right>
                        <b> {{ fee.feeTitle }} : </b>
                        <!-- <span> transport</span> -->
                    </v-flex>
                    <v-flex xs4 lg2>
                        <!-- <strong>Rs. 500000</strong> -->
                        <h3 class="mr-1 mt-1">Rs. {{ fee.amount }} </h3>
                    </v-flex>
                </v-layout>
            </div>



            <v-layout row wrap>
                <v-flex xs4 lg5 pt-4 text-xs-right>
                    <b>FEE PAID :</b>
                </v-flex>
                <v-flex xs4 lg4 pt-3>
                    <div class="select-field">
                        <select v-model="feePaid" name="feePaid" v-validate="'required'">
                        <option  value="" hidden>ONE TIME/INSTALLMENT</option>
                        <option  v-for="item in feePaids">{{item.text}}</option>
                    </select>
                    </div>

                    <span v-show="errors.has('feePaid')" style="color:red;">{{ errors.first('feePaid') }}</span>
                </v-flex>
            </v-layout>

            <v-layout row wrap pt-3 pb-3>
                <v-flex xs4>
                </v-flex>
                <v-flex xs4>
                    <v-btn v-on:click="submit" type="submit" style="background-color:#455553;color:white">CONTINUE</v-btn>
                    <v-btn @click="clear" style="background-color:#455553;color:white">clear</v-btn>
                </v-flex>
            </v-layout>

        </form>

    </div>
</template>
<script>
    export default {
        // props: ['content1', 'hideFields'],
        $_veeValidate: {
            validator: 'new'
        },
        computed: {
            form() {
                return this.$store.state.form;
            },
            feeTypes() {
                return this.$store.state.feeTypes;
            },
            feePaids() {
                return this.$store.state.feePaids;
            },
            // fees(){
            //     return this.$store.state.fees;
            // }
        },
        methods: {
            submit() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        if (this.errors.any() == false) {

                            this.$emit('form1validity', 6);

                        }
                        return;
                    }

                });
                this.form.programme = this.programme;
                this.form.discipline = this.discipline;
                this.form.feeType = this.feeType;
                this.form.feePaid = this.feePaid;

                if (this.hostel) {
                    for (var i = 0; i < this.fees.length; i++) {
                        if (this.fees[i].key == "hostelFees" && this.fees[i].need == true) {
                            this.form.hostelFees = this.fees[i].amount;
                            // console.log(this.fees[i].amount)
                            this.total += this.fees[i].amount;
                            // console.log(this.form.total + "   ")
                            // console.log(this.form.hostelFees)
                        }
                        if (this.fees[i].key == "messFees" && this.fees[i].need == true) {
                            this.form.messFees = this.fees[i].amount;
                            this.total += this.fees[i].amount;
                        }
                        if (this.fees[i].key == "laundryFees" && this.fees[i].need == true) {
                            this.form.laundryFees = this.fees[i].amount;
                            this.total += this.fees[i].amount;
                        }

                    }

                }
                else {
                    for (var i = 0; i < this.fees.length; i++)
                        if (this.fees[i].key == "transportFees" && this.fees[i].need == true) {
                            this.form.transportFees = this.fees[i].amount;
                            this.total += this.fees[i].amount;
                        }


                }
                this.form.total = this.total;
                this.total = 0;
                console.log(this.form.total + " TOTAL")
            },
            res: function () {

            },
            submit1() {
                this.$validator.validateAll();
            },
            clear() {
                this.programme = "";
                this.discipline = "";
                this.feeType = "";
                this.$validator.reset()
            },
        },
        data() {
            return {

                hostel: false,
                // transport: false,
                programme: "",
                discipline: "",
                feeType: "",
                total: 0,

                feePaid: "",
                fees: [
                    {
                        feeTitle: "HOSTEL FEES",
                        need: true,
                        amount: 9000000,
                        key: "hostelFees"
                    },
                    {
                        feeTitle: "MESS FEES",
                        need: true,
                        amount: 200000,
                        key: "messFees"

                    },
                    {
                        feeTitle: "LAUNDRY FEES",
                        need: false,
                        amount: 400000,
                        key: "laundryFees"
                    },
                    {
                        feeTitle: "TRANSPORT FEES",
                        need: true,
                        amount: 600000,
                        key: "transportFees"
                    }
                ],
                programmes: [
                    {
                        need: true,
                        programme: "B.tech",
                    },
                    {
                        need: true,
                        programme: "M.tech",
                    },
                    {
                        need: true,
                        programme: "B.COM",
                    }
                ],
                disciplines: [
                    {
                        need: true,
                        course: "CSE"
                    },
                    {
                        need: true,
                        course: "EEE"
                    },
                    {
                        need: true,
                        course: "ECE"
                    }
                ]

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
        /* border: 1px solid black; */
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

    h3 {
        padding-top: 10%;
        padding-left: 15%;
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

    input {
        border-radius: 4px;
    }


    .select-field {
        display: inline-block;
        width: 100%;
        border-radius: 4px;
        margin: 0px;
        margin-left: 10%;
        padding: 0px;
        padding-left: 5px;
        background-color: #F3EFEF;
        position: relative;
        z-index: 1;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3) inset, 0 1px rgba(255, 255, 255, 0.06);
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
        font-family: 'osbold';
        color: grey;

        position: relative;
        z-index: 3;
    }

    .select-field>select>option {
        padding: 10px;
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