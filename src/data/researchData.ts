export interface ResearchItem {
  id: number;
  title: string;
  authors: string;
  venue: string;
  date: string;
  abstract: string;
  link: string;
  tags: string[];
  type: 'Paper' | 'Book';
}

const firstNames = ["John", "Jane", "David", "Sarah", "Michael", "Emily", "Robert", "Jessica", "William", "Ashley", "James", "Amanda", "Richard", "Melissa", "Charles", "Stephanie", "Thomas", "Rebecca", "Christopher", "Laura"];
const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin"];

const topics = ["Machine Learning", "Artificial Intelligence", "Quantum Computing", "Data Science", "Cybersecurity", "Blockchain", "Internet of Things", "Cloud Computing", "Robotics", "Bioinformatics", "Nanotechnology", "Renewable Energy", "Climate Change", "Sustainable Development", "Public Health", "Economics", "Sociology", "Psychology", "Education", "History"];
const buzzwords = ["Advanced", "Innovative", "Modern", "Comprehensive", "Applied", "Theoretical", "Practical", "Emerging", "Future", "Global", "Local", "Regional", "National", "International", "Comparative", "Critical", "Analytical", "Empirical", "Experimental", "Computational"];
const nouns = ["Approaches", "Methods", "Techniques", "Systems", "Models", "Frameworks", "Strategies", "Solutions", "Perspectives", "Paradigms", "Applications", "Implications", "Challenges", "Opportunities", "Trends", "Developments", "Innovations", "Discoveries", "Insights", "Analyses"];

const venues = ["Nature", "Science", "Cell", "Lancet", "NEJM", "JAMA", "PNAS", "IEEE Transactions", "ACM Computing Surveys", "Journal of Machine Learning Research", "Artificial Intelligence", "Bioinformatics", "Physical Review Letters", "Journal of the American Chemical Society", "Angewandte Chemie", "Advanced Materials", "Nano Letters", "ACS Nano", "Journal of Finance", "American Economic Review"];
const bookPublishers = ["Oxford University Press", "Cambridge University Press", "Harvard University Press", "MIT Press", "Princeton University Press", "Yale University Press", "Stanford University Press", "University of Chicago Press", "Columbia University Press", "Routledge", "Springer", "Elsevier", "Wiley", "Palgrave Macmillan", "Sage Publications", "Taylor & Francis", "Bloomsbury", "Penguin Random House", "HarperCollins", "Simon & Schuster"];

const generateAuthors = () => {
  const numAuthors = Math.floor(Math.random() * 4) + 1;
  const authors = [];
  for (let i = 0; i < numAuthors; i++) {
    authors.push(`${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`);
  }
  return authors.join(", ");
};

const generateTitle = (type: 'Paper' | 'Book') => {
  const buzzword = buzzwords[Math.floor(Math.random() * buzzwords.length)];
  const topic = topics[Math.floor(Math.random() * topics.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  
  if (type === 'Book') {
    return `${topic}: ${buzzword} ${noun} and Beyond`;
  }
  return `${buzzword} ${noun} in ${topic}: A Comprehensive Review`;
};

const generateTags = (topic: string) => {
  const numTags = Math.floor(Math.random() * 3) + 2;
  const tags = [topic];
  for (let i = 0; i < numTags - 1; i++) {
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    if (!tags.includes(randomTopic)) {
      tags.push(randomTopic);
    }
  }
  return tags;
};

const generateAbstract = (title: string, type: 'Paper' | 'Book') => {
  if (type === 'Book') {
    return `This comprehensive book explores the multifaceted domain of ${title}. It provides an in-depth analysis of the core concepts, historical context, and future trajectories. Designed for students, researchers, and professionals, this volume serves as an essential resource for understanding the complexities and nuances of the subject matter.`;
  }
  return `This paper presents a novel investigation into ${title}. We propose a new methodology that significantly improves upon existing approaches. Our empirical results demonstrate the efficacy and robustness of our proposed framework across various datasets. This research contributes valuable insights to the ongoing discourse in the field and opens up new avenues for future exploration.`;
};

const baseItems: ResearchItem[] = [
  {
    id: 1,
    title: "Attention Is All You Need",
    authors: "Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz Kaiser, Illia Polosukhin",
    venue: "NeurIPS 2017",
    date: "Dec 2017",
    abstract: "The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely.",
    link: "https://arxiv.org/abs/1706.03762",
    tags: ["Deep Learning", "NLP", "Transformers"],
    type: 'Paper'
  },
  {
    id: 2,
    title: "Deep Residual Learning for Image Recognition",
    authors: "Kaiming He, Xiangyu Zhang, Shaoqing Ren, Jian Sun",
    venue: "CVPR 2016",
    date: "Dec 2015",
    abstract: "Deeper neural networks are more difficult to train. We present a residual learning framework to ease the training of networks that are substantially deeper than those used previously. We explicitly reformulate the layers as learning residual functions with reference to the layer inputs, instead of learning unreferenced functions.",
    link: "https://arxiv.org/abs/1512.03385",
    tags: ["Computer Vision", "Deep Learning", "ResNet"],
    type: 'Paper'
  },
  {
    id: 3,
    title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
    authors: "Jacob Devlin, Ming-Wei Chang, Kenton Lee, Kristina Toutanova",
    venue: "NAACL 2019",
    date: "Oct 2018",
    abstract: "We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional representations from unlabeled text by jointly conditioning on both left and right context in all layers.",
    link: "https://arxiv.org/abs/1810.04805",
    tags: ["NLP", "Language Models", "Transformers"],
    type: 'Paper'
  },
  {
    id: 4,
    title: "Generative Adversarial Networks",
    authors: "Ian J. Goodfellow, Jean Pouget-Abadie, Mehdi Mirza, Bing Xu, David Warde-Farley, Sherjil Ozair, Aaron Courville, Yoshua Bengio",
    venue: "NeurIPS 2014",
    date: "Jun 2014",
    abstract: "We propose a new framework for estimating generative models via an adversarial process, in which we simultaneously train two models: a generative model G that captures the data distribution, and a discriminative model D that estimates the probability that a sample came from the training data rather than G.",
    link: "https://arxiv.org/abs/1406.2661",
    tags: ["Machine Learning", "Generative Models", "GANs"],
    type: 'Paper'
  },
  {
    id: 5,
    title: "Adam: A Method for Stochastic Optimization",
    authors: "Diederik P. Kingma, Jimmy Ba",
    venue: "ICLR 2015",
    date: "Dec 2014",
    abstract: "We introduce Adam, an algorithm for first-order gradient-based optimization of stochastic objective functions, based on adaptive estimates of lower-order moments. The method is straightforward to implement, is computationally efficient, has little memory requirements, is invariant to diagonal rescaling of the gradients, and is well suited for problems that are large in terms of data and/or parameters.",
    link: "https://arxiv.org/abs/1412.6980",
    tags: ["Optimization", "Machine Learning", "Algorithms"],
    type: 'Paper'
  },
  {
    id: 6,
    title: "Introduction to Algorithms, Fourth Edition",
    authors: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
    venue: "MIT Press",
    date: "Apr 2022",
    abstract: "A comprehensive update of the leading algorithms text, with new material on matchings in bipartite graphs, online algorithms, machine learning, and other topics. Some books on algorithms are rigorous but incomplete; others cover masses of material but lack rigor. Introduction to Algorithms uniquely combines rigor and comprehensiveness.",
    link: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/",
    tags: ["Algorithms", "Computer Science", "Textbook"],
    type: 'Book'
  },
  {
    id: 7,
    title: "Artificial Intelligence: A Modern Approach",
    authors: "Stuart Russell, Peter Norvig",
    venue: "Pearson",
    date: "Apr 2020",
    abstract: "The long-anticipated revision of Artificial Intelligence: A Modern Approach explores the full breadth and depth of the field of artificial intelligence (AI). The 4th Edition brings readers up to date on the latest technologies, presents concepts in a more unified manner, and offers new or expanded coverage of machine learning, deep learning, transfer learning, multiagent systems, robotics, natural language processing, causality, probabilistic programming, privacy, fairness, and safe AI.",
    link: "http://aima.cs.berkeley.edu/",
    tags: ["Artificial Intelligence", "Machine Learning", "Textbook"],
    type: 'Book'
  }
];

export const researchItems: ResearchItem[] = [...baseItems];

// Generate 1000 more items
for (let i = 8; i <= 1008; i++) {
  const type = Math.random() > 0.3 ? 'Paper' : 'Book';
  const title = generateTitle(type);
  const topic = title.split(":")[0].replace(/.*in /, "");
  
  researchItems.push({
    id: i,
    title,
    authors: generateAuthors(),
    venue: type === 'Paper' ? venues[Math.floor(Math.random() * venues.length)] : bookPublishers[Math.floor(Math.random() * bookPublishers.length)],
    date: `${["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][Math.floor(Math.random() * 12)]} ${Math.floor(Math.random() * 24) + 2000}`,
    abstract: generateAbstract(title, type),
    link: "#",
    tags: generateTags(topic),
    type
  });
}
