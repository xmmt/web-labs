<template lang="pug">
  .container
    h1
      | Создать новый документ
    form(@submit.prevent="updateMarkdownFile()")
      .form-group
        input.form-control( type="text", name="title", id="title", placeholder="Заголовок", v-model.trim="mark.title" )
      .form-group.row
        .col-lg-6
          textarea.form-control( type="text", rows="20", name="body", id="body", v-model.trim="mark.body" )
        .col-lg-6.marked-html( v-html="compiledMarkdown" )
      .form-group.row
        .col-lg-6
          button.btn.btn-block.btn-primary( type="submit", name="updateMarkdownFile" )
            | Редактировать
        .col-lg-6
          button.btn.btn-block.btn-primary( type="button", @click="goBack()" )
            | На главную
</template>

<script>
    import request from '../services/request.js'
    import marked from 'marked'
    export default {
        name: 'MarkdownEdit',
        data() {
            return {
                mark: {
                    title: '',
                    body: ''
                }
            }
        },
        methods: {
            async getMarkdownFile () {
                const response = await request.get({ id: this.$route.params.id });
                this.mark.title = response.data.title;
                this.mark.body = response.data.body;
            },
            async updateMarkdownFile () {
                if (this.mark.title !== '' && this.mark.body !== '') {
                    await request.update({
                        id: this.$route.params.id,
                        title: this.mark.title,
                        body: this.mark.body
                    });
                    await this.$router.push({name: 'MarkdownList'});
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
        },
        mounted () {
            this.getMarkdownFile();
        }
    }
</script>

<style scoped>
  .marked-html {
    border: 1px solid #ced4da;
    text-align: left;
  }
  form .row {
    margin-right: 0;
  }
</style>
