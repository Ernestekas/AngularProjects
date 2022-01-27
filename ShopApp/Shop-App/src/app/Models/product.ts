export class Product {
    private Id: number = 0;
    private Name: string = "";
    private ShopId: number = 0;
    private ShopName: string = "";
    private Price: number = 0;

    constructor(Id: number, Name: string, ShopId: number, ShopName: string, Price: number){
        this.Id = Id;
        this.Name = Name;
        this.ShopId = ShopId;
        this.ShopName = ShopName;
        this.Price = Price;
    }
}
