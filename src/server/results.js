export default class Server{_apiBase = 'http://localhost:3000';
    async getResource(){
        return await res.json();
    }
    async getMenuItems(){
        return await this.getResource(`/menu/`)
    }
 }