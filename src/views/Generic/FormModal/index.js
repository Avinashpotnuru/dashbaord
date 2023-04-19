import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Form,
  Button,
} from "reactstrap";
import { useForm } from "react-hook-form";
import {
  AsyncSelectInput,
  CustomInput,
  DateInput,
  EmailInput,
  NumberInput,
  OptionsInput,
  TextInput,
  TimeInput,
} from "./AllInputs/index";
import { toast } from "react-toastify";
import { Children, useEffect } from "react";

// const inputFields = [
//   {
//     id: 1,
//     type: "text",
//     fieldTitle: "User Name",
//     fieldName: "name",
//     required: true,
//     placeholder: "user name",
//   },
//   {
//     id: 2,
//     type: "options",
//     fieldTitle: "categories",
//     fieldName: "categories",
//     options: [
//       {
//         id: 1,
//         title: "Gold",
//         value: "gold",
//       },
//     ],
//   },

//   {
//     id: 3,
//     type: "select",
//     fieldTitle: "locations",
//     fieldName: "location",
//     searchHook: useGetAllLocationsQuery,
//     searchLabel: (val) => val.title,
//     searchValue: val => val.id,
//   }
// ];

const FormModal = ({
  isOpen,
  formTitle,
  buttonName,
  toggler,
  inputFields,
  postHook,
  customFormat,
  slug,
  successToast,
  errorToast,
  autoFill,
  autoFillData,
  children,
}) => {
  const [post] = postHook();

  const onSubmit = (val) => {
    let data = {};

    if (customFormat) {
      if (slug) {
        data.slug = slug;
        data.data = { ...customFormat(val) };
      } else {
        data = { ...customFormat(val) };
      }
    } else {
      if (slug) {
        data.slug = slug;
        data.data = normalizeSelectInput(val);
      } else {
        data = normalizeSelectInput(val);
      }
    }

    post(data).then((res) => {
      if (res.data) {
        toast.success(successToast);
        reset();
      }

      if (res.error) {
        if (errorToast) {
          toast.error(errorToast);
        } else {
          toast.error(JSON.stringify(res.error.data));
        }
      }

      toggler();
    });
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
  } = useForm();

  useEffect(() => {
    if (isOpen && autoFill && autoFillData) {
      const keys = Object.keys(autoFillData);

      keys.forEach((k) => {
        setValue(k, autoFillData[k]);
      });
    }
  }, [autoFill, autoFillData, isOpen]);

  return (
    <Modal isOpen={isOpen} toggle={toggler} className="modal-dialog-centered">
      <ModalHeader toggle={toggler}>{formTitle}</ModalHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ModalBody>
          {inputFields?.map((i) => {
            return (
              <ChooseInput
                key={i.id}
                control={control}
                errors={errors}
                {...i}
              />
            );
          })}
          {children}
        </ModalBody>
        <ModalFooter>
          <Button>{buttonName}</Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

function ChooseInput(props) {
  switch (props.type) {
    case "text":
      return <TextInput {...props} />;

    case "number":
      return <NumberInput {...props} />;

    case "options":
      return <OptionsInput {...props} />;

    case "email":
      return <EmailInput {...props} />;

    case "select":
      return <AsyncSelectInput {...props} />;

    case "date":
      return <DateInput {...props} />;

    case "time":
      return <TimeInput {...props} />;

    case "custom":
      return <CustomInput {...props} />;
    default:
      return null;
  }
}

function normalizeSelectInput(values) {
  let data = { ...values };

  const keys = Object.keys(values);

  keys.forEach((k) => {
    if (Array.isArray(values[k])) {
      data[k] = values[k].map((k) => k.value);

      return;
    }

    if (typeof values[k] === "object") {
      data[k] = values[k].value;
    }
  });

  return data;
}

export default FormModal;
