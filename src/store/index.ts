import Vue from 'vue';
import Vuex from 'vuex';
import NoteModule from './modules/note';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Note: NoteModule,
  },
});
