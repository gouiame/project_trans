import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

function ResetPass() {
  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="max-w-md w-full space-y-6">
        <h1 className="text-3xl font-bold text-center">Reset Your Password</h1>
        <p className="text-center text-muted-foreground">
          Enter your email address below, and we’ll send you a link to reset your password.
        </p>
        <form className="space-y-4">
          <div className="space-y-2">
            <label className="flex text-sm text-muted-foreground">
              Email
            </label>
            <Input 
              type="email" 
              placeholder="example@mail.com" 
              className="w-full text-black" 
              required 
            />
          </div>
          <Button className="w-full">
            Send Reset Link
          </Button>
        </form>
        <div className="text-center">
          <Link 
            to="/login" 
            className="text-sm text-blue-400 hover:underline"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResetPass;
