<template>
  <div class="home">
    <van-button type="primary" @click="handleClick">主要按钮</van-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  private async handleClick(){
    console.log('process.env.NODE_ENV', process.env.NODE_ENV);

    // this.$api.note.getList().then((res: any) => {
    //   console.log('res', res);
    // });

    // await this.$api.note.add({
    //   name: '客户姓名',
    //   mobile: '13536548511',
    // }).then((res: any) => {
    //   console.log(res);
    // });

    // const param = new FormData();
    // param.append('name', '客户姓名');
    // await this.$api.note.upload(param);
  }
}
</script>

<style scoped lang='scss'>

</style>
