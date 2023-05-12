import BasicFrom from "./components/1BasicNameForm";
import NameFormUseState from "./components/2NameFormUseState"
import NameFormUseEffect from "./components/3NameFormUseEffect";
import NameFormHookForm from "./components/4NameFormHookForm";
import NameFormHookFormUseEffect from "./components/5NameFormHookFormUseEffect";
import NameFormHookFormDetailed from "./components/6NameFormHookFormDetailed";
import NameFormHookFormValidation from "./components/7NameFormHookFormValidation";
import NameFormHookFormValidationMoreAttributes from "./components/8NameFormHookFormValidationMoreAttributes";

export default function Home() {
  return (
    <>
      <BasicFrom /> <br />
      <NameFormUseState /> <br />
      <NameFormUseEffect /> <br />  
      <NameFormHookForm /> <br />
      <NameFormHookFormUseEffect /> <br />
      <NameFormHookFormDetailed /> <br />
      <NameFormHookFormValidation /> <br />
      <NameFormHookFormValidationMoreAttributes /> <br />
    </>
  )
}
