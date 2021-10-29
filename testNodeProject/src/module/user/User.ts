export class User{
    private readonly name: String;

    constructor(name: String) {
        this.name = name;
    }

    getName () {
        return this.name;
    };
}


