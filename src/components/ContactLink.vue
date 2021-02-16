<template>
  <v-row justify="center">
  <v-dialog v-model="contactOpen" max-width="600px">

    <template v-slot:activator="{ on, attrs }">
      <a href="#"
        v-bind="attrs"
        v-on="on"
        style="display: inline;"
      >
        <p style="display: inline;">submit a form</p>
      </a>
    </template>

    <v-card>
      <ContactForm />
    </v-card>

  </v-dialog>
  </v-row>
</template>

<script>
import ContactForm from './ContactForm.vue';

export default {
  name: 'ContactLink',
  components: {
    ContactForm,
  },
  data: () => ({
    contactOpen: false,
  }),
};
</script>
