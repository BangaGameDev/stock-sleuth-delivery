
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/contexts/AuthContext";
import { Package } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"driver" | "customer">("customer");
  const { signIn, signUp, userRole } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isLogin) {
        await signIn(email, password);
        console.log("Signed in successfully, user role:", userRole);
        toast({
          title: "Welcome back!",
          description: "You have successfully signed in.",
        });

        // Redirect based on user role
        if (userRole === 'admin') {
          navigate("/customers");
        } else if (userRole === 'driver') {
          navigate("/orders");
        } else {
          navigate("/");
        }
      } else {
        await signUp(email, password, role);
        toast({
          title: "Account created!",
          description: "Your account has been created successfully. Please sign in.",
        });
        setIsLogin(true); // Switch to login mode after successful signup
      }
    } catch (error: any) {
      console.error("Auth error:", error);
      if (error?.message?.includes("User already registered")) {
        toast({
          title: "Account exists",
          description: "This email is already registered. Please try logging in instead.",
          variant: "destructive",
        });
        setIsLogin(true); // Switch to login mode
      } else if (error?.message?.includes("Invalid login credentials")) {
        toast({
          title: "Invalid credentials",
          description: "The email or password you entered is incorrect. Please try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: error?.message || "An error occurred during authentication",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md space-y-8 p-8">
        <div className="flex flex-col items-center">
          <Package className="h-12 w-12 text-primary mb-2" />
          <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900">
            {isLogin ? "Sign in to your account" : "Create new account"}
          </h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md">
            <div>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full"
                disabled={isLoading}
              />
            </div>
            <div>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full"
                disabled={isLoading}
              />
            </div>
            {!isLogin && (
              <div>
                <Select 
                  value={role} 
                  onValueChange={(value: "driver" | "customer") => setRole(value)}
                  disabled={isLoading}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="customer">Customer</SelectItem>
                    <SelectItem value="driver">Driver</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>

          <div>
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isLoading}
            >
              {isLoading ? "Please wait..." : (isLogin ? "Sign in" : "Sign up")}
            </Button>
          </div>

          <div className="text-center">
            <Button
              type="button"
              variant="link"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm"
              disabled={isLoading}
            >
              {isLogin
                ? "Don't have an account? Sign up"
                : "Already have an account? Sign in"}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
