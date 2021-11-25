import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const state = () => ({
    menu_open : false,
    footer: {},
    menu: {},
    page: {},
    footerLoaded: false,
    menuLoaded: false,
});

export const mutations = {
    GET_LAYOUT(state, layout) {
        state.footer = layout.data.footer;
        state.menu = layout.data.menu;
    },
    SET_MENU_OPEN(state){
        state.menu_open = !state.menu_open; 
    },
    SET_FOOTER_LOADED(state, loaded){
        state.footerLoaded = loaded;
    },
    SET_MENU_LOADED(state, loaded){
        state.menuLoaded = loaded;
    },
}

export const actions = {
    async getLayout({ commit, state }){
        const { data } = await axios.get('/api/layout')
        
        commit('GET_LAYOUT', data);
        commit('SET_FOOTER_LOADED', true);
        commit('SET_MENU_LOADED', true);
    },
    setMenuOpen({ commit}){
        commit('SET_MENU_OPEN');
    },
    setCurrentPage({ commit}, page){
        commit('SET_CURRENT_PAGE', page);
    },
    // async nuxtServerInit({ dispatch }) {
    //     await dispatch('getLayout');
    // },
}

export const getters = {
    getMenu: state => {
        return state.menu;
    },
    getCurrentPage: state => {
        return state.page;
    },
    getFooter: state => {
        return state.footer;
    },
    getMenuOpen: state => {
        return state.menu_open
    },
    getFooterLoaded: state => {
        return state.footerLoaded
    },
    getMenuLoaded: state => {
        return state.menuLoaded
    },
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})

export default store