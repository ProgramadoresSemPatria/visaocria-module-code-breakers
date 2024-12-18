"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedRoadmap = seedRoadmap;
const db_1 = __importDefault(require("../../../../models/prisma/db"));
async function seedRoadmap() {
    await db_1.default.roadmap.create({
        data: {
            title: "Algorithms",
            total_problems: 150,
        },
    });
}
