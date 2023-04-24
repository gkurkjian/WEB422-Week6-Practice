export default function BasicNameForm() {

    function submitForm(e) {
        e.preventDefault();  // to not load the page on submit event
        console.log('Form Submitted');
    }
    return (
        <>
            <form onSubmit={submitForm}>
                <h4>1.BasicNameForm</h4>
                Full Name: <br />
                <input type="text" name="fullName"></input>
                <br /><br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}