/**
 * Main JS entry point.
 * ------------------------------------------------------------------------------
 * All functionality loaded here.
 *
 */
import Vue from './modules/vue.esm';

// import Welcome from './components/welcome.vue';

document.addEventListener('DOMContentLoaded', () => {

  /**
   * Vue initialisation.
   */
  new Vue({
    el: '#Nomad',
    name: 'Nomad',
    components: {
      // Welcome,
    },
    data: {
      test: true,
    },
  });
});
