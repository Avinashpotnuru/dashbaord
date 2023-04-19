import { Input } from "reactstrap";
import { TextInput } from "../../../../Generic/AllInputs";
import { useForm, Controller } from "react-hook-form";
const SearchEngines = () => {
  const {
    control,

    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <TextInput
        fieldName={"search"}
        placeholder={"enter data"}
        control={control}
        errors={errors}
        showSearch={"true"}
      />
    </div>
  );
};

export default SearchEngines;
