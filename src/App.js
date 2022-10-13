import {useQuery, gql} from '@apollo/client';
import {useEffect, useState} from "react";
import {Search} from "./components/search";

function App() {

    const [selected, setSelected] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [formObject, setFormObject] = useState({

    });

    useEffect(() => {
        const lastSelected = localStorage.getItem("retailer");
        if (lastSelected) setSelected(lastSelected);
    }, []);

    useEffect(() => {
       console.log(zipCode);
    }, [zipCode]);

    const handleChange = event => {
        localStorage.setItem('retailer', event.target.value);
    }

    const GET_RETAILERS = gql`
        query retailers($zipcode: String!) {
            retailers(zipCode: $zipcode, blacklistedRetailers: [], whitelistedRetailers: []) {
                id
                slug
                shopOnLogoUrl
                logoUrl
                name
                requiresLocation
            }
        }
    `;

    const DisplayRetailers = () => {
        const { loading, error, data } = useQuery(GET_RETAILERS, {
            variables: { zipcode: zipCode.toString() },
        });

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        if (data?.retailers) {
            return (
                <select onChange={handleChange}>
                    <option value="⬇️ Select a retailer ⬇️"> -- Select a retailer--</option>
                    {data.retailers.map(({id, name}) => <option key={id} selected={name === selected} value={name}>{name}</option>)}
                </select>

            );
        } else return "No data";
    }

    return (
        <>
            <DisplayRetailers/>
            <Search setZipCode={setZipCode}/>
        </>
    );
}

export default App;
