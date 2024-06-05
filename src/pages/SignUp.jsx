import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    CardHeader,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";
   
  const SignUp=()=> {
    return (
        <div className="flex justify-around items-center mt-20">
        <div className="w-[650px] shadow-md rounded-md p-4 flex items-center justify-center">
       <img
         src="https://www.netsolutions.com/insights/wp-content/uploads/2021/11/essential-feature-of-building-an-on-demand-food-ordering-app.jpg"
         alt="login-image"
         className="rounded-md shadow-md"
       />
     </div>
     <div>
       <Card color="transparent" shadow={false}>
       <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-16 place-items-center"
          >
        <Typography variant="h3" color="white">
          Sign Up
        </Typography>
        </CardHeader>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6" fullWidth>
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
           <Link  to='/login'><a href="#" className="font-medium text-gray-900">
              Sign In
            </a></Link>
          </Typography>
        </form>
      </Card>

      </div>
    </div>
    );
  }
  export default SignUp