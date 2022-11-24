import axios from "axios";

const CreateAxios = axios.create({ baseURL: "http://localhost:5000" });

export default CreateAxios;
