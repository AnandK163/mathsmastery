// Math Games JavaScript
let currentGame = null;
let gameState = {};

// Game definitions - TO ADD: Add new games to this array
const games = [
    {
        id: 'arithmetic-speed',
        title: 'Arithmetic Speed Challenge',
        description: 'Solve arithmetic problems as fast as you can!',
        icon: '⚡',
        difficulty: 'Easy',
        category: 'Arithmetic',
        render: renderArithmeticSpeed
    },
    {
        id: 'equation-solver',
        title: 'Equation Solver Puzzle',
        description: 'Find the missing values in equations',
        icon: '🧩',
        difficulty: 'Medium',
        category: 'Algebra',
        render: renderEquationSolver
    },
    {
        id: 'geometry-builder',
        title: 'Geometry Shape Builder',
        description: 'Create shapes and learn their properties',
        icon: '📐',
        difficulty: 'Medium',
        category: 'Geometry',
        render: renderGeometryBuilder
    },
    {
        id: 'fraction-match',
        title: 'Fraction Matching Game',
        description: 'Match equivalent fractions and decimals',
        icon: '🎯',
        difficulty: 'Easy',
        category: 'Fractions',
        render: renderFractionMatch
    }
];

document.addEventListener('DOMContentLoaded', function() {
    renderGameSelection();
    setupEventListeners();
});

function setupEventListeners() {
    document.getElementById('back-to-games').addEventListener('click', showGameSelection);
}

function showGameSelection() {
    currentGame = null;
    gameState = {};
    
    document.getElementById('game-selection').classList.remove('hidden');
    document.getElementById('game-player').classList.add('hidden');
}

function renderGameSelection() {
    const container = document.getElementById('game-selection');
    
    container.innerHTML = games.map(game => {
        const difficultyColors = {
            'Easy': 'bg-green-100 text-green-800',
            'Medium': 'bg-yellow-100 text-yellow-800',
            'Hard': 'bg-red-100 text-red-800'
        };
        
        return `
            <div class="card cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-card animate-slide-up"
                 onclick="startGame('${game.id}')">
                <div class="card-header">
                    <div class="flex items-center justify-between mb-4">
                        <div class="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center text-white text-2xl">
                            ${game.icon}
                        </div>
                        <span class="badge ${difficultyColors[game.difficulty]}">${game.difficulty}</span>
                    </div>
                    <h3 class="card-title">${game.title}</h3>
                    <p class="card-description">${game.description}</p>
                </div>
                
                <div class="card-content">
                    <div class="flex justify-between items-center mb-4">
                        <span class="text-sm text-muted-foreground">Category: ${game.category}</span>
                    </div>
                    <button class="btn btn-accent w-full">
                        🎮 Play Game
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function startGame(gameId) {
    const game = games.find(g => g.id === gameId);
    if (!game) return;
    
    currentGame = game;
    gameState = {
        score: 0,
        level: 1,
        timeLeft: 60,
        questionsAnswered: 0,
        correctAnswers: 0
    };
    
    document.getElementById('game-selection').classList.add('hidden');
    document.getElementById('game-player').classList.remove('hidden');
    
    game.render();
}

function endGame() {
    if (!currentGame || !window.gameStore) return;
    
    // Save game result
    window.gameStore.addGameResult({
        gameType: currentGame.title,
        score: gameState.score,
        level: gameState.level
    });
    
    // Show completion message
    const container = document.getElementById('game-content');
    container.innerHTML = `
        <div class="card text-center">
            <div class="card-header">
                <h2 class="text-3xl font-bold mb-4">Game Complete! 🎉</h2>
                <div class="text-6xl font-bold text-primary mb-4">${gameState.score}</div>
                <div class="text-xl text-muted-foreground mb-4">Final Score</div>
                <div class="text-lg font-semibold text-warning">Level ${gameState.level} Reached</div>
            </div>
            <div class="card-content">
                <div class="grid grid-cols-2 gap-4 mb-6">
                    <div class="text-center">
                        <div class="text-2xl font-bold">${gameState.correctAnswers}</div>
                        <div class="text-sm text-muted-foreground">Correct Answers</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold">${Math.round((gameState.correctAnswers / gameState.questionsAnswered) * 100) || 0}%</div>
                        <div class="text-sm text-muted-foreground">Accuracy</div>
                    </div>
                </div>
                <div class="space-y-4">
                    <button onclick="startGame('${currentGame.id}')" class="btn btn-primary w-full">Play Again</button>
                    <button onclick="showGameSelection()" class="btn btn-secondary w-full">Choose Another Game</button>
                </div>
            </div>
        </div>
    `;
}

// Arithmetic Speed Game
function renderArithmeticSpeed() {
    gameState.currentProblem = generateArithmeticProblem();
    gameState.timeLeft = 60;
    
    const container = document.getElementById('game-content');
    container.innerHTML = `
        <div class="card">
            <div class="card-header">
                <div class="flex justify-between items-center">
                    <h2 class="text-2xl font-bold">Arithmetic Speed Challenge</h2>
                    <div class="flex space-x-4">
                        <div class="text-center">
                            <div class="text-lg font-bold" id="speed-score">${gameState.score}</div>
                            <div class="text-sm text-muted-foreground">Score</div>
                        </div>
                        <div class="text-center">
                            <div class="text-lg font-bold" id="speed-timer">${gameState.timeLeft}</div>
                            <div class="text-sm text-muted-foreground">Time</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-content">
                <div class="text-center mb-8">
                    <div class="text-4xl font-bold mb-4" id="speed-problem">
                        ${gameState.currentProblem.question}
                    </div>
                    <input type="number" id="speed-answer" class="input text-center text-2xl w-32" 
                           placeholder="?" autofocus>
                </div>
                
                <div class="flex justify-center space-x-4">
                    <button onclick="checkArithmeticAnswer()" class="btn btn-primary">Submit</button>
                    <button onclick="skipArithmeticProblem()" class="btn btn-outline">Skip</button>
                </div>
                
                <div id="speed-feedback" class="mt-4 text-center hidden"></div>
            </div>
        </div>
    `;
    
    // Start timer
    gameState.timer = setInterval(() => {
        gameState.timeLeft--;
        document.getElementById('speed-timer').textContent = gameState.timeLeft;
        
        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timer);
            endGame();
        }
    }, 1000);
    
    // Enter key submission
    document.getElementById('speed-answer').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkArithmeticAnswer();
        }
    });
}

function generateArithmeticProblem() {
    const operations = ['+', '-', '×', '÷'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    
    let a, b, answer;
    
    switch(operation) {
        case '+':
            a = Math.floor(Math.random() * 50) + 1;
            b = Math.floor(Math.random() * 50) + 1;
            answer = a + b;
            break;
        case '-':
            a = Math.floor(Math.random() * 50) + 20;
            b = Math.floor(Math.random() * a);
            answer = a - b;
            break;
        case '×':
            a = Math.floor(Math.random() * 12) + 1;
            b = Math.floor(Math.random() * 12) + 1;
            answer = a * b;
            break;
        case '÷':
            answer = Math.floor(Math.random() * 12) + 1;
            b = Math.floor(Math.random() * 12) + 1;
            a = answer * b;
            break;
    }
    
    return {
        question: `${a} ${operation} ${b} = ?`,
        answer: answer
    };
}

function checkArithmeticAnswer() {
    const userAnswer = parseInt(document.getElementById('speed-answer').value);
    const feedback = document.getElementById('speed-feedback');
    
    gameState.questionsAnswered++;
    
    if (userAnswer === gameState.currentProblem.answer) {
        gameState.score += 10;
        gameState.correctAnswers++;
        feedback.textContent = 'Correct! +10 points';
        feedback.className = 'mt-4 text-center text-green-600 font-semibold';
        feedback.classList.remove('hidden');
        
        setTimeout(() => {
            nextArithmeticProblem();
        }, 1000);
    } else {
        feedback.textContent = `Incorrect. The answer was ${gameState.currentProblem.answer}`;
        feedback.className = 'mt-4 text-center text-red-600 font-semibold';
        feedback.classList.remove('hidden');
        
        setTimeout(() => {
            nextArithmeticProblem();
        }, 1500);
    }
    
    document.getElementById('speed-score').textContent = gameState.score;
}

function skipArithmeticProblem() {
    gameState.questionsAnswered++;
    nextArithmeticProblem();
}

function nextArithmeticProblem() {
    gameState.currentProblem = generateArithmeticProblem();
    document.getElementById('speed-problem').textContent = gameState.currentProblem.question;
    document.getElementById('speed-answer').value = '';
    document.getElementById('speed-answer').focus();
    document.getElementById('speed-feedback').classList.add('hidden');
}

// Equation Solver Game
function renderEquationSolver() {
    gameState.currentEquation = generateEquation();
    gameState.attempts = 0;
    
    const container = document.getElementById('game-content');
    container.innerHTML = `
        <div class="card">
            <div class="card-header">
                <h2 class="text-2xl font-bold">Equation Solver Puzzle</h2>
                <p class="text-muted-foreground">Find the value of x</p>
            </div>
            <div class="card-content">
                <div class="text-center mb-8">
                    <div class="text-3xl font-bold mb-4" id="equation-display">
                        ${gameState.currentEquation.display}
                    </div>
                    <div class="mb-4">
                        <label class="block text-sm font-medium mb-2">x = </label>
                        <input type="number" id="equation-answer" class="input text-center text-xl w-32" 
                               placeholder="?" autofocus>
                    </div>
                </div>
                
                <div class="flex justify-center space-x-4">
                    <button onclick="checkEquationAnswer()" class="btn btn-primary">Check Answer</button>
                    <button onclick="getEquationHint()" class="btn btn-outline">Hint</button>
                    <button onclick="nextEquation()" class="btn btn-secondary">Next Equation</button>
                </div>
                
                <div id="equation-feedback" class="mt-4 text-center hidden"></div>
                <div id="equation-hint" class="mt-4 p-4 bg-muted rounded hidden"></div>
            </div>
        </div>
    `;
    
    document.getElementById('equation-answer').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkEquationAnswer();
        }
    });
}

function generateEquation() {
    const x = Math.floor(Math.random() * 20) + 1;
    const types = ['linear', 'addition', 'subtraction', 'multiplication'];
    const type = types[Math.floor(Math.random() * types.length)];
    
    let equation, display, hint;
    
    switch(type) {
        case 'linear':
            const a = Math.floor(Math.random() * 10) + 2;
            const b = Math.floor(Math.random() * 20) + 1;
            const result = a * x + b;
            display = `${a}x + ${b} = ${result}`;
            hint = `Subtract ${b} from both sides, then divide by ${a}`;
            break;
        case 'addition':
            const add = Math.floor(Math.random() * 20) + 1;
            const sum = x + add;
            display = `x + ${add} = ${sum}`;
            hint = `Subtract ${add} from both sides`;
            break;
        case 'subtraction':
            const sub = Math.floor(Math.random() * x) + 1;
            const diff = x - sub;
            display = `x - ${sub} = ${diff}`;
            hint = `Add ${sub} to both sides`;
            break;
        case 'multiplication':
            const mult = Math.floor(Math.random() * 10) + 2;
            const product = x * mult;
            display = `${mult}x = ${product}`;
            hint = `Divide both sides by ${mult}`;
            break;
    }
    
    return { answer: x, display, hint, type };
}

function checkEquationAnswer() {
    const userAnswer = parseInt(document.getElementById('equation-answer').value);
    const feedback = document.getElementById('equation-feedback');
    
    gameState.attempts++;
    gameState.questionsAnswered++;
    
    if (userAnswer === gameState.currentEquation.answer) {
        const points = Math.max(10 - (gameState.attempts - 1) * 2, 2);
        gameState.score += points;
        gameState.correctAnswers++;
        
        feedback.textContent = `Correct! x = ${gameState.currentEquation.answer}. +${points} points`;
        feedback.className = 'mt-4 text-center text-green-600 font-semibold';
        feedback.classList.remove('hidden');
        
        setTimeout(() => {
            nextEquation();
        }, 2000);
    } else {
        feedback.textContent = 'Incorrect. Try again!';
        feedback.className = 'mt-4 text-center text-red-600 font-semibold';
        feedback.classList.remove('hidden');
    }
}

function getEquationHint() {
    const hint = document.getElementById('equation-hint');
    hint.textContent = gameState.currentEquation.hint;
    hint.classList.remove('hidden');
}

function nextEquation() {
    gameState.currentEquation = generateEquation();
    gameState.attempts = 0;
    gameState.level++;
    
    document.getElementById('equation-display').textContent = gameState.currentEquation.display;
    document.getElementById('equation-answer').value = '';
    document.getElementById('equation-answer').focus();
    document.getElementById('equation-feedback').classList.add('hidden');
    document.getElementById('equation-hint').classList.add('hidden');
}

// Geometry Builder Game
function renderGeometryBuilder() {
    const container = document.getElementById('game-content');
    container.innerHTML = `
        <div class="card">
            <div class="card-header">
                <h2 class="text-2xl font-bold">Geometry Shape Builder</h2>
                <p class="text-muted-foreground">Create shapes and learn their properties</p>
            </div>
            <div class="card-content">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 class="text-lg font-semibold mb-4">Shape Tools</h3>
                        <div class="space-y-2">
                            <button onclick="createShape('triangle')" class="btn btn-outline w-full">🔺 Triangle</button>
                            <button onclick="createShape('square')" class="btn btn-outline w-full">⬜ Square</button>
                            <button onclick="createShape('circle')" class="btn btn-outline w-full">⭕ Circle</button>
                            <button onclick="createShape('rectangle')" class="btn btn-outline w-full">▬ Rectangle</button>
                        </div>
                        
                        <div class="mt-6">
                            <h4 class="font-semibold mb-2">Current Shape Info:</h4>
                            <div id="shape-info" class="p-3 bg-muted rounded text-sm">
                                Select a shape to see its properties
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="text-lg font-semibold mb-4">Canvas</h3>
                        <div id="geometry-canvas" class="w-full h-64 border border-border rounded bg-card flex items-center justify-center text-muted-foreground">
                            Click a shape tool to create shapes
                        </div>
                        
                        <div class="mt-4 text-center">
                            <button onclick="clearCanvas()" class="btn btn-destructive">Clear Canvas</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function createShape(shapeType) {
    const canvas = document.getElementById('geometry-canvas');
    const shapeInfo = document.getElementById('shape-info');
    
    const shapes = {
        triangle: {
            emoji: '🔺',
            name: 'Triangle',
            sides: 3,
            angles: '180°',
            properties: 'A polygon with 3 sides and 3 angles'
        },
        square: {
            emoji: '⬜',
            name: 'Square',
            sides: 4,
            angles: '360°',
            properties: 'A rectangle with all sides equal'
        },
        circle: {
            emoji: '⭕',
            name: 'Circle',
            sides: 0,
            angles: '360°',
            properties: 'A round shape with no corners'
        },
        rectangle: {
            emoji: '▬',
            name: 'Rectangle',
            sides: 4,
            angles: '360°',
            properties: 'A polygon with 4 sides and 4 right angles'
        }
    };
    
    const shape = shapes[shapeType];
    
    canvas.innerHTML = `
        <div class="text-center">
            <div class="text-6xl mb-4">${shape.emoji}</div>
            <div class="text-xl font-semibold">${shape.name}</div>
        </div>
    `;
    
    shapeInfo.innerHTML = `
        <div class="space-y-2">
            <div><strong>Name:</strong> ${shape.name}</div>
            <div><strong>Sides:</strong> ${shape.sides}</div>
            <div><strong>Total Angles:</strong> ${shape.angles}</div>
            <div><strong>Properties:</strong> ${shape.properties}</div>
        </div>
    `;
    
    gameState.score += 5;
    gameState.questionsAnswered++;
    gameState.correctAnswers++;
}

function clearCanvas() {
    document.getElementById('geometry-canvas').innerHTML = 'Click a shape tool to create shapes';
    document.getElementById('shape-info').innerHTML = 'Select a shape to see its properties';
}

// Fraction Matching Game
function renderFractionMatch() {
    gameState.fractions = generateFractionPairs();
    gameState.selectedCards = [];
    gameState.matchedPairs = 0;
    
    const container = document.getElementById('game-content');
    container.innerHTML = `
        <div class="card">
            <div class="card-header">
                <div class="flex justify-between items-center">
                    <h2 class="text-2xl font-bold">Fraction Matching Game</h2>
                    <div class="text-center">
                        <div class="text-lg font-bold">${gameState.score}</div>
                        <div class="text-sm text-muted-foreground">Score</div>
                    </div>
                </div>
                <p class="text-muted-foreground">Match equivalent fractions and decimals</p>
            </div>
            <div class="card-content">
                <div class="game-board grid-cols-4" id="fraction-board">
                    ${gameState.fractions.map((fraction, index) => `
                        <div class="game-cell cursor-pointer" onclick="selectFractionCard(${index})" id="card-${index}">
                            ${fraction.display}
                        </div>
                    `).join('')}
                </div>
                
                <div id="fraction-feedback" class="mt-4 text-center hidden"></div>
                
                ${gameState.matchedPairs === 4 ? `
                    <div class="mt-6 text-center">
                        <button onclick="resetFractionGame()" class="btn btn-primary">New Game</button>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

function generateFractionPairs() {
    const pairs = [
        { value: 0.5, displays: ['1/2', '0.5'] },
        { value: 0.25, displays: ['1/4', '0.25'] },
        { value: 0.75, displays: ['3/4', '0.75'] },
        { value: 0.2, displays: ['1/5', '0.2'] }
    ];
    
    const cards = [];
    pairs.forEach((pair, pairIndex) => {
        pair.displays.forEach(display => {
            cards.push({
                display,
                value: pair.value,
                pairIndex,
                matched: false
            });
        });
    });
    
    // Shuffle cards
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    
    return cards;
}

function selectFractionCard(index) {
    if (gameState.selectedCards.length >= 2 || 
        gameState.fractions[index].matched ||
        gameState.selectedCards.includes(index)) {
        return;
    }
    
    gameState.selectedCards.push(index);
    document.getElementById(`card-${index}`).classList.add('selected');
    
    if (gameState.selectedCards.length === 2) {
        setTimeout(() => checkFractionMatch(), 1000);
    }
}

function checkFractionMatch() {
    const [first, second] = gameState.selectedCards;
    const card1 = gameState.fractions[first];
    const card2 = gameState.fractions[second];
    const feedback = document.getElementById('fraction-feedback');
    
    gameState.questionsAnswered++;
    
    if (card1.value === card2.value) {
        // Match found
        card1.matched = true;
        card2.matched = true;
        gameState.matchedPairs++;
        gameState.score += 20;
        gameState.correctAnswers++;
        
        document.getElementById(`card-${first}`).classList.add('correct');
        document.getElementById(`card-${second}`).classList.add('correct');
        
        feedback.textContent = 'Match found! +20 points';
        feedback.className = 'mt-4 text-center text-green-600 font-semibold';
        feedback.classList.remove('hidden');
        
        if (gameState.matchedPairs === 4) {
            setTimeout(() => {
                feedback.textContent = 'Congratulations! All pairs matched!';
                endGame();
            }, 1500);
        }
    } else {
        // No match
        document.getElementById(`card-${first}`).classList.add('incorrect');
        document.getElementById(`card-${second}`).classList.add('incorrect');
        
        feedback.textContent = 'No match. Try again!';
        feedback.className = 'mt-4 text-center text-red-600 font-semibold';
        feedback.classList.remove('hidden');
        
        setTimeout(() => {
            document.getElementById(`card-${first}`).classList.remove('incorrect');
            document.getElementById(`card-${second}`).classList.remove('incorrect');
        }, 1500);
    }
    
    // Clear selections
    setTimeout(() => {
        document.getElementById(`card-${first}`).classList.remove('selected');
        document.getElementById(`card-${second}`).classList.remove('selected');
        gameState.selectedCards = [];
        feedback.classList.add('hidden');
    }, 2000);
}

function resetFractionGame() {
    renderFractionMatch();
}