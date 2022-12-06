import { createRouter, createWebHistory } from 'vue-router';
import PictureAlbum from "../components/view/PictureAlbum";
import FormCreate from "../components/forms/FormCreate";
import FormEdit from "../components/forms/FormEdit";
import FormDelete from "../components/forms/FormDelete";
import AlbumSlider from "../components/view/AlbumSlider";

const routes = [
	{
		path: '/',
		name: 'PictureAlbum',
		component: PictureAlbum
	},
	{
		path: '/newImage',
		name: "newImage",
		component: FormCreate
	},
	{
		path: '/edit/:id',
		name: "Edit",
		component: FormEdit
	},
	{
		path: '/delete/:id',
		name: "Delete",
		component: FormDelete
	},
	{
		path: '/slider',
		name: "Slider",
		component: AlbumSlider
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
