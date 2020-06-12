<template>
  <div class="passwordPay-container">
    
  </div>
</template>
<script>
import { loginByPass } from '@/api/integralPay'
export default {
  name: 'PasswordPay',
  data() {
    return {
      
    }
  },
  created() {
    this.getlogin()
  },
  methods: {
    getlogin() {
      const data = {
				mobile: '15620606786',
				password: '123456'
			}
      loginByPass(data).then(res => {
        console.log('res', res)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.passwordPay-container{

}
</style>