import {reactive} from "vue";
import {VideoSource} from "./videos";

const state = reactive({
    volume: 0.2,
    videoSrc: 'mPZkdNFkNps',
    videoStart: 0
});

const setVideo = (video: VideoSource) => {
    state.videoSrc = video[1]
    state.videoStart = video[2]
}

export {
    state,
    setVideo
}