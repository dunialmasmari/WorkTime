<template>
  <div>
    <v-layout wrap class="py-2 mx-6">
      <v-flex >
      <h2  style="color: #00695c">{{getOneTender.title}}</h2>
      </v-flex>
    </v-layout>
    <v-layout wrap class="py-5 mx-6">
      <v-flex sm2 xs12 md5 lg7>
      <h4>{{ $t("Tenders.major") }}:</h4>
        <v-layout align-center wrap justify-center>
               <v-flex sm2 xs12 md6 lg6>
           
                <v-card-subtitle class="py-2">
                  {{ $t("Tenders.major") }}:{{getOneTender.location}}</v-card-subtitle
                >
                  </v-flex>
              <v-flex sm2 xs12 md6 lg6>
                <v-card-subtitle class="py-2">
                  {{ $t("Tenders.company") }}:{{getOneTender.company}}</v-card-subtitle
                >
                </v-flex>
                 <v-flex sm2 xs12 md6 lg6>
           
                <v-card-subtitle class="py-2">
                  {{ $t("Tenders.location") }}:{{getOneTender.location}}</v-card-subtitle
                >
                  </v-flex>
              <v-flex sm2 xs12 md6 lg6>
                <v-card-subtitle class="py-2">
                  {{ $t("Tenders.applyLink") }}:{{getOneTender.apply_link}}</v-card-subtitle
                >
                </v-flex>
              <v-flex sm2 xs12 md6 lg6>
                <v-card-subtitle class="py-2">
                  {{ $t("Tenders.postedDate") }}:{{getOneTender.posted_date}}</v-card-subtitle
                >
                 </v-flex>
              <v-flex sm2 xs12 md6 lg6>
                <v-card-subtitle class="py-2">
                  {{ $t("Tenders.Deadline") }}:{{getOneTender.deadline}}</v-card-subtitle
                >
              </v-flex>
        </v-layout>
      </v-flex>
      <v-flex sm2 xs12 md2 lg5>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
          width="200px"
        />
      </v-flex>
    </v-layout>
    <v-layout>
      <v-divider
        class="elevation-5 align-center mx-6"
        style="background-color: #3b8070"
      />
    </v-layout>
    <v-layout class="py-4" align-center justify-center>
      <v-flex class="py-2" sm2 xs12 md2 lg11 style="background-color: #f5f5f5">
        <v-flex sm2 xs12 md2 lg6>
          <h3>{{ $t("Tenders.description") }}:</h3>
        </v-flex>
        <v-flex lg12 md8 sm8 xs12>
          <v-layout class="py-4" align-center justify-center wrap>
            {{getOneTender.description}}
            توريد أدوات الأمن والسلامة المهنية تعلن مؤسسة بناء للتنمية عن رغبتها
            في إنزال المناقصة العامة التالية: اخر موعد للتسليم (اليوم /الساعة /
            التاريخ) قيمة الضمان (دولار) صلاحية ضمان العطاء مدة صلاحية العطاء
            عملة العطاء مصدر التمويل اسم المناقصة/ مكونات المناقصة رقم المناقصة
            يوم الإثنين 11/01/2021 الساعة الحادية عشر صباحاً 2200 120 يوم 90 يوم
            دولار امريكي الجهات الممولة توريد أدوات الأمن والسلامة المهنية
            31/2020 وعليه تدعو مؤسسة بناء للتنمية الاخوة الموردين المؤهلين
            والذين سبق ان عملوا في نفس المجال تقديم عطاءاتهم عن طريق المناقصة
            المذكور أعلاه وذلك وفقا لوثائق المناقصات. يمكن الحصول على وثائق
            المناقصة من خلال الرابط الأتي https://forms.gle/rEhfcHEkGYtaEtE68
            يسلم العطاء في مظروف مغلق ومختوم ومكتوب عليه اسم المشروع ورقم
            المناقصة، قبل الموعد المحدد أعلاه لفتح المظاريف على العنوان التالي:
            مؤسسة بناء للتنمية المقر الرئيسي – تقاطع شارع عمان مع شارع جيبوتي
            –جوار أكاديمية بازرعة للطيران تلفون:772939778 / 01-443942، البريد
            الكتروني: tenders@bfdyemen.org تفتح المظاريف بجلسة علنية في مقر
            مؤسسة بناء للتنمية الرئيسي - صنعاء - تقاطع شارع عمان مع شارع جيبوتي
            حسب المواعيد المحددة أعلاه. وأي عطاء يقدم أو يصل بعد هذا الموعد
            سيرفض وسوف يعاد إلى صاحبه مغلقاً. على المتقدم احضار صورة من السجل
            التجاري ساري المفعول. على المتقدم إحضار صورة من البطاقة الضريبية
            سارية المفعول. على المتقدم احضار صورة من شهادة مزاولة المهنة سارية
            المفعول. يجب احضار العينات المطلوبة في جدول الكميات وتسليمها مع
            العطاء. يرفق مع العطاء ضمان بنكي غير مشروط أو شيك مقبول الدفع
            بالمبلغ المحدد أعلاه صالح للمدة المذكورة أعلاه ابتداء من تاريخ فتح
            المظاريف وسيرفض أي عطاء غير مصحوب بضمان المناقصة. يقدم العطاء
            بالعملة المذكورة أعلاه، وسيتم استبعاد أي عطاء يتم تقديمه بعملة
            مغايرة. مؤسسة بناء للتنمية غير ملزمة بقبول أقل عطاء. يجب ارفاق جميع
            وثائق المناقصة وختم جميع الوثائق. سوف يتم استبعاد أي عطاء غير مستوفي
            للمتطلبات المذكورة أعلاه في مرحلة الاستجابة الأولية. ملاحظة: تتبنى
            "مؤسسة بناء للتنمية " مبدأ عدم التسامح تجاه الفساد، وهي ملتزمة
            باحترام أعلى المعايير من حيث الكفاءة والمسؤولية والشفافية في أنشطتها
            عبر منهجية تشاركية لتعزيز وضمان الشفافية داخل المؤسسة حيث اسست جهة
            تنسيق للشفافية والمساءلة. إذا شاهدت أو اشتبهت في ممارسات تجارية غير
            قانونية أو غير لائقة أو غير أخلاقية (مثل التماس أو قبول أو محاولة
            تقديم أو قبول أي رشاوي) أثناء عملية المناقصة، يرجى إرسال بريد
            إلكتروني إلى contact@bfdyemen.org
          </v-layout>
        </v-flex>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
// :image-src="getMostOrdered.productDefaultConfig.imgUrl"
import { mapActions, mapGetters } from "vuex";
export default {
  //  asyncData () {
  //   return new Promise((resolve) => {
  //     setTimeout(function () {
  //       resolve({ name: 'world' })
  //     }, 1000)
  //   })
  // },
  async fetch({ store,route }) {
    await store.dispatch("tenders/loadOneTender",route.params.TenderDetails);
  },
  data: () => ({
    tenders: 0,
    card: [
      {
        title:
          "Top western road trips Top western road trips Top western road trips",
        dedline: "20-20-2002",
        adress: "alyemen- aden",
      },
      {
        title: "Top western road trips Top western road trips",
        dedline: "20-20-2002",
        adress: "alyemen- aden",
      },
      {
        title: "Top western road trips Top western road trips",
        dedline: "20-20-2002",
        adress: "alyemen- aden",
      },
      {
        title: "Top western road trips Top western road trips",
        dedline: "20-20-2002",
        adress: "alyemen- aden",
      },
      {
        title: "Top western road trips Top western road trips",
        dedline: "20-20-2002",
        adress: "alyemen- aden",
      },
      {
        title: "Top western road trips Top western road trips",
        dedline: "20-20-2002",
        adress: "alyemen- aden",
      },
      {
        title: "Top western road trips Top western road trips",
        dedline: "20-20-2002",
        adress: "alyemen- aden",
      },
      {
        title: "Top western road ",
        dedline: "20-20-2002",
        adress: "alyemen- aden",
      },
    ],
    colors: ["#8D6E63", "#78909C", "#FFAB00", "#004D40"],
    slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    show: false,
    loading: false,
    selection: 1,
    orderModel: 0,
    offersModel: 0,
    recentlyModel: 0,
    sizescreen: null,
    slidstoShow: null,
  }),
  computed: {
    ...mapGetters({ getOneTender: "tenders/getOneTender" }),
  },
  mounted() {},
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style></style>
