import BasicFrom from "./components/1BasicNameForm";
import NameFormUseState from "./components/2NameFormUseState"
import NameFormUseEffect from "./components/3NameFormUseEffect";
import NameFormHookForm from "./components/4NameFormHookForm";

export default function Home() {
  return (
    <>
      <BasicFrom /> <br />
      <NameFormUseState /> <br />
      <NameFormUseEffect /> <br />  
      <NameFormHookForm /> <br />
    </>
  )
}
