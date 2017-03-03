import Vue from 'vue';
import VueResource from 'vue-resource';
import { Button, Select } from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.use(VueResource);

new Vue({
  el: '#app',
  http: {
    root: 'https://jsonplaceholder.typicode.com/posts{/id}',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  computed: {
    resource: function() {
      return this.$resource('https://jsonplaceholder.typicode.com/posts{/id}')
    }
  },
  methods: {
    loadCards: function() {
      var options = {
          params: {
            _start: 10,
            _limit: 100
        },
        headers: {
          'Content-Type': 'application/json'
        }
      }
    }
  }
})
