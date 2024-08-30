import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [instruction, setInstruction] = useState([]);
    const [drink, setDrink] = useState(null);
    const searchURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';

    const searchDrink = async () => {
        try {
            const response = await axios.get(searchURL, {
                params: { s: name }
            });
            if (response.data.drinks) {
                setDrink(response.data.drinks[0]);
                readIngredient(response.data.drinks[0]);
            } else {
                setDrink(null);
                setIngredients([]);
                setInstruction('');
            }
        } catch (error) {
            console.error("Error searching for drink:", error);
            setDrink(null);
            setIngredients([]);
            setInstruction('');
        }
    }

    const readIngredient = (drinkDetails) => {
        setName(drinkDetails.strDrink);
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

    const handleSearch = (e) => {
        e.preventDefault();
        searchDrink(name)
    }

    const handleChange =(event) => {
        setName(event.target.value)
    }

    const arrayDataItems = ingredients.map((item) => (
        <li key={item.ing}>
            {item.ing} {item.amt && `- ${item.amt}`}
        </li>
    ));

    return (
        <div>
            <section id="search" className="contact section">

                {/* Section Title */}
                <div className="container section-title aos-init aos-animate" data-aos="fade-up">
                    <h2>Search Recipes</h2>
                    <p>Cocktails are the perfect blend of craftsmanship and enjoyment</p>
                </div>{/* End Section Title */}

                <div className="container aos-init aos-animate">

                    <div className="row gy-4">

                        <div className="col-lg-5">

                            <div className="info-wrap">
                                <div className="info-item d-flex" >
                                    
                                    <div>
                                        <h2><strong>{name}</strong></h2>
                                        <h3>How to make:</h3>
                                        <p>{instruction}</p>
                                    </div>
                                </div>{/* End Info Item */}

                                <div className="info-item d-flex" >
                                    
                                    <div>
                                        <h3>Ingredients</h3>
                                        <ul>{arrayDataItems}</ul>
                                    </div>
                                </div>{/* End Info Item */}


                                {drink && drink.strDrinkThumb ? (
                                    <img src={drink.strDrinkThumb} className="img-fluid" alt="Drink" />
                                ) : (
                                    <img src="/assets/img/cocktails.jpg" className="img-fluid" alt="Default cocktail" />
                                )}
                               {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" frameborder="0" style="border:0; width: 100%; height: 270px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <form action="forms/contact.php" method="post" className="php-email-form aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                <div className="row gy-4">

                                    <div className="col-md-12">
                                        <label htmlFor="name-field" className="pb-2 d-flex justify-content-center">Find your cocktail</label>
                                        <input type="text" name="name" id="name-field" className="form-control" onChange={handleChange} required=""/>
                                    </div>

                                    <div className="col-md-12 text-center">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>

                                        <button type="submit" onClick={handleSearch}>Search Recipe</button>
                                    </div>

                                </div>
                            </form>
                        </div>{/* End Contact Form */}

                    </div>

                </div>

            </section>{/* /Contact Section */}
        </div>
    )
}

export default Search
