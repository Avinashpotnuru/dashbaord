import { Controller } from "react-hook-form";
import AsyncSelect from "react-select/async";
import { selectThemeColors } from "@utils";
import { useState } from "react";
import { Input } from "reactstrap";

export const AsyncSelectInput = ({
  fieldTitle,
  fieldName,
  searchHook,
  searchLabel,
  searchValue,
  isMulti,
  required,
  control,
  defaultInputValue,
}) => {
  const [selectSearch, setSelectSearch] = useState("");

  const { data: searchHookData } = searchHook({
    search: selectSearch,
    limit: 5,
    offset: 0,
  });

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
      {fieldTitle && <label className="mt-1">{fieldTitle}</label>}
      <Controller
        name={fieldName}
        rules={{ required: required === true ? true : false }}
        control={control}
        render={({ field }) => (
          <AsyncSelect
            {...field}
            isClearable={true}
            className="react-select"
            classNamePrefix="select"
            loadOptions={loadSelectOptions}
            defaultOptions={selectDataSelectFormat}
            theme={selectThemeColors}
            isMulti={isMulti ? isMulti : false}
            defaultInputValue={defaultInputValue}
          />
        )}
      />
    </>
  );
};

export const TextInput = ({
  fieldTitle,
  fieldName,
  placeholder,
  control,
  errors,
  required,
}) => {
  console.log("fieldName: ", fieldName);
  return (
    <>
      {fieldTitle && <label className="mt-1">{fieldTitle}</label>}
      <Controller
        name={fieldName}
        control={control}
        rules={{ required: required === true ? true : false }}
        render={({ field }) => (
          <Input {...field} type={"text"} placeholder={placeholder} />
        )}
      />
    </>
  );
};

export const TextAreaInput = ({
  fieldTitle,
  fieldName,
  placeholder,
  control,
  rows,
  required,
}) => {
  return (
    <>
      {fieldTitle && <label className="mt-1">{fieldTitle}</label>}
      <Controller
        name={fieldName}
        control={control}
        rules={{ required: required === true ? true : false }}
        render={({ field }) => (
          <Input
            {...field}
            type={"textarea"}
            placeholder={placeholder}
            rows={rows ? rows : 5}
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
  defaultValue,
  showDefaultOption,
  isDefaultDisabled,
  control,
  required,
}) => {
  return (
    <>
      {fieldTitle && <label className="mt-1">{fieldTitle}</label>}

      <Controller
        name={fieldName}
        control={control}
        defaultValue={defaultValue ? defaultValue : ""}
        rules={{ required: required === true ? true : false }}
        render={({ field }) => (
          <Input {...field} type={"select"}>
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

export const DateInput = ({
  fieldTitle,
  fieldName,
  placeholder,
  control,
  errors,
  required,
  defaultValue,
}) => {
  return (
    <>
      {fieldTitle && <label className="mt-1">{fieldTitle}</label>}

      <Controller
        name={fieldName}
        control={control}
        rules={{ required: required === true ? true : false }}
        render={({ field }) => <Input {...field} type={"date"} />}
        defaultValue={defaultValue}
      />
    </>
  );
};
