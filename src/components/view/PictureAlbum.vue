<template>
	<div class="containerAlbum">
		<div class="utilities">
			<div class="buttons">
				<button class="addImage" @click="($router.push('/newImage'))">
					New Image <i class="fa-solid fa-image"></i>
				</button>
				<button class="sliderBtn" @click="($router.push('/slider'))">
					Slider <i class="fa-solid fa-panorama"></i>
				</button>
			</div>
			<div class="search">
				<input 
					type="search" 
					placeholder="Search for images..." 
					v-model="search"
				>
				<button>
					<i class="fa-solid fa-magnifying-glass"></i>
				</button>
			</div>
		</div>
		<hr>
		<div class="containerImages">
			<AlbumImage v-for="(image, i) in images" 
				:key="i"
				:mainColor="image.mainColor"
				:description="image.description" 
				:imageTitle="image.title" 
				:imageUrl="image.imageUrl"
				:ImageId="image.id" 
			/>
		</div>
	</div>
</template>

<script>
import AlbumImage from '../AlbumImage.vue';
import { get } from '../../api/album';

export default {
	name: "PictureAlbum",
	components: {
		AlbumImage,
	},
	data() {
		return {
			images: this.getImages(),
			search: null
		}
	},
	watch: {
		search(text) {
			if (!text) {
				this.getImages();
			} else {
				this.images = this.images.filter(img => {
					return img.title
						.toLowerCase()
						.includes(text.toLowerCase())
				})
			}
		}
	},
	methods: {
		getImages() {
			get()
				.then(data => this.images = data);
		}
	},
	mounted() {
		this.getImages()
	}
}
</script>

<style scoped>
.containerAlbum {
	max-width: 1200px;
	height: 100%;
	margin: auto;
	padding: 25px;
	border-radius: 0px 0px 10px 10px;
	background-color: #fff;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.267);
}

.utilities {
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	margin: 20px 0px;
}

.addImage, .sliderBtn {
	padding: 13px 20px;
	border-radius: 10px;
	background-color: var(--color3);
	color: #fff;
	font-size: 1rem;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.24);
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 100ms ease;
}

.addImage:hover, .sliderBtn:hover {
	transform: translateY(-3px);
}

.addImage:active, .sliderBtn:active {
	transform: translateY(0px);
	opacity: 80%;
}

.sliderBtn {
	margin-left: 20px;
	background-color: #1360D2;
}

.search {
	display: flex;
	align-items: center;
}

.search>input {
	width: 200px;
	font-size: 1rem;
	padding: 5px 7px;
	border: 2px solid var(--color3);
	border-right: none;
	border-radius: 10px 0px 0px 10px;
	outline: none;
	transition: all 300ms ease;
}

.search>input:focus {
	width: 220px;
}

.search>button {
	padding: 7px;
	cursor: pointer;
	color: #fff;
	border-radius: 0px 10px 10px 0px;
	border: 2px solid var(--color3);
	background-color: var(--color1);
	outline: none;
}

.search>button:active {
	opacity: 80%;
}

.containerImages {
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	margin-top: 30px;
}

@media (max-width: 768px) {
	.containerAlbum {
		padding: 5px;
	}

	.utilities {
		flex-direction: column;
	}

	.search {
		margin-top: 20px;
	}
}
</style>