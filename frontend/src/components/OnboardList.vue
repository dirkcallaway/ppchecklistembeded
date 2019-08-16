<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="blue" dark>

          <v-toolbar-title>Onboarding Checklist</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-progress-circular :value="remainingValue"></v-progress-circular>

          <v-spacer></v-spacer>

          <!-- <v-btn icon v-on:click="minimizeChecklist">
            <v-icon v-if="isOpen">highlight_off</v-icon>
            <v-icon v-else>minimize</v-icon>
          </v-btn> -->
          
        </v-toolbar>
        
        <v-container v-if="isOpen">
          <v-list>
            <v-list-tile
              v-for="todo in todos"
              :key="todo.name"
              avatar
            >
              <v-list-tile-action>
                <v-icon :size="30" :color="green" v-if="todo.value === 'true'">done</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                  <v-list-tile-title class="checklistName" v-text="todo.name" :class="{ 'checkedOff': todo.value === 'true' }"></v-list-tile-title>
              </v-list-tile-content>

              <v-list-item-avatar><v-btn :id="todo.propertyName" v-on:click="completeTask($event)" v-if="todo.value != 'true'" small ripple :color="blue">Complete</v-btn></v-list-item-avatar>

            </v-list-tile>
          </v-list>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  const axios = require('axios');

  
  export default {
    data () {
      return {
        todos: null,
        info: null,
        isOpen: false,
        green: "#008000",
        blue: "blue",
        remainingValue: 0,
        checkbox1: null,
        testMessage: 'TEST'
      }
    },
    created() {
      window.addEventListener('message', this.receiveMessage)
    },
    mounted() {
      this.$root.$on('loadChecklist', () => {
        axios.get('/onboard')
        .then((checklist) => {
          this.todos = checklist.data
          this.isOpen = true
        })
      })
    },
    methods: {
      receiveMessage(e) {
        if(e.origin != "https://dirkcallaway.github.io/embeddedHost/#") {
          return
        }
          this.testMessage = e.data
          this.loadChecklist(e.data)
      },
      loadChecklist(data) {
        axios.get('/onboard/', {
          params: {
            userVID : data
          }
        })
        .then((checklist) => {
        this.todos = checklist.data
        this.isOpen = true
        })
      },
      minimizeChecklist() {
        if(this.isOpen) {
          this.isOpen = false
        } else {
          this.isOpen = true
        }
      },
      completeTask(event) {
        const buttonID = event.currentTarget.id
        axios.get('/update', {
          params: {
            "updateProperty" : buttonID,
            "value" : true
            }
        })
        .then(
          this.loadChecklist()
        )
      }
    }
  }
</script>