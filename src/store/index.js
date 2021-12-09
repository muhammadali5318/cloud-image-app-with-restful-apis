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
        signUpSnackbar: false


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
        },
        SET_SIGNUP_SNACKBAR(state, signUpSnackbar) {
            state.signUpSnackbar = signUpSnackbar;
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

        // ***************** Axios with headers **************************
        // axios.post("http://192.168.88.37:8080/user/emailConfirmation/haseeb1111@gmail.com/d41d8cd98f00b204e9800998ecf8427e", payload)
        // .then(function(response) {
        //     console.log(response);
        //     commit("SET_SIGNIN_DATA", response.data);
        // })
        // .catch(function(error) {
        //     console.log(error);
        // });

        // ***************** ****************** **************************


        // ************Update Profile *****************
        postUpdateProfileData({ commit }, payload) {
            console.log(commit);
            console.log(payload);

            console.log(JSON.parse(localStorage.getItem("currentUserToken")));



            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + localStorage.getItem("currentUserToken")
            }
            console.log(headers);
            // axios.post("", payload, {
            //         headers: headers
            //     })
            //     .then((response) => {
            //         console.log(response.data);
            //     })
            //     .catch((error) => {
            //         console.log(error);
            //     })


        },
        // ************Sign In *****************
        postSignInData({ commit }, payload) {
            console.log(commit);
            console.log(payload);

            // call sign in api here
            axios.get("http://192.168.88.37:8080/user/emailConfirmation/haseeb1111@gmail.com/d41d8cd98f00b204e9800998ecf8427e")
                .then(function(response) {

                    localStorage.setItem("currentUser", JSON.stringify(response.data.data))
                    localStorage.setItem("currentUserToken", JSON.stringify(response.data.data.Authentication))

                    // console.log(response.data.data.Authentication);
                    // commit("SET_SIGNIN_DATA", response.data);
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
            axios.post("http://192.168.88.37:8080/user/register", payload)
                .then(function(response) {
                    console.log(response);
                    commit("SET_SIGNUP_DATA", response.data);
                    commit("SET_SIGNUP_SNACKBAR", true);
                })
                .catch(function(error) {
                    console.log(error.response.data);
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
        },
        getSignUpSnackbarStatus(state) {
            return state.signUpSnackbar;
        }
    },
    modules: {}
})