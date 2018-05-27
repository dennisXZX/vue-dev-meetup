<template>
  <v-container>

    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h2 class="primary--text">Create a new meetup</h2>
      </v-flex>
    </v-layout>

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

          <!-- create meetup button -->
          <v-layout row>
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
        description: ''
      }
    },
    computed: {
      formIsValid () {
        return this.title !== '' &&
               this.location !== '' &&
               this.imageUrl !== '' &&
               this.description !== ''
      }
    },
    methods: {
      onCreateMeetup () {
        // does not submit if the form is invalid
        if (!this.formIsValid) {
          return
        }

        const meetupData = {
          title: this.title,
          location: this.location,
          imageUrl: this.imageUrl,
          description: this.description,
          data: new Date()
        }

        // dispatch a createMeetup action
        this.$store.dispatch('createMeetup', meetupData)

        // direct to meetups page once the form is submitted
        this.$router.push('/meetups')
      }
    }
  }
</script>

<style scoped>

</style>
