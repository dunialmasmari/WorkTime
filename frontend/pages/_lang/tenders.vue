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
      <v-layout wrap class="my-5 mx-8">
        <v-flex lg3 md3 sm12 xs12 class="my-5">
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
        </v-flex>
        <v-flex lg9 md9 sm11 xs12>
          <v-layout justify-center align-center wrap class="ma-5">
            <v-card
              v-for="(tender, i) in getTenderFilter.data"
              :key="i"
              class="ma-3"
              width="280"
              height="406"
            >
              <v-img :src="tender.image" height="200px" />
              <v-layout align-center>
                <v-card-title style="height: 100px" 
                :rules="rules"
            counter
            maxlength="2" >
                  {{ tender.title }}
                </v-card-title>
              </v-layout>
              <v-divider
                class="elevation-5 align-center mx-6"
                style="background-color: #3b8070"
              />
              <v-card-subtitle>
                {{ tender.company }}
                <br />
                {{ $t("Tenders.Deadline") }}:{{ tender.deadline }}
                <br />

                <v-btn
                  :to="`/${$i18n.locale}/tenders/TenderDetails/${tender.tender_id}`"
                  small
                  color="#4f9dd5"
                  class="mx-0 my-2"
                >
                  <span style="color: #fff">{{ $t("Tenders.more") }}</span>
                </v-btn>
              </v-card-subtitle>
            </v-card>
          </v-layout>
          <v-layout justify-center align-center>
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
        async fetch({ store }) {
          await store.dispatch('tenders/loadFilterField')
            await store.dispatch('tenders/loadTenderFilter',{
              page:1,
              major_id:'',
              company:'',
              location:'',
            })

        },
        data: () => ({
          page:1,
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
