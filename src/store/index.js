import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        id: 'meetup0',
        title: 'meetup in Brisbane 1',
        date: new Date(),
        location: 'New York',
        description: 'This is a good meetup!',
        imageUrl: 'https://i2.wp.com/wearetravelgirls.com/wp-content/uploads/2016/07/surfers-paradise-brisbane-1.jpg?resize=1080%2C718&ssl=1'
      },
      {
        id: 'meetup1',
        title: 'meetup in Brisbane 2',
        date: new Date(),
        location: 'Brisbane',
        description: 'This is a good meetup!',
        imageUrl: 'https://www.australia.com/content/australia/en_ca/places/brisbane-and-surrounds/guide-to-brisbane/jcr:content/image.adapt.1200.HIGH.jpg'
      }
    ],
    user: {
      id: 'user0',
      registeredMeetups: ['meetup0']
    }
  },
  getters: {
    // return a sorted meetup list
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    // return the first 5 meetups from the list
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    // load a specific meetup based on the id
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  },
  mutations: {
    createMeetup (state, meetupObj) {
      state.loadedMeetups.push(meetupObj)
    }
  },
  actions: {
    createMeetup ({ commit }, meetupData) {
      const meetup = {
        id: 'test',
        title: meetupData.title,
        location: meetupData.location,
        imageUrl: meetupData.imageUrl,
        description: meetupData.description,
        date: meetupData.date
      }

      // store the meetup in firebase
      commit('createMeetup', meetup)
    }
  }
})
