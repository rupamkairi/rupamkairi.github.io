<template>
  <div class="container h-screen mx-auto flex items-center justify-center">
    <div
      class="m-auto p-8 rounded shadow-lg bg-white flex flex-col items-center"
    >
      <SanityImage
        class="rounded-full shadow-xl w-32 h-32"
        :project-id="this.$sanity.config.projectId"
        :dataset="this.$sanity.config.dataset"
        :asset-id="main_author.image.asset._ref"
        auto="format"
      />
      <span class="text-4xl font-black text-center">{{
        main_author.name
      }}</span>
      <p class="text-gray-500">Everywhere as</p>
      <span class="text-xl font-normal text-center">{{
        main_author.slug.current
      }}</span>
      <p class="text-gray-500">Except on Twitter, as</p>
      <span class="text-xl font-normal text-center"> @RupamKairi </span>
    </div>
  </div>
  <!-- <pre>{{ main_author }}</pre> -->
</template>

<script>
import { groq } from '@nuxtjs/sanity'
import { SanityImage } from '@nuxtjs/sanity/dist/sanity-image'

const query = groq`*[_type == "author"][0]`

export default {
  components: { SanityImage },
  async fetch() {
    this.main_author = await this.$sanity.fetch(query)
  },
  data() {
    return {
      main_author: '',
    }
  },
}
</script>

<style></style>
