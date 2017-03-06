import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css'
import AddressComponent from './address.vue'
import IsOrganizationComponent from './isOrganization.vue'

Vue.use(Element);

new Vue({
  el: '#app',
  components: {
    'address-component': AddressComponent,
    'organization': IsOrganizationComponent
  },
  data: {
    contact_first_name: '',
    contact_surname: ''
  },
  methods: {
    submitRegistration: function() {
      var toSubmit = {
        contact_first_name: this.contact_first_name,
        contact_surname: this.contact_surname,
        is_organization: this.$refs.organization.is_organization,
        company: this.$refs.organization.company,
        address: this.$refs.address.selected
      }
      console.log(toSubmit);
    }
  }
})
