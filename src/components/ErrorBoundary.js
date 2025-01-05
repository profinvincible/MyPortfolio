import React, { Component } from "react";

// ErrorBoundary component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }; // Updates state to show fallback UI
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error("Error caught by Error Boundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong. Please try again later.</h2>
          <p>{this.state.error && this.state.error.toString()}</p>
        </div>
      );
    }

    return this.props.children; // Render children if no error occurs
  }
}

export default ErrorBoundary;
