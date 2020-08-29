<template>
  <div>
    <div class="p-grid">
      <div class="p-col-6 p-col-md-12" v-for="(entry, index) in previews" :key="index">
        <div class="p-panel">
          <div
            v-for="(translation,index) in entry.fields.preview"
            :key="index"
            v-if="index === 'en-US'"
            v-html="$md.render(translation)"
          >
          </div>
          <div class="link" v-for="(translation,index) in entry.fields.slug" :key="index">
            <nuxt-link v-if="index === 'en-US'" :to="'/'+translation">
              <Button label="Learn more"/>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {contentfulClient} from "../services/contentful.js"

  export default{
    layout: "default",
    data(){
      let previews = [];
      return {
        previews
      }
    },
    async fetch(){

      this.previews = await contentfulClient().then(function(client){
        return client.getEntries({
          content_type: "blogPost",
          'fields.published.en-US' : 'true'
        })
      }).then(function(entries){
        return entries.items
      })
    },
    methods: {

    }
  }
</script>

<style lang="scss">
  .entry{
    border: 1px solid lightgray;
    border-radius: 20px;
  }

  .p-panel{
    background-color: #f7f7f7;

    p:first-child{
      background-color: #fff;

      img{
        width: 100%;
        max-height:200px;
      }
    }

    p:last-child{
      padding: 1rem;
      font-size: 2rem;
    }

    .link{
      padding: 1rem;
    }

    a{
      text-decoration: none;
    }

    button{
      background-color: #55198b;
      border: 1px solid #55198b !important;

      &:active{
        background-color: #55198b !important;
      }

      &:hover{
        background-color: #fff !important;
        color: #55198b !important;
        transition: all .3s ease 0s;
        transform: translateY(-3px);
      }
    }
  }
</style>
