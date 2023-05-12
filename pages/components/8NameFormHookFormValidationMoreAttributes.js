import { useEffect } from "react"
import { useForm } from "react-hook-form"

export default function NameFormHookFormValidationMoreAttributes() {

    const { register, handleSubmit, setValue, watch, formState: { errors }} = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            age: 0,
        },
    });

    const watchUserName = watch(["firstName", "lastName"]);

    useEffect(() => {
        setValue("firstName", "Homer");
        setValue("lastName", "Simpson");
        setValue("age", 42);
    }, []);
    

    function submitForm(data) {
        console.log(data);
    };


    return (
        <>
            <h3>8.NameFormHookFormValidationMoreAttributes</h3>
            <form onSubmit={handleSubmit(submitForm)}>

                {/* the inputError we've set it in the globals.css and gave it red color. In this case when error occurs, the letter will turn red */}
                <span className={errors.firstName && "inputError"}>First Name: </span> <br />
                {watchUserName} <br />
                <input {...register("firstName", { required: true, minLength: 2, maxLength: 20})}></input> <br />
                { errors.firstName?.type === 'required' && <span>First Name is Required</span>}
                { errors.firstName?.type === 'minLength' && <span>Name must be over 2 words! Come on!!</span>}
                { errors.firstName?.type === 'maxLength' && <span>Name must be less then 20 words! Are you newspaper or what?</span>} <br /> <br />

                <span className={errors.lastName && "inputError"}>Last Name:</span> <br />
                {watchUserName} <br />
                <input {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })} /><br />
                { errors.lastName?.type === 'required' && <span>Last Name is Required</span>}
                { errors.lastName?.type === "pattern" && <span>Last Name must include characters only!!</span>} <br /><br />

                Age: <br />
                {/* onlyEven it's a function that we've created inside the input */}
                <input type="number" {...register("age", { min: 18, max: 99, validate: { onlyEven: v => v % 2 == 0 } })}></input> <br />
                { errors.age?.type === "onlyEven" && <span>Only Even age Values Accepted :S</span>}

                <br />
                {/* if there are any error, the button will disappear */}
                <button type="submit" disabled={Object.keys(errors).length > 0}>Update User</button>
            </form>
        </>
    )
}