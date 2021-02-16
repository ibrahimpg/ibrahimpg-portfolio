<template>
  <v-dialog v-model="contactOpen" max-width="600px">

    <template v-slot:activator="{ on, attrs }">
    <v-btn
      icon
      v-bind="attrs"
      v-on="on"
    >
      <v-icon>mdi-email</v-icon>
    </v-btn>
    </template>

    <v-card>
      <ContactForm />
    </v-card>

  </v-dialog>
</template>

<script>
import ContactForm from './ContactForm.vue';

export default {
  name: 'ContactButton',
  components: {
    ContactForm,
  },
  data: () => ({
    contactOpen: false,
  }),
};
</script>
