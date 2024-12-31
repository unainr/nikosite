import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
  {
    id: "item-1",
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern web technologies including Next.js, React, TypeScript, and Node.js. Our tech stack is carefully chosen to deliver high-performance, scalable solutions.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    tags: ["Next.js", "React", "TypeScript", "Node.js", "TailwindCSS"]
  },
  {
    id: "item-2",
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity and requirements. A typical website might take 4-8 weeks, while larger applications can take 3-6 months. We'll provide detailed timelines during consultation.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: "item-3",
    question: "What is your development process?",
    answer: "Our development process follows an agile methodology with regular client communication. We begin with requirements gathering, move through design and development phases, and finish with thorough testing and deployment.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    tags: ["Agile", "Scrum", "Sprint Planning", "CI/CD"]
  },
  {
    id: "item-4",
    question: "Do you provide ongoing maintenance?",
    answer: "Yes, we offer comprehensive maintenance packages including regular updates, security patches, performance monitoring, and 24/7 support for critical issues. We ensure your application stays current and performs optimally.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    tags: ["24/7 Support", "Security Updates", "Performance Monitoring"]
  },
  {
    id: "item-5",
    question: "What about hosting and deployment?",
    answer: "We provide end-to-end hosting solutions using industry-leading cloud providers. Our deployment process includes automated CI/CD pipelines, ensuring smooth updates and maximum uptime for your application.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    tags: ["AWS", "Vercel", "Docker", "Kubernetes"]
  },
  {
    id: "item-6",
    question: "How do you handle project communication?",
    answer: "We maintain clear communication channels through regular video calls, project management tools, and detailed documentation. You'll have a dedicated project manager and direct access to the development team.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    tags: ["Slack", "Jira", "Daily Updates", "Video Calls"]
  }
];


export function ServicesFAQ() {
  return (
    <div className="max-w-4xl mx-auto mt-20 px-4 sm:px-6 lg:px-8 mb-5">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Find answers to common questions about our services and development process
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqData.map((faq) => (
          <AccordionItem
            key={faq.id}
            value={faq.id}
            className="group bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all">
              <div className="flex items-center gap-4 w-full">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-violet-100 dark:from-blue-900/30 dark:to-violet-900/30 group-hover:from-blue-200 group-hover:to-violet-200 transition-all duration-300">
                  <div className="text-blue-600 dark:text-blue-400">
                    {faq.icon}
                  </div>
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-violet-400 transition-colors">
                    {faq.question}
                  </h3>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="px-6 py-4 bg-gray-50 dark:bg-gray-800/30">
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
                {faq.tags && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {faq.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
