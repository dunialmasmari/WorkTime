<template>

  <v-navigation-drawer
    id="app-drawer"
    :mini-variant.sync="mini"
    v-model="inputValue"
    :right="getdir"
    app
    dark
    floating
    class="drawerclass"
    persistent
    mobile-breakpoint="1070"
    width="270">
    <v-list-item class="my-5" >
      <v-list-item-avatar
        style="margin:0px -8px !important;"
        color="white">
        <v-avatar
          size="36px"
          contain>
          <!-- <v-img
            :src="require('@/static/shop.png')"
            contain/> -->
        </v-avatar>
      </v-list-item-avatar>
      <p style="margin: 0px 15px !important;   " >عالم التقنية</p>
      <v-btn
        icon
        class="ma-0 pa-0 extandbtn"
        @click.stop="mini = !mini"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-list-item>
    <v-divider />

    <v-list-item
      :to="`/${$i18n.locale}/controlPanel/`"
      class="v-list-item"
    >
      <v-list-item-action>
        <v-icon style="font-size:24px">  mdi-home</v-icon>
      </v-list-item-action>
      <v-list-item-title >{{ $t('Dashbord.sidebar.main') }}</v-list-item-title>
    </v-list-item>
    <v-list-group
      v-for="item in itemss"
      :key="item.title"
      class="groupitem"
      no-action

    >
      <template v-slot:activator>
        <v-list-item-action>
          <v-icon style="font-size:24px">{{ item.action }}</v-icon>
        </v-list-item-action>
        <v-list-item-title v-text="item.title"/>

      </template>
      <v-list-item
        v-for="subItem in item.sub"
        :key="subItem.title"
        :to="`/${$i18n.locale}/controlPanel`+subItem.to"
      >
        <v-list-item-content>
          <v-list-item-title v-text="subItem.title"/>
        </v-list-item-content>
      </v-list-item>

    </v-list-group>
    <v-list-item
      v-for="(link, i) in links"
      :key="i"
      :to="`/${$i18n.locale}/controlPanel`+link.to"
      class="v-list-item">
      <v-list-item-action>
        <v-icon style="font-size:24px">{{ link.icon }}</v-icon>
      </v-list-item-action>
      <v-list-item-title v-text="link.text" />
    </v-list-item>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapMutations, mapGetters } from 'vuex'


export default {
  props: {
    opened: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({

    mini: true,
    itemss: [
      // {
      //   action: ' mdi-cube',
      //   title: 'dsfsd',
      //   sub: [
      //     { title:'tenders and jobs', to: '/tenders' },
      //   ]
      // },
      {
        action: ' mdi-clipboard-text',
        title: 'teners and majors',
        sub: [
          { title: 'majors', to: '/majors' },
          { title: 'tenders', to: '/tenders' },
        ]
      }
    ],
    links: [

      {
        to: '/customers',
        icon: ' mdi-account-group',
        text: 'ffd'
      },
      // {
      //   to: '/manage-offers',
      //   icon: ' mdi-tag-multiple',
      //   text: i18n.t('Dashbord.sidebar.offers')
      // },
      // {
      //   to: '/manage-comments',
      //   icon: ' mdi-comment-text-multiple',
      //   text: i18n.t('Dashbord.sidebar.comments')
      // },
      // {
      //   to: '/team-members',
      //   icon: ' mdi-account-star',
      //   text: i18n.t('Dashbord.sidebar.teammembers')
      // },
      // {
      //   to: '/reports',
      //   icon: ' mdi-chart-arc',
      //   text: i18n.t('Dashbord.sidebar.reports')
      // },
      // {
      //   to: '/package',
      //   icon: ' mdi-creation',
      //   text: i18n.t('Dashbord.sidebar.package')
      // },
      // {
      //   to: '/store-setting',
      //   icon: ' mdi-cogs',
      //   text: i18n.t('Dashbord.sidebar.setting')
      // },
      // {
      //   to: '/view-form',
      //   icon: ' mdi-laptop-mac',
      //   text: i18n.t('Dashbord.sidebar.storesite')
      // }
    ]

  }),
  computed: {
    ...mapGetters({getdrawer:'app/getdrawer',getdir:'app/getdir',getstoreinfo: 'app/getstoreinfo'}),
    inputValue: {
      get () {
        return this.$store.state.app.drawer
      },
      set (val) {
        this.setDrawer(val)
      }
    },
    items () {
      return this.$t('Layout.View.items')
    }
  },

  methods: {
    ...mapMutations({setDrawer:'app/setDrawer', toggleDrawer:'app/toggleDrawer'})
  }

}
</script>

<style  lang="scss" >
// .ar .drawerclass{
//   right:0 ;
//   left:auto;
// }
#app-drawer {
background-image: linear-gradient(to right top, #0b0b0b, #2a2a2a, #484848, #696969, #8c8c8c);
 .v-list__item {
    border-radius: 4px;

  }
}
.ar .extandbtn{
  position:absolute ; left:0 !important;
}
.en{
  .extandbtn{
  position:absolute ; right:0;
}
}
.drawerclass .groupitem .v-list-item--link{
   color: white !important;
}
.drawerclass .v-list-group__header__append-icon{
  visibility: hidden;
}
.drawerclass .v-navigation-drawer--mini-variant {
  overflow-x: hidden;
  overflow-y: auto !important ;

}
html{
scrollbar-width:thin;
}
.v-navigation-drawer__content{
  scrollbar-width:thin;
}
::-webkit-scrollbar {
    width:5px;  /* Remove scrollbar space */
       background: #8c8c8c;  /* Optional: just make scrollbar invisible */
}

/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
    background: #0b0b0b;
}
.v-application a{
  color: white !important;
}
#app-drawer .v-list-item  .v-list-item__title{
  font-size:  15px !important ;
}

</style>
<style  scoped>

</style>
