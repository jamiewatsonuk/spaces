<template>
  <div class="max-h-screen">
    <VideoPlayer />

    <div class="fixed top-0 p-4">
      <div class="rounded bg-gray-800 flex flex-col">

        <Popover v-slot="{ open }" class="relative z-10">
          <PopoverButton class="inline-flex w-12 h-12 items-center justify-center px-3 py-2 focus:outline-none">
            <svg class="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" display="block" id="SoundOn"><path d="M16 8.5c1.333 1.778 1.333 5.222 0 7"/><path d="M19 5c3.988 3.808 4.012 10.217 0 14"/><path d="M2 14.959V9.04C2 8.466 2.448 8 3 8h3.586a.98.98 0 00.707-.305l3-3.388c.63-.656 1.707-.191 1.707.736v13.914c0 .934-1.09 1.395-1.716.726l-2.99-3.369A.98.98 0 006.578 16H3c-.552 0-1-.466-1-1.041z"/></svg>
          </PopoverButton>
          <PopoverPanel class="ml-16 absolute w-32 bg-gray-800 top-0 p-5 rounded flex items-center">
            <input id="volume" type="range" step="0.1" max="1" min="0" v-model="volume" class="w-full appearance-none bg-gray-400 rounded-full h-1 m-0" />
          </PopoverPanel>
        </Popover>

        <Popover v-slot="{ open }" class="relative z-10">
          <PopoverButton class="inline-flex w-12 h-12 items-center justify-center px-3 py-2 text-base font-medium text-white rounded-full group hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke-width="2" display="block" id="SoundcloudFill"><path d="M1.16 16.466c.049 0 .09-.039.098-.093l.27-2.022-.27-2.069c-.007-.054-.05-.093-.099-.093-.05 0-.094.04-.1.093l-.236 2.069.236 2.021c.006.055.05.094.1.094z"/><path d="M.272 15.697c.048 0 .088-.036.095-.09l.209-1.256-.209-1.28c-.007-.053-.047-.09-.095-.09-.051 0-.09.037-.098.09L0 14.351l.174 1.256c.008.053.047.09.098.09z"/><path d="M2.22 11.897a.122.122 0 00-.12-.114.12.12 0 00-.119.114l-.224 2.454.224 2.364a.12.12 0 00.12.112.121.121 0 00.12-.113l.254-2.363-.254-2.454z"/><path d="M3.052 16.922a.143.143 0 00.14-.132l.241-2.439-.24-2.522a.143.143 0 00-.141-.132.14.14 0 00-.14.133l-.213 2.521.212 2.439a.14.14 0 00.141.133z"/><path d="M4.01 16.962a.162.162 0 00.162-.152l.226-2.459-.226-2.34a.162.162 0 00-.162-.151.16.16 0 00-.16.152l-.2 2.34.2 2.458a.16.16 0 00.16.152z"/><path d="M5.37 14.352l-.212-3.805a.184.184 0 00-.182-.173.183.183 0 00-.182.173l-.188 3.805.188 2.458a.183.183 0 00.364 0l.212-2.458z"/><path d="M5.951 16.987a.201.201 0 00.201-.192v.002l.199-2.444-.199-4.676a.203.203 0 00-.405 0l-.174 4.676.175 2.443a.201.201 0 00.203.19z"/><path d="M6.931 9.076a.222.222 0 00-.223.212l-.162 5.065.162 2.418a.221.221 0 00.223.211.22.22 0 00.223-.211l.185-2.418-.185-5.065a.22.22 0 00-.223-.212z"/><path d="M7.92 16.987a.24.24 0 00.244-.232v.002l.17-2.404-.17-5.235a.24.24 0 00-.243-.232.238.238 0 00-.243.232l-.153 5.235.153 2.404c.002.129.11.23.243.23z"/><path d="M8.918 16.985a.26.26 0 00.263-.252v.002l.157-2.381-.157-5.103a.26.26 0 00-.263-.25.26.26 0 00-.264.25l-.138 5.103.139 2.38c.003.14.119.25.263.25z"/><path d="M10.349 14.354l-.142-4.917a.28.28 0 00-.284-.27.28.28 0 00-.285.271l-.127 4.916.127 2.366a.28.28 0 00.285.27.28.28 0 00.284-.273v.003l.142-2.366z"/><path d="M10.935 16.994c.165 0 .301-.13.304-.29l.129-2.349-.129-5.85a.301.301 0 00-.304-.291.303.303 0 00-.305.291l-.115 5.848.115 2.352c.003.158.14.289.305.289z"/><path d="M11.944 7.664a.322.322 0 00-.327.31l-.133 6.382.134 2.315a.32.32 0 00.325.308.32.32 0 00.324-.311v.003l.146-2.315-.146-6.381a.32.32 0 00-.323-.311z"/><path d="M12.866 16.996l8.181.004C22.678 17 24 15.732 24 14.167c0-1.564-1.322-2.832-2.953-2.832-.404 0-.79.079-1.142.22C19.672 9.003 17.44 7 14.718 7c-.665 0-1.314.126-1.887.339-.223.083-.283.168-.285.333v8.989a.349.349 0 00.32.335z"/></svg>
          </PopoverButton>

          <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="translate-y-1 opacity-0"
              enter-to-class="translate-y-0 opacity-100"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="translate-y-0 opacity-100"
              leave-to-class="translate-y-1 opacity-0"
          >
            <div v-show="open">
              <PopoverPanel static class="absolute z-10 w-screen max-w-xs px-4 transform left-0 top-0 ml-16 right-0 sm:px-0">
                <div
                    class="overflow-hidden rounded shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                >
                  <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/332469031&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                </div>
              </PopoverPanel>
            </div>
          </transition>
        </Popover>

        <Popover v-slot="{ open }" class="relative z-10">
          <PopoverButton class="inline-flex w-12 h-12 items-center justify-center px-3 py-2 focus:outline-none">
            <svg class="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" display="block" id="Image"><path d="M2 6a4 4 0 014-4h12a4 4 0 014 4v12a4 4 0 01-4 4H6a4 4 0 01-4-4V6z"/><circle cx="8.5" cy="8.5" r="2.5"/><path d="M14.526 12.621L6 22h12.27A3.73 3.73 0 0022 18.27c0-.466-.175-.915-.49-1.26l-4.03-4.395a2 2 0 00-2.954.006z"/></svg>
          </PopoverButton>
          <PopoverPanel class="ml-16 absolute w-64 bg-gray-800 top-0 p-4 rounded grid grid-cols-3 gap-4">
            <button v-for="video in videos" @click="setVideo(video)" class="p-2 text-2xl rounded bg-gray-700">{{ video[0] }}</button>
          </PopoverPanel>
        </Popover>

      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent, toRefs} from 'vue'
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import VideoPlayer from "./components/VideoPlayer.vue";

import {state, setVideo} from "./appState"
import videos from "./videos";

export default defineComponent({
  name: 'App',

  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    VideoPlayer,
  },

  setup () {
    return {
      ...toRefs(state),
      setVideo,
      videos
    };
  }
})
</script>

<style>
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  input[type="range"]::-moz-range-thumb {
    @apply bg-white h-4 w-4 rounded-full cursor-pointer border-0 shadow-sm m-0;
    cursor: pointer;
  }
}
</style>