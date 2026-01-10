// ErrorBoundary.jsx
import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in boundary:", error, errorInfo);
    // You can also log to your error tracking service here (Sentry, LogRocket...)
  }

  render() {
    if (this.state.hasError) {
      // You can render different things based on error type/message
      return <ErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

// Simple fallback component
function ErrorFallback({ error }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <div>
        <h1 style={{ color: "#e53e3e" }}>Something went wrong...</h1>
        <p style={{ margin: "1.5rem 0", maxWidth: "500px" }}>
          We're having trouble loading this hotel information right now.
        </p>
        <p style={{ color: "#666", fontSize: "0.95rem" }}>
          {error?.message || "Connection failed or data is unavailable"}
        </p>

        <div style={{ marginTop: "2rem" }}>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: "12px 24px",
              fontSize: "1.1rem",
              background: "#3182ce",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorBoundary;
