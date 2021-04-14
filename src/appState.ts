import {reactive} from "vue";

const state = reactive({
    volume: 1,
    videoSrc: 'Upmka8z9n7E'
});

const setVideo = (video: string) => {
    state.videoSrc = video
}

export {
    state,
    setVideo
}