<template lang="pug">
  .container
    h1
      | Создать новый документ
    form
      .form-group
        input.form-control( type="text", name="title", id="title", placeholder="Заголовок", v-model.trim="mark.title" )
      .form-group.row
        .col-lg-6
          textarea.form-control( type="text", rows="20", name="body", id="body", v-model.trim="mark.body" )
        .col-lg-6.marked-html( v-html="compiledMarkdown" )
      .form-group.row
        .col-lg-6
          button.btn.btn-block.btn-primary( type="button", name="createMarkdownFile", id="createMarkdownFile", @click="createMarkdownFile()" )
            | Создать
        .col-lg-6
          button.btn.btn-block.btn-primary( type="button", @click="goBack()" )
            | На главную
</template>

<script>
    import request from '../services/request.js';
    import marked from 'marked';
    export default {
        name: 'MarkdownNew',
        data () {
            return {
                mark: {
                    title: '',
                    body: ''
                }
            };
        },
        methods: {
            async createMarkdownFile () {
                if (this.mark.title !== '' && this.mark.body !== '') {
                    await request.create({
                        title: this.mark.title,
                        body: this.mark.body
                    });
                    await this.$router.push({name: 'MarkdownList'});
                } else {
                    alert('Пустые поля');
                }
            },
            goBack () {
                this.$router.push({ name: 'MarkdownList' });
            }
        },
        computed: {
            compiledMarkdown: function () {
                return marked(this.mark.body, { sanitize: true });
            }
        }
    }
</script>

<style>
  .marked-html {
    border: 1px solid #ced4da;
    text-align: left;
  }
  form .row {
    margin-right: 0;
  }
</style>
