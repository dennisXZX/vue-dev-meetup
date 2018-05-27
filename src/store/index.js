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
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({ commit }, payload) {
      const meetup = {
        id: 'test',
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date
      }

      // store the meetup in firebase
      commit('createMeetup', meetup)
    }
  }
})
