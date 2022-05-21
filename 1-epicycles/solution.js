let time = 0
let graph_points = []

function setup() {
	createCanvas(600, 600)
	stroke(255) // line color
}

function draw() {
	background(40)
	translate(300, 300)
	scale(-1, 1)

	let previous_coordinate = [0, 0]
	
	for (const epicycle of data.split("\n")) {
		
		const epicycle_data = epicycle.split(",")
		const frequency = Number(epicycle_data[2])
		const phase = Number(epicycle_data[3])
		const radius = Number(epicycle_data[4])
		
		noFill()
		ellipse(...previous_coordinate, radius*2)
		
		previous_coordinate[0] += radius * sin(time * frequency + phase)
		previous_coordinate[1] += radius * cos(time * frequency + phase)
	}
	
	graph_points.push(previous_coordinate)
	
	fill(255)
	for (const point of graph_points)
		ellipse(...point, 10)

	time += 1
}

//delta time = 1
// movement,center coordinates,frequency,phase,radius
const data = `circular,origin,0.02196917939573282,0.8239886802987834,88.27795526778289
circular,previous,0,2.9976355777085533,52.327990760655894
circular,previous,0.04393835879146564,-1.3685169519343803,28.81650194972669
circular,previous,0.06590753818719847,-1.3945780415393347,27.673394336673475
circular,previous,6.2392469483881206,1.8252634103235963,17.463378114775903
circular,previous,6.217277768992388,1.854669993834172,16.273056884125552
circular,previous,6.261216127783854,1.9803159728828927,14.234126386822842
circular,previous,0.08787671758293128,-0.6179689971142914,11.54978347599247
circular,previous,0.15378425577012975,-1.1660112435917211,11.104761552911762
circular,previous,6.1074318720137235,1.2105791377278696,10.367333510773168
circular,previous,6.195308589596655,1.3641693352366053,9.499433581452084
circular,previous,6.063493513222259,1.814832814476765,7.69333091460585
circular,previous,0.10984589697866409,-1.8986348077742485,7.40082925039872
circular,previous,6.1733394102009225,1.9719584433951833,7.340866366912642
circular,previous,6.129401051409457,1.820750625205229,7.057574176523305
circular,previous,0.21969179395732819,-0.7816878912584313,6.985004788726355
circular,previous,0.28559933214452665,-1.7519224070828865,6.961346962919578
circular,previous,0.13181507637439693,-1.5393688391844071,5.454716270345292
circular,previous,6.019555154430793,0.8319294988476507,5.348923086915673
circular,previous,5.975616795639327,1.6022471602792119,5.29161153739453
circular,previous,0.26363015274879387,-1.1667637522151337,5.178737316636246
circular,previous,0.3075685115402595,-1.5104642663503793,4.669517537008872
circular,previous,0.19772261456159537,-2.1279016458798754,4.314412863952594
circular,previous,5.5362332077246705,1.0395520217454668,4.197920668356505
circular,previous,0.615137023080519,-1.483969160857986,4.125484568814058
circular,previous,0.24166097335306103,-1.1271720473752307,4.0468736607135165
circular,previous,5.865770898660663,0.834665561212659,3.7368325333118264
circular,previous,5.733955822286266,1.435095477274847,3.6932989128350306
circular,previous,6.151370230805189,1.1606597217555206,3.6243980098261264
circular,previous,5.953647616243594,1.6640964640853337,3.5601343110759216
circular,previous,0.7249829200591831,-0.29885631135629387,3.4742924920315894
circular,previous,0.37347604972745796,-0.531908440116126,3.452764170235616
circular,previous,6.041524333826525,-3.1204263066335356,3.2985496561291527
circular,previous,0.8128596376421143,-0.613552579405853,3.2453310299068074
circular,previous,0.5931678436847861,-1.7825071462787718,3.224006228060559
circular,previous,0.4613527673103892,-0.5372517798320402,3.056626672254757
circular,previous,5.821832539869197,1.7153094738947319,3.053267710778027
circular,previous,5.887740078056396,1.2479059439392663,3.0502264743939627
circular,previous,5.580171566516136,2.687141117103374,3.0086775169124893
circular,previous,0.48332194670612205,-0.0621285043836693,2.9520162779729255
circular,previous,5.250633875580144,1.2819497366971402,2.887478803071905
circular,previous,0.43938358791465637,-1.6627977830577618,2.739870929445738
circular,previous,0.39544522912319074,-1.8903768750194712,2.7350127737170236
circular,previous,5.514264028328938,1.7636249484431972,2.6644291413921133
circular,previous,0.5272603054975877,-0.773635186295483,2.542736208613276
circular,previous,0.3515068703317251,-2.2379596220748583,2.542542147272148
circular,previous,0.7469520994549159,-1.1637068254053122,2.520241276739637
circular,previous,0.7689212788506486,-2.2485780217148075,2.512465063800965
circular,previous,5.99758597503506,2.3983469750888298,2.458826292460636
circular,previous,6.085462692617991,2.319865510370137,2.4340673450950168
circular,previous,0.85679799643358,-0.46136965221587106,2.395200646637666
circular,previous,5.909709257452128,1.217858713045606,2.3451081957974305
circular,previous,0.6810445612677174,-2.0212086892837577,2.327450840456854
circular,previous,0.17575343516586256,-0.6580987755625101,2.3010320788844707
circular,previous,5.84380171926493,1.889983165358356,2.2225113668190883
circular,previous,5.29457223437161,0.9763111711636595,2.164286700364919
circular,previous,0.9446747140165113,-2.16754813681906,2.1597124833523447
circular,previous,5.228664696184411,1.10664320062558,1.9505752675029635
circular,previous,0.3295376909359923,-0.25937928247995756,1.9380396247221519
circular,previous,1.2742124049525037,-0.3596296686320436,1.917034741318512
circular,previous,1.0325514315994426,-0.24947580546241335,1.9128237706769602
circular,previous,0.9666438934122441,-0.21122610677124293,1.890145220238295
circular,previous,0.6590753818719846,-2.108806987237015,1.8840526534073732
circular,previous,5.206695516788678,1.6891419583277962,1.8665332119733258
circular,previous,1.2522432255567708,0.16189850495187244,1.8561808249890972
circular,previous,1.1423973285781066,-0.6827230825615399,1.838485833272707
circular,previous,5.096849619810015,1.1398245384272698,1.8364922425414647
circular,previous,0.8787671758293127,-2.00797655302929,1.8179925899688358
circular,previous,5.624109925307602,0.27329940794734453,1.8151577802329963
circular,previous,5.799863360473465,1.2197251353365588,1.7577046895046051
circular,previous,5.360479772558808,0.5929464116495448,1.757444999446917
circular,previous,0.5052911261018549,-0.9422215150844969,1.7321657982163237
circular,previous,5.777894181077731,1.204371113141564,1.701615031870107
circular,previous,0.7908904582463815,0.2706427991210191,1.6929392310233364
circular,previous,5.646079104703334,0.5403848931912713,1.667804024696205
circular,previous,5.2726030549758764,0.6036122793533825,1.6399229308300158
circular,previous,5.755925001681999,1.9987662468096614,1.630722432204632
circular,previous,1.230274046161038,-0.1829744388791561,1.4897356407851994
circular,previous,5.4703256695374725,1.9535734184897549,1.4238835083168813
circular,previous,0.8348288170378472,-1.0426139610818455,1.4218142025792364
circular,previous,5.118818799205747,1.0473139252379904,1.4034691142243187
circular,previous,1.2961815843482363,-0.6545419007805542,1.3841236323363386
circular,previous,1.098458969786641,-0.0033976588951676176,1.3789398901601237
circular,previous,1.3620891225354348,-0.8136570980516424,1.287568813497291
circular,previous,1.4499658401183662,-0.6711969459199204,1.2862749087066199
circular,previous,0.9007363552250456,-0.18974649568152144,1.2590554650988919
circular,previous,1.6257192752842287,-0.038223269344745424,1.245539802460604
circular,previous,1.076489790390908,0.005560627763308821,1.2410410030847743
circular,previous,0.7030137406634502,-1.5426523281578983,1.225641834291478
circular,previous,4.811250287665487,0.5083306655815893,1.2249253850860058
circular,previous,4.349897520355098,1.388019735877752,1.2153125674093497
circular,previous,5.426387310746007,1.4310168605975966,1.2002556904241644
circular,previous,4.921096184644152,0.7330930727818701,1.1948667875153092
circular,previous,5.931678436847862,2.1098286969960744,1.1805776631930343
circular,previous,4.943065364039884,0.6744781971971184,1.1765669800640493
circular,previous,5.162757157997213,1.7686901705559597,1.1751383606600767
circular,previous,1.2083048667653051,-0.604558700232913,1.1715621050159575
circular,previous,4.657466031895358,1.6185795766008542,1.1624415738845888
circular,previous,5.6900174634948,-0.08757734683336324,1.1493583932195925
circular,previous,5.052911261018549,1.6451526554937905,1.1478759088564712
circular,previous,5.14078797860148,1.6459565287158673,1.142720664405036
circular,previous,4.98700372283135,2.927301731813599,1.1393719407494431
circular,previous,4.965034543435618,1.3913561110844248,1.1262644903432266
circular,previous,1.4060274813269005,1.0586229059999082,1.1136375083247636
circular,previous,1.8014727104500912,-0.44921221353575974,1.1036938692037714
circular,previous,0.5492294848933205,-2.900367559441217,1.099181063173506
circular,previous,4.371866699750831,1.128813790678302,1.0930723492691155
circular,previous,1.340119943139702,-2.062341283562257,1.0841354052567005
circular,previous,1.0105822522037098,-0.2521447841461348,1.0834306654955275
circular,previous,5.074880440414281,0.8867066410412178,1.0820000292679837
circular,previous,4.613527673103892,1.25032219966569,1.0793586335403276
circular,previous,5.316541413767342,2.1798913931602404,1.0781942726949931
circular,previous,5.668048284099068,2.1027102179529757,1.057384798113688
circular,previous,1.3181507637439691,-0.6638954976163125,1.0566569912293349
circular,previous,4.855188646456953,1.599421191873086,1.056104215506875
circular,previous,4.569589314312426,1.472488989541155,0.9565862431021158
circular,previous,2.196917939573282,-0.00812903892009606,0.9271662053068309
circular,previous,4.877157825852686,0.6766273860347172,0.9203044024632804
circular,previous,2.680239886279404,0.06328264434895693,0.9166777730240006
circular,previous,1.6916268134714272,-0.7422325302901491,0.9147188091834946
circular,previous,5.6021407459118695,2.6180299420782323,0.9098068674292121
circular,previous,4.305959161563632,0.91496606888589,0.9095881668848345
circular,previous,4.679435211291091,1.4274559591867257,0.8984456048594727
circular,previous,5.008972902227083,1.8759877363731485,0.8976095909978169
circular,previous,1.7355651722628929,-1.1015704728083864,0.8897501922533484
circular,previous,5.4044181313502735,0.6545665034213941,0.871806128310505
circular,previous,1.4279966607226333,-0.9780610499463098,0.8603416859907775
circular,previous,1.1643665079738394,-0.564162404728838,0.853776292220749
circular,previous,0.5711986642890533,-1.5296495955506177,0.8505076115902239
circular,previous,4.262020802772167,0.5334465093335791,0.8409937862470859
circular,previous,3.8885447530447093,0.3338877074303738,0.8405002430437641
circular,previous,2.0431336838031524,-0.21897550176635272,0.8327171685478999
circular,previous,3.5590070621087166,0.3057186203330543,0.8221978402020785
circular,previous,3.954452291231908,0.6874784322973776,0.8087308878301287
circular,previous,1.1204281491823738,-0.8113136711841161,0.8056974109904008
circular,previous,2.2188871189690147,0.7194268580841099,0.8026772507341845
circular,previous,1.581780916492763,-0.5845252290555042,0.784480532813367
circular,previous,1.471935019514099,0.2351605168705668,0.7794388813594526
circular,previous,4.415805058542297,1.347778899248437,0.7793472635845677
circular,previous,5.448356490141739,1.602628210401393,0.7742718274613336
circular,previous,2.2408562983647475,-0.17086018780810694,0.7707387757019633
circular,previous,2.834024142049534,-0.14053368945500044,0.768509617841427
circular,previous,4.525650955520961,1.2982379553830852,0.7678194454269985
circular,previous,4.7014043906868235,1.6895844344841409,0.7667810216182578
circular,previous,2.3946405541348774,0.36872010518643894,0.7655530817563176
circular,previous,2.3726713747391446,-0.1934438653636455,0.7619269675523505
circular,previous,3.27340772996419,0.3963954627640878,0.7615121135671797
circular,previous,5.492294848933205,2.455998778959107,0.7599628241385222
circular,previous,0.9227055346207784,-1.0508839132530818,0.7577409240673915
circular,previous,1.6696576340756943,-0.23372373788394418,0.7559526350409005
circular,previous,1.7795035310543583,-0.2219488225343573,0.7555232888641865
circular,previous,0.4174144085189236,-1.3013980266257934,0.7548170557043681
circular,previous,4.59155849370816,0.6442124365255651,0.7431273932453165
circular,previous,1.5158733783055647,-0.6380262258425209,0.7407467536715555
circular,previous,3.9764214706276406,0.7607985746157236,0.7398723468187107
circular,previous,3.668852959087381,0.19751546831045802,0.7366846994519746
circular,previous,1.71359599286716,-0.7934641268630681,0.7359479823887272
circular,previous,1.9113186074287554,-0.19371674432047645,0.7341087488407201
circular,previous,2.152979580781816,-0.34895644193964326,0.7267032870016066
circular,previous,3.42719198573432,0.09538532989209729,0.7199202129948418
circular,previous,2.438578912926343,0.14827338265042536,0.7156966898111288
circular,previous,3.6908221384831137,1.1894848336213606,0.7138106704262259
circular,previous,5.030942081622816,1.125424029187328,0.7046835799525402
circular,previous,2.0651028631988853,0.16086171503960414,0.7020926670607818
circular,previous,2.5044864511135416,-0.8347919563072048,0.69564903484006
circular,previous,4.745342749478289,0.9028671457527995,0.6903096084428109
circular,previous,2.7022090656751367,0.07082060811888183,0.6900936666849198
circular,previous,2.7461474244666024,0.1564719022773038,0.6882449891015758
circular,previous,3.8226372148575107,0.121091552150229,0.6878055111170583
circular,previous,3.0537159360068618,0.2657711926948548,0.6877910028735252
circular,previous,2.460548092322076,0.12982760923561532,0.6835220327371051
circular,previous,2.306763836551946,-0.4462572815462206,0.6794657015498975
circular,previous,1.823441889845824,-1.3167654870353696,0.6792246530965125
circular,previous,3.624914600295915,0.5464083905627453,0.6764096471373383
circular,previous,4.437774237938029,0.6851779222716295,0.6756795792823197
circular,previous,4.8332194670612205,1.9460222034270476,0.6733018174308029
circular,previous,3.3393152681513887,-0.008943065433750634,0.6732749429649976
circular,previous,2.8779625008409995,-0.3065601077227592,0.6668209440518555
circular,previous,3.4930995239215186,0.2084454004650121,0.6610900324406389
circular,previous,1.7575343516586255,0.12422589623424846,0.654918519377373
circular,previous,3.2075001917769916,0.17413444633253786,0.6521365319039935
circular,previous,3.515068703317251,0.5525102777245376,0.6417950501801188
circular,previous,2.2628254777604804,-0.011191771487248517,0.6410194926973446
circular,previous,1.3840583019311676,-2.2272498318571317,0.6399261361511688
circular,previous,2.9878083978196637,0.7582981990380943,0.6379623656227436
circular,previous,3.910513932440442,0.960463705047614,0.6369686936352018
circular,previous,4.789281108269755,1.30482329106171,0.6313505912404106
circular,previous,4.327928340959366,1.2442676747790982,0.6289029338671109
circular,previous,4.723373570082556,0.8525352438272746,0.6267589243011089
circular,previous,3.8665755736489764,0.6830120143872621,0.6249360535087097
circular,previous,5.382448951954541,-3.0618276510214537,0.6236601842650934
circular,previous,2.3507021953434117,-0.8857664739437165,0.6223084946651911
circular,previous,2.6363015274879382,0.20388804313223594,0.6155346194894709
circular,previous,5.711986642890533,-1.5884078828854897,0.6137897288170232
circular,previous,2.1310104013860833,-0.004990091422978355,0.605983042836567
circular,previous,2.965839218423931,0.1824737115621824,0.6051633064376518
circular,previous,2.5923631686964725,0.6745470062323378,0.6012989363571744
circular,previous,3.646883779691648,0.4708504227838639,0.600977936221996
circular,previous,2.658270706883671,-0.13603551116215873,0.6003058814892792
circular,previous,2.8999316802367323,0.38367209456780615,0.599067776582437
circular,previous,4.108236547002037,0.6747350182818129,0.5925092700818603
circular,previous,1.5378425577012973,-0.28211205811380524,0.5903771733122015
circular,previous,2.7241782450708696,0.18233033944172405,0.5883377641768446
circular,previous,1.4939041989098318,-0.5914941961834062,0.5862837166960653
circular,previous,1.9991953250116865,-0.33636972382621133,0.583277010367686
circular,previous,2.109041221990351,-0.5314275760456572,0.5827937587253136
circular,previous,2.7681166038623353,0.05831188352821158,0.5821285692520066
circular,previous,2.57039398930074,-0.4156222829640652,0.5746844794039575
circular,previous,4.393835879146564,1.5191767005243273,0.5705425472547624
circular,previous,2.4166097335306103,-0.6112279650018373,0.5660928244226137
circular,previous,4.218082443980702,0.9909776790128567,0.5657571994671389
circular,previous,2.921900859632465,0.5214662418953556,0.5649092590830042
circular,previous,3.5809762415044495,0.47401199482977524,0.5638593247069197
circular,previous,4.086267367606305,0.8118135212185968,0.5619500226221632
circular,previous,4.899127005248419,1.4147999641242825,0.5616923590406034
circular,previous,3.295376909359923,0.5723081327636664,0.5584563415061429
circular,previous,4.503681776125228,1.0703912280130257,0.5564155602183003
circular,previous,3.800668035461778,0.06509806635147686,0.5544026461645802
circular,previous,2.6143323480922054,-0.19712725569289793,0.5542683327903684
circular,previous,3.2294693711727245,0.5197904487533779,0.5434607761540027
circular,previous,3.6029454209001823,0.427590699764834,0.540800218256658
circular,previous,4.042329008814839,0.7373616035285768,0.5399439404020981
circular,previous,1.6037500958884958,-0.2204930083014846,0.5397908475024948
circular,previous,1.8893494280330225,-0.5448265269305248,0.5326530841446924
circular,previous,3.7347604972745794,0.6430313902044135,0.5266124766875745
circular,previous,4.240051623376434,0.7434723183214881,0.5259885787236009
circular,previous,3.141592653589793,-0.07571703934027238,0.508449799961218
circular,previous,3.0097775772153965,0.14470683722063318,0.5074237761489527
circular,previous,3.185531012381259,-0.21817338990130203,0.5008510592737332
circular,previous,3.317346088755656,0.7197356562076778,0.4989580065041857
circular,previous,2.943870039028198,0.4524135903655657,0.4983016703492473
circular,previous,3.3612844475471215,0.47838835044786726,0.49564116457973995
circular,previous,3.0976542947983274,-0.003030345079550556,0.49470474625050515
circular,previous,4.481712596729495,0.5020316999566953,0.4851682339942976
circular,previous,3.163561832985526,0.05398330426735247,0.4843283072996008
circular,previous,2.174948760177549,0.1439991792660138,0.4812617243689571
circular,previous,2.328733015947679,-0.07997845605566793,0.4807681578998863
circular,previous,3.8446063942532436,0.568659006770726,0.47834937938765215
circular,previous,1.6476884546799615,-0.9303455594259694,0.47577613743637115
circular,previous,4.1302057263977705,0.5105473351039149,0.4757665011996826
circular,previous,1.977226145615954,-0.6417147740085466,0.4736304552898604
circular,previous,1.1863356873695723,-0.5597688862160725,0.4686298547218338
circular,previous,1.9332877868244882,-0.3054122658101725,0.4643475440765703
circular,previous,3.1196234741940603,-0.2856719885103497,0.4592501177405816
circular,previous,1.5598117370970301,-0.744775919802327,0.4484236068601717
circular,previous,4.2839899821679,1.114840763493858,0.4445147308002065
circular,previous,2.482517271717809,-0.5267305143113395,0.44147767014243083
circular,previous,3.778698856066045,0.6857363828397692,0.44091689255381095
circular,previous,2.284794657156213,0.10002301582386922,0.4397367091550311
circular,previous,4.020359829419106,0.25047607132309657,0.4358302758534791
circular,previous,3.756729676670312,1.2896011140744996,0.4345905847679828
circular,previous,3.3832536269428544,1.279954778832117,0.4253691078843582
circular,previous,2.5484248099050073,0.43952208355754935,0.42350291950450997
circular,previous,3.537037882712984,0.5489177296262081,0.4201312775706549
circular,previous,1.0545206109951755,-2.6834189694106843,0.41061783615696346
circular,previous,4.547620134916694,0.28229377102674924,0.41027214877791096
circular,previous,3.449161165130053,0.500906998724079,0.40788989835671163
circular,previous,4.152174905793503,0.5981953849600805,0.4072975003653337
circular,previous,2.8559933214452666,0.6131201409212103,0.3983356979159293
circular,previous,2.087072042594618,-0.007018636981814255,0.3974140175337261
circular,previous,2.0211645044074196,-1.1347821487387144,0.3936386321363139
circular,previous,5.338510593163075,0.7298361535802284,0.37884061830151083
circular,previous,3.7127913178788465,1.4019551727726893,0.3652992740647984
circular,previous,3.0756851154025946,0.7282422709133116,0.3626631080256788
circular,previous,2.5264556305092745,-0.2465836462802864,0.3625140624991421
circular,previous,2.812054962653801,-0.47758628158062283,0.3577720146137431
circular,previous,3.998390650023373,0.768063728390672,0.3545064636777607
circular,previous,1.8673802486372897,0.9087842582406477,0.351437252905996
circular,previous,4.196113264584969,0.4066555425657069,0.3503760709888754
circular,previous,5.184726337392945,0.998866364900797,0.3494463338845281
circular,previous,0.6371062024762518,0.5930515952687083,0.32862498104484017
circular,previous,4.174144085189236,0.8909157937711347,0.3234830166454032
circular,previous,4.459743417333763,1.4991986697052,0.30246693869937324
circular,previous,1.8454110692415568,-1.0754310362458726,0.3021017470952666
circular,previous,3.932483111836175,1.305230412767564,0.2935634644721255
circular,previous,1.955256966220221,-0.6268986852717946,0.28991432825619723
circular,previous,0.988613072807977,-1.7795126326480843,0.28792854921924776
circular,previous,3.0317467566111294,0.6781354054066107,0.28635518830596646
circular,previous,4.635496852499625,0.5593163278651639,0.26910487973811675
circular,previous,5.558202387120404,-2.9051047976563336,0.2557473731617968
circular,previous,3.2514385505684573,0.3651129994235339,0.25264653375538026
circular,previous,2.790085783258068,0.975759482172346,0.2496183136099622
circular,previous,3.405222806338587,1.0065101623348873,0.23332008169929133
circular,previous,4.0642981882105715,-0.02160657457921042,0.1887082835934058
circular,previous,3.4711303445257857,-0.5895731270013008,0.1524483173510093
circular,previous,4.7673119288740216,0.013054141810764756,0.1127151722433401`