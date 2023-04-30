import {useForm} from 'react-hook-form';

export default function NameFormHookForm() {

    const {register, handleSubmit} = useForm({
        defaultValues: {
            fullName: 'Homer Simpson',
        },
    });

    function submitForm(data) {
        console.log(`form submitted - userName: ${data.fullName}`); // here will target the value the user entered which will be userName
        //console.log(data);  // here will bring the entire prototype of the data. Basically taking the JSON data and push it to API
    };

    return (
        <>
            <h3>4.NameFormHookForm</h3>

            <form onSubmit={handleSubmit(submitForm)}>
                fullName:<br />
                <input type="text" {...register('fullName')}></input> <br /><br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}