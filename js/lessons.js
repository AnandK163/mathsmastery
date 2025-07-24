// Lessons Page JavaScript
let selectedClass = null;
let selectedChapter = null;

// Class data with curriculum structure
const classData = [
    {
        classNumber: 6,
        title: "Class 6 Mathematics",
        description: "Basic concepts and fundamentals",
        chaptersCount: 8,
        lessonsCount: 32,
        difficulty: "Easy",
        isComingSoon: true
    },
    {
        classNumber: 7,
        title: "Class 7 Mathematics",
        description: "Building on foundational concepts",
        chaptersCount: 10,
        lessonsCount: 40,
        difficulty: "Easy",
        isComingSoon: true
    },
    {
        classNumber: 8,
        title: "Class 8 Mathematics",
        description: "Introduction to advanced topics",
        chaptersCount: 12,
        lessonsCount: 48,
        difficulty: "Medium",
        isComingSoon: true
    },
    {
        classNumber: 9,
        title: "Class 9 Mathematics",
        description: "Preparing for advanced mathematics",
        chaptersCount: 15,
        lessonsCount: 60,
        difficulty: "Medium",
        isComingSoon: false
    },
    {
        classNumber: 10,
        title: "Class 10 Mathematics",
        description: "Advanced concepts and board preparation",
        chaptersCount: 16,
        lessonsCount: 64,
        difficulty: "Hard",
        isComingSoon: false
    }
];

// Chapter data for available classes (9 and 10)
// TO UPDATE: Replace YouTube URLs with actual educational content
const chapterData = {
    9: [
        {
            id: "ch1",
            title: "Number Systems",
            description: "Real numbers, rational and irrational numbers",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // PLACEHOLDER - UPDATE THIS
            duration: "45 min",
            topics: ["Real Numbers", "Rational Numbers", "Irrational Numbers", "Number Line"]
        },
        {
            id: "ch2",
            title: "Polynomials",
            description: "Introduction to polynomials and their operations",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // PLACEHOLDER - UPDATE THIS
            duration: "60 min",
            topics: ["Types of Polynomials", "Addition", "Subtraction", "Multiplication"]
        },
        {
            id: "ch3",
            title: "Coordinate Geometry",
            description: "Cartesian plane and coordinate systems",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // PLACEHOLDER - UPDATE THIS
            duration: "50 min",
            topics: ["Coordinate Plane", "Distance Formula", "Section Formula"]
        },
        {
            id: "ch4",
            title: "Linear Equations in Two Variables",
            description: "Solving systems of linear equations",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // PLACEHOLDER - UPDATE THIS
            duration: "55 min",
            topics: ["Graphing", "Substitution Method", "Elimination Method"]
        }
    ],
    10: [
        {
            id: "ch1",
            title: "Real Numbers",
            description: "Euclid's division algorithm and fundamental theorem",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // PLACEHOLDER - UPDATE THIS
            duration: "50 min",
            topics: ["Euclid's Algorithm", "HCF and LCM", "Fundamental Theorem"]
        },
        {
            id: "ch2",
            title: "Polynomials",
            description: "Relationship between zeros and coefficients",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // PLACEHOLDER - UPDATE THIS
            duration: "65 min",
            topics: ["Zeros of Polynomials", "Factorization", "Division Algorithm"]
        },
        {
            id: "ch3",
            title: "Pair of Linear Equations",
            description: "Solving linear equations in two variables",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // PLACEHOLDER - UPDATE THIS
            duration: "70 min",
            topics: ["Graphical Method", "Substitution", "Cross-multiplication"]
        },
        {
            id: "ch4",
            title: "Quadratic Equations",
            description: "Nature of roots and methods of solving",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // PLACEHOLDER - UPDATE THIS
            duration: "60 min",
            topics: ["Factorization", "Quadratic Formula", "Nature of Roots"]
        }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    initializeLessons();
    setupEventListeners();
});

function initializeLessons() {
    showClassSelection();
}

function setupEventListeners() {
    document.getElementById('back-btn').addEventListener('click', showClassSelection);
    document.getElementById('back-to-chapters').addEventListener('click', showChapterSelection);
}

function showClassSelection() {
    selectedClass = null;
    selectedChapter = null;
    
    document.getElementById('class-selection').classList.remove('hidden');
    document.getElementById('chapter-selection').classList.add('hidden');
    document.getElementById('video-player').classList.add('hidden');
    document.getElementById('breadcrumb').classList.add('hidden');
    
    renderClasses();
}

function showChapterSelection() {
    selectedChapter = null;
    
    document.getElementById('class-selection').classList.add('hidden');
    document.getElementById('chapter-selection').classList.remove('hidden');
    document.getElementById('video-player').classList.add('hidden');
    document.getElementById('breadcrumb').classList.remove('hidden');
    
    document.getElementById('breadcrumb-text').textContent = `Lessons / Class ${selectedClass}`;
    document.getElementById('chapter-title').textContent = `Class ${selectedClass} - Choose a Chapter`;
    
    renderChapters();
}

function showVideoPlayer(chapterId) {
    selectedChapter = chapterId;
    const chapter = chapterData[selectedClass].find(ch => ch.id === chapterId);
    
    if (!chapter) return;
    
    document.getElementById('class-selection').classList.add('hidden');
    document.getElementById('chapter-selection').classList.add('hidden');
    document.getElementById('video-player').classList.remove('hidden');
    
    // Update video content
    document.getElementById('video-title').textContent = chapter.title;
    document.getElementById('video-description').textContent = chapter.description;
    document.getElementById('video-frame').src = chapter.videoUrl;
    
    // Render topics
    const topicsContainer = document.getElementById('video-topics');
    topicsContainer.innerHTML = chapter.topics.map(topic => 
        `<span class="badge badge-outline">${topic}</span>`
    ).join('');
}

function renderClasses() {
    const container = document.getElementById('class-selection');
    
    container.innerHTML = classData.map(classInfo => {
        const difficultyColors = {
            'Easy': 'bg-green-100 text-green-800',
            'Medium': 'bg-yellow-100 text-yellow-800',
            'Hard': 'bg-red-100 text-red-800'
        };
        
        return `
            <div class="card cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-card animate-slide-up relative ${classInfo.isComingSoon ? 'pointer-events-none' : ''}" 
                 onclick="${classInfo.isComingSoon ? '' : `handleClassSelect(${classInfo.classNumber})`}">
                ${classInfo.isComingSoon ? `
                    <div class="coming-soon-overlay">
                        <div class="coming-soon-text">
                            <div class="text-2xl mb-2">🚀</div>
                            <div>Coming Soon</div>
                        </div>
                    </div>
                ` : ''}
                
                <div class="card-header">
                    <div class="flex items-center justify-between mb-4">
                        <div class="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white text-xl font-bold">
                            ${classInfo.classNumber}
                        </div>
                        <span class="badge ${difficultyColors[classInfo.difficulty]}">${classInfo.difficulty}</span>
                    </div>
                    <h3 class="card-title">${classInfo.title}</h3>
                    <p class="card-description">${classInfo.description}</p>
                </div>
                
                <div class="card-content">
                    <div class="flex justify-between text-sm text-muted-foreground mb-4">
                        <span>📚 ${classInfo.chaptersCount} chapters</span>
                        <span>🎯 ${classInfo.lessonsCount} lessons</span>
                    </div>
                    <button class="btn ${classInfo.isComingSoon ? 'btn-outline opacity-50' : 'btn-primary'} w-full">
                        ${classInfo.isComingSoon ? 'Coming Soon' : 'Start Learning'}
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function renderChapters() {
    const container = document.getElementById('chapters-grid');
    const chapters = chapterData[selectedClass] || [];
    
    container.innerHTML = chapters.map(chapter => `
        <div class="card cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-card animate-slide-up"
             onclick="handleChapterSelect('${chapter.id}')">
            <div class="card-header">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white">
                            📚
                        </div>
                        <div>
                            <h3 class="card-title text-lg">${chapter.title}</h3>
                            <p class="card-description">${chapter.description}</p>
                        </div>
                    </div>
                    <span class="badge badge-outline">${chapter.duration}</span>
                </div>
            </div>
            <div class="card-content">
                <div class="space-y-3">
                    <div class="flex flex-wrap gap-2">
                        ${chapter.topics.slice(0, 3).map(topic => 
                            `<span class="badge badge-secondary text-xs">${topic}</span>`
                        ).join('')}
                        ${chapter.topics.length > 3 ? 
                            `<span class="badge badge-outline text-xs">+${chapter.topics.length - 3} more</span>` : ''
                        }
                    </div>
                    <button class="btn btn-primary w-full">
                        ▶️ Watch Lesson
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function handleClassSelect(classNumber) {
    if (classNumber === 6 || classNumber === 7 || classNumber === 8) {
        return; // Coming soon classes
    }
    selectedClass = classNumber;
    showChapterSelection();
}

function handleChapterSelect(chapterId) {
    showVideoPlayer(chapterId);
}