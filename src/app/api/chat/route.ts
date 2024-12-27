import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  const { message } = await req.json();

  // FAQs for Chiropractic
  const faqs: { [key: string]: string } = {
    "What services do you offer?":
      "We specialize in creating professional websites and digital marketing strategies for chiropractic practices. Our services include website design, SEO optimization, lead generation, social media management, and AI chatbot integration.",
    "How much does it cost to build a website for a chiropractic practice?":
      "Our website packages start at $500 and vary depending on the complexity and features required. Contact us for a customized quote for your chiropractic practice.",
    "Do you offer marketing services?":
      "Yes! We provide full-service marketing for chiropractic practices, including social media management (Facebook, Instagram, LinkedIn), local SEO, and email campaigns.",
    "How long does it take to build a website?":
      "Typically, it takes 2-4 weeks to build a website, depending on the project's scope and features.",
    "Will my website be mobile-friendly?":
      "Absolutely! All our websites are designed to be fully responsive and work seamlessly on mobile, tablet, and desktop devices.",
    "Do you offer ongoing website maintenance?":
      "Yes, we offer website maintenance plans to ensure your site stays updated, secure, and optimized for performance.",
    "Can you help with lead generation?":
      "Yes, we can create tailored marketing strategies, including local SEO and targeted campaigns, to help your chiropractic practice generate more leads and grow your patient base.",
    "What kind of support do you provide after the website is launched?":
      "We provide post-launch support, including website updates, technical assistance, and analytics to track your site's performance.",
    "Do you have experience working with chiropractic practices?":
      "Yes, we specialize in creating websites and marketing strategies specifically for chiropractic practices.",
    "Can I see examples of your work?":
      "Of course! Check out our portfolio on the website to see examples of websites we've built for chiropractic practices.",
    "What are your pricing packages for chiropractic websites?":
      "We offer tiered packages: \n1. Silver Package: $500 (One-time) + $60/month (Marketing subscription) \n2. Gold Package: $700 (One-time) + $100/month (Marketing subscription). Contact us for more details on features and customization.",
  };

  // Check if the user's message matches an FAQ
  if (faqs[message]) {
    return NextResponse.json({ reply: faqs[message] });
  }

  // If no FAQ matches, fallback to OpenAI API
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a concise assistant for chiropractic website marketing. Keep answers short, clear, and relevant to chiropractic practices.",
          },
          { role: "user", content: message },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    return NextResponse.json({ reply: response.data.choices[0].message.content });
  } catch (error) {
    console.error("Error communicating with OpenAI API:", error);
    return NextResponse.json({ error: "Failed to fetch response from OpenAI API" }, { status: 500 });
  }
}
