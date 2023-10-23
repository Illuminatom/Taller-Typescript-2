export class Serie {
    num: number;
    name: string;
    producer: string;
    seasons: number;
    description: string;
    link: string;
    image: string;
    constructor(serieNumber: number, completeName: string, producerName: string, numberOfSeasons: number, shortDescription: string, serieLink: string, seriePic: string){
        this.num = serieNumber;
        this.name = completeName;
        this.producer = producerName;
        this.seasons = numberOfSeasons;
        this.description = shortDescription;
        this.link = serieLink;
        this.image = seriePic;
    }
}