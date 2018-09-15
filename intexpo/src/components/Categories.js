import React from 'react';
import '../style.css';
import CategoryButton from "./CategoryButton";

class Categories extends React.Component {
    constructor(props){
        super(props);

        //One state for each image, sound and text.
        //listToRandomizer is the list that will be given to the randomizer, which creates combinations
        //Initially the list have the first option in each category
        this.state = {
            image : "",
            sound : "",
            text : "",
            listToRandomizer : ["Abstrakt", "Instrumenter", "Språk"],
        };

        this.setImage = this.setImage.bind(this);
        this.setSound = this.setSound.bind(this);
        this.setText = this.setText.bind(this);
    }

    callRandomizer(){
        //SEND NOE TIL RANDOMIZER HER
    }

    //Functions to set the state of image, sound and text
    //The parameters are being sent from CategoryButton.js
    setImage(chosenCategory){
        this.state.image = chosenCategory;
        this.state.listToRandomizer[0] = chosenCategory;
        alert(this.state.listToRandomizer)
    }

    setSound(chosenCategory){
        this.state.sound = chosenCategory;
        this.state.listToRandomizer[1] = chosenCategory;
        alert(this.state.listToRandomizer)
    }

    setText(chosenCategory){
        this.state.text = chosenCategory;
        this.state.listToRandomizer[2] = chosenCategory;
        alert(this.state.listToRandomizer)

    }

    render(){
        return(
            <React.Fragment>
                {/*Adding three CategoryButton components
                   Each button has its own function that are being passed from Categories to CategoryButton
                   Also setting props for CategoryButton*/}
                <CategoryButton setImage = {this.setImage} category1Name="Abstrakt" category2Name="Dyr" category3Name="Biler" categoryType="Bilder"/>
                <CategoryButton setSound = {this.setSound} category1Name="Intstrumenter" category2Name="Musikk" category3Name="Vær" categoryType="Lyd"/>
                <CategoryButton setText = {this.setText} category1Name="Språk" category2Name="One-liners" category3Name="Trump-quotes" categoryType="Tekst"/>
            </React.Fragment>
        )
    }
}

export default Categories;