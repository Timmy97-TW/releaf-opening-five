/* The figure library.
 *
 * Every figure the five minutes could use, with a verdict. `use` is on a slide
 * now. `backup` is loaded and numbered but never shown unless asked for.
 * `maybe` is a real option that lost on time, not on quality. `never` is a
 * figure that will cost you more than it earns, with the reason.
 *
 * Every URL here returned HTTP 200 from static.igem.wiki on 24 October 2026.
 * `sees` is what a judge takes from the image in the first two seconds.
 */
var FIGURES = [

/* ───────────────────────────── on a slide ───────────────────────────── */
{
  v: 'use', slide: 1, src: 'home/explore-hardware-bench-home.webp',
  title_en: 'The whole loop running on one bench, with a live growth curve',
  title_zh: '整個迴路在同一張實驗桌上運轉，並有即時生長曲線',
  sees_en: 'A machine that exists, is working, and is logging. Settles "did they actually build it" in one second, and it is natively 16:9 so nothing has to be cropped.',
  sees_zh: '一台真實存在、正在運作、而且在記錄資料的機器。一秒解決「他們真的做出來了嗎」，而且它原生就是 16:9，不需要任何裁切。',
  cap_en: 'The hollow-fibre column, culture and medium bottles, the peristaltic pump, the in-line photometer and a laptop showing a live growth curve, under the circuit sketched on the whiteboard.',
  cap_zh: '中空纖維管柱、培養液與培養基瓶、蠕動泵、在線光度計，以及顯示即時生長曲線的筆電，後方白板上畫著線路圖。',
  src_page: 'home'
},
{
  v: 'maybe', src: 'engineering/rig-260904-incubator-running-engineering.webp',
  title_en: 'The rig inside the incubator, dashboard live',
  title_zh: '培養箱內的裝置，儀表板即時顯示',
  sees_en: 'The closest thing to proof of operation in the corpus: a screen reading an optical density while the rig runs beside it.',
  sees_zh: '整份資料裡最接近「運轉證據」的一張：裝置在運轉，旁邊的螢幕正讀出一個光密度值。',
  cap_en: 'The rig seven minutes into the run, everything inside the 37 °C incubator. The screen reads OD600 0.1738 AU at 06:58 elapsed.',
  cap_zh: '運轉開始七分鐘的裝置，全部在 37 °C 培養箱內。畫面顯示經過 06:58、OD600 0.1738 AU。',
  note_en: 'Lost slide 1 on shape, not content: the file is portrait, 1200 by 1594. A cover crop in a 16:9 frame cuts off the dashboard, which is the only part that proves it ran, and contain leaves white bands down both sides. Use it full-bleed on a portrait backup slide, or print it.',
  note_zh: '輸掉第 1 張是輸在形狀、不是內容：這個檔案是直式的 1200 × 1594。在 16:9 的框裡用 cover 裁切會切掉儀表板，而那是唯一能證明它在運轉的部分；用 contain 則兩側會留下白邊。請把它滿版放在直式的備用投影片上，或是印出來。',
  src_page: 'engineering'
},
{
  v: 'use', slide: 2, src: 'results/br-shell-permeate-72h-results.webp',
  title_en: 'Shell permeate over 72 hours: concentration, activity, specific activity',
  title_zh: '殼側透過液 72 小時：濃度、活性、比活性',
  sees_en: 'Three panels that together say the protein crossed the membrane and still works. The third panel is the one that rules out host background.',
  sees_zh: '三個子圖合起來說明：蛋白穿過了膜，而且仍然有作用。第三個子圖是排除宿主背景值的關鍵。',
  cap_en: 'Shell permeate from the continuously operating bioreactor contains recombinant secretory ACC deaminase. (A) ELISA concentration. (B) DNPH volumetric activity. (C) Specific activity.',
  cap_zh: '連續運轉中的生物反應器殼側透過液含有重組分泌型 ACC 去胺酶。(A) ELISA 濃度。(B) DNPH 體積活性。(C) 比活性。',
  src_page: 'results'
},
{
  v: 'use', slide: 3, src: 'plant/h18-bopepsal-rack-plant.webp',
  title_en: 'Hydroponic BoPep4 under salinity, against a strain-matched control',
  title_zh: '水耕 BoPep4 鹽逆境，對照同株培養液',
  sees_en: 'One green tray among pale ones, and a control that is the same bacterium without the protectant. This is the only plant comparison in the project with that control.',
  sees_zh: '一盤綠的在一排泛白的中間，而且對照組是同一株細菌、只是不產保護蛋白。這是整個專題唯一帶這種對照的植物比較。',
  cap_en: 'WB800 refers to the control culture containing Bacillus subtilis that does not produce the protectant.',
  cap_zh: 'WB800 指的是含有不產生保護蛋白之 Bacillus subtilis 的對照培養液。',
  src_page: 'plant'
},
{
  v: 'use', slide: 3, src: 'plant/s21-accdheat-t1-plant.webp',
  title_en: 'Soil heat: chlorophyll by treatment timing, trial 1',
  title_zh: '土耕熱逆境：各施用時機的葉綠素，第一試',
  sees_en: 'Post-treatment below the untreated control. The result that argues for forecasting stress instead of reacting to it, and it repeated in trial 2.',
  sees_zh: '後處理組低於未處理對照組。這個結果支持「預報逆境」而不是「事後反應」，而且在第二試中重現。',
  cap_en: 'Unnormalised chlorophyll, pre / co / post: 1.05, 0.91, 0.75 mg/L in trial 1 and 0.89, 0.63, 0.355 in trial 2.',
  cap_zh: '未標準化葉綠素，前／同時／後處理：第一試 1.05、0.91、0.75 mg/L，第二試 0.89、0.63、0.355。',
  note_en: 'Build note: this file is a three-panel figure and the panel that carries the argument is (c), relative total chlorophyll. At projection size show panel (c) alone, labelled "panel c", and keep the full three-panel figure as a backup. Selecting a named panel is fair; cropping an axis is not.',
  note_zh: '製作提醒：這個檔案是三聯圖，承載論點的是 (c)「相對總葉綠素」。投影時請只放 (c) 並標明「panel c」，完整三聯圖留作備用。挑選一個具名的子圖是公平的；裁切座標軸不是。',
  src_page: 'plant'
},
{
  v: 'use', slide: 4, src: 'measurement/od600-gates-bubble-measurement.svg',
  title_en: 'Two acceptance gates, provoked with bubbles',
  title_zh: '兩道接受閘，用氣泡刻意挑戰',
  sees_en: 'One trace swinging wildly and one trace flat on the truth, on the same axes. The best single measurement image the project has.',
  sees_zh: '同一座標上，一條劇烈震盪、一條平貼在真值上。這是整個專題最好的單張量測影像。',
  cap_en: 'Ungated, the worst reading is 2.44 OD away from the truth; through both gates the worst is 0.016.',
  cap_zh: '未過閘時最差的讀值偏離真值 2.44 OD；通過兩道閘後最差只有 0.016。',
  src_page: 'measurement'
},
{
  v: 'use', slide: 4, src: 'measurement/od600-run-gate-measurement.svg',
  title_en: 'The out-of-sample test: the same rig, six days later',
  title_zh: '樣本外驗證：同一台裝置，六天後',
  sees_en: 'Two bars. The readable part of the record goes from 10.6 hours to 37. The gate was written down before this run existed.',
  sees_zh: '兩條長條。紀錄中可讀取的部分從 10.6 小時變成 37 小時。而這道閘是在這次運轉存在之前就寫下的。',
  cap_en: 'The same reactor and the same strain, six days apart. The bar is the whole logged record; the solid part is what can be read as a growth curve.',
  cap_zh: '同一台反應器、同一株菌，相隔六天。長條是整段紀錄；實心部分是能當成生長曲線來讀的範圍。',
  src_page: 'measurement'
},
{
  v: 'use', slide: 4, src: 'measurement/od600-silica-window-measurement.svg',
  title_en: 'Both builds against a commercial BioDrop, on silica',
  title_zh: '兩款自製版本對照商用 BioDrop，以矽球校正',
  sees_en: 'A home-built instrument climbing on a commercial instrument\'s slope, with nothing fitted to make it do so.',
  sees_zh: '一台自製儀器沿著商用儀器的斜率上升，而且沒有做任何擬合讓它變成這樣。',
  cap_en: 'Inside the BioDrop\'s own range the Pro climbs on the reference\'s slope and sits a constant 0.12 OD below it; the Slim climbs a fifth as steeply and just as straight.',
  cap_zh: '在 BioDrop 自身量程內，Pro 沿著參考儀器的斜率上升，並固定低它 0.12 OD；Slim 的斜率約為五分之一，但同樣是直線。',
  src_page: 'measurement'
},
{
  v: 'use', slide: 5, src: 'engineering/rig-int4-growth-ph-engineering.webp',
  title_en: 'The October run: 77 hours of growth with the pH sawtooth beneath',
  title_zh: '十月那次運轉：77 小時生長曲線，下方是 pH 鋸齒',
  sees_en: 'A three-day run in one picture, with every automated base dose visible as a step. Each step is the controller acting without a person.',
  sees_zh: '一張圖看完三天的運轉，每一次自動加鹼都是一個可見的階梯。每個階梯都是控制器在沒有人的情況下動作。',
  cap_en: 'Growth curve and pH across the 18 October run. Each sharp rise in pH corresponds to a base addition.',
  cap_zh: '10 月 18 日運轉的生長曲線與 pH。每一次 pH 急升都對應一次加鹼。',
  src_page: 'engineering'
},
{
  v: 'use', slide: 5, src: 'hardware/bioreactor/containment-plates-bioreactor.webp',
  title_en: 'Lumen side and shell side, plated',
  title_zh: '管內側與殼側塗盤',
  sees_en: 'Colonies on one plate, nothing on the other. The containment claim with no explanation needed, and no replicate behind it.',
  sees_zh: '一盤有菌落，另一盤什麼都沒有。圍阻的主張不需要任何解釋，但它背後也沒有重複試驗。',
  cap_en: 'Lumen-side (left) and shell-side (right) medium, plated on LB agar after 24 h at 37 °C.',
  cap_zh: '管內側（左）與殼側（右）培養液，於 LB 培養基 37 °C 培養 24 小時後。',
  src_page: 'hardware-bioreactor'
},
{
  v: 'use', slide: 5, src: 'measurement/photometer-two-builds-measurement.webp',
  title_en: 'The two photometer builds at the same scale',
  title_zh: '兩款光度計以相同比例呈現',
  sees_en: 'A first version and a simplified version side by side. The cost story and the reproduction story in one frame.',
  sees_zh: '第一版與簡化版並排。成本故事和「可被重現」的故事在同一張圖裡。',
  cap_en: 'The Pro build at US$371.78 and the Slim build at US$235.29, against about US$470 for the benchtop reference instrument.',
  cap_zh: 'Pro 版成本 371.78 美元、Slim 版 235.29 美元，而桌上型參考儀器約 470 美元。',
  src_page: 'measurement'
},

/* ───────────────────────────── backup ───────────────────────────── */
{
  v: 'backup', slide: 11, src: 'results/pp-elisa-three-results.webp',
  title_en: 'All three protectants are secreted, ACCD about three times the others',
  title_zh: '三種保護蛋白都有分泌，ACCD 約為其他兩者的三倍',
  sees_en: 'Three bars: the project makes more than one thing. Say "about 16" and "about 6", never decimals.',
  sees_zh: '三根長條：這個專題不只做一種東西。請說「大約 16」和「大約 6」，不要講小數。',
  cap_en: 'ACCD reached about 16 µg/mL, while LEA and BoPep4 were each about 6 µg/mL.',
  cap_zh: 'ACCD 達到約 16 µg/mL，LEA 與 BoPep4 各約 6 µg/mL。',
  note_en: 'The underlying ACCD readings sat below the standard curve, so they are extrapolations. Single wells.',
  note_zh: 'ACCD 的原始讀值低於標準曲線，所以是外插值。而且是單孔。',
  src_page: 'results'
},
{
  v: 'backup', slide: 12, src: 'results/pp-elisa-reactor-time-results.webp',
  title_en: 'Protein peaks at 12 hours',
  title_zh: '蛋白在 12 小時達峰',
  sees_en: 'Show it beside slide 13 and the six-hour offset is the whole story.',
  sees_zh: '和第 13 張並排展示，六小時的落差就是整個故事。',
  cap_en: 'Secreted ACCD reached a maximum at 12 h, about 6.5 µg/mL, and settled to 2.5 to 3 µg/mL after 36 h.',
  cap_zh: '分泌的 ACCD 在 12 小時達到最高，約 6.5 µg/mL，36 小時後穩定在 2.5 到 3 µg/mL。',
  note_en: 'A second trial peaked at 24 h, so the peak is not reproducible. Say so if you show this.',
  note_zh: '第二次試驗在 24 小時達峰，所以這個峰值不可重現。要展示這張就要講出來。',
  src_page: 'results'
},
{
  v: 'backup', slide: 13, src: 'results/pp-dnph-reactor-time-results.webp',
  title_en: 'Activity peaks at 18 hours',
  title_zh: '活性在 18 小時達峰',
  sees_en: 'The same run, the other assay, six hours later. Protein first, function second.',
  sees_zh: '同一次運轉、另一種分析，晚了六小時。先有蛋白，後有功能。',
  cap_en: 'Activity stayed near zero to 12 h and reached a maximum at 18 h, about 30 nmol α-KB mL⁻¹ h⁻¹, six hours after the ELISA peak.',
  cap_zh: '活性在 12 小時前接近零，於 18 小時達到最高，約 30 nmol α-KB mL⁻¹ h⁻¹，比 ELISA 峰值晚六小時。',
  src_page: 'results'
},
{
  v: 'backup', slide: 14, src: 'results/br-leak-event-v2-results.webp',
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
  v: 'backup', slide: 15, src: 'measurement/od600-reference-counts-measurement.svg',
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
  v: 'backup', slide: 16, src: 'software/fig-r3-run434-software.svg',
  title_en: 'An alarm 26.7 hours before the channel failed',
  title_zh: '在通道失效前 26.7 小時發出警報',
  sees_en: 'Two stacked traces with the alarm marked. The fault detector fired while the density trace still looked clean.',
  sees_zh: '上下兩條軌跡並標出警報位置。偵測器發出警報時，密度軌跡看起來還是乾淨的。',
  cap_en: 'Optical density (top) and the photometer\'s reference channel (bottom) over the 434-hour run, with the sensor alarm at 216.3 h marked.',
  cap_zh: '434 小時運轉中的光密度（上）與光度計參考通道（下），標出 216.3 小時的感測器警報。',
  note_en: 'Retrospective: the autoencoder was trained on the healthy first 120 hours of this same run. False-alarm rate 6.1% on unseen quiet windows. Do not call it a live alarm.',
  note_zh: '這是回溯分析：自編碼器是用這同一次運轉前 120 小時的健康資料訓練的。在未見過的平靜區間誤報率 6.1%。不要說它是即時警報。',
  src_page: 'software'
},
{
  v: 'backup', slide: 17, src: 'engineering/gel-260919-level2-acdi-three-clones-engineering.webp',
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
  v: 'backup', slide: 18, src: 'engineering/gel-level2-ecori-btsi-engineering.webp',
  title_en: 'The device is the right length',
  title_zh: '這個裝置長度正確',
  sees_en: 'A double digest landing where it was designed to. Pair with slide 17.',
  sees_zh: '雙酶切落在設計的位置上。和第 17 張一起用。',
  cap_en: 'EcoRI alone linearises the plasmid at the expected 10,293 bp; EcoRI with BtsI cuts to 7,543 bp. Two independent clones.',
  cap_zh: '單用 EcoRI 將質體線性化於預期的 10,293 bp；EcoRI 加 BtsI 切成 7,543 bp。兩個獨立轉殖株。',
  src_page: 'engineering'
},
{
  v: 'backup', slide: 19, src: 'results/og-dnph-long-results.webp',
  title_en: 'Green is 14 times red at 13 hours, and the order inverts by 16',
  title_zh: '13 小時綠光是紅光的 14 倍，到 16 小時順序反轉',
  sees_en: 'The cleanest light result and its own refutation on one chart. Show both halves or neither.',
  sees_zh: '最乾淨的光反應結果，和它自己的反證，在同一張圖上。兩半一起展示，或兩半都不展示。',
  cap_en: 'The highest activity was observed at 13 h under green light. However, it decreased dramatically over the following 3 h.',
  cap_zh: '最高活性出現在綠光 13 小時。然而在接下來的 3 小時內急劇下降。',
  note_en: '13 h green 0.1249 mM against red 0.0089; 16 h red 0.0923 against green 0.0130. Single plate, technical-replicate error bars, no test. Our own verdict: the switch has not been demonstrated to work.',
  note_zh: '13 小時綠光 0.1249 mM 對紅光 0.0089；16 小時紅光 0.0923 對綠光 0.0130。單一盤、誤差棒為技術重複、無統計檢定。我們自己的結論：這個開關尚未被證明可運作。',
  src_page: 'results'
},
{
  v: 'backup', slide: 20, src: 'engineering/rig-int4-sampling-pressure-engineering.webp',
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
  v: 'backup', slide: 21, src: 'software/fig-r1-hydraulics-software.svg',
  title_en: 'We subtracted the plumbing before judging the membrane',
  title_zh: '在評斷膜之前，我們先把管路扣掉',
  sees_en: 'Two curves separating as flow rises: with the module fitted, and with a plain tube in its place.',
  sees_zh: '兩條曲線隨流量上升而分開：裝上模組，與以普通管路取代。',
  cap_en: 'Pressure lost across the loop against flow rate, with the hollow fiber module fitted and with a plain tube in its place.',
  cap_zh: '迴路壓損對流量，分別為裝上中空纖維模組與以普通管路取代。',
  note_en: 'The plumbing is 46% of the total drop at 120 mL/min and 55% at 450. Without the subtraction the membrane\'s own resistance would have been overstated by about a factor of two.',
  note_zh: '在 120 mL/min 時管路佔總壓降的 46%，450 mL/min 時佔 55%。不做這個扣除，膜本身的阻力會被高估大約兩倍。',
  src_page: 'software'
},
{
  v: 'backup', slide: 22, src: 'human-practices/exp-0904-chang-group-human-practices.webp',
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
  v: 'backup', slide: 23, src: 'human-practices/evomap-wet-v3-human-practices.webp',
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
  v: 'backup', slide: 24, src: 'geospatial-analysis/farmland-volatility-v2-geospatial-analysis.webp',
  title_en: 'The smallest farms sit in the most volatile microclimates',
  title_zh: '最小的農場就在氣候最不穩定的微氣候區',
  sees_en: 'Taiwan shaded by climate volatility with sub-two-hectare farmland on top of it. The targeting argument, needing no caption.',
  sees_zh: '台灣依氣候波動度著色，上面疊著兩公頃以下的農地。這就是「選對對象」的論據，不需要圖說。',
  cap_en: 'Taiwan\'s farmland coloured by climate volatility index, with farms under 2 hectares marked.',
  cap_zh: '台灣農地依氣候波動指數著色，並標出兩公頃以下的農場。',
  src_page: 'geospatial-analysis'
},
{
  v: 'backup', slide: 25, src: 'entrepreneurship/break-even-hectares-entrepreneurship-v2.webp',
  title_en: 'Break-even at about 226 hectares',
  title_zh: '約在 226 公頃損益兩平',
  sees_en: 'Revenue crossing total cost. The one financial chart to show, and only if asked.',
  sees_zh: '營收越過總成本。唯一該展示的財務圖，而且只有被問到才展示。',
  cap_en: 'Revenue overtakes total cost at about 226 hectares of paying farms across Years 0 to 4.',
  cap_zh: '在第 0 到第 4 年間，當付費農地達約 226 公頃時，營收超過總成本。',
  note_en: 'If you show this, name the disagreement: the Math Model reaches a dose 185 times larger by another route, and the dose this rests on has never been tested on a crop.',
  note_zh: '若要展示這張，請主動講出那個分歧：數學模型用另一條路徑得到的劑量是它的 185 倍，而這張圖所依據的劑量從未在作物上測試過。',
  src_page: 'entrepreneurship'
},
{
  v: 'backup', slide: 26, src: 'description/synbio-modules-description.webp',
  title_en: 'The circuit, as four modules',
  title_zh: '這個線路，分成四個模組',
  sees_en: 'What was actually built, in one diagram. Use it the moment anyone asks how the light signal reaches the gene.',
  sees_zh: '一張圖看完到底做了什麼。只要有人問光訊號怎麼到達基因，就用這張。',
  cap_en: 'The four-module CcaSR circuit in B. subtilis: pigment, sensing, transduction, and the secreted output.',
  cap_zh: 'B. subtilis 中的四模組 CcaSR 線路：色素、感光、訊號傳遞，以及分泌輸出。',
  src_page: 'description'
},

/* ───────────────────────────── maybe ───────────────────────────── */
{
  v: 'maybe', src: 'hardware/bench-photo/bench-bench.webp',
  title_en: 'All four instruments on one bench at dusk',
  title_zh: '黃昏時四台儀器在同一張實驗桌上',
  sees_en: 'The whole hardware output of the year in one photograph. A beautiful alternative to slide 1 if you would rather open on breadth than on proof.',
  sees_zh: '一張照片呈現整年的硬體產出。如果你們寧願用「廣度」而不是「證據」開場，這是第 1 張的漂亮替代。',
  cap_en: 'Bioreactor, light plate apparatus, in-line photometer and hydroponics plate, on one bench.',
  cap_zh: '生物反應器、光照板、在線光度計與水耕浮板，在同一張實驗桌上。',
  note_en: 'Lost to the running rig because it shows objects rather than evidence of operation. Keep it as the fallback if the rig photo looks dark on the room\'s projector.',
  note_zh: '輸給運轉中的裝置照，因為它呈現的是物件、不是運轉的證據。如果裝置照在會場投影機上偏暗，留它當備案。',
  src_page: 'hardware'
},
{
  v: 'maybe', src: 'results/fig-system-flow-results.webp',
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
  v: 'maybe', src: 'results/br-cycle1-growth-v2-results.webp',
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
  v: 'maybe', src: 'software/fig-r6-leafair-software.svg',
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
  v: 'maybe', src: 'protein-design/alanine-scan-bopep4-protein-design.webp',
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

/* ───────────────────────────── never ───────────────────────────── */
{
  v: 'never', src: 'plant/r20-set6-readouts-plant.webp',
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
  v: 'never', src: 'plant/r19-exp9-plates-plant.webp',
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
  v: 'never', src: 'results/pf-dnph-activity-variants-results.webp',
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
  v: 'never', src: 'results/pp-elisa-variants-results.webp',
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
  v: 'never', src: 'results/pp-amilcp-supernatant-results.webp',
  title_en: 'The colourless AmilCP tubes',
  title_zh: '無色的 AmilCP 試管',
  sees_en: 'Two clear tubes. A failed reporter, and the story of why reporters were abandoned.',
  sees_zh: '兩支清澈的試管。一個失敗的報導基因，以及為什麼最後放棄報導基因的故事。',
  cap_en: 'Failed supernatant and medium of AmilCP bioreactor experiments.',
  cap_zh: 'AmilCP 生物反應器實驗失敗的上清液與培養液。',
  note_en: 'A good failure, and a real engineering cycle, but it needs two minutes to pay off and in five it just reads as a thing that did not work. Keep the story in your head for an engineering question and leave the picture out.',
  note_zh: '這是一個好的失敗，也是一次真實的工程循環，但它需要兩分鐘才划算，而在五分鐘裡它只會被聽成「一件沒成功的事」。把故事記在腦袋裡以備工程類提問，但不要放這張圖。',
  src_page: 'results'
}

];
