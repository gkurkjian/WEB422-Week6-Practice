import {useForm} from 'react-hook-form'
import { useEffect } from 'react'

export default function NameFormHookFormUseEffect() {

    const { register, handleSubmit, setValue } = useForm({  // as you see here, we added a setValue property and we removed the value in defaultValues on line 8
        defaultValues: {
            fullName: ""
        },
    });

    useEffect(() => {
        setValue("fullName", "Homer Simpson");  // here we added the default value by using the setValue property
    }, []);

    function submitForm(data) {
        console.log(data);
    }

    return (
        <>
            <h3>5.NameFormHookFormUseEffect</h3>

            <form onSubmit={handleSubmit(submitForm)}>
                Full Name: <br />
                <input {...register('fullName')} /> <br /><br />
                <button type="submit">Submit</button>
            </form>
         </>
    )
}