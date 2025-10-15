import { Metadata } from 'next';
import HomePage from'./HomePage';

export const metadata: Metadata = {
  title: 'Cloud Kitchen Express - Weekly Meal Delivery & Subscription Service',
  description: 'Premium cloud kitchen delivery service offering weekly meal subscriptions with daily menu variety. Fresh sushi, pasta, and gourmet meals delivered Monday through Friday with 5-star rated service and convenient subscription plans.',
  keywords: 'cloud kitchen, meal delivery, weekly menu, food subscription, gourmet meals, sushi delivery, pasta delivery, meal planning, food service, catering',
  
  openGraph: {
    title: 'Cloud Kitchen Express - Weekly Meal Delivery & Subscription Service',
    description: 'Transform your weekly dining with our premium meal delivery service. Subscribe today for fresh, gourmet meals delivered daily with 5-star quality guarantee and convenient meal planning.',
  }
}

export default function Page() {
  return <HomePage />
}