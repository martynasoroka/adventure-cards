import { useState, FormEvent } from "react";
import { X } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Mode = "signin" | "register";
type SignInMethod = "password" | "magic";

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const { signInWithPassword, signInWithMagicLink, signInWithGoogle, signUp } = useAuth();

  const [mode, setMode] = useState<Mode>("signin");
  const [signInMethod, setSignInMethod] = useState<SignInMethod>("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; isError: boolean } | null>(null);

  if (!isOpen) return null;

  const reset = () => {
    setEmail("");
    setPassword("");
    setMessage(null);
    setLoading(false);
  };

  const switchMode = (next: Mode) => {
    setMode(next);
    reset();
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setMessage(null);
    const error = await signInWithGoogle();
    if (error) {
      setMessage({ text: error, isError: true });
      setLoading(false);
    }
    // On success the page redirects, so no further state update needed
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    let error: string | null = null;

    if (mode === "register") {
      error = await signUp(email, password);
      if (!error) {
        setMessage({ text: "Check your email to confirm your account.", isError: false });
        setLoading(false);
        return;
      }
    } else if (signInMethod === "password") {
      error = await signInWithPassword(email, password);
      if (!error) {
        onClose();
        return;
      }
    } else {
      error = await signInWithMagicLink(email);
      if (!error) {
        setMessage({ text: "Magic link sent — check your inbox.", isError: false });
        setLoading(false);
        return;
      }
    }

    if (error) setMessage({ text: error, isError: true });
    setLoading(false);
  };

  const isPasswordMode = mode === "register" || signInMethod === "password";
  const submitLabel = () => {
    if (loading) return "Please wait…";
    if (mode === "register") return "Create Account";
    if (signInMethod === "magic") return "Send Magic Link";
    return "Sign In";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn bg-black/60">
      <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl animate-scaleIn">
        {/* Header */}
        <div className="bg-brandGreen px-6 pt-6 pb-5 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-brandBeige/20 hover:bg-brandBeige/40 transition-colors"
            aria-label="Close"
          >
            <X size={18} className="text-brandBeige" />
          </button>
          <h2 className="text-2xl font-bold text-brandBeige">
            {mode === "signin" ? "Sign In" : "Create Account"}
          </h2>
          <p className="text-brandBeige/70 text-sm mt-1">
            {mode === "signin"
              ? "Welcome back! Choose how to sign in."
              : "Join to track your adventures."}
          </p>
        </div>

        {/* Body */}
        <div className="bg-brandBeige px-6 py-5 flex flex-col gap-4">
          {/* Google button */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 py-2.5 px-4 bg-white border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-all shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <GoogleIcon />
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-gray-400 text-xs">or</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Email / password form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brandGreen/50 text-sm"
            />

            {isPasswordMode && (
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brandGreen/50 text-sm"
              />
            )}

            {/* Toggle sign-in method (only in sign-in mode) */}
            {mode === "signin" && (
              <button
                type="button"
                onClick={() => {
                  setSignInMethod(signInMethod === "password" ? "magic" : "password");
                  setMessage(null);
                }}
                className="text-xs text-brandBlue hover:underline self-start"
              >
                {signInMethod === "password"
                  ? "Use magic link instead"
                  : "Use password instead"}
              </button>
            )}

            {/* Feedback message */}
            {message && (
              <p
                className={`text-sm px-3 py-2 rounded-lg ${
                  message.isError
                    ? "bg-red-100 text-red-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {message.text}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 px-4 bg-brandOrange/80 text-brandBeige rounded-xl font-semibold hover:bg-brandOrange transition-all shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitLabel()}
            </button>
          </form>

          {/* Switch between sign in / register */}
          <p className="text-center text-sm text-gray-500">
            {mode === "signin" ? (
              <>
                Don&apos;t have an account?{" "}
                <button
                  type="button"
                  onClick={() => switchMode("register")}
                  className="text-brandBlue font-medium hover:underline"
                >
                  Register
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => switchMode("signin")}
                  className="text-brandBlue font-medium hover:underline"
                >
                  Sign In
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
        fill="#4285F4"
      />
      <path
        d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
        fill="#34A853"
      />
      <path
        d="M3.964 10.707A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.039l3.007-2.332z"
        fill="#FBBC05"
      />
      <path
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.961L3.964 7.293C4.672 5.163 6.656 3.58 9 3.58z"
        fill="#EA4335"
      />
    </svg>
  );
}
