var Serie = /** @class */ (function () {
    function Serie(serieNumber, completeName, producerName, numberOfSeasons, shortDescription, serieLink, seriePic) {
        this.num = serieNumber;
        this.name = completeName;
        this.producer = producerName;
        this.seasons = numberOfSeasons;
        this.description = shortDescription;
        this.link = serieLink;
        this.image = seriePic;
    }
    return Serie;
}());
export { Serie };
