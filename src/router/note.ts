import Router, { RouteConfig } from 'vue-router';

const R = (name: string) => () => import(`@/views/note/${name}.vue`);

const RoutesConfig: RouteConfig[] = [{
  name: 'AddNote',
  path: '/note/add',
  component: R('Add'),
  meta: {
    title: '新增笔记',
  },
}, {
  name: 'NoteList',
  path: '/note/list',
  component: R('List'),
  meta: {
    title: '笔记列表',
  },
}, {
  name: 'NoteDetails',
  path: '/note/details',
  component: R('Details'),
  meta: {
    title: '笔记详情',
  },
}];

export default RoutesConfig;
