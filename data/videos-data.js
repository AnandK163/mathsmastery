// data/videos-data.js

/**
 * Contains the curriculum structure for all available classes.
 */
export const classData = [
    // ... (Class 6, 7, 8, 10 data remains unchanged)
    {
        classNumber: 10,
        title: "Class 10 Mathematics",
        description: "Preparing for advanced mathematics",
        chaptersCount: 24,
        videosCount: 24,
        difficulty: "Hard",
        isComingSoon: false
    },
    {
        classNumber: 9,
        title: "Class 9 Mathematics",
        description: "Preparing for advanced mathematics",
        chaptersCount: 24,
        videosCount: 24,
        difficulty: "Medium",
        isComingSoon: false
    },
    {
        classNumber: 8,
        title: "Class 8 Mathematics",
        description: "Preparing for advanced mathematics",
        chaptersCount: 24,
        videosCount: 24,
        difficulty: "Medium",
        isComingSoon: false
    },
    {
        classNumber: 7,
        title: "NMMS",
        description: "Preparing for advanced mathematics",
        chaptersCount: 15,
        videosCount: 60,
        difficulty: "Medium",
        isComingSoon: true
    },
    {
        classNumber: 7,
        title: "Class 7 Mathematics",
        description: "Preparing for advanced mathematics",
        chaptersCount: 15,
        videosCount: 60,
        difficulty: "Medium",
        isComingSoon: true
    },
    {
        classNumber: 6,
        title: "Class 6 Mathematics",
        description: "Preparing for advanced mathematics",
        chaptersCount: 15,
        videosCount: 60,
        difficulty: "Hard",
        isComingSoon: true
    },
    // ...
];

/**
 * Contains detailed chapter information for each class.
 * Each chapter can have a 'videoUrl', a 'notesUrl', both, or neither.
 */
export const chapterData = {
    10: [
        {
            id: "ch1",
            title: "Real Numbers (Part 1)",
            description: "Understanding the basics of real numbers and their properties.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/jKKpNc5hhNs",
            topics: ["Real Numbers"]
        },
        {
            id: "ch2",
            title: "Real Numbers (Part 2)",
            description: "Continuing with real numbers: divisions, HCF and LCM.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/fsS-39Nv17A",
            topics: ["Real Numbers"]
        },
        {
            id: "ch3",
            title: "Real Numbers (Part 3)",
            description: "Explore Euclid’s division lemma and applications.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/GJzohSJvlqw",
            topics: ["Real Numbers"]
        },
        {
            id: "ch4",
            title: "Real Numbers (Part 4)",
            description: "Learn more on irrational numbers and decimal expansions.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/YN9M3OGQPi0",
            topics: ["Real Numbers"]
        },
        {
            id: "ch5",
            title: "Real Numbers (Part 5)",
            description: "More examples and exercises on real numbers.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/nsXcOpKmbh8",
            topics: ["Real Numbers"]
        },
        {
            id: "ch6",
            title: "Real Numbers (Part 6)",
            description: "Wrapping up real numbers with key theorems and tricks.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/ohmeRsYLhXU",
            topics: ["Real Numbers"]
        },
        {
            id: "ch7",
            title: "Sets (Part 1)",
            description: "Introduction to sets, types, and representations.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/veiCFEMpJjg",
            topics: ["Sets"]
        },
        {
            id: "ch8",
            title: "Sets (Part 2)",
            description: "Understanding subsets, power sets, and Venn diagrams.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/WadiLeLj7HM",
            topics: ["Sets"]
        },
        {
            id: "ch9",
            title: "Sets (Part 3)",
            description: "Set operations: union, intersection, and complements.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/bA-8Z702Au0",
            topics: ["Sets"]
        },
        {
            id: "ch10",
            title: "Polynomials (Part 1)",
            description: "Introduction to polynomials and degrees.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/lfKUUHQbKs8",
            topics: ["Polynomials"]
        },
        {
            id: "ch11",
            title: "Polynomials (Part 2)",
            description: "Polynomial identities and factorization methods.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/8ETyfwUnDak",
            topics: ["Polynomials"]
        },
        {
            id: "ch12",
            title: "Polynomials (Part 3)",
            description: "More problems and applications of identities.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/5eMV95iA3cI",
            topics: ["Polynomials"]
        },
        {
            id: "ch13",
            title: "Polynomials (Part 4)",
            description: "Revision and summary of key polynomial concepts.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/5eMV95iA3cI",
            topics: ["Polynomials"]
        },
        {
            id: "ch14",
            title: "Coordinate Geometry (Part 1)",
            description: "Basics of coordinate geometry and plotting points.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/Mfd9PbUUiCM",
            topics: ["Coordinate Geometry"]
        },
        {
            id: "ch15",
            title: "Coordinate Geometry (Part 2)",
            description: "Distance formula and section formula.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/2JLgHI1c1NQ",
            topics: ["Coordinate Geometry"]
        },
        {
            id: "ch16",
            title: "Similar Triangles (Part 1)",
            description: "Triangle similarity and basic theorems.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/OIYD98c_uUE",
            topics: ["Similar Triangles"]
        },
        {
            id: "ch17",
            title: "Similar Triangles (Part 2)",
            description: "Applying similarity criteria to solve problems.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/kAq0zCqMWvs",
            topics: ["Similar Triangles"]
        },
        {
            id: "ch18",
            title: "Similar Triangles (Part 3)",
            description: "Using similarity to find unknown lengths.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/VEYbsG57Lfk",
            topics: ["Similar Triangles"]
        },
        {
            id: "ch19",
            title: "Similar Triangles (Part 4)",
            description: "More problem-solving using triangle similarity.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/sNLhIfWtdlY",
            topics: ["Similar Triangles"]
        },
        {
            id: "ch20",
            title: "Similar Triangles (Part 5)",
            description: "Exercise 8.2 deep dive and concept applications.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/raC2aiw-7Ms",
            topics: ["Similar Triangles", "Exercise 8.2"]
        },
        {
            id: "ch21",
            title: "Trigonometry (Part 1)",
            description: "Introduction to trigonometric ratios and angles.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/InjU9ZJ1KbQ",
            topics: ["Trigonometry"]
        },
        {
            id: "ch22",
            title: "Trigonometry (Part 2)",
            description: "Trigonometric identities and their proofs.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/X4LbV0WUW68",
            topics: ["Trigonometry"]
        },
        {
            id: "ch23",
            title: "Trigonometry (Part 3)",
            description: "Problem solving using trigonometric identities.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/A5BdFlgPUr8",
            topics: ["Trigonometry"]
        },
        {
            id: "ch24",
            title: "Trigonometry (Part 4)",
            description: "Applications of trigonometry in real life.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/EQGQ4_ja-NI",
            topics: ["Trigonometry"]
        }
    ],
    9: [
            {
            id: "ch1",
            title: "Real Numbers - Part 1",
            description: "Introduction to real numbers and number systems.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/Y-n13twxdcs",
            topics: ["Real Numbers", "Number Line"]
        },
        {
            id: "ch2",
            title: "Real Numbers - Part 2",
            description: "Exploring properties and classifications of real numbers.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/EsYwsjOzw_o",
            topics: ["Properties", "Irrational Numbers"]
        },
        {
            id: "ch3",
            title: "Real Numbers - Part 3",
            description: "Understanding rational and irrational numbers with examples.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/zXN9hdeKrxI",
            topics: ["Rational Numbers", "Irrational Numbers"]
        },
        {
            id: "ch4",
            title: "Real Numbers - Part 4",
            description: "Problems and concepts related to real numbers.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/64uiYXjhPb0",
            topics: ["Applications", "Examples"]
        },
        {
            id: "ch5",
            title: "Real Numbers - Part 5",
            description: "Review and advanced problem-solving on real numbers.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/xRCrej4wtAk",
            topics: ["Problem Solving", "Review"]
        },
        {
            id: "ch6",
            title: "Polynomials - Part 1",
            description: "Introduction to polynomials and their basic terms.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/Rx0LxxQTw1Q",
            topics: ["Terms", "Degree", "Coefficients"]
        },
        {
            id: "ch7",
            title: "Polynomials - Part 2",
            description: "Addition and subtraction of polynomials.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/-QHxeK7mf_0",
            topics: ["Addition", "Subtraction"]
        },
        {
            id: "ch8",
            title: "Polynomials - Part 3",
            description: "Polynomial division and factorization.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/mikVsxr9iAI",
            topics: ["Division", "Factorization"]
        },
        {
            id: "ch9",
            title: "Polynomials - Part 4",
            description: "Special identities and problems on polynomials.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/cbM9j6TCPvE",
            topics: ["Identities", "Problem Solving"]
        },
        {
            id: "ch10",
            title: "Geometry Basics",
            description: "Introduction to lines and angles.",
            points: 50,
            videoUrl: "https://youtu.be/ncg2GSxYxZw?si=REK_jLIlx61N1j39",
            topics: ["Lines", "Angles"]
        }
    ],
    8: [
        {
            id: "ch1",
            title: "Divisibility Rules",
            description: "Understand rules for divisibility by different numbers and how to apply them in problems.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/Xj-G2afaOxI",
            topics: ["Divisibility", "Number Properties", "Shortcuts"]
        },
        {
            id: "ch2",
            title: "Squares and Square Roots - Part 1",
            description: "Introduction to perfect squares and finding square roots.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/6lke7zDOP3k",
            topics: ["Squares", "Square Roots"]
        },
        {
            id: "ch3",
            title: "Squares and Square Roots - Part 2",
            description: "Methods to find square roots using factorization.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/T5pt2-weBzg",
            topics: ["Square Roots", "Factorization"]
        },
        {
            id: "ch4",
            title: "Squares and Square Roots - Part 3",
            description: "Solving word problems involving squares and square roots.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/q8VKPeLJSig",
            topics: ["Word Problems", "Applications"]
        },
        {
            id: "ch5",
            title: "Squares and Square Roots - Part 4",
            description: "Estimation methods and practice exercises.",
            points: 50,
            videoUrl: "https://www.youtube.com/embed/_F63czEnwT4",
            topics: ["Estimation", "Practice"]
        }
    ],
};
