class Env{
    constructor(){
        
    }

    getCSSImage(img){
        return `url(${img})`
    }
}


const _env = new Env();

export default _env;