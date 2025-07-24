// Quizzes Page JavaScript
let selectedClass = null;
let selectedChapter = null;
let currentQuiz = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let quizScore = 0;

// Quiz data structure based on Telangana SSC curriculum
// TO UPDATE: Add more questions and modify existing ones as needed
const quizData = {
    6: [
        {
            id: "ch1",
            title: "Knowing Our Numbers",
            description: "Place value, comparison, and operations with numbers",
            questions: [
                {
                    question: "What is the place value of 7 in the number 47,865?",
                    options: ["7", "70", "700", "7000"],
                    correct: 3,
                    explanation: "7 is in the thousands place, so its place value is 7000."
                },
                {
                    question: "Which number is the largest?",
                    options: ["9,876", "10,234", "9,999", "10,001"],
                    correct: 1,
                    explanation: "10,234 is the largest among the given numbers."
                }
            ]
        }
    ],
    7: [
        {
            id: "ch1",
            title: "Integers",
            description: "Operations with positive and negative numbers",
            questions: [
                {
                    question: "What is (-5) + (+3)?",
                    options: ["-8", "-2", "2", "8"],
                    correct: 1,
                    explanation: "(-5) + (+3) = -5 + 3 = -2"
                },
                {
                    question: "Which is smaller: -10 or -5?",
                    options: ["-10", "-5", "Both are equal", "Cannot determine"],
                    correct: 0,
                    explanation: "-10 is smaller than -5 on the number line."
                }
            ]
        }
    ],
    8: [
        {
            id: "ch1",
            title: "Rational Numbers",
            description: "Understanding and operations with rational numbers",
            questions: [
                {
                    question: "Which of the following is a rational number?",
                    options: ["√2", "π", "3/4", "√3"],
                    correct: 2,
                    explanation: "3/4 can be expressed as a fraction, making it a rational number."
                }
            ]
        }
    ],
    9: [
        {
            id: "ch1",
            title: "Number Systems",
            description: "Real numbers, rational and irrational numbers",
            questions: [
                {
                    question: "Which of the following is an irrational number?",
                    options: ["1/3", "0.25", "√2", "2/7"],
                    correct: 2,
                    explanation: "√2 cannot be expressed as a fraction of integers, making it irrational."
                },
                {
                    question: "What is the decimal expansion of 1/3?",
                    options: ["0.33", "0.333...", "0.3", "0.34"],
                    correct: 1,
                    explanation: "1/3 = 0.333... (recurring decimal)"
                },
                {
                    question: "Between which two consecutive integers does √10 lie?",
                    options: ["2 and 3", "3 and 4", "4 and 5", "9 and 11"],
                    correct: 1,
                    explanation: "Since 9 < 10 < 16, we have 3 < √10 < 4"
                },
                {
                    question: "Which property is satisfied by rational numbers under addition?",
                    options: ["Closure", "Associativity", "Commutativity", "All of the above"],
                    correct: 3,
                    explanation: "Rational numbers satisfy closure, associativity, and commutativity under addition."
                },
                {
                    question: "What is the additive inverse of -3/7?",
                    options: ["-7/3", "7/3", "3/7", "-3/7"],
                    correct: 2,
                    explanation: "The additive inverse of -3/7 is 3/7 because (-3/7) + (3/7) = 0"
                }
            ]
        },
        {
            id: "ch2",
            title: "Polynomials",
            description: "Introduction to polynomials and their operations",
            questions: [
                {
                    question: "What is the degree of the polynomial 3x³ + 2x² - 5x + 1?",
                    options: ["1", "2", "3", "4"],
                    correct: 2,
                    explanation: "The highest power of x is 3, so the degree is 3."
                },
                {
                    question: "Which of the following is a linear polynomial?",
                    options: ["x² + 1", "2x + 3", "x³ - x", "5"],
                    correct: 1,
                    explanation: "2x + 3 is a polynomial of degree 1, making it linear."
                },
                {
                    question: "What is the coefficient of x² in the polynomial 4x³ - 2x² + x - 7?",
                    options: ["4", "-2", "1", "-7"],
                    correct: 1,
                    explanation: "The coefficient of x² term (-2x²) is -2."
                },
                {
                    question: "If p(x) = x² - 3x + 2, what is p(1)?",
                    options: ["0", "1", "2", "6"],
                    correct: 0,
                    explanation: "p(1) = 1² - 3(1) + 2 = 1 - 3 + 2 = 0"
                },
                {
                    question: "What is the sum of (2x + 3) and (4x - 1)?",
                    options: ["6x + 2", "6x + 4", "2x + 2", "8x + 3"],
                    correct: 0,
                    explanation: "(2x + 3) + (4x - 1) = 2x + 4x + 3 - 1 = 6x + 2"
                }
            ]
        }
    ],
    10: [
        {
            id: "ch1",
            title: "Real Numbers",
            description: "Euclid's division algorithm and fundamental theorem",
            questions: [
                {
                    question: "According to Euclid's division algorithm, if a = bq + r, then:",
                    options: ["r < b", "r > b", "r = b", "r ≥ b"],
                    correct: 0,
                    explanation: "In Euclid's division algorithm, the remainder r must be less than the divisor b."
                },
                {
                    question: "What is the HCF of 12 and 18?",
                    options: ["2", "3", "6", "36"],
                    correct: 2,
                    explanation: "The factors of 12 are 1,2,3,4,6,12 and of 18 are 1,2,3,6,9,18. The highest common factor is 6."
                },
                {
                    question: "If HCF(a,b) = h, then LCM(a,b) × h = ?",
                    options: ["a + b", "a - b", "a × b", "a ÷ b"],
                    correct: 2,
                    explanation: "For any two numbers, HCF × LCM = Product of the numbers"
                },
                {
                    question: "The decimal expansion of which rational number terminates?",
                    options: ["1/3", "1/7", "1/8", "1/9"],
                    correct: 2,
                    explanation: "1/8 = 0.125 terminates because 8 = 2³ (only powers of 2 and 5 in denominator)"
                },
                {
                    question: "√2 is:",
                    options: ["Rational", "Irrational", "Integer", "Natural"],
                    correct: 1,
                    explanation: "√2 cannot be expressed as p/q where p and q are integers, so it's irrational."
                }
            ]
        },
        {
            id: "ch2",
            title: "Polynomials",
            description: "Relationship between zeros and coefficients",
            questions: [
                {
                    question: "If α and β are zeros of x² - 5x + 6, then α + β = ?",
                    options: ["5", "-5", "6", "-6"],
                    correct: 0,
                    explanation: "For ax² + bx + c, sum of zeros = -b/a = -(-5)/1 = 5"
                },
                {
                    question: "The zeros of polynomial x² - 1 are:",
                    options: ["1, -1", "1, 1", "0, 1", "0, -1"],
                    correct: 0,
                    explanation: "x² - 1 = (x-1)(x+1), so zeros are x = 1 and x = -1"
                },
                {
                    question: "If one zero of 3x² + 8x + k is -2, find k:",
                    options: ["4", "-4", "8", "-8"],
                    correct: 0,
                    explanation: "Substituting x = -2: 3(-2)² + 8(-2) + k = 0, so 12 - 16 + k = 0, k = 4"
                },
                {
                    question: "The product of zeros of 2x² - 3x + 1 is:",
                    options: ["1/2", "-1/2", "3/2", "-3/2"],
                    correct: 0,
                    explanation: "For ax² + bx + c, product of zeros = c/a = 1/2"
                },
                {
                    question: "A quadratic polynomial with zeros 2 and 3 is:",
                    options: ["x² - 5x + 6", "x² + 5x + 6", "x² - 5x - 6", "x² + 5x - 6"],
                    correct: 0,
                    explanation: "If zeros are 2 and 3, polynomial is (x-2)(x-3) = x² - 5x + 6"
                }
            ]
        }
    ]
};

// Class data (same as lessons page but focused on quizzes)
const classData = [
    {
        classNumber: 6,
        title: "Class 6 Quiz",
        description: "Basic arithmetic and number concepts",
        chaptersCount: 4,
        quizzesCount: 8,
        difficulty: "Easy",
        isComingSoon: true
    },
    {
        classNumber: 7,
        title: "Class 7 Quiz",
        description: "Integers, fractions, and basic algebra",
        chaptersCount: 6,
        quizzesCount: 12,
        difficulty: "Easy",
        isComingSoon: true
    },
    {
        classNumber: 8,
        title: "Class 8 Quiz",
        description: "Rational numbers and linear equations",
        chaptersCount: 8,
        quizzesCount: 16,
        difficulty: "Medium",
        isComingSoon: true
    },
    {
        classNumber: 9,
        title: "Class 9 Quiz",
        description: "Number systems and polynomials",
        chaptersCount: 10,
        quizzesCount: 20,
        difficulty: "Medium",
        isComingSoon: false
    },
    {
        classNumber: 10,
        title: "Class 10 Quiz",
        description: "Advanced topics and board preparation",
        chaptersCount: 12,
        quizzesCount: 24,
        difficulty: "Hard",
        isComingSoon: false
    }
];

document.addEventListener('DOMContentLoaded', function() {
    initializeQuizzes();
    setupEventListeners();
});

function initializeQuizzes() {
    showClassSelection();
}

function setupEventListeners() {
    document.getElementById('back-btn').addEventListener('click', showClassSelection);
    document.getElementById('back-to-chapters').addEventListener('click', showChapterSelection);
    document.getElementById('review-answers').addEventListener('click', showReview);
    document.getElementById('retake-quiz').addEventListener('click', retakeQuiz);
    document.getElementById('back-to-quizzes').addEventListener('click', showChapterSelection);
}

function showClassSelection() {
    selectedClass = null;
    selectedChapter = null;
    
    document.getElementById('class-selection').classList.remove('hidden');
    document.getElementById('chapter-selection').classList.add('hidden');
    document.getElementById('quiz-player').classList.add('hidden');
    document.getElementById('breadcrumb').classList.add('hidden');
    
    renderClasses();
}

function showChapterSelection() {
    selectedChapter = null;
    
    document.getElementById('class-selection').classList.add('hidden');
    document.getElementById('chapter-selection').classList.remove('hidden');
    document.getElementById('quiz-player').classList.add('hidden');
    document.getElementById('breadcrumb').classList.remove('hidden');
    
    document.getElementById('breadcrumb-text').textContent = `Quizzes / Class ${selectedClass}`;
    document.getElementById('chapter-title').textContent = `Class ${selectedClass} - Choose a Chapter Quiz`;
    
    renderChapters();
}

function showQuizPlayer(chapterId) {
    selectedChapter = chapterId;
    const chapterQuiz = quizData[selectedClass].find(ch => ch.id === chapterId);
    
    if (!chapterQuiz) return;
    
    currentQuiz = chapterQuiz;
    currentQuestionIndex = 0;
    userAnswers = [];
    quizScore = 0;
    
    document.getElementById('class-selection').classList.add('hidden');
    document.getElementById('chapter-selection').classList.add('hidden');
    document.getElementById('quiz-player').classList.remove('hidden');
    document.getElementById('quiz-content').classList.remove('hidden');
    document.getElementById('quiz-results').classList.add('hidden');
    
    // Update quiz header
    document.getElementById('quiz-title').textContent = chapterQuiz.title;
    document.getElementById('quiz-description').textContent = chapterQuiz.description;
    
    renderCurrentQuestion();
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
                        <div class="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center text-white text-xl font-bold">
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
                        <span>🧠 ${classInfo.quizzesCount} quizzes</span>
                    </div>
                    <button class="btn ${classInfo.isComingSoon ? 'btn-outline opacity-50' : 'btn-secondary'} w-full">
                        ${classInfo.isComingSoon ? 'Coming Soon' : 'Start Quiz'}
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function renderChapters() {
    const container = document.getElementById('chapters-grid');
    const chapters = quizData[selectedClass] || [];
    
    container.innerHTML = chapters.map(chapter => `
        <div class="card cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-card animate-slide-up"
             onclick="handleChapterSelect('${chapter.id}')">
            <div class="card-header">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center text-white">
                            🧠
                        </div>
                        <div>
                            <h3 class="card-title text-lg">${chapter.title}</h3>
                            <p class="card-description">${chapter.description}</p>
                        </div>
                    </div>
                    <span class="badge badge-outline">${chapter.questions.length} questions</span>
                </div>
            </div>
            <div class="card-content">
                <button class="btn btn-secondary w-full">
                    🎯 Start Quiz
                </button>
            </div>
        </div>
    `).join('');
}

function renderCurrentQuestion() {
    if (!currentQuiz || currentQuestionIndex >= currentQuiz.questions.length) {
        showResults();
        return;
    }
    
    const question = currentQuiz.questions[currentQuestionIndex];
    const container = document.getElementById('quiz-content');
    
    // Update progress
    document.getElementById('quiz-progress').textContent = 
        `${currentQuestionIndex + 1} / ${currentQuiz.questions.length}`;
    
    container.innerHTML = `
        <div class="quiz-question">
            <h3 class="text-xl font-semibold mb-4">
                Question ${currentQuestionIndex + 1}: ${question.question}
            </h3>
            <div class="quiz-options">
                ${question.options.map((option, index) => `
                    <div class="quiz-option" onclick="selectOption(${index})" data-index="${index}">
                        <span class="font-medium">${String.fromCharCode(65 + index)}.</span> ${option}
                    </div>
                `).join('')}
            </div>
            <div class="mt-6 flex justify-between">
                <button id="prev-btn" class="btn btn-outline" onclick="previousQuestion()" 
                        ${currentQuestionIndex === 0 ? 'disabled' : ''}>
                    Previous
                </button>
                <button id="next-btn" class="btn btn-primary" onclick="nextQuestion()" disabled>
                    ${currentQuestionIndex === currentQuiz.questions.length - 1 ? 'Finish Quiz' : 'Next'}
                </button>
            </div>
        </div>
    `;
}

function selectOption(optionIndex) {
    // Remove previous selection
    document.querySelectorAll('.quiz-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Add selection to clicked option
    const selectedOption = document.querySelector(`[data-index="${optionIndex}"]`);
    selectedOption.classList.add('selected');
    
    // Store user answer
    userAnswers[currentQuestionIndex] = optionIndex;
    
    // Enable next button
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    if (userAnswers[currentQuestionIndex] === undefined) return;
    
    currentQuestionIndex++;
    renderCurrentQuestion();
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderCurrentQuestion();
    }
}

function showResults() {
    // Calculate score
    quizScore = 0;
    currentQuiz.questions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            quizScore++;
        }
    });
    
    const percentage = Math.round((quizScore / currentQuiz.questions.length) * 100);
    
    // Award points based on performance
    let pointsEarned = 0;
    if (percentage >= 90) pointsEarned = 20;
    else if (percentage >= 80) pointsEarned = 15;
    else if (percentage >= 70) pointsEarned = 10;
    else if (percentage >= 60) pointsEarned = 5;
    
    // Save quiz result to store
    if (window.gameStore && pointsEarned > 0) {
        window.gameStore.addQuizResult({
            class: selectedClass,
            chapter: currentQuiz.title,
            score: quizScore,
            totalQuestions: currentQuiz.questions.length
        });
    }
    
    // Show results
    document.getElementById('quiz-content').classList.add('hidden');
    document.getElementById('quiz-results').classList.remove('hidden');
    
    document.getElementById('score-display').textContent = `${quizScore}/${currentQuiz.questions.length}`;
    document.getElementById('percentage-display').textContent = `${percentage}%`;
    document.getElementById('points-earned').textContent = `+${pointsEarned} points earned`;
}

function showReview() {
    const container = document.getElementById('quiz-content');
    container.classList.remove('hidden');
    document.getElementById('quiz-results').classList.add('hidden');
    
    container.innerHTML = `
        <div class="space-y-6">
            <h3 class="text-2xl font-bold mb-6">Review Your Answers</h3>
            ${currentQuiz.questions.map((question, qIndex) => {
                const userAnswer = userAnswers[qIndex];
                const isCorrect = userAnswer === question.correct;
                
                return `
                    <div class="card">
                        <div class="card-header">
                            <h4 class="text-lg font-semibold">
                                Question ${qIndex + 1}: ${question.question}
                            </h4>
                        </div>
                        <div class="card-content">
                            <div class="space-y-2">
                                ${question.options.map((option, oIndex) => {
                                    let classes = 'p-3 rounded border';
                                    if (oIndex === question.correct) {
                                        classes += ' quiz-option correct';
                                    } else if (oIndex === userAnswer && !isCorrect) {
                                        classes += ' quiz-option incorrect';
                                    } else {
                                        classes += ' border-border';
                                    }
                                    
                                    return `
                                        <div class="${classes}">
                                            <span class="font-medium">${String.fromCharCode(65 + oIndex)}.</span> ${option}
                                            ${oIndex === question.correct ? ' ✓' : ''}
                                            ${oIndex === userAnswer && !isCorrect ? ' ✗' : ''}
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                            <div class="mt-4 p-3 bg-muted rounded">
                                <strong>Explanation:</strong> ${question.explanation}
                            </div>
                        </div>
                    </div>
                `;
            }).join('')}
            
            <div class="text-center">
                <button onclick="showResults()" class="btn btn-primary">Back to Results</button>
            </div>
        </div>
    `;
}

function retakeQuiz() {
    showQuizPlayer(selectedChapter);
}

function handleClassSelect(classNumber) {
    if (classNumber === 6 || classNumber === 7 || classNumber === 8) {
        return; // Coming soon classes
    }
    selectedClass = classNumber;
    showChapterSelection();
}

function handleChapterSelect(chapterId) {
    showQuizPlayer(chapterId);
}