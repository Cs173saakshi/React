import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error,errorinfo) {
    console.error("Error caught by ErrorBoundary:", error, errorinfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try after sometime.</h1>; 
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
