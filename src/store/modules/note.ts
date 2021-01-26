import api from '@/api';
import {
  VuexModule, Module, Mutation, Action,
} from 'vuex-module-decorators';

@Module({ namespaced: true })
export default class NoteModule extends VuexModule {
  public noteList: any[] = [];

  @Mutation
  public initNote(noteList: any[]){
    this.noteList = noteList;
  }

  @Action({ commit: 'initNote' })
  async initNoteList(){
    const res = await api.note.getList();
    return res.data ? res.data : [];
  }
}
