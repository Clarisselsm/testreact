import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Drink = () => {
    const drinkURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

    const [ingredients, setIngredients] = useState([]);
    const [drink, setDrink] = useState(null);
    const [drinkName, setDrinkName] = useState('');
    const [instruction, setInstruction] = useState('');

    const readIngredient = (drinkDetails) => {
        setDrinkName(drinkDetails.strDrink);
        setInstruction(drinkDetails.strInstructions);
        const newIngredients = [];
        for (let i = 1; i <= 15; i++) {
            const ing = `strIngredient${i}`;
            const measure = `strMeasure${i}`;
            if (drinkDetails[ing]) {
                newIngredients.push({ ing: drinkDetails[ing], amt: drinkDetails[measure] || '' });
            }
        }
        setIngredients(newIngredients);
    }

    const arrayDataItems = ingredients.map((item) => (
        <li key={item.ing}>
            {item.ing} {item.amt && `- ${item.amt}`}
        </li>
    ));

    const randomDrink = async () => {
        try {
            const response = await axios.get(drinkURL);
            const drinkData = response.data.drinks[0];
            setDrink(drinkData);
            readIngredient(drinkData);
        } catch (error) {
            console.error("Error fetching drink:", error);
        }
    }

    useEffect(() => {
        randomDrink();
    }, [])

    if (!drink) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {/* About Section */}
            <section id="about" className="about section">
                {/* Section Title */}
                <div className="container section-title aos-init aos-animate" data-aos="fade-up">
                    <h2>Cocktail of the Day</h2>
                    <p>A well-made cocktail is an invitation to indulge in life's pleasures.</p>
                </div>{/* End Section Title */}

                <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                    <div className="row gy-4 justify-content-center">
                        <div className="col-lg-4">
                            <img src={drink.strDrinkThumb} className="img-fluid" alt={drinkName}/>
                        </div>
                        
                        <div className="col-lg-8 content">
                            <h2>{drinkName}</h2>
                            <div></div>
                            <h4>How to make:</h4>
                            <p className="fst-italic py-3">
                                {instruction}
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <strong>Ingredients:</strong>
                                    <ul>{arrayDataItems}</ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>{/* /About Section */}
        </>
    )
}

export default Drink
