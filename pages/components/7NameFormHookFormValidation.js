import { useEffect } from "react";
import { useForm } from "react-hook-form"

export default function NameFormHookFormValidation() {

    const {register, handleSubmit, setValue, watch, formState: { errors }} = useForm({
        defaultValues: {
            fullName: "",
        },
    });

    const watchUserName = watch("fullName");

    useEffect(() => {
        setValue("fullName", "Homer Simpson")
    }, []);

    function submitForm(data) {
        console.log(data);
    }

    return (
        <>
            <h3>7.NameFormHookFormValidation</h3>

            <form onSubmit={handleSubmit(submitForm)}>
                Full Name: <br />
                {watchUserName} <br />
                <input {...register("fullName", { required: true, minLength: 2 })}></input>
                { errors.fullName?.type === "required" && <div>Name must included!</div>}
                { errors.fullName?.type === "minLength" && <div>Name must be over 2 words!</div>}

                <br /><br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}