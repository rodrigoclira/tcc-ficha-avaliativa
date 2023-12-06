import { api, csrfcookie } from './Axios'

const endpoint = "/rest/posts/";

export const PostAPI = {

    post: async function (json) {
        const formData = new FormData();
        formData.append('csrfmiddlewaretoken', csrfcookie());
        formData.append('Content-Type', "application/json");
        formData.append("description", "Descrição de Teste");
        formData.append("terms_use", "Termos de Uso")

        console.log(csrfcookie())
        console.log(json)

        const response = await api.request({
            url: endpoint,
            method: "post",
            data: json,
            headers: {
                Csrfmiddlewaretoken: csrfcookie(),
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
                "x-csrftoken": csrfcookie(),
                // 'Accept': '*/*',

            },
            withCredentials: true,
        })

        return response.data;
    },

    get: async function () {
        const response = await api.request({
            url: endpoint,
            method: "GET",
        })
        return response.data;
    },

}