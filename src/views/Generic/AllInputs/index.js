import { Controller } from "react-hook-form";
import AsyncSelect from "react-select/async";
import { selectThemeColors } from "@utils";
import { useState, useCallback, useMemo } from "react";
import { Input } from "reactstrap";
import { useDropzone } from "react-dropzone";

export const AsyncSelectInput = ({
  fieldTitle,
  fieldName,
  searchHook,
  searchLabel,
  searchValue,
  isMulti,
  required,
  control,
  additionalParams,
  defaultInputValue,
  onInputChange,
  isDisabled,
}) => {
  const [selectSearch, setSelectSearch] = useState("");

  const { data: searchHookData } = searchHook(
    additionalParams
      ? {
          search: selectSearch,
          limit: 5,
          offset: 0,
          ...additionalParams,
        }
      : {
          search: selectSearch,
          limit: 5,
          offset: 0,
        }
  );

  const selectDataSelectFormat = searchHookData?.results.map((b) => {
    return {
      value: searchValue(b),
      label: searchLabel(b),
    };
  });

  const loadSelectOptions = (values, callBack) => {
    setSelectSearch(values);
    callBack(selectDataSelectFormat);
  };

  return (
    <>
      <label className="mt-1">{fieldTitle}</label>
      <Controller
        styles={{ overflowY: "auto" }}
        name={fieldName}
        rules={{ required: required === true ? true : false }}
        control={control}
        render={({ field }) => (
          <AsyncSelect
            {...field}
            isClearable={true}
            className="react-select "
            classNamePrefix="select"
            loadOptions={loadSelectOptions}
            defaultOptions={selectDataSelectFormat}
            theme={selectThemeColors}
            isMulti={isMulti ? isMulti : false}
            defaultInputValue={defaultInputValue}
            onInputChange={onInputChange}
            isDisabled={isDisabled}
          />
        )}
      />
    </>
  );
};

export const TextInput = ({
  fieldTitle,
  fieldName,
  required,
  placeholder,
  control,
  errors,
  defaultValue,
}) => {
  return (
    <>
      <label className="mt-1">{fieldTitle}</label>
      <Controller
        name={fieldName}
        defaultValue={defaultValue ? defaultValue : ""}
        control={control}
        rules={{ required: required === true ? true : false }}
        render={({ field }) => (
          <Input
            {...field}
            type={"text"}
            placeholder={placeholder}
            invalid={errors[fieldName] && true}
          />
        )}
      />
    </>
  );
};

export const EmailInput = ({
  fieldTitle,
  fieldName,
  required,
  placeholder,
  control,
  errors,
  defaultValue,
}) => {
  return (
    <>
      <label className="mt-1">{fieldTitle}</label>
      <Controller
        name={fieldName}
        control={control}
        defaultValue={defaultValue ? defaultValue : ""}
        rules={{ required: required === true ? true : false }}
        render={({ field }) => (
          <Input
            {...field}
            type={"email"}
            placeholder={placeholder}
            invalid={errors[fieldName] && true}
          />
        )}
      />
    </>
  );
};

export const NumberInput = ({
  fieldTitle,
  fieldName,
  required,
  placeholder,
  control,
  errors,
  hideLabel,
  defaultValue,
}) => {
  return (
    <>
      {!hideLabel && <label className="mt-1">{fieldTitle}</label>}

      <Controller
        name={fieldName}
        control={control}
        rules={{ required: required === true ? true : false }}
        defaultValue={defaultValue ? defaultValue : ""}
        render={({ field }) => (
          <Input
            {...field}
            type="number"
            placeholder={placeholder}
            invalid={errors[fieldName] && true}
          />
        )}
      />
    </>
  );
};

export const PhoneNumberInput = ({
  fieldTitle,
  fieldName,
  required,
  placeholder,
  control,
  errors,
  hideLabel,
  defaultValue,
}) => {
  return (
    <>
      {!hideLabel && <label className="mt-1">{fieldTitle}</label>}
      <Controller
        name={fieldName}
        control={control}
        rules={{
          required: required === true ? true : false,
          pattern: /^[0-9+-]+$/,
          minLength: 10,
          maxLength: 10,
        }}
        defaultValue={defaultValue ? defaultValue : ""}
        render={({ field }) => (
          <Input
            {...field}
            type={"number"}
            placeholder={placeholder}
            invalid={errors[fieldName] && true}
          />
        )}
      />
    </>
  );
};

export const OptionsInput = ({
  fieldTitle,
  fieldName,
  options,
  required,
  defaultValue,
  showDefaultOption,
  isDefaultDisabled,
  control,
  errors,
}) => {
  return (
    <>
      <label className="mt-1">{fieldTitle}</label>
      <Controller
        name={fieldName}
        control={control}
        rules={{ required: required === true ? true : false }}
        defaultValue={defaultValue ? defaultValue : ""}
        render={({ field }) => (
          <Input {...field} type={"select"} invalid={errors[fieldName] && true}>
            <>
              {showDefaultOption && (
                <option
                  value={""}
                  disabled={isDefaultDisabled ? isDefaultDisabled : true}
                >
                  ------------
                </option>
              )}
              {options?.map((o) => {
                return (
                  <option key={o.id} value={o.value}>
                    {o.title}
                  </option>
                );
              })}
            </>
          </Input>
        )}
      />
    </>
  );
};

export const FileInput = ({ handleFile }) => {
  const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
  };

  const activeStyle = {
    borderColor: "#2196f3",
  };

  const acceptStyle = {
    borderColor: "#00e676",
  };

  const rejectStyle = {
    borderColor: "#ff1744",
  };

  // const onDrop = useCallback((acceptedFiles) => {
  //   handleFile(acceptedFiles);
  // }, []);

  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop, maxFiles: 1, accept: "image/jpeg,image/png" });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive && activeStyle),
      ...(isDragAccept && acceptStyle),
      ...(isDragReject && rejectStyle),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone", style })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop your Image file here, or click to select a file</p>
      </div>
      <aside>
        <h4 className="mt-1">File</h4>
        <ul>
          {acceptedFiles.map((file, idx) => (
            <li key={file.path} key={idx}>
              {file.path} - {file.size} bytes
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
};

export const TextAreaInput = ({
  fieldTitle,
  fieldName,
  required,
  placeholder,
  control,
  errors,
  defaultValue,
}) => {
  return (
    <>
      <label className="mt-1">{fieldTitle}</label>
      <Controller
        name={fieldName}
        control={control}
        rules={{ required: required === true ? true : false }}
        defaultValue={defaultValue ? defaultValue : ""}
        render={({ field }) => (
          <Input
            {...field}
            type={"textarea"}
            placeholder={placeholder}
            invalid={errors[fieldName] && true}
          />
        )}
      />
    </>
  );
};

export const DateInput = ({
  fieldTitle,
  fieldName,
  required,
  control,
  errors,
  defaultValue,
  min,
}) => {
  return (
    <>
      <label className="mt-1">{fieldTitle}</label>
      <Controller
        name={fieldName}
        control={control}
        defaultValue={defaultValue ? defaultValue : ""}
        rules={{ required: required === true ? true : false }}
        render={({ field }) => (
          <Input
            {...field}
            type={"date"}
            invalid={errors[fieldName] && true}
            min={min}
          />
        )}
      />
    </>
  );
};

export const DateTimeInput = ({
  fieldTitle,
  fieldName,
  required,
  control,
  errors,
  defaultValue,
}) => {
  return (
    <>
      <label className="mt-1">{fieldTitle}</label>
      <Controller
        name={fieldName}
        control={control}
        defaultValue={defaultValue ? defaultValue : ""}
        rules={{ required: required === true ? true : false }}
        render={({ field }) => (
          <Input
            {...field}
            type={"datetime-local"}
            invalid={errors[fieldName] && true}
          />
        )}
      />
    </>
  );
};

export const CustomInput = ({ control, errors, Input, inputProps }) => {
  return <Input control={control} errors={errors} {...inputProps} />;
};
