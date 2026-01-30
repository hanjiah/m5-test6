
// Shared type definitions for the NovaLaunch application components

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface AICopyResponse {
  headline: string;
  subheadline: string;
  cta: string;
}

export interface MarketingCopyRequest {
  businessType: string;
  tone: string;
}
