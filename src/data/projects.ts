export interface ProjectMember {
  name: string;
  role: string;
  image: string;
}

export interface ProjectMilestone {
  date: string;
  title: string;
  description: string;
}

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  color: string;
  heroImage: string;
  overview: string;
  problemStatement: string;
  solution: string;
  technologies: string[];
  impactMetrics: { label: string; value: string }[];
  team: ProjectMember[];
  milestones: ProjectMilestone[];
  gallery: string[];
}

export const projectsData: ProjectData[] = [
  {
    id: "aether-ev",
    title: "Project Aether: Autonomous EV",
    category: "Automotive Engineering",
    shortDesc: "A fully autonomous Level 4 electric vehicle prototype built entirely by undergraduate students, featuring custom LiDAR integration and AI path planning.",
    color: "from-blue-500 to-cyan-400",
    heroImage: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop",
    overview: "Project Aether represents the pinnacle of undergraduate engineering at our institution. It is a fully functional, Level 4 autonomous electric vehicle designed from the ground up. The project aims to push the boundaries of sustainable transport and autonomous navigation in complex urban environments.",
    problemStatement: "Urban mobility is currently plagued by high emissions, traffic congestion, and a high rate of accidents caused by human error. Existing autonomous solutions are often prohibitively expensive and rely on proprietary, closed-source technologies.",
    solution: "Aether provides an open-source, cost-effective autonomous driving platform. By integrating affordable LiDAR sensors with a custom-trained neural network for path planning and obstacle avoidance, the team has created a scalable solution for future smart cities.",
    technologies: ["ROS 2", "TensorFlow", "C++", "Python", "LiDAR", "Computer Vision", "CAN Bus"],
    impactMetrics: [
      { label: "Autonomous Range", value: "150 km" },
      { label: "Reaction Time", value: "< 10ms" },
      { label: "Cost Reduction", value: "40%" },
      { label: "Test Hours", value: "5,000+" }
    ],
    team: [
      { name: "Arjun Mehta", role: "Team Lead & AI Engineer", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop" },
      { name: "Priya Sharma", role: "Hardware Integration", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" },
      { name: "Dr. R. Krishnan", role: "Faculty Advisor", image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop" }
    ],
    milestones: [
      { date: "Sep 2024", title: "Project Inception", description: "Initial design and feasibility study completed." },
      { date: "Jan 2025", title: "Chassis Fabrication", description: "Custom lightweight aluminum chassis assembled." },
      { date: "May 2025", title: "Sensor Integration", description: "LiDAR and camera arrays successfully calibrated." },
      { date: "Nov 2025", title: "First Autonomous Drive", description: "Successful navigation of the campus test track." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1518985288414-997523178044?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: "neurosync-bci",
    title: "NeuroSync: BCI Interface",
    category: "Biomedical Engineering",
    shortDesc: "A non-invasive Brain-Computer Interface that allows paralyzed patients to control smart home devices using EEG signals with 94% accuracy.",
    color: "from-purple-500 to-pink-500",
    heroImage: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2071&auto=format&fit=crop",
    overview: "NeuroSync is a revolutionary non-invasive Brain-Computer Interface (BCI) designed to restore independence to individuals with severe motor disabilities. By translating brainwaves into actionable digital commands, NeuroSync bridges the gap between human thought and digital interaction.",
    problemStatement: "Millions of individuals suffering from conditions like ALS, spinal cord injuries, or severe strokes lose their ability to interact with their environment, leading to a drastic reduction in quality of life and heavy reliance on caregivers.",
    solution: "Using a custom-designed, comfortable EEG headset and advanced machine learning algorithms, NeuroSync decodes motor imagery signals in real-time, allowing users to control smart home appliances, type messages, and navigate digital interfaces purely through thought.",
    technologies: ["EEG Signal Processing", "PyTorch", "Signal Filtering", "IoT Integration", "React Native"],
    impactMetrics: [
      { label: "Classification Accuracy", value: "94.2%" },
      { label: "Latency", value: "< 200ms" },
      { label: "Clinical Trials", value: "Phase II" },
      { label: "Supported Devices", value: "50+" }
    ],
    team: [
      { name: "Sarah Jenkins", role: "Neuroscientist", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" },
      { name: "David Chen", role: "ML Engineer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" }
    ],
    milestones: [
      { date: "Aug 2024", title: "Algorithm Development", description: "Achieved 85% accuracy in offline testing." },
      { date: "Feb 2025", title: "Hardware Prototype", description: "First wearable EEG headset fabricated." },
      { date: "Jul 2025", title: "Clinical Trials Phase I", description: "Successful testing with 10 locked-in patients." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080&auto=format&fit=crop"
    ]
  },
  {
    id: "ecosphere-agri",
    title: "EcoSphere: Smart Agriculture",
    category: "IoT & Sustainability",
    shortDesc: "An IoT-driven aeroponics system that reduces water usage by 90% while increasing crop yield, currently deployed in 5 local villages.",
    color: "from-emerald-500 to-teal-400",
    heroImage: "https://images.unsplash.com/photo-1530836369250-ef71a3f5e48d?q=80&w=2070&auto=format&fit=crop",
    overview: "EcoSphere tackles the global challenge of food security and water scarcity through an intelligent, automated aeroponics farming system. It empowers local farmers with high-yield, low-resource agricultural technology.",
    problemStatement: "Traditional agriculture consumes 70% of global freshwater and is highly vulnerable to climate change. In arid regions, farmers struggle with unpredictable weather and depleting groundwater resources.",
    solution: "EcoSphere utilizes a closed-loop aeroponics system monitored by a network of IoT sensors. AI algorithms dynamically adjust nutrient delivery, pH levels, and lighting based on real-time plant health data, maximizing yield while minimizing resource consumption.",
    technologies: ["IoT Sensors", "AWS IoT Core", "Node.js", "React", "Machine Learning", "Aeroponics"],
    impactMetrics: [
      { label: "Water Saved", value: "90%" },
      { label: "Yield Increase", value: "2.5x" },
      { label: "Active Farms", value: "12" },
      { label: "Farmers Trained", value: "150+" }
    ],
    team: [
      { name: "Vikram Singh", role: "Agronomist", image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=1974&auto=format&fit=crop" },
      { name: "Anita Desai", role: "IoT Architect", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" }
    ],
    milestones: [
      { date: "Oct 2024", title: "Prototype Design", description: "First small-scale aeroponics unit built." },
      { date: "Mar 2025", title: "IoT Integration", description: "Sensor network and cloud dashboard deployed." },
      { date: "Sep 2025", title: "Village Deployment", description: "First 5 systems installed in rural communities." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592982537447-6f2a6a0a5923?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: "vyom-sat",
    title: "Vyom: Nanosatellite",
    category: "Aerospace",
    shortDesc: "A 1U CubeSat designed to monitor atmospheric carbon levels, successfully launched in collaboration with the national space agency.",
    color: "from-orange-500 to-red-500",
    heroImage: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop",
    overview: "Project Vyom is a student-led initiative that designed, built, and launched a 1U CubeSat into Low Earth Orbit (LEO). Its primary mission is to collect high-resolution data on greenhouse gas concentrations across the globe.",
    problemStatement: "Accurate, real-time data on localized carbon emissions is crucial for climate change mitigation, yet deploying large-scale monitoring satellites is extremely expensive and infrequent.",
    solution: "Vyom demonstrates that low-cost, miniaturized satellites can provide valuable scientific data. Equipped with a custom miniaturized spectrometer, Vyom transmits daily atmospheric data to our campus ground station.",
    technologies: ["Embedded C", "RF Communications", "Orbital Mechanics", "Spectrometry", "Solar Power Management"],
    impactMetrics: [
      { label: "Orbit Altitude", value: "500 km" },
      { label: "Data Downlink", value: "2 GB/day" },
      { label: "Mission Life", value: "2 Years" },
      { label: "Cost", value: "< $50k" }
    ],
    team: [
      { name: "Rohan Gupta", role: "Systems Engineer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop" },
      { name: "Meera Patel", role: "Payload Specialist", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" }
    ],
    milestones: [
      { date: "Jan 2024", title: "Mission Concept Review", description: "Approved by the national space agency." },
      { date: "Dec 2024", title: "Flight Model Assembly", description: "Final integration and environmental testing." },
      { date: "May 2025", title: "Launch & Deployment", description: "Successfully deployed into LEO via PSLV." },
      { date: "Jun 2025", title: "First Signal Received", description: "Ground station established contact." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2008&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop"
    ]
  }
];
