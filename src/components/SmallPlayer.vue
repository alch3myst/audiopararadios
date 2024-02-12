<script setup lang="ts">
import { defineProps, onMounted, onUpdated, ref } from "vue";

let props = defineProps({
	nome: String,
	audio: String
})

let audioData = ref({
	currentTime: "0:00",
	duration: "0:00",
	playing: false,
	percentage: 0
})

function formatTime(time: number) {
    let sec_num = time; // don't forget the second param
    let hours   = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    let seconds = sec_num - (hours * 3600) - (minutes * 60);

    return minutes+':'+String(Math.floor(seconds)).padStart(2, '0');
}

let audio = ref(HTMLAudioElement.prototype)
onMounted(() => {
	audio.value = new Audio(props.audio)
	
	audio.value!.onloadeddata = () => {
		audioData.value!.duration = formatTime(audio.value!.duration)
	}

	audio.value!.ontimeupdate = (e) => {
		audioData.value!.currentTime = formatTime(audio.value!.currentTime);
		audioData.value!.percentage = audio.value!.currentTime / audio.value!.duration;
	}
})

function play() {
	if(!audioData.value!.playing) {
		audio.value!.play()
	} else {
		audio.value!.pause()
	}
	audioData.value!.playing = !audioData.value!.playing
}

</script>

<template>
	<div class="small-player">
		<p>{{ nome }}</p>
		<div class="seek-bar">
			<img v-if="!audioData.playing" src="/img/play-button.svg" width="18" @click="play">
			<img v-if="audioData.playing" src="/img/pause-button.svg" width="18" @click="play">
			<div class="progress-bar-bg">
				<div class="progress-bar" :style="`width: ${audioData.percentage * 100}%`"></div>
			</div>
		</div>


		<div class="audio-info">
			<button>Baixar</button>
			<p> {{ audioData.currentTime }} / {{ audioData.duration }}</p>
		</div>
	</div>
</template>

<style scoped lang="scss">
.small-player {
	border: 1px solid var(--background);
	margin-bottom: 15px;
	padding: 13px;
	border-radius: 7px;

	& > p {
		font-size: 1.1rem;
		margin-bottom: 10px;
		font-weight: bold;
	}

	& img {
		width: 24px;
		margin-right: 10px;
		height: 25px;
		cursor: pointer;
	}

	& button {
		font-size: 1rem;
		padding: 4px 7px;
		border: none;
		background: var(--background);
		color: var(--darkPrimary);
		border-radius: 7px;
		cursor: pointer;

		&:hover {
			background-color: var(--accent);
			color: var(--background);
		}
	}
}
.audio-info {
	margin-top: 15px;
	display: flex;
	justify-content: space-between;
}

div.progress-bar-bg {
	width: 100%;
	height: 5px;
	background-color: var(--background);
	border-radius: 5px;

	.progress-bar {
		position: absolute;
		background-color: var(--accent);
		border-radius: 5px;
		height: 100%;
		width: 0%;
		top: 0;
		left: 0;
		transition: all 16ms ease;
	}
}

div.seek-bar {
	display: flex;
	align-items: center;

	& progress {
		width: 100%;
	}
}
</style>