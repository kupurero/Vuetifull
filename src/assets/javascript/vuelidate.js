import Vue from 'vue';

import Vuelidate from 'vuelidate';
import VuelidateErrorExtractor, { templates } from 'vuelidate-error-extractor';

Vue.use(Vuelidate);

Vue.use(VuelidateErrorExtractor, {
    template: templates.singleErrorExtractor.foundation6,
    messages: {
        required: "Field is required",
        email: "Email address is in an invalid format",
        url: "Url is in an invalid format",
        numeric: "Can only contain numeric values"
    }
})
