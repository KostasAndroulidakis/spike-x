// File: app/routes/console_.login.tsx
import { useState } from "react";
import { Link, useNavigate } from "@remix-run/react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import AuthLayout from "~/layouts/AuthLayout";

export default function ConsoleLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // TODO: Implement actual login logic
    console.log("Login attempt:", { email, password });
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to console on successful login
      navigate("/console");
    }, 1000);
  };

  return (
    <AuthLayout>
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[var(--text)]">
            Sign in to SPIKE-X
          </h2>
          <p className="mt-2 text-[var(--text-secondary)]">
            Welcome back! Please sign in to your account.
          </p>
        </div>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--text)] mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--text-secondary)]" size={18} />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-[var(--input-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[var(--text)] mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--text-secondary)]" size={18} />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-[var(--input-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--text-secondary)] hover:text-[var(--text)]"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[var(--primary)] focus:ring-[var(--primary)] border-[var(--input-border)] rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-[var(--text)]">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="text-[var(--primary)] hover:text-[var(--primary-hover)]">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn btn-primary py-3 text-lg"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </div>

          <div className="text-center">
            <p className="text-[var(--text-secondary)]">
              Don't have an account?{" "}
              <Link to="/console/signup" className="text-[var(--primary)] hover:text-[var(--primary-hover)] font-medium">
                Sign up here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}
