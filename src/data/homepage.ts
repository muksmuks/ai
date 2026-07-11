// Content for the About page and (where shared) the landing page hero.
// Sourced from Mukesh's resume/LinkedIn profile.

export type ExperienceItem = {
  company: string
  role: string
  period: string
  bullets: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: `IBM Data and AI`,
    role: `Senior D/AI Scientist & Researcher`,
    period: `November 2023 — Present`,
    bullets: [`Search relevancy in AI-aided information retrieval`],
  },
  {
    company: `Watsonx Data and AI — IBM`,
    role: `Senior D/AI Scientist`,
    period: `February 2022 — November 2023`,
    bullets: [
      `Built Unreal Data, a domain-agnostic engine for generating synthetic 2D data using reward-maximization (Reinforcement Learning) — recipient of IBM's Hyper Blue program grant`,
      `Owned the AI/ML engine (DQN algorithm, TF2) and MDP environment design for tabular data, extending the OpenAI Gym environment`,
      `Ran performance testing for the Ray distributed framework on AWS`,
    ],
  },
  {
    company: `IBM Data and AI`,
    role: `Senior Data Scientist — Insurance Fraud`,
    period: `November 2020 — February 2022`,
    bullets: [
      `Predicted insurance fraud (Auto, Property Casualty, Workers' Compensation) using tabular and unstructured data`,
      `Owned feature engineering, risk modelling, hypothesis testing, and model explainability (SHAP)`,
      `Productionized pipelines and models using PySpark, spark-nlp, and IBM CP4D`,
    ],
  },
  {
    company: `IBM Data and AI — India Software Labs`,
    role: `Data Scientist — Financial Crimes Insights`,
    period: `March 2018 — November 2020`,
    bullets: [
      `Designed and developed an entity resolution framework for detecting financial crimes using probabilistic matching`,
      `Built the foundation for AML (Anti-Money Laundering) and Surveillance Insights analytics`,
      `Performance-tuned watchlist processing on the HDP platform`,
    ],
  },
  {
    company: `Inkers Technology`,
    role: `Part-time Computer Vision Internship`,
    period: `May 2018 — February 2019`,
    bullets: [`Worked on image classification, segmentation, and object detection using ResNet, YOLO, and GANs`],
  },
  {
    company: `IBM IoT — India Software Labs`,
    role: `Solution Architect — Advanced Analytics`,
    period: `January 2016 — March 2018`,
    bullets: [
      `Architected video analytics for perimeter intrusion detection at a major steel plant`,
      `Architected a sensor-driven flood forecast and early warning system for a South-East Asian government`,
      `Led technical consulting across Australia, EU, Middle East, South-East Asia, and the US`,
    ],
  },
  {
    company: `IBM India Software Labs`,
    role: `Associate Managing Consultant / Senior Consultant`,
    period: `August 2011 — December 2015`,
    bullets: [`Design and development lead — merge ownership, defect tracking, and release ownership`],
  },
]

export type ProjectItem = {
  name: string
  description: string
  url?: string
  tags: string[]
}

export const projects: ProjectItem[] = [
  {
    name: `Unreal Data`,
    description: `A domain-agnostic engine for generating synthetic 2D data using reward-maximization (Reinforcement Learning) to mimic realistic decision-making. Recipient of IBM's Hyper Blue program grant.`,
    tags: [`Reinforcement Learning`, `DQN`, `TensorFlow`, `AWS`],
  },
  {
    name: `Entity Resolution Framework for Financial Crimes`,
    description: `Probabilistic matching system for finding obvious and non-obvious relationships between records, powering AML and Surveillance Insights analytics at IBM.`,
    tags: [`PySpark`, `HDFS`, `HBase`, `NLP`],
  },
  {
    name: `Flood Forecast & Early Warning System`,
    description: `Sensor-driven flood prediction and early warning system architected for a South-East Asian government, integrating water level, rainfall, video, and GIS/RADAR data.`,
    tags: [`GIS`, `Java`, `IoT`],
  },
]

export type EducationItem = {
  institution: string
  degree: string
  period: string
}

export const education: EducationItem[] = [
  {
    institution: `Birla Institute of Technology and Science, Pilani`,
    degree: `Master of Technology (MTech), Machine Learning and Artificial Intelligence`,
    period: `2022 — 2024`,
  },
]

export type TechStackCategory = {
  category: string
  items: string[]
}

export const techStack: TechStackCategory[] = [
  { category: `Languages`, items: [`Python`, `Java`] },
  { category: `ML / Deep Learning`, items: [`TensorFlow`, `Scikit-learn`, `XGBoost`, `SHAP`] },
  { category: `NLP`, items: [`spaCy`, `NLTK`, `spark-nlp`, `Word2Vec`, `GloVe`, `TF-IDF`] },
  { category: `Data Engineering`, items: [`PySpark`, `Kafka`, `HDFS`, `HBase`, `Db2`] },
  { category: `Infrastructure`, items: [`Docker`, `Kubernetes`, `AWS`, `IBM CP4D`] },
]

export type HeroStat = {
  value?: string
  label: string
}

export const heroStats: HeroStat[] = [
  { value: `10+`, label: `patents in Data and AI` },
  { value: `15+`, label: `DS/AI products shipped` },
  { value: `Book Reviewer`, label: `- Manning Publications` },
]

export type CredentialStat = {
  label: string
  value: string
}

export const credentialStats: CredentialStat[] = [
  { label: `Patents`, value: `10+` },
  { label: `Awards`, value: `5` },
  { label: `Products shipped`, value: `15+` },
]

export type CredentialItem = {
  title: string
  issuer?: string
  year?: string
}

export const credentials: CredentialItem[] = [
  { title: `Reinforcement Learning for Business — Technical Reviewer`, issuer: `Manning Publications Co.`, year: `2025 — Present` },
  { title: `System and Method to Optimize Processing Pipeline for Key Performance Indicators`, issuer: `IBM Patent · P202007133US01` },
  { title: `Override Process in Data Analytics Processing in Risk Networks`, issuer: `IBM Patent · P202007134US01` },
  { title: `System and Method to Replay Suspicious Activity Detection Pipeline in Risk Networks`, issuer: `IBM Patent · P202007142US01` },
  { title: `Data-Driven Automated Model Impact Analysis`, issuer: `IBM Patent · P202007139US01` },
  { title: `Cognitive Claims Processing`, issuer: `IBM Patent · P202007127US01` },
  { title: `IBM Data Science Professional Certificate Specialization`, issuer: `IBM`, year: `2018` },
  { title: `Machine Learning`, issuer: `Stanford Online (Andrew Ng)`, year: `2017` },
  { title: `Software Architecture for the Internet of Things`, issuer: `IBM` },
  { title: `IBM Design Thinking Practitioner`, issuer: `IBM` },
  { title: `Plateau` },
  { title: `Talent Spark`, issuer: `IBM`, year: `2014` },
  { title: `SWG Lab Services Award (LSA)`, issuer: `IBM`, year: `2015` },
  { title: `Solutions Lab Services Award (LSA)`, issuer: `IBM`, year: `2015` },
  { title: `Manager's Choice Award`, issuer: `IBM`, year: `2016` },
  { title: `Solutions Lab Services Award (LSA)`, issuer: `IBM`, year: `2017` },
]

export const contact = {
  email: `mukesh.kumar43585@gmail.com`,
}
