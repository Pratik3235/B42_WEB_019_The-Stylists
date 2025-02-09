const Links = {
    "Learn Key Technologies": [
        ["Python", "https://www.coursera.org/courses?query=python"],
        ["SQL", "https://www.coursera.org/courses?query=sql"],
        ["Microsoft Excel", "https://www.coursera.org/courses?query=microsoft%20excel"],
        ["Power BI", "https://www.coursera.org/courses?query=microsoft%20power%20bi"],
        ["Tableau", "https://www.coursera.org/courses?query=tableau"],
        ["R Programming", "https://www.coursera.org/courses?query=r"],
        ["Git", "https://www.coursera.org/courses?query=git"],
        ["Docker", "https://www.coursera.org/courses?query=docker"],
        ["AWS", "https://www.coursera.org/courses?query=aws"],
        ["TensorFlow", "https://www.coursera.org/courses?query=tensorflow"]
    ],
    "Essential Skills": [
        ["Data Analytics", "https://www.coursera.org/courses?query=data%20analytics"],
        ["Artificial Intelligence", "https://www.coursera.org/courses?query=artificial%20intelligence"],
        ["Cybersecurity", "https://www.coursera.org/courses?query=cybersecurity"],
        ["Digital Marketing", "https://www.coursera.org/courses?query=digital%20marketing"],
        ["Machine Learning", "https://www.coursera.org/courses?query=machine%20learning&skills=Machine%20Learning"],
        ["Statistical Analysis", "https://www.coursera.org/courses?query=statistical%20analysis"],
        ["Database Management", "https://www.coursera.org/courses?query=database%20management"],
        ["Web Development", "https://www.coursera.org/courses?query=web%20development"],
        ["Financial Modeling", "https://www.coursera.org/courses?query=financial%20modeling"],
        ["Business Analysis", "https://www.coursera.org/courses?query=business%20analysis"]
    ],
    "Industry Solutions": [
        ["Healthcare Analytics", "https://www.coursera.org/courses?query=healthcare%20data%20analytics"],
        ["Sales", "https://www.coursera.org/courses?query=sales"],
        ["Digital Transformation", "https://www.coursera.org/courses?query=digital%20transformation"],
        ["Supply Chain", "https://www.coursera.org/courses?query=supply%20chain"],
        ["Marketing Analytics", "https://www.coursera.org/courses?query=marketing%20analytics"],
        ["HR Analytics", "https://www.coursera.org/courses?query=hr%20analytics"],
        ["Social Media Marketing", "https://www.coursera.org/courses?query=social%20media%20marketing"],
        ["Risk Management", "https://www.coursera.org/courses?query=risk%20management"],
        ["Sustainability", "https://www.coursera.org/courses?query=sustainability"],
        ["E-commerce", "https://www.coursera.org/courses?query=e-commerce"]
    ],
    "Career Paths": [
        ["Data Scientist", "https://www.coursera.org/career-academy/roles/data-scientist"],
        ["Data Analyst", "https://www.coursera.org/career-academy/roles/data-analyst"],
        ["Machine Learning Engineer", "https://www.coursera.org/career-academy/roles/machine-learning-engineer"],
        ["Full Stack Developer", "https://www.coursera.org/career-academy/roles/full-stack-developer"],
        ["Project Manager", "https://www.coursera.org/career-academy/roles/project-manager"],
        ["Product Manager", "https://www.coursera.org/career-academy/roles/product-manager"],
        ["Data Engineer", "https://www.coursera.org/career-academy/roles/data-engineer"],
        ["Digital Marketing Specialist", "https://www.coursera.org/career-academy/roles/digital-marketing-specialist"],
        ["Cybersecurity Analyst", "https://www.coursera.org/career-academy/roles/cyber-security-analyst"],
        ["Career Aptitude Test", "https://www.coursera.org/resources/career-quiz"]
    ]
};

const container = document.getElementById("footer-section");
Object.entries(Links).forEach(([title, items]) => {
    const column = document.createElement("div");
    column.classList.add("column");
    
    const heading = document.createElement("h3");
    heading.textContent = title;
    column.appendChild(heading);
    
    items.forEach(([name, url]) => {
        const link = document.createElement("a");
        link.href = url;
        link.textContent = name;
        link.target = "_blank";
        column.appendChild(link);
    });
    
    container.appendChild(column);
});