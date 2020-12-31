<template>
  <v-layout slot="tittle" justify-center align-center>
    <v-flex>
      <v-layout class="py-5 my-4">
        <v-flex class="mx-8">
          <h2 class="PageTittle">
            {{ $t('Categories.Tittle') }}
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
                {{ $t('Categories.filter') }}
              </h4>
            </v-layout>
            <v-layout align-center justify-center wrap class="py-2">
              <v-flex lg12 md12 sm12 xs6 class="pa-3">
                <h5>Location</h5>
                <v-select
                  v-model="chosenlocation"
                  :items="slides"
                  multiple
                  @change="getProduct"
                />
              </v-flex>
              <v-flex lg12 md12 sm12 xs6 class="pa-3">
                <h5>Company</h5>
                <v-select
                  v-model="chosencompany"
                  :items="slides"
                  multiple
                  @change="getProduct"
                />
              </v-flex>
              <v-flex lg12 md12 sm12 xs6 class="pa-3">
                <h5>Major</h5>
                <v-select
                  v-model="chosenmajor"
                  :items="slides"
                  multiple
                  @change="getProduct"
                />
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex lg8 md8 sm8 xs12>
          <v-layout justify-center align-center wrap class="ma-5">
            <v-card v-for="slide in card" class="ma-3" width="280" height="406">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
              />
              <v-card-title> {{slide.title}} </v-card-title>
              <v-divider
                class="elevation-5 align-center mx-6"
                style="background-color: #3b8070"
              />
              <v-card-subtitle>
                {{slide.adress}}
                <br />
                Deadline:{{slide.dedline}}
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
            await store.dispatch('products/LoadFilterParams')

        },
        asyncData({ app }) {
            return {
                chosenMode: 'Newer',
                getMode: [
                    { id: 'Newer', name: app.i18n.t('Categories.Newer') },
                    { id: 'Older', name: app.i18n.t('Categories.Older') },
                    { id: 'Lowest Price', name: app.i18n.t('Categories.LowestPrice') },
                    { id: 'Heighest Price', name: app.i18n.t('Categories.HeighestPrice') },
                ],
            }
        },
        data: () => ({
            tab: null,

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
            chosenClassifications: [],
            chosenOffers: [],
            colors: [],
        }),
        methods: {
            ...mapActions({
                LoadFilterParams: 'products/LoadFilterParams',
                LoadingCategoriesProduct: 'products/LoadingCategoriesProduct',
            }),
            getProduct() {
                console.log('hi')
                //  this.debounce(function() {
                this.LoadingCategoriesProduct({
                    categories: this.$route.params.Categories,
                    classifications: this.chosenClassifications.join(','),
                    price: this.ex2.val,
                    colors: this.colors.join(','),
                    orderMode: this.chosenMode,
                    brands: this.chosenBrands.join(','),
                    offerTypes: this.chosenOffers.join(','),
                }) //},3000)
            },

        },
    }
</script>

<style></style>
