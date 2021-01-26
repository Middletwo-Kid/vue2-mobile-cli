<template>
  <div class="home">
    <van-button type="primary" @click="handleClick">axio获取列表</van-button>
    <hr/>
    <van-button type="primary" @click="handleClickGetVuex">vuex获取列表并存储</van-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const NoteModule = namespace('Note');

@Component
export default class Home extends Vue {
  @NoteModule.State('noteList') public noteList: any[] | undefined;
  @NoteModule.Action('initNoteList') public initNoteList: any;

  private async handleClick(){
    this.$api.note.getList().then((res: any) => {
      console.log('res', res);
    });

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

  private async handleClickGetVuex(){
    console.log(this.noteList);
    await this.initNoteList();
    console.log(this.noteList);
  }
}
</script>

<style scoped lang='scss'>

</style>
