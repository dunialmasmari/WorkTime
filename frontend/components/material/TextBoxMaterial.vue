<template>
  <div>
    <v-text-field
      dense
      :color="colour"
      class="py-0 styled-input toggle"
      :label="lable"
      :rules="typeofrules"
      :placeholder="placeholder"
      :value="value"
      required
      :type="types"
      :append-icon="appendIcon"
      :outlined="outlined"
      
      :solo="solo"
      @input="updateValue($event)"
      @click:append="append"
    />
  </div>
</template>
<script>
    export default {
        name: 'TextBoxMaterial',
        props: {
            solo: {
                type: Boolean,
                default: false,
            },
            outlined: {
                type: Boolean,
                default: true,
            },
            colour: {
                type: String,
                default: 'blue',
            },
            lable: {
                type: String,
                default: '',
            },
            rules: {
                type: String,
                default: '',
            },
            value: {
                type: String,
                default: '',
            },
            placeholder: {
                type: String,
                default: '',
            },
            textBox: {
                type: String,
                default: '',
            },
            appendIcon: {
                type: String,
                default: '',
            },
            types: {
                type: String,
                default: 'text',
            },
        },
        data: () => ({
            isText: false,
        }),
        computed: {
            typeofrules() {
                if (this.rules === 'usernameRules') {
                    return [
                        (v) => !!v || this.$t('validation.emptyfieldrequired'),
                        (v) =>
                            (v && v.length <= 80) || this.$t('validation.exceededlimitation'),
                    ]
                }
                if (this.rules === 'requiredRules') {
                    return [(v) => !!v || this.$t('validation.emptyfieldrequired')]
                }
                if (this.rules === 'lastNameRules') {
                    return [
                        (v) => !!v || this.$t('validation.emptyfieldrequired'),
                        (v) =>
                            (v && v.length <= 80) || this.$t('validation.exceededlimitation'),
                    ]
                }
                if (this.rules === 'usermailRules') {
                    return [
                        (v) => !!v || this.$t('validation.emptyfieldrequired'),
                        (v) => /.+@.+\..+/.test(v) || this.$t('validation.emailvalidation'),
                        (v) =>
                            (v && v.length <= 100) || this.$t('validation.exceededlimitation'),
                    ]
                }
                if (this.rules === 'pwdRules') {
                    return [
                        (v) => !!v || this.$t('validation.emptyfieldrequired'),
                        (v) => {
                            const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,100}$/
                            return pattern.test(v) || this.$t('validation.PasswordValidation')
                        },
                        (v) =>
                            (v && v.length <= 250) || this.$t('validation.exceededlimitation'),
                    ]
                }
                if (this.rules === 'notequal') {
                    return console.log('fsdf')
                    // return [ i18n.t('validation.passwordnotmuch')]
                }
                // else{
                //      return  v => (v && v !== this.rules) || this.$t('validation.exceededlimitation')
                // }
            },
        },
        methods: {
            append() {
                this.$emit('append')
            },
            updateValue(value) {
                console.log('this.value')
                // console.log(this.value)
                //console.log(value)
                this.$emit('input', value)
            },
        },
    }
</script>
<style lang="scss">

</style>
