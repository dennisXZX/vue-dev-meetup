<template>
  <v-container>
    <!-- action buttons -->
    <v-layout row wrap class="mb-3">
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/meetups" class="primary">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/meetups/new" class="primary">Organize Meetups</v-btn>
      </v-flex>
    </v-layout>

    <!-- carousel -->
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id">
            <div class="title">
              {{ meetup.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="mt-3">
      <v-flex xs12 class="text-xs-center">
        <p>Join our awesome meetups!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        meetups: [
          {
            id: '0',
            title: 'meetup in Brisbane 1',
            imageUrl: 'https://i2.wp.com/wearetravelgirls.com/wp-content/uploads/2016/07/surfers-paradise-brisbane-1.jpg?resize=1080%2C718&ssl=1'
          },
          {
            id: '1',
            title: 'meetup in Brisbane 2',
            imageUrl: 'https://www.australia.com/content/australia/en_ca/places/brisbane-and-surrounds/guide-to-brisbane/jcr:content/image.adapt.1200.HIGH.jpg'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    left: calc(100% / 2 - 120px);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
</style>
