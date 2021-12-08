import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        dropZoneImages: [],
        imageIndex: "",
        // it will store signin and sign up form data
        signInData: "",
        signUpData: "",


    },
    mutations: {

        SET_DROPZONE_IMAGES(state, dropZoneImages) {
            state.dropZoneImages.push(dropZoneImages);
        },
        SET_IMAGE_INDEX(state, imageIndex) {
            state.imageIndex = imageIndex;
        },
        SET_SIGNIN_DATA(state, signInData) {
            state.signInData = signInData;
        },
        SET_SIGNUP_DATA(state, signUpData) {
            state.signUpData = signUpData;
        }
    },
    actions: {

        dropZoneImages({ commit }, payload) {
            console.log(payload);
            commit("SET_DROPZONE_IMAGES", payload)
        },
        fetchImageIndex({ commit }, payload) {
            commit("SET_IMAGE_INDEX", payload)
        },
        // ************Sign In *****************
        postSignInData({ commit }, payload) {
            console.log(commit);
            console.log(payload);

            // call sign in api here
            axios.post("https://jsonplaceholder.typicode.com/posts", payload)
                .then(function(response) {
                    console.log(response);
                    commit("SET_SIGNIN_DATA", response.data);
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        // ************Sign Up *****************
        postSignUpData({ commit }, payload) {
            console.log(commit);
            console.log(payload);

            // call sign up api here
            axios.post("https://jsonplaceholder.typicode.com/posts", payload)
                .then(function(response) {
                    console.log(response);
                    commit("SET_SIGNUP_DATA", response.data);
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        // ************Forgot Password api call *****************
        postForgotPasswordData({ commit }, payload) {
            console.log(commit);
            console.log(payload);

            // call sign up api here
            // axios.post("https://jsonplaceholder.typicode.com/posts", payload)
            //     .then(function(response) {
            //         console.log(response);
            //         // commit("SET_SIGNUP_DATA", response.data);
            //     })
            //     .catch(function(error) {
            //         console.log(error);
            //     });
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