<template>

      <v-footer
        elevation="5"
       
          ma-0 pa-0 
          style="padding:0;"
        app
        absolute
      
      >
        <v-layout  
          style=" width:100%; background-color:rgb(03,39,64);"
          class="py-3"
          color="#000000"
           justify-center align-center wrap>
          <v-flex lg5 md5 xs12 sm5>
            <v-layout justify-center align-center>
              <v-avatar  width="160"  height="90" tile >
                <v-img :src="require('@/static/hrlogo1.png')" width="150" height="250" contain />
              </v-avatar>
            </v-layout>

            <v-layout justify-center align-center >
              <a
              style="text-decoration:none;"
                class="ma-5"
                href="https://www.facebook.com/work.time.35728"
                target="_blank"
                rel="noopener noreferrer"
                ><v-icon color="white">mdi-facebook</v-icon></a
              >
              <a
              style="text-decoration:none;"
                class="ma-5"
                href="https://www.instagram.com/worktime66/"
                target="_blank"
                rel="noopener noreferrer"
                ><v-icon color="white">mdi-instagram</v-icon></a
              >
              <a
              style="text-decoration:none;"
                class="ma-5"
                href="https://twitter.com/worktim1231?s=08"
                target="_blank"
                rel="noopener noreferrer"
                ><v-icon color="white">mdi-twitter</v-icon></a
              >
            </v-layout>
          </v-flex>
          <v-divider class="mx-4" vertical style="background-color: white" />
          <v-flex lg5 md5 xs12 sm5>
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
