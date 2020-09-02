<template>
  <div>
    <div
        v-for="(translation,index) in intro.fields.content"
        :key="index"
    >
      <h1 class="p-text-center" v-if="index === $store.getters['locale/selectedLocale'].name">
        {{translation}}
      </h1>
    </div>

    <div class="p-grid">
      <div class="p-col-6 p-col-md-12" v-for="(entry, index) in previews" :key="index">
        <div class="p-panel">
          <div
            v-for="(translation,index) in entry.fields.preview"
            :key="index"
            v-if="index === $store.getters['locale/selectedLocale'].name"
            v-html="$md.render(translation)"
          >
          </div>
          <div
              class="link"
              v-for="(translation,index) in entry.fields.slug"
              :key="index"
              v-if="index === 'en-US'"
          >
            <nuxt-link :to="'/'+ translation">
              <Button
                  v-if="$store.getters['locale/selectedLocale'].name === 'en-US'"
                  label="Project introduction"
              />
              <Button
                  v-if="$store.getters['locale/selectedLocale'].name === 'hu'"
                  label="Project bemutatása"
              />
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
      let intro = null
      return {
        previews, intro
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

      this.intro = await contentfulClient().then(function(client){
        return client.getEntry("pUbpBzOevcabIcyAr5Jyl")
      })
    },
    methods: {

    }
  }
</script>

<style lang="scss">
  h1{
    font-weight:400;
    font-size: 2.5em !important;
    color: #868e96 !important;
  }

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
