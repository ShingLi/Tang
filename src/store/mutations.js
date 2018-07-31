import * as types from './mutations-types'

const mutations = {
	
	[types.SET_SINGER](state,singer) {
        state.singer = singer
	},
    [types.SET_PLAYING](state,flag) {
        state.playing = flag
    },
    [types.SET_FULLSCREEN](state,flag) {
        state.fullScreen = flag
    },
    [types.SET_PLAYLIST](state,list) {
        state.playList = list
    },
    [types.SET_SEQUENCE_LIST](state,list) {
        state.sequenceList = list
    },
    [types.SET_CURRENT_INDEX](state,num) {
        state.currentIndex = num
    }
	
}

export default mutations