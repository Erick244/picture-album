<template>
	<header class="header">
		<div class="logo">
			<router-link to="/">
				<h1>
					Album <i class="fa-solid fa-images"></i>
				</h1>
			</router-link>
		</div>
	</header>
</template>

<script>
export default {
	name: "AlbumHeader"
}
</script>

<style scoped>
.header {
	display: flex;
	justify-content: center;
	align-items: center;
	background: linear-gradient(to right, var(--color1), #f7bf58);
	box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.301);
	z-index: 1;
}

.logo a {
	color: #fff;
	text-decoration: none;
}

.logo h1 {
	text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.521);
	font-weight: 300;
	font-size: 2.5rem;
}
</style>