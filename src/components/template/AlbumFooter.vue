<template>
	<footer class="footer">
		<a href="https://github.com/Erick244" target="_blank">
			Developed by <span>@Erick244</span> on GitHub <i class="fa-brands fa-github"></i> 
		</a>
	</footer>
</template>

<script>
export default {
	name: "AlbumFooter"
}
</script>

<style scoped>
.footer {
	display: flex;
	justify-content: flex-end;
	background-color: #ccc;
	padding: 30px;
	box-shadow: 0px -3px 7px rgba(0, 0, 0, 0.377);
}

.footer > a {
	color: #000;
	text-decoration: none;
	font-size: 0.9rem;
}

.footer > a:hover {
	text-decoration: underline;
}

.footer a > span {
	color: var(--color2);
	text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.082);
}

@media (max-width: 768px) {
	.footer {
		justify-content: center;
	}
}
</style>