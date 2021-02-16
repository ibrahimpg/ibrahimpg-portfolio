<template>
    <v-dialog v-model="dialog" scrollable max-width="700px">

      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          width=140
        >
          Read Full Bio
        </v-btn>
      </template>

      <v-card>
        <v-card-title>About Me</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 500px;">

          <h5>Education</h5>
          <p>
            I was born and raised in Kuwait until the age of 18 when
            I went to Lebanon (where I am originally from) for University.
            I got a B.A. in Political Science
            from the American University of Beirut in 2015. After working for a year
            I went to the USA and got an M.A. in Professional Communication from the
            University of Alaska, graduating in 2019. It was during my M.A.
            program that my interest in programming and web development really took off.
          </p>

          <h5>Career</h5>
          <p>
            I have been working in freelance web development since 2019 building all kinds of
            websites, web apps, and servers/programs to help businesses in a number of diverse
            fields including tech companies, religious charities, cannabis manufacturers,
            real estate firms, medical equipment distributors, and much more.
            <br><br>
            I quickly set myself apart in the market by bidding on contracts that traditionally
            would rely on drag-and-drop developers and designers by showing what I could build
            for them and how much better the final product would be with a little bit of custom CSS.
            <br><br>
            I slowly moved up from small jobs fixing broken UI elements to building entire websites
            and writing Node.js servers to handle advanced functionalities for clients looking to
            move away from low performance WordPress plugins.
            <br><br>
            I now have a robust WordPress development process for clients looking to build a website
            on that platform, as well as modular use-case-agnostic Node.js code that I continuously
            iterate on and use in order to quickly build out complex API for clients. In addition to
            WordPress I also build UI's with React and Vue for clients that are looking to build a
            more advanced and complex UI, or for clients who want to eventually turn their web app
            into a full fledged mobile app.
            <br><br>
            I have named some of the common tools I use for work but the truth is that I am always
            learning new things and constantly building small pet projects while testing out new
            technologies. I am always learning and challenging myself to build more complex things
            and I think that has been invaluable for my career.
          </p>

          <h5>Learning Web Development</h5>
          <p>
            Like most I began with HTML and CSS and eventually progressed into JavaScript.
            I made a point to become decent with vanilla JS before
            learning any libraries/frameworks.
            I got into this industry around the time people were starting to drop jQuery
            and seeing that play out, the idea of "learn the language, not a framework"
            has always stuck with me.
            With knowledge of the language you can learn any framework quite easily.
            <br><br>
            As far as frameworks I like both Vue and React very much.
            Vue edges React out just a tiny little bit for me because
            I appreciate that the framework itself as well as the "essential"
            additions like the CLI, router, and state management library are all handled by pretty
            much the same team. There's less chance of having compatibility issues for projects that
            include all of these different things.
            The Vue documentation is also extremely well written and comprehensive.
            Don't get me wrong, React is awesome as well and I really enjoy working with it.
            <br><br>
            As far as back-end programming I have used Node.js to build out
            REST API's with Express and MongoDB, complete with deployment and
            persistent (media) data storage.
            Architecturally I like building modular, re-usable code that allows you
            to quickly build out and deploy a powerful API and easily make adjustments
            as necessary. I think NoSQL databases like MongoDB fit into that architecture
            very well. That said, I always choose the best tool
            for the job and there are many cases where using a traditional SQL database is
            the better choice.
            Other than web API's I have also built Discord bots (tons of fun)
            and I have some interest in dabbling with Chrome extensions,
            scraping tools, and maybe some machine learning stuff. I will get to all of
            these things eventually!
            <br><br>
            As far as other programming languages I am interested in
            eventually becoming fluent with PHP and C#. PHP is very similar to
            JavaScript and I have done some light PHP work on some of my WordPress projects,
            so I feel like it would be an easy and useful addition to my skill set.
            C# is interesting to me because of the OOP-based architecture and the fact that it
            is a bit closer to the machine than JS/PHP but still widely used in web API development.
          </p>

          <h5>Other Interests</h5>
          <p>
            I am a big fan of sci-fi. The Alien franchise, Interstellar, and 2001: A Space Odyssey
            are some of my favorites. When I first started building websites it was actually hard
            for me to resist making all of my designs have a dark monospace theme. It's not exactly
            what most businesses are looking for!
            <br><br>
            I also like fantasy and love the Lord of the Rings (the books and the movies). Big fan
            of Game of Thrones except for the last few seasons-original opinion, I know.
            <br><br>
            Despite having a B.A. in Political Science I actually dislike politics and
            have actively avoided immersing myself too much into political news and
            discussion for a few years now.
            Switching over to software has been great for me since I feel like I do
            something that is objectively helping people and making the world a better place.
          </p>

        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
        <v-spacer></v-spacer>
          <v-btn
            color="var(--brandcolor)"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogm1: '',
      dialog: false,
    };
  },
};
</script>
