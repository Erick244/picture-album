<template>
	<div class="containerImage" :style="{borderColor: mainColor}">
		<div class="image">
			<div class="actionsMenu" @click="(viewActions = !viewActions)">
				<i class="fa-solid fa-ellipsis-vertical"></i>
			</div>
			<div class="actions" v-show="viewActions">
				<router-link :to="`/edit/${ImageId}`" class="edit">
					Edit <i class="fa-solid fa-pen-to-square"></i>
				</router-link>
				<hr>
				<router-link :to="`/delete/${ImageId}`" class="del">
					Delete <i class="fa-solid fa-trash"></i>
				</router-link>
				<hr>
				<router-link :to="`/slider/?image=${ImageId}`" class="expand">
					Expand <i class="fa-solid fa-expand"></i>
				</router-link>
			</div>
			<img :src="imageUrl">
		</div>
		<div class="content">
			<h1 class="title" 
				:style="{background: `linear-gradient(to right, ${mainColor}, transparent)`}">
			{{ imageTitle }}
			</h1>
			<hr>
			<p class="description">
				{{ description }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
    name: "AlbumImage",
    data() {
        return {
            styleObject: {
                borderColor: this.mainColor,
                background: `linear-gradient(to right, {{this.maincolor}}, transparent)`
            },
            viewActions: false
        };
    },
    props: {
        mainColor: { type: String },
        imageTitle: { type: String },
        description: { type: String },
        imageUrl: { type: String },
		ImageId: { type: Number }
    }
}
</script>

<style scoped>
.containerImage {
	max-width: 350px;
	margin-bottom: 50px;
	border: 2px solid;
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.411);
}

.image {
	width: 350px;
	position: relative;
}

.image .actionsMenu {
	position: absolute;
	top: 0px;
	right: 15px;
	padding: 5px 10px;
	font-size: 1.1rem;
	cursor: pointer;
	background-color: #ffffffde;
	border-radius: 0px 0px 5px 5px;
}

.image .actions {
	width: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: absolute;
	top: 5px;
	right: 45px;
	background-color: #ffffffde;
	border-radius: 10px;
	padding: 10px;
}

.actions a {
	width: 100%;
	padding: 2px 5px;
	color: #000;
	border-radius: 5px;
	text-decoration: none;
}

.edit > i {
	color: #ffc400;
}

.del > i {
	color: crimson;
}

.expand > i {
	color: #2068ee;
}

.actions a:hover {
	background-color: #ffffffb6;
}

.actions hr {
	width: 100%;
	margin: 5px;
}

.image .actionsMenu:active {
	opacity: 80%;
}

.image > img {
	width: 100%;
	max-height: 350px;
}

.content {
	padding: 0px 15px 15px 15px;
}

.content .title {
	padding: 2px 5px;
	margin: 10px 0px;
	color: #fff;
	border-radius: 10px 0px 0px;
	font-weight: 400;
	text-shadow: 1px -1px 2px rgba(0, 0, 0, 0.493);
}

.content .description {
	line-height: 1.5;
	margin-top: 10px
}
</style>