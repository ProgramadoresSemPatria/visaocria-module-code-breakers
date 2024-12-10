"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedCourses = seedCourses;
const db_1 = __importDefault(require("../../../../models/prisma/db"));
async function seedCourses() {
    await db_1.default.courses.createMany({
        data: [
            {
                title: "Algorithms & Data Structures for Beginners",
                description: "Learn the foundations of coding interviews.",
                difficulty: "Medium",
                matter: "DATA_STRUCTURES_AND_ALGORITHMS",
                duration: "25 hours",
                link_url: "https://neetcode.io/courses/dsa-for-beginners/0",
                image_url: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/a65736b6-151f-4572-8e10-87b2b75ab100/public",
            },
            {
                title: "Advanced Algorithms",
                description: "Learn every algorithm you would ever need.",
                difficulty: "Hard",
                matter: "DATA_STRUCTURES_AND_ALGORITHMS",
                duration: "25 hours",
                link_url: "https://neetcode.io/courses/advanced-algorithms/0",
                image_url: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/dd1abac9-220d-4c4d-a8c5-d755e2606800/public",
            },
            {
                title: "System Design for Beginners",
                description: "Learn the foundations of system design interviews.",
                matter: "SYSTEM_DESIGN",
                difficulty: "Medium",
                duration: "10 hours",
                link_url: "https://neetcode.io/courses/system-design-for-beginners/0",
                image_url: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/cbf83d3b-b930-44e4-762e-df0e89ea5400/public",
            },
            {
                title: "System Design Interview",
                matter: "SYSTEM_DESIGN",
                description: "Learn common system design interview questions.",
                difficulty: "Medium",
                duration: "10 hours",
                link_url: "https://neetcode.io/courses/system-design-interview/0",
                image_url: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/0c64daac-e358-48b1-91f5-7d4953b40600/public",
            },
            {
                title: "Python for Beginners",
                matter: "PYTHON",
                description: "Learn the python programming language.",
                difficulty: "Easy",
                duration: "12 hours",
                link_url: "https://neetcode.io/problems/python-hello-world",
                image_url: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/7dd81307-edfd-4fad-5b6e-6bb0fe65bd00/public",
            },
            {
                title: "Python for Coding Interviews",
                description: "Learn effective Python for coding interviews.",
                matter: "PYTHON",
                difficulty: "Easy",
                duration: "8 hours",
                link_url: "https://neetcode.io/problems/python-sort-ascending",
                image_url: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/3951bea6-09de-41e4-9285-d9401c24de00/public",
            },
            {
                title: "Python OOP",
                description: "Learn object-oriented programming in Python.",
                matter: "PYTHON",
                difficulty: "Easy",
                duration: "10 hours",
                link_url: "",
                image_url: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/095545e1-b96e-47e8-c0be-c439e9591300/public",
            },
            {
                title: "SQL for Beginners",
                description: "Learn PostgreSQL with interactive coding lessons.",
                matter: "FULL_STACK_DEVELOPMENT",
                difficulty: "Easy",
                duration: "10 hours",
                link_url: "https://neetcode.io/problems/sql-create-table",
                image_url: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/4362b36f-c2ec-44f2-17a7-0426e8afcb00/public",
            },
            {
                title: "Full Stack Development",
                matter: "FULL_STACK_DEVELOPMENT",
                description: "Learn how to build an intermediate full stack app.",
                difficulty: "Medium",
                duration: "20 hours",
                link_url: "https://neetcode.io/courses/full-stack-dev/0",
                image_url: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/8efc4993-9666-4ceb-c1cb-f1686cbcc300/public",
            },
            {
                title: "Relational Databases",
                matter: "FULL_STACK_DEVELOPMENT",
                description: "Learn about relational database management systems.",
                difficulty: "Easy",
                duration: "10 hours",
                link_url: "",
                image_url: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/1d86562d-5160-413b-2087-d137cb087d00/public",
            },
            {
                title: "Object Oriented Design Interviews",
                matter: "OBJECT_ORIENTED_DESIGN",
                description: "Learn Object Oriented Design interview questions.",
                difficulty: "Easy",
                duration: "8 hours",
                link_url: "https://neetcode.io/courses/ood-interview/0",
                image_url: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/f96cc9c7-0515-4283-883c-14d346094400/public",
            },
            {
                title: "Design Patterns",
                description: "Object Oriented Design Patterns.",
                difficulty: "Easy",
                matter: "OBJECT_ORIENTED_DESIGN",
                duration: "8 hours",
                link_url: "https://neetcode.io/courses/design-patterns/1",
                image_url: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/d84156ca-00bc-42b3-c809-c6e1ee83ac00/public",
            },
        ],
    });
    console.log("Seeding courses...");
}
