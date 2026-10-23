/* The figure library.
 *
 * Every figure the five minutes could use, with a verdict. `use` is on a slide
 * now. `backup` is loaded and numbered but never shown unless asked for.
 * `maybe` is a real option that lost on time, not on quality. `never` is a
 * figure that will cost you more than it earns, with the reason.
 *
 * Every URL here returned HTTP 200 from static.igem.wiki when it was added.
 * `sees` is what a judge takes from the image in the first two seconds, which
 * is the only question that decides whether a figure belongs on a slide.
 *
 * Backup numbering is by territory, so whoever is answering can call a number
 * without hunting: 11-19 protein and assays, 20-29 the instrument, 30-39 the
 * rig, 40-45 plants, 46-52 models and software, 53-58 practices, business and
 * law, and 59 the light switch, numbered apart so it is never reached by
 * accident. Type-only backup slides are 60 and up, in backup.js.
 */
var FIGURES = [

/* ───────────────────────────── on a slide ───────────────────────────── */
{
  v: 'use', slide: 1, group: 'rig', src: 'home/explore-hardware-bench-home.webp',
  title_en: 'The whole loop running on one bench, with a live growth curve',
  title_zh: '整個迴路在同一張實驗桌上運轉，並有即時生長曲線',
  sees_en: 'A machine that exists, is working, and is logging. Settles "did they actually build it" in one second, and it is natively 16:9 so nothing has to be cropped.',
  sees_zh: '一台真實存在、正在運作、而且在記錄資料的機器。一秒解決「他們真的做出來了嗎」，而且它原生就是 16:9，不需要任何裁切。',
  cap_en: 'The hollow-fibre column, culture and medium bottles, the peristaltic pump, the in-line photometer and a laptop reading the loop, under the circuit sketched on the whiteboard.',
  cap_zh: '中空纖維管柱、培養液與培養基瓶、蠕動泵、在線光度計，以及正在讀取迴路的筆電，後方白板上畫著線路圖。',
  src_page: 'home'
},
{
  v: 'use', slide: 2, group: 'protein', src: 'engineering/rig-int4-assays-engineering.webp',
  title_en: 'Panel (c): specific activity through 72 hours',
  title_zh: '(c) 子圖：72 小時的比活性',
  sees_en: 'Activity normalised to concentration, in a cell-free compartment. The one quantity on the wiki that cannot be host background.',
  sees_zh: '無細胞隔室中、以濃度標準化的活性。這是 wiki 上唯一不可能是宿主背景值的量。',
  cap_en: 'Shell-permeate assays across the October run. (a) ELISA concentration, (b) DNPH volumetric activity, (c) specific activity.',
  cap_zh: '十月那次運轉的殼側透過液分析。(a) ELISA 濃度、(b) DNPH 體積活性、(c) 比活性。',
  note_en: 'Slide 2 shows panel (c) cropped to full size, then reveals (a) and (b) beneath it on the second beat so the six-hour offset arrives as a separate thought. The whole figure is backup 11.',
  note_zh: '第 2 張把 (c) 裁切放大，第二個節拍再在下方帶出 (a) 與 (b)，讓六小時落差成為獨立的一個想法。完整圖是備用第 11 張。',
  src_page: 'engineering'
},
{
  v: 'use', slide: 3, group: 'plant', src: 'plant/h18-bopepsal-rack-plant.webp',
  title_en: 'Hydroponic BoPep4 under salinity, against a strain-matched control',
  title_zh: '水耕 BoPep4 鹽逆境，對照同株培養液',
  sees_en: 'One green group among pale ones, and a control that is the same bacterium without the protectant. This is the only plant comparison in the project with that control.',
  sees_zh: '一組綠的在一排泛白的中間，而且對照組是同一株細菌、只是不產保護蛋白。這是整個專題唯一帶這種對照的植物比較。',
  cap_en: 'WB800 is the control culture: the same Bacillus subtilis, not producing the protectant.',
  cap_zh: 'WB800 是對照培養液：同一株 Bacillus subtilis，但不產生保護蛋白。',
  note_en: 'Cropped to the tray, with a ring on the 1/40 group and a ring on the WB800 control. The marks say what WB800 is, which the figure assumes a reader already knows.',
  note_zh: '裁切到只剩育苗盤，並在 1/40 那一組與 WB800 對照組各加一個圈。標註說明 WB800 是什麼，而原圖預設讀者已經知道。',
  src_page: 'plant'
},
{
  v: 'use', slide: 3, group: 'plant', src: 'plant/s21-accdheat-t1-plant.webp',
  title_en: 'Panel (c): soil heat, chlorophyll by treatment timing',
  title_zh: '(c) 子圖：土耕熱逆境，各施用時機的葉綠素',
  sees_en: 'Post-treatment below the untreated control. The result that argues for forecasting stress instead of reacting to it, and it repeated in trial 2.',
  sees_zh: '後處理組低於未處理對照組。這個結果支持「預報逆境」而不是「事後反應」，而且在第二試中重現。',
  cap_en: 'Trial 1. (a) Fresh weight. (b) Relative chlorophyll with fresh-weight normalization. (c) Relative chlorophyll without it.',
  cap_zh: '第一試。(a) 鮮重。(b) 以鮮重標準化的相對葉綠素。(c) 未標準化的相對葉綠素。',
  note_en: 'Panel (c) is the one the claim rests on, and the figure keeps its legend in another corner, so the groups are labelled directly on the bars instead. Selecting a named panel is fair; cropping an axis is not.',
  note_zh: '論點依據的是 (c)，而這張圖的圖例在另一個角落，所以改成直接把組別標在長條上。挑選一個具名的子圖是公平的；裁切座標軸不是。',
  src_page: 'plant'
},
{
  v: 'use', slide: 4, group: 'instrument', src: 'measurement/od600-gates-bubble-measurement.svg',
  title_en: 'Two acceptance gates, provoked with bubbles',
  title_zh: '兩道接受閘，刻意用氣泡挑戰',
  sees_en: 'One trace swinging wildly and one trace flat on the truth, on the same axes. The best single measurement image the project has, and it needs no annotation.',
  sees_zh: '同一座標上，一條劇烈震盪、一條平貼在真值上。這是整個專題最好的單張量測影像，而且不需要任何標註。',
  cap_en: 'Ungated, the worst reading is 2.44 OD away from the truth; through both gates the worst is 0.016.',
  cap_zh: '未過閘時最差的讀值偏離真值 2.44 OD；通過兩道閘後最差只有 0.016。',
  src_page: 'measurement'
},
{
  v: 'use', slide: 4, group: 'instrument', src: 'measurement/od600-run-gate-measurement.svg',
  title_en: 'The out-of-sample test: the same rig, six days later',
  title_zh: '樣本外驗證：同一台裝置，六天後',
  sees_en: 'Two bars. The readable part of the record goes from 10.6 hours to 37. The gate was written down before this run existed.',
  sees_zh: '兩條長條。紀錄中可讀取的部分從 10.6 小時變成 37 小時。而這道閘是在這次運轉存在之前就寫下的。',
  cap_en: 'The same reactor and the same strain, six days apart. The bar is the whole logged record; the solid part is what can be read as a growth curve.',
  cap_zh: '同一台反應器、同一株菌，相隔六天。長條是整段紀錄；實心部分是能當成生長曲線來讀的範圍。',
  src_page: 'measurement'
},
{
  v: 'use', slide: 4, group: 'instrument', src: 'measurement/od600-silica-window-measurement.svg',
  title_en: 'Both builds against a commercial BioDrop, on silica',
  title_zh: '兩款自製版本對照商用 BioDrop，以矽球校正',
  sees_en: 'A home-built instrument climbing on a commercial instrument\'s slope, with nothing fitted to make it do so.',
  sees_zh: '一台自製儀器沿著商用儀器的斜率上升，而且沒有做任何擬合讓它變成這樣。',
  cap_en: 'Inside the BioDrop\'s own range the Pro climbs on the reference\'s slope and sits a constant 0.12 OD below it; the Slim climbs a fifth as steeply and just as straight.',
  cap_zh: '在 BioDrop 自身量程內，Pro 沿著參考儀器的斜率上升，並固定低它 0.12 OD；Slim 的斜率約為五分之一，但同樣是直線。',
  src_page: 'measurement'
},
{
  v: 'use', slide: 5, group: 'rig', src: 'engineering/rig-int4-growth-ph-engineering.webp',
  title_en: 'The October run: 77 hours of growth with the pH trace beneath',
  title_zh: '十月那次運轉：77 小時生長曲線，下方是 pH 軌跡',
  sees_en: 'A three-day run in one picture. The small sawtooth early on is the controller dosing by itself; the big spikes later are a person with a pipette.',
  sees_zh: '一張圖看完三天的運轉。前段細密的鋸齒是控制器自己在加鹼；後段那幾個大尖峰是人拿著移液管加的。',
  cap_en: 'Growth curve and pH across the 18 October run. Each sharp rise in pH corresponds to a base addition.',
  cap_zh: '10 月 18 日運轉的生長曲線與 pH。每一次 pH 急升都對應一次加鹼。',
  note_en: 'The band marks the first night, when dosing was automatic. Saying that the KOH then corroded four valves is a better engineering story than hiding it.',
  note_zh: '色帶標出第一晚，也就是自動加鹼運作的那段。主動講出 KOH 後來腐蝕了四個閥，比隱瞞它更像一個工程故事。',
  src_page: 'engineering'
},
{
  v: 'use', slide: 5, group: 'rig', src: 'hardware/bioreactor/containment-plates-bioreactor.webp',
  title_en: 'Lumen side and shell side, plated',
  title_zh: '管內側與殼側塗盤',
  sees_en: 'Colonies on one plate, nothing on the other. The containment claim with no explanation needed, and no replicate behind it.',
  sees_zh: '一盤有菌落，另一盤什麼都沒有。圍阻的主張不需要任何解釋，但它背後也沒有重複試驗。',
  cap_en: 'Lumen-side (left) and shell-side (right) medium, plated on LB agar after 24 h at 37 °C.',
  cap_zh: '管內側（左）與殼側（右）培養液，於 LB 培養基 37 °C 培養 24 小時後。',
  src_page: 'hardware-bioreactor'
},
{
  v: 'use', slide: 5, group: 'instrument', src: 'measurement/photometer-two-builds-measurement.webp',
  title_en: 'The two photometer builds at the same scale',
  title_zh: '兩款光度計以相同比例呈現',
  sees_en: 'A first version and a simplified version side by side. The cost story and the reproduction story in one frame.',
  sees_zh: '第一版與簡化版並排。成本故事和「可被重現」的故事在同一張圖裡。',
  cap_en: 'The beam-splitter design (left) on a tilted stand, and the fiber-based design (right): US$371.78 against US$235.29.',
  cap_zh: '左為分光鏡設計、置於傾斜支架上，右為光纖設計：371.78 美元對 235.29 美元。',
  src_page: 'measurement'
},

/* ─────────────────── backup · 11-19 protein and assays ─────────────────── */
{
  v: 'backup', slide: 11, group: 'protein', src: 'engineering/rig-int4-assays-engineering.webp',
  title_en: 'All three panels of the shell-permeate assays',
  title_zh: '殼側透過液分析的全部三個子圖',
  sees_en: 'Concentration, activity and specific activity on one sheet. Show the whole figure when a judge wants to see what slide 2 cropped.',
  sees_zh: '濃度、活性與比活性在同一張上。當評審想看第 2 張裁掉了什麼時，就展示完整圖。',
  cap_en: '(a) ELISA concentration, (b) DNPH volumetric activity, (c) specific activity, at 1, 6, 12, 18, 24, 30, 36, 48 and 72 h.',
  cap_zh: '(a) ELISA 濃度、(b) DNPH 體積活性、(c) 比活性，取樣於 1、6、12、18、24、30、36、48、72 小時。',
  src_page: 'engineering'
},
{
  v: 'backup', slide: 12, group: 'protein', src: 'results/wb-260802-accd-fractionation-results.webp',
  title_en: 'The protein is in the supernatant, not the pellet',
  title_zh: '蛋白在上清液裡，不在菌體沉澱裡',
  sees_en: 'Bands in the supernatant lanes and nothing in the others. This is secretion shown directly, which the ELISA numbers only imply.',
  sees_zh: '上清液泳道有帶、其他沒有。這是直接把「分泌」看出來，而 ELISA 的數字只能間接暗示。',
  cap_en: 'Western blot of ACC deaminase fractionation, 2 August 2026. Signal is present exclusively in the supernatant lanes.',
  cap_zh: 'ACC 去胺酶分層的西方墨點，2026 年 8 月 2 日。訊號只出現在上清液泳道。',
  note_en: 'A good answer to "how do you know it was secreted rather than released by lysis?" together with the shell-side plate.',
  note_zh: '搭配殼側培養盤，這是回答「你怎麼知道是分泌、而不是細胞破裂釋出」的好材料。',
  src_page: 'results'
},
{
  v: 'backup', slide: 13, group: 'protein', src: 'engineering/wb-260904-bioreactor-timecourse-engineering.webp',
  title_en: 'Cell lysate, lumen and shell on one blot',
  title_zh: '細胞裂解液、管內側與殼側在同一張墨點上',
  sees_en: 'The product appearing on all three sides of the system over a run. It is the clearest picture of the protein crossing the membrane.',
  sees_zh: '產物在運轉過程中出現在系統的三個位置。這是「蛋白穿過膜」最清楚的一張圖。',
  cap_en: 'Time course and spatial localisation of the ACC deaminase construct across a bioreactor run.',
  cap_zh: 'ACC 去胺酶構築在一次生物反應器運轉中的時間序列與位置分布。',
  src_page: 'engineering'
},
{
  v: 'backup', slide: 14, group: 'protein', src: 'engineering/rig-int2-assays-engineering.webp',
  title_en: 'Lumen against shell, read as a time course',
  title_zh: '管內側對殼側，以時間序列呈現',
  sees_en: 'Pairs of bars that are nearly equal. The only run in the project that measures the protectant on both sides of the membrane in one experiment.',
  sees_zh: '一對一對幾乎等高的長條。這是全專題唯一在同一個實驗裡量測膜兩側保護蛋白的運轉。',
  cap_en: 'The same run read as a time course rather than a single point: ACC deaminase in lumen medium and in shell permeate.',
  cap_zh: '同一次運轉以時間序列而非單點呈現：管內側培養液與殼側透過液中的 ACC 去胺酶。',
  note_en: 'Quote the lumen-to-shell agreement, not an absolute concentration: both readings sit above the top standard, so neither is better than approximate.',
  note_zh: '請引用管內側與殼側的一致性，不要引用絕對濃度：兩個讀值都高於最高標準品，所以兩者都只能說是近似值。',
  src_page: 'engineering'
},
{
  v: 'backup', slide: 15, group: 'protein', src: 'measurement/elisa-standard-curve-measurement.webp',
  title_en: 'The competitive ELISA standard curve',
  title_zh: '競爭型 ELISA 標準曲線',
  sees_en: 'A clean calibration with its own range marked. Use it to answer where the quantitation holds, and to say plainly where our samples fell outside it.',
  sees_zh: '一條乾淨、標出自身量程的校正曲線。用它回答定量在哪個範圍成立，並直接說明我們的樣本落在範圍之外。',
  cap_en: 'Six concentrations from 0.093 to 3 µg/mL in duplicate, expressed as a percentage of maximum binding.',
  cap_zh: '0.093 至 3 µg/mL 六個濃度、每點兩重複，以最大結合百分比表示。',
  note_en: 'The honest companion to any ELISA question: ACC deaminase fell below the bottom of this curve in all four measurements, so those concentrations are extrapolations.',
  note_zh: '任何 ELISA 提問的誠實搭檔：ACC 去胺酶在四次量測中都低於這條曲線的下限，所以那些濃度是外插值。',
  src_page: 'measurement'
},
{
  v: 'backup', slide: 16, group: 'protein', src: 'description/construct-modules-description-v2.webp',
  title_en: 'The circuit as four independent modules',
  title_zh: '這個線路，四個可獨立組裝的模組',
  sees_en: 'What was actually built, in one diagram. Use it the moment anyone asks how the light signal reaches the gene.',
  sees_zh: '一張圖看完到底做了什麼。只要有人問光訊號怎麼到達基因，就用這張。',
  cap_en: 'Four functional modules of the ReLEAF light-responsive circuit. Each can be assembled and modified independently.',
  cap_zh: 'ReLEAF 光反應線路的四個功能模組。每一個都能獨立組裝與修改。',
  src_page: 'description'
},
{
  v: 'backup', slide: 17, group: 'protein', src: 'engineering/gel-wb800-bopep4-23-engineering.webp',
  title_en: 'Twenty-three of twenty-three transformants carry the band',
  title_zh: '二十三個轉形株全部帶有正確片段',
  sees_en: 'Every lane positive. The strongest single "it worked" image in the project, and it shows reproducibility rather than one lucky colony.',
  sees_zh: '每一條泳道都是陽性。整個專題最強的單張「成功了」影像，而且它呈現的是可重現性，不是一個幸運的菌落。',
  cap_en: 'Colony PCR of twenty-three WB800 transformants carrying the BoPep4 2.1 cassette.',
  cap_zh: '二十三個帶有 BoPep4 2.1 卡匣的 WB800 轉形株菌落 PCR。',
  note_en: 'No expected band size is stated for this gel and the build table gives BoPep4 2.1 as 678 bp, which does not match a band above the 1 kb marker. Show the gel and say only "every lane positive".',
  note_zh: '這張膠沒有標註預期片段大小，而建構表把 BoPep4 2.1 寫成 678 bp，與一條落在 1 kb 標記之上的帶不符。請只展示膠圖、只說「每一條泳道都是陽性」。',
  src_page: 'engineering'
},
{
  v: 'backup', slide: 18, group: 'protein', src: 'engineering/gel-260919-level2-acdi-three-clones-engineering.webp',
  title_en: 'Nine of nine Level 2 junctions correct, across three clones',
  title_zh: 'Level 2 九個接點全部正確，橫跨三個轉殖株',
  sees_en: 'Nine lanes, all positive. The strongest cloning evidence the project has.',
  sees_zh: '九條泳道全部呈陽性。這是整個專題最強的選殖證據。',
  cap_en: '19 September 2026. Three ACDI clones across three junctions: junction B at 632 bp, junction C at 661 bp.',
  cap_zh: '2026 年 9 月 19 日。三個 ACDI 轉殖株、三個接點：接點 B 632 bp、接點 C 661 bp。',
  note_en: 'Junctions prove module order, not the 10 kb between them. No Level 2 construct has been sequenced end to end.',
  note_zh: '接點證明模組順序，不證明中間那 10 kb。沒有任何 Level 2 構築做過端到端定序。',
  src_page: 'engineering'
},
{
  v: 'backup', slide: 19, group: 'protein', src: 'engineering/gel-level2-ecori-btsi-engineering.webp',
  title_en: 'The device is the right length',
  title_zh: '這個裝置長度正確',
  sees_en: 'A double digest landing where it was designed to. Pair with backup 18.',
  sees_zh: '雙酶切落在設計的位置上。和備用第 18 張一起用。',
  cap_en: 'EcoRI alone linearises the plasmid at the expected 10,293 bp; EcoRI with BtsI cuts to 7,543 bp. Two independent clones.',
  cap_zh: '單用 EcoRI 將質體線性化於預期的 10,293 bp；EcoRI 加 BtsI 切成 7,543 bp。兩個獨立轉殖株。',
  src_page: 'engineering'
},

/* ─────────────────── backup · 20-29 the instrument ─────────────────── */
{
  v: 'backup', slide: 20, group: 'instrument', src: 'measurement/od600-reference-counts-measurement.svg',
  title_en: 'We audited our own firmware and found a fault in it',
  title_zh: '我們稽核自己的固件，並在裡面找到一個錯誤',
  sees_en: 'A histogram piled on one value. 91.5% of reference readings landed on an exact integer count, which is a software artefact, not optics.',
  sees_zh: '直方圖堆在一個值上。91.5% 的參考讀值落在整數計數上，那是軟體產生的假象，不是光學現象。',
  cap_en: 'Reference-channel counts over the 434-hour run: 1219 readings pile on count 32, where one count is 0.067 OD.',
  cap_zh: '434 小時運轉中參考通道的計數分布：1219 個讀值堆在計數 32，而該處一個計數等於 0.067 OD。',
  note_en: 'When more than half of sixteen samples share an integer the median absolute deviation is zero, the fence has zero width, and all three estimators collapse to the modal count. Found by reading our own code.',
  note_zh: '當十六個樣本中有超過一半落在同一個整數上，中位數絕對偏差為零、容許範圍寬度為零，三個估計量全部收斂到眾數計數。這是讀自己的程式碼找到的。',
  src_page: 'measurement'
},
{
  v: 'backup', slide: 21, group: 'instrument', src: 'measurement/od600-count-jumps-measurement.svg',
  title_en: 'The fault, caught in the act',
  title_zh: '當場抓到那個錯誤',
  sees_en: 'The reported density stepping up exactly where the reference channel leaves one count and settling again when it returns. Cause and effect in one trace.',
  sees_zh: '回報的密度正好在參考通道離開某個計數時跳升、在它回來時又安定下來。因與果在同一條軌跡上。',
  cap_en: 'Hours 77 to 101 of the same run. The reported density steps up inside every stretch where the reference channel has left 32 counts.',
  cap_zh: '同一次運轉的第 77 至 101 小時。每一段參考通道離開 32 計數的區間，回報密度都會跳升。',
  note_en: 'Show this straight after backup 20. The pair is the complete argument: here is the artefact, and here is the mechanism that produces it.',
  note_zh: '請緊接在備用第 20 張之後展示。這一組就是完整的論證：這是假象，而這是產生它的機制。',
  src_page: 'measurement'
},
{
  v: 'backup', slide: 22, group: 'instrument', src: 'measurement/od600-silica-ladder-measurement.svg',
  title_en: 'The full silica ladder, both builds and the reference',
  title_zh: '完整矽球階梯，兩款自製版本與參考儀器',
  sees_en: 'Where each instrument stops being linear. The honest frame for any question about range.',
  sees_zh: '每一台儀器從哪裡開始不再線性。任何關於量程的問題，這是誠實的框架。',
  cap_en: 'The silica ladder read by both builds and by the benchtop reference. The Pro is about 5.3 times more sensitive than the Slim.',
  cap_zh: '兩款自製版本與桌上型參考儀器讀取同一條矽球階梯。Pro 的靈敏度約為 Slim 的 5.3 倍。',
  note_en: 'Over the 41-point ladder the Pro departs 11.5% from its own low-range line at the top, the Slim 2.9%, and the BioDrop flattens near 2.48. Working limit is about OD 2.5.',
  note_zh: '在 41 點的階梯上，Pro 在高端偏離自己的低量程直線 11.5%、Slim 偏離 2.9%，而 BioDrop 在接近 2.48 處趨平。工作上限約為 OD 2.5。',
  src_page: 'measurement'
},
{
  v: 'backup', slide: 23, group: 'instrument', src: 'measurement/photometer-sio2-run-measurement.webp',
  title_en: 'Both photometers in series on one loop',
  title_zh: '兩台光度計串聯在同一個迴路上',
  sees_en: 'Students at the bench with both instruments reading the same liquid at the same moment. It makes the comparison concrete rather than statistical.',
  sees_zh: '學生在實驗桌前，兩台儀器在同一時刻讀同一份液體。這讓比較變得具體，而不只是統計。',
  cap_en: '10 October: the beam-splitter and fiber-based photometers connected in series within the same recirculating loop.',
  cap_zh: '10 月 10 日：分光鏡式與光纖式光度計串聯在同一個循環迴路中。',
  src_page: 'measurement'
},
{
  v: 'backup', slide: 24, group: 'instrument', src: 'measurement/lpa-cross-section-measurement.webp',
  title_en: 'The light plate in cross-section',
  title_zh: '光照板的剖面',
  sees_en: 'The light path from each LED up to its own culture tube. Answers how twenty-four cultures are held at different intensities at once.',
  sees_zh: '從每顆 LED 到它自己那管培養液的光路。回答「二十四管培養液怎麼同時維持在不同強度」。',
  cap_en: 'Cross-section of the LPA, showing the light path from the LEDs up to the culture plate.',
  cap_zh: 'LPA 剖面圖，顯示從 LED 到培養盤的光路。',
  note_en: 'Every intensity on that page is in lux, which is weighted for human vision. It compares our LEDs with each other and cannot be compared with a published dose.',
  note_zh: '那一頁上的每個強度都是勒克斯，而勒克斯是依人眼視覺加權的。它只能讓我們的 LED 彼此比較，無法與文獻劑量比較。',
  src_page: 'measurement'
},
{
  v: 'backup', slide: 25, group: 'instrument', src: 'measurement/lpa-assembled-measurement.webp',
  title_en: 'The light plate, assembled and lit',
  title_zh: '光照板，組裝完成並點亮',
  sees_en: 'Red and green columns glowing at once in a 3D-printed block. It is the most photogenic object the team built.',
  sees_zh: '3D 列印的機體裡，紅色與綠色的管柱同時發亮。這是團隊做出來最上相的物件。',
  cap_en: 'The LPA assembled and running, with red and green columns lit at the same time.',
  cap_zh: 'LPA 組裝完成並運轉中，紅色與綠色管柱同時亮起。',
  src_page: 'measurement'
},
{
  v: 'backup', slide: 26, group: 'instrument', src: 'measurement/root-length-accd-heat-plates-measurement.webp',
  title_en: 'A ruler in every frame',
  title_zh: '每一張畫面裡都有一把尺',
  sees_en: 'Measurement discipline on a plant assay: the scale is in the photograph, so a root length is traceable to a known distance rather than to a guess.',
  sees_zh: '植物試驗裡的量測紀律：比例尺就在照片裡，所以一個根長可以追溯到已知距離，而不是估計。',
  cap_en: 'The plates these root lengths were traced from, with the ruler that sets the ImageJ scale in each frame.',
  cap_zh: '這些根長所描繪自的培養盤，每一張畫面裡都有設定 ImageJ 比例尺的那把尺。',
  src_page: 'measurement'
},
{
  v: 'backup', slide: 27, group: 'instrument', src: 'measurement/imagej-set-scale-measurement.webp',
  title_en: 'How a root length becomes a number',
  title_zh: '一個根長怎麼變成一個數字',
  sees_en: 'The actual calibration step, 150 mm of ruler set as the known distance. Use it if a judge asks whether the plant measurements are repeatable by someone else.',
  sees_zh: '真正的校正步驟：把尺上的 150 mm 設為已知距離。如果評審問植物量測別人能不能重現，就用這張。',
  cap_en: 'Setting the known distance, 150 mm on the ruler, for scaling in ImageJ.',
  cap_zh: '在 ImageJ 中設定已知距離：尺上的 150 mm。',
  src_page: 'measurement'
},
{
  v: 'backup', slide: 28, group: 'instrument', src: 'measurement/tmp-aug16-dp-measurement.webp',
  title_en: 'We subtracted the plumbing before judging the membrane',
  title_zh: '在評斷膜之前，我們先把管路扣掉',
  sees_en: 'Two traces separating as flow rises: with the module fitted, and with a plain tube in its place.',
  sees_zh: '兩條軌跡隨流量上升而分開：裝上模組，與以普通管路取代。',
  cap_en: 'With the module installed the drop is roughly 1.8 to 1.9 times the tubing-only value across dials 12 to 24.',
  cap_zh: '裝上模組後，在轉盤 12 至 24 之間，壓降約為僅有管路時的 1.8 至 1.9 倍。',
  note_en: 'The plumbing is 46% of the total drop at 120 mL/min and 55% at 450. Without the subtraction the membrane\'s own resistance would have been overstated by about a factor of two. Call the quantity lumen pressure drop, not TMP.',
  note_zh: '在 120 mL/min 時管路佔總壓降的 46%，450 mL/min 時佔 55%。不做這個扣除，膜本身的阻力會被高估大約兩倍。請稱這個量為管腔壓降，不要稱為 TMP。',
  src_page: 'measurement'
},
{
  v: 'backup', slide: 29, group: 'instrument', src: 'measurement/hfm-lumen-shell-measurement.webp',
  title_en: 'Which side is which',
  title_zh: '哪一側是哪一側',
  sees_en: 'The simplest explainer in the library. Thirty seconds of confusion about lumen and shell disappears the moment this goes up.',
  sees_zh: '整個圖庫裡最簡單的說明圖。只要這張一上，關於管內側與殼側那三十秒的混亂就消失了。',
  cap_en: 'The culture runs inside the fibers and must stay there; the permeate collects around them and is what leaves with the harvest.',
  cap_zh: '培養液在纖維內部流動、而且必須留在裡面；透過液聚集在纖維外側，那才是隨收穫離開的東西。',
  src_page: 'measurement'
},

/* ─────────────────── backup · 30-39 the rig ─────────────────── */
{
  v: 'backup', slide: 30, group: 'rig', src: 'biomanufacturing/fig-reactor-schematic-biomanufacturing.webp',
  title_en: 'The membrane, as a schematic',
  title_zh: '這層膜，以示意圖呈現',
  sees_en: 'Cells on one side, product on the other, through a 0.2 µm wall. The whole containment argument in one diagram.',
  sees_zh: '細胞在一側、產物在另一側，中間隔著 0.2 µm 的壁。整個圍阻論證濃縮成一張圖。',
  cap_en: 'Cells stay in the lumen and the permeate side moves protectant out, through an mPES hollow-fiber module at a 0.2 µm pore rating.',
  cap_zh: '細胞留在管腔內，透過液側把保護蛋白送出去，中間是孔徑 0.2 µm 的 mPES 中空纖維模組。',
  src_page: 'biomanufacturing'
},
{
  v: 'backup', slide: 31, group: 'rig', src: 'biomanufacturing/fig-perfusion-bioreactor-biomanufacturing.webp',
  title_en: 'The whole loop, labelled',
  title_zh: '完整迴路，附標示',
  sees_en: 'Every component and where it sits. Use it when a hardware question needs orientation before it can be answered.',
  sees_zh: '每個元件以及它的位置。當一個硬體問題需要先定位才能回答時，就用這張。',
  cap_en: 'The culture loop contains engineered B. subtilis, a peristaltic pump, the inline photometer and the pressure block.',
  cap_zh: '培養迴路包含經改造的 B. subtilis、蠕動泵、在線光度計與壓力感測組。',
  src_page: 'biomanufacturing'
},
{
  v: 'backup', slide: 32, group: 'rig', src: 'engineering/bio-proto1-growth-engineering.webp',
  title_en: 'The reason the next cycle happened',
  title_zh: '下一個循環之所以發生的原因',
  sees_en: 'A flask racing away from the reactor. This is a failure with a number on it, and it is the cleanest engineering-cycle slide the team has.',
  sees_zh: '燒瓶把反應器遠遠甩開。這是一個帶著數字的失敗，也是團隊最乾淨的一張工程循環投影片。',
  cap_en: 'Over twenty-seven hours at room temperature the flask passes OD600 2.4 and the reactor never leaves 0.3.',
  cap_zh: '在室溫下二十七小時，燒瓶越過 OD600 2.4，而反應器始終沒有離開 0.3。',
  note_en: 'Pair with backup 33 and 34: this is what was wrong, this is what we drew, and this is the curve after. Three slides, one closed loop.',
  note_zh: '與備用第 33、34 張搭配：這是出了什麼問題、這是我們畫了什麼、這是之後的曲線。三張投影片，一個閉合的循環。',
  src_page: 'engineering'
},
{
  v: 'backup', slide: 33, group: 'rig', src: 'engineering/bio-proto1-schematic-engineering.webp',
  title_en: 'Prototype I, as the team drew it',
  title_zh: '原型一，團隊當時畫的樣子',
  sees_en: 'Four parts, no stirring, no aeration, no pH control. An honest picture of where a build starts.',
  sees_zh: '四個零件，沒有攪拌、沒有通氣、沒有 pH 控制。一張誠實呈現「一個製作是從哪裡開始」的圖。',
  cap_en: 'Prototype I as drawn by the team on 6 June 2026: four parts, no stirring, no aeration, no pH control.',
  cap_zh: '團隊在 2026 年 6 月 6 日畫的原型一：四個零件，沒有攪拌、沒有通氣、沒有 pH 控制。',
  src_page: 'engineering'
},
{
  v: 'backup', slide: 34, group: 'rig', src: 'engineering/bio-proto2-growth-engineering.webp',
  title_en: 'The first complete growth curve out of the reactor',
  title_zh: '反應器跑出的第一條完整生長曲線',
  sees_en: 'The reactor finally tracking the flask. The payoff of backup 32, and the end of that cycle.',
  sees_zh: '反應器終於跟上燒瓶。這是備用第 32 張的結果，也是那個循環的收尾。',
  cap_en: 'Bioreactor against flask at 37 °C, the first complete growth curve from the system.',
  cap_zh: '37 °C 下生物反應器對照燒瓶，這是系統跑出的第一條完整生長曲線。',
  note_en: 'Three things changed between prototype I and II at once, so the improvement cannot be attributed to any one of them. Say that if asked.',
  note_zh: '原型一到原型二同時改了三件事，所以改善無法歸因於其中任何一項。被問到就要講出來。',
  src_page: 'engineering'
},
{
  v: 'backup', slide: 35, group: 'rig', src: 'engineering/rig-int3-peroxide-engineering.webp',
  title_en: 'Starch-iodide papers from the clean-in-place rinses',
  title_zh: '原位清洗沖洗過程的澱粉碘化鉀試紙',
  sees_en: 'A row of test papers getting paler. Cleaning validated by a readout rather than by assertion, without an autoclave in the building.',
  sees_zh: '一排顏色越來越淡的試紙。清潔是用讀數驗證的，不是用宣稱，而且整棟樓裡沒有滅菌釜。',
  cap_en: 'The peroxide falls with each 1 L rinse, checked on starch-iodide paper.',
  cap_zh: '每沖洗 1 L，過氧化氫濃度就下降一次，以澱粉碘化鉀試紙檢查。',
  note_en: 'This procedure is also where a valve broke: the 35% peroxide reaches the valves before it is diluted in the reservoir. Both halves belong in the same answer.',
  note_zh: '這個程序也正是閥破掉的地方：35% 過氧化氫在被反應槽稀釋之前就先到達閥體。兩半都該在同一個回答裡。',
  src_page: 'engineering'
},
{
  v: 'backup', slide: 36, group: 'rig', src: 'engineering/rig-int4-sampling-pressure-engineering.webp',
  title_en: 'How the product actually leaves the reactor',
  title_zh: '產物究竟是怎麼離開反應器的',
  sees_en: 'Closing one valve lifts the whole pressure oscillation above zero for sixty seconds. That is the harvest mechanism, measured.',
  sees_zh: '關閉一個閥，整段壓力震盪在六十秒內被抬到零以上。那就是收取機制，而且被量到了。',
  cap_en: 'Pressure response during a shell-side sampling event, yielding 20 to 30 mL of permeate without interrupting the culture.',
  cap_zh: '殼側取樣期間的壓力響應，在不中斷培養的情況下取得 20 到 30 mL 透過液。',
  note_en: 'Describe the quantity as lumen pressure drop, not transmembrane pressure. See the Honest List.',
  note_zh: '請把這個量描述為管腔壓降，不是跨膜壓差。見誠實清單。',
  src_page: 'engineering'
},
{
  v: 'backup', slide: 37, group: 'rig', src: 'results/br-leak-event-v2-results.webp',
  title_en: 'The sensors caught a leak and told it apart from biology',
  title_zh: '感測器抓到洩漏，並與生物訊號區分開',
  sees_en: 'Several channels at once: pressure steps, the membrane does not move, and the density reading climbs for a mechanical reason.',
  sees_zh: '多個通道同時呈現：壓力跳階、膜沒有變化，而密度讀值是因為機械原因在上升。',
  cap_en: 'Lumen pressure rose while TMP was unchanged, and OD600 climbed spuriously as cells settled in the flow cuvette.',
  cap_zh: '管腔壓力上升而 TMP 沒變，同時因為細胞沉積在流動比色槽中，OD600 出現假性上升。',
  note_en: 'The best answer to "how do you know a reading is real?" Feed pressure steps 0.19 to 0.37 bar at about 37 h.',
  note_zh: '這是「你怎麼知道一個讀值是真的？」最好的回答。進料壓力在約 37 小時從 0.19 跳到 0.37 bar。',
  src_page: 'results'
},
{
  v: 'backup', slide: 38, group: 'rig', src: 'engineering/rig-260823-v6-whiteboard-engineering.webp',
  title_en: 'The afternoon the rig became a product',
  title_zh: '裝置變成產品的那個下午',
  sees_en: 'A whiteboard with a power tree, an enclosure, a screen and a door on it. Design thinking caught in the act, which is rarer on a wiki than a finished render.',
  sees_zh: '白板上有電源樹、外殼、螢幕和一扇門。當場被抓到的設計思考，這在 wiki 上比完成的算圖更罕見。',
  cap_en: '23 August 2026. Prototype VII worked out as a power tree, with an enclosure, a screen and a door.',
  cap_zh: '2026 年 8 月 23 日。原型七被推演成一棵電源樹，加上外殼、螢幕與一扇門。',
  src_page: 'engineering'
},
{
  v: 'backup', slide: 39, group: 'rig', src: 'biomanufacturing/b2-case-biomanufacturing.webp',
  title_en: 'The unit as a sealed case',
  title_zh: '這個單元，一個密封的機箱',
  sees_en: 'The culture, the pump, the membrane and the light inside one box. What a farmer would actually be handed.',
  sees_zh: '培養液、泵、膜與光源都在同一個箱子裡。這才是真正會交到農友手上的東西。',
  cap_en: 'The unit as built: a sealed case holding the culture, the pump, the membrane and the light.',
  cap_zh: '實際做出來的單元：一個密封機箱，裝著培養液、泵、膜與光源。',
  note_en: 'The 400 by 240 by 620 mm commercial cabinet in the brochure has not been built, and its output per day, power draw and weight are listed as not yet known.',
  note_zh: '手冊裡那台 400 × 240 × 620 mm 的商品櫃體還沒做出來，它的每日產量、耗電與重量都標示為尚未確定。',
  src_page: 'biomanufacturing'
},

/* ─────────────────── backup · 40-45 plants ─────────────────── */
{
  v: 'backup', slide: 40, group: 'plant', src: 'measurement/hydro-bopep4-salinity-chl-measurement.webp',
  title_en: 'Chlorophyll per plant, on the plants in the photograph',
  title_zh: '每株葉綠素，量的就是照片裡那些植株',
  sees_en: 'The quantitation of slide 3\'s hero image, measured on exactly those plants. Photograph plus its own numbers is the strongest pairing available.',
  sees_zh: '第 3 張主圖的定量結果，而且量的正是那些植株。照片加上它自己的數字，是能拿到的最強組合。',
  cap_en: 'Chlorophyll per plant for the same groups, measured on the plants in the photograph above.',
  cap_zh: '同一批組別的每株葉綠素，量的就是上方照片裡的植株。',
  note_en: 'Both readouts are single plates with no technical replication, so the gap between 1/40 BoPep4 and the rest of the salted block is what the run supports, and the ordering among 1/60, 1/80 and 1/100 is not.',
  note_zh: '兩個指標都是單一盤、沒有技術重複，所以這次試驗支持的是「1/40 BoPep4 與其他鹽逆境組之間的落差」，不支持 1/60、1/80、1/100 之間的排序。',
  src_page: 'measurement'
},
{
  v: 'backup', slide: 41, group: 'plant', src: 'measurement/hydro-bopep4-salinity-fw-measurement.webp',
  title_en: 'Fresh weight by group',
  title_zh: '各組鮮重',
  sees_en: 'One group standing near the unsalted range while the rest of the salted block sits well below it.',
  sees_zh: '一組站在接近無鹽的範圍，而其餘鹽逆境組都遠低於它。',
  cap_en: 'Within the 100 mM block, 1/40 BoPep4 is the only group that stays near the unsalted range.',
  cap_zh: '在 100 mM 區塊中，1/40 BoPep4 是唯一停留在接近無鹽範圍的組別。',
  src_page: 'measurement'
},
{
  v: 'backup', slide: 42, group: 'plant', src: 'plant/s21-accdheat-t2-plant.webp',
  title_en: 'The same timing result, trial 2',
  title_zh: '同一個時機結果，第二試',
  sees_en: 'The same ordering a second time. One trial is an anecdote; two in the same order is a direction.',
  sees_zh: '同樣的排序再出現一次。一次試驗是軼事；兩次同序就是一個方向。',
  cap_en: 'Trial 2, unnormalised chlorophyll: pre 0.89, co 0.63, post 0.355 mg/L.',
  cap_zh: '第二試，未標準化葉綠素：前處理 0.89、同時 0.63、後處理 0.355 mg/L。',
  note_en: 'Show it immediately after slide 3 if a judge doubts the timing result. One pot per condition in both trials, so it is still a direction and not a dose.',
  note_zh: '如果評審懷疑這個時機結果，就緊接在第 3 張之後展示。兩次試驗都是每個條件一盆，所以它仍然是方向、不是劑量。',
  src_page: 'plant'
},
{
  v: 'backup', slide: 43, group: 'plant', src: 'plant/r20-bopep-sal-plates-plant.webp',
  title_en: 'Co-treatment is the one timing that harms',
  title_zh: '同時施用是唯一會造成傷害的時機',
  sees_en: 'The co-treatment column is the most yellowed of the three, at every salt level, including no salt at all.',
  sees_zh: '在每一個鹽濃度、包括完全無鹽的情況下，同時處理那一欄都是三者中最黃的。',
  cap_en: 'Arabidopsis phenotypes on the last day of the experiment, day 17, with BoPep4 applied at three timings.',
  cap_zh: '實驗最後一天（第 17 天）的阿拉伯芥表型，BoPep4 分三個時機施用。',
  note_en: 'Even without salt, the co-treated plates grew worse than the mock control, which is the clearest "timing can harm" picture on the wiki.',
  note_zh: '即使沒有鹽逆境，同時處理的培養盤也長得比空白對照差，這是 wiki 上最清楚的「時機可能有害」的圖。',
  src_page: 'plant'
},
{
  v: 'backup', slide: 44, group: 'plant', src: 'plant/r17-set5-plates-plant.webp',
  title_en: 'How the stress window was chosen',
  title_zh: '逆境區間是怎麼選出來的',
  sees_en: 'Tall seedlings, then stubs, then almost nothing. The salt ladder that set 100 mM as the working stress.',
  sees_zh: '先是高的幼苗、接著是殘株、然後幾乎什麼都不剩。這條鹽階梯把 100 mM 定為工作逆境。',
  cap_en: 'Increasing salinity reduced root growth and increased chlorosis, most severely under 250 mM NaCl.',
  cap_zh: '鹽度上升使根生長下降、黃化加劇，在 250 mM NaCl 下最嚴重。',
  note_en: 'Use it for "why 100 mM?". The answer is that it inhibits growth without being immediately lethal, and 250 mM was abandoned for being too severe.',
  note_zh: '用來回答「為什麼是 100 mM？」。答案是它會抑制生長但不會立即致死，而 250 mM 因為太嚴重而放棄。',
  src_page: 'plant'
},
{
  v: 'backup', slide: 45, group: 'plant', src: 'plant/s19-method-pots-plant.webp',
  title_en: 'Two soil protocols, compared before one was chosen',
  title_zh: '兩種土耕流程，在選定之前先比較過',
  sees_en: 'The same plants at day 0 and day 5 under two salting methods. A method decision made on evidence rather than on convenience.',
  sees_zh: '同一批植株在兩種加鹽方法下的第 0 天與第 5 天。這是一個根據證據、而不是根據方便所做的方法決定。',
  cap_en: 'Accumulation against top-down wash, day 0 and day 5 of salinity application.',
  cap_zh: '累積式對上淋洗式，加鹽後第 0 天與第 5 天。',
  src_page: 'plant'
},

/* ─────────────────── backup · 46-52 models and software ─────────────────── */
{
  v: 'backup', slide: 46, group: 'model', src: 'software/fig-r3-run434-software.svg',
  title_en: 'An alarm 26.7 hours before the channel failed',
  title_zh: '在通道失效前 26.7 小時發出警報',
  sees_en: 'Two stacked traces with the alarm marked. The fault detector fired while the density trace still looked clean.',
  sees_zh: '上下兩條軌跡並標出警報位置。偵測器發出警報時，密度軌跡看起來還是乾淨的。',
  cap_en: 'Optical density above and the photometer\'s reference channel below, over the 434-hour run, with the sensor alarm at 216.3 h marked.',
  cap_zh: '上為光密度、下為光度計參考通道，涵蓋 434 小時的運轉，並標出 216.3 小時的感測器警報。',
  note_en: 'Retrospective: the autoencoder was trained on the healthy first 120 hours of this same run. False-alarm rate 6.1% on unseen quiet windows. Do not call it a live alarm.',
  note_zh: '這是回溯分析：自編碼器是用這同一次運轉前 120 小時的健康資料訓練的。在未見過的平靜區間誤報率 6.1%。不要說它是即時警報。',
  src_page: 'software'
},
{
  v: 'backup', slide: 47, group: 'model', src: 'software/fig-runs-168-v2-software.svg',
  title_en: 'Every reactor run on one strip, including the ones that broke',
  title_zh: '所有反應器運轉在同一條帶狀圖上，包括壞掉的那幾次',
  sees_en: 'Seven panels, some of them failures, shown at the same scale as the successes. Few teams put their broken runs on the same axis.',
  sees_zh: '七個子圖，其中幾個是失敗，而且和成功的那幾次用同一個尺度呈現。很少有隊伍願意把壞掉的運轉放在同一條座標上。',
  cap_en: 'Runs 1 to 7, from hand-sampled flasks to 434 hours in line, with the unusable stretches greyed.',
  cap_zh: '第 1 至 7 次運轉，從手動取樣的燒瓶到 434 小時在線監測，不可用的區段以灰色標示。',
  src_page: 'software'
},
{
  v: 'backup', slide: 48, group: 'model', src: 'software/fig-r5-lpa-fit-software.svg',
  title_en: 'The prediction that was registered before the run existed',
  title_zh: '那個在運轉存在之前就登錄的預測',
  sees_en: 'A growth fit on a 150 µL plate well that went on to predict the rate in a one-litre perfusion loop thirteen days later.',
  sees_zh: '一條在 150 µL 盤孔中擬合的生長曲線，十三天後預測了一公升灌流迴路中的生長速率。',
  cap_en: 'Logistic growth fit of B. subtilis WB800 on the light-programmable array, 19 September 2026.',
  cap_zh: 'B. subtilis WB800 在光控陣列上的邏輯斯生長擬合，2026 年 9 月 19 日。',
  note_en: 'Registered 1 October at 0.2986 per hour with a 90% interval of 0.2705 to 0.3300; observed 0.286 ± 0.010. Only the rate was scored; the two secondary endpoints stay unscored for the reason given when they were registered.',
  note_zh: '10 月 1 日登錄為每小時 0.2986，90% 區間 0.2705 至 0.3300；實測 0.286 ± 0.010。只有速率被評分；兩個次要指標依登錄時所述的理由維持未評分。',
  src_page: 'software'
},
{
  v: 'backup', slide: 49, group: 'model', src: 'software/twin-screen-20261018-software.webp',
  title_en: 'The dashboard, during the October run',
  title_zh: '十月那次運轉期間的儀表板',
  sees_en: 'Optical density, pH, four pressures and the membrane warnings, as they were actually recorded. Proof the control software is real and not a mock-up.',
  sees_zh: '光密度、pH、四路壓力與薄膜警示，全是當時真的記錄下來的。這證明控制軟體是真的，不是模擬畫面。',
  cap_en: 'The operator interface during the run: optical density and pH as recorded, the four pressures, and the pump and valve panels.',
  cap_zh: '運轉期間的操作介面：當時記錄的光密度與 pH、四路壓力，以及泵與閥的面板。',
  note_en: 'This is what runs the rig today. The predictive layer is separate: the models run on recorded data after each run and a person makes every decision.',
  note_zh: '這是目前真正在跑這台裝置的東西。預測層是分開的：模型在每次運轉之後跑在已錄製的資料上，每個決定都由人做。',
  src_page: 'software'
},
{
  v: 'backup', slide: 50, group: 'model', src: 'model/stress-blind-2026-model.webp',
  title_en: 'A crop forecast frozen before the harvest came in',
  title_zh: '在收成數字進來之前就凍結的作物預報',
  sees_en: 'A forecast with a freeze date on it. The same pre-registration discipline as the instrument, applied to a yield model.',
  sees_zh: '一份帶著凍結日期的預報。和儀器那套一樣的事前登錄紀律，套用在產量模型上。',
  cap_en: 'The 2026 first-crop forecast, frozen on 26 September 2026. Four of sixteen counties have published.',
  cap_zh: '2026 年第一期作預報，於 2026 年 9 月 26 日凍結。十六個縣市中已有四個公布。',
  note_en: 'At the freeze it stood at 7.9% county error against the plain trend\'s 8.8%, on four counties. Four of sixteen is not a result yet, and the page says so.',
  note_zh: '凍結時在四個縣市上的縣級誤差為 7.9%，而單純趨勢線為 8.8%。十六個裡只有四個還不算結果，頁面本身也這麼寫。',
  src_page: 'model'
},
{
  v: 'backup', slide: 51, group: 'model', src: 'model/stress-variable-leaderboard-model.webp',
  title_en: 'Which weather stresses earned their place',
  title_zh: '哪些氣候逆境掙到了自己的位置',
  sees_en: 'Candidate variables ranked by whether they reduce error, with the kept ones marked. Variable selection shown rather than asserted.',
  sees_zh: '候選變數依「是否降低誤差」排序，並標出保留下來的。這是把變數篩選展示出來，而不是用宣稱的。',
  cap_en: 'Change in county prediction error when each candidate stress is added; left means it helps, and the marked ones are kept in the final model.',
  cap_zh: '加入每個候選逆境後縣級預測誤差的變化；偏左表示有幫助，標記者保留在最終模型中。',
  note_en: 'All 32,767 combinations of fifteen candidate stresses were fitted and scored on years the model had not seen.',
  note_zh: '十五個候選逆境的全部 32,767 種組合都被擬合，並在模型未見過的年份上評分。',
  src_page: 'model'
},
{
  v: 'backup', slide: 52, group: 'model', src: 'model/stress-validation-island-model.webp',
  title_en: 'The stress index against a plain trend line',
  title_zh: '逆境指數對照單純趨勢線',
  sees_en: 'Predictions made from earlier years only, against what actually happened. A held-out test rather than a fit.',
  sees_zh: '只用更早年份做出的預測，對照實際發生的結果。這是保留樣本的檢驗，不是擬合。',
  cap_en: 'Island first-crop yield against predictions from earlier years only. County error over 2016 to 2025 is 419 kg/ha for the trend and 365 for the model.',
  cap_zh: '全島第一期作產量對照僅用更早年份所做的預測。2016 至 2025 年的縣級誤差，趨勢線為 419 kg/ha、模型為 365。',
  note_en: 'The 32% figure quoted elsewhere is the second crop, not this chart. 365 against 419 is about 13%. Do not let the two be read as the same number.',
  note_zh: '其他地方引用的 32% 是第二期作，不是這張圖。365 對 419 大約是 13%。不要讓這兩個數字被讀成同一個。',
  src_page: 'model'
},

/* ─────────────── backup · 53-58 practices, business and law ─────────────── */
{
  v: 'backup', slide: 53, group: 'practices', src: 'human-practices/exp-0904-chang-group-human-practices.webp',
  title_en: 'We brought a failure back to the expert who could diagnose it',
  title_zh: '我們把一個失敗帶回給能診斷它的專家',
  sees_en: 'Students, an expert and the actual hardware in one frame, on the second of two visits.',
  sees_zh: '學生、專家與真實硬體在同一張畫面裡，而且是兩次拜訪中的第二次。',
  cap_en: 'Prof. Chang Jo-Shu with the team and the bioreactor, 4 September 2026. The first visit set the pressure-tracking protocol; the second followed a membrane leak.',
  cap_zh: '張嘉修教授與團隊及生物反應器，2026 年 9 月 4 日。第一次拜訪定下壓力追蹤流程；第二次是在膜洩漏之後。',
  note_en: 'The best Human Practices pair for a hardware question: same expert, two visits, a documented failure in between.',
  note_zh: '面對硬體問題時最好的人文實踐案例：同一位專家、兩次拜訪，中間夾著一個被記錄下來的失敗。',
  src_page: 'human-practices'
},
{
  v: 'backup', slide: 54, group: 'practices', src: 'human-practices/evomap-wet-v3-human-practices.webp',
  title_en: 'The project evolution map, February to October',
  title_zh: '專題演進地圖，二月到十月',
  sees_en: 'Every stakeholder pinned to the bend in the river where they changed something. The only visual that carries chronology.',
  sees_zh: '每位利害關係人都被標在他們改變了什麼的那個河灣上。這是唯一帶有時間順序的視覺化。',
  cap_en: 'Thirty-one stakeholders across February to October, each placed where their input changed the design.',
  cap_zh: '二月到十月間的三十一位利害關係人，每位都放在他們的意見改變設計的位置上。',
  note_en: 'Say 31 stakeholders and "February to October". Do not say how many domains: the wiki gives four in one place and five in two others.',
  note_zh: '請說 31 位利害關係人、「二月到十月」。不要說幾個領域：wiki 一處寫四個、另兩處寫五個。',
  src_page: 'human-practices'
},
{
  v: 'backup', slide: 55, group: 'practices', src: 'human-practices/farm-tamsui-okra-human-practices.webp',
  title_en: 'The farmer who challenged the premise, in her own field',
  title_zh: '那位質疑前提的農友，在她自己的田裡',
  sees_en: 'Students working beside the person whose objection changed the control logic. Not a handshake photograph.',
  sees_zh: '學生和那位「質疑改變了控制邏輯」的人一起工作。這不是一張握手照。',
  cap_en: 'Ms. Chen Hui-Wen and the team at Tamsui Happy Farm, 21 July 2026.',
  cap_zh: '陳惠雯女士與團隊在淡水幸福農莊，2026 年 7 月 21 日。',
  note_en: 'Her sentence is the one to quote: giving too much can take away a living thing\'s ability to thrive on its own. It is why the reactor produces only when the sensors read stress.',
  note_zh: '要引用的是她這句話：給得太多，反而可能奪走一個生命自己活下去的能力。這就是反應器只在感測器讀到逆境時才生產的原因。',
  src_page: 'human-practices'
},
{
  v: 'backup', slide: 56, group: 'practices', src: 'laws-and-regulations/taiwan-fertilizer-pesticide-forks-1017-laws-and-regulations.webp',
  title_en: 'Which Taiwanese authority the product answers to',
  title_zh: '這個產品該歸台灣哪個主管機關',
  sees_en: 'A decision tree splitting fertilizer from pesticide, drawn with an industry partner. Statute-level and visibly sourced.',
  sees_zh: '一張把肥料與農藥分開的決策樹，是和業界夥伴一起畫的。到法條層級，而且來源清楚可見。',
  cap_en: 'CH Biotech\'s breakdown of Taiwan\'s pesticide and fertilizer forks.',
  cap_zh: '正瀚生技整理的台灣農藥與肥料分流架構。',
  note_en: 'The sentence that goes with it: a potential regulatory pathway is not an approval. And certified organic farming is likely closed to us whatever the containment.',
  note_zh: '搭配這張要講的那句話：一條可能的法規路徑不等於核准。而且無論圍阻做得多好，有機認證農業對我們很可能是關閉的。',
  src_page: 'laws-and-regulations'
},
{
  v: 'backup', slide: 57, group: 'practices', src: 'entrepreneurship/break-even-hectares-entrepreneurship-v2.webp',
  title_en: 'Break-even at about 226 hectares',
  title_zh: '約在 226 公頃損益兩平',
  sees_en: 'Revenue crossing total cost. The one financial chart to show, and only if asked.',
  sees_zh: '營收越過總成本。唯一該展示的財務圖，而且只有被問到才展示。',
  cap_en: 'Revenue overtakes total cost at about 226 hectares of paying farms across Years 0 to 4.',
  cap_zh: '在第 0 到第 4 年間，當付費農地達約 226 公頃時，營收超過總成本。',
  note_en: 'If you show this, name the disagreement first: the Math Model reaches a dose 185 times larger by another route, and the dose this rests on has never been tested on a crop.',
  note_zh: '若要展示這張，請先講出那個分歧：數學模型用另一條路徑得到的劑量是它的 185 倍，而這張圖所依據的劑量從未在作物上測試過。',
  src_page: 'entrepreneurship'
},
{
  v: 'backup', slide: 58, group: 'practices', src: 'contribution/waste-media-od600-contribution.webp',
  title_en: 'Growing the strain on agricultural waste',
  title_zh: '用農業廢棄物養這株菌',
  sees_en: 'Cultures grown on hay, okara and sugarcane bagasse. A sustainability answer with an optical density behind it rather than an intention.',
  sees_zh: '用稻草、豆渣與甘蔗渣養出來的培養液。一個背後有光密度、而不只是意向的永續回答。',
  cap_en: 'B. subtilis WB800 after 18 h at 37 °C in 5 mL of each medium. Mixtures are hay, okara and sugarcane by volume, two cultures per medium.',
  cap_zh: 'B. subtilis WB800 在各 5 mL 培養基中、37 °C 培養 18 小時後。混合比例以體積計為稻草、豆渣與甘蔗渣，每種培養基兩管。',
  note_en: 'The idea came from CH Biotech at the September forum: agricultural waste such as feathers can be used to produce signal peptides. A stakeholder suggestion that became a bench result.',
  note_zh: '這個想法來自九月論壇上的正瀚生技：像羽毛這類農業廢棄物可以用來生產訊號胜肽。一個利害關係人的建議變成了實驗結果。',
  src_page: 'contribution'
},

/* ─────────────────── backup · 59, kept apart on purpose ─────────────────── */
{
  v: 'backup', slide: 59, group: 'protein', src: 'results/og-dnph-long-results.webp',
  title_en: 'Green is 14 times red at 13 hours, and the order inverts by 16',
  title_zh: '13 小時綠光是紅光的 14 倍，到 16 小時順序反轉',
  sees_en: 'The cleanest light result and its own refutation on one chart. Show both halves or neither.',
  sees_zh: '最乾淨的光反應結果，和它自己的反證，在同一張圖上。兩半一起展示，或兩半都不展示。',
  cap_en: 'The highest activity was observed at 13 h under green light. However, it decreased dramatically over the following 3 h.',
  cap_zh: '最高活性出現在綠光 13 小時。然而在接下來的 3 小時內急劇下降。',
  note_en: 'Numbered 59 rather than inside the protein block so it is never reached by paging through. 13 h green 0.1249 mM against red 0.0089; 16 h red 0.0923 against green 0.0130. Single plate, technical-replicate error bars, no test. Our own verdict: the switch has not been demonstrated to work.',
  note_zh: '刻意編在 59、而不是放進蛋白那一區，這樣翻頁時不會不小心翻到。13 小時綠光 0.1249 mM 對紅光 0.0089；16 小時紅光 0.0923 對綠光 0.0130。單一盤、誤差棒為技術重複、無統計檢定。我們自己的結論：這個開關尚未被證明可運作。',
  src_page: 'results'
},

/* ───────────────────────────── lost on time ───────────────────────────── */
{
  v: 'maybe', group: 'rig', src: 'engineering/rig-260904-incubator-running-engineering.webp',
  title_en: 'The rig inside the incubator, dashboard live',
  title_zh: '培養箱內的裝置，儀表板即時顯示',
  sees_en: 'The closest thing to proof of operation in the corpus: a screen reading an optical density while the rig runs beside it.',
  sees_zh: '整份資料裡最接近「運轉證據」的一張：裝置在運轉，旁邊的螢幕正讀出一個光密度值。',
  cap_en: 'The rig seven minutes into the run, everything inside the 37 °C incubator. The screen reads OD600 0.1738 AU at 06:58 elapsed.',
  cap_zh: '運轉開始七分鐘的裝置，全部在 37 °C 培養箱內。畫面顯示經過 06:58、OD600 0.1738 AU。',
  note_en: 'Lost slide 1 on shape, not content: the file is portrait, 1200 by 1594. A cover crop in a 16:9 frame cuts off the dashboard, the only part that proves it ran, and contain leaves white bands down both sides. Use it full-bleed on a portrait backup slide, or print it.',
  note_zh: '輸掉第 1 張是輸在形狀、不是內容：這個檔案是直式的 1200 × 1594。在 16:9 的框裡用 cover 裁切會切掉儀表板，而那是唯一能證明它在運轉的部分；用 contain 則兩側會留下白邊。請把它滿版放在直式的備用投影片上，或是印出來。',
  src_page: 'engineering'
},
{
  v: 'maybe', group: 'rig', src: 'hardware/bench-photo/bench-bench.webp',
  title_en: 'All four instruments on one bench at dusk',
  title_zh: '黃昏時四台儀器在同一張實驗桌上',
  sees_en: 'The whole hardware output of the year in one photograph. A beautiful alternative to slide 1 if you would rather open on breadth than on proof.',
  sees_zh: '一張照片呈現整年的硬體產出。如果你們寧願用「廣度」而不是「證據」開場，這是第 1 張的漂亮替代。',
  cap_en: 'Bioreactor, light plate apparatus, in-line photometer and hydroponics plate, on one bench.',
  cap_zh: '生物反應器、光照板、在線光度計與水耕浮板，在同一張實驗桌上。',
  note_en: 'Lost to the running bench because it shows objects rather than evidence of operation. It is 2880 by 1200, so it will also letterbox heavily in a 16:9 frame.',
  note_zh: '輸給運轉中的實驗桌，因為它呈現的是物件、不是運轉的證據。它是 2880 × 1200，在 16:9 的框裡也會留下很明顯的上下留白。',
  src_page: 'hardware'
},
{
  v: 'maybe', group: 'rig', src: 'results/fig-system-flow-results.webp',
  title_en: 'The ReLEAF chain, left to right',
  title_zh: 'ReLEAF 的流程鏈，由左至右',
  sees_en: 'Seven steps from a stressed crop to a protected one. Makes the concept legible in five seconds.',
  sees_zh: '從受逆境的作物到被保護的作物，共七步。五秒就能讓人看懂整個概念。',
  cap_en: 'The ReLEAF chain, from the stresses a crop meets to a protected plant.',
  cap_zh: 'ReLEAF 的流程鏈，從作物遇到的逆境到被保護的植株。',
  note_en: 'Cut from slide 1 on purpose: the judges have seen this diagram in the video and on the wiki, and the brief says not to repeat them. Hold it for a judge who asks how the stages connect.',
  note_zh: '刻意從第 1 張砍掉：評審已經在影片和 wiki 上看過這張圖，而說明要求不要重複。留給問「各階段怎麼接起來」的評審。',
  src_page: 'results'
},
{
  v: 'maybe', group: 'rig', src: 'results/br-cycle1-growth-v2-results.webp',
  title_en: 'The 116-hour first integrated cycle',
  title_zh: '第一次整合運轉的 116 小時',
  sees_en: 'The longest single record in the project, with an honest grey band where a computer update lost ten hours.',
  sees_zh: '整個專題最長的單次紀錄，中間有一段誠實標示的灰帶：電腦更新讓十小時的資料消失。',
  cap_en: 'Growth curve from the inline photometer in the first integrated cycle. The gray area marks the interval in which the software recorded no reading.',
  cap_zh: '第一次整合運轉中在線光度計的生長曲線。灰色區域標示軟體沒有記錄到讀值的區間。',
  note_en: 'Lost to the October run, which is newer, has the automated dosing in it, and does not need the grey band explained. The second rise here was loss of antibiotic selection, not biology.',
  note_zh: '輸給十月那次運轉：那次更新、含有自動加鹼，而且不需要解釋灰帶。這張圖裡的第二次上升是抗生素選擇壓喪失，不是生物現象。',
  src_page: 'results'
},
{
  v: 'maybe', group: 'model', src: 'software/fig-r6-leafair-software.svg',
  title_en: 'The leaf sensor reads warm, and by a different amount at every site',
  title_zh: '葉片感測器讀偏高，而且每個場地偏的量都不同',
  sees_en: 'Nine bench runs where two sensors in the same air disagree. An honest slide about the part of the system that is least ready.',
  sees_zh: '九次桌面測試中，兩個感測器在同一空氣裡讀出不同值。這是關於系統中最不成熟那部分的誠實投影片。',
  cap_en: 'Leaf sensor reading minus air temperature at three sites on 10 October 2026, with both sensors in the same air.',
  cap_zh: '2026 年 10 月 10 日三個場地的葉片感測器讀值減去氣溫，兩個感測器置於同一空氣中。',
  note_en: 'A strong honesty beat, but slide 6 already carries the open joints and this would need thirty seconds to explain. Hold it for a question about field sensing. The wetness channel read 0.0% throughout: it has never been wetted.',
  note_zh: '這是很有力的誠實環節，但第 6 張已經承載了開放接點，而這張需要三十秒解釋。留給關於田間感測的問題。濕度通道全程讀 0.0%：它從來沒有被弄濕過。',
  src_page: 'software'
},
{
  v: 'maybe', group: 'protein', src: 'protein-design/alanine-scan-bopep4-protein-design.webp',
  title_en: 'The alanine scan that moved the His-tag',
  title_zh: '那次丙胺酸掃描，讓 His 標籤搬了家',
  sees_en: 'A design decision caught before synthesis: a C-terminal tag would have capped the peptide\'s strongest contact with its receptor.',
  sees_zh: '一個在合成前被攔下來的設計決定：C 端標籤會蓋掉這個胜肽與受體之間最強的接觸點。',
  cap_en: 'Alanine scan of BoPep4 against PEPR1, showing the hotspot positions and the tolerant ones.',
  cap_zh: 'BoPep4 對 PEPR1 的丙胺酸掃描，顯示熱點位置與可容忍位置。',
  note_en: 'A lovely story, but no designed variant has had a functional assay run on it, so it stays a design result. Only the ladder\'s negative control reached the Registry.',
  note_zh: '故事很好，但沒有任何設計變體做過功能性分析，所以它仍然只是設計結果。只有這個序列梯度的陰性對照上了 Registry。',
  src_page: 'protein-design'
},
{
  v: 'maybe', group: 'practices', src: 'entrepreneurship/farmer-app-v2-entrepreneurship.webp',
  title_en: 'The Field Console app',
  title_zh: 'Field Console 應用程式',
  sees_en: 'What the farmer actually touches. Useful if a judge asks who operates the system and how much they need to know.',
  sees_zh: '農友真正會碰到的介面。如果評審問誰來操作、需要懂多少，這張有用。',
  cap_en: 'The Field Console mobile app, through which the farmer sees the stress index and approves a run.',
  cap_zh: 'Field Console 行動應用程式，農友透過它看到逆境指數並核准一次運轉。',
  note_en: 'Lost on time, and be careful: the forecast has never driven a light, so the approval step in this app is designed rather than demonstrated.',
  note_zh: '因時間落選，而且要小心：預報從未真正驅動過光源，所以這個 app 裡的核准步驟是設計出來的，不是已被驗證的。',
  src_page: 'entrepreneurship'
},
{
  v: 'maybe', group: 'practices', src: 'human-practices/kap-booth-2-v2-human-practices.webp',
  title_en: 'What 62 booth visitors understood afterwards',
  title_zh: '62 位參觀者在之後理解了什麼',
  sees_en: 'Survey bars with a real denominator on them. The strongest quantified engagement result on the wiki.',
  sees_zh: '帶著真實分母的問卷長條圖。這是 wiki 上最強的量化參與成果。',
  cap_en: 'Level of understanding of various booth topics, total responses 62.',
  cap_zh: '對攤位各主題的理解程度，總回應數 62。',
  note_en: 'Use the booth charts, which carry n = 62, and not the forum speaker chart, which shows three bars at 100% from what reads as a single respondent.',
  note_zh: '請用攤位的圖（n = 62），不要用論壇講者那張：那張的三根長條都是 100%，而看起來只有一位受訪者。',
  src_page: 'human-practices'
},
{
  v: 'maybe', group: 'rig', src: 'contribution/hydroponics-parts-exploded-contribution.webp',
  title_en: 'The hydroponics plate, exploded',
  title_zh: '水耕浮板，分解圖',
  sees_en: 'Sixteen pieces from three print files, no adhesives and no fasteners. A small, complete piece of open hardware.',
  sees_zh: '三個列印檔、十六個零件，不用黏著劑也不用螺絲。一件小而完整的開源硬體。',
  cap_en: 'The four printed parts as they go together: one slab, thirteen seed holders, two handles.',
  cap_zh: '四種列印零件的組合方式：一片板、十三個種子座、兩個把手。',
  note_en: 'Charming and cheap at about US$1.80 of filament, but the freeboard has never been measured on a real part, so the load line is not yet checked.',
  note_zh: '很討喜、也便宜，大約 1.80 美元的線材，但從沒在真實成品上量過乾舷，所以載重線還沒驗證。',
  src_page: 'contribution'
},

/* ───────────────────────────── do not use ───────────────────────────── */
{
  v: 'never', group: 'plant', src: 'plant/r20-set6-readouts-plant.webp',
  title_en: 'The trehalose set: 8.7-fold chlorophyll, four asterisks',
  title_zh: '海藻糖那一組：葉綠素 8.7 倍、四顆星號',
  sees_en: 'The biggest effect size and the smallest p value on the whole wiki. It is also the figure most likely to end the session badly.',
  sees_zh: '整個 wiki 上最大的效應量和最小的 p 值。它同時也是最可能讓這場會談收尾收壞的那張圖。',
  cap_en: '5 mM trehalose significantly enhanced plant salt tolerance under 100 mM NaCl-induced stress.',
  cap_zh: '5 mM 海藻糖在 100 mM NaCl 逆境下顯著提升植株耐鹽性。',
  note_en: 'Trehalose is a commercial sugar, not a protectant the system secretes, and the Math Model excluded it for that reason. The 8.7-fold is read off the fresh-weight-normalised panel, which the same page says inflates relative values for severely damaged plants. A judge asking "which of your proteins did that?" ends the slide.',
  note_zh: '海藻糖是市售糖類，不是這個系統會分泌的保護蛋白，數學模型正因如此排除它。8.7 倍是從「以鮮重標準化」那一欄讀出來的，而同一頁自己寫著這種標準化會放大嚴重受損植株的相對值。只要評審問一句「那是你們哪一個蛋白做到的？」這張就結束了。',
  src_page: 'plant'
},
{
  v: 'never', group: 'plant', src: 'plant/r19-exp9-plates-plant.webp',
  title_en: 'The ACCD pre-treatment plates: the 70% chlorophyll set',
  title_zh: 'ACCD 前處理培養盤：葉綠素 70% 那一組',
  sees_en: 'A green pre-treatment column against bleached controls. It looks like the best plant figure in the project.',
  sees_zh: '綠色的前處理那一欄對照泛白的對照組。它看起來像整個專題最好的植物圖。',
  cap_en: 'ACC deaminase applied before stress exposure gave visibly greater rosette area and chlorophyll retention.',
  cap_zh: '在逆境暴露前施用 ACC 去胺酶，明顯有較大的蓮座面積與葉綠素保留。',
  note_en: 'The wiki records that these plates were contaminated throughout and that the pre-treatment group has to be repeated. The 0 mM untreated control plate is already yellow, worse than treated plates at 75 mM, so the comparison reads plate variation rather than salt. Use the hydroponic rack instead: it has the strain-matched control this set lacks.',
  note_zh: 'Wiki 記載這些培養盤全程有污染，而且前處理組必須重做。0 mM 未處理對照盤本身就已發黃、比 75 mM 的處理盤更差，所以這個比較讀到的是盤間差異而不是鹽的效應。請改用水耕架那張：它有這一組所缺少的同株對照。',
  src_page: 'plant'
},
{
  v: 'never', group: 'protein', src: 'results/pf-dnph-activity-variants-results.webp',
  title_en: 'The DNPH variants bar chart',
  title_zh: 'DNPH 變體長條圖',
  sees_en: 'Bars that look like proof that the enzyme is active. They are not.',
  sees_zh: '這些長條看起來像是酵素有活性的證據。它們不是。',
  cap_en: 'DNPH assay of ACCD activity of different variants. The requirement for PLP was tested to inform subsequent experiments.',
  cap_zh: '不同變體的 ACCD 活性 DNPH 分析。測試 PLP 需求以指引後續實驗。',
  note_en: 'The plasmid-free WB800 control sits at about 32, above csn at about 21. Only the PLP-supplemented bars clear the control, so the figure demonstrates a cofactor requirement, not activity. If you show it at all, show it as a method result: this is how we learned the enzyme needs PLP.',
  note_zh: '無質體的 WB800 對照組約在 32，高於 csn 的約 21。只有加了 PLP 的那幾根超過對照組，所以這張圖證明的是輔因子需求，不是活性。如果真要展示，請當成方法學結果展示：這是我們怎麼知道這個酵素需要 PLP 的。',
  src_page: 'results'
},
{
  v: 'never', group: 'protein', src: 'results/pp-elisa-variants-results.webp',
  title_en: 'The ELISA variants table',
  title_zh: 'ELISA 變體比較表',
  sees_en: 'A wild-type against codon-optimised comparison that looks like characterisation.',
  sees_zh: '野生型對密碼子最佳化的比較，看起來像是特性鑑定。',
  cap_en: 'ELISA of different protectant variants at 8 hr and 12 hr, comparing wild-type and codon-optimized versions.',
  cap_zh: '8 小時與 12 小時不同保護蛋白變體的 ELISA，比較野生型與密碼子最佳化版本。',
  note_en: 'The negative control reads in the same range as four of the six constructs, so no difference here can be attributed to expression. Codon-optimised ACCD also came in below wild type, which is honest and interesting but is not a "we made it work" slide.',
  note_zh: '陰性對照落在六個構築中四個的同一範圍，所以這裡的差異無法歸因於表現量。密碼子最佳化的 ACCD 也低於野生型，這很誠實也很有意思，但不是一張「我們做成功了」的投影片。',
  src_page: 'results'
},
{
  v: 'never', group: 'protein', src: 'results/pp-amilcp-supernatant-results.webp',
  title_en: 'The colourless AmilCP tubes',
  title_zh: '無色的 AmilCP 試管',
  sees_en: 'Two clear tubes. A failed reporter, and the story of why reporters were abandoned.',
  sees_zh: '兩支清澈的試管。一個失敗的報導基因，以及為什麼最後放棄報導基因的故事。',
  cap_en: 'Failed supernatant and medium of AmilCP bioreactor experiments.',
  cap_zh: 'AmilCP 生物反應器實驗失敗的上清液與培養液。',
  note_en: 'A good failure, and a real engineering cycle, but it needs two minutes to pay off and in five it just reads as a thing that did not work. Keep the story in your head for an engineering question and leave the picture out.',
  note_zh: '這是一個好的失敗，也是一次真實的工程循環，但它需要兩分鐘才划算，而在五分鐘裡它只會被聽成「一件沒成功的事」。把故事記在腦袋裡以備工程類提問，但不要放這張圖。',
  src_page: 'results'
},
{
  v: 'never', group: 'model', src: 'engineering/rig-260805-do-ph-probes-engineering.webp',
  title_en: 'The first readings off both probes',
  title_zh: '兩支探針的第一組讀值',
  sees_en: 'Two probes reading numbers, which looks like instrumentation and is not yet.',
  sees_zh: '兩支探針讀出了數字，看起來像是已經儀器化，但還不是。',
  cap_en: '5 August 2026, the first readings off both probes. Both read.',
  cap_zh: '2026 年 8 月 5 日，兩支探針的第一組讀值。兩支都讀得到數值。',
  note_en: 'The team\'s own caption finishes the sentence: neither probe is on the reactor and neither has a fixed-point calibration. There is no dissolved-oxygen record on any run, and loop temperature was an operator-typed value. Showing this invites a question with no good answer.',
  note_zh: '團隊自己的圖說把話講完了：兩支探針都不在反應器上，也都沒有做過定點校正。任何一次運轉都沒有溶氧紀錄，而迴路溫度是操作者手動輸入的值。展示這張只會招來一個沒有好答案的問題。',
  src_page: 'engineering'
}

];
