import prismaInstance from "../../../../models/prisma/db";
export async function seedProblems() {
	const problems = [
		{
			title: "Contains Duplicate",
			difficulty: "Easy",

			url: "https://neetcode.io/problems/duplicate-integer",

			solution_url: "https://neetcode.io/solutions/contains-duplicate",
			subject_id: 19,
		},
		{
			title: "Valid Anagram",
			difficulty: "Easy",

			url: "https://neetcode.io/problems/is-anagram",

			solution_url: "https://neetcode.io/solutions/is-anagram",
			subject_id: 19,
		},
		{
			title: "Two Sum",
			difficulty: "Easy",

			url: "https://neetcode.io/problems/two-integer-sum",

			solution_url: "https://neetcode.io/solutions/two-integer-sum",
			subject_id: 19,
		},
		{
			title: "Group Anagrams",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/anagram-groups",

			solution_url: "https://neetcode.io/solutions/anagram-groups",
			subject_id: 19,
		},
		{
			title: "Top K Frequent Elements",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/top-k-elements-in-list",

			solution_url: "https://neetcode.io/solutions/top-k-elements-in-list",
			subject_id: 19,
		},
		{
			title: "Encode and Decode Strings",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/string-encode-and-decode",

			solution_url: "https://neetcode.io/solutions/string-encode-and-decode",
			subject_id: 19,
		},
		{
			title: "Product of Array Except Self",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/products-of-array-discluding-self",

			solution_url:
				"https://neetcode.io/solutions/products-of-array-discluding-self",
			subject_id: 19,
		},
		{
			title: "Valid Sudoku",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/valid-sudoku",

			solution_url: "https://neetcode.io/solutions/valid-sudoku",
			subject_id: 19,
		},
		{
			title: "Longest Consecutive Sequence",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/longest-consecutive-sequence",

			solution_url:
				"https://neetcode.io/solutions/longest-consecutive-sequence",
			subject_id: 19,
		},
		{
			title: "Valid Palindrome",
			difficulty: "Easy",

			url: "https://neetcode.io/problems/is-palindrome",

			solution_url: "https://neetcode.io/solutions/is-palindrome",
			subject_id: 20,
		},
		{
			title: "Two Sum II Input Array Is Sorted",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/two-integer-sum-ii",

			solution_url: "https://neetcode.io/solutions/two-integer-sum-ii",
			subject_id: 20,
		},
		{
			title: "3Sum",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/three-integer-sum",

			solution_url: "https://neetcode.io/solutions/three-integer-sum",
			subject_id: 20,
		},
		{
			title: "Container With Most Water",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/max-water-container",

			solution_url: "https://neetcode.io/solutions/max-water-container",
			subject_id: 20,
		},
		{
			title: "Trapping Rain Water",
			difficulty: "Hard",

			url: "https://neetcode.io/problems/trapping-rain-water",

			solution_url: "https://neetcode.io/solutions/trapping-rain-water",
			subject_id: 20,
		},
		{
			title: "Valid Parentheses",
			difficulty: "Easy",

			url: "https://neetcode.io/problems/validate-parentheses",

			solution_url: "https://neetcode.io/solutions/validate-parentheses",
			subject_id: 21,
		},
		{
			title: "Min Stack",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/minimum-stack",

			solution_url: "https://neetcode.io/solutions/minimum-stack",
			subject_id: 21,
		},
		{
			title: "Evaluate Reverse Polish Notation",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/evaluate-reverse-polish-notation",

			solution_url:
				"https://neetcode.io/solutions/evaluate-reverse-polish-notation",
			subject_id: 21,
		},
		{
			title: "Generate Parentheses",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/generate-parentheses",

			solution_url: "https://neetcode.io/solutions/generate-parentheses",
			subject_id: 21,
		},
		{
			title: "Daily Temperatures",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/daily-temperatures",

			solution_url: "https://neetcode.io/solutions/daily-temperatures",
			subject_id: 21,
		},
		{
			title: "Car Fleet",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/car-fleet",

			solution_url: "https://neetcode.io/solutions/car-fleet",
			subject_id: 21,
		},
		{
			title: "Largest Rectangle In Histogram",
			difficulty: "Hard",

			url: "https://neetcode.io/problems/largest-rectangle-in-histogram",

			solution_url:
				"https://neetcode.io/solutions/largest-rectangle-in-histogram",
			subject_id: 21,
		},

		{
			title: "Binary Search",
			difficulty: "Easy",

			url: "https://neetcode.io/problems/binary-search",

			solution_url: "https://neetcode.io/solutions/binary-search",
			subject_id: 22,
		},
		{
			title: "Search a 2D Matrix",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/search-2d-matrix",

			solution_url: "https://neetcode.io/solutions/search-2d-matrix",
			subject_id: 22,
		},
		{
			title: "Koko Eating Bananas",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/eating-bananas",

			solution_url: "https://neetcode.io/solutions/eating-bananas",
			subject_id: 22,
		},
		{
			title: "Find Minimum In Rotated Sorted Array",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/find-minimum-in-rotated-sorted-array",

			solution_url:
				"https://neetcode.io/solutions/find-minimum-in-rotated-sorted-array",
			subject_id: 22,
		},
		{
			title: "Search In Rotated Sorted Array",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/find-target-in-rotated-sorted-array",

			solution_url:
				"https://neetcode.io/solutions/find-target-in-rotated-sorted-array",
			subject_id: 22,
		},
		{
			title: "Time Based Key Value Store",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/time-based-key-value-store",

			solution_url: "https://neetcode.io/solutions/time-based-key-value-store",
			subject_id: 22,
		},
		{
			title: "Median of Two Sorted Arrays",
			difficulty: "Hard",

			url: "https://neetcode.io/problems/median-of-two-sorted-arrays",

			solution_url: "https://neetcode.io/solutions/median-of-two-sorted-arrays",
			subject_id: 22,
		},
		{
			title: "Best Time to Buy And Sell Stock",
			difficulty: "Easy",

			url: "https://neetcode.io/problems/buy-and-sell-crypto",

			solution_url: "https://neetcode.io/solutions/buy-and-sell-crypto",
			subject_id: 23,
		},
		{
			title: "Longest Substring Without Repeating Characters",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/longest-substring-without-duplicates",

			solution_url:
				"https://neetcode.io/solutions/longest-substring-without-duplicates",
			subject_id: 23,
		},
		{
			title: "Longest Repeating Character Replacement",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/longest-repeating-substring-with-replacement",

			solution_url:
				"https://neetcode.io/solutions/longest-repeating-substring-with-replacement",
			subject_id: 23,
		},
		{
			title: "Permutation In String",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/permutation-string",

			solution_url: "https://neetcode.io/solutions/permutation-string",
			subject_id: 23,
		},
		{
			title: "Minimum Window Substring",
			difficulty: "Hard",

			url: "https://neetcode.io/problems/minimum-window-with-characters",

			solution_url:
				"https://neetcode.io/solutions/minimum-window-with-characters",
			subject_id: 23,
		},
		{
			title: "Sliding Window Maximum",
			difficulty: "Hard",

			url: "https://neetcode.io/problems/sliding-window-maximum",

			solution_url: "https://neetcode.io/solutions/sliding-window-maximum",
			subject_id: 23,
		},
		{
			title: "Reverse Linked List",
			difficulty: "Easy",

			url: "https://neetcode.io/problems/reverse-a-linked-list",

			solution_url: "https://neetcode.io/solutions/reverse-a-linked-list",
			subject_id: 24,
		},
		{
			title: "Merge Two Sorted Lists",
			difficulty: "Easy",

			url: "https://neetcode.io/problems/merge-two-sorted-lists",

			solution_url: "https://neetcode.io/solutions/merge-two-sorted-lists",
			subject_id: 24,
		},
		{
			title: "Reorder List",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/reorder-list",

			solution_url: "https://neetcode.io/solutions/reorder-list",
			subject_id: 24,
		},
		{
			title: "Remove Nth Node From End of List",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/remove-nth-node-from-end-of-list",

			solution_url:
				"https://neetcode.io/solutions/remove-nth-node-from-end-of-list",
			subject_id: 24,
		},
		{
			title: "Copy List With Random Pointer",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/copy-list-with-random-pointer",

			solution_url:
				"https://neetcode.io/solutions/copy-list-with-random-pointer",
			subject_id: 24,
		},
		{
			title: "Add Two Numbers",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/add-two-numbers",

			solution_url: "https://neetcode.io/solutions/add-two-numbers",
			subject_id: 24,
		},
		{
			title: "Linked List Cycle",
			difficulty: "Easy",

			url: "https://neetcode.io/problems/linked-list-cycle",

			solution_url: "https://neetcode.io/solutions/linked-list-cycle",
			subject_id: 24,
		},
		{
			title: "Find The Duplicate Number",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/find-the-duplicate-number",

			solution_url: "https://neetcode.io/solutions/find-the-duplicate-number",
			subject_id: 24,
		},
		{
			title: "LRU Cache",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/lru-cache",

			solution_url: "https://neetcode.io/solutions/lru-cache",
			subject_id: 24,
		},
		{
			title: "Merge K Sorted Lists",
			difficulty: "Hard",

			url: "https://neetcode.io/problems/merge-k-sorted-lists",

			solution_url: "https://neetcode.io/solutions/merge-k-sorted-lists",
			subject_id: 24,
		},
		{
			title: "Reverse Nodes In K Group",
			difficulty: "Hard",

			url: "https://neetcode.io/problems/reverse-nodes-in-k-group",

			solution_url: "https://neetcode.io/solutions/reverse-nodes-in-k-group",
			subject_id: 24,
		},
		{
			title: "Invert Binary Tree",
			difficulty: "Easy",

			url: "https://neetcode.io/problems/invert-binary-tree",

			solution_url: "https://neetcode.io/solutions/invert-binary-tree",
			subject_id: 25,
		},
		{
			title: "Maximum Depth of Binary Tree",
			difficulty: "Easy",

			url: "https://neetcode.io/problems/maximum-depth-of-binary-tree",

			solution_url:
				"https://neetcode.io/solutions/maximum-depth-of-binary-tree",
			subject_id: 25,
		},
		{
			title: "Diameter of Binary Tree",
			difficulty: "Easy",

			url: "https://neetcode.io/problems/diameter-of-binary-tree",

			solution_url: "https://neetcode.io/solutions/diameter-of-binary-tree",
			subject_id: 25,
		},
		{
			title: "Balanced Binary Tree",
			difficulty: "Easy",

			url: "https://neetcode.io/problems/balanced-binary-tree",

			solution_url: "https://neetcode.io/solutions/balanced-binary-tree",
			subject_id: 25,
		},
		{
			title: "Same Tree",
			difficulty: "Easy",

			url: "https://neetcode.io/problems/same-tree",

			solution_url: "https://neetcode.io/solutions/same-tree",
			subject_id: 25,
		},
		{
			title: "Subtree of Another Tree",
			difficulty: "Easy",

			url: "https://neetcode.io/problems/subtree-of-another-tree",

			solution_url: "https://neetcode.io/solutions/subtree-of-another-tree",
			subject_id: 25,
		},
		{
			title: "Lowest Common Ancestor of a Binary Search Tree",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/lowest-common-ancestor-of-a-binary-search-tree",

			solution_url:
				"https://neetcode.io/solutions/lowest-common-ancestor-of-a-binary-search-tree",
			subject_id: 25,
		},
		{
			title: "Binary Tree Level Order Traversal",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/binary-tree-level-order-traversal",

			solution_url:
				"https://neetcode.io/solutions/binary-tree-level-order-traversal",
			subject_id: 25,
		},
		{
			title: "Binary Tree Right Side View",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/binary-tree-right-side-view",

			solution_url: "https://neetcode.io/solutions/binary-tree-right-side-view",
			subject_id: 25,
		},
		{
			title: "Count Good Nodes In Binary Tree",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/count-good-nodes-in-binary-tree",

			solution_url:
				"https://neetcode.io/solutions/count-good-nodes-in-binary-tree",
			subject_id: 25,
		},
		{
			title: "Validate Binary Search Tree",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/validate-binary-search-tree",

			solution_url: "https://neetcode.io/solutions/validate-binary-search-tree",
			subject_id: 25,
		},
		{
			title: "Kth Smallest Element In a BST",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/kth-smallest-element-in-a-bst",

			solution_url:
				"https://neetcode.io/solutions/kth-smallest-element-in-a-bst",
			subject_id: 25,
		},
		{
			title: "Construct Binary Tree From Preorder And Inorder Traversal",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/construct-binary-tree-from-preorder-and-inorder-traversal",

			solution_url:
				"https://neetcode.io/solutions/construct-binary-tree-from-preorder-and-inorder-traversal",
			subject_id: 25,
		},
		{
			title: "Binary Tree Maximum Path Sum",
			difficulty: "Hard",

			url: "https://neetcode.io/problems/binary-tree-maximum-path-sum",

			solution_url:
				"https://neetcode.io/solutions/binary-tree-maximum-path-sum",
			subject_id: 25,
		},
		{
			title: "Serialize And Deserialize Binary Tree",
			difficulty: "Hard",

			url: "https://neetcode.io/problems/serialize-and-deserialize-binary-tree",

			solution_url:
				"https://neetcode.io/solutions/serialize-and-deserialize-binary-tree",
			subject_id: 25,
		},
		{
			title: "Implement Trie Prefix Tree",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/implement-trie-prefix-tree",

			solution_url: "https://neetcode.io/solutions/implement-trie-prefix-tree",
			subject_id: 26,
		},
		{
			title: "Design Add And Search Words Data Structure",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/design-add-and-search-words-data-structure",

			solution_url:
				"https://neetcode.io/solutions/design-add-and-search-words-data-structure",
			subject_id: 26,
		},
		{
			title: "Word Search II",
			difficulty: "Hard",

			url: "https://neetcode.io/problems/word-search-ii",

			solution_url: "https://neetcode.io/solutions/word-search-ii",
			subject_id: 26,
		},
		{
			title: "Kth Largest Element In a Stream",
			difficulty: "Easy",

			url: "https://neetcode.io/problems/kth-largest-element-in-a-stream",

			solution_url:
				"https://neetcode.io/solutions/kth-largest-element-in-a-stream",
			subject_id: 27,
		},
		{
			title: "Last Stone Weight",
			difficulty: "Easy",

			url: "https://neetcode.io/problems/last-stone-weight",

			solution_url: "https://neetcode.io/solutions/last-stone-weight",
			subject_id: 27,
		},
		{
			title: "K Closest Points to Origin",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/k-closest-points-to-origin",

			solution_url: "https://neetcode.io/solutions/k-closest-points-to-origin",
			subject_id: 27,
		},
		{
			title: "Kth Largest Element In An Array",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/kth-largest-element-in-an-array",

			solution_url:
				"https://neetcode.io/solutions/kth-largest-element-in-an-array",
			subject_id: 27,
		},
		{
			title: "Task Scheduler",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/task-scheduler",

			solution_url: "https://neetcode.io/solutions/task-scheduler",
			subject_id: 27,
		},
		{
			title: "Design Twitter",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/design-twitter",

			solution_url: "https://neetcode.io/solutions/design-twitter",
			subject_id: 27,
		},
		{
			title: "Find Median From Data Stream",
			difficulty: "Hard",

			url: "https://neetcode.io/problems/find-median-from-data-stream",

			solution_url:
				"https://neetcode.io/solutions/find-median-from-data-stream",
			subject_id: 27,
		},
		{
			title: "Insert Interval",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/insert-interval",

			solution_url: "https://neetcode.io/solutions/insert-interval",
			subject_id: 28,
		},
		{
			title: "Merge Intervals",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/merge-intervals",

			solution_url: "https://neetcode.io/solutions/merge-intervals",
			subject_id: 28,
		},
		{
			title: "Non Overlapping Intervals",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/non-overlapping-intervals",

			solution_url: "https://neetcode.io/solutions/non-overlapping-intervals",
			subject_id: 28,
		},
		{
			title: "Meeting Rooms",
			difficulty: "Easy",

			url: "https://neetcode.io/problems/meeting-rooms",

			solution_url: "https://neetcode.io/solutions/meeting-rooms",
			subject_id: 28,
		},
		{
			title: "Meeting Rooms II",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/meeting-rooms-ii",

			solution_url: "https://neetcode.io/solutions/meeting-rooms-ii",
			subject_id: 28,
		},
		{
			title: "Minimum Interval to Include Each Query",
			difficulty: "Hard",

			url: "https://neetcode.io/problems/minimum-interval-to-include-each-query",

			solution_url:
				"https://neetcode.io/solutions/minimum-interval-to-include-each-query",
			subject_id: 28,
		},
		{
			title: "Maximum Subarray",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/maximum-subarray",

			solution_url: "https://neetcode.io/solutions/maximum-subarray",
			subject_id: 29,
		},
		{
			title: "Jump Game",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/jump-game",

			solution_url: "https://neetcode.io/solutions/jump-game",
			subject_id: 29,
		},
		{
			title: "Jump Game II",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/jump-game-ii",

			solution_url: "https://neetcode.io/solutions/jump-game-ii",
			subject_id: 29,
		},
		{
			title: "Gas Station",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/gas-station",

			solution_url: "https://neetcode.io/solutions/gas-station",
			subject_id: 29,
		},
		{
			title: "Hand of Straights",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/hand-of-straights",

			solution_url: "https://neetcode.io/solutions/hand-of-straights",
			subject_id: 29,
		},
		{
			title: "Merge Triplets to Form Target Triplet",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/merge-triplets-to-form-target-triplet",

			solution_url:
				"https://neetcode.io/solutions/merge-triplets-to-form-target-triplet",
			subject_id: 29,
		},
		{
			title: "Partition Labels",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/partition-labels",

			solution_url: "https://neetcode.io/solutions/partition-labels",
			subject_id: 29,
		},
		{
			title: "Valid Parenthesis String",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/valid-parenthesis-string",

			solution_url: "https://neetcode.io/solutions/valid-parenthesis-string",
			subject_id: 29,
		},
		{
			title: "Reconstruct Itinerary",
			difficulty: "Hard",

			url: "https://neetcode.io/problems/reconstruct-itinerary",

			solution_url: "https://neetcode.io/solutions/reconstruct-itinerary",
			subject_id: 30,
		},
		{
			title: "Min Cost to Connect All Points",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/min-cost-to-connect-all-points",

			solution_url:
				"https://neetcode.io/solutions/min-cost-to-connect-all-points",
			subject_id: 30,
		},
		{
			title: "Network Delay Time",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/network-delay-time",

			solution_url: "https://neetcode.io/solutions/network-delay-time",
			subject_id: 30,
		},
		{
			title: "Swim In Rising Water",
			difficulty: "Hard",

			url: "https://neetcode.io/problems/swim-in-rising-water",

			solution_url: "https://neetcode.io/solutions/swim-in-rising-water",
			subject_id: 30,
		},
		{
			title: "Alien Dictionary",
			difficulty: "Hard",

			url: "https://neetcode.io/problems/alien-dictionary",

			solution_url: "https://neetcode.io/solutions/alien-dictionary",
			subject_id: 30,
		},
		{
			title: "Cheapest Flights Within K Stops",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/cheapest-flights-within-k-stops",

			solution_url:
				"https://neetcode.io/solutions/cheapest-flights-within-k-stops",
			subject_id: 30,
		},
		{
			title: "Subsets",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/subsets",

			solution_url: "https://neetcode.io/solutions/subsets",
			subject_id: 31,
		},
		{
			title: "Combination Sum",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/combination-sum",

			solution_url: "https://neetcode.io/solutions/combination-sum",
			subject_id: 31,
		},
		{
			title: "Permutations",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/permutations",

			solution_url: "https://neetcode.io/solutions/permutations",
			subject_id: 31,
		},
		{
			title: "Subsets II",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/subsets-ii",

			solution_url: "https://neetcode.io/solutions/subsets-ii",
			subject_id: 31,
		},
		{
			title: "Combination Sum II",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/combination-sum-ii",

			solution_url: "https://neetcode.io/solutions/combination-sum-ii",
			subject_id: 31,
		},
		{
			title: "Word Search",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/word-search",

			solution_url: "https://neetcode.io/solutions/word-search",
			subject_id: 31,
		},
		{
			title: "Palindrome Partitioning",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/palindrome-partitioning",

			solution_url: "https://neetcode.io/solutions/palindrome-partitioning",
			subject_id: 31,
		},
		{
			title: "Letter Combinations of a Phone Number",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/letter-combinations-of-a-phone-number",

			solution_url:
				"https://neetcode.io/solutions/letter-combinations-of-a-phone-number",
			subject_id: 31,
		},
		{
			title: "N Queens",
			difficulty: "Hard",

			url: "https://neetcode.io/problems/n-queens",

			solution_url: "https://neetcode.io/solutions/n-queens",
			subject_id: 31,
		},
		{
			title: "Number of Islands",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/number-of-islands",

			solution_url: "https://neetcode.io/solutions/number-of-islands",
			subject_id: 32,
		},
		{
			title: "Max Area of Island",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/max-area-of-island",

			solution_url: "https://neetcode.io/solutions/max-area-of-island",
			subject_id: 32,
		},
		{
			title: "Clone Graph",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/clone-graph",

			solution_url: "https://neetcode.io/solutions/clone-graph",
			subject_id: 32,
		},
		{
			title: "Walls And Gates",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/walls-and-gates",

			solution_url: "https://neetcode.io/solutions/walls-and-gates",
			subject_id: 32,
		},
		{
			title: "Rotting Oranges",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/rotting-oranges",

			solution_url: "https://neetcode.io/solutions/rotting-oranges",
			subject_id: 32,
		},
		{
			title: "Pacific Atlantic Water Flow",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/pacific-atlantic-water-flow",

			solution_url: "https://neetcode.io/solutions/pacific-atlantic-water-flow",
			subject_id: 32,
		},
		{
			title: "Surrounded Regions",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/surrounded-regions",

			solution_url: "https://neetcode.io/solutions/surrounded-regions",
			subject_id: 32,
		},
		{
			title: "Course Schedule",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/course-schedule",

			solution_url: "https://neetcode.io/solutions/course-schedule",
			subject_id: 32,
		},
		{
			title: "Course Schedule II",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/course-schedule-ii",

			solution_url: "https://neetcode.io/solutions/course-schedule-ii",
			subject_id: 32,
		},
		{
			title: "Graph Valid Tree",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/graph-valid-tree",

			solution_url: "https://neetcode.io/solutions/graph-valid-tree",
			subject_id: 32,
		},
		{
			title: "Number of Connected Components In An Undirected Graph",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/number-of-connected-components-in-an-undirected-graph",

			solution_url:
				"https://neetcode.io/solutions/number-of-connected-components-in-an-undirected-graph",
			subject_id: 32,
		},
		{
			title: "Redundant Connection",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/redundant-connection",

			solution_url: "https://neetcode.io/solutions/redundant-connection",
			subject_id: 32,
		},
		{
			title: "Word Ladder",
			difficulty: "Hard",

			url: "https://neetcode.io/problems/word-ladder",

			solution_url: "https://neetcode.io/solutions/word-ladder",
			subject_id: 32,
		},
		{
			title: "Climbing Stairs",
			difficulty: "Easy",

			url: "https://neetcode.io/problems/climbing-stairs",

			solution_url: "https://neetcode.io/solutions/climbing-stairs",
			subject_id: 33,
		},
		{
			title: "Min Cost Climbing Stairs",
			difficulty: "Easy",

			url: "https://neetcode.io/problems/min-cost-climbing-stairs",

			solution_url: "https://neetcode.io/solutions/min-cost-climbing-stairs",
			subject_id: 33,
		},
		{
			title: "House Robber",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/house-robber",

			solution_url: "https://neetcode.io/solutions/house-robber",
			subject_id: 33,
		},
		{
			title: "House Robber II",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/house-robber-ii",

			solution_url: "https://neetcode.io/solutions/house-robber-ii",
			subject_id: 33,
		},
		{
			title: "Longest Palindromic Substring",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/longest-palindromic-substring",

			solution_url:
				"https://neetcode.io/solutions/longest-palindromic-substring",
			subject_id: 33,
		},
		{
			title: "Palindromic Substrings",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/palindromic-substrings",

			solution_url: "https://neetcode.io/solutions/palindromic-substrings",
			subject_id: 33,
		},
		{
			title: "Decode Ways",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/decode-ways",

			solution_url: "https://neetcode.io/solutions/decode-ways",
			subject_id: 33,
		},
		{
			title: "Coin Change",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/coin-change",

			solution_url: "https://neetcode.io/solutions/coin-change",
			subject_id: 33,
		},
		{
			title: "Maximum Product Subarray",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/maximum-product-subarray",

			solution_url: "https://neetcode.io/solutions/maximum-product-subarray",
			subject_id: 33,
		},
		{
			title: "Word Break",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/word-break",

			solution_url: "https://neetcode.io/solutions/word-break",
			subject_id: 33,
		},
		{
			title: "Longest Increasing Subsequence",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/longest-increasing-subsequence",

			solution_url:
				"https://neetcode.io/solutions/longest-increasing-subsequence",
			subject_id: 33,
		},
		{
			title: "Partition Equal Subset Sum",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/partition-equal-subset-sum",

			solution_url: "https://neetcode.io/solutions/partition-equal-subset-sum",
			subject_id: 33,
		},
		{
			title: "Unique Paths",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/unique-paths",

			solution_url: "https://neetcode.io/solutions/unique-paths",
			subject_id: 34,
		},
		{
			title: "Longest Common Subsequence",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/longest-common-subsequence",

			solution_url: "https://neetcode.io/solutions/longest-common-subsequence",
			subject_id: 34,
		},
		{
			title: "Best Time to Buy And Sell Stock With Cooldown",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/best-time-to-buy-and-sell-stock-with-cooldown",

			solution_url:
				"https://neetcode.io/solutions/best-time-to-buy-and-sell-stock-with-cooldown",
			subject_id: 34,
		},
		{
			title: "Coin Change II",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/coin-change-ii",

			solution_url: "https://neetcode.io/solutions/coin-change-ii",
			subject_id: 34,
		},
		{
			title: "Target Sum",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/target-sum",

			solution_url: "https://neetcode.io/solutions/target-sum",
			subject_id: 34,
		},
		{
			title: "Interleaving String",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/interleaving-string",

			solution_url: "https://neetcode.io/solutions/interleaving-string",
			subject_id: 34,
		},
		{
			title: "Longest Increasing Path In a Matrix",
			difficulty: "Hard",

			url: "https://neetcode.io/problems/longest-increasing-path-in-a-matrix",

			solution_url:
				"https://neetcode.io/solutions/longest-increasing-path-in-a-matrix",
			subject_id: 34,
		},
		{
			title: "Distinct Subsequences",
			difficulty: "Hard",

			url: "https://neetcode.io/problems/distinct-subsequences",

			solution_url: "https://neetcode.io/solutions/distinct-subsequences",
			subject_id: 34,
		},
		{
			title: "Edit Distance",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/edit-distance",

			solution_url: "https://neetcode.io/solutions/edit-distance",
			subject_id: 34,
		},
		{
			title: "Burst Balloons",
			difficulty: "Hard",

			url: "https://neetcode.io/problems/burst-balloons",

			solution_url: "https://neetcode.io/solutions/burst-balloons",
			subject_id: 34,
		},
		{
			title: "Regular Expression Matching",
			difficulty: "Hard",

			url: "https://neetcode.io/problems/regular-expression-matching",

			solution_url: "https://neetcode.io/solutions/regular-expression-matching",
			subject_id: 34,
		},
		{
			title: "Single Number",
			difficulty: "Easy",

			url: "https://neetcode.io/problems/single-number",

			solution_url: "https://neetcode.io/solutions/single-number",
			subject_id: 35,
		},
		{
			title: "Number of 1 Bits",
			difficulty: "Easy",

			url: "https://neetcode.io/problems/number-of-1-bits",

			solution_url: "https://neetcode.io/solutions/number-of-1-bits",
			subject_id: 35,
		},
		{
			title: "Counting Bits",
			difficulty: "Easy",

			url: "https://neetcode.io/problems/counting-bits",

			solution_url: "https://neetcode.io/solutions/counting-bits",
			subject_id: 35,
		},
		{
			title: "Reverse Bits",
			difficulty: "Easy",

			url: "https://neetcode.io/problems/reverse-bits",

			solution_url: "https://neetcode.io/solutions/reverse-bits",
			subject_id: 35,
		},
		{
			title: "Missing Number",
			difficulty: "Easy",

			url: "https://neetcode.io/problems/missing-number",

			solution_url: "https://neetcode.io/solutions/missing-number",
			subject_id: 35,
		},
		{
			title: "Sum of Two Integers",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/sum-of-two-integers",

			solution_url: "https://neetcode.io/solutions/sum-of-two-integers",
			subject_id: 35,
		},
		{
			title: "Reverse Integer",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/reverse-integer",

			solution_url: "https://neetcode.io/solutions/reverse-integer",
			subject_id: 35,
		},
		{
			title: "Rotate Image",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/rotate-image",

			solution_url: "https://neetcode.io/solutions/rotate-image",
			subject_id: 36,
		},
		{
			title: "Spiral Matrix",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/spiral-matrix",

			solution_url: "https://neetcode.io/solutions/spiral-matrix",
			subject_id: 36,
		},
		{
			title: "Set Matrix Zeroes",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/set-matrix-zeroes",

			solution_url: "https://neetcode.io/solutions/set-matrix-zeroes",
			subject_id: 36,
		},
		{
			title: "Happy Number",
			difficulty: "Easy",

			url: "https://neetcode.io/problems/happy-number",

			solution_url: "https://neetcode.io/solutions/happy-number",
			subject_id: 36,
		},
		{
			title: "Plus One",
			difficulty: "Easy",

			url: "https://neetcode.io/problems/plus-one",

			solution_url: "https://neetcode.io/solutions/plus-one",
			subject_id: 36,
		},
		{
			title: "Pow(x, n)",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/powx-n",

			solution_url: "https://neetcode.io/solutions/powx-n",
			subject_id: 36,
		},
		{
			title: "Multiply Strings",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/multiply-strings",

			solution_url: "https://neetcode.io/solutions/multiply-strings",
			subject_id: 36,
		},
		{
			title: "Detect Squares",
			difficulty: "Medium",

			url: "https://neetcode.io/problems/detect-squares",

			solution_url: "https://neetcode.io/solutions/detect-squares",
			subject_id: 36,
		},
	];

	await prismaInstance.problem.createMany({
		data: problems,
	});
}
