<template>
	<AlbumForm
		title="Edit image"
		buttonLabel="Edit"
		bgButton="#1360D2"
		:imageId="imageId"
	/>
</template>

<script>
import AlbumForm from "../view/AlbumForm.vue";

export default {
	name: "FormEdit",
	components: {
		AlbumForm
	},
	data() {
		return {
			imageId: +this.$route.params.id
		}
	}
}
</script>
