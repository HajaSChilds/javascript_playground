class Artist {
    constructor({name, talent}){
        this.name = name;
        this.talent = talent;
    }

    announceArtist(){
        console.log(`Welcome ${this.name} to the stage!`)
    }

    static soloPerformance(artist){
        return(artist.talent === "sing")
    }
}

const beyonce = new Artist({name: 'Beyonce Knowles', talent: 'sing'});
const kendrick = new Artist({name: 'Kendrick Lamar', talent: 'rap'});

beyonce.announceArtist();
kendrick.announceArtist();

const well1 = Artist.soloPerformance(kendrick);
const well2 = Artist.soloPerformance(beyonce);

console.log(`Will ${beyonce.name} be singing tonight? : ${well2}`);
console.log(`Will ${kendrick.name} be singing tonight? ${well1} `);