import {useForm} from 'react-hook-form'
import { useEffect } from 'react'

export default function NameFormHookFormDetailed() {

    const {register, handleSubmit, setValue} = useForm({
        defaultValues: {
            fullName: "",
            address: "",
            campus: "",
            program: [],
            parking: "",
            active: false
        },
    });

    useEffect(() => {
        let data = {
            fullName: "Homer Simpson",
            address: "123 Main St, Springfield U.S.A",
            campus: "Newnham",
            program: ["CPA", "CPP"],
            parking: "Semester",
            active: true
        }

        // setting the value on each form field from data{} object using "for in" loop
        for(const prop in data) {
            setValue(prop, data[prop])
        }
    }, []);


    function submitForm(data) {
        console.log(data);
    }
    return (
        <>
            <h3>6.NameFormHookFormDetailed</h3>

            <form onSubmit={handleSubmit(submitForm)}>
                Full Name: <br />
                <input {...register("fullName")} ></input> <br /><br />
                <button type="submit">UpdateUser</button>

            </form>
        </>
    )
}