import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        id: '0',
        title: 'meetup in Brisbane 1',
        date: '2017-07-17',
        imageUrl: 'https://i2.wp.com/wearetravelgirls.com/wp-content/uploads/2016/07/surfers-paradise-brisbane-1.jpg?resize=1080%2C718&ssl=1'
      },
      {
        id: '1',
        title: 'meetup in Brisbane 2',
        date: '2017-09-17',
        imageUrl: 'https://www.australia.com/content/australia/en_ca/places/brisbane-and-surrounds/guide-to-brisbane/jcr:content/image.adapt.1200.HIGH.jpg'
      }
    ],
    user: {
      id: '0',
      registeredMeetups: ['meetup0']
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  },
  mutations: {
  },
  actions: {
  }
})
