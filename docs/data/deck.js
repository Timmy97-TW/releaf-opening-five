/* The six slides.
 *
 * Every number was read off the frozen wiki and cross-checked against the
 * team's own caveats before it was allowed onto a slide. Where two pages of the
 * wiki disagree, a slide carries the claim both pages support and nothing more.
 *
 * Fields that do design work:
 *   crop   [x, y, w, h] normalized region of the source file. Used to present
 *          one panel of a multi-panel wiki figure at full size, which is the
 *          only honest way to make those figures legible on a projector.
 *          Selecting a named panel is fair; cropping an axis is not.
 *   marks  annotation in normalized figure coordinates. Only where the figure
 *          does not already guide the eye: a well-made chart with its own
 *          legend is left alone, because over-annotating one is worse than
 *          leaving it bare.
 *   f      fragment number. The element stays hidden until the speaker reaches
 *          that beat, so nobody reads ahead while being spoken to.
 *   steps  what each beat is, for the presenter notes.
 *
 * `caveat` prints on the slide in small type: the limit is part of the result,
 * not an apology for it. `say` is the spoken line. `watch` is the trap.
 * Budgets total 4:20 of speech; the two handovers add about twenty seconds.
 */
var DECK = {

speakers: {
  chloe:     { name: { en: 'Chloe',     zh: 'Chloe' } },
  abigail:   { name: { en: 'Abigail',   zh: 'Abigail' } },
  jacquelyn: { name: { en: 'Jacquelyn', zh: 'Jacquelyn' } }
},

slides: [

/* ──────────────────────────────────────────────────────────── 1 */
{
  speaker: 'chloe', budget: 35, layout: 'hero',
  kicker_en: 'Where we are', kicker_zh: '我們到了哪裡',
  title_en: 'We built it, we ran it, and <em>it is instrumented</em>.',
  title_zh: '我們把它做出來、讓它運轉，<em>而且每個環節都有感測器</em>。',
  sub_en: 'Bacillus subtilis engineered to secrete plant stress protectants, grown in a hollow-fibre perfusion bioreactor that keeps the cells in and lets the protein out.',
  sub_zh: '經改造的 Bacillus subtilis 分泌植物逆境保護蛋白，養在中空纖維灌流式生物反應器裡：細胞留在管內，蛋白送出去。',
  steps: [
    { en: 'The claim and the photograph. Let them look for two seconds before you speak over it.',
      zh: '先給主張和照片。在你開口蓋過去之前，讓他們看兩秒。' },
    { en: 'The one sentence that defines the system, then the April reason there is a membrane in it.',
      zh: '定義這個系統的那一句話，接著講四月那個「為什麼會有一層膜」的理由。' }
  ],
  figs: [{
    /* 1000 x 562, natively 16:9, so nothing has to be cropped. Chosen over the
       incubator photograph, which is portrait: a cover crop there cuts off the
       dashboard, the only part of it that proves the rig was running. */
    src: 'https://static.igem.wiki/teams/6072/wiki/home/explore-hardware-bench-home.webp',
    cover: true,
    alt_en: 'The ReLEAF system running on one bench, with a laptop showing a live growth curve.',
    alt_zh: 'ReLEAF 系統在同一張實驗桌上運轉，筆電顯示即時生長曲線。',
    cap_en: 'The hollow-fibre column, culture and medium bottles, the peristaltic pump, the in-line photometer and a laptop reading the loop, under the circuit sketched on the whiteboard.',
    cap_zh: '中空纖維管柱、培養液與培養基瓶、蠕動泵、在線光度計，以及正在讀取迴路的筆電，後方白板上畫著線路圖。',
    marks: [
      { kind: 'ring', x: 81, y: 72, w: 17, h: 26 },
      { kind: 'lab', x: 61, y: 53, t_en: 'reading the loop, live', t_zh: '即時讀取迴路' }
    ]
  }],
  say_en: 'Thank you. You have read the wiki, so we will not describe the project again. One sentence: <em>Bacillus subtilis engineered to secrete plant stress protectants, grown in a hollow-fibre bioreactor that keeps the cells in and lets the protein out.</em> Why a membrane at all: in April we were going to release the bacteria into the soil with a kill switch, until two people told us a switch should not be the primary safeguard. <em>That is why this picture has a membrane in it.</em> Three results, then what is still open.',
  say_zh: '謝謝。各位讀過我們的 wiki，所以我們不會再介紹一次專題。一句話：<em>經改造的 Bacillus subtilis 分泌植物逆境保護蛋白，養在中空纖維生物反應器裡，細胞留在裡面、蛋白送出去。</em>為什麼會有一層膜：四月時我們原本要把細菌釋放到土壤裡，靠自殺開關保證安全，而一週之內有兩位專家告訴我們，開關不該是主要的防護手段。<em>這就是這張照片裡有一層膜的原因。</em>接下來三個結果，然後是還沒接起來的地方。',
  watch_en: 'Do not say "our project aims to". Say what exists. The April story is the Human Practices claim in one breath: say it as the reason for the architecture, not as a list of people you met.',
  watch_zh: '不要說「我們的專題旨在」。講已經存在的東西。四月那段話就是一口氣講完的人文實踐論據：把它當成「架構為什麼是這樣」的原因來講，不要講成見過誰的名單。'
},

/* ──────────────────────────────────────────────────────────── 2 */
{
  speaker: 'chloe', budget: 50, layout: 'evidence',
  kicker_en: 'Result 1 · the protectant', kicker_zh: '結果一 · 保護蛋白',
  title_en: 'Active enzyme in a compartment with <em>no cells in it</em>.',
  title_zh: '在一個<em>沒有細胞</em>的隔室裡，收到有活性的酵素。',
  steps: [
    { en: 'Specific activity, cell-free. Point at the 18-hour bar and say the number.',
      zh: '無細胞條件下的比活性。指著 18 小時那根長條，把數字說出來。' },
    { en: 'The two assays appear. Protein peaks at 12, activity at 18. Let the gap do the work.',
      zh: '兩個分析出現。蛋白在 12 小時達峰、活性在 18 小時。讓這個落差自己說話。' },
    { en: 'The maturation account, named as a hypothesis, and the peak that did not repeat.',
      zh: '把「成熟」說成假設，並講出那個沒有重現的峰值。' }
  ],
  figs: [{
    /* panel C of the 1500 x 955 three-panel figure: specific activity, the
       quantity that rules out host background. The full figure is backup 12. */
    src: 'https://static.igem.wiki/teams/6072/wiki/engineering/rig-int4-assays-engineering.webp',
    nat: [1500, 955], crop: [0, 0.485, 0.52, 0.515],
    alt_en: 'Specific activity of shell permeate against time from 1 to 72 hours, panel C of the assay figure.',
    alt_zh: '殼側透過液比活性對時間（1 至 72 小時），為分析圖的 C 子圖。',
    cap_en: 'Panel (c) of the shell-permeate assays: specific activity, DNPH activity normalised to ELISA concentration, across the October run.',
    cap_zh: '殼側透過液分析的 (c) 子圖：比活性，即 DNPH 活性以 ELISA 濃度標準化，涵蓋十月那次運轉。',
    marks: [
      { kind: 'band', x: 44, y: 6, w: 7, h: 80 },
      { kind: 'lab', x: 66, y: 13, t_en: '6.3 U/mg at 18 h', t_zh: '18 小時 6.3 U/mg' },
      { kind: 'lab', x: 33, y: 16, quiet: true, multi: true,
        t_en: 'holds 5 to 8.4 U/mg to 72 h', t_zh: '維持 5 至 8.4 U/mg 直到 72 小時' }
    ]
  }],
  strip: {
    f: 2,
    figs: [
      { src: 'https://static.igem.wiki/teams/6072/wiki/engineering/rig-int4-assays-engineering.webp',
        nat: [1500, 955], crop: [0, 0, 0.52, 0.478],
        head_en: 'Protein, by ELISA · peaks at 12 h', head_zh: '蛋白，ELISA · 12 小時達峰',
        alt_en: 'ELISA concentration of ACC deaminase in the permeate from 1 to 72 hours.',
        alt_zh: '透過液中 ACC 去胺酶的 ELISA 濃度，1 至 72 小時。',
        marks: [{ kind: 'band', x: 38, y: 8, w: 7, h: 78 }] },
      { src: 'https://static.igem.wiki/teams/6072/wiki/engineering/rig-int4-assays-engineering.webp',
        nat: [1500, 955], crop: [0.52, 0, 0.48, 0.478],
        head_en: 'Function, by DNPH · steps up at 18 h', head_zh: '功能，DNPH · 18 小時跳升',
        alt_en: 'DNPH volumetric activity of the same samples from 1 to 72 hours.',
        alt_zh: '同批樣本的 DNPH 體積活性，1 至 72 小時。',
        marks: [{ kind: 'band', x: 48, y: 8, w: 8, h: 78, warn: true }] }
    ]
  },
  stats: [
    { v: '&gt;2 <small>µg/mL</small>', l_en: 'in the permeate at every one of nine timepoints through 72 h', l_zh: '72 小時內九個取樣點，透過液中都在 2 µg/mL 以上' },
    { v: '6.3 <small>U/mg</small>', l_en: 'specific activity at 18 h, in a compartment with no cells in it', l_zh: '18 小時的比活性，而且是在沒有細胞的隔室裡' },
    { v: '6 <small>h</small>', f: 2, l_en: 'between the protein peak and the activity peak', l_zh: '蛋白峰值與活性峰值之間的落差' }
  ],
  railNote_en: 'ACC deaminase only works as a multimer and needs a cofactor, so we think we are watching it mature after secretion. We have not tested that.',
  railNote_zh: 'ACC 去胺酶只有形成多聚體才有作用、而且需要輔因子，所以我們認為是分泌之後才成熟。這一點我們沒有驗證。',
  caveat_en: 'Our hypothesis, not a measurement. A second trial peaked at 24 h, so we do not call the peak reproducible.',
  caveat_zh: '這是我們的假設，不是量測結果。第二次試驗在 24 小時達峰，所以我們不說這個峰值可重現。',
  say_en: 'Our first result is the one we would defend hardest. On the far side of the membrane, in a compartment with no cells in it, what we collect is <em>catalytically active</em>: six point three units per milligram at eighteen hours, holding between five and eight through seventy-two. Cell-free, so it cannot be host background. There is a six-hour offset we did not expect: protein peaks at twelve hours, activity at eighteen. ACC deaminase works only as a multimer and needs a cofactor, so we think we are watching it mature after secretion. We have not tested that, and a second trial peaked at twenty-four hours, so we do not call the peak reproducible.',
  say_zh: '第一個結果是我們最有信心守住的。在膜的另一側、沒有細胞的隔室裡，我們收到的東西<em>具有催化活性</em>：18 小時每毫克 6.3 個單位，並在 72 小時內維持 5 到 8。無細胞，所以不可能是宿主背景值。裡面有一個我們沒預期到的六小時落差：蛋白 12 小時達峰、活性 18 小時達峰。ACC 去胺酶只有形成多聚體才有作用、而且需要輔因子，所以我們認為是分泌之後才成熟。這一點沒有驗證，而且第二次試驗在 24 小時達峰，所以我們不說這個峰值可重現。',
  watch_en: 'Do not quote an absolute ELISA concentration as a yield: those readings sit above the top standard and the plasmid-free control reads in the same range. The defensible quantity is activity normalised to concentration, in a cell-free compartment.',
  watch_zh: '不要把 ELISA 的絕對濃度當成產量引用：那些讀值高於最高標準品，而且無質體對照組落在同一範圍。站得住的量是「無細胞隔室中、以濃度標準化後的活性」。'
},

/* ──────────────────────────────────────────────────────────── 3 */
{
  speaker: 'abigail', budget: 50, layout: 'pair',
  kicker_en: 'Result 2 · the plant', kicker_zh: '結果二 · 植物',
  title_en: 'One experiment had the control that matters. One told us <em>spraying late is worse than not spraying</em>.',
  title_zh: '只有一個實驗帶了關鍵對照。另一個告訴我們：<em>太晚噴比不噴更糟</em>。',
  mid: { en: 'and this is why we forecast', zh: '這就是為什麼我們要預報' },
  midF: 2,
  steps: [
    { en: 'The rack. Name the control first, then the one group that held.',
      zh: '先講水耕架。先點出對照組，再講唯一撐住的那一組。' },
    { en: 'The soil timing chart. Post-treatment below the untreated control, in both trials.',
      zh: '再講土耕時機圖。後處理低於未處理對照組，兩次試驗皆然。' }
  ],
  figs: [
    {
      /* 1600 x 900 with wide white margins; cropped to the tray itself */
      src: 'https://static.igem.wiki/teams/6072/wiki/plant/h18-bopepsal-rack-plant.webp',
      nat: [1600, 900], crop: [0.1875, 0.10, 0.75, 0.822],
      head_en: 'Hydroponics, 100 mM NaCl, against the same strain without the protectant',
      head_zh: '水耕、100 mM NaCl，對照同一菌株但不產保護蛋白',
      alt_en: 'Hydroponic rack of Arabidopsis, four BoPep4 dilutions and two controls, at 0 and 100 mM NaCl.',
      alt_zh: '水耕架上的阿拉伯芥，四種 BoPep4 稀釋度與兩組對照，分別在 0 與 100 mM NaCl。',
      cap_en: 'WB800 is the control culture: the same Bacillus subtilis, not producing the protectant.',
      cap_zh: 'WB800 是對照培養液：同一株 Bacillus subtilis，但不產生保護蛋白。',
      marks: [
        { kind: 'ring', x: 17, y: 59, w: 27, h: 19 },
        { kind: 'lab', x: 52, y: 55, t_en: '1/40: still green', t_zh: '1/40：仍然是綠的' },
        { kind: 'ring', x: 17, y: 81, w: 27, h: 17, warn: true },
        { kind: 'lab', x: 55, y: 84, warn: true, t_en: 'same strain, no protectant', t_zh: '同株，不產保護蛋白' }
      ]
    },
    {
      /* panel (c) of a 1600 x 775 three-panel figure: unnormalised chlorophyll,
         the panel the claim rests on. Its legend is in the figure's other
         corner, so the groups are labelled directly here instead. */
      src: 'https://static.igem.wiki/teams/6072/wiki/plant/s21-accdheat-t1-plant.webp',
      nat: [1600, 775], crop: [0.675, 0.13, 0.325, 0.60],
      f: 2,
      head_en: 'Soil, 37 °C heat, ACC deaminase applied before, during and after',
      head_zh: '土耕、37 °C 熱逆境，ACC 去胺酶分別在前、中、後施用',
      alt_en: 'Relative total chlorophyll by treatment timing under heat stress, panel c of trial 1.',
      alt_zh: '熱逆境下各施用時機的相對總葉綠素，為第一試的 c 子圖。',
      cap_en: 'Panel (c), trial 1, unnormalised. Pre 1.05, co 0.91, post 0.75 mg/L against an untreated heat-stressed 0.89. Trial 2 ran the same order.',
      cap_zh: '第一試的 (c) 子圖，未標準化。前處理 1.05、同時 0.91、後處理 0.75 mg/L，未處理熱逆境組為 0.89。第二試順序相同。',
      marks: [
        { kind: 'band', x: 79, y: 10, w: 8, h: 74, warn: true },
        { kind: 'lab', x: 79, y: 16, warn: true, t_en: 'post 0.75', t_zh: '後處理 0.75' },
        { kind: 'lab', x: 45, y: 23, quiet: true, t_en: 'untreated 0.89', t_zh: '未處理 0.89' }
      ]
    }
  ],
  caveat_en: 'One box or one pot per condition, single runs. The left is proof of concept and the right is a direction, not effect sizes.',
  caveat_zh: '每個條件只有一盒或一盆，單次試驗。左邊是概念驗證、右邊是方向，兩者都不是效應量。',
  say_en: 'The plant side, and I want to be careful which experiment I lead with. Of agar, hydroponics and soil, <em>one</em> had the control that matters: the same Bacillus culture, without the protectant. At a hundred millimolar salt, the one-in-forty BoPep4 group was the only salted group still near unsalted weight and still green. Proof of concept, not an effect size. The second result changed the project. In soil under heat, protectant applied <em>after</em> the stress had hit left plants worse off than no treatment at all, in both trials. A farmer in Tamsui told us the same thing: <em>giving a plant too much takes away its ability to thrive on its own.</em> That is why the reactor only produces when the sensors read stress.',
  say_zh: '我負責植物這一側，而我想謹慎挑選要主打哪一個實驗。在洋菜、水耕和土耕之中，<em>只有一個</em>帶了關鍵的對照：同一株 Bacillus 培養液，但不產生保護蛋白。在 100 毫莫耳鹽逆境下，1/40 的 BoPep4 組是唯一仍接近無鹽重量、而且仍然是綠色的。這是概念驗證，不是效應量。第二個結果改變了整個專題。在土耕熱逆境下，逆境已經發生<em>之後</em>才施用，兩次試驗都讓植物比完全不處理更差。淡水的一位農友跟我們說過同一件事：<em>給植物太多，反而會奪走它自己活下去的能力。</em>這就是為什麼反應器只在感測器讀到逆境時才生產。',
  watch_en: 'Never say "statistically significant" about an agar bar: the protocol pools a group into one tube and reads it three times, so every asterisk is a technical replicate. And do not use the 70% chlorophyll number, the 8.7-fold trehalose number, or "3 cm more root".',
  watch_zh: '絕對不要對洋菜實驗的長條圖說「統計上顯著」：流程是把一組植株混成一管、讀三次，所以每個星號都是技術重複。也不要用 70% 葉綠素、8.7 倍海藻糖、或「多 3 公分根長」。'
},

/* ──────────────────────────────────────────────────────────── 4 */
{
  speaker: 'jacquelyn', budget: 55, layout: 'trio',
  kicker_en: 'Result 3 · measurement', kicker_zh: '結果三 · 量測',
  title_en: 'We wrote down what the instrument should do <em>before</em> we tested it.',
  title_zh: '我們在測試<em>之前</em>，先寫下這台儀器應該做到什麼。',
  steps: [
    { en: 'The gates, provoked with bubbles. 2.44 down to 0.016.',
      zh: '先講接受閘，用氣泡挑戰它。2.44 降到 0.016。' },
    { en: 'The out-of-sample test. Same rig, six days later, gate written down beforehand.',
      zh: '再講樣本外驗證。同一台裝置、六天後，而閘是事先寫好的。' },
    { en: 'Against the commercial instrument. Slope one point zero zero one, nothing fitted.',
      zh: '最後對照商用儀器。斜率 1.001，沒有套用任何擬合。' }
  ],
  figs: [
    {
      src: 'https://static.igem.wiki/teams/6072/wiki/measurement/od600-gates-bubble-measurement.svg',
      head_en: 'Two acceptance gates, provoked with bubbles',
      head_zh: '兩道接受閘，刻意用氣泡挑戰',
      alt_en: 'Ungated and gated optical density traces during an eleven-minute bubble challenge.',
      alt_zh: '十一分鐘氣泡測試中，未過閘與過閘後的光密度軌跡。',
      n: '2.44 → 0.016 <small>OD</small>',
      note_en: 'worst bubble error, before and after. The spread gate caught 97% of disturbed readings and withheld under 0.6% of valid ones.',
      note_zh: '氣泡造成的最大誤差，過閘前後。離散度閘抓到 97% 的受擾讀值，只扣住不到 0.6% 的有效讀值。'
    },
    {
      src: 'https://static.igem.wiki/teams/6072/wiki/measurement/od600-run-gate-measurement.svg',
      f: 2,
      head_en: 'The out-of-sample test: same rig, six days later',
      head_zh: '樣本外驗證：同一台裝置，六天後',
      alt_en: 'Two bars comparing the readable portion of the record with the gate off and on.',
      alt_zh: '兩條長條圖，比較關閉與開啟接受閘時，紀錄中可讀取的比例。',
      n: '41.8 <small>h, no restart</small>',
      note_en: 'readable as a growth curve to 37 h, 31 of 1083 readings held back, reference channel within 17% against a factor of 4.8 ungated.',
      note_zh: '到 37 小時都能當成長曲線讀，1083 個讀值中扣住 31 個，參考光道變異在 17% 以內，而未過閘那次是 4.8 倍。'
    },
    {
      src: 'https://static.igem.wiki/teams/6072/wiki/measurement/od600-silica-window-measurement.svg',
      f: 3,
      head_en: 'Against a commercial instrument, no transform fitted',
      head_zh: '對照商用儀器，未套用任何轉換',
      alt_en: 'Three fitted lines on one axis: both photometer builds and the BioDrop against silica dose.',
      alt_zh: '同一座標上的三條擬合線：兩款自製光度計與 BioDrop 對矽球劑量。',
      n: 'slope 1.001',
      note_en: 'against a BioDrop on the iGEM silica protocol, median paired difference 3.8%, a constant 0.12 OD offset, nothing corrected.',
      note_zh: '依 iGEM 矽球標準流程對照 BioDrop，配對差異中位數 3.8%，固定偏移 0.12 OD，未做任何校正。'
    }
  ],
  caveat_en: 'Silica calibrates the instrument, not the organism. A washed-cell dilution series is still owed, and the working limit is about OD 2.5.',
  caveat_zh: '矽球校正的是儀器，不是生物體。洗菌稀釋序列還沒做，而工作上限約為 OD 2.5。',
  say_en: 'My result is the instrument, and what matters is the order we did things in. We built an in-line photometer that reads cell density in the loop without withdrawing a sample. Before the first calibration measurement we committed eleven algorithms and eight numerical predictions to the repository, with the selection rule. Then we tested. <em>Five of the eight failed</em>, including the one we were most confident about, and they are published with the three that passed. The gates that survived cut the worst bubble error from two point four four optical density units to nought point one six, and we tested them out of sample on the next run: forty-one hours, no restart, thirty-one readings of one thousand and eighty-three held back. Against a commercial BioDrop, our slope is one point zero zero one, with nothing fitted.',
  say_zh: '我負責的結果是儀器，而重點是我們做事的順序。我們做了一台在線光度計，不取樣就能讀出迴路中的菌體密度。在第一次校正量測之前，我們先把十一個演算法、八項定量預測，連同選擇規則，提交到版本庫。然後才開始測。<em>八項預測中有五項失敗</em>，包括我們最看好的那一項，而它們和通過的三項一起公開。存活下來的接受閘把氣泡造成的最大誤差從 2.44 個光密度單位降到 0.016。接著我們在下一次運轉做樣本外驗證：41 小時、沒有重啟、1083 個讀值中扣住 31 個。而對照商用 BioDrop，我們的斜率是 1.001，沒有套用任何擬合。',
  watch_en: 'If asked why run 6 was cleaner than run 5: two things changed at once, the gate went on and the permeate draw was halved from 24 to 12 mL/min, so the clean record cannot be credited to the gate alone. Say that before they find it.',
  watch_zh: '如果被問為什麼第 6 次比第 5 次乾淨：同時改了兩件事，接受閘開啟、而且透過液抽取從 24 降到 12 mL/min，所以乾淨的紀錄不能全歸功於接受閘。要在他們找到之前先說。'
},

/* ──────────────────────────────────────────────────────────── 5 */
{
  speaker: 'jacquelyn', budget: 40, layout: 'trio',
  kicker_en: 'Result 3 continued · hardware', kicker_zh: '結果三續 · 硬體',
  title_en: 'Three days unattended, nothing from the permeate, and <em>an outsider built our photometer</em>.',
  title_zh: '三天無人看管、透過液什麼也沒長，而且<em>隊外的人做出了我們的光度計</em>。',
  steps: [
    { en: 'The October run. The pressure trip never fired; the dosing broke and you say so.',
      zh: '先講十月那次運轉。壓力跳脫從未觸發；加鹼壞掉了，而你要講出來。' },
    { en: 'Containment. Two plates, and the words "preliminary evidence", not "efficiency".',
      zh: '再講圍阻。兩盤，而且要說「初步證據」，不要說「效率」。' },
    { en: 'The outside builder. This is the one to ask them to weigh.',
      zh: '最後講隊外的建造者。這一點要請他們特別衡量。' }
  ],
  figs: [
    {
      src: 'https://static.igem.wiki/teams/6072/wiki/engineering/rig-int4-growth-ph-engineering.webp',
      nat: [1500, 975],
      head_en: 'The October run, growth above and pH below',
      head_zh: '十月那次運轉，上為生長、下為 pH',
      alt_en: 'Growth curve over 77 hours with the pH trace beneath it, each sharp rise a base addition.',
      alt_zh: '77 小時的生長曲線，下方是 pH 軌跡，每次急升都是一次加鹼。',
      n: '77 <small>h</small>',
      note_en: 'OD600 to 3.34, the 0.70 bar pressure trip armed throughout and never needed, peak 0.57 bar. The later spikes are a person with a pipette, once a day, after the KOH broke four valves.',
      note_zh: 'OD600 達 3.34，0.70 bar 壓力跳脫全程啟用且從未觸發，最高 0.57 bar。後面那幾個尖峰是人每天用移液管加一次，因為 KOH 已經腐蝕掉四個閥。',
      /* one mark per pane: at this size a second label collides with the first,
         and the rest of the story is in the note underneath */
      marks: [
        { kind: 'band', x: 17, y: 64, w: 6, h: 26 },
        { kind: 'lab', x: 40, y: 70, t_en: 'automatic, first night', t_zh: '自動加鹼，第一晚' }
      ]
    },
    {
      src: 'https://static.igem.wiki/teams/6072/wiki/hardware/bioreactor/containment-plates-bioreactor.webp',
      f: 2,
      head_en: 'Lumen side, shell side, plated together',
      head_zh: '管內側與殼側，一起塗盤',
      alt_en: 'Two plates side by side: colonies on the lumen-side sample, none on the shell side.',
      alt_zh: '兩盤併排：管內側樣本有菌落，殼側沒有。',
      n: '0.2 <small>µm</small>',
      note_en: 'pore against cells 0.8 to 2.0 µm wide. Two plates, no replicates, no log reduction: preliminary evidence of retention, not a validated efficiency.',
      note_zh: '孔徑對比寬 0.8 至 2.0 µm 的細胞。兩盤、無重複、未測對數去除率：這是圍阻的初步證據，不是已驗證的效率。'
    },
    {
      src: 'https://static.igem.wiki/teams/6072/wiki/measurement/photometer-two-builds-measurement.webp',
      f: 3,
      head_en: 'Two builds, and a third party who had never seen the rig',
      head_zh: '兩種版本，以及三位沒看過這台裝置的人',
      alt_en: 'The Pro and Slim photometer builds rendered at the same scale.',
      alt_zh: 'Pro 與 Slim 兩款光度計以相同比例呈現。',
      n: 'US$235',
      note_en: 'the simplified build, against US$372 for the first and about US$470 for the benchtop instrument. Three classmates built it from the guide in two days and sent back three corrections.',
      note_zh: '簡化版的成本，第一版 372 美元，桌上型儀器約 470 美元。三位同學照手冊在兩天內做出來，並回報三處修正。'
    }
  ],
  caveat_en: 'The rig is one hand-built unit. The 400 by 240 by 620 mm product version in the brochure has not been built.',
  caveat_zh: '這台裝置是手工組裝的單一台。手冊裡那台 400 × 240 × 620 mm 的產品版本還沒做出來。',
  say_en: 'Three things about the hardware. It ran seventy-seven hours in October to optical density three point three, with a pressure trip armed throughout that never fired. Automatic base dosing worked, logged fifty-three doses, then the potassium hydroxide corroded four valves in a row and we finished with a pipette each morning. Second, nothing grew from the permeate side: preliminary evidence of retention, not an efficiency. Third, and please weigh this one: three classmates who are not on the team built the simplified photometer from our guide in two days, and sent back three corrections to it.',
  say_zh: '硬體講三件事。十月那次運轉 77 小時、光密度達到 3.3，壓力跳脫全程啟用而從未觸發。自動加鹼有效、記錄了 53 次，然後氫氧化鉀連續腐蝕四個閥，後半段我們是每天早上用移液管完成的。第二，殼側長不出任何東西：這是圍阻的初步證據，不是效率。第三，也請各位特別衡量這一點：三位不在隊上的同學，照我們的手冊在兩天內做出了簡化版光度計，並回報三處修正。',
  watch_en: 'Do not quote a transmembrane pressure for this rig. Our own measurement page says the permeate channel is not in those tables, so no TMP has been computed from it. Lumen pressure drop is what we measured.',
  watch_zh: '不要為這台裝置引用跨膜壓差。我們自己的量測頁寫著那些表裡沒有透過液通道，所以從這台還算不出 TMP。我們量到的是管腔壓降。'
},

/* ──────────────────────────────────────────────────────────── 6 */
{
  speaker: 'jacquelyn', budget: 30, layout: 'ledger',
  kicker_en: 'What is joined, and what is not', kicker_zh: '什麼接起來了，什麼還沒',
  title_en: 'Every stage works on its own. <em>Two joints between them are still open.</em>',
  title_zh: '每一個階段單獨都能運作。<em>它們之間有兩個接點還沒接上。</em>',
  steps: [
    { en: 'What is shown. Four ticks, read fast, no elaboration.',
      zh: '先講已經證明的。四個勾，唸快一點，不要展開。' },
    { en: 'What is open. Slow down here. This is the part that buys the room.',
      zh: '再講還沒接上的。這裡放慢。這一段才是換到信任的地方。' },
    { en: 'The ask. Say it, stop, and look up.',
      zh: '最後是邀請。講完、停住、抬頭看評審。' }
  ],
  done: {
    head_en: 'Shown, with the data on the wiki',
    head_zh: '已經證明，資料都在 wiki 上',
    items: [
      { text_en: '<b>Produce.</b> Three protectants secreted; active enzyme recovered cell-free for 72 h', text_zh: '<b>生產。</b>三種保護蛋白都有分泌；在無細胞條件下回收到有活性的酵素，持續 72 小時' },
      { text_en: '<b>Contain.</b> No colonies from the permeate, across two platings', text_zh: '<b>圍阻。</b>兩次塗盤，透過液都沒有長出菌落' },
      { text_en: '<b>Monitor.</b> A pre-registered instrument, tested out of sample', text_zh: '<b>監測。</b>一台事先登錄規格的儀器，並做過樣本外驗證' },
      { text_en: '<b>Protect.</b> One hydroponic run against a strain-matched control', text_zh: '<b>保護。</b>一次水耕試驗，對照同株但不產蛋白的培養液' }
    ]
  },
  open: {
    head_en: 'Not joined yet, and we will say so first',
    head_zh: '還沒接起來，而我們會自己先說',
    items: [
      { text_en: '<b>The forecast has never driven the light.</b> Our models run on recorded data and a person decides', text_zh: '<b>預報從未真正驅動過光源。</b>我們的模型跑在已錄製的資料上，由人做決定' },
      { text_en: '<b>No plant run is tied to an activity assay of the batch that was actually sprayed.</b>', text_zh: '<b>沒有任何一次植物試驗，能連結到實際噴上去那一批的活性測定。</b>' },
      { text_en: '<b>Light control is not demonstrated.</b> Green leads red at 13 h and the order inverts by 16 h', text_zh: '<b>光控制尚未被證明。</b>13 小時綠光領先紅光，到 16 小時順序就反轉了' }
    ]
  },
  ask_en: 'Those two joints are what next year starts with. They are also the results we would most like your questions on.',
  ask_zh: '這兩個接點就是明年的起點。它們也是我們最希望聽到各位提問的部分。',
  say_en: 'To close. Every stage works and we can show it, and two joints between them are open. The forecast has never driven the light: our models run on recorded data and a person decides. And no plant run is tied to an activity assay of the batch that was sprayed. Those two joints are what next year starts with, and they are the results we would most like your questions on.',
  say_zh: '最後收個尾。每一個階段都能運作、也都展示得出來，而它們之間有兩個接點還沒接上。預報從來沒有真正驅動過光源：我們的模型跑在已錄製的資料上，由人做決定。而且沒有任何一次植物試驗，能連結到實際噴上去那一批的活性測定。這兩個接點就是明年的起點，也是我們最希望聽到各位提問的部分。',
  watch_en: 'End on the sentence, then stop and look up. Do not add "that is all" or "thank you for listening". The silence is the handover.',
  watch_zh: '講完那句話就停下來、抬頭看評審。不要再加「以上」或「謝謝聆聽」。那個停頓本身就是交棒。'
}

]
};
