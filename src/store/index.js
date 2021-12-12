import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from '../router'

// Vue.use(VueRouter);
Vue.use(VueAxios, axios)
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentUserToken: JSON.parse(localStorage.getItem("currentUserToken")),
        apiHeaders: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("currentUserToken")),
        },
        dropZoneImages: [],
        imageIndex: "",
        signInData: "",
        Snackbar: false,
        snackbarErrorMsg: "",
        snackbarColor: "",
        loadingStatus: false,
        signUpData: "",
        errorMsg: "",
        baseUrl: "http://192.168.88.37:8080"

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
        SET_SNACKBAR(state, Snackbar) {
            state.Snackbar = Snackbar;
        },
        SET_SNACKBAR_COLOR(state, snackbarColor) {
            state.snackbarColor = snackbarColor;
        },
        SET_SNACKBARMSG_ERRORMSG(state, snackbarErrorMsg) {
            state.snackbarErrorMsg = snackbarErrorMsg;
        },
        SET_LOADING_STATUS(state, loadingStatus) {
            state.loadingStatus = loadingStatus;
        }

    },
    actions: {
        updateSnackBarStatus({ commit }, payload) {
            commit("SET_SNACKBAR", payload);
        },
        dropZoneImages({ commit }, payload) {
            // console.log(payload);
            commit("SET_DROPZONE_IMAGES", payload)
        },
        fetchImageIndex({ commit }, payload) {
            commit("SET_IMAGE_INDEX", payload)
        },

        // ************Send user Images *****************
        postImagesData({ commit, state }, payload) {
            console.log(commit);
            console.log(state);
            console.log(payload);

            // const currentUserToken = JSON.parse(localStorage.getItem("currentUserToken"));
            // console.log(currentUserToken);

            // const currentUserId = JSON.parse(localStorage.getItem("currentUser")).id;
            // console.log(currentUserId);

            commit("SET_LOADING_STATUS", true);

            // axios.post(`${state.baseUrl}/post/SaveImage`, payload, {
            //         headers: state.apiHeaders
            //     })
            //     .then((response) => {
            //         console.log(response.data);
            //         // localStorage.setItem("currentUser", JSON.stringify(response.data.data.User_data))
            //         // commit("SET_SNACKBAR", true);
            //         // commit("SET_SNACKBAR_COLOR", "green");
            //         // commit("SET_SNACKBARMSG_ERRORMSG", response.data.message)
            //         // commit("SET_LOADING_STATUS", false);

            //     })
            //     .catch((error) => {
            //         console.log(error.response);
            //         // commit("SET_SNACKBAR", true);
            //         // commit("SET_SNACKBAR_COLOR", "red");
            //         // commit("SET_SNACKBARMSG_ERRORMSG", error.response.data.message)

            //     })

        },

        // ************Update Profile *****************
        postUpdateProfileData({ commit, state }, payload) {
            console.log(commit);
            console.log("user data");
            console.log(payload);

            const currentUserToken = JSON.parse(localStorage.getItem("currentUserToken"));
            console.log(currentUserToken);

            const currentUserId = JSON.parse(localStorage.getItem("currentUser")).id;
            console.log(currentUserId);

            commit("SET_LOADING_STATUS", true);

            axios.put(`${state.baseUrl}/user/updateUser/${currentUserId}`, payload, {
                    headers: state.apiHeaders
                })
                .then((response) => {
                    console.log(response.data);
                    localStorage.setItem("currentUser", JSON.stringify(response.data.data.User_data))
                    commit("SET_SNACKBAR", true);
                    commit("SET_SNACKBAR_COLOR", "green");
                    commit("SET_SNACKBARMSG_ERRORMSG", response.data.message)
                    commit("SET_LOADING_STATUS", false);

                })
                .catch((error) => {
                    console.log(error.response.data.message);
                    commit("SET_SNACKBAR", true);
                    commit("SET_SNACKBAR_COLOR", "red");
                    commit("SET_SNACKBARMSG_ERRORMSG", error.response.data.message)

                })


        },
        // ************Sign In *****************
        postSignInData({ commit, state }, payload) {
            console.log(commit);
            console.log(payload);
            // console.log(typeof state.baseUrl);

            // axios.post("baseUrl/user/UserLogin", payload)
            commit("SET_LOADING_STATUS", true);
            axios.post(`${state.baseUrl}/user/UserLogin`, payload)
                .then((response) => {
                    console.log(response.data.message);

                    localStorage.setItem("currentUser", JSON.stringify(response.data.data.User_data))
                    localStorage.setItem("currentUserToken", JSON.stringify(response.data.data.Authentication))

                    commit("SET_SNACKBAR", true)
                    commit("SET_SNACKBAR_COLOR", "green");
                    commit("SET_SNACKBARMSG_ERRORMSG", response.data.message)
                    commit("SET_LOADING_STATUS", true);
                    router.push({ name: "Home" })
                })
                .catch((error) => {
                    console.log(error.response);
                    // console.log(error.response);
                    commit("SET_SNACKBAR", true);
                    commit("SET_SNACKBAR_COLOR", "red");
                    commit("SET_SNACKBARMSG_ERRORMSG", error.response.data.message)
                })

        },
        // ************Sign Up *****************
        postSignUpData({ commit, state }, payload) {
            console.log(commit);
            console.log(payload);

            commit("SET_LOADING_STATUS", true);
            // call sign up api here
            axios.post(`${state.baseUrl}/user/register`, payload)
                .then(function(response) {
                    console.log(response);
                    commit("SET_SIGNUP_DATA", response.data);
                    commit("SET_SNACKBAR", true);
                    commit("SET_LOADING_STATUS", false);
                })
                .catch(function(error) {
                    console.log(error.response);
                    console.log(error.response.data.error.email[0]);
                    commit("SET_SNACKBAR", true);
                    commit("SET_SNACKBARMSG_ERRORMSG", error.response.data.error.email[0]);
                });
        },
        // ************Forgot Password api call *****************
        postForgotPasswordData({ commit, state }, payload) {


            console.log("api Token");
            console.log(state.apiHeaders);
            // ***************************************************
            console.log(commit);
            console.log(payload);

            commit("SET_LOADING_STATUS", true);
            // call sign up api here
            axios.post(`${state.baseUrl}/user/forgotPassword`, payload)
                .then(function(response) {
                    console.log(response);
                    commit("SET_LOADING_STATUS", false);
                })
                .catch(function(error) {
                    console.log(error.response);
                    // commit("SET_SNACKBAR", true);
                    // commit("SET_SNACKBARMSG_ERRORMSG", error.response.status);
                });
        },
        // ************Reset Password api call *****************
        postResetPasswordData({ commit, state }, payload) {
            console.log(commit);
            console.log(payload);

            const currentUserToken = JSON.parse(localStorage.getItem("currentUserToken"));
            console.log(currentUserToken);

            const currentUserId = JSON.parse(localStorage.getItem("currentUser")).id;
            console.log(currentUserId);

            commit("SET_LOADING_STATUS", true);
            const headers = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + currentUserToken,
                }
                // call sign up api here
            axios.put(`${state.baseUrl}/user/updateUserPassword/${currentUserId}`, payload, {
                    headers: headers
                })
                .then(function(response) {
                    console.log(response);
                    commit("SET_SNACKBAR", true);
                    commit("SET_SNACKBAR_COLOR", "green");
                    commit("SET_SNACKBARMSG_ERRORMSG", response.data.message)
                    commit("SET_LOADING_STATUS", false);
                })
                .catch(function(error) {
                    // console.log(error.response.data.message.old_password[0]);
                    commit("SET_SNACKBAR", true);
                    commit("SET_SNACKBAR_COLOR", "red");
                    commit("SET_SNACKBARMSG_ERRORMSG", error.response.data.message.old_password[0])
                });
        }
    },
    getters: {
        getDropZoneImages(state) {
            return state.dropZoneImages;
        },
        getImageIndex(state) {
            return state.imageIndex;
        },
        getSnackbarStatus(state) {
            return state.Snackbar;
        },
        getSnackbarErrorMsg(state) {
            return state.snackbarErrorMsg;
        },
        getSnackbarColor(state) {
            return state.snackbarColor;
        },
        getTesting(state) {
            return state.test;
        },
        getLoadingStatus(state) {
            return state.loadingStatus;
        }
    },
    modules: {}
})