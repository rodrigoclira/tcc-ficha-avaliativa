import { api } from './Axios'

const endpoint = "/rest/users/";

export const UserAPI = {

    get: async function () {
        const response = await api.request({
            url: endpoint,
            method: "GET",
        })
        return response.data;
    },

    getId: async function (id) {
        const response = await api.request({
            url: endpoint + '/' + id,
            method: "GET",
        })
        return response.data;
    },

}