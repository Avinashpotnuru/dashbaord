// ** React Imports
import { useContext, Fragment } from "react";
import { Link, useHistory } from "react-router-dom";

// ** Custom Hooks
import { useSkin } from "@hooks/useSkin";
import useJwt from "@src/auth/jwt/useJwt";

// ** Third Party Components
import { useDispatch } from "react-redux";
import { toast, Slide } from "react-toastify";
import { useForm, Controller } from "react-hook-form";
import {
  Facebook,
  Twitter,
  Mail,
  GitHub,
  HelpCircle,
  Coffee,
} from "react-feather";

// ** Actions
import { handleLogin } from "@store/authentication";

// ** Context
import { AbilityContext } from "@src/utility/context/Can";

// ** Custom Components
import Avatar from "@components/avatar";
import InputPasswordToggle from "@components/input-password-toggle";

// ** Utils
import { getHomeRouteForLoggedInUser } from "@utils";

// ** Reactstrap Imports
import {
  Row,
  Col,
  Form,
  Input,
  Label,
  Alert,
  Button,
  CardText,
  CardTitle,
  UncontrolledTooltip,
} from "reactstrap";

//** images */
// import appIcon from "@src/assets/my-images/app-icon.svg";
// import bgImage from "@src/assets/my-images/login-bg.svg";
// import appBlurredImage from "@src/assets/my-images/blurred-app-image.svg";

// ** Styles
import "@styles/react/pages/page-authentication.scss";

const ToastContent = ({ name, role }) => (
  <Fragment>
    <div className="toastify-header">
      <div className="title-wrapper">
        <Avatar size="sm" color="success" icon={<Coffee size={12} />} />
        <h6 className="toast-title fw-bold">Welcome, {name}</h6>
      </div>
    </div>
    <div className="toastify-body">
      <span>
        You have successfully logged in as an {role} user to Vuexy. Now you can
        start to explore. Enjoy!
      </span>
    </div>
  </Fragment>
);

const Login = () => {
  // ** Hooks
  const { skin } = useSkin();
  const dispatch = useDispatch();
  const history = useHistory();
  const ability = useContext(AbilityContext);

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const illustration = skin === "dark" ? "login-v2-dark.svg" : "login-v2.svg",
    source = require(`@src/assets/images/pages/${illustration}`).default;

  const adminPermissions = [
    {
      action: "manage",
      subject: "all",
    },
  ];

  function defineAbility(data) {
    return adminPermissions;
  }

  const onSubmit = (data) => {
    let backendFormat = {
      employee_id: data.loginEmail,
      password: data.password,
    };

    const loginUrl = `${process.env.REACT_APP_BACKEND_BASE_URL}${process.env.REACT_APP_ACCOUNTS_ADMIN_URL}user-login/`;

    if (Object.values(data).every((field) => field.length > 0)) {
      useJwt
        .login({
          employee_id: data.loginEmail,
          password: data.password,
          loginUrl: loginUrl,
        })
        .then((res) => {
          const abilities = defineAbility(res.data);
          const data = {
            // ...res.data.userData,
            ...res.data,
            fullName: res.data.user_detail.profile.username,
            username: res.data.user_detail.profile.username,
            avatar: res.data.image
              ? `${process.env.REACT_APP_BACKEND_IMAGE_BASEURL}${res.data.user_detail.profile.image}`
              : `https://avatars.dicebear.com/api/bottts/${res.data.name}.svg`,
            role: "ADMIN",
            ability: abilities,
            accessToken: res.data.access,
            refreshToken: res.data.refresh,
          };
          dispatch(handleLogin(data));
          ability.update(abilities);
          // ability.update(res.data.userData.ability);
          history.push(getHomeRouteForLoggedInUser(data.role));
          toast.success(
            <ToastContent
              name={data.fullName || data.username || "John Doe"}
              role={data.role || "admin"}
            />,
            {
              icon: false,
              transition: Slide,
              hideProgressBar: true,
              autoClose: 2000,
            }
          );
        })
        .catch((err) => console.log(err));
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: "manual",
          });
        }
      }
    }
  };

  return (
    <div className="auth-wrapper auth-cover d-flex">
      <Row className="auth-inner m-0">
        {/* <Link className="brand-logo" to="/" onClick={(e) => e.preventDefault()}>
          imgae h28
          <h2 className="brand-text text-primary ms-1">SRK</h2>
        </Link> */}
        <Col
          className="d-none d-lg-flex align-items-center "
          style={{ overflow: "hidden" }}
          lg="8"
          sm="12"
        >
          <div className="w-100 d-lg-flex align-items-center justify-content-center ">
            {/* <img
              className="d-flex justify-content-center "
              style={{ height: "265px", width: "336px", position: "absolute" }}
              src={appBlurredImage}
              alt=""
            /> */}
            {/* <img
              className="overflow-hidden img-fluid"
              style={{
                overflowY: "hidden",
                objectFit: "cover",
              }}
              // style={{ objectFit: "cover" }}

              src={bgImage}
              alt="Login Cover"
            /> */}
          </div>
        </Col>
        <Col
          className="d-flex align-items-center auth-bg px-2 p-lg-5"
          lg="4"
          sm="12"
        >
          <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12">
            {/* <CardTitle tag="h2" className="fw-bold mb-1">
              Welcome to Vuexy! 👋
            </CardTitle>
            <CardText className="mb-2">
              Please sign-in to your account and start the adventure
            </CardText>
            <Alert color="primary">
              <div className="alert-body font-small-2">
                <p>
                  <small className="me-50">
                    <span className="fw-bold">Admin:</span> admin@demo.com |
                    admin
                  </small>
                </p>
                <p>
                  <small className="me-50">
                    <span className="fw-bold">Client:</span> client@demo.com |
                    client
                  </small>
                </p>
              </div>
              <HelpCircle
                id="login-tip"
                className="position-absolute"
                size={18}
                style={{ top: "10px", right: "10px" }}
              />
              <UncontrolledTooltip target="login-tip" placement="left">
                This is just for ACL demo purpose.
              </UncontrolledTooltip>
            </Alert> */}
            <div className="d-flex justify-content-center">
              {/* <img src={appIcon} alt="" /> */}
            </div>
            <Form
              style={{ paddingTop: "200px" }}
              className="auth-login-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-1">
                <Label className="form-label" for="login-email">
                  Employee ID
                </Label>
                <Controller
                  id="loginEmail"
                  name="loginEmail"
                  control={control}
                  render={({ field }) => (
                    <Input
                      autoFocus
                      type="text"
                      placeholder="Enter employee id"
                      invalid={errors.loginEmail && true}
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="mb-1">
                <div className="d-flex justify-content-between">
                  <Label className="form-label" for="login-password">
                    Password
                  </Label>
                  <Link to="/forgot-password">
                    <small>Forgot Password?</small>
                  </Link>
                </div>
                <Controller
                  id="password"
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <InputPasswordToggle
                      className="input-group-merge"
                      invalid={errors.password && true}
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="form-check mb-1">
                <Input type="checkbox" id="remember-me" />
                <Label className="form-check-label" for="remember-me">
                  Remember Me
                </Label>
              </div>
              <Button type="submit" color="primary" block>
                Sign in
              </Button>
            </Form>
            <p className="text-center mt-2">
              <span className="me-25">New on our platform?</span>
              <Link to="/register">
                <span>Create an account</span>
              </Link>
            </p>
            {/* <div className="divider my-2">
              <div className="divider-text">or</div>
            </div>
            <div className="auth-footer-btn d-flex justify-content-center">
              <Button color="facebook">
                <Facebook size={14} />
              </Button>
              <Button color="twitter">
                <Twitter size={14} />
              </Button>
              <Button color="google">
                <Mail size={14} />
              </Button>
              <Button className="me-0" color="github">
                <GitHub size={14} />
              </Button>
            </div> */}
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
