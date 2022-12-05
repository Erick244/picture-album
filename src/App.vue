<template>
	<div class="layout">
		<AlbumHeaderVue />
		<AlbumMainVue />
		<AlbumFooterVue />
	</div>
</template>

<script>
import AlbumFooterVue from './components/template/AlbumFooter.vue';
import AlbumHeaderVue from './components/template/AlbumHeader.vue';
import AlbumMainVue from './components/template/AlbumMain.vue';

export default {
	name: "App",
	components: {
		AlbumFooterVue,
		AlbumHeaderVue,
		AlbumMainVue
	}
}

</script>

<style>
:root {
	--color1: #ffa601;
	--color2: #ad7204;
	--color3: #ffb325;
}

.layout {
	height: 100vh;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 120px 1fr 0fr;
	grid-template-areas: 
	'header'
	'main'
	'footer';
}

.header {
	grid-area: header;
}

.main {
	grid-area: main;
}

.footer {
	grid-area: footer;
}
</style>
