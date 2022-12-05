<template>
	<AlbumForm
		title="Delete image"
		buttonLabel="Delete"
		bgButton="#dc143c"
		:imageId="imageId"
		:disable="true"
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
