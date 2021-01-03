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
        elevation="5"
       
          ma-0 pa-0 
          style="padding:0;"
        app
        absolute
      
      >
        <v-layout  
          style=" width:100%; background-color:#5f5d5e;"
          class="py-3"
          color="#5f5d5e"
           justify-center align-center>
          <v-flex lg5 md5 xs12 sm12>
            <v-layout justify-center align-center>
              <v-avatar  width="150" tile>
                <v-img :src="require('@/static/hrlogo.png')" width="150" height="80" contain />
              </v-avatar>
            </v-layout>

            <v-layout justify-center align-center >
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
           <v-layout class="my-2" 
           justify-center  align-center>
         <h4> {{ $t('Core.Footer.allrights')}} </h4>
          
         
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
