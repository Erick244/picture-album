<template>
	<div class="containerSlider">
		<div class="slider" :style="{
			borderColor: images[current].mainColor,
			boxShadow: `0px 0px 10px ${images[current].mainColor}`
		}">
			<button class="previous" @click="previous">
				<i class="fa-solid fa-chevron-left"></i>
			</button>
			<button class="next" @click="next">
				<i class="fa-solid fa-chevron-right"></i>
			</button>
			<div class="images" :style="{ transform: `translateX(${-700 * current}px)` }">
				<div class="image" :key="i" v-for="(image, i) in images">
					<img :src="image.imageUrl">
				</div>
			</div>
			<div class="balls">
				<div :class="{
					ball: true,
					current: current == (i - 1),
				}" v-for="i in images.length" :key="i" :id="(i - 1)" @click="setImageByBall">
				</div>
			</div>
		</div>
		<button class="goBack" @click="($router.push('/'))" :style="{ backgroundColor: images[current].mainColor }">
			<i class="fa-solid fa-house"></i>
		</button>
	</div>
</template>

<script>
import { get } from "../../api/album";

export default {
	name: "AlbumSlider",
	data() {
		return {
			images: this.getImages(),
			current: 0
		}
	},
	methods: {
		getImages() {
			get()
				.then(data => this.images = data);
		},
		next() {
			if (this.current < this.images.length - 1) {
				this.current++;
			} else {
				this.current = 0;
			}
		},
		previous() {
			if (this.current > 0) {
				this.current--;
			} else {
				this.current = this.images.length - 1;
			}
		},
		setImageByBall(e) {
			this.current = e.target.id;
		}
	}
}
</script>

<style scoped>
.containerSlider {
	max-width: 1200px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: auto;
	padding: 25px;
	background-color: #fff;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.267);
}

.slider {
	transition: all 300ms ease;
	width: 700px;
	height: 500px;
	border: 3px solid;
	position: relative;
	border-radius: 20px;
	box-shadow: 0px 0px 10px;
	overflow: hidden;
}


.previous,
.next {
	position: absolute;
	cursor: pointer;
	background-color: transparent;
	border: none;
	color: #fff;
	font-size: 2rem;
	text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.356);
	top: calc(50% - 2rem);
	z-index: 1;
	transition: all 50ms ease;
}

.previous {
	left: 20px;
}

.next {
	right: 20px;
}

.previous:hover,
.next:hover {
	transform: scale(1.1);
}

.previous:active,
.next:active {
	transform: scale(1);
}


.images {
	display: flex;
	transition: all 1.5s ease;
}

.image img {
	width: 700px;
	height: 500px;
}

.balls {
	width: 100%;
	display: flex;
	justify-content: center;
	position: absolute;
	bottom: 10px;
}

.balls .ball {
	width: 15px;
	height: 15px;
	margin: 10px;
	border: 2px solid #fff;
	border-radius: 50%;
	box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.445);
	cursor: pointer;
	transition: all 300ms ease;
}

.balls .ball:hover {
	background-color: #fff;
}

.ball.current {
	background-color: #fff;
}

.manyBalls {
	left: 10px;
}

.goBack {
	margin-top: 30px;
	padding: 13px 30px;
	cursor: pointer;
	border: none;
	border-radius: 10px;
	color: #fff;
	font-size: 1.5rem;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.24);
	text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.281);
	transition: all 300ms ease;
}

.goBack:active {
	opacity: 80%;
}

@media (max-width: 768px) {
	.slider {
		width: 300px;
		height: 500px;
	}
}
</style>