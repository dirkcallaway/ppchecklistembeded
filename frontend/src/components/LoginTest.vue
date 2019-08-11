<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field v-model="name" prepend-icon="person" name="name" label="Name" type="text"></v-text-field>
                  <v-text-field v-model="teacher_id" id="teacher_id" prepend-icon="lock" name="teacher_id" label="Teacher ID" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn v-on:click="login" color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
    const axios = require('axios');

  export default {
    data: () => ({
      drawer: null,
      name: null,
      teacher_id: null,
      userVID: null
    }),
    methods : {
        login : function() {
            axios.get('/user', {
                params: {
                    teacher_id : this.teacher_id,
                    name: this.name
                }
            })
            .then(user => {
                this.teacher_id = "",
                this.name = "",
                this.userVID = user.data.userVID;
                this.$root.$emit('loadChecklist')
            })

        }
    },
    props: {
      source: String
    }
  }
</script>