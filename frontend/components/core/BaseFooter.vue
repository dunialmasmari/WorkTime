<template>
  <div class="footer">
    <v-lazy
      v-model="isFooter"
      :options="{
        threshold: 0.5,
      }"
      transition="fade-transition"
    >
      <v-footer
        elevation="12"
          ma-0 pa-0 
          style="padding:0;"
        app
        absolute
      
      >
        <v-layout  
          style=" width:100%;"
          class="py-3"
           justify-center align-center>
          <v-flex lg5 md5 xs12 sm12>
            <v-layout justify-center align-center>
              <v-avatar size="80" tile>
                <v-img :src="require('@/static/v.png')" height="80" contain />
              </v-avatar>
            </v-layout>

            <v-layout justify-center align-center class="py-5">
              <a
              style="text-decoration:none;"
                class="ma-5"
                href="https://www.facebook.com/stories/1625112850844098/UzpfSVNDOjI5NjEzMTUwOTczMTA2MTI=/"
                target="_blank"
                rel="noopener noreferrer"
                ><v-icon color="white">mdi-facebook</v-icon></a
              >
              <a
              style="text-decoration:none;"
                class="ma-5"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                ><v-icon color="white">mdi-instagram</v-icon></a
              >
              <a
              style="text-decoration:none;"
                class="ma-5"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                ><v-icon color="white">mdi-twitter</v-icon></a
              >
            </v-layout>
          </v-flex>
          <v-divider class="mx-4" vertical style="background-color: white" />
          <v-flex lg5 md5 xs12 sm12>
            <v-layout justify-center align-center class="my-1">
              <v-btn text color="white" :to="`/${$i18n.locale}/contact_us`">
             {{ $t('Core.Footer.contact_us')}}
              </v-btn>
            </v-layout>
            <v-layout justify-center align-center class="my-1">
              <v-btn text color="white"  :to="`/${$i18n.locale}/about_us`"> 
              {{ $t('Core.Footer.about_us')}} </v-btn>
            </v-layout>
          </v-flex>
         
        </v-layout>
           <v-layout class="my-4" 
           justify-center  align-center>
         <h3>ghfh</h3>
          
         
        </v-layout>
      </v-footer>
     
    </v-lazy>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({

    email:'',
    valid:false,
    Lazy:false,
    isFooter: false,
  }),
};
</script>
