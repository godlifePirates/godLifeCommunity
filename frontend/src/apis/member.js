import httpClient from "../plugins/httpClient";

export  default {
    getBoardList(){
        return httpClient.get("/board");
    }
}