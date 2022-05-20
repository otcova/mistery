function setup() {
	createCanvas(400, 400)
	background(40)
	fill(10, 250, 100)

	for (coord of data.split("\n")) {
		let [x, y] = coord.split(",")

		x = Number(x)
		y = Number(y)

		ellipse(x * 3, 400 - y * 3, 10)
	}
}

const data = `93.3333,39.8718
51.5385,96.0256
72.0513,86.4103
44.1026,52.9487
61.2821,62.1795
38.7179,84.8718
51.2821,14.8718
65.8974,20.2564
33.0769,77.5641
26.1538,71.4103
49.7436,17.5641
22.3077,61.7949
22.3077,57.1795
40.2564,51.4103
41.0256,25.2564
56.1538,82.9487
46.1538,94.4872
29.7436,59.8718
23.3333,52.9487
29.7436,32.1795
32.0513,26.7949
50.0,55.2564
53.0769,55.641
67.9487,22.1795
59.2308,57.9487
49.4872,31.4103
76.6667,75.2564
85.1282,51.4103
61.7949,99.1026
61.5385,66.4103
52.5641,46.0256
48.2051,38.3333
86.4103,47.5641
64.8718,46.7949
53.8462,10.2564
33.5897,41.4103
38.7179,31.4103
62.3077,46.0256
32.5641,32.1795
30.0,36.7949
56.6667,86.0256
74.359,10.641
38.2051,49.1026
29.7436,36.0256
63.0769,19.1026
30.0,29.1026
54.8718,49.8718
71.2821,22.9487
55.1282,40.641
55.3846,86.0256
60.7692,33.718
40.7692,88.3333
42.8205,32.5641
36.6667,45.641
25.8974,51.0256
58.7179,18.3333
51.2821,78.718
50.0,85.2564
68.2051,2.9487
67.9487,47.9487
70.5128,53.718
64.1026,25.2564
67.9487,8.718
50.0,95.7692
46.9231,79.8718
48.2051,84.1026
35.1282,30.2564
53.0769,85.2564
46.6667,54.1026
57.4359,55.2564
56.6667,40.641
71.5385,64.4872
47.4359,16.0256
63.0769,29.1026
59.2308,44.4872
52.0513,12.5641
29.7436,62.1795
83.3333,55.2564
57.9487,99.4872
53.8462,80.641
64.8718,97.5641
68.4615,94.1026
70.7692,91.0256
46.1538,6.0256
73.8462,83.3333
89.4872,42.5641
57.4359,10.2564
42.8205,91.4103
79.7436,66.7949
81.7949,60.2564
35.8974,25.2564
45.3846,36.4103
55.3846,97.1795
56.6667,56.0256
61.7949,69.1026
32.8205,51.0256
91.2821,41.5385
98.2051,33.718
48.7179,11.0256
39.4872,25.3846
60.0,10.641
47.1795,9.8718
28.9744,74.4872
64.359,24.1026
74.359,22.9487
44.1026,25.641
64.1026,10.641
31.2821,62.5641
51.5385,34.8718
61.2821,19.1026
87.9487,46.0256
59.2308,38.3333
52.3077,18.3333
23.0769,66.4103
55.1282,18.3333
44.8718,13.718
48.7179,14.8718
75.1282,79.1026
35.641,79.8718
56.1538,14.1026
29.4872,51.0256
35.3846,51.4103
47.9487,95.0
53.5897,37.5641
50.5128,9.4872
54.1026,14.8718
56.6667,42.1795
47.9487,77.5641
47.1795,28.718
66.9231,10.641
71.2821,10.641
71.5385,60.641
49.4872,42.1795
77.6923,71.4103
78.2051,10.641
51.0256,44.1026
95.3846,36.7949
50.0,78.718
37.6923,25.7692
69.4872,69.4872
68.4615,5.2564
44.1026,92.6923`