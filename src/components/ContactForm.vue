<template>
  <form name="contactme" method="post" data-netlify="true"
    data-netlify-honeypot="bot-field"
    style="padding: 10px;">
  <input type="hidden" name="form-name" value="contactme" />
  <v-card-title>
    <span class="headline">Contact Me</span>
  </v-card-title>

  <v-card-text>
    <v-container>
      <v-row>

        <v-col cols="12">
          <v-text-field
            label="Name*"
            required
            name="contactname"
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-text-field
            label="Email*"
            required
            name="contactemail"
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-text-field
            label="Message*"
            required
            name="contactmsg"
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            :items="[
            'Vue Development',
            'Node Development',
            'WordPress Development',
            'Career Opportunity']"
            label="Inquiry Topic (Optional)"
            multiple
            name="contactqs"
          ></v-autocomplete>
        </v-col>

      </v-row>
    </v-container>
    <small style="color: #A9A9A9; padding-left: 15px;">*indicates required field</small>
  </v-card-text>

  <v-card-actions>
    <v-spacer></v-spacer>
    <v-btn
      type=submit
      color="var(--brandcolor)"
      text
      @click="contactOpen = false"
    >
      Submit
    </v-btn>
  </v-card-actions>
  </form>
</template>

<script>
export default {
  name: 'Form',
  data: () => ({
    //
  }),
};
</script>
