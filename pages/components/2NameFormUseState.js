import { useState } from 'react'

export default function NameFormUseState() {

    const [fullName, setFullName] = useState('Homer Simpson'); // the default name will be "Homer Simpson"

    function submitForm(e) {
        e.preventDefault();
        console.log('Form Submitted');
        console.log('Full name = ' + fullName)
    }

    return (
        <>
            <form onSubmit={submitForm}>
                <h4>2.NameFormUseState</h4>
                Full Name: <br />
                <input type="text" value={fullName} onChange={e => {setFullName(e.target.value)}} name="fullName" /> <br /><br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}