<template>
	<div class="cointainerForm">
		<h1 class="title"
			:style="{background: `radial-gradient(circle, ${image.mainColor}, transparent)`}">
			{{ title }}
		</h1>
		<hr>
		<form @submit="stopSubmit">
			<div class="areaForm">
				<input type="text" required placeholder="Title" v-model="image.title"
					:style="{ borderColor: image.mainColor }" :disabled="disable">
			</div>
			<div class="areaForm">
				<input type="url" required placeholder="Image(URL)" v-model="image.imageUrl"
					:style="{ borderColor: image.mainColor }" :disabled="disable">
			</div>
			<div v-show="image.imageUrl" class="imgPreview">
				<img :src="image.imageUrl">
			</div>
			<div class="areaForm">
				<label for="mainColor">Main Color</label>
				<input id="mainColor" type="color" v-model="image.mainColor"
					:style="{ borderColor: image.mainColor }" :disabled="disable">
			</div>
			<div class="areaForm">
				<textarea required placeholder="Description" v-model="image.description"
					:style="{ borderColor: image.mainColor }" :disabled="disable"/>
			</div>
			<div class="buttonArea">
				<button class="submitButton" @click="action"
					:style="{ backgroundColor: bgButton }">
				{{ buttonLabel }}
				</button>
				<button class="cancelButton" @click="($router.push('/'))">Cancel</button>
			</div>
		</form>
	</div>
</template>

<script>
import { save, getById, remove } from "../../api/album";

export default {
	name: "AlbumForm",
	data() {
		return {
			image: {
				title: null,
				imageUrl: null,
				mainColor: null,
				description: null
			}
		}
	},
	props: {
		title: { type: String },
		imageId: { type: Number },
		buttonLabel: { type: String },
		bgButton: { type: String },
		disable: { type: Boolean }
	},
	methods: {
		action() {
			if (this.image.title && this.image.imageUrl && this.image.description)
			{
				if (this.disable) {
					remove(this.imageId);
				} else {
					save(this.image);
				}
				this.$router.push('/');
			}
		},
		stopSubmit(e) {
			e.preventDefault();
		}
	},
	mounted() {
		if (this.imageId) {
			getById(this.imageId)
				.then(data => this.image = data);
		}
	}
}
</script>

<style scoped>
.title {
	background: radial-gradient(circle, var(--color1), transparent);
	padding: 5px;
	color: #fff;
	font-size: 2.5rem;
	font-weight: 300;
	text-align: center;
	text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.493);
}

hr {
	margin: 20px 0px;
}

.cointainerForm {
	max-width: 1200px;
	height: 100%;
	margin: auto;
	padding: 25px;
	border-radius: 0px 0px 10px 10px;
	background-color: #fff;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.267);
}

.areaForm {
	margin-bottom: 40px;
}

.areaForm>input,
.areaForm>textarea {
	width: 100%;
	padding: 10px;
	background-color: #fafafa;
	border: 2px solid var(--color1);
	border-radius: 5px;
	box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.075);
	outline: none;
	transition: all 300ms ease;
}

.areaForm>input {
	font-size: 1rem;
	outline: none;
}

.imgPreview>img {
	width: 35%;
	max-height: 400px;
	margin-bottom: 30px;
	border-radius: 10px;
}

.areaForm>input[type="color"] {
	height: 70px;
}

.areaForm>label {
	color: #757575;
}

.areaForm> :nth-child(odd):focus {
	background-color: #fff;
}

.areaForm>textarea {
	height: 200px;
	font-size: 1.2rem;
	resize: none;
}

.submitButton,
.cancelButton {
	margin-right: 20px;
	padding: 13px 25px;
	border-radius: 10px;
	background-color: var(--color3);
	color: #fff;
	font-size: 1rem;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.24);
	cursor: pointer;
	border: none;
	outline: none;
}

.cancelButton {
	background-color: #444;
}

.submitButton:active,
.cancelButton:active {
	opacity: 80%;
}

input:disabled, textarea:disabled {
	border-style: dashed;
	background-color: #f7f4f4;
}
</style>