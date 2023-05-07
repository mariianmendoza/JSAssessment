/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const MYNFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_artist, _age, _song, _animal) {
    const NFT = {
        "artist": _artist,
        "age": _age,
        "song": _song,
        "animal": _animal,
    }
    MYNFTs.push(NFT);
    console.log("Binded: " + _artist);
}       
                      
// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
 for(let i = 0; i < MYNFTs.length; i++) {
    console.log("\nID: \t\t\t" + (i +1));
    console.log("Artist: \t" + MYNFTs[i].artist);
    console.log("Age: \t\t\t" + MYNFTs[i].age);
    console.log("Song: \t\t" + MYNFTs[i].song);
    console.log("Animal: \t" + MYNFTs[i].animal);
 }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
 console.log("\n " + MYNFTs.length);
}

// call your functions below this line
mintNFT("Taylor Swift", "33", "Afterglow", "Cat");
mintNFT("Ariana Grande", "29", "everytime", "Dog");
mintNFT("Hanni", "18", "Attention", "Bunny");
mintNFT("Luke Hemmings", "26", "Easier", "Dog");
mintNFT("Olivia Rodrigo", "20", "Happier", "Bird");
listNFTs();
getTotalSupply();
