<template>
  <v-layout slot="tittle" justify-center align-center>
    <v-flex>
      <v-layout class="py-5 my-4">
        <v-flex class="mx-8">
          <h2 class="PageTittle" style="color: #000000">
            {{ $t("Tenders.Title") }}
          </h2>
        </v-flex>
      </v-layout>
      <v-divider />
      <v-layout wrap class="my-5 mx-1">
        <!-- <v-flex lg3 md3 sm12 xs12 class="my-5">
          <v-card >
            <v-layout
              justify-center
              align-center
              class="py-4"
              style="background: #4f9dd5; color: #ffffff"
            >
              <h4>
                {{ $t("Tenders.filter") }}
              </h4>
            </v-layout>
            <v-layout align-center justify-center wrap class="py-2">
              <v-flex lg12 md12 sm4 xs8 class="px-3 py-1">
                <v-select
                  :label="$t('Tenders.major')"
                  v-model="chosenmajor"
                  :items="getFilterField.major"
                  multiple
                  @change="getTenders"
                  item-text="name"
                  item-value="id"
                />
              </v-flex>
              <v-flex lg12 md12 sm4 xs8 class="px-3 py-1">
                <v-select
                  :label="$t('Tenders.location')"
                  v-model="chosenlocation"
                  :items="getFilterField.location"
                  multiple
                  @change="getTenders"
                />
              </v-flex>
              <v-flex lg12 md12 sm4 xs8 class="px-3 py-1">
                <v-select
                  :label="$t('Tenders.company')"
                  v-model="chosencompany"
                  :items="getFilterField.company"
                  multiple
                  @change="getTenders"
                />
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex> -->
        <v-flex lg12 md12 sm12 xs12>
           <v-layout v-if="!getTenderFilter.data"  justify-center align-center wrap class="my-5">
         <v-avatar size="50%" tile>
                  <v-img
                    :src="require('@/static/nodata.png')"
                  
                    contain
                  />
                </v-avatar>
       </v-layout>
          <v-layout  v-if="getTenderFilter.data" justify-center align-center wrap class="my-5">
            <v-card
              v-for="(tender, i) in getTenderFilter.data"
              :key="i" class="ma-3" width="280" height="460">
              <v-img :src="`https://worktimebackend.herokuapp.com/images/`+tender.image" contain height="200px"  />
              <v-card-title style="height: 90px;">
              {{ tender.title && tender.title.length > 45 ? tender.title.substring(0,45)+".." : tender.title  }}
              </v-card-title>
              <v-divider
                class="elevation-5 align-center mx-6"
                style="background-color: #4f9dd5"
              />
              <div style="height: 110px">
              <v-card-subtitle class="py-1"   >
                <v-icon
                   >mdi-home</v-icon>  <span>{{ tender.company }}</span>
              </v-card-subtitle>
               <v-card-subtitle class="py-1">
                <v-icon
                   >mdi-map-marker</v-icon>  <span> {{ tender.location }}</span>
              </v-card-subtitle>
              <v-card-subtitle class="py-1">
                  <v-icon
                   >mdi-calendar</v-icon><span style="color:red;">{{ $t("Tenders.Deadline") }}</span>:{{ tender.deadline }}
             
              </v-card-subtitle >
              </div>
              <v-card-subtitle class="py-1">
              <v-btn small   :to="`/${$i18n.locale}/tenders/tenderDetails/${tender.tender_id}`"
                color="#4f9dd5" class=" mx-0" >
              <span style="color:#fff">{{  $t("Tenders.more") }}</span>
              </v-btn>
            </v-card-subtitle >
            </v-card>
          </v-layout>
          <v-layout v-if="getTenderFilter.data"  justify-center align-center>
            <v-pagination
              v-model="page"
              color="#4f9dd5"
              :length="getTenderFilter.last_page"
              @input="getTenders()"
            ></v-pagination>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        // async fetch({ store }) {
        //  // await store.dispatch('tenders/loadFilterField')
        //     await store.dispatch('tenders/loadTenderFilter',{
        //       page:1,
        //       major_id:'',
        //       company:'',
        //       location:'',
        //     })

        // },
        data: () => ({
          page:1,
          
            slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
            ex2: { label: '', val: 100, color: 'green lighten-1' },
            color: '#6d597a',
            page: 1,
            menu: false,
            chosenmajor: [],
            chosenlocation: [],
            chosencompany: [],
        }),
        computed: {
    ...mapGetters({getFilterField: 'tenders/getFilterField',getTenderFilter:'tenders/getTenderFilter'})
  },
  mounted() {
     this.loadTenderFilter({
                    page:1,
              major_id:'',
              company:'',
              location:'',
                }) //},3000)
  },
        methods: {
            ...mapActions({
                loadTenderFilter: 'tenders/loadTenderFilter',
             }),
            getTenders() {
                console.log('hi')
                //  this.debounce(function() {
                this.loadTenderFilter({
                    page:this.page,
                    major_id: this.chosenmajor.join(','),
                    location: this.chosenlocation.join(','),
                    company: this.chosencompany.join(','),
                }) //},3000)
            },

        },
    }
</script>

<style></style>
