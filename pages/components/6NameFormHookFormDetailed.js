import {useForm} from 'react-hook-form'
import { useEffect } from 'react'

export default function NameFormHookFormDetailed() {

    // register: for taking each object property on included in the <input> field for TODO or update
    // handleSubmit: to pass the object into another function that'll console.log() the data
    // setValue: to set the default value of the object
    // watch: it's to watch the property of the user while typing in the field, which in our case we used it in fullName field
    const {register, handleSubmit, setValue, watch} = useForm({
        defaultValues: {
            fullName: "",
            address: "",
            campus: "",
            program: [],
            parking: "",
            active: false
        },
    });

    // Here, we included a watch property at line 10 in useForm() field. This will help the user see its typing fullName in <input> field
    //which we included on line 56
    const watchUserName = watch("fullName");

    useEffect(() => {
        // here this data{} object will be the default value
        let data = {
            fullName: "Homer Simpson",
            address: "123 Main St, Springfield U.S.A",
            campus: "newnham",
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
        console.log("TODO, submit this to an API endpoint");
        console.log(JSON.stringify(data));
        console.log(data);
    }


    return (
        <>
            <h3>6.NameFormHookFormDetailed</h3>

            <form onSubmit={handleSubmit(submitForm)}>
                Full Name: <br />
                {watchUserName} <br />
                <input {...register("fullName")} ></input> <br /><br />

                Address: <br />
                <textarea {...register("address")}></textarea> <br /><br />

                Campus: <br />
                <select {...register("campus")}>
                    <option value="king">King</option>
                    <option value="satY">Seneca ar York</option>
                    <option value="newnham">Newnham</option>
                    <option value="markham">Markham</option>
                </select> <br /><br />

                Program: <br />
                <select multiple {...register("program")}>
                    <option value="DAD">Data Application Developer</option>
                    <option value="CPA">Computer Programming &amp; Analysis</option>
                    <option value="CPP">Data Application Developer</option>
                    <option value="DSA">Data Application Developer</option>
                </select> <br /><br />

                Parking: <br />
                <input type="radio" value="daily" {...register("parking")}/> Daily <br />
                <input type="radio" value="semester" {...register("parking")} /> Semester<br />
                <input type="radio" value="year" {...register("parking")}/> Academic Year <br /><br />

                Active: <br />
                <input type="checkbox" {...register("active")} /> Currently Active <br /><br />

                <button type="submit">UpdateUser</button>

            </form>
        </>
    )
}