import { useState, useEffect } from 'react'

export default function NameFormUseEffect() {

    const [fullName, setFullName] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setFullName("Homer Simpson");
        }, 1000);
    }, []);

    return (
        <>
            <form>
                <h4>3.NameFormUseEffect</h4>
                Full Name: <br />
                <input type="text" value={fullName} onChange={e => {setFullName(e.target.value)}} name="fullName"/> <br /><br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}