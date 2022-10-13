export const Search = (props) => {
    const isNumeric = (str) => {
        return !isNaN(str);
    }

    const handleChange = event => {
        const value = event.target.value;
        if (value.length === 5 && isNumeric(value)) {
            props.setZipCode(value);
        }
    }

    return (
        <>
            <label>
                <input
                    type="text"
                    placeholder="Enter Zip Code"
                    onChange={handleChange}
                    minLength={5}
                    maxLength={5}
                    />
            </label>
        </>
    );
}
