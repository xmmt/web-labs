<template lang="pug">
  .container
    .row
      .col-lg-12
        h1
          | Список файлов
        section.panel.panel-success( v-if="marks.length" )
          div
            button.btn.btn-success.btn-block( type="button", @click="createNew()" )
              | Создать файл
          table.table.table-striped
            tr
              th Номер
              th Название
              th Обновлено
              th Действие
            tr( v-for="(md, index) in marks", :key="md.title" )
              td {{ index }}
              td {{ md.title }}
              td {{ md.modified }}
              td
                button.btn.btn-primary.btn-block( type="button", @click="edit(md._id)" )
                  | Редактировать
                button.btn.btn-danger.btn-block( type="button", @click="removeMarkdownFile(md._id)" )
                  | Удалить

        section.panel.panel-danger( v-if="!marks.length" )
          div
            button.btn.btn-success.btn-block( type="button", @click="createNew()" )
              | Создать файл
</template>

<script>
    import request from '../services/request.js';
    export default {
        name: 'MarkdownList',
        data () {
            return {
                marks: []
            };
        },
        methods: {
            edit(mdid) {
                this.$router.push({ name: 'MarkdownEdit', params: { id: mdid } });
            },
            createNew() {
                this.$router.push({ name: 'MarkdownNew' });
            },
            async getAllMarkdowns () {
                const response = await request.fetch();
                this.marks = response.data.marks;
            },
            async removeMarkdownFile (mdid) {
                await request.delete(mdid);
                this.getAllMarkdowns();
            }
        },
        mounted () {
            this.getAllMarkdowns();
        }
    }
</script>

<style scoped>
</style>
