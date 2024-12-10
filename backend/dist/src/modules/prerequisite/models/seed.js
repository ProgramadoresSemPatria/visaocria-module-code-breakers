"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedPrerequisites = seedPrerequisites;
const db_1 = __importDefault(require("../../../../models/prisma/db"));
async function seedPrerequisites() {
    const prerequisites = [
        {
            title: "Dynamic Arrays",
            description: "Data Structures & Algorithms for Beginners",
            link: "https://neetcode.io/courses/dsa-for-beginners/3",
            subject_id: 19,
        },
        {
            title: "Hash Usage",
            description: "Data Structures & Algorithms for Beginners",
            link: "https://neetcode.io/courses/dsa-for-beginners/26",
            subject_id: 19,
        },
        {
            title: "Hash Implementation",
            description: "Data Structures & Algorithms for Beginners",
            link: "https://neetcode.io/courses/dsa-for-beginners/27",
            subject_id: 19,
        },
        {
            title: "Prefix Sums",
            description: "Advanced Algorithms",
            link: "https://neetcode.io/courses/advanced-algorithms/4",
            subject_id: 19,
        },
        {
            title: "Two Pointers",
            description: "Advanced Algorithms",
            link: "https://neetcode.io/courses/advanced-algorithms/3",
            subject_id: 20,
        },
        {
            title: "Stacks",
            description: "Data Structures & Algorithms for Beginners",
            link: "https://neetcode.io/courses/dsa-for-beginners/4",
            subject_id: 21,
        },
        {
            title: "Search Array",
            description: "Data Structures & Algorithms for Beginners",
            link: "https://neetcode.io/courses/dsa-for-beginners/14",
            subject_id: 22,
        },
        {
            title: "Search Range",
            description: "Data Structures & Algorithms for Beginners",
            link: "https://neetcode.io/courses/dsa-for-beginners/15",
            subject_id: 22,
        },
        {
            title: "Sliding Window Fixed Size",
            description: "Advanced Algorithms",
            link: "https://neetcode.io/courses/advanced-algorithms/1",
            subject_id: 23,
        },
        {
            title: "Sliding Window Variable Size",
            description: "Advanced Algorithms",
            link: "https://neetcode.io/courses/advanced-algorithms/2",
            subject_id: 23,
        },
        {
            title: "Singly Linked Lists",
            description: "Data Structures & Algorithms for Beginners",
            link: "https://neetcode.io/courses/dsa-for-beginners/5",
            subject_id: 24,
        },
        {
            title: "Doubly Linked Lists",
            description: "Data Structures & Algorithms for Beginners",
            link: "https://neetcode.io/courses/dsa-for-beginners/6",
            subject_id: 24,
        },
        {
            title: "Fast and Slow Pointers",
            description: "Advanced Algorithms",
            link: "https://neetcode.io/courses/advanced-algorithms/5",
            subject_id: 24,
        },
        {
            title: "BST Insert and Remove",
            description: "Data Structures & Algorithms for Beginners",
            link: "https://neetcode.io/courses/dsa-for-beginners/18",
            subject_id: 25,
        },
        {
            title: "Depth-First Search",
            description: "Data Structures & Algorithms for Beginners",
            link: "https://neetcode.io/courses/dsa-for-beginners/19",
            subject_id: 25,
        },
        {
            title: "Breadth-First Search",
            description: "Data Structures & Algorithms for Beginners",
            link: "https://neetcode.io/courses/dsa-for-beginners/20",
            subject_id: 25,
        },
        {
            title: "BST Sets and Maps",
            description: "Data Structures & Algorithms for Beginners",
            link: "https://neetcode.io/courses/dsa-for-beginners/21",
            subject_id: 25,
        },
        {
            title: "Iterative DFS",
            description: "Advanced Algorithms",
            link: "https://neetcode.io/courses/advanced-algorithms/9",
            subject_id: 25,
        },
        {
            title: "Trie",
            description: "Advanced Algorithms",
            link: "https://neetcode.io/courses/advanced-algorithms/6",
            subject_id: 26,
        },
        {
            title: "Heap Properties",
            description: "Data Structures & Algorithms for Beginners",
            link: "https://neetcode.io/courses/dsa-for-beginners/23",
            subject_id: 27,
        },
        {
            title: "Push and Pop",
            description: "Data Structures & Algorithms for Beginners",
            link: "https://neetcode.io/courses/dsa-for-beginners/24",
            subject_id: 27,
        },
        {
            title: "Heapify",
            description: "Data Structures & Algorithms for Beginners",
            link: "https://neetcode.io/courses/dsa-for-beginners/25",
            subject_id: 27,
        },
        {
            title: "Two Heaps",
            description: "Advanced Algorithms",
            link: "https://neetcode.io/courses/advanced-algorithms/10",
            subject_id: 27,
        },
        {
            title: "Kadane's Algorithm",
            description: "Advanced Algorithms",
            link: "https://neetcode.io/courses/advanced-algorithms/0",
            subject_id: 29,
        },
        {
            title: "Dijkstra's",
            description: "Advanced Algorithms",
            link: "https://neetcode.io/courses/advanced-algorithms/14",
            subject_id: 30,
        },
        {
            title: "Prim's",
            description: "Advanced Algorithms",
            link: "https://neetcode.io/courses/advanced-algorithms/15",
            subject_id: 30,
        },
        {
            title: "Kruskal's",
            description: "Advanced Algorithms",
            link: "https://neetcode.io/courses/advanced-algorithms/16",
            subject_id: 30,
        },
        {
            title: "Topological Sort",
            description: "Advanced Algorithms",
            link: "https://neetcode.io/courses/advanced-algorithms/17",
            subject_id: 30,
        },
        {
            title: "Tree Maze",
            description: "Data Structures & Algorithms for Beginners",
            link: "https://neetcode.io/courses/dsa-for-beginners/22",
            subject_id: 31,
        },
        {
            title: "Subsets",
            description: "Advanced Algorithms",
            link: "https://neetcode.io/courses/advanced-algorithms/11",
            subject_id: 31,
        },
        {
            title: "Combinatios",
            description: "Advanced Algorithms",
            link: "https://neetcode.io/courses/advanced-algorithms/12",
            subject_id: 31,
        },
        {
            title: "Permutations",
            description: "Advanced Algorithms",
            link: "https://neetcode.io/courses/advanced-algorithms/13",
            subject_id: 31,
        },
        {
            title: "Intro to Graphs",
            description: "Data Structures & Algorithms for Beginners",
            link: "https://neetcode.io/courses/dsa-for-beginners/28",
            subject_id: 32,
        },
        {
            title: "Matrix DFS",
            description: "Data Structures & Algorithms for Beginners",
            link: "https://neetcode.io/courses/dsa-for-beginners/29",
            subject_id: 32,
        },
        {
            title: "Matrix BFS",
            description: "Data Structures & Algorithms for Beginners",
            link: "https://neetcode.io/courses/dsa-for-beginners/30",
            subject_id: 32,
        },
        {
            title: "Adjacency List",
            description: "Data Structures & Algorithms for Beginners",
            link: "https://neetcode.io/courses/dsa-for-beginners/31",
            subject_id: 32,
        },
        {
            title: "1-D Dimension DP",
            description: "Data Structures & Algorithms for Beginners",
            link: "https://neetcode.io/courses/dsa-for-beginners/32",
            subject_id: 33,
        },
        {
            title: "Palindromes",
            description: "Advanced Algorithms",
            link: "https://neetcode.io/courses/advanced-algorithms/21",
            subject_id: 33,
        },
        {
            title: "2-Dimension DP",
            description: "Data Structures & Algorithms for Beginners",
            link: "https://neetcode.io/courses/dsa-for-beginners/33",
            subject_id: 34,
        },
        {
            title: "0 / 1 Knapsack",
            description: "Advanced Algorithms",
            link: "https://neetcode.io/courses/advanced-algorithms/18",
            subject_id: 34,
        },
        {
            title: "Unbounded Knapsack",
            description: "Advanced Algorithms",
            link: "https://neetcode.io/courses/advanced-algorithms/19",
            subject_id: 34,
        },
        {
            title: "LCS",
            description: "Advanced Algorithms",
            link: "https://neetcode.io/courses/advanced-algorithms/20",
            subject_id: 34,
        },
        {
            title: "Bit Operations",
            description: "Data Structures & Algorithms for Beginners",
            link: "https://neetcode.io/courses/dsa-for-beginners/34",
            subject_id: 35,
        },
    ];
    await db_1.default.prerequisite.createMany({
        data: prerequisites,
    });
}
