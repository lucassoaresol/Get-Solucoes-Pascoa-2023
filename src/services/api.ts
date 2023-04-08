import axios from "axios";

export const api = axios.create({
    baseURL: "https://solucoesget.tec.br/api/",
    timeout: 10000,
});
