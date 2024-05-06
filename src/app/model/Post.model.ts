export class Post{
    constructor(
        public postID: number,
        public name: string,
        public dp: string,
        public content: string,
        public image:string,
    )
    { 
        this.dp += name + ".png"

    } 


}
