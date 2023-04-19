import { Delete, Edit, Trash2 } from "react-feather";

import { OptionsInput, TextInput } from "../../../../Generic/AllInputs";

import { useForm, Controller } from "react-hook-form";

const UserSpecific = () => {
  const {
    control,

    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="col-12 overflow-auto">
      <h4 className="my-2">User specific data</h4>

      <table
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        className=" w-100"
      >
        <thead>
          <tr style={{ backgroundColor: "#f3f2f7" }} className="border solid">
            <th className="p-2">TITLE</th>

            <th>DESCRIPTION</th>

            <th>DATE CREATED</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border solid">
            <td className=" p-2">KAP BOARDED TO GOOTY</td>

            <td>KAP BOARDED TO GOOTY</td>

            <td>12.43 PM</td>
          </tr>
          <tr className="border solid">
            <td className=" p-2"></td>
            <td></td>

            <td></td>
          </tr>
          <tr className="border solid">
            <td className=" p-2"></td>

            <td></td>

            <td></td>
          </tr>
          <tr className="border solid">
            <td className=" p-2"></td>

            <td></td>

            <td></td>
          </tr>
          <tr className="border solid">
            <td className=" p-2"></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="border solid">
            <td className=" p-2"></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <h4 className="my-3">User specific Locations</h4>
      <div className="d-flex align-items-center my-2 col-6 ">
        <p className="mx-2">show</p>
        <div className="col-2 my-auto mx-2 mb-2">
          <TextInput
            control={control}
            placeholder={"10"}
            errors={errors}
            fieldName={"options"}
          />
        </div>

        <p>Entries</p>
      </div>
      <table
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        className=" w-100"
      >
        <thead>
          <tr style={{ backgroundColor: "#f3f2f7" }} className="border solid">
            <th className="p-2">TITLE</th>
            <th>DESCRIPTION</th>
            <th>DATE CREATED</th>
            <th>ACTION</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border solid">
            <td className=" p-2"> GOOTY GARAGE</td>
            <td>GOOTY GARAGE WORK SHOP</td>
            <td>120</td>
            <td>
              <Edit />
            </td>
            <td>
              <Trash2 />
            </td>
          </tr>
          <tr className="border solid">
            <td className=" p-2"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="border solid">
            <td className=" p-2"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="border solid">
            <td className=" p-2"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="border solid">
            <td className=" p-2"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="border solid">
            <td className=" p-2"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserSpecific;
