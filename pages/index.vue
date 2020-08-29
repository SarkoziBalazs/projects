<template>
  <div>
    <div @click="refresh()">Refresh</div>
    <div v-for="(entry,index) in previews" :key="index">
      {{entry.fields.preview["en-US"]}}
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
        return client.getEntries()
      }).then(function(entries){
        return entries.items
      })
      // const client = await contentfulClient()
      // const entries = await client.getEntries()
      //this.previews = entries.items
    },
    methods: {
      async refresh(){
        this.$fetch();
      }
    }
  }
</script>

<style>

</style>
