import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        signUpData: "",
        dropZoneImages: [],
        imageIndex: ""
    },
    mutations: {
        SET_SIGNUP_DATA(state, signUpData) {
            state.signUpData = signUpData;
        },
        SET_DROPZONE_IMAGES(state, dropZoneImages) {
            state.dropZoneImages.push(dropZoneImages);
        },
        SET_IMAGE_INDEX(state, imageIndex) {
            state.imageIndex = imageIndex;
        }
    },
    actions: {
        postSignUpData({ commit }, payload) {
            console.log(commit);
            console.log(payload);
        },
        dropZoneImages({ commit }, payload) {
            console.log(payload);
            commit("SET_DROPZONE_IMAGES", payload)
        },
        fetchImageIndex({ commit }, payload) {
            commit("SET_IMAGE_INDEX", payload)
        }
    },
    getters: {
        getDropZoneImages(state) {
            return state.dropZoneImages;
        },
        getImageIndex(state) {
            return state.imageIndex;
        }
    },
    modules: {}
})