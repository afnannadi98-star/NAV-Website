import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      title: "Project Onboarding & BIM Setup",
      description: "We begin by establishing a clear technical foundation aligned with the project's BIM governance requirements. This phase ensures consistency and avoids downstream rework.",
      features: [
        "Review of project scope & deliverables",
        "Alignment with BEP, TIDP, ISO 19650",
        "Model structure, levels & grids setup",
        "Naming conventions & frameworks"
      ],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
    },
    {
      title: "Model Development (LOD 200-500)",
      description: "Architectural BIM models are developed progressively in line with the required LOD and project stage (SD, DD, IFC, As Built, Shop Drawings, Authority Submission).",
      features: [
        "Revit-based modeling (LOD 200-500)",
        "Design intent & technical alignment",
        "Controlled use of view templates",
        "Dynamo scripts for efficiency"
      ],
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80"
    },
    {
      title: "Coordination & Clash Management",
      description: "Matrix-driven process ensuring clarity, accountability, and controlled resolution through weekly or milestone-based federation in Navisworks.",
      features: [
        "Model Federation & Setup",
        "Clash Matrix Definition",
        "Categorized Detection (Priority 1-3)",
        "Issue Tracking & Resolution"
      ],
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80"
    },
    {
      title: "Automation & Custom Dynamo Tools",
      description: "We deploy custom computational workflows to improve reliability, speed, and repeatability across high-volume BIM environments.",
      features: [
        "Profile Change Detection Script",
        "Automated Printing & Export",
        "Automated Parameter Setting",
        "Model Control & Data Validation"
      ],
      image: "https://images.unsplash.com/photo-1581094794329-cd67bce35543?w=800&q=80"
    },
    {
      title: "QA/QC & Model Health Checks",
      description: "Quality control is applied continuously throughout the project lifecycle to ensure only clean, controlled models proceed to submission.",
      features: [
        "Warning, error & performance monitoring",
        "Geometry accuracy & LOD compliance",
        "Parameter completeness audits",
        "Documentation readiness validation"
      ],
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
    },
    {
      title: "Documentation & Submission",
      description: "Production of authority-ready layouts derived directly from coordinated models ensuring drawings remain fully aligned with live BIM data.",
      features: [
        "Plans, Sections, Elevations & Details",
        "Authority-compliant layouts",
        "Multiformat Delivery (RVT, IFC, NWC)",
        "Compliance Checklists & TIDP"
      ],
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container-padding mb-16 text-center">
        <span className="text-accent font-bold tracking-widest text-xs uppercase mb-4 block">Our Services</span>
        <h1 className="font-heading text-5xl font-bold text-primary">Technical Excellence</h1>
      </div>

      <div className="container-padding space-y-24">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
          >
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4 rounded-none -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
              <div className="aspect-video overflow-hidden border border-border">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover filter saturate-0 group-hover:saturate-100 transition-all duration-500"
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="font-heading text-3xl font-bold text-primary">{service.title}</h2>
              <p className="text-secondary text-lg leading-relaxed">
                {service.description}
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <Link href="/contact">
                  <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white uppercase font-bold tracking-wider">
                    Request Service
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
