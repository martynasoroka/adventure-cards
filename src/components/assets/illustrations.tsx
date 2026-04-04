// Each SVG uses viewBox="0 0 400 300" (4:3) and preserveAspectRatio="xMidYMid slice"
// so it fills the card container edge-to-edge in any aspect ratio.

const s = {
  viewBox: "0 0 400 300",
  width: "100%",
  height: "100%",
  preserveAspectRatio: "xMidYMid slice" as const,
  xmlns: "http://www.w3.org/2000/svg",
};

export const Illustrations = {

  // ─── 1. HIDDEN PATH ────────────────────────────────────────────────────────
  hiddenPath: (
    <svg {...s}>
      {/* Dark forest with glowing tunnel into light */}
      <rect width="400" height="300" fill="#2A3525" />
      {/* Distant light at end of tunnel */}
      <ellipse cx="200" cy="138" rx="105" ry="90" fill="#8FBF78" />
      <ellipse cx="200" cy="142" rx="68" ry="60" fill="#C0DCA0" />
      <ellipse cx="200" cy="146" rx="38" ry="36" fill="#EEF0C0" opacity="0.95" />
      {/* Dirt path in perspective */}
      <path d="M150 300 L250 300 L224 150 L176 150" fill="#9E8060" />
      <path d="M163 300 L237 300 L217 168 L183 168" fill="#B09878" opacity="0.35" />
      {/* Ground flanking path */}
      <path d="M0 300 L150 300 L176 150 L0 85" fill="#3B4537" />
      <path d="M400 300 L250 300 L224 150 L400 85" fill="#3B4537" />
      {/* Mid-distance trees left */}
      <rect x="58" y="105" width="18" height="195" rx="4" fill="#45392C" />
      <path d="M22 100 Q67 62 112 100 Q122 178 112 300 L58 300 Q46 205 22 100" fill="#3B4537" />
      {/* Mid-distance trees right */}
      <rect x="324" y="105" width="18" height="195" rx="4" fill="#45392C" />
      <path d="M378 100 Q333 62 288 100 Q278 178 288 300 L342 300 Q354 205 378 100" fill="#3B4537" />
      {/* Foreground trees left — dark, large */}
      <rect x="-12" y="5" width="48" height="295" rx="6" fill="#3A2E22" />
      <path d="M-42 -8 Q18 -30 78 -8 Q98 85 78 300 L-12 300 Q-32 185 -42 -8" fill="#283020" />
      {/* Foreground trees right */}
      <rect x="364" y="5" width="48" height="295" rx="6" fill="#3A2E22" />
      <path d="M442 -8 Q382 -30 322 -8 Q302 85 322 300 L412 300 Q432 185 442 -8" fill="#283020" />
      {/* Dappled light on path */}
      <ellipse cx="194" cy="212" rx="15" ry="7" fill="#D8C870" opacity="0.22" />
      <ellipse cx="207" cy="256" rx="10" ry="5" fill="#D8C870" opacity="0.18" />
      <ellipse cx="198" cy="280" rx="18" ry="6" fill="#D8C870" opacity="0.14" />
      {/* Undergrowth at path edges */}
      <path d="M153 275 Q141 258 150 243 Q157 258 153 275" fill="#3B4537" />
      <path d="M149 292 Q133 268 146 250 Q156 270 149 292" fill="#2A3525" />
      <path d="M247 275 Q259 258 250 243 Q243 258 247 275" fill="#3B4537" />
      <path d="M251 292 Q267 268 254 250 Q244 270 251 292" fill="#2A3525" />
      {/* Tiny distant figure */}
      <ellipse cx="200" cy="156" rx="3" ry="5" fill="#3A2E22" opacity="0.7" />
    </svg>
  ),

  // ─── 2. TREE MEDITATION ────────────────────────────────────────────────────
  treeMediation: (
    <svg {...s}>
      {/* Soft sky */}
      <rect width="400" height="300" fill="#C2D8EC" />
      {/* Rolling ground */}
      <path d="M0 205 Q100 175 200 188 Q300 170 400 185 L400 300 L0 300" fill="#6A8A52" />
      <path d="M0 228 Q80 212 180 220 Q280 208 400 218 L400 300 L0 300" fill="#506840" />
      <rect y="258" width="400" height="42" fill="#3B4537" />
      {/* Roots spreading from trunk */}
      <path d="M183 298 Q178 272 162 252 Q178 265 180 288" fill="#45392C" />
      <path d="M218 298 Q223 272 238 252 Q222 265 220 288" fill="#45392C" />
      <path d="M193 296 Q183 258 168 232" fill="#3A2E22" opacity="0.65" />
      <path d="M207 296 Q217 258 232 232" fill="#3A2E22" opacity="0.65" />
      <path d="M200 295 Q200 265 200 240" fill="#3A2E22" opacity="0.4" />
      {/* Trunk — wide, ancient */}
      <path d="M174 300 Q168 245 163 182 Q166 152 200 142 Q234 152 237 182 Q232 245 226 300" fill="#5A4535" />
      <path d="M181 300 Q179 245 177 182 Q179 162 200 157 Q221 162 223 182 Q221 245 219 300" fill="#6B5545" />
      {/* Bark texture */}
      <path d="M184 238 Q182 208 184 178" fill="none" stroke="#45392C" strokeWidth="1.5" opacity="0.35" />
      <path d="M196 250 Q194 220 196 190" fill="none" stroke="#45392C" strokeWidth="1" opacity="0.28" />
      <path d="M210 240 Q212 210 210 178" fill="none" stroke="#45392C" strokeWidth="1.5" opacity="0.35" />
      {/* Branches */}
      <path d="M200 145 Q158 122 118 90 Q143 126 155 157" fill="#45392C" />
      <path d="M200 145 Q242 122 282 90 Q257 126 245 157" fill="#45392C" />
      <path d="M198 158 Q168 138 143 116" fill="#3A2E22" opacity="0.8" />
      <path d="M202 158 Q232 138 257 116" fill="#3A2E22" opacity="0.8" />
      <path d="M200 152 Q220 130 248 108" fill="#3A2E22" opacity="0.5" />
      <path d="M200 152 Q180 130 152 108" fill="#3A2E22" opacity="0.5" />
      {/* Canopy — large organic shape */}
      <path d="M200 38 Q242 18 278 44 Q315 28 322 68 Q342 80 332 112 Q348 132 326 148 Q332 172 312 168 Q302 188 280 177 Q266 198 246 184 Q232 202 212 190 Q200 202 188 190 Q168 202 154 184 Q134 177 120 168 Q98 172 104 148 Q82 132 98 112 Q88 80 108 68 Q115 28 160 44 Q172 20 200 38" fill="#3B4537" />
      {/* Inner canopy — lighter */}
      <path d="M200 62 Q228 48 254 64 Q276 55 278 80 Q294 90 282 112 Q288 128 272 134 Q268 148 250 140 Q240 152 222 144 Q212 154 200 148 Q188 154 178 144 Q160 152 150 140 Q132 134 118 112 Q106 90 122 80 Q124 55 146 64 Q170 48 200 62" fill="#4A6040" />
      {/* Canopy highlights */}
      <circle cx="232" cy="78" r="9" fill="#5E7A4A" opacity="0.65" />
      <circle cx="168" cy="88" r="7" fill="#5E7A4A" opacity="0.65" />
      <circle cx="258" cy="108" r="6" fill="#6A8A52" opacity="0.55" />
      <circle cx="148" cy="112" r="5" fill="#6A8A52" opacity="0.5" />
      {/* Light ray through canopy */}
      <path d="M202 148 L197 262" fill="none" stroke="#F0E8A0" strokeWidth="14" opacity="0.06" />
      {/* Person sitting at base */}
      <ellipse cx="183" cy="266" rx="13" ry="11" fill="#855119" />
      <circle cx="183" cy="253" r="8" fill="#C8A880" />
      {/* Hair */}
      <path d="M175 249 Q183 241 191 249" fill="#45392C" />
      {/* Crossed legs */}
      <path d="M177 276 Q166 283 160 278 Q168 280 177 276" fill="#855119" />
      <path d="M190 276 Q200 283 206 278 Q198 280 190 276" fill="#855119" />
      {/* Arms resting on knees */}
      <path d="M173 263 Q162 270 159 277" fill="none" stroke="#855119" strokeWidth="5.5" strokeLinecap="round" />
      <path d="M193 263 Q204 270 207 277" fill="none" stroke="#855119" strokeWidth="5.5" strokeLinecap="round" />
      {/* Hands */}
      <circle cx="158" cy="278" r="4.5" fill="#C8A880" />
      <circle cx="208" cy="278" r="4.5" fill="#C8A880" />
      {/* Grass around base */}
      <path d="M138 258 Q141 247 144 258" fill="none" stroke="#506840" strokeWidth="2" strokeLinecap="round" />
      <path d="M143 261 Q146 249 149 261" fill="none" stroke="#3B4537" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M222 258 Q225 247 228 258" fill="none" stroke="#506840" strokeWidth="2" strokeLinecap="round" />
      <path d="M227 261 Q230 249 233 261" fill="none" stroke="#3B4537" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),

  // ─── 3. WATER CONNECTION ───────────────────────────────────────────────────
  waterConnection: (
    <svg {...s}>
      {/* Sky */}
      <rect width="400" height="300" fill="#B8D4E8" />
      {/* Distant treeline */}
      <path d="M0 152 Q40 128 80 142 Q120 122 160 138 Q200 118 240 136 Q280 120 320 133 Q360 126 400 138 L400 168 L0 168" fill="#3B4537" />
      {/* Water surface */}
      <path d="M0 168 Q100 158 200 165 Q300 157 400 163 L400 300 L0 300" fill="#486464" />
      {/* Water colour variation — depth */}
      <path d="M0 220 Q100 210 200 216 Q300 208 400 214 L400 300 L0 300" fill="#3A5555" />
      {/* Shimmer lines */}
      <path d="M48 184 Q82 180 116 184" fill="none" stroke="#6A8888" strokeWidth="1.5" opacity="0.55" />
      <path d="M78 200 Q122 196 166 200" fill="none" stroke="#6A8888" strokeWidth="1.5" opacity="0.45" />
      <path d="M198 187 Q242 183 282 187" fill="none" stroke="#6A8888" strokeWidth="1.5" opacity="0.55" />
      <path d="M258 203 Q302 198 342 203" fill="none" stroke="#6A8888" strokeWidth="1.5" opacity="0.45" />
      <path d="M28 218 Q72 213 112 218" fill="none" stroke="#6A8888" strokeWidth="1" opacity="0.35" />
      <path d="M148 222 Q202 217 256 222" fill="none" stroke="#6A8888" strokeWidth="1" opacity="0.35" />
      <path d="M300 215 Q348 210 390 215" fill="none" stroke="#6A8888" strokeWidth="1" opacity="0.3" />
      {/* Lily pad 1 */}
      <ellipse cx="128" cy="228" rx="26" ry="11" fill="#3B4537" opacity="0.9" />
      <ellipse cx="131" cy="226" rx="22" ry="9" fill="#4A6040" />
      <path d="M131 226 L131 215" fill="none" stroke="#3B4537" strokeWidth="1" opacity="0.6" />
      {/* Water lily on pad 1 */}
      <circle cx="132" cy="223" r="7" fill="white" opacity="0.92" />
      <ellipse cx="132" cy="223" rx="5" ry="6" fill="#F8F0E0" />
      <circle cx="132" cy="223" r="2.5" fill="#F0C040" />
      {/* Lily pad 2 */}
      <ellipse cx="290" cy="243" rx="21" ry="9" fill="#3B4537" opacity="0.9" />
      <ellipse cx="293" cy="241" rx="17" ry="7" fill="#4A6040" />
      {/* Lily pad 3 - smaller */}
      <ellipse cx="158" cy="260" rx="14" ry="6" fill="#4A6040" />
      {/* Reeds left */}
      <line x1="26" y1="300" x2="22" y2="158" stroke="#45392C" strokeWidth="3" strokeLinecap="round" />
      <line x1="36" y1="300" x2="34" y2="153" stroke="#45392C" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="18" y1="300" x2="14" y2="163" stroke="#45392C" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="22" cy="158" rx="5.5" ry="13" fill="#6B5040" />
      <ellipse cx="34" cy="153" rx="4.5" ry="11" fill="#6B5040" />
      <ellipse cx="14" cy="163" rx="3.5" ry="9" fill="#6B5040" />
      {/* Reed leaves left */}
      <path d="M28 218 Q46 212 52 223 Q36 224 28 218" fill="#506840" />
      <path d="M24 196 Q46 188 52 200 Q36 200 24 196" fill="#3B4537" />
      {/* Reeds right */}
      <line x1="372" y1="300" x2="376" y2="160" stroke="#45392C" strokeWidth="3" strokeLinecap="round" />
      <line x1="362" y1="300" x2="364" y2="156" stroke="#45392C" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="376" cy="160" rx="5.5" ry="13" fill="#6B5040" />
      <ellipse cx="364" cy="156" rx="4.5" ry="11" fill="#6B5040" />
      <path d="M372 212 Q356 206 350 217 Q366 217 372 212" fill="#506840" />
      {/* Stones at water's edge */}
      <ellipse cx="222" cy="170" rx="20" ry="8" fill="#7A7068" />
      <ellipse cx="226" cy="168" rx="16" ry="6" fill="#9A9088" />
      <ellipse cx="78" cy="173" rx="15" ry="6" fill="#7A7068" />
      <ellipse cx="81" cy="171" rx="12" ry="4.5" fill="#9A9088" />
      {/* Concentric ripples */}
      <circle cx="200" cy="210" r="18" fill="none" stroke="#6A8888" strokeWidth="1" opacity="0.48" />
      <circle cx="200" cy="210" r="32" fill="none" stroke="#6A8888" strokeWidth="0.8" opacity="0.3" />
      <circle cx="200" cy="210" r="48" fill="none" stroke="#6A8888" strokeWidth="0.6" opacity="0.18" />
      {/* Sky reflection */}
      <path d="M100 172 Q200 169 300 171" fill="none" stroke="#B8D4E8" strokeWidth="2" opacity="0.28" />
    </svg>
  ),

  // ─── 4. WILDLIFE SPOTTING ──────────────────────────────────────────────────
  wildlifeSpotting: (
    <svg {...s}>
      {/* Sky */}
      <rect width="400" height="300" fill="#C2D8EE" />
      {/* Distant hills */}
      <path d="M0 178 Q80 140 160 162 Q240 135 320 158 Q360 145 400 154 L400 300 L0 300" fill="#7A9B5A" />
      <path d="M0 208 Q60 192 130 203 Q200 188 270 200 Q340 192 400 198 L400 300 L0 300" fill="#5A7A4A" />
      <rect y="250" width="400" height="50" fill="#3B4537" />
      {/* Background trees */}
      <rect x="28" y="128" width="14" height="82" rx="3" fill="#45392C" />
      <path d="M8 125 Q35 102 62 125 Q68 172 62 210 L28 210 Q20 178 8 125" fill="#3B4537" />
      <rect x="352" y="118" width="15" height="92" rx="3" fill="#45392C" />
      <path d="M328 115 Q360 90 392 115 Q400 167 392 210 L352 210 Q342 172 328 115" fill="#3B4537" />
      <rect x="298" y="138" width="12" height="72" rx="3" fill="#45392C" />
      <path d="M278 135 Q304 114 330 135 Q336 174 330 210 L298 210 Q290 178 278 135" fill="#4A6040" />
      {/* Deer silhouette */}
      <ellipse cx="218" cy="220" rx="30" ry="17" fill="#6B5040" />
      <path d="M230 207 Q238 194 236 180" fill="none" stroke="#6B5040" strokeWidth="13" strokeLinecap="round" />
      <ellipse cx="236" cy="176" rx="11" ry="8" fill="#6B5040" />
      {/* Deer ears */}
      <path d="M230 172 Q225 161 230 166" fill="#6B5040" />
      <path d="M242 172 Q248 161 243 166" fill="#6B5040" />
      {/* Antlers */}
      <path d="M234 170 L230 153 L226 146" fill="none" stroke="#45392C" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M230 153 L234 146" fill="none" stroke="#45392C" strokeWidth="2" strokeLinecap="round" />
      <path d="M238 170 L242 153 L246 146" fill="none" stroke="#45392C" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M242 153 L238 146" fill="none" stroke="#45392C" strokeWidth="2" strokeLinecap="round" />
      {/* Deer legs */}
      <line x1="204" y1="233" x2="201" y2="252" stroke="#5A4030" strokeWidth="5.5" strokeLinecap="round" />
      <line x1="214" y1="236" x2="212" y2="254" stroke="#5A4030" strokeWidth="5.5" strokeLinecap="round" />
      <line x1="228" y1="236" x2="228" y2="254" stroke="#5A4030" strokeWidth="5.5" strokeLinecap="round" />
      <line x1="238" y1="234" x2="240" y2="252" stroke="#5A4030" strokeWidth="5.5" strokeLinecap="round" />
      {/* Birds in sky */}
      <path d="M78 78 Q86 71 94 78" fill="none" stroke="#45392C" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M94 78 Q102 71 110 78" fill="none" stroke="#45392C" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M148 54 Q155 48 162 54" fill="none" stroke="#45392C" strokeWidth="2" strokeLinecap="round" />
      <path d="M162 54 Q169 48 176 54" fill="none" stroke="#45392C" strokeWidth="2" strokeLinecap="round" />
      <path d="M238 68 Q244 63 250 68" fill="none" stroke="#45392C" strokeWidth="2" strokeLinecap="round" />
      <path d="M250 68 Q256 63 262 68" fill="none" stroke="#45392C" strokeWidth="2" strokeLinecap="round" />
      <path d="M310 42 Q320 34 330 42" fill="none" stroke="#45392C" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M330 42 Q340 34 350 42" fill="none" stroke="#45392C" strokeWidth="2.8" strokeLinecap="round" />
      {/* Butterfly */}
      <path d="M143 192 Q136 181 143 186 Q150 181 143 192" fill="#855119" opacity="0.82" />
      <path d="M143 192 Q136 201 143 196 Q150 201 143 192" fill="#C87A30" opacity="0.82" />
      <circle cx="143" cy="192" r="2" fill="#45392C" />
      {/* Wildflowers foreground */}
      <line x1="52" y1="252" x2="52" y2="265" stroke="#3B4537" strokeWidth="1.5" />
      <circle cx="52" cy="252" r="5" fill="#F0C040" />
      <line x1="82" y1="255" x2="82" y2="267" stroke="#3B4537" strokeWidth="1.5" />
      <circle cx="82" cy="255" r="4" fill="white" />
      <circle cx="82" cy="255" r="2" fill="#F0C840" />
      <line x1="322" y1="253" x2="322" y2="265" stroke="#3B4537" strokeWidth="1.5" />
      <circle cx="322" cy="253" r="5" fill="#C850A0" />
      <line x1="358" y1="256" x2="358" y2="268" stroke="#3B4537" strokeWidth="1.5" />
      <circle cx="358" cy="256" r="4" fill="#F0C040" />
    </svg>
  ),

  // ─── 5. BAREFOOT WALKING ───────────────────────────────────────────────────
  barefootWalking: (
    <svg {...s}>
      {/* Rich soil / earth close-up */}
      <rect width="400" height="300" fill="#5C4830" />
      <rect y="155" width="400" height="145" fill="#45392C" />
      {/* Grass layer */}
      <path d="M0 185 Q100 172 200 179 Q300 170 400 177 L400 205 L0 205" fill="#3B4537" />
      {/* Grass blades — manual for perf */}
      <path d="M5 200 Q3 182 7 168" fill="none" stroke="#506840" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M16 198 Q19 178 23 162" fill="none" stroke="#3B4537" strokeWidth="2" strokeLinecap="round" />
      <path d="M28 200 Q25 180 29 163" fill="none" stroke="#5A7A4A" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M40 202 Q44 182 47 167" fill="none" stroke="#3B4537" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M55 198 Q52 178 56 162" fill="none" stroke="#506840" strokeWidth="2" strokeLinecap="round" />
      <path d="M68 200 Q72 182 76 165" fill="none" stroke="#3B4537" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M82 202 Q79 180 83 163" fill="none" stroke="#5A7A4A" strokeWidth="2" strokeLinecap="round" />
      <path d="M96 198 Q100 180 104 165" fill="none" stroke="#3B4537" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M112 200 Q109 182 113 165" fill="none" stroke="#506840" strokeWidth="2" strokeLinecap="round" />
      <path d="M128 202 Q132 182 136 168" fill="none" stroke="#3B4537" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M144 200 Q141 181 145 165" fill="none" stroke="#5A7A4A" strokeWidth="2" strokeLinecap="round" />
      <path d="M160 202 Q164 182 168 167" fill="none" stroke="#3B4537" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M178 200 Q175 180 179 164" fill="none" stroke="#506840" strokeWidth="2" strokeLinecap="round" />
      <path d="M196 202 Q200 182 204 168" fill="none" stroke="#3B4537" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M214 200 Q211 180 215 164" fill="none" stroke="#5A7A4A" strokeWidth="2" strokeLinecap="round" />
      <path d="M232 202 Q236 183 240 167" fill="none" stroke="#3B4537" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M250 200 Q247 181 251 165" fill="none" stroke="#506840" strokeWidth="2" strokeLinecap="round" />
      <path d="M268 202 Q272 182 276 168" fill="none" stroke="#3B4537" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M286 200 Q283 181 287 165" fill="none" stroke="#5A7A4A" strokeWidth="2" strokeLinecap="round" />
      <path d="M304 202 Q308 183 312 168" fill="none" stroke="#3B4537" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M322 200 Q319 181 323 165" fill="none" stroke="#506840" strokeWidth="2" strokeLinecap="round" />
      <path d="M340 202 Q344 183 348 168" fill="none" stroke="#3B4537" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M358 200 Q355 181 359 165" fill="none" stroke="#5A7A4A" strokeWidth="2" strokeLinecap="round" />
      <path d="M374 202 Q378 183 382 168" fill="none" stroke="#3B4537" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M390 200 Q387 181 391 165" fill="none" stroke="#506840" strokeWidth="2" strokeLinecap="round" />
      {/* Wildflowers */}
      <line x1="58" y1="172" x2="58" y2="185" stroke="#3B4537" strokeWidth="1.5" />
      <circle cx="58" cy="171" r="4.5" fill="white" />
      <circle cx="58" cy="171" r="2.2" fill="#F0C840" />
      <line x1="178" y1="165" x2="178" y2="180" stroke="#3B4537" strokeWidth="1.5" />
      <circle cx="178" cy="164" r="4" fill="#C88050" />
      <circle cx="178" cy="164" r="2" fill="#F0C840" />
      <line x1="302" y1="168" x2="302" y2="181" stroke="#3B4537" strokeWidth="1.5" />
      <circle cx="302" cy="167" r="4.5" fill="#C86098" />
      <line x1="342" y1="165" x2="342" y2="178" stroke="#3B4537" strokeWidth="1.5" />
      <circle cx="342" cy="164" r="3.5" fill="white" />
      <circle cx="342" cy="164" r="1.8" fill="#F0C840" />
      {/* Left foot */}
      <path d="M108 252 Q106 215 120 204 Q146 196 162 208 Q170 217 167 252 L108 252" fill="#C8A880" />
      <ellipse cx="167" cy="206" rx="7.5" ry="5.5" fill="#C8A880" />
      <ellipse cx="158" cy="202" rx="6.5" ry="5" fill="#C8A880" />
      <ellipse cx="148" cy="200" rx="6.5" ry="4.5" fill="#C8A880" />
      <ellipse cx="138" cy="201" rx="6" ry="4.5" fill="#C8A880" />
      <ellipse cx="129" cy="204" rx="5" ry="4" fill="#C8A880" />
      {/* Toe nails */}
      <ellipse cx="167" cy="204" rx="3.8" ry="2.8" fill="#DDB898" opacity="0.55" />
      <ellipse cx="158" cy="200" rx="3.2" ry="2.4" fill="#DDB898" opacity="0.5" />
      {/* Foot arch shadow */}
      <path d="M114 248 Q117 232 127 226" fill="none" stroke="#A88860" strokeWidth="2" opacity="0.35" />
      {/* Right foot */}
      <path d="M232 262 Q230 222 244 210 Q270 201 286 215 Q295 224 291 262 L232 262" fill="#C8A880" />
      <ellipse cx="291" cy="213" rx="7.5" ry="5.5" fill="#C8A880" />
      <ellipse cx="282" cy="208" rx="6.5" ry="5" fill="#C8A880" />
      <ellipse cx="272" cy="206" rx="6.5" ry="4.5" fill="#C8A880" />
      <ellipse cx="262" cy="207" rx="6" ry="4.5" fill="#C8A880" />
      <ellipse cx="252" cy="211" rx="5" ry="4" fill="#C8A880" />
      <ellipse cx="291" cy="211" rx="3.8" ry="2.8" fill="#DDB898" opacity="0.55" />
      <ellipse cx="282" cy="206" rx="3.2" ry="2.4" fill="#DDB898" opacity="0.5" />
      {/* Ground shadows under feet */}
      <ellipse cx="138" cy="254" rx="30" ry="5" fill="#3A2A1A" opacity="0.28" />
      <ellipse cx="263" cy="264" rx="32" ry="5" fill="#3A2A1A" opacity="0.28" />
      {/* Grass growing through/around feet */}
      <path d="M105 252 Q103 236 107 222" fill="none" stroke="#506840" strokeWidth="2" strokeLinecap="round" />
      <path d="M170 208 Q174 192 178 180" fill="none" stroke="#3B4537" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M293 218 Q297 202 301 190" fill="none" stroke="#506840" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),

  // ─── 6. CLOUD WATCHING ─────────────────────────────────────────────────────
  cloudWatching: (
    <svg {...s}>
      {/* Blue sky */}
      <rect width="400" height="300" fill="#82BADA" />
      <rect width="400" height="140" fill="#A4C8E0" />
      {/* Clouds */}
      {/* Main large cloud */}
      <path d="M155 88 Q160 62 186 66 Q192 48 218 52 Q242 44 254 62 Q272 56 274 74 Q287 76 285 92 Q287 106 272 103 Q266 116 248 111 Q238 122 220 116 Q208 126 192 118 Q176 124 168 112 Q150 114 148 98 Q136 96 140 84 Q138 72 155 88" fill="white" opacity="0.96" />
      {/* Cloud inner shadow */}
      <path d="M156 96 Q165 88 192 92 Q222 86 256 90 Q270 90 270 100" fill="none" stroke="#C5DCEE" strokeWidth="3" opacity="0.45" />
      {/* Right cloud */}
      <path d="M292 58 Q298 44 316 47 Q328 40 340 50 Q354 46 354 60 Q362 64 359 74 Q354 82 340 80 Q332 88 320 83 Q308 87 302 79 Q290 78 290 68 Q286 60 292 58" fill="white" opacity="0.9" />
      {/* Left cloud */}
      <path d="M46 102 Q52 88 66 91 Q74 82 90 86 Q100 82 102 92 Q110 94 108 104 Q104 112 94 110 Q88 116 77 112 Q66 116 60 109 Q48 108 46 100" fill="white" opacity="0.85" />
      {/* Wispy upper right */}
      <path d="M332 32 Q343 25 358 28 Q370 22 375 32 Q384 32 381 41 Q375 46 364 44 Q354 48 344 44 Q332 44 330 37" fill="white" opacity="0.68" />
      {/* Wispy upper left */}
      <path d="M28 55 Q36 48 50 50 Q60 44 66 52 Q74 52 72 60 Q66 64 56 62 Q48 66 40 62 Q28 62 26 56" fill="white" opacity="0.6" />
      {/* Grass framing bottom of scene */}
      <path d="M0 268 Q100 253 200 260 Q300 250 400 258 L400 300 L0 300" fill="#3B4537" />
      <path d="M0 283 Q80 273 160 279 Q240 269 320 277 Q360 272 400 275 L400 300 L0 300" fill="#2A3525" />
      {/* Grass blades at edges */}
      <path d="M0 268 Q3 250 6 237" fill="none" stroke="#506840" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M11 268 Q15 252 19 240" fill="none" stroke="#3B4537" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 266 Q26 248 30 234" fill="none" stroke="#5A7A4A" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M390 264 Q387 246 383 234" fill="none" stroke="#506840" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M379 267 Q375 250 371 238" fill="none" stroke="#3B4537" strokeWidth="2" strokeLinecap="round" />
      <path d="M368 265 Q364 247 360 234" fill="none" stroke="#5A7A4A" strokeWidth="1.8" strokeLinecap="round" />
      {/* Person lying on grass, looking up */}
      <path d="M118 278 Q162 270 244 274 Q265 275 272 281 Q250 284 230 282 Q162 279 118 278" fill="#855119" />
      {/* Head */}
      <circle cx="106" cy="277" r="13" fill="#C8A880" />
      {/* Hair spread on grass */}
      <path d="M96 271 Q106 262 116 270 Q110 266 106 271" fill="#45392C" />
      {/* Arms out relaxed */}
      <path d="M158 276 Q152 266 144 260" fill="none" stroke="#855119" strokeWidth="8.5" strokeLinecap="round" />
      <path d="M200 275 Q206 265 214 259" fill="none" stroke="#855119" strokeWidth="8.5" strokeLinecap="round" />
      {/* Legs extended */}
      <path d="M270 280 Q298 278 315 280" fill="none" stroke="#855119" strokeWidth="11" strokeLinecap="round" />
      {/* Tiny birds in sky */}
      <path d="M198 46 Q203 41 208 46" fill="none" stroke="#486464" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M208 46 Q213 41 218 46" fill="none" stroke="#486464" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M348 72 Q352 68 356 72" fill="none" stroke="#486464" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M356 72 Q360 68 364 72" fill="none" stroke="#486464" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M68 68 Q72 64 76 68" fill="none" stroke="#486464" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M76 68 Q80 64 84 68" fill="none" stroke="#486464" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),

  // ─── 7. NATURAL COLORS HUNT ────────────────────────────────────────────────
  naturalColorsHunt: (
    <svg {...s}>
      {/* Bright sky */}
      <rect width="400" height="300" fill="#B2D8F2" />
      {/* Meadow layers */}
      <path d="M0 182 Q100 160 200 172 Q300 156 400 168 L400 300 L0 300" fill="#7A9B5A" />
      <path d="M0 210 Q100 196 200 203 Q300 193 400 200 L400 300 L0 300" fill="#5A7A4A" />
      <path d="M0 236 Q100 225 200 230 Q300 222 400 228 L400 300 L0 300" fill="#3B4537" />
      {/* Subtle arc guide (dashed, white) */}
      <path d="M138 152 Q155 118 172 106 Q186 96 200 93 Q214 96 228 106 Q246 118 262 152" fill="none" stroke="white" strokeWidth="1.2" opacity="0.35" strokeDasharray="5 4" />
      {/* RED — berries cluster */}
      <circle cx="138" cy="148" r="26" fill="#C83028" opacity="0.1" />
      <circle cx="145" cy="141" r="8" fill="#C83028" />
      <circle cx="133" cy="147" r="6.5" fill="#C83028" />
      <circle cx="140" cy="156" r="7" fill="#A82828" />
      <path d="M145 134 L145 128" fill="none" stroke="#45392C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M133 140 L131 134" fill="none" stroke="#45392C" strokeWidth="1.5" strokeLinecap="round" />
      {/* ORANGE — autumn leaf */}
      <circle cx="172" cy="118" r="24" fill="#D46020" opacity="0.1" />
      <path d="M172 106 Q184 111 188 121 Q184 132 172 135 Q160 132 156 121 Q160 111 172 106" fill="#D46020" />
      <line x1="172" y1="106" x2="172" y2="135" stroke="#855119" strokeWidth="1.5" opacity="0.7" />
      <path d="M172 112 L162 118 M172 118 L163 124 M172 124 L162 130" fill="none" stroke="#855119" strokeWidth="1" opacity="0.5" />
      <path d="M172 112 L182 118 M172 118 L181 124 M172 124 L182 130" fill="none" stroke="#855119" strokeWidth="1" opacity="0.5" />
      {/* YELLOW — sunflower */}
      <circle cx="200" cy="105" r="25" fill="#E8C020" opacity="0.1" />
      <circle cx="200" cy="105" r="10" fill="#F0C840" />
      <circle cx="200" cy="105" r="6" fill="#C89020" />
      <ellipse cx="200" cy="90" rx="5.5" ry="4" fill="#F0D840" />
      <ellipse cx="200" cy="120" rx="5.5" ry="4" fill="#F0D840" />
      <ellipse cx="185" cy="105" rx="4" ry="5.5" fill="#F0D840" />
      <ellipse cx="215" cy="105" rx="4" ry="5.5" fill="#F0D840" />
      <ellipse cx="189" cy="94" rx="4.5" ry="3.5" transform="rotate(-45 189 94)" fill="#F0D840" />
      <ellipse cx="211" cy="94" rx="4.5" ry="3.5" transform="rotate(45 211 94)" fill="#F0D840" />
      <ellipse cx="189" cy="116" rx="4.5" ry="3.5" transform="rotate(45 189 116)" fill="#F0D840" />
      <ellipse cx="211" cy="116" rx="4.5" ry="3.5" transform="rotate(-45 211 116)" fill="#F0D840" />
      {/* GREEN — fresh leaf */}
      <circle cx="228" cy="118" r="24" fill="#3B8020" opacity="0.1" />
      <path d="M228 106 Q242 111 246 122 Q242 134 228 138 Q218 135 216 122 Q220 111 228 106" fill="#5A8A3A" />
      <line x1="228" y1="106" x2="228" y2="138" stroke="#3B6020" strokeWidth="1.5" opacity="0.6" />
      <path d="M228 112 L218 118 M228 120 L220 126 M228 128 L219 133" fill="none" stroke="#3B6020" strokeWidth="1" opacity="0.5" />
      <path d="M228 112 L238 118 M228 120 L236 126 M228 128 L237 133" fill="none" stroke="#3B6020" strokeWidth="1" opacity="0.5" />
      {/* BLUE — blueberries */}
      <circle cx="256" cy="138" r="24" fill="#2840C0" opacity="0.1" />
      <circle cx="260" cy="131" r="7" fill="#3858C8" />
      <circle cx="249" cy="139" r="6" fill="#2848B8" />
      <circle cx="257" cy="147" r="7" fill="#3858C8" />
      <path d="M260 124 L260 118" fill="none" stroke="#45392C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M249 132 L247 126" fill="none" stroke="#45392C" strokeWidth="1.5" strokeLinecap="round" />
      {/* VIOLET — lavender sprig */}
      <circle cx="268" cy="160" r="24" fill="#6020A0" opacity="0.1" />
      <line x1="268" y1="175" x2="268" y2="145" stroke="#45392C" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="268" cy="153" rx="4.5" ry="6" fill="#8030C0" />
      <ellipse cx="262" cy="160" rx="4" ry="5.5" fill="#7028A8" />
      <ellipse cx="274" cy="160" rx="4" ry="5.5" fill="#8030C0" />
      <ellipse cx="265" cy="168" rx="3.5" ry="5" fill="#7028A8" />
      <ellipse cx="271" cy="168" rx="3.5" ry="5" fill="#8030C0" />
      {/* Wildflowers in meadow */}
      <line x1="30" y1="239" x2="30" y2="252" stroke="#3B4537" strokeWidth="1.5" />
      <circle cx="30" cy="238" r="5" fill="#C83028" />
      <line x1="56" y1="233" x2="56" y2="246" stroke="#3B4537" strokeWidth="1.5" />
      <circle cx="56" cy="232" r="4.5" fill="white" />
      <circle cx="56" cy="232" r="2.2" fill="#F0C840" />
      <line x1="80" y1="240" x2="80" y2="252" stroke="#3B4537" strokeWidth="1.5" />
      <circle cx="80" cy="239" r="5" fill="#F0C840" />
      <line x1="322" y1="237" x2="322" y2="249" stroke="#3B4537" strokeWidth="1.5" />
      <circle cx="322" cy="236" r="5" fill="#C85088" />
      <line x1="352" y1="239" x2="352" y2="252" stroke="#3B4537" strokeWidth="1.5" />
      <circle cx="352" cy="238" r="4.5" fill="white" />
      <circle cx="352" cy="238" r="2.2" fill="#F0C840" />
      <line x1="376" y1="234" x2="376" y2="247" stroke="#3B4537" strokeWidth="1.5" />
      <circle cx="376" cy="233" r="5" fill="#8030C0" />
    </svg>
  ),

  // ─── 8. SUNSET WALK ────────────────────────────────────────────────────────
  sunsetWalk: (
    <svg {...s}>
      {/* Night sky top */}
      <rect width="400" height="300" fill="#1A2235" />
      {/* Sky bands — warm sunset strata */}
      <path d="M0 0 L400 0 L400 82 L0 82" fill="#1E3A5A" />
      <path d="M0 42 Q200 30 400 42 L400 125 L0 125" fill="#2A5080" opacity="0.9" />
      <path d="M0 90 Q200 75 400 90 L400 150 L0 150" fill="#5A4A38" opacity="0.85" />
      <path d="M0 118 Q200 106 400 118 L400 172 L0 172" fill="#A06030" />
      <path d="M0 138 Q200 126 400 138 L400 172 L0 172" fill="#D07A30" />
      <path d="M0 155 Q200 144 400 155 L400 172 L0 172" fill="#E89840" />
      <path d="M0 164 Q200 155 400 164 L400 172 L0 172" fill="#F0B840" />
      {/* Sun disc */}
      <ellipse cx="200" cy="171" rx="44" ry="30" fill="#F0C840" />
      <ellipse cx="200" cy="174" rx="36" ry="23" fill="#F8E060" />
      {/* Sun glow rays */}
      <path d="M200 171 L108 130" fill="none" stroke="#F0C840" strokeWidth="1.2" opacity="0.18" />
      <path d="M200 171 L292 130" fill="none" stroke="#F0C840" strokeWidth="1.2" opacity="0.18" />
      <path d="M200 171 L55 150" fill="none" stroke="#F0C840" strokeWidth="0.8" opacity="0.12" />
      <path d="M200 171 L345 150" fill="none" stroke="#F0C840" strokeWidth="0.8" opacity="0.12" />
      <path d="M200 171 L28 105" fill="none" stroke="#F0C840" strokeWidth="0.6" opacity="0.08" />
      <path d="M200 171 L372 105" fill="none" stroke="#F0C840" strokeWidth="0.6" opacity="0.08" />
      {/* Sun path reflection on ground */}
      <path d="M168 172 Q200 177 232 172 L228 300 L172 300" fill="#D4A030" opacity="0.2" />
      {/* Ground */}
      <rect y="172" width="400" height="128" fill="#2A3525" />
      <path d="M0 172 Q100 167 200 170 Q300 165 400 168 L400 205 L0 205" fill="#3B4537" />
      <path d="M0 198 Q100 190 200 194 Q300 187 400 192 L400 220 L0 220" fill="#2A3525" />
      {/* Tree silhouettes */}
      <path d="M28 172 L26 115" fill="none" stroke="#12180E" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M24 115 Q28 88 40 78 Q52 88 48 115" fill="#12180E" />
      <path d="M38 102 Q40 78 50 68 Q60 78 58 102" fill="#12180E" />
      <path d="M95 172 L93 115" fill="none" stroke="#12180E" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M86 115 Q93 90 100 115" fill="#12180E" />
      <path d="M362 172 L360 98" fill="none" stroke="#12180E" strokeWidth="4" strokeLinecap="round" />
      <path d="M350 98 Q360 68 370 98" fill="#12180E" />
      <path d="M352 120 Q360 96 368 120" fill="#12180E" />
      <path d="M318 172 L316 128" fill="none" stroke="#12180E" strokeWidth="3" strokeLinecap="round" />
      <path d="M308 128 Q316 108 324 128" fill="#12180E" />
      {/* Walking person silhouette */}
      <circle cx="212" cy="183" r="7.5" fill="#0A0E08" />
      <path d="M212 191 L211 216" fill="none" stroke="#0A0E08" strokeWidth="5.5" strokeLinecap="round" />
      {/* Arm swing */}
      <path d="M211 200 Q201 208 196 217" fill="none" stroke="#0A0E08" strokeWidth="4" strokeLinecap="round" />
      <path d="M211 200 Q221 208 226 215" fill="none" stroke="#0A0E08" strokeWidth="4" strokeLinecap="round" />
      {/* Legs stride */}
      <path d="M211 216 Q205 228 201 238" fill="none" stroke="#0A0E08" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M211 216 Q218 228 221 238" fill="none" stroke="#0A0E08" strokeWidth="4.5" strokeLinecap="round" />
      {/* Stars */}
      <circle cx="78" cy="28" r="1.5" fill="white" opacity="0.7" />
      <circle cx="148" cy="14" r="1.2" fill="white" opacity="0.6" />
      <circle cx="312" cy="22" r="1.5" fill="white" opacity="0.7" />
      <circle cx="372" cy="10" r="1.2" fill="white" opacity="0.55" />
      <circle cx="52" cy="48" r="1" fill="white" opacity="0.5" />
      <circle cx="340" cy="42" r="1" fill="white" opacity="0.45" />
    </svg>
  ),

  // ─── 9. STONE STACK ────────────────────────────────────────────────────────
  stoneStack: (
    <svg {...s}>
      {/* Sky */}
      <rect width="400" height="300" fill="#C2D8EC" />
      {/* Clouds */}
      <path d="M48 65 Q58 52 76 56 Q86 45 102 51 Q114 46 116 58 Q125 60 122 70 Q118 78 105 76 Q97 83 84 79 Q73 83 64 76 Q50 74 48 66" fill="white" opacity="0.88" />
      <path d="M298 48 Q310 38 326 41 Q340 34 350 42 Q362 38 362 50 Q370 54 367 63 Q361 70 349 68 Q341 74 329 70 Q318 74 310 68 Q296 66 294 56" fill="white" opacity="0.82" />
      <path d="M168 32 Q174 24 186 26 Q194 20 202 25 Q210 21 210 30 Q216 32 213 40 Q208 46 200 44 Q194 48 186 45 Q178 48 172 44 Q162 42 161 35" fill="white" opacity="0.7" />
      {/* Distant hills */}
      <path d="M0 202 Q80 168 160 182 Q240 162 320 178 Q360 168 400 174 L400 300 L0 300" fill="#7A9B5A" />
      <path d="M0 222 Q80 206 160 213 Q240 202 320 209 Q360 203 400 207 L400 300 L0 300" fill="#5A7A4A" />
      {/* Rocky ground */}
      <path d="M0 258 Q100 250 200 254 Q300 248 400 252 L400 300 L0 300" fill="#6A6058" />
      <path d="M0 270 Q100 264 200 267 Q300 261 400 265 L400 300 L0 300" fill="#7A7068" />
      <path d="M0 280 Q100 274 200 277 Q300 271 400 275 L400 300 L0 300" fill="#8A8078" />
      {/* Ground pebbles */}
      <ellipse cx="78" cy="269" rx="14" ry="5.5" fill="#9A9088" />
      <ellipse cx="80" cy="268" rx="11" ry="4" fill="#AAA098" />
      <ellipse cx="322" cy="271" rx="12" ry="4.5" fill="#9A9088" />
      <ellipse cx="148" cy="273" rx="9" ry="3.5" fill="#8A8078" />
      <ellipse cx="352" cy="267" rx="7" ry="3" fill="#ADA8A0" />
      <ellipse cx="240" cy="266" rx="10" ry="4" fill="#9A9088" />
      {/* === THE CAIRN === */}
      {/* Base stone */}
      <path d="M153 264 Q200 254 247 262 Q250 271 200 276 Q150 271 153 264" fill="#5A5550" />
      <ellipse cx="200" cy="264" rx="47" ry="6" fill="#8A8580" />
      {/* Stone 2 */}
      <path d="M162 254 Q200 244 238 252 Q240 261 200 265 Q160 261 162 254" fill="#5A5248" />
      <ellipse cx="200" cy="254" rx="38" ry="5.5" fill="#7E7A74" />
      {/* Stone 3 — slight angle */}
      <path d="M168 244 Q203 235 235 242 Q237 250 203 254 Q168 250 168 244" fill="#6A6258" />
      <ellipse cx="201" cy="244" rx="34" ry="5" fill="#7A7268" />
      {/* Stone 4 — rounder */}
      <path d="M174 231 Q200 222 228 229 Q232 239 200 243 Q170 239 174 231" fill="#5A5550" />
      <ellipse cx="200" cy="231" rx="28" ry="5" fill="#7E7A74" />
      {/* Stone 5 */}
      <path d="M179 220 Q200 211 222 218 Q225 227 200 230 Q177 227 179 220" fill="#5A5248" />
      <ellipse cx="200" cy="220" rx="23" ry="4.5" fill="#726E68" />
      {/* Stone 6 */}
      <path d="M183 210 Q200 201 218 208 Q220 215 200 219 Q181 215 183 210" fill="#6A6258" />
      <ellipse cx="200" cy="210" rx="19" ry="4" fill="#7A7670" />
      {/* Stone 7 — narrower */}
      <path d="M186 200 Q200 192 215 198 Q217 206 200 209 Q184 206 186 200" fill="#5A5248" />
      <ellipse cx="200" cy="200" rx="15.5" ry="3.8" fill="#726E68" />
      {/* Capstone */}
      <path d="M190 190 Q200 183 211 188 Q213 196 200 199 Q188 196 190 190" fill="#5A5248" />
      <ellipse cx="200" cy="190" rx="12" ry="3.2" fill="#827E78" />
      {/* Tiny top stone */}
      <path d="M193 181 Q200 175 208 179 Q210 186 200 188 Q191 186 193 181" fill="#6A6258" />
      <ellipse cx="200" cy="181" rx="9" ry="2.8" fill="#8A8680" />
      {/* Ground shadow */}
      <ellipse cx="200" cy="276" rx="50" ry="7" fill="#45392C" opacity="0.28" />
      {/* Moss accents on stones */}
      <path d="M162 260 Q172 257 182 260" fill="none" stroke="#506840" strokeWidth="2" opacity="0.45" />
      <path d="M168 250 Q176 248 184 250" fill="none" stroke="#506840" strokeWidth="1.5" opacity="0.38" />
      <path d="M182 229 Q188 227 195 229" fill="none" stroke="#506840" strokeWidth="1.2" opacity="0.35" />
    </svg>
  ),

  // ─── 10. NATURE SOUNDS ─────────────────────────────────────────────────────
  natureSounds: (
    <svg {...s}>
      {/* Dark forest — sky visible through gap */}
      <rect width="400" height="300" fill="#3B4537" />
      {/* Sky patches between trees */}
      <ellipse cx="200" cy="85" rx="118" ry="90" fill="#B8D4E8" />
      <ellipse cx="78" cy="65" rx="58" ry="55" fill="#C2D8EE" opacity="0.55" />
      <ellipse cx="322" cy="72" rx="52" ry="48" fill="#C2D8EE" opacity="0.48" />
      {/* Background trees — silhouetted */}
      <rect x="48" y="60" width="20" height="240" rx="4" fill="#3A2E22" />
      <path d="M22 55 Q58 28 94 55 Q108 138 94 300 L48 300 Q34 200 22 55" fill="#2A3525" />
      <rect x="332" y="55" width="20" height="245" rx="4" fill="#3A2E22" />
      <path d="M306 50 Q342 23 378 50 Q392 138 378 300 L332 300 Q318 195 306 50" fill="#2A3525" />
      <rect x="128" y="100" width="16" height="200" rx="3" fill="#45392C" />
      <path d="M106 95 Q136 70 166 95 Q178 165 166 300 L128 300 Q116 200 106 95" fill="#3B4537" />
      <rect x="258" y="95" width="16" height="205" rx="3" fill="#45392C" />
      <path d="M234 90 Q266 63 298 90 Q310 160 298 300 L258 300 Q246 195 234 90" fill="#3B4537" />
      {/* Person — standing, eyes closed, arms open, listening */}
      <path d="M188 202 Q200 196 212 202 L216 265 L184 265 Z" fill="#855119" />
      <circle cx="200" cy="190" r="17" fill="#C8A880" />
      {/* Peaceful closed eyes */}
      <path d="M193 188 Q197 186 201 188" fill="none" stroke="#8B6850" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M199 188 Q203 186 207 188" fill="none" stroke="#8B6850" strokeWidth="1.8" strokeLinecap="round" />
      {/* Subtle smile */}
      <path d="M195 194 Q200 198 205 194" fill="none" stroke="#8B6850" strokeWidth="1.5" strokeLinecap="round" />
      {/* Hair */}
      <path d="M184 186 Q192 174 200 172 Q208 174 216 186 Q212 179 200 177 Q188 179 184 186" fill="#45392C" />
      {/* Arms open wide — receptive, listening */}
      <path d="M188 212 Q174 218 162 229" fill="none" stroke="#855119" strokeWidth="8" strokeLinecap="round" />
      <path d="M212 212 Q226 218 238 229" fill="none" stroke="#855119" strokeWidth="8" strokeLinecap="round" />
      <ellipse cx="160" cy="230" rx="7.5" ry="5.5" fill="#C8A880" />
      <ellipse cx="240" cy="230" rx="7.5" ry="5.5" fill="#C8A880" />
      {/* Bird left on branch */}
      <line x1="66" y1="114" x2="90" y2="114" stroke="#45392C" strokeWidth="3.5" strokeLinecap="round" />
      <ellipse cx="80" cy="111" rx="7.5" ry="5.5" fill="#486464" />
      <circle cx="86" cy="109" r="4.5" fill="#486464" />
      <path d="M89 108 L95 106" fill="none" stroke="#45392C" strokeWidth="1.8" strokeLinecap="round" />
      {/* Sound waves from left bird → person */}
      <path d="M96 114 Q120 118 136 165" fill="none" stroke="#F0C840" strokeWidth="1.6" opacity="0.65" strokeLinecap="round" />
      <path d="M86 108 Q112 112 128 162" fill="none" stroke="#F0C840" strokeWidth="1.2" opacity="0.45" strokeLinecap="round" />
      <path d="M76 104 Q104 106 120 160" fill="none" stroke="#F0C840" strokeWidth="0.9" opacity="0.3" strokeLinecap="round" />
      {/* Bird right on branch */}
      <line x1="310" y1="108" x2="334" y2="108" stroke="#45392C" strokeWidth="3.5" strokeLinecap="round" />
      <ellipse cx="320" cy="105" rx="7.5" ry="5.5" fill="#855119" />
      <circle cx="314" cy="103" r="4.5" fill="#855119" />
      <path d="M311 102 L305 100" fill="none" stroke="#45392C" strokeWidth="1.8" strokeLinecap="round" />
      {/* Sound waves right bird → person */}
      <path d="M308 110 Q282 116 264 163" fill="none" stroke="#D4A040" strokeWidth="1.6" opacity="0.65" strokeLinecap="round" />
      <path d="M318 104 Q290 110 272 160" fill="none" stroke="#D4A040" strokeWidth="1.2" opacity="0.45" strokeLinecap="round" />
      {/* Leaf rustle sounds from above — dashed */}
      <path d="M200 132 L200 148" fill="none" stroke="#7A9B5A" strokeWidth="1.8" opacity="0.55" strokeLinecap="round" strokeDasharray="3 2.5" />
      <path d="M190 128 Q194 140 200 148" fill="none" stroke="#7A9B5A" strokeWidth="1.2" opacity="0.38" strokeLinecap="round" strokeDasharray="3 2.5" />
      <path d="M210 128 Q206 140 200 148" fill="none" stroke="#7A9B5A" strokeWidth="1.2" opacity="0.38" strokeLinecap="round" strokeDasharray="3 2.5" />
      {/* Water/stream sounds lower left */}
      <path d="M98 244 Q128 238 148 218" fill="none" stroke="#486464" strokeWidth="1.6" opacity="0.55" strokeLinecap="round" strokeDasharray="4 2.5" />
      <path d="M88 252 Q118 244 140 225" fill="none" stroke="#486464" strokeWidth="1.1" opacity="0.38" strokeLinecap="round" strokeDasharray="4 2.5" />
      {/* Ground */}
      <rect y="270" width="400" height="30" fill="#2A3525" />
      <path d="M184 265 L184 272 L216 272 L216 265" fill="#45392C" />
      <ellipse cx="192" cy="272" rx="9" ry="4" fill="#8B6A4A" />
      <ellipse cx="208" cy="272" rx="9" ry="4" fill="#8B6A4A" />
    </svg>
  ),

  // ─── 11. HILL CLIMB ────────────────────────────────────────────────────────
  hillClimb: (
    <svg {...s}>
      {/* Sky */}
      <rect width="400" height="300" fill="#A4CCEA" />
      {/* Clouds */}
      <path d="M58 72 Q68 58 88 62 Q98 52 114 58 Q124 53 126 64 Q135 66 132 77 Q127 86 114 84 Q106 91 93 87 Q81 91 72 84 Q57 82 56 73" fill="white" opacity="0.9" />
      <path d="M282 52 Q294 41 310 44 Q323 37 334 46 Q346 42 347 54 Q355 58 352 67 Q346 74 334 72 Q326 78 314 74 Q303 78 295 72 Q281 70 279 60" fill="white" opacity="0.85" />
      <path d="M158 36 Q166 28 180 31 Q188 24 197 29 Q205 25 205 35 Q212 37 209 44 Q204 50 196 48 Q190 52 181 49 Q173 52 167 48 Q157 46 156 38" fill="white" opacity="0.72" />
      {/* Distant misty hills */}
      <path d="M0 185 Q60 152 130 168 Q200 148 270 164 Q335 150 400 160 L400 225 L0 225" fill="#7A9870" opacity="0.55" />
      {/* Mid hills */}
      <path d="M0 202 Q50 172 122 185 Q192 168 254 182 Q325 166 400 176 L400 245 L0 245" fill="#6A8A5A" />
      {/* Main hero hill */}
      <path d="M0 285 Q0 245 82 202 Q154 166 200 156 Q246 166 282 193 Q345 224 400 248 L400 300 L0 300" fill="#3B4537" />
      {/* Lit face of the hill */}
      <path d="M0 285 Q0 255 62 218 Q122 182 200 158 Q210 163 222 172 Q200 178 175 190 Q120 212 82 245 Q42 268 0 288" fill="#4A5C3F" />
      {/* Trail/path up the hill */}
      <path d="M0 298 Q52 280 105 256 Q158 226 185 195" fill="none" stroke="#6B5040" strokeWidth="3" strokeDasharray="8 5" opacity="0.55" />
      {/* Summit grass */}
      <path d="M184 158 Q200 149 216 157 Q218 164 200 167 Q182 164 184 158" fill="#5A7A4A" />
      {/* Summit rocks */}
      <ellipse cx="193" cy="163" rx="6.5" ry="3" fill="#7A7068" />
      <ellipse cx="208" cy="162" rx="5.5" ry="2.8" fill="#9A9088" />
      {/* Person at summit — arms raised, triumphant */}
      <circle cx="200" cy="144" r="8.5" fill="#C8A880" />
      {/* Hair blowing in wind */}
      <path d="M194 139 Q200 131 208 137 Q213 132 216 137" fill="#45392C" />
      {/* Body */}
      <path d="M200 153 L199 178" fill="none" stroke="#855119" strokeWidth="6.5" strokeLinecap="round" />
      {/* Arms raised triumphantly */}
      <path d="M199 160 Q187 149 180 138" fill="none" stroke="#855119" strokeWidth="5" strokeLinecap="round" />
      <path d="M201 160 Q213 149 220 138" fill="none" stroke="#855119" strokeWidth="5" strokeLinecap="round" />
      {/* Hands */}
      <circle cx="179" cy="137" r="4.5" fill="#C8A880" />
      <circle cx="221" cy="137" r="4.5" fill="#C8A880" />
      {/* Legs */}
      <path d="M199 178 Q195 190 192 200" fill="none" stroke="#855119" strokeWidth="5.5" strokeLinecap="round" />
      <path d="M199 178 Q203 190 206 200" fill="none" stroke="#855119" strokeWidth="5.5" strokeLinecap="round" />
      {/* Birds celebrating at summit */}
      <path d="M232 122 Q237 117 242 122" fill="none" stroke="#45392C" strokeWidth="2" strokeLinecap="round" />
      <path d="M242 122 Q247 117 252 122" fill="none" stroke="#45392C" strokeWidth="2" strokeLinecap="round" />
      <path d="M152 112 Q157 107 162 112" fill="none" stroke="#45392C" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M162 112 Q167 107 172 112" fill="none" stroke="#45392C" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M282 105 Q286 101 290 105" fill="none" stroke="#45392C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M290 105 Q294 101 298 105" fill="none" stroke="#45392C" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),

  // ─── 12. LEAF COLLECTION ───────────────────────────────────────────────────
  leafCollection: (
    <svg {...s}>
      {/* Warm wooden surface background */}
      <rect width="400" height="300" fill="#8B7555" />
      {/* Surface the leaves are arranged on */}
      <rect y="150" width="400" height="150" fill="#7A6A48" />
      {/* Wood grain lines */}
      <path d="M0 170 Q200 165 400 170" fill="none" stroke="#6B5A38" strokeWidth="1" opacity="0.4" />
      <path d="M0 192 Q200 187 400 192" fill="none" stroke="#6B5A38" strokeWidth="0.8" opacity="0.3" />
      <path d="M0 215 Q200 210 400 215" fill="none" stroke="#6B5A38" strokeWidth="0.8" opacity="0.25" />
      <path d="M0 238 Q200 233 400 238" fill="none" stroke="#6B5A38" strokeWidth="0.6" opacity="0.2" />
      {/* Scattered natural debris */}
      <circle cx="52" cy="258" r="3" fill="#855119" opacity="0.45" />
      <circle cx="372" cy="242" r="2.5" fill="#855119" opacity="0.4" />
      <circle cx="168" cy="276" r="2" fill="#6B5040" opacity="0.4" />
      <circle cx="310" cy="280" r="2.5" fill="#855119" opacity="0.35" />
      {/* ══ LEAF 1 — Maple (red/crimson) center-left ══ */}
      <g transform="translate(88, 158) rotate(-18)">
        <path d="M22 65 Q17 50 6 42 Q17 42 22 50 Q22 33 11 22 Q22 27 27 38 Q24 19 30 8 Q34 21 32 37 Q38 22 47 18 Q42 32 38 43 Q45 33 54 34 Q48 44 38 47 Q46 54 44 65 Q33 60 22 65 Q11 60 20 65" fill="#C83028" />
        <line x1="22" y1="65" x2="22" y2="88" stroke="#8B2018" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M22 65 L11 49 M22 65 L30 46 M22 65 L38 55" fill="none" stroke="#A82020" strokeWidth="1.2" opacity="0.55" />
      </g>
      {/* ══ LEAF 2 — Oak (golden amber) top center ══ */}
      <g transform="translate(172, 112) rotate(12)">
        <path d="M17 0 Q11 13 5 16 Q11 16 17 13 Q11 22 6 27 Q14 26 18 21 Q13 30 8 36 Q18 34 22 28 Q20 37 22 45 Q24 37 26 28 Q30 34 40 36 Q35 30 30 21 Q34 26 42 27 Q37 22 31 13 Q37 16 43 16 Q37 13 31 0 Q26 16 24 19 Q21 13 17 0" fill="#D4A030" />
        <line x1="22" y1="45" x2="22" y2="68" stroke="#8B6818" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M22 26 L11 20 M22 26 L33 20 M22 36 L9 30 M22 36 L35 30" fill="none" stroke="#B88022" strokeWidth="1" opacity="0.48" />
      </g>
      {/* ══ LEAF 3 — Ginkgo fan (golden yellow) upper right ══ */}
      <g transform="translate(268, 120) rotate(-10)">
        <path d="M26 0 Q10 6 5 19 Q2 30 5 37 Q10 44 26 48 Q42 44 46 37 Q50 30 46 19 Q41 6 26 0" fill="#E8C020" />
        {/* Fan veins */}
        <line x1="26" y1="48" x2="26" y2="0" stroke="#C0A018" strokeWidth="1" opacity="0.45" />
        <line x1="26" y1="48" x2="5" y2="8" stroke="#C0A018" strokeWidth="0.8" opacity="0.42" />
        <line x1="26" y1="48" x2="47" y2="8" stroke="#C0A018" strokeWidth="0.8" opacity="0.42" />
        <line x1="26" y1="48" x2="2" y2="22" stroke="#C0A018" strokeWidth="0.7" opacity="0.38" />
        <line x1="26" y1="48" x2="50" y2="22" stroke="#C0A018" strokeWidth="0.7" opacity="0.38" />
        <line x1="26" y1="48" x2="12" y2="4" stroke="#C0A018" strokeWidth="0.7" opacity="0.35" />
        <line x1="26" y1="48" x2="40" y2="4" stroke="#C0A018" strokeWidth="0.7" opacity="0.35" />
        <line x1="26" y1="48" x2="26" y2="72" stroke="#8B7018" strokeWidth="2.2" strokeLinecap="round" />
      </g>
      {/* ══ LEAF 4 — Oval (fresh green) left ══ */}
      <g transform="translate(34, 195) rotate(22)">
        <path d="M16 0 Q32 6 36 22 Q33 37 16 47 Q-1 37 1 22 Q6 6 16 0" fill="#5A8040" />
        <line x1="16" y1="0" x2="16" y2="47" stroke="#3B6028" strokeWidth="1.5" opacity="0.58" />
        <path d="M16 14 L5 22 M16 14 L27 22 M16 26 L4 34 M16 26 L28 34" fill="none" stroke="#3B6028" strokeWidth="1" opacity="0.48" />
        <line x1="16" y1="47" x2="16" y2="70" stroke="#3B5028" strokeWidth="2.2" strokeLinecap="round" />
      </g>
      {/* ══ LEAF 5 — Narrow elongated (olive/yellow-green) right ══ */}
      <g transform="translate(330, 188) rotate(-28)">
        <path d="M11 0 Q22 9 24 24 Q22 38 11 47 Q0 38 2 24 Q4 9 11 0" fill="#9ABB42" />
        <line x1="11" y1="0" x2="11" y2="47" stroke="#6A8828" strokeWidth="1.5" opacity="0.55" />
        <path d="M11 12 L4 18 M11 20 L4 26 M11 28 L4 34 M11 36 L5 42" fill="none" stroke="#6A8828" strokeWidth="0.8" opacity="0.45" />
        <path d="M11 12 L18 18 M11 20 L18 26 M11 28 L18 34 M11 36 L17 42" fill="none" stroke="#6A8828" strokeWidth="0.8" opacity="0.45" />
        <line x1="11" y1="47" x2="11" y2="68" stroke="#5A7820" strokeWidth="2.2" strokeLinecap="round" />
      </g>
      {/* ══ Acorns ══ */}
      <ellipse cx="162" cy="260" rx="7" ry="9" fill="#8B6A3A" />
      <ellipse cx="162" cy="252" rx="8" ry="4.5" fill="#6B5028" />
      <line x1="162" y1="248" x2="162" y2="241" stroke="#5A4020" strokeWidth="1.8" strokeLinecap="round" />
      <ellipse cx="252" cy="255" rx="6" ry="8" fill="#8B6A3A" />
      <ellipse cx="252" cy="248" rx="7" ry="4" fill="#6B5028" />
      <line x1="252" y1="244" x2="254" y2="237" stroke="#5A4020" strokeWidth="1.8" strokeLinecap="round" />
      {/* Small fallen petals */}
      <path d="M28 282 Q33 276 38 282 Q33 288 28 282" fill="#C83028" opacity="0.55" />
      <path d="M358 275 Q363 269 368 275 Q363 281 358 275" fill="#D4A030" opacity="0.5" />
      <path d="M200 290 Q205 285 210 290 Q205 295 200 290" fill="#5A8040" opacity="0.5" />
    </svg>
  ),
};
