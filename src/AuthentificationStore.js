// AuthentificationStore.js

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  uid: '',
  password: '',
  isAuthenticated: false, 
  authResponse: null, 
  authError: null 
};

const mutations = {
  setUid(state, newUid) {
    state.uid = newUid;
  },

  setPassword(state, newPassword) {
    state.password = newPassword;
  },

  setAuthenticated(state, value) {
    state.isAuthenticated = value;
  },

  setAuthResponse(state, response) {
    state.authResponse = response;
  },

  setAuthError(state, error) {
    state.authError = error;
  }
};

const actions = {
  updateUid({ commit }, newUid) {
    commit('setUid', newUid);
  },

  updatePassword({ commit }, newPassword) {
    commit('setPassword', newPassword);
  },

  makeApiRequest({ state, commit }) {
    const apiUrl = 'http://10.19.2.3:8000/Connexion';

    // Effectuer la requête POST
    return axios.post(apiUrl, { uid: state.uid, mdp: state.password })
      .then(response => {
        commit('setAuthResponse', response.data);
        commit('setAuthError', null);
        commit('setAuthenticated', true);
        return response.data;
      })
      .catch(error => {
        commit('setAuthResponse', null);
        commit('setAuthError', error.message || 'Une erreur s\'est produite.');
        commit('setAuthenticated', false);
        throw error; // Renvoie l'erreur pour qu'elle puisse être gérée dans le composant
      });
  },

  setAuthSession({ commit }, response) {
    // Ici, tu peux mettre à jour l'état de l'authentification comme nécessaire
    // par exemple, stocker le token, l'utilisateur, etc.
    // commit('setAuthToken', response.token);
    // commit('setUser', response.user);
  }
};

const getters = {
  getUid: state => state.uid,
  getPassword: state => state.password,
  isAuthenticated: state => state.isAuthenticated,
  getAuthResponse: state => state.authResponse,
  getAuthError: state => state.authError
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
