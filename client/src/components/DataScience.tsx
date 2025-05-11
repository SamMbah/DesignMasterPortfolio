import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaChartBar, FaBrain, FaRobot, FaDatabase, FaChartLine } from "react-icons/fa";
import { RiDashboardLine } from "react-icons/ri";

const DataScience = () => {
  const projects = [
    {
      id: 1,
      title: "Customer Churn Prediction",
      description: "Machine learning model that predicts customer churn risk using historical data, behavioral patterns, and demographic information.",
      color: "bg-blue-100",
      skills: ["Python", "scikit-learn", "Pandas", "Data Visualization"],
      icon: <FaChartLine className="w-6 h-6 text-blue-500" />
    },
    {
      id: 2,
      title: "Business Intelligence Dashboard",
      description: "Interactive BI dashboard for monitoring key performance indicators and business metrics with real-time data visualization.",
      color: "bg-green-100",
      skills: ["Power BI", "SQL", "Data Modeling", "ETL"],
      icon: <RiDashboardLine className="w-6 h-6 text-green-500" />
    },
    {
      id: 3,
      title: "NLP Text Summarization",
      description: "Natural language processing application that generates concise summaries from long-form text using advanced NLP techniques.",
      color: "bg-purple-100",
      skills: ["NLP", "Python", "Transformers", "Deep Learning"],
      icon: <FaBrain className="w-6 h-6 text-purple-500" />
    },
    {
      id: 4,
      title: "Data Pipeline Automation",
      description: "Automated ETL pipeline for processing and transforming large datasets, enabling efficient data integration from multiple sources.",
      color: "bg-orange-100",
      skills: ["Python", "Azure", "SQL", "PySpark"],
      icon: <FaDatabase className="w-6 h-6 text-orange-500" />
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <Helmet>
        <title>Data Science Portfolio | Samuel Mbah</title>
        <meta name="description" content="Explore Samuel Mbah's data science and machine learning projects showcasing expertise in predictive modeling, NLP, and business intelligence." />
      </Helmet>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Data Science Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Bridging UX design with data science to create insights-driven solutions that balance user needs with business intelligence.
          </p>
          <div className="mt-6">
            <Button 
              asChild 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
            >
              <a 
                href="https://ml-bi-portfolio-nsswyjpsruugetry7gbm3u.streamlit.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span>Visit Full Data Science Portfolio</span>
                <FaExternalLinkAlt size={14} />
              </a>
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className={`h-48 overflow-hidden relative flex items-center justify-center ${project.color}`}>
                <div className="absolute top-4 left-4 bg-white p-2 rounded-full">
                  {project.icon}
                </div>
                <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                  {project.icon}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, i) => (
                    <span key={i} className="text-xs bg-gray-100 rounded-full px-3 py-1 text-gray-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-white p-6 md:p-8 rounded-lg shadow-md"
        >
          <h3 className="text-2xl font-bold mb-6">Data Science Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <FaChartBar className="text-blue-500" /> Data Analysis
                </h4>
                <p className="text-gray-700">
                  Proficient in statistical analysis, data cleaning, and exploratory data analysis using Python, SQL, and visualization tools.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="bg-white text-xs px-2 py-1 rounded text-blue-600 font-medium">Python</span>
                  <span className="bg-white text-xs px-2 py-1 rounded text-blue-600 font-medium">SQL</span>
                  <span className="bg-white text-xs px-2 py-1 rounded text-blue-600 font-medium">Pandas</span>
                  <span className="bg-white text-xs px-2 py-1 rounded text-blue-600 font-medium">Data Visualization</span>
                </div>
              </div>
              
              <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <FaRobot className="text-purple-500" /> Artificial Intelligence
                </h4>
                <p className="text-gray-700">
                  Knowledge of deep learning frameworks, natural language processing, and neural networks for complex problem-solving.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="bg-white text-xs px-2 py-1 rounded text-purple-600 font-medium">Deep Learning</span>
                  <span className="bg-white text-xs px-2 py-1 rounded text-purple-600 font-medium">Neural Networks</span>
                  <span className="bg-white text-xs px-2 py-1 rounded text-purple-600 font-medium">NLP</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <FaBrain className="text-green-500" /> Machine Learning
                </h4>
                <p className="text-gray-700">
                  Experienced in building predictive models, classification, regression, and clustering algorithms using scikit-learn and TensorFlow.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="bg-white text-xs px-2 py-1 rounded text-green-600 font-medium">scikit-learn</span>
                  <span className="bg-white text-xs px-2 py-1 rounded text-green-600 font-medium">TensorFlow</span>
                  <span className="bg-white text-xs px-2 py-1 rounded text-green-600 font-medium">Classification</span>
                  <span className="bg-white text-xs px-2 py-1 rounded text-green-600 font-medium">Regression</span>
                </div>
              </div>
              
              <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <FaDatabase className="text-orange-500" /> Data Engineering
                </h4>
                <p className="text-gray-700">
                  Skills in database design, data pipeline creation, ETL processes, and cloud data solutions using Azure.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="bg-white text-xs px-2 py-1 rounded text-orange-600 font-medium">Azure</span>
                  <span className="bg-white text-xs px-2 py-1 rounded text-orange-600 font-medium">ETL</span>
                  <span className="bg-white text-xs px-2 py-1 rounded text-orange-600 font-medium">SQL</span>
                  <span className="bg-white text-xs px-2 py-1 rounded text-orange-600 font-medium">Data Pipeline</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="text-center mt-12">
          <Button 
            asChild 
            className="bg-primary hover:bg-primary/90"
          >
            <a 
              href="https://ml-bi-portfolio-nsswyjpsruugetry7gbm3u.streamlit.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <span>Explore Interactive ML/AI Projects</span>
              <FaExternalLinkAlt size={14} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DataScience;