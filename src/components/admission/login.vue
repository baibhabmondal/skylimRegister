<template>
  <v-app>
    <div class="main">
      <v-toolbar>
        <v-avatar class="teal">
          <span class="white--text headline">S</span>
        </v-avatar>
        <v-toolbar-title>UNIVERSITY</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat>Documentation</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-container fluid fill-height class="outer_container">
        <v-layout row wrap class="text-lg-center">
          <v-flex lg6 offset-lg3 xs12 sm12>

            <v-card>
              <v-layout row wrap>



                <v-flex lg5 xs12 sm5 style="background-color:#F7F7C9">
                  <!-- left-side -->

                  <div class="student_name text-xs-left">
                    <i class="material-icons">account_circle</i>
                    <span id="txt1">STUDENT</span>
                  </div>
                  <div class="login_area text-xs-left">
                    <span>Log in</span>
                  </div>
                  <div class="reset_password text-xs-left">
                    <a href="#"> Reset your Account Password</a>
                  </div>
                </v-flex>
                <v-flex lg7 xs12 sm7 style="background-color:#CEFAFA">
                  <!-- right side -->
                  <div>
                    <v-card-text class="scard">
                      <v-form v-model="validx" method="post" v-on:submit.prevent="getFormValues">

                        <div class="user_login text-xs-left">
                          <v-text-field prepend-icon="person" name="login" label="User-Email" type="email" v-model="email" :rules="emailRules" class="useremail"></v-text-field>
                          <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password" v-model="password" :rules="passwordRules"></v-text-field>
                        </div>

                        <div class="login_button">
                          <v-btn block class="button" type="submit" @click="submit" :disabled="!valid">Log in</v-btn>
                        </div>

                      </v-form>

                    </v-card-text>


                  </div>

                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </v-app>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        email: '',
        password: '',
        validx: true,
        emailRules: [v => !!v || '*User-Email is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'User-Email must be valid'
        ],
        passwordRules: [v => !!v || '*Password is required'],
      }
    },
    methods: {
      submit() {

        console.log('debug')
      },
      getFormValues(submitEvent) {
        axios.post(`http://jsonplaceholder.typicode.com/posts`, {
            body: this.email,
            password: this.password
          })
          .then(response => {
            console.log(response)
          })
          .catch(e => {
            this.emailRules.push(e),
              this.passwordRules.push(e)
          })

      }

    },
    computed: {
      valid: function () {
        return this.email != '' && this.password != ''
      }
    }
  }

</script>
<style scoped>
  .outer_container {
    margin-top: 80px;
  }

  .student_name {
    font-family: Roboto;
    font-size: 28px;
    font-weight: 100;
    padding: 25px;
  }

  .material-icons {
    vertical-align: text-bottom;
    font-size: 36px !important;
  }

  .login_area {
    padding: 10px 25px 15px 25px;
    font-family: Roboto;
    font-size: 33px;
    font-weight: 100;
  }

  .reset_password {
    font-family: Roboto;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 1px;
    padding: 75px 25px 25px;
  }

  a {
    text-decoration: none;
  }

  .user_login {
    font-family: roboto;
    font-weight: 400;
    font-size: 15px;
    margin-top: 35px;
  }

  .login_button {
    margin-top: 30px;
  }

  .button {
    width: 100%;
    height: 68px;
    border-top: 1px solid #C5C4C4;
    font-size: 25px;
    font-family: roboto;
    font-weight: 400;
    background: #D1F5F1;
    color: #3A3636;
  }

  @media screen and (max-width: 480px) {
    .outer_container {
      margin-top: 40px;
    }
    .login_area {
      padding: 5px 25px 15px 25px;
    }
    .reset_password {
      padding: 10px 25px 25px;
    }
  }

</style>
