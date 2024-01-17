import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { dataGalery } from "../../data/dataTools";
import CardGalery from "../CardGalery";

function Galery(){

    let [idValue, setIdValue] = useState("");
    let navigate = useNavigate();

    let datas = dataGalery();

    function handleClick(id){

        setIdValue(idValue = id);
        console.log(idValue);

        redirectionHousingPage(idValue);
        
    };

    function redirectionHousingPage(id){

        navigate(`/housing/${id}`);
        
    }

    return(

        <section>

            <ul className="galery">

                
                {datas.map( (data) =>

                    <li key={data.id}
                    onClick={() => handleClick(data.id)}
                    >

                        <CardGalery
                        title={data.title}
                        cover={data.cover}
                        />

                    </li>
                )}

            </ul>

        </section>

    )

}

export default Galery;