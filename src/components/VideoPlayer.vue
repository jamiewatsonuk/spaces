<template>
  <div class="w-screen h-screen absolute overflow-hidden">
    <div class="w-full h-full">
      <div id="player" class="absolute w-screen h-screen overflow-hidden pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform" style="height: 86.25vw"></div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, watch, onMounted} from 'vue'

import {state} from "../appState"

declare global {
  interface Window { onYouTubeIframeAPIReady: any; }
}

const loadYoutube = () => {
  const tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode!.insertBefore(tag, firstScriptTag);
};

export default defineComponent({
  name: 'VideoPlayer',

  setup () {
    onMounted(() => loadYoutube());

    let player : YT.Player;
    window.onYouTubeIframeAPIReady = () => {
      player = new YT.Player('player', {
        videoId: state.videoSrc,
        events: {
          'onReady': onPlayerReady,
        }
      });

      player.setLoop(true);
    };

    const onPlayerReady = (event: YT.PlayerEvent) => {
      event.target.playVideo();
    }

    watch(() => state.videoSrc, () => player.loadVideoById(state.videoSrc, state.videoStart));
    watch(() => state.volume, () => player.setVolume(state.volume * 100));
  }
})
</script>
