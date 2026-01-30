
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

export interface AICopyRequest {
  businessType: string;
  tone: string;
}

export interface AICopyResponse {
  headline: string;
  subheadline: string;
  cta: string;
}
