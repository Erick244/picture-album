import axios from "axios"

const baseUrl = "http://localhost:3001/album";

const get = async () => {
	const resp = await axios.get(baseUrl);
	const data = await resp.data;
	return data;
}

const getById = async (id) => {
	const url = `${baseUrl}/${id}`;
	const resp = await axios.get(url);
	const data = resp.data;
	return data;
}

const remove = (id) => {
	const url = `${baseUrl}/${id}`;
	axios.delete(url);
}

const save = (image) => {
	if (image.id) {
		const url = `${baseUrl}/${image.id}`;
		axios.put(url, image);
	} else {
		axios.post(baseUrl, image);
	}
}

export { get, save, getById, remove }