import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
} from "lucide-react";

// Stats Data
export const statsData = [
  {
    value: "100K+",
    label: "Active Users",
  },
  {
    value: "$5B+",
    label: "Transactions Tracked",
  },
  {
    value: "99%",
    label: "Uptime",
  },
  {
    value: "4.8/5",
    label: "User Rating",
  },
];

// Features Data
export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-green-600" />,
    title: "Real-Time Tracking",
    description: "Track your finances in real-time with instant updates",
  },
  {
    icon: <Receipt className="h-8 w-8 text-blue-600" />,
    title: "Smart Receipt Scanner",
    description:
      "Extract data automatically from receipts using advanced AI technology",
  },
  {
    icon: <PieChart className="h-8 w-8 text-green-600" />,
    title: "Savings Goals",
    description: "Set and track savings goals with personalized advice",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "Budget Planning",
    description: "Create and manage budgets with intelligent recommendations",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "Multi-Account Support",
    description: "Manage multiple accounts and credit cards in one place",
  },
  {
    icon: <Globe className="h-8 w-8 text-green-600" />,
    title: "Global Financial Insights",
    description:
      "Gain insights into global financial trends affecting your wealth",
  },
];

// How It Works Data
export const howItWorksData = [
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "1. Create Your Account",
    description:
      "Get started in minutes with our simple and secure sign-up process",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "2. Track Your Spending",
    description:
      "Automatically categorize and track your transactions in real-time",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "3. Get Insights",
    description:
      "Receive AI-powered insights and recommendations to optimize your finances",
  },
];

// Testimonials Data
export const testimonialsData = [
  {
    name: "Raj Patel",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    quote:
      "PocketPlanner has revolutionized my financial management. The insights are spot on, helping me cut costs and grow my business.",
  },
  {
    name: "Priya Sharma",
    role: "Graphic Designer",
    image: "https://randomuser.me/api/portraits/women/40.jpg",
    quote:
      "The automated expense tracking feature is a game-changer. It's like having a personal finance assistant that saves me so much time.",
  },
  {
    name: "Arjun Singh",
    role: "Investment Consultant",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    quote:
      "I suggest PocketPlanner to everyone I consult. Its real-time tracking and global insight features are invaluable for managing diverse portfolios.",
  },
];
