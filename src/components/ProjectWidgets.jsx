import { useState, useEffect } from "react";
import {
  FiSliders,
  FiRotateCw,
  FiCheckCircle,
  FiRefreshCw,
  FiPlay,
  FiServer,
  FiPlus,
  FiTrash2,
  FiCompass,
  FiLayers,
  FiActivity,
  FiDollarSign,
  FiUserCheck,
  FiArrowRight,
  FiVideo,
  FiBookOpen,
  FiAward
} from "react-icons/fi";

// 1. SyncUp: OpenAI Match Scorer Simulator
export function SyncUpVisualizer() {
  const [score, setScore] = useState(75);
  const [analyzing, setAnalyzing] = useState(false);
  const [skillsMatch, setSkillsMatch] = useState({
    react: true,
    node: true,
    python: false,
    docker: false
  });

  const handleRunAnalysis = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      // calculate score based on toggles
      let base = 50;
      if (skillsMatch.react) base += 15;
      if (skillsMatch.node) base += 15;
      if (skillsMatch.python) base += 10;
      if (skillsMatch.docker) base += 10;
      setScore(base);
    }, 1200);
  };

  return (
    <div className="my-8 rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-black/25 p-6 flex flex-col gap-6">
      <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest text-center">
        OpenAI Resume-Job Description Match Scorer
      </div>
      <p className="text-xs text-gray-400 text-center -mt-3">Simulates the AI parsing & matching threshold engine implemented in SyncUp.</p>
      
      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* Left Controls */}
        <div className="space-y-4">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">Matched Resume Skills</div>
          <div className="grid grid-cols-2 gap-3">
            {Object.keys(skillsMatch).map(skill => (
              <button
                key={skill}
                onClick={() => setSkillsMatch(prev => ({ ...prev, [skill]: !prev[skill] }))}
                className={`p-3 rounded-xl border text-xs font-mono font-bold capitalize transition-all duration-300 ${
                  skillsMatch[skill]
                    ? "bg-cyan-500/10 border-cyan-500 text-cyan-600 dark:text-accent shadow-sm"
                    : "bg-white dark:bg-[#111216] border-gray-200 dark:border-white/5 text-gray-400"
                }`}
              >
                {skill} {skillsMatch[skill] ? "✓" : "✗"}
              </button>
            ))}
          </div>

          <button
            onClick={handleRunAnalysis}
            disabled={analyzing}
            className="w-full py-3 rounded-xl font-mono text-xs font-bold bg-gradient-to-r from-cyan-600 to-blue-600 text-white flex items-center justify-center gap-2 hover:shadow-md active:scale-95 transition-all"
          >
            <FiSliders />
            {analyzing ? "AI Parsing Resume..." : "Run AI Resume Scoring"}
          </button>
        </div>

        {/* Right Gauge */}
        <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white dark:bg-[#0B0B0D] border border-gray-200 dark:border-white/5 min-h-[180px]">
          {analyzing ? (
            <div className="flex flex-col items-center gap-3">
              <FiRotateCw className="text-3xl text-cyan-500 animate-spin" />
              <span className="text-xs font-mono text-gray-400">Comparing vectors...</span>
            </div>
          ) : (
            <div className="text-center space-y-2">
              <div className="text-5xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                {score}%
              </div>
              <div className="text-xs font-bold font-mono text-gray-500 uppercase tracking-wider">
                Compatibility Rating
              </div>
              <p className="text-[10px] text-gray-400 max-w-[200px] leading-tight font-light mx-auto">
                {score >= 80 
                  ? "Highly compatible matching client requirements." 
                  : "Consider adding python/docker expertise to pass filtering."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// 2. BookLibrary (ShelfForge): JWT Token Lifecycle Ticker
export function BookLibraryVisualizer() {
  const [accessToken, setAccessToken] = useState("jwt_access_val_xyz...");
  const [logs, setLogs] = useState([]);
  const [running, setRunning] = useState(false);

  const simulateAPICall = () => {
    if (running) return;
    setRunning(true);
    setLogs(prev => [...prev, "[api]: Dispatching Request GET /api/books..."]);

    setTimeout(() => {
      // Simulate expired
      setLogs(prev => [...prev, "[api-error]: Access Token Expired (401 Unauthorized)"]);
      
      setTimeout(() => {
        setLogs(prev => [...prev, "[auth]: Token Expired: Dispatching POST /auth/refresh..."]);
        
        setTimeout(() => {
          const newTok = "jwt_access_renewed_" + Math.random().toString(36).substring(7);
          setAccessToken(newTok);
          setLogs(prev => [
            ...prev,
            `[auth-success]: New Access Token Issued: ${newTok.slice(0, 16)}...`,
            "[api]: Retrying original GET /api/books request with new token..."
          ]);
          
          setTimeout(() => {
            setLogs(prev => [...prev, "[api-success]: Response 200 OK (Books payload received) ✓"]);
            setRunning(false);
          }, 1000);
        }, 1200);
      }, 1000);
    }, 1000);
  };

  return (
    <div className="my-8 rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-black/25 p-6 flex flex-col gap-6">
      <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest text-center">
        JWT Silent Refresh Token Flow
      </div>
      <p className="text-xs text-gray-400 text-center -mt-3">Simulates the silent re-authentication middleware implemented in ShelfForge.</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Token states */}
        <div className="space-y-4 font-mono text-xs">
          <div className="p-4 rounded-xl border border-gray-250 dark:border-white/5 bg-white dark:bg-[#111216] space-y-2">
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Access Token State</div>
            <div className="text-cyan-500 break-all font-bold">{accessToken}</div>
            <div className="text-[9px] text-gray-400">Expires in: 15 minutes</div>
          </div>

          <div className="p-4 rounded-xl border border-gray-250 dark:border-white/5 bg-white dark:bg-[#111216] space-y-2">
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Refresh Token Storage (HttpOnly)</div>
            <div className="text-purple-400 break-all font-bold">jwt_refresh_secure_cookie_hash...</div>
            <div className="text-[9px] text-gray-400">Expires in: 7 days</div>
          </div>

          <button
            onClick={simulateAPICall}
            disabled={running}
            className="w-full py-3 rounded-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center gap-2 hover:shadow-md active:scale-95 transition-all text-xs"
          >
            <FiRefreshCw className={running ? "animate-spin" : ""} />
            {running ? "Executing Refresh Cycle..." : "Trigger Simulated API Call"}
          </button>
        </div>

        {/* Live log */}
        <div className="p-4 rounded-xl border border-gray-200 dark:border-white/5 bg-white dark:bg-[#0B0B0D] flex flex-col justify-between min-h-[220px]">
          <div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono mb-3">Silent Handshake Log Console</div>
            <div className="space-y-2 font-mono text-[11px] text-gray-300 max-h-[140px] overflow-y-auto no-scrollbar">
              {logs.length > 0 ? (
                logs.map((log, idx) => (
                  <div
                    key={idx}
                    className={`
                      ${log.includes("success") ? "text-emerald-400 font-bold" : ""}
                      ${log.includes("Expired") ? "text-orange-400 font-bold" : ""}
                      ${log.includes("refresh") ? "text-purple-400" : ""}
                      ${log.includes("api]:") ? "text-gray-400" : ""}
                    `}
                  >
                    {log}
                  </div>
                ))
              ) : (
                <div className="text-gray-550 italic">Click the trigger button to simulate token expiration and silent renewal.</div>
              )}
            </div>
          </div>
          <div className="text-[9px] text-gray-400 font-mono mt-3 border-t border-gray-200 dark:border-white/5 pt-2">
            Prevents page reloads and session drops
          </div>
        </div>
      </div>
    </div>
  );
}

// 3. task-manager: WebSocket Collaborative Drag Kanban Simulator
export function TaskManagerVisualizer() {
  const [tasks, setTasks] = useState({
    todo: ["Optimize DB indexes", "Integrate analytics"],
    progress: ["Setup WS cluster"],
    done: ["JWT authentication"]
  });
  const [log, setLog] = useState("");
  const [simulating, setSimulating] = useState(false);

  const simulateDrag = () => {
    if (simulating) return;
    setSimulating(true);
    setLog("System user 'Aman K.' initialized drag-and-drop gesture...");

    setTimeout(() => {
      setLog("Broadcasting socket message: TASK_DRAG_START (task_id: 104)");
      
      setTimeout(() => {
        // Move task
        setTasks(prev => ({
          ...prev,
          progress: prev.progress.filter(t => t !== "Setup WS cluster"),
          done: [...prev.done, "Setup WS cluster"]
        }));
        setLog("Committed drop! Dispatching payload: TASK_MOVE (progress -> done)");

        setTimeout(() => {
          setLog("Syncing workspace instances: Updated UI elements successfully ✓");
          setSimulating(false);
        }, 1000);
      }, 1500);
    }, 1000);
  };

  const resetBoard = () => {
    setTasks({
      todo: ["Optimize DB indexes", "Integrate analytics"],
      progress: ["Setup WS cluster"],
      done: ["JWT authentication"]
    });
    setLog("");
  };

  return (
    <div className="my-8 rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-black/25 p-6 flex flex-col gap-6">
      <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest text-center">
        Real-Time WebSocket Kanban Board Sync
      </div>
      <p className="text-xs text-gray-400 text-center -mt-3">Simulates the real-time board updates implemented in ProTask Manager.</p>
      
      <div className="grid md:grid-cols-3 gap-4">
        {Object.entries(tasks).map(([column, list]) => (
          <div key={column} className="p-4 rounded-xl border border-gray-150 dark:border-white/5 bg-white dark:bg-[#111216] space-y-3">
            <div className="text-xs font-bold text-gray-450 dark:text-gray-400 uppercase tracking-wider font-mono capitalize">
              {column} ({list.length})
            </div>
            <div className="space-y-2.5">
              {list.map((task, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-lg border text-xs font-mono font-medium transition-all ${
                    task === "Setup WS cluster" && simulating
                      ? "bg-cyan-500/10 border-cyan-500 scale-105 shadow-sm text-cyan-600 dark:text-accent animate-pulse"
                      : "bg-gray-50 dark:bg-[#0B0B0D] border-gray-200 dark:border-white/5 text-gray-800 dark:text-gray-200"
                  }`}
                >
                  {task}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between p-4 rounded-xl border border-gray-200 dark:border-white/5 bg-white dark:bg-[#0B0B0D]">
        <div className="font-mono text-xs text-gray-650 dark:text-cyan-500/90 w-full sm:w-[70%] min-h-[20px] flex items-center">
          {log ? `[websocket]: ${log}` : "Kanban socket connection listening for actions..."}
        </div>
        
        <div className="flex gap-2 w-full sm:w-auto shrink-0">
          <button
            onClick={simulateDrag}
            disabled={simulating || tasks.done.includes("Setup WS cluster")}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-cyan-600 to-blue-600 text-white disabled:opacity-50 hover:shadow-md active:scale-95 transition-all"
          >
            {simulating ? "Syncing..." : "Simulate Task Drag"}
          </button>
          
          <button
            onClick={resetBoard}
            className="p-2.5 rounded-xl border border-gray-200 dark:border-white/5 text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5 active:scale-95 transition-all"
            title="Reset Board"
          >
            <FiRefreshCw size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

// 4. currency-xchange: Ledger Transaction & Rate Widget
export function CurrencyExchangeVisualizer() {
  const [balance, setBalance] = useState({ USD: 500, EUR: 100 });
  const [amount, setAmount] = useState("50");
  const [converting, setConverting] = useState(false);
  const [log, setLog] = useState("");

  const handleConvert = () => {
    const amt = parseFloat(amount);
    if (isNaN(amt) || amt <= 0 || amt > balance.USD) return;

    setConverting(true);
    setLog("Querying live ExchangeRate-API endpoint for USD/EUR rate...");

    setTimeout(() => {
      const rate = 0.92;
      const converted = amt * rate;
      setBalance(prev => ({
        USD: prev.USD - amt,
        EUR: prev.EUR + converted
      }));
      setLog(`Database Ledger Transaction Committed: -${amt} USD, +${converted.toFixed(2)} EUR (Rate: ${rate}) ✓`);
      setConverting(false);
    }, 1200);
  };

  return (
    <div className="my-8 rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-black/25 p-6 flex flex-col gap-6">
      <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest text-center">
        Multi-Currency Wallet Ledger & Live Rates
      </div>
      <p className="text-xs text-gray-400 text-center -mt-3">Simulates the wallet conversion system implemented in CurrencyXchange.</p>

      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* Wallet balances */}
        <div className="space-y-4">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">My Wallet Balances</div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-gray-200 dark:border-white/5 bg-white dark:bg-[#111216] text-center font-mono">
              <div className="text-xl font-bold text-gray-900 dark:text-white">${balance.USD.toFixed(2)}</div>
              <div className="text-[10px] text-gray-400 mt-1">USD Wallet</div>
            </div>
            <div className="p-4 rounded-xl border border-gray-200 dark:border-white/5 bg-white dark:bg-[#111216] text-center font-mono">
              <div className="text-xl font-bold text-cyan-600 dark:text-accent">€{balance.EUR.toFixed(2)}</div>
              <div className="text-[10px] text-gray-400 mt-1">EUR Wallet</div>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">$</span>
              <input
                type="number"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                disabled={converting}
                className="w-full pl-7 pr-3 py-2.5 rounded-xl border border-gray-250 dark:border-white/5 bg-white dark:bg-[#111216] font-mono text-xs focus:outline-none focus:border-cyan-500 text-gray-900 dark:text-white"
              />
            </div>
            <button
              onClick={handleConvert}
              disabled={converting || !amount || parseFloat(amount) > balance.USD}
              className="px-6 py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-cyan-600 to-blue-600 text-white disabled:opacity-50 hover:shadow-md active:scale-95 transition-all font-mono"
            >
              {converting ? "Converting..." : "Convert to EUR"}
            </button>
          </div>
        </div>

        {/* Audit Log */}
        <div className="p-4 rounded-xl border border-gray-200 dark:border-white/5 bg-white dark:bg-[#0B0B0D] flex flex-col justify-between min-h-[160px]">
          <div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono mb-3">Ledger Activity Audit Trails</div>
            <div className="font-mono text-xs text-gray-300 leading-relaxed min-h-[60px]">
              {log ? log : "Awaiting currency conversion action..."}
            </div>
          </div>
          <div className="text-[9px] text-gray-450 border-t border-gray-200 dark:border-white/5 pt-2 font-mono">
            Enforces atomic transactions preventing double-spending
          </div>
        </div>
      </div>
    </div>
  );
}

// 5. ArtWall: Color Palette Extractor
export function ArtWallVisualizer() {
  const [selectedArt, setSelectedArt] = useState(0);
  const artworks = [
    { name: "Nebula Dreams", colors: ["#2B1B54", "#6C4FBB", "#AE87EA", "#05D3D3"] },
    { name: "Cyberpunk Alley", colors: ["#0B0B0D", "#FF007F", "#00F0FF", "#E9FF00"] },
    { name: "Moody Autumn", colors: ["#4A2E1B", "#A65F28", "#E69C24", "#FFDFC0"] }
  ];

  return (
    <div className="my-8 rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-black/25 p-6 flex flex-col gap-6">
      <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest text-center">
        Vibrant Color Palette Extractor
      </div>
      <p className="text-xs text-gray-400 text-center -mt-3">Simulates the visual layout theme color extractor built into ArtWall.</p>

      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* Sample Artworks Selectors */}
        <div className="space-y-4">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">Select Artwork</div>
          <div className="flex flex-col gap-2.5">
            {artworks.map((art, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedArt(idx)}
                className={`p-4 rounded-xl border text-left flex items-center justify-between transition-all duration-300 ${
                  selectedArt === idx
                    ? "bg-purple-500/10 border-purple-500 text-purple-600 dark:text-purple-400 shadow-sm"
                    : "bg-white dark:bg-[#111216] border-gray-200 dark:border-white/5 text-gray-450 hover:bg-gray-50 dark:hover:bg-white/5"
                }`}
              >
                <span className="font-mono text-xs font-bold">{art.name}</span>
                <div className="flex gap-1">
                  {art.colors.map((c, i) => (
                    <span key={i} className="w-3 h-3 rounded-full" style={{ backgroundColor: c }} />
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Palette Extraction Details */}
        <div className="p-5 rounded-xl border border-gray-250 dark:border-white/5 bg-white dark:bg-[#0B0B0D] space-y-4">
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono">Extracted Palette Hex Codes</div>
          <div className="grid grid-cols-4 gap-2">
            {artworks[selectedArt].colors.map((color, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-lg shadow-sm border border-black/5" style={{ backgroundColor: color }} />
                <span className="text-[9px] font-mono text-gray-400 select-all">{color}</span>
              </div>
            ))}
          </div>
          <div className="text-[10px] text-gray-450 leading-relaxed font-light font-mono border-t border-gray-200 dark:border-white/5 pt-3">
            Extracted via dynamic canvas pixel grouping logic on image load.
          </div>
        </div>
      </div>
    </div>
  );
}

// 6. article-builder: Article Block Order Previewer
export function ArticleBuilderVisualizer() {
  const [blocks, setBlocks] = useState([
    { id: "h1", type: "Header Block", content: "AI & Software Engineering in 2026" },
    { id: "img", type: "Image Block", content: "hero_visual.webp (Dimensions: 1200x630)" },
    { id: "p", type: "Rich Text Block", content: "The intersection of automated LLMs and systems design..." }
  ]);

  const moveUp = (index) => {
    if (index === 0) return;
    const newBlocks = [...blocks];
    const temp = newBlocks[index];
    newBlocks[index] = newBlocks[index - 1];
    newBlocks[index - 1] = temp;
    setBlocks(newBlocks);
  };

  const moveDown = (index) => {
    if (index === blocks.length - 1) return;
    const newBlocks = [...blocks];
    const temp = newBlocks[index];
    newBlocks[index] = newBlocks[index + 1];
    newBlocks[index + 1] = temp;
    setBlocks(newBlocks);
  };

  return (
    <div className="my-8 rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-black/25 p-6 flex flex-col gap-6">
      <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest text-center">
        Block-Based CMS Drag & Layout Builder
      </div>
      <p className="text-xs text-gray-400 text-center -mt-3">Simulates the modular rich-text builder custom layout manager of Article Builder.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Editor Blocks */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">Builder Block Stack</div>
          {blocks.map((block, idx) => (
            <div
              key={block.id}
              className="p-3.5 rounded-xl border border-gray-200 dark:border-white/5 bg-white dark:bg-[#111216] flex items-center justify-between"
            >
              <div>
                <div className="text-[10px] font-bold text-cyan-600 dark:text-accent font-mono uppercase">{block.type}</div>
                <div className="text-xs text-gray-800 dark:text-gray-200 font-mono mt-1 leading-tight">{block.content}</div>
              </div>
              <div className="flex gap-1.5 shrink-0">
                <button
                  onClick={() => moveUp(idx)}
                  disabled={idx === 0}
                  className="px-2 py-1 rounded bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs disabled:opacity-30 text-gray-650 hover:bg-gray-100 dark:hover:bg-white/10"
                >
                  ↑
                </button>
                <button
                  onClick={() => moveDown(idx)}
                  disabled={idx === blocks.length - 1}
                  className="px-2 py-1 rounded bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs disabled:opacity-30 text-gray-650 hover:bg-gray-100 dark:hover:bg-white/10"
                >
                  ↓
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Live Preview */}
        <div className="p-5 rounded-xl border border-gray-200 dark:border-white/5 bg-white dark:bg-[#0B0B0D] flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono mb-4">JSON Article Layout Output</div>
            <pre className="text-[10px] font-mono text-cyan-500 overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-[140px] no-scrollbar">
              {JSON.stringify(blocks, null, 2)}
            </pre>
          </div>
          <div className="text-[9px] text-gray-450 border-t border-gray-200 dark:border-white/5 pt-2 font-mono">
            Auto-saves block order layout state variables dynamically
          </div>
        </div>
      </div>
    </div>
  );
}

// 7. template-builder: Coordinate Drag Sizing Simulator
export function TemplateBuilderVisualizer() {
  const [size, setSize] = useState({ width: 180, height: 100 });

  return (
    <div className="my-8 rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-black/25 p-6 flex flex-col gap-6">
      <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest text-center">
        Low-Code Grid Resizing Coordinate Inspector
      </div>
      <p className="text-xs text-gray-400 text-center -mt-3">Simulates element bounds and data-binding hooks of Low-Code Template Builder.</p>

      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* Bounds Controls */}
        <div className="space-y-4">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">Adjust Element Dimensions</div>
          
          <div className="space-y-2.5">
            <div className="flex justify-between text-xs font-mono text-gray-400">
              <span>Width: {size.width}px</span>
            </div>
            <input
              type="range"
              min="100"
              max="280"
              value={size.width}
              onChange={e => setSize(prev => ({ ...prev, width: parseInt(e.target.value) }))}
              className="w-full accent-cyan-500"
            />
          </div>

          <div className="space-y-2.5">
            <div className="flex justify-between text-xs font-mono text-gray-400">
              <span>Height: {size.height}px</span>
            </div>
            <input
              type="range"
              min="60"
              max="160"
              value={size.height}
              onChange={e => setSize(prev => ({ ...prev, height: parseInt(e.target.value) }))}
              className="w-full accent-cyan-500"
            />
          </div>
        </div>

        {/* Live coordinate box */}
        <div className="p-4 rounded-xl border border-gray-200 dark:border-white/5 bg-white dark:bg-[#0B0B0D] flex flex-col items-center justify-center min-h-[180px]">
          <div
            className="border-2 border-dashed border-cyan-500 bg-cyan-500/5 rounded-lg flex items-center justify-center font-mono text-[10px] text-cyan-600 dark:text-accent font-bold transition-all duration-300"
            style={{ width: `${size.width}px`, height: `${size.height}px` }}
          >
            {size.width} x {size.height}
          </div>
        </div>
      </div>
    </div>
  );
}

// 8. election-campaign: Real-Time Vote socket simulator
export function ElectionCampaignVisualizer() {
  const [votes, setVotes] = useState({ Alice: 124, Bob: 98 });
  const [voting, setVoting] = useState(false);
  const [log, setLog] = useState("");

  const handleVote = (candidate) => {
    if (voting) return;
    setVoting(true);
    setLog(`Socket dispatched: VOTE_CAST for ${candidate}...`);

    setTimeout(() => {
      setVotes(prev => ({ ...prev, [candidate]: prev[candidate] + 1 }));
      setLog(`WS broadcasted updated vote results to 1,200 active listeners ✓`);
      setVoting(false);
    }, 600);
  };

  const total = votes.Alice + votes.Bob;

  return (
    <div className="my-8 rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-black/25 p-6 flex flex-col gap-6">
      <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest text-center">
        Real-Time Ballot Counter & WebSocket Sync
      </div>
      <p className="text-xs text-gray-400 text-center -mt-3">Simulates the real-time voting data stream built into Election Campaign Platform.</p>

      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* Candidates List */}
        <div className="space-y-4">
          {Object.entries(votes).map(([name, count]) => {
            const pct = total > 0 ? (count / total) * 100 : 0;
            return (
              <div key={name} className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="font-bold text-gray-800 dark:text-gray-200">{name}</span>
                  <span className="text-gray-450">{count} votes ({pct.toFixed(1)}%)</span>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="flex-1 h-3 rounded-full bg-gray-200 dark:bg-[#111216] overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <button
                    onClick={() => handleVote(name)}
                    disabled={voting}
                    className="px-3.5 py-1.5 rounded-lg text-[10px] font-bold bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-accent hover:bg-cyan-500/5 active:scale-95 disabled:opacity-50 font-mono transition"
                  >
                    Vote
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Logs */}
        <div className="p-4 rounded-xl border border-gray-200 dark:border-white/5 bg-white dark:bg-[#0B0B0D] flex flex-col justify-between min-h-[140px]">
          <div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono mb-2">Live Web Socket Transactions</div>
            <div className="font-mono text-xs text-gray-300 min-h-[40px] leading-relaxed">
              {log ? `[ws]: ${log}` : "WebSocket queue ready. Cast a vote to verify sync."}
            </div>
          </div>
          <div className="text-[9px] text-gray-450 border-t border-gray-200 dark:border-white/5 pt-2 font-mono">
            Uses socket rooms to target event payload streams
          </div>
        </div>
      </div>
    </div>
  );
}

// 9. scentiva: Payment Checkout Webhook Lifecycle
export function ScentivaVisualizer() {
  const [activeStep, setActiveStep] = useState(-1);
  const [processing, setProcessing] = useState(false);
  const [logs, setLogs] = useState([]);

  const handleCheckout = () => {
    if (processing) return;
    setProcessing(true);
    setActiveStep(0);
    setLogs(["[checkout]: User clicked pay. Creating Razorpay order packet..."]);

    const stepsDelays = [1200, 2500, 3800];
    const logMsgs = [
      "[checkout]: Razorpay UI opened. Mock customer payment authorized...",
      "[webhook]: Payment successful! Razorpay dispatched verified secure webhook (signature verified)...",
      "[database]: Order created, email receipt sent. Cart cleared successfully ✓"
    ];

    stepsDelays.forEach((delay, idx) => {
      setTimeout(() => {
        setActiveStep(idx + 1);
        setLogs(prev => [...prev, logMsgs[idx]]);
        if (idx === stepsDelays.length - 1) {
          setProcessing(false);
        }
      }, delay);
    });
  };

  const stepsList = [
    "Create Order",
    "Customer Pay",
    "Webhook Verification",
    "Complete & Deliver"
  ];

  return (
    <div className="my-8 rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-black/25 p-6 flex flex-col gap-6">
      <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest text-center">
        Secure Payment Gateway & Webhook Lifecycle
      </div>
      <p className="text-xs text-gray-400 text-center -mt-3">Simulates the Razorpay transactional integration built in Scentiva.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Step checklist */}
        <div className="space-y-4">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">Transaction Checklist</div>
          <div className="space-y-2">
            {stepsList.map((step, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl border flex items-center gap-2.5 transition-all duration-500 text-xs font-mono ${
                  activeStep === idx
                    ? "bg-cyan-500/10 border-cyan-500 font-bold text-cyan-600 dark:text-accent"
                    : activeStep > idx
                    ? "bg-emerald-500/5 border-emerald-500/30 text-gray-400"
                    : "bg-white dark:bg-[#111216] border-gray-200 dark:border-white/5 text-gray-500"
                }`}
              >
                {activeStep > idx ? <FiCheckCircle className="text-emerald-500" /> : <span className="w-4 h-4 rounded-full border border-gray-300 dark:border-white/10 flex items-center justify-center text-[9px] font-bold">{idx + 1}</span>}
                {step}
              </div>
            ))}
          </div>

          <button
            onClick={handleCheckout}
            disabled={processing}
            className="w-full py-3 rounded-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 text-white disabled:opacity-50 hover:shadow-md active:scale-95 transition-all text-xs"
          >
            {processing ? "Executing..." : "Start Sandbox Checkout Checkout"}
          </button>
        </div>

        {/* Logs */}
        <div className="p-4 rounded-xl border border-gray-200 dark:border-white/5 bg-white dark:bg-[#0B0B0D] flex flex-col justify-between min-h-[220px]">
          <div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono mb-3">Gateway & Webhook Console Log</div>
            <div className="space-y-2 font-mono text-[10px] text-gray-300 max-h-[145px] overflow-y-auto no-scrollbar">
              {logs.length > 0 ? (
                logs.map((log, idx) => (
                  <div
                    key={idx}
                    className={`
                      ${log.includes("successful") || log.includes("Receipt") ? "text-emerald-400 font-bold" : ""}
                      ${log.includes("webhook") ? "text-purple-400" : ""}
                      ${log.includes("[checkout]:") ? "text-gray-450" : ""}
                    `}
                  >
                    {log}
                  </div>
                ))
              ) : (
                <div className="text-gray-550 italic">Execute checkout checkout to verify webhook handshake safety logs.</div>
              )}
            </div>
          </div>
          <div className="text-[9px] text-gray-450 border-t border-gray-200 dark:border-white/5 pt-2 font-mono">
            Guarantees orders are saved even if client connection is lost
          </div>
        </div>
      </div>
    </div>
  );
}

// 10. elearning: Course Dashboard Permissions
export function ELearningVisualizer() {
  const [role, setRole] = useState("student");

  const views = {
    student: {
      desc: "Student Access Portal",
      endpoints: ["GET /courses/enrolled", "GET /lessons/video-stream"],
      features: ["Watch Course Video Lectures", "Submit Assignments", "Track Learning Progress Ticker"]
    },
    teacher: {
      desc: "Teacher Administrative Panel",
      endpoints: ["POST /courses/create", "PUT /lessons/edit", "GET /students/grades"],
      features: ["Upload Course Videos & Materials", "Grade Student Submissions", "View Dashboard Analytics"]
    },
    admin: {
      desc: "Super Admin Control Center",
      endpoints: ["GET /users/list", "DELETE /users/:id", "GET /system/billing-reports"],
      features: ["Audit Platforms Logs", "Manage Account Roles & Toggles", "Revoke Course Permissions"]
    }
  };

  return (
    <div className="my-8 rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-black/25 p-6 flex flex-col gap-6">
      <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest text-center">
        Role-Based Access Control Scope Toggler
      </div>
      <p className="text-xs text-gray-400 text-center -mt-3">Simulates administrative authorization levels implemented in E-Learning.</p>

      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* Role buttons */}
        <div className="space-y-4">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">Switch User Authorization Scope</div>
          <div className="flex flex-col gap-2">
            {Object.keys(views).map(r => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`p-3 rounded-xl border text-left flex items-center justify-between capitalize transition-all duration-300 font-mono text-xs font-bold ${
                  role === r
                    ? "bg-cyan-500/10 border-cyan-500 text-cyan-600 dark:text-accent shadow-sm"
                    : "bg-white dark:bg-[#111216] border-gray-200 dark:border-white/5 text-gray-555 hover:bg-gray-50 dark:hover:bg-white/5"
                }`}
              >
                <span>{r} View</span>
                <FiUserCheck size={14} className={role === r ? "text-cyan-500" : "text-gray-400"} />
              </button>
            ))}
          </div>
        </div>

        {/* Authorized operations list */}
        <div className="p-5 rounded-xl border border-gray-200 dark:border-white/5 bg-white dark:bg-[#0B0B0D] space-y-4">
          <div>
            <div className="text-[10px] font-bold text-cyan-500 uppercase tracking-wider font-mono mb-1">
              {views[role].desc}
            </div>
            <div className="text-[9px] text-gray-500 font-mono">
              Authorized API endpoints: {views[role].endpoints.join(", ")}
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono">Permitted Interface Capabilities</div>
            {views[role].features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs font-mono text-gray-300">
                <FiCheckCircle size={12} className="text-emerald-500 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// 11. inventory-system: Inventory & Order Management System Stock Deduction
export function InventorySystemVisualizer() {
  const [stock, setStock] = useState({ keyboard: 5, hub: 2 });
  const [qty, setQty] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState("keyboard");
  const [processing, setProcessing] = useState(false);
  const [logs, setLogs] = useState([]);

  const handlePlaceOrder = () => {
    if (processing) return;
    const available = stock[selectedProduct];

    setProcessing(true);
    setLogs([`[FastAPI]: POST /api/orders - Payload received: { product: "${selectedProduct}", qty: ${qty} }`]);

    setTimeout(() => {
      setLogs(prev => [...prev, `[SQLAlchemy]: BEGIN TRANSACTION - Isolation: SERIALIZABLE`]);

      setTimeout(() => {
        setLogs(prev => [...prev, `[SQLAlchemy]: SELECT stock FROM products WHERE id = '${selectedProduct}' FOR UPDATE`]);

        setTimeout(() => {
          if (qty > available) {
            setLogs(prev => [
              ...prev,
              `[Validation-Error]: Insufficient stock: Requested ${qty}, available ${available}`,
              `[SQLAlchemy]: ROLLBACK TRANSACTION`
            ]);
            setProcessing(false);
          } else {
            setLogs(prev => [
              ...prev,
              `[SQLAlchemy]: UPDATE products SET stock = stock - ${qty} WHERE id = '${selectedProduct}'`,
              `[SQLAlchemy]: COMMIT TRANSACTION`
            ]);
            
            setTimeout(() => {
              setStock(prev => ({
                ...prev,
                [selectedProduct]: prev[selectedProduct] - qty
              }));
              setLogs(prev => [...prev, `[FastAPI-Success]: Response 201 Created - Order completed successfully ✓`]);
              setProcessing(false);
            }, 800);
          }
        }, 1000);
      }, 1000);
    }, 1000);
  };

  return (
    <div className="my-8 rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-black/25 p-6 flex flex-col gap-6">
      <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest text-center">
        ACID Transactional Stock Deduction
      </div>
      <p className="text-xs text-gray-400 text-center -mt-3">Simulates database transaction locks and stock validation implemented in Inventory System.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Order placing card */}
        <div className="space-y-4">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">Place Stock Order</div>
          
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setSelectedProduct("keyboard")}
              className={`p-3.5 rounded-xl border text-center font-mono text-xs transition-all ${
                selectedProduct === "keyboard"
                  ? "bg-cyan-500/10 border-cyan-500 text-cyan-600 dark:text-accent font-bold"
                  : "bg-white dark:bg-[#111216] border-gray-250 dark:border-white/5 text-gray-450"
              }`}
            >
              <div>Wireless Keyboard</div>
              <div className="text-[10px] text-gray-400 mt-1">Stock: {stock.keyboard} items</div>
            </button>

            <button
              onClick={() => setSelectedProduct("hub")}
              className={`p-3.5 rounded-xl border text-center font-mono text-xs transition-all ${
                selectedProduct === "hub"
                  ? "bg-cyan-500/10 border-cyan-500 text-cyan-600 dark:text-accent font-bold"
                  : "bg-white dark:bg-[#111216] border-gray-250 dark:border-white/5 text-gray-450"
              }`}
            >
              <div>USB-C Hub</div>
              <div className="text-[10px] text-gray-400 mt-1">Stock: {stock.hub} items</div>
            </button>
          </div>

          <div className="flex gap-2">
            <select
              value={qty}
              onChange={e => setQty(parseInt(e.target.value))}
              disabled={processing}
              className="px-3 py-2.5 rounded-xl border border-gray-250 dark:border-white/5 bg-white dark:bg-[#111216] font-mono text-xs focus:outline-none text-gray-800 dark:text-white"
            >
              {[1, 2, 3, 4, 5].map(v => <option key={v} value={v}>{v} units</option>)}
            </select>

            <button
              onClick={handlePlaceOrder}
              disabled={processing}
              className="flex-1 py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-cyan-600 to-blue-600 text-white disabled:opacity-50 hover:shadow-md active:scale-95 transition-all font-mono"
            >
              {processing ? "Executing ACID Lock..." : "Simulate Place Order"}
            </button>
          </div>
        </div>

        {/* Transaction log */}
        <div className="p-4 rounded-xl border border-gray-200 dark:border-white/5 bg-white dark:bg-[#0B0B0D] flex flex-col justify-between min-h-[220px]">
          <div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono mb-3">PostgreSQL Transaction Console</div>
            <div className="space-y-2 font-mono text-[10px] text-gray-300 max-h-[145px] overflow-y-auto no-scrollbar">
              {logs.length > 0 ? (
                logs.map((log, idx) => (
                  <div
                    key={idx}
                    className={`
                      ${log.includes("Created") || log.includes("Success") || log.includes("COMMIT") ? "text-emerald-400 font-bold" : ""}
                      ${log.includes("ROLLBACK") || log.includes("Error") ? "text-red-400 font-bold" : ""}
                      ${log.includes("TRANSACTION") ? "text-purple-400" : ""}
                      ${log.includes("SELECT") || log.includes("UPDATE") ? "text-gray-400" : ""}
                    `}
                  >
                    {log}
                  </div>
                ))
              ) : (
                <div className="text-gray-550 italic">Execute simulated order placement to trace the atomic locking log stream.</div>
              )}
            </div>
          </div>
          <div className="text-[9px] text-gray-450 border-t border-gray-200 dark:border-white/5 pt-2 font-mono">
            SERIALIZABLE isolation prevents negative stock levels under load
          </div>
        </div>
      </div>
    </div>
  );
}

// 12. port-blogs: Port-blogs Portfolio Multistep Schema Builder
export function PortBlogsVisualizer() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    home: { fullName: "Aman Gupta", tagline: "MERN Stack Engineer" },
    about: { bio: "Building modern full-stack web solutions...", skills: ["React", "Node.js"] },
    resume: {
      education: [{ school: "State Tech", degree: "B.Tech CS", year: "2025" }],
      experience: []
    },
    projects: [{ title: "Port-blogs", techStack: ["MongoDB", "Express"] }],
    contact: { email: "aman@example.com", github: "github.com/aman" }
  });

  const addExperience = () => {
    setData(prev => ({
      ...prev,
      resume: {
        ...prev.resume,
        experience: [
          ...prev.resume.experience,
          { company: "Acme Corp", role: "Software Engineer Intern", duration: "6 Months" }
        ]
      }
    }));
  };

  const addSkill = (newSkill) => {
    if (data.about.skills.includes(newSkill)) return;
    setData(prev => ({
      ...prev,
      about: {
        ...prev.about,
        skills: [...prev.about.skills, newSkill]
      }
    }));
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 5));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  return (
    <div className="my-8 rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-black/25 p-6 flex flex-col gap-6">
      <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest text-center">
        Unified Multistep Portfolio Schema Builder
      </div>
      <p className="text-xs text-gray-400 text-center -mt-3">Simulates the unified schema assembly and dynamic form additions of Port-blogs.</p>

      {/* Steps indicator */}
      <div className="flex justify-between items-center max-w-md mx-auto w-full mb-2">
        {[1, 2, 3, 4, 5].map(s => (
          <div key={s} className="flex items-center flex-1 last:flex-none">
            <button
              onClick={() => setStep(s)}
              className={`w-8 h-8 rounded-full border text-xs font-mono font-bold flex items-center justify-center transition-all ${
                step === s
                  ? "bg-cyan-500 border-cyan-500 text-white shadow-md shadow-cyan-550/20"
                  : step > s
                  ? "bg-emerald-500/10 border-emerald-500 text-emerald-500"
                  : "bg-white dark:bg-[#111216] border-gray-200 dark:border-white/5 text-gray-450"
              }`}
            >
              {s}
            </button>
            {s < 5 && (
              <div
                className={`flex-1 h-0.5 mx-2 transition-colors duration-300 ${
                  step > s ? "bg-emerald-500/50" : "bg-gray-200 dark:bg-white/5"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Active Step Panel */}
        <div className="p-4 rounded-xl border border-gray-200 dark:border-white/5 bg-white dark:bg-[#111216] flex flex-col justify-between min-h-[220px]">
          <div>
            <div className="text-[10px] font-bold text-cyan-600 dark:text-accent uppercase tracking-wider font-mono mb-3">
              Step {step}: {step === 1 && "Home Header Details"}
              {step === 2 && "About Bio & Skills"}
              {step === 3 && "Dynamic Resume Grid"}
              {step === 4 && "Projects Showcase"}
              {step === 5 && "Social Contact Details"}
            </div>

            {step === 1 && (
              <div className="space-y-3 font-mono text-xs">
                <div>
                  <label className="text-[10px] text-gray-400 block mb-1">Full Name</label>
                  <input
                    type="text"
                    value={data.home.fullName}
                    onChange={e => setData(prev => ({ ...prev, home: { ...prev.home, fullName: e.target.value } }))}
                    className="w-full p-2.5 rounded-lg border border-gray-250 dark:border-white/5 bg-gray-50 dark:bg-[#0B0B0D] focus:outline-none focus:border-cyan-500 text-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-gray-400 block mb-1">Tagline</label>
                  <input
                    type="text"
                    value={data.home.tagline}
                    onChange={e => setData(prev => ({ ...prev, home: { ...prev.home, tagline: e.target.value } }))}
                    className="w-full p-2.5 rounded-lg border border-gray-250 dark:border-white/5 bg-gray-50 dark:bg-[#0B0B0D] focus:outline-none focus:border-cyan-500 text-gray-800 dark:text-white"
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-3 font-mono text-xs">
                <div>
                  <label className="text-[10px] text-gray-400 block mb-1">Bio</label>
                  <textarea
                    rows="2"
                    value={data.about.bio}
                    onChange={e => setData(prev => ({ ...prev, about: { ...prev.about, bio: e.target.value } }))}
                    className="w-full p-2.5 rounded-lg border border-gray-250 dark:border-white/5 bg-gray-50 dark:bg-[#0B0B0D] focus:outline-none focus:border-cyan-500 text-gray-800 dark:text-white resize-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-gray-400 block mb-1.5">Skills badges (Click to add)</label>
                  <div className="flex gap-1.5 flex-wrap">
                    {["MongoDB", "Express", "React", "Node.js", "Docker", "Tailwind"].map(sk => (
                      <button
                        key={sk}
                        onClick={() => addSkill(sk)}
                        className={`px-2 py-1 rounded text-[10px] border transition ${
                          data.about.skills.includes(sk)
                            ? "bg-cyan-500/10 border-cyan-500 text-cyan-600 dark:text-accent font-bold"
                            : "bg-gray-55 dark:bg-[#0B0B0D] border-gray-200 dark:border-white/5 text-gray-450 hover:border-gray-400"
                        }`}
                      >
                        +{sk}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-gray-400">Education Count: {data.resume.education.length}</span>
                </div>
                <div className="border border-gray-200 dark:border-white/5 rounded-lg max-h-[85px] overflow-y-auto p-2 space-y-1.5 bg-gray-50 dark:bg-[#0B0B0D]/50">
                  {data.resume.education.map((edu, i) => (
                    <div key={i} className="text-[10px] p-1.5 bg-white dark:bg-[#0B0B0D] border border-gray-200 dark:border-white/5 rounded flex justify-between">
                      <span>{edu.degree} - {edu.school}</span>
                      <span className="text-gray-450">{edu.year}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-1.5 border-t border-gray-200 dark:border-white/5">
                  <span className="text-[10px] text-gray-400">Experience Count: {data.resume.experience.length}</span>
                  <button
                    onClick={addExperience}
                    className="px-2 py-1 rounded bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-500/30 text-[9px] font-bold text-cyan-600 dark:text-accent font-mono transition hover:bg-cyan-500/5 active:scale-95"
                  >
                    + Add Job Row
                  </button>
                </div>
                <div className="border border-gray-200 dark:border-white/5 rounded-lg max-h-[85px] overflow-y-auto p-2 space-y-1.5 bg-gray-50 dark:bg-[#0B0B0D]/50">
                  {data.resume.experience.length > 0 ? (
                    data.resume.experience.map((exp, i) => (
                      <div key={i} className="text-[10px] p-1.5 bg-white dark:bg-[#0B0B0D] border border-gray-200 dark:border-white/5 rounded flex justify-between">
                        <span>{exp.role} at {exp.company}</span>
                        <span className="text-gray-455">{exp.duration}</span>
                      </div>
                    ))
                  ) : (
                    <div className="text-[10px] text-gray-450 italic text-center py-2">No work experiences added. Click Add Job Row.</div>
                  )}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-3 font-mono text-xs">
                <div className="text-[11px] font-bold text-gray-800 dark:text-gray-200">Active Form Project Node</div>
                <div className="p-3 border border-gray-250 dark:border-white/5 rounded-lg bg-gray-50 dark:bg-[#0B0B0D] space-y-1.5">
                  <div className="text-xs font-bold text-cyan-600 dark:text-accent">{data.projects[0].title}</div>
                  <div className="text-[10px] text-gray-400">Tech Stack: {data.projects[0].techStack.join(", ")}</div>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-3 font-mono text-xs">
                <div>
                  <label className="text-[10px] text-gray-400 block mb-1">Email</label>
                  <input
                    type="text"
                    value={data.contact.email}
                    onChange={e => setData(prev => ({ ...prev, contact: { ...prev.contact, email: e.target.value } }))}
                    className="w-full p-2.5 rounded-lg border border-gray-250 dark:border-white/5 bg-gray-50 dark:bg-[#0B0B0D] focus:outline-none focus:border-cyan-500 text-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-gray-400 block mb-1">GitHub</label>
                  <input
                    type="text"
                    value={data.contact.github}
                    onChange={e => setData(prev => ({ ...prev, contact: { ...prev.contact, github: e.target.value } }))}
                    className="w-full p-2.5 rounded-lg border border-gray-250 dark:border-white/5 bg-gray-50 dark:bg-[#0B0B0D] focus:outline-none focus:border-cyan-500 text-gray-800 dark:text-white"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between gap-3 mt-4 border-t border-gray-200 dark:border-white/5 pt-3 shrink-0">
            <button
              onClick={prevStep}
              disabled={step === 1}
              className="px-4 py-2 rounded-xl border border-gray-250 dark:border-white/5 text-xs font-bold font-mono text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5 disabled:opacity-30 transition"
            >
              Back
            </button>
            <button
              onClick={nextStep}
              disabled={step === 5}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs font-bold font-mono hover:shadow-md disabled:opacity-30 transition"
            >
              Next Step
            </button>
          </div>
        </div>

        {/* Live MongoDB Document Preview */}
        <div className="p-5 rounded-xl border border-gray-200 dark:border-white/5 bg-white dark:bg-[#0B0B0D] flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono mb-4">Mongoose Consolidated Document State</div>
            <pre className="text-[10px] font-mono text-cyan-500 overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-[185px] no-scrollbar">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
          <div className="text-[9px] text-gray-450 border-t border-gray-200 dark:border-white/5 pt-2 font-mono">
            Compiles the dynamic schema payload reactively on form inputs
          </div>
        </div>
      </div>
    </div>
  );
}
