import { TopServiceCard } from "@/components/cards/top-service-card";

const topServices = [
  { title: "Remote & Home Services", imageUrl: "/images/service-1.png", href: "/services/remote" },
  { title: "Diagnosis", imageUrl: "/images/service-2.jpg", href: "/services/diagnosis" },
  { title: "Lab Tests", imageUrl: "/images/service-3.png", href: "/services/lab-tests" },
  { title: "Specialist Consultation", imageUrl: "/images/service-4.png", href: "/services/specialist" },
  { title: "Mental Health", imageUrl: "/images/service-5.png", href: "/services/mental-health" },
];

export function TopServicesSection() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Top Services</h2>
        <button className="text-sm text-purple-700">See all</button>
      </div>
      <div className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4 -mx-4 pl-0 pr-4">
        {topServices.map((service, index) => (
          <TopServiceCard
            key={index}
            title={service.title}
            imageUrl={service.imageUrl}
            href={service.href}
            isFirst={index === 0}
            className={index === 0 ? "ml-4" : ""}
          />
        ))}
      </div>
    </div>
  )
}

