
import React from 'react';
import { Code2, BrainCircuit, Database, Cpu, Github, Linkedin, Mail, MapPin, Send, Download, ExternalLink, Camera, Plane, MessageSquare, Shield, FileText, LayoutGrid } from 'lucide-react';
import { Project, SkillCategory, Stat } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'Programming',
    skills: ['Python', 'Java', 'JavaScript', 'SQL'],
    icon: 'code'
  },
  {
    title: 'ML & Frameworks',
    skills: ['TensorFlow', 'Scikit-learn', 'YOLO', 'PyTorch'],
    icon: 'brain'
  },
  {
    title: 'AI & Deep Learning',
    skills: ['CNNs', 'NLP', 'Computer Vision', 'Feature Engineering'],
    icon: 'cpu'
  },
  {
    title: 'Data & Tools',
    skills: ['Pandas', 'NumPy', 'MongoDB', 'Git'],
    icon: 'database'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Real-Time License Plate Detection System',
    description: 'End-to-end license plate detection pipeline using YOLOv8 for real-time object detection. Achieved approximately 0.92 mAP@0.5 on validation data through model training and hyperparameter tuning. Integrated Tesseract OCR to extract license plate text with 90%+ accuracy.',
    image: '/avnp.jpg',
    tags: ['Python', 'YOLOv8', 'OpenCV', 'Tesseract OCR', 'Streamlit'],
    githubUrl: '#',
    demoUrl: '#',
    icon: 'camera'
  },
  {
    id: 2,
    title: 'Flight Price Prediction',
    description: 'Machine learning project to predict flight prices using regression models. Implemented feature engineering on flight data including airlines, departure times, and routes. Built and compared multiple ML models to achieve optimal price predictions for travelers.',
    image: '/fpp.jpg',
    tags: ['Python', 'Scikit-learn', 'Regression', 'Feature Engineering'],
    githubUrl: '#',
    demoUrl: '#',
    icon: 'plane'
  },
  {
    id: 3,
    title: 'Twitter Sentiment Analysis using SVM',
    description: 'Natural Language Processing project to analyze sentiment of tweets using Support Vector Machine classifier. Implemented text preprocessing, feature extraction using TF-IDF, and model training to classify tweets into positive, negative, or neutral sentiments.',
    image: '/sentiments.jpg',
    tags: ['Python', 'SVM', 'NLP', 'TF-IDF', 'Sentiment Analysis'],
    githubUrl: '#',
    demoUrl: '#',
    icon: 'message'
  },
  {
    id: 4,
    title: 'Occlusion Invariant Face Recognition System',
    description: 'Trained a face recognition model on 30,000 CelebA-HQ images resized to 256x256 RGB resolution. Implemented ResNet-18 architecture, achieving 96.2% training accuracy and 94% validation accuracy. Generated 4 types of synthetic facial occlusions, improving model robustness under masked conditions.',
    image: '/occlusion.jpg',
    tags: ['Python', 'TensorFlow', 'EfficientNet-B1', 'Computer Vision'],
    githubUrl: '#',
    demoUrl: '#',
    icon: 'shield'
  },
  {
    id: 5,
    title: 'NLP-Based Resume Screening & Ranking System',
    description: 'Designed an NLP-based resume screening and ranking system, reducing shortlisting time by 70%. Implemented a job-resume similarity system, processing 750+ resumes and saving 5 hours/week. Built and deployed a Flask-based web app automating resume JD matching for 100+ job descriptions.',
    image: '/ats.jpg',
    tags: ['NLP', 'Flask', 'Python', 'Similarity Matching'],
    githubUrl: '#',
    demoUrl: '#',
    icon: 'file'
  },
  {
    id: 6,
    title: 'Deep Learning Image Classification',
    description: 'Designed a deep learning multi-class lesion classification system using CNN architectures. Trained the model on 10,015 dermoscopic images from the HAM10000 dataset with an 80/20 train-validation split. Optimized training over 80 epochs, achieving 90% validation accuracy.',
    image: '/scd.jpg',
    tags: ['TensorFlow', 'CNN', 'HAM10000', 'Classification'],
    githubUrl: '#',
    demoUrl: '#',
    icon: 'layout'
  }
];

export const STATS: Stat[] = [
  { label: 'CGPA', value: '8.7' },
  { label: 'Internships', value: '2' },
  { label: 'Technologies', value: '10+' }
];

export const getIcon = (name: string, className?: string) => {
  switch (name) {
    case 'code': return <Code2 className={className} />;
    case 'brain': return <BrainCircuit className={className} />;
    case 'cpu': return <Cpu className={className} />;
    case 'database': return <Database className={className} />;
    case 'github': return <Github className={className} />;
    case 'linkedin': return <Linkedin className={className} />;
    case 'mail': return <Mail className={className} />;
    case 'map-pin': return <MapPin className={className} />;
    case 'send': return <Send className={className} />;
    case 'download': return <Download className={className} />;
    case 'external': return <ExternalLink className={className} />;
    case 'camera': return <Camera className={className} />;
    case 'plane': return <Plane className={className} />;
    case 'message': return <MessageSquare className={className} />;
    case 'shield': return <Shield className={className} />;
    case 'file': return <FileText className={className} />;
    case 'layout': return <LayoutGrid className={className} />;
    default: return <Code2 className={className} />;
  }
};
