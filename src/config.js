
const DEV_MODE = 1
const PRODUCT_MODE = 2
const CURRENT_MODE = DEV_MODE

class Config {
    constructor() {
        this.config = {}
        this.configReady = false;

        if(CURRENT_MODE===DEV_MODE){            
            this.SERVICE_API_URL = "http://localhost:8000/"
            this.BACKEND_FILE_URL= "http://localhost:8000/"
        }
        else if(CURRENT_MODE===PRODUCT_MODE){
            this.SERVICE_API_URL = ""
            this.BACKEND_FILE_URL= ""
        }
        else{

        }
    }
}

export default (new Config());
