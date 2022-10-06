import {useQuery, gql} from '@apollo/client';
import {useEffect, useState} from "react";

function App() {

    const [selected, setSelected] = useState("");

    useEffect(() => {
        const lastSelected = localStorage.getItem("retailer");
        if (lastSelected) setSelected(lastSelected);
    }, []);


    const handleChange = event => {
        localStorage.setItem('retailer', event.target.value);
    }

    const GET_RETAILERS = gql`
        query retailers {
            retailers(zipCode: "11234", blacklistedRetailers: [], whitelistedRetailers: []) {
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
        const {loading, error, data} = useQuery(GET_RETAILERS);

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
        </>
    );
}

export default App;
