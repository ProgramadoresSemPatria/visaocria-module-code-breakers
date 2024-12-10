import prismaInstance from "../../../../models/prisma/db";
export async function seedLessons() {
	await prismaInstance.lessons.createMany({
		data: [
			{
				title: "Python Cheat Sheet",
				link_url:
					"https://www.youtube.com/watch?v=0K_eZGS5NsU&embeds_referring_euri=https%3A%2F%2Fneetcode.io%2F&source_ve_path=OTY3MTQ",
				image_url:
					"https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/9ccf90a9-bbca-4a17-5461-444e859f5500/public",
			},
			{
				title: "Big-O Notation",
				link_url: "https://www.youtube.com/watch?v=BgLTDT03QtU",
				image_url:
					"https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/c21f735d-f9f7-4efe-1cb1-2982fa151400/public",
			},
			{
				title: "8 Design Patterns Every Programmer Should Know",
				link_url:
					"https://www.youtube.com/watch?v=tAuRQs_d9F8&embeds_referring_euri=https%3A%2F%2Fneetcode.io%2F&source_ve_path=MjM4NTE",
				image_url:
					"https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/d1971965-f033-4c26-6925-c0b06a270500/public",
			},
			{
				title: "20 Must-know System Design Concepts",
				link_url:
					"https://www.youtube.com/watch?v=i53Gi_K3o7I&embeds_referring_euri=https%3A%2F%2Fneetcode.io%2F&source_ve_path=MjM4NTE",
				image_url:
					"https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/e19bb26d-9436-4f98-7852-d1a181818d00/public",
			},
			{
				title: "30-Day JavaScript Coding Challenge",
				link_url:
					"https://neetcode.io/courses/lessons/30-day-javascript-challenge",
				image_url:
					"https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/5b31c7ef-d597-4b08-be82-15e3db17e100/public",
			},
			{
				title: "Design a Youtube Clone",
				link_url: "https://neetcode.io/courses/lessons/design-youtube",
				image_url:
					"https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/2d33be5f-6a51-4475-6975-7350d9d3d700/public",
			},
			{
				title: "MongoDB Crash Course",
				link_url: "https://www.youtube.com/watch?v=QPFlGswpyJY",
				image_url:
					"https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/cc61ac8a-d7b5-4f47-b001-c7736ae43600/public",
			},
		],
	});
}
