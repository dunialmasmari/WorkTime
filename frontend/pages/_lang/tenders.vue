<template>
  <v-layout slot="tittle" justify-center align-center>
    <v-flex>
      <v-layout class="py-5 my-4">
        <v-flex class="mx-8">
          <h2 class="PageTittle">
            {{ $t('Tenders.Title') }}
          </h2>
        </v-flex>
      </v-layout>
      <v-divider />
      <v-layout wrap class="my-5 mx-8">
        <v-flex lg3 md3 sm4 xs12 class="ma-5">
          <v-card width="250">
            <v-layout justify-center align-center class="py-4"
                      style="background: #3b8070; color: #ffffff">
              <h4>
                {{ $t('Tenders.filter') }}
              </h4>
            </v-layout>
            <v-layout align-center justify-center wrap class="py-2">
              <v-flex lg12 md12 sm12 xs6 class="pa-3">
                <h5>   {{ $t('Tenders.major') }}</h5>
                <v-select
                  v-model="chosenmajor"
                  :items="getFilterField.major"
                  multiple
                  @change="getTenders"
                  item-text="name"
                  item-value="id"
                />
              </v-flex>
                <v-flex lg12 md12 sm12 xs6 class="pa-3">
                <h5>   {{ $t('Tenders.location') }}</h5>
                <v-select
                  v-model="chosenlocation"
                  :items="getFilterField.location"
                  multiple
                  @change="getTenders"
                />
              </v-flex>
              <v-flex lg12 md12 sm12 xs6 class="pa-3">
                <h5>   {{ $t('Tenders.company') }}</h5>
                <v-select
                  v-model="chosencompany"
                  :items="getFilterField.company"
                  multiple
                  @change="getTenders"
                />
              </v-flex>
            
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex lg8 md8 sm8 xs12>
          <v-layout justify-center align-center wrap class="ma-5">
             <v-card v-for="(tender,i) in getTenderFilter" :key="i" class="ma-3" width="280" height="406">
              <v-img
                :src="tender.image"
                height="200px"
                />
               <v-layout  align-center>
              <v-card-title style="height:130px;"> {{ tender.title }} </v-card-title>
           </v-layout>
              <v-divider
                class="elevation-5 align-center mx-6"
                style="background-color: #3b8070"
              />
              <v-card-subtitle>
                {{ tender.company }}
                <br />
                {{ $t('Tenders.Deadline')}}:{{ tender.deadline }}
              </v-card-subtitle>
            </v-card>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        async fetch({ store }) {
          await store.dispatch('tenders/loadFilterField')
            await store.dispatch('tenders/loadTenderFilter',{
              major_id:'',
              company:'',
              location:'',
            })

        },
        data: () => ({
            card:[
                {
                    title: "Top western road trips Top western road trips Top western road trips",
                    dedline:'20-20-2002',
                    adress:'alyemen- aden'
                },
                {
                    title: "Top western road trips Top western road trips",
                    dedline:'20-20-2002',
                    adress:'alyemen- aden'
                },
                {
                    title: "Top western road trips Top western road trips",
                    dedline:'20-20-2002',
                    adress:'alyemen- aden'
                },
                {
                    title: "Top western road trips Top western road trips",
                    dedline:'20-20-2002',
                    adress:'alyemen- aden'
                },
                {
                    title: "Top western road trips Top western road trips",
                    dedline:'20-20-2002',
                    adress:'alyemen- aden'
                },
                {
                    title: "Top western road trips Top western road trips",
                    dedline:'20-20-2002',
                    adress:'alyemen- aden'
                },
                {
                    title: "Top western road trips Top western road trips",
                    dedline:'20-20-2002',
                    adress:'alyemen- aden'
                },
                {
                    title: "Top western road ",
                    dedline:'20-20-2002',
                    adress:'alyemen- aden'
                }
            ],
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
        methods: {
            ...mapActions({
                loadTenderFilter: 'tenders/loadTenderFilter',
             }),
            getTenders() {
                console.log('hi')
                //  this.debounce(function() {
                this.loadTenderFilter({
                    major_id: this.chosenmajor.join(','),
                    location: this.chosenlocation.join(','),
                    company: this.chosencompany.join(','),
                }) //},3000)
            },

        },
    }
</script>

<style></style>
