import * as help from "./APIYandex";
import unirest from 'unirest'

unirest
    .get('https://cloud-api.yandex.net/v1/disk?fields=user')
    .header(help.header)
    .then((response) => {
        console.log(response.body)
    })



