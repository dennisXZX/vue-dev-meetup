<template>
  <v-container>

    <!-- header -->
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="primary--text">Create a new meetup</h1>
      </v-flex>
    </v-layout>

    <!-- create meetup form -->
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateMeetup">

          <!-- title -->
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="title"
                label="Title"
                id="title"
                v-model="title"
                required>
              </v-text-field>
            </v-flex>
          </v-layout>

          <!-- location -->
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="location"
                label="Location"
                id="location"
                v-model="location"
                required>
              </v-text-field>
            </v-flex>
          </v-layout>

          <!-- image URL -->
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="imageUrl"
                label="Image URL"
                id="image-url"
                v-model="imageUrl"
                required>
              </v-text-field>
            </v-flex>
          </v-layout>

          <!-- image preview -->
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <img :src="imageUrl" height="180">
            </v-flex>
          </v-layout>

          <!-- description -->
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="description"
                label="Description"
                id="description"
                v-model="description"
                multi-line
                required>
              </v-text-field>
            </v-flex>
          </v-layout>

          <!-- date & time picker -->
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <h3>Choose a Date & Time</h3>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 class="text-xs-center">
              <v-date-picker v-model="date"></v-date-picker>
              <v-time-picker v-model="time"></v-time-picker>
            </v-flex>
          </v-layout>

          <!-- create meetup button -->
          <v-layout row mt-3 mb-3>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn
                type="submit"
                class="primary"
                :disabled="!formIsValid">Create Meetup</v-btn>
            </v-flex>
          </v-layout>

        </form>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        location: '',
        imageUrl: '',
        description: '',
        date: '',
        time: new Date()
      }
    },
    computed: {
      formIsValid () {
        return this.title !== '' &&
               this.location !== '' &&
               this.imageUrl !== '' &&
               this.description !== ''
      },
      submittableDateTime () {
        let date = ''

        // calculate the correct date and time
        if (typeof this.time === 'string') {
          date = `${this.date}T${this.time}:00Z`
        } else {
          date = `${this.date}T00:00:00Z`
        }

        return new Date(date)
      }
    },
    methods: {
      onCreateMeetup () {
        // cannot submit if the form is invalid
        if (!this.formIsValid) {
          return
        }

        // create a meetup object
        const meetupData = {
          title: this.title,
          location: this.location,
          imageUrl: this.imageUrl,
          description: this.description,
          date: this.submittableDateTime
        }

        // dispatch a createMeetup action
        this.$store.dispatch('createMeetup', meetupData)

        // direct to meetup list page once the form is successfully submitted
        this.$router.push('/meetups')
      }
    }
  }
</script>

<style>
  .date-picker-title {
    padding-bottom: 14px !important;
  }

  .date-picker-table {
    height: 246px;
  }
</style>
