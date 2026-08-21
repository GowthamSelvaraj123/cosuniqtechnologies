(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/CinematicHero.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "CinematicHero-module__Lo_MJG__active",
  "centerArrow": "CinematicHero-module__Lo_MJG__centerArrow",
  "circularCta": "CinematicHero-module__Lo_MJG__circularCta",
  "circularText": "CinematicHero-module__Lo_MJG__circularText",
  "circularTextWrapper": "CinematicHero-module__Lo_MJG__circularTextWrapper",
  "ctaProminent": "CinematicHero-module__Lo_MJG__ctaProminent",
  "ctaWrapper": "CinematicHero-module__Lo_MJG__ctaWrapper",
  "cursorGradient": "CinematicHero-module__Lo_MJG__cursorGradient",
  "exiting": "CinematicHero-module__Lo_MJG__exiting",
  "floatReady": "CinematicHero-module__Lo_MJG__floatReady",
  "heroContent": "CinematicHero-module__Lo_MJG__heroContent",
  "heroRoot": "CinematicHero-module__Lo_MJG__heroRoot",
  "heroText": "CinematicHero-module__Lo_MJG__heroText",
  "previous": "CinematicHero-module__Lo_MJG__previous",
  "spinText": "CinematicHero-module__Lo_MJG__spinText",
});
}),
"[project]/components/CinematicHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CinematicHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CinematicHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/CinematicHero.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/canvas-confetti/dist/confetti.module.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ParticleField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ParticleField.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const sequence = [
    "Your brand can do more.",
    "More attention.",
    "More impact.",
    "More connection.",
    "More growth.",
    "Websites that stand out.",
    "Web apps that move business.",
    "Mobile apps that connect.",
    "Branding people remember.",
    "We discuss. We design. We build.",
    "Everything to grow."
];
function CinematicHero() {
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showCTA, setShowCTA] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEntered, setIsEntered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isExiting, setIsExiting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [transitionProgress, setTransitionProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [textTransitionProgress, setTextTransitionProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isHoveringCTA, setIsHoveringCTA] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const gradientRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CinematicHero.useEffect": ()=>{
            let animationFrameId;
            let targetX = window.innerWidth / 2;
            let targetY = window.innerHeight / 2;
            let currentX = targetX;
            let currentY = targetY;
            const handleMouseMove = {
                "CinematicHero.useEffect.handleMouseMove": (e)=>{
                    targetX = e.clientX;
                    targetY = e.clientY;
                }
            }["CinematicHero.useEffect.handleMouseMove"];
            const updateGradient = {
                "CinematicHero.useEffect.updateGradient": ()=>{
                    // Fluid interpolation
                    currentX += (targetX - currentX) * 0.08;
                    currentY += (targetY - currentY) * 0.08;
                    if (gradientRef.current) {
                        gradientRef.current.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
                    }
                    animationFrameId = requestAnimationFrame(updateGradient);
                }
            }["CinematicHero.useEffect.updateGradient"];
            window.addEventListener('mousemove', handleMouseMove);
            updateGradient();
            return ({
                "CinematicHero.useEffect": ()=>{
                    window.removeEventListener('mousemove', handleMouseMove);
                    cancelAnimationFrame(animationFrameId);
                }
            })["CinematicHero.useEffect"];
        }
    }["CinematicHero.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CinematicHero.useEffect": ()=>{
            // Lock scrolling on both body and html to ensure no scrollbars appear
            if (!isEntered && !isExiting) {
                document.body.style.overflow = "hidden";
                document.documentElement.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
                document.documentElement.style.overflow = "";
            }
            return ({
                "CinematicHero.useEffect": ()=>{
                    document.body.style.overflow = "";
                    document.documentElement.style.overflow = "";
                }
            })["CinematicHero.useEffect"];
        }
    }["CinematicHero.useEffect"], [
        isEntered,
        isExiting
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CinematicHero.useEffect": ()=>{
            if (currentIndex < sequence.length - 1) {
                const timer = setTimeout({
                    "CinematicHero.useEffect.timer": ()=>{
                        setCurrentIndex({
                            "CinematicHero.useEffect.timer": (prev)=>prev + 1
                        }["CinematicHero.useEffect.timer"]);
                    }
                }["CinematicHero.useEffect.timer"], 3500); // 3.5s per line
                return ({
                    "CinematicHero.useEffect": ()=>clearTimeout(timer)
                })["CinematicHero.useEffect"];
            } else {
                const ctaTimer = setTimeout({
                    "CinematicHero.useEffect.ctaTimer": ()=>{
                        setShowCTA(true);
                    }
                }["CinematicHero.useEffect.ctaTimer"], 1000); // Wait 1s after last text appears to show CTA
                return ({
                    "CinematicHero.useEffect": ()=>clearTimeout(ctaTimer)
                })["CinematicHero.useEffect"];
            }
        }
    }["CinematicHero.useEffect"], [
        currentIndex
    ]);
    // Fire a 1-second pulse for the text transition shader whenever the scene changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CinematicHero.useEffect": ()=>{
            if (currentIndex === 0) return; // Don't fire on initial load
            const duration = 1000;
            const startTime = performance.now();
            let animationFrameId;
            const animateTextTransition = {
                "CinematicHero.useEffect.animateTextTransition": (time)=>{
                    const elapsed = time - startTime;
                    const progress = Math.min(elapsed / duration, 1.0);
                    setTextTransitionProgress(progress);
                    if (progress < 1.0) {
                        animationFrameId = requestAnimationFrame(animateTextTransition);
                    }
                }
            }["CinematicHero.useEffect.animateTextTransition"];
            animationFrameId = requestAnimationFrame(animateTextTransition);
            return ({
                "CinematicHero.useEffect": ()=>cancelAnimationFrame(animationFrameId)
            })["CinematicHero.useEffect"];
        }
    }["CinematicHero.useEffect"], [
        currentIndex
    ]);
    const handleEnter = (e)=>{
        if (transitionProgress > 0) return; // Prevent multiple clicks
        // Trigger massive festival splash across the entire screen!
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            particleCount: 350,
            spread: 360,
            startVelocity: 55,
            origin: {
                x: 0.5,
                y: 0.5
            },
            colors: [
                '#ffffff',
                '#ff5e00',
                '#000000',
                '#ff8c00',
                '#ff3300'
            ],
            zIndex: 99999
        });
        // Animate transitionProgress from 0 to 1 over 1.5 seconds
        const duration = 1500;
        const startTime = performance.now();
        let exitTriggered = false;
        const animateTransition = (time)=>{
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1.0);
            setTransitionProgress(progress);
            if (progress > 0.8 && !exitTriggered) {
                exitTriggered = true;
                setIsExiting(true); // Trigger CSS exit animation near the end of the webgl distortion
            }
            if (progress < 1.0) {
                requestAnimationFrame(animateTransition);
            } else {
                setTimeout(()=>{
                    setIsEntered(true);
                }, 800); // Wait for the remaining CSS exit animation
            }
        };
        requestAnimationFrame(animateTransition);
    };
    if (isEntered) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CinematicHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroRoot} ${isExiting ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CinematicHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].exiting : ""}`,
        onClick: handleEnter,
        style: {
            cursor: "pointer"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: gradientRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CinematicHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cursorGradient
            }, void 0, false, {
                fileName: "[project]/components/CinematicHero.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ParticleField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                transitionProgress: transitionProgress,
                textTransitionProgress: textTransitionProgress,
                isHoveringCTA: isHoveringCTA
            }, void 0, false, {
                fileName: "[project]/components/CinematicHero.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CinematicHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroContent,
                children: sequence.map((text, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CinematicHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroText} ${idx === currentIndex ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CinematicHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""} ${idx < currentIndex ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CinematicHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].previous : ""}`,
                        "aria-hidden": idx !== currentIndex,
                        children: text
                    }, idx, false, {
                        fileName: "[project]/components/CinematicHero.tsx",
                        lineNumber: 176,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/CinematicHero.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CinematicHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctaWrapper} ${showCTA ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CinematicHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctaProminent : ""}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleEnter,
                    onMouseEnter: ()=>setIsHoveringCTA(true),
                    onMouseLeave: ()=>setIsHoveringCTA(false),
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CinematicHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].circularCta,
                    "aria-label": "Start Our Branding Story",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CinematicHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].circularTextWrapper,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 100 100",
                                width: "100%",
                                height: "100%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            id: "circlePath",
                                            d: "M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CinematicHero.tsx",
                                            lineNumber: 199,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/CinematicHero.tsx",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CinematicHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].circularText,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textPath", {
                                            href: "#circlePath",
                                            startOffset: "0%",
                                            children: "START OUR BRANDING STORY • START OUR BRANDING STORY •"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CinematicHero.tsx",
                                            lineNumber: 205,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/CinematicHero.tsx",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CinematicHero.tsx",
                                lineNumber: 197,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/CinematicHero.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CinematicHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].centerArrow,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "32",
                                height: "32",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M5 12H19M19 12L12 5M19 12L12 19",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/components/CinematicHero.tsx",
                                    lineNumber: 213,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CinematicHero.tsx",
                                lineNumber: 212,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/CinematicHero.tsx",
                            lineNumber: 211,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CinematicHero.tsx",
                    lineNumber: 189,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/CinematicHero.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CinematicHero.tsx",
        lineNumber: 162,
        columnNumber: 5
    }, this);
}
_s(CinematicHero, "zBMDz3ThbyFtfCMDpD5NO0KmpZI=");
_c = CinematicHero;
var _c;
__turbopack_context__.k.register(_c, "CinematicHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/HeroSlider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const slides = [
    {
        image: "/assets/images/hero-tech.png",
        alt: "Software and technology team",
        eyebrow: "Cosuniq Technologies",
        title: "We build software that <em>scales</em>.",
        sub: "Custom SaaS, apps, and platforms engineered to solve real problems — and grow with your business.",
        cta: "Be our next happy client",
        link: "/contact"
    },
    {
        image: "/assets/images/hero-brand.png",
        alt: "Brand and design workspace",
        eyebrow: "Design · Brand · Web",
        title: "Beyond boundaries of <em>ordinary</em>.",
        sub: "Brand identity and websites that feel premium, convert better, and stay unmistakably you.",
        cta: "Explore services",
        link: "/services"
    },
    {
        image: "/assets/images/dashboard.png",
        alt: "Digital product dashboard",
        eyebrow: "CRM · Commerce · AI",
        title: "Digital systems that <em>deliver</em>.",
        sub: "CRM, e-commerce, and AI-accelerated workflows — connected so nothing gets lost between your product and your customers.",
        cta: "Book a discovery",
        link: "/contact"
    },
    {
        image: "/assets/images/hero-creative.png",
        alt: "Creative visual storytelling",
        eyebrow: "Creative studio",
        title: "In a realm of <em>wonder</em>.",
        sub: "Video, motion, and storytelling that make brands memorable — crafted with the same care as our code.",
        cta: "See the work",
        link: "/portfolio"
    }
];
function HeroSlider() {
    _s();
    const [heroIndex, setHeroIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const heroRootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const heroTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const HERO_MS = 6000;
    const pad = (n)=>n < 10 ? "0" + n : String(n);
    const goHero = (i)=>{
        setHeroIndex((i + slides.length) % slides.length);
    };
    const startHeroAuto = ()=>{
        stopHeroAuto();
        heroTimer.current = setInterval(()=>{
            setHeroIndex((prev)=>(prev + 1) % slides.length);
        }, HERO_MS);
    };
    const stopHeroAuto = ()=>{
        if (heroTimer.current) clearInterval(heroTimer.current);
        heroTimer.current = null;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSlider.useEffect": ()=>{
            startHeroAuto();
            return stopHeroAuto;
        }
    }["HeroSlider.useEffect"], []);
    const handleMouseEnter = ()=>stopHeroAuto();
    const handleMouseLeave = ()=>startHeroAuto();
    const handleMouseMove = (e)=>{
        if (!heroRootRef.current) return;
        const active = heroRootRef.current.querySelector(".hero-slide.is-active .hero-slide__media");
        if (!active) return;
        const rect = heroRootRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        active.style.transform = `translate(${x * 18}px, ${y * 12}px)`;
    };
    const handleMouseLeaveRoot = ()=>{
        startHeroAuto();
        if (!heroRootRef.current) return;
        const active = heroRootRef.current.querySelector(".hero-slide.is-active .hero-slide__media");
        if (active) active.style.transform = "translate(0, 0)";
    };
    // Drag logic
    const startX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const handlePointerDown = (e)=>{
        if (e.target.closest("a, button")) return;
        setIsDragging(true);
        startX.current = e.clientX;
        stopHeroAuto();
    };
    const handlePointerUp = (e)=>{
        if (!isDragging) return;
        setIsDragging(false);
        const dx = e.clientX - startX.current;
        if (Math.abs(dx) > 60) {
            goHero(dx < 0 ? heroIndex + 1 : heroIndex - 1);
        }
        startHeroAuto();
    };
    const handlePointerCancel = ()=>{
        setIsDragging(false);
        startHeroAuto();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `hero-slider ${isDragging ? "is-dragging" : ""}`,
        id: "hero-slider",
        "aria-roledescription": "carousel",
        "aria-label": "Cosuniq highlights",
        ref: heroRootRef,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeaveRoot,
        onMouseMove: handleMouseMove,
        onPointerDown: handlePointerDown,
        onPointerUp: handlePointerUp,
        onPointerCancel: handlePointerCancel,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-slides",
                id: "hero-track",
                children: slides.map((slide, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: `hero-slide ${idx === heroIndex ? "is-active" : ""}`,
                        "data-slide": idx,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-slide__media",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: slide.image,
                                    alt: slide.alt,
                                    draggable: "false"
                                }, void 0, false, {
                                    fileName: "[project]/components/HeroSlider.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/HeroSlider.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-slide__veil"
                            }, void 0, false, {
                                fileName: "[project]/components/HeroSlider.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "container hero-slide__content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "hero-slide__eyebrow",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "spark spark--inline"
                                            }, void 0, false, {
                                                fileName: "[project]/components/HeroSlider.tsx",
                                                lineNumber: 141,
                                                columnNumber: 50
                                            }, this),
                                            " ",
                                            slide.eyebrow
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/HeroSlider.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        dangerouslySetInnerHTML: {
                                            __html: slide.title
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/HeroSlider.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "hero-slide__sub",
                                        children: slide.sub
                                    }, void 0, false, {
                                        fileName: "[project]/components/HeroSlider.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hero-slide__actions",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "btn btn-primary",
                                                href: slide.link,
                                                children: slide.cta
                                            }, void 0, false, {
                                                fileName: "[project]/components/HeroSlider.tsx",
                                                lineNumber: 145,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "hero-more",
                                                href: "#section-a",
                                                children: [
                                                    "more ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                        fileName: "[project]/components/HeroSlider.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 65
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/HeroSlider.tsx",
                                                lineNumber: 146,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/HeroSlider.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/HeroSlider.tsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/components/HeroSlider.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/HeroSlider.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-slider__ui",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-slider__count",
                        "aria-live": "polite",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                id: "hero-current",
                                children: pad(heroIndex + 1)
                            }, void 0, false, {
                                fileName: "[project]/components/HeroSlider.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sep",
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/components/HeroSlider.tsx",
                                lineNumber: 155,
                                columnNumber: 62
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                id: "hero-total",
                                children: pad(slides.length)
                            }, void 0, false, {
                                fileName: "[project]/components/HeroSlider.tsx",
                                lineNumber: 155,
                                columnNumber: 92
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HeroSlider.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-slider__nav",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "hero-nav-btn",
                                id: "hero-prev",
                                "aria-label": "Previous slide",
                                onClick: ()=>goHero(heroIndex - 1),
                                children: "PREV"
                            }, void 0, false, {
                                fileName: "[project]/components/HeroSlider.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hero-nav-divider",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/HeroSlider.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "hero-nav-btn",
                                id: "hero-next",
                                "aria-label": "Next slide",
                                onClick: ()=>goHero(heroIndex + 1),
                                children: "NEXT"
                            }, void 0, false, {
                                fileName: "[project]/components/HeroSlider.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HeroSlider.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-slider__progress",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "is-animating",
                            style: {
                                width: "100%",
                                animationDuration: `${HERO_MS}ms`
                            }
                        }, heroIndex, false, {
                            fileName: "[project]/components/HeroSlider.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/HeroSlider.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/HeroSlider.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "hero-scroll-a",
                href: "#section-a",
                "aria-label": "Scroll to start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "A"
                    }, void 0, false, {
                        fileName: "[project]/components/HeroSlider.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: "Scroll"
                    }, void 0, false, {
                        fileName: "[project]/components/HeroSlider.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/HeroSlider.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/HeroSlider.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
}
_s(HeroSlider, "qO9hQnvPF6ai3emxpWixYBi12fY=");
_c = HeroSlider;
var _c;
__turbopack_context__.k.register(_c, "HeroSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/InitReveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InitReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function InitReveal() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InitReveal.useEffect": ()=>{
            const reveals = document.querySelectorAll(".reveal");
            if (reveals.length && "IntersectionObserver" in window) {
                const io = new IntersectionObserver({
                    "InitReveal.useEffect": function(entries) {
                        entries.forEach({
                            "InitReveal.useEffect": function(entry) {
                                if (entry.isIntersecting) {
                                    entry.target.classList.add("visible");
                                    io.unobserve(entry.target);
                                }
                            }
                        }["InitReveal.useEffect"]);
                    }
                }["InitReveal.useEffect"], {
                    threshold: 0.12,
                    rootMargin: "0px 0px -30px 0px"
                });
                reveals.forEach({
                    "InitReveal.useEffect": function(el) {
                        // Reset visibility when routing
                        el.classList.remove("visible");
                        io.observe(el);
                    }
                }["InitReveal.useEffect"]);
                return ({
                    "InitReveal.useEffect": ()=>{
                        io.disconnect();
                    }
                })["InitReveal.useEffect"];
            } else {
                reveals.forEach({
                    "InitReveal.useEffect": function(el) {
                        el.classList.add("visible");
                    }
                }["InitReveal.useEffect"]);
            }
        }
    }["InitReveal.useEffect"], [
        pathname
    ]);
    return null;
}
_s(InitReveal, "V/ldUoOTYUs0Cb2F6bbxKSn7KxI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = InitReveal;
var _c;
__turbopack_context__.k.register(_c, "InitReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ParticleField.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ParticleField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-156d8d12.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-156d8d12.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
// 3D Simplex Noise from Ashima Arts (MIT License)
const snoiseGLSL = `
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) { 
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 = v - i + dot(i, C.xxx) ;

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; 
  vec3 x3 = x0 - D.yyy;      

  i = mod289(i); 
  vec4 p = permute( permute( permute( 
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  float n_ = 0.142857142857;
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                dot(p2,x2), dot(p3,x3) ) );
}
`;
const vertexShader = `
  ${snoiseGLSL}

  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uTransition;
  uniform float uTextTransition;
  uniform float uHoveringCTA;
  
  attribute float size;
  attribute float randomOffset;
  
  varying float vAlpha;
  varying float vDepth;
  varying float vProtection;
  
  void main() {
    // Continuous lifecycle based on uTime and random offset
    // Speed of cycle
    float cycleSpeed = 0.05; 
    float life = fract(uTime * cycleSpeed + randomOffset);
    
    // Seed parameters from position
    // position.x = base radius scalar, position.y = base angle, position.z = base depth
    float baseAngle = position.y;
    float baseRadiusScalar = position.x;
    
    vec3 pos = vec3(0.0);
    float currentRadius = 0.0;
    
    // 1. Central Magnetic Core Lifecycle
    // Phases: 
    // 0.0 - 0.4: Float & Attract (from edges to core)
    // 0.4 - 0.8: Magnetic Core (dense orbiting ring)
    // 0.8 - 1.0: Disperse (shoot outward)
    
    if (life < 0.4) {
      // Attract from far edges (radius 1000 to 200)
      float t = life / 0.4;
      currentRadius = mix(1200.0, 200.0, t) + (baseRadiusScalar * 100.0);
      baseAngle += t * 2.5; // Tangential spiraling inward
    } else if (life < 0.8) {
      // Magnetic Core Orbit (Tight vortex ring)
      float t = (life - 0.4) / 0.4;
      currentRadius = 200.0 + sin(t * 3.14159) * 30.0 + (baseRadiusScalar * 40.0);
      baseAngle += 1.0 + t * 6.0; // Fast vortex orbit
    } else {
      // Release & Disperse
      float t = (life - 0.8) / 0.2;
      currentRadius = mix(200.0, 1500.0, t) + (baseRadiusScalar * 150.0);
      baseAngle += 7.0 + t * 1.5; 
    }
    
    pos.x = cos(baseAngle) * currentRadius;
    pos.y = sin(baseAngle) * currentRadius;
    pos.z = position.z + snoise(vec3(pos.x * 0.02, pos.y * 0.02, uTime * 0.2)) * 30.0;
    
    // Add organic noise displacement
    pos.x += snoise(vec3(pos.y * 0.01, pos.z * 0.01, uTime * 0.1 + randomOffset)) * 20.0;
    pos.y += snoise(vec3(pos.x * 0.01, pos.z * 0.01, uTime * 0.1 + randomOffset)) * 20.0;

    // 2. Cursor Influence (Secondary Force ~ 20%)
    vec2 mouseWorld = uMouse * vec2(200.0, 120.0); 
    float distToMouse = distance(pos.xy, mouseWorld);
    
    if (distToMouse < 150.0) {
      float magForce = smoothstep(150.0, 0.0, distToMouse);
      // Gentle curve toward cursor (only 20% influence)
      vec2 dirToMouse = normalize(mouseWorld - pos.xy);
      vec2 orbitalDir = vec2(-dirToMouse.y, dirToMouse.x); 
      
      pos.xy += orbitalDir * magForce * 8.0; // Tangential bend (reduced influence)
      pos.xy = mix(pos.xy, mouseWorld, magForce * 0.08); // Slight pull
      pos.z += magForce * 12.0; // Slight lift
    }
    
    // 3. Text Synchronization (Massive Compression -> Expansion)
    if (uTextTransition > 0.0) {
      float t = uTextTransition; 
      float distToCenter = distance(pos.xy, vec2(0.0));
      
      if (t < 0.3) {
        // Sudden massive convergence
        float compress = smoothstep(0.0, 0.3, t);
        pos.xy = mix(pos.xy, vec2(0.0), compress * 0.6 * smoothstep(800.0, 0.0, distToCenter));
        pos.z = mix(pos.z, -50.0, compress);
      } else {
        // Explosive expansion
        float exp = smoothstep(0.3, 1.0, t);
        pos.xy += normalize(pos.xy) * exp * 150.0;
        pos.z += sin(distToCenter * 0.05 - uTime * 5.0) * exp * 40.0;
      }
    }
    
    // 4. CTA Hover Interaction (Flow from Center to CTA)
    vec2 ctaPos = vec2(120.0, -80.0); 
    if (uHoveringCTA > 0.0) {
      float distToCTA = distance(pos.xy, ctaPos);
      float ctaPull = smoothstep(300.0, 0.0, distToCTA) * uHoveringCTA;
      
      vec2 dirToCTA = normalize(ctaPos - pos.xy);
      pos.xy += dirToCTA * ctaPull * 40.0;
      pos.z += ctaPull * 20.0;
    }
    
    // 5. Cinematic Click Transition (Accelerating Singularity)
    if (uTransition > 0.0) {
      float distToCTA = distance(pos.xy, ctaPos);
      
      if (uTransition < 0.5) {
        // Rapid acceleration into a dense core at the CTA
        float pull = smoothstep(0.0, 0.5, uTransition);
        vec2 dirToCTA = normalize(ctaPos - pos.xy);
        vec2 orbitDir = vec2(-dirToCTA.y, dirToCTA.x);
        
        pos.xy += orbitDir * pull * 150.0; // Massive spiral
        pos.xy = mix(pos.xy, ctaPos, pull * 0.95);
        pos.z = mix(pos.z, -200.0, pull);
      } else {
        // Universal Explosion
        float exp = smoothstep(0.5, 1.0, uTransition);
        vec2 fullyPulledXY = mix(pos.xy, ctaPos, 0.95);
        float fullyPulledZ = -200.0;
        
        pos.xy = fullyPulledXY + normalize(fullyPulledXY - ctaPos) * exp * 600.0;
        pos.z = fullyPulledZ + exp * 300.0;
      }
    }
    
    // 6. Text Protection Zone (CRITICAL: 45-55% Width Halo)
    // Create a very wide elliptical zone that covers the typography completely
    float ellipseDist = length(vec2(pos.x * 0.25, pos.y * 1.2)); 
    float protectionRadius = 45.0; 
    
    // Smooth transition for the halo effect
    float inZone = smoothstep(protectionRadius + 40.0, protectionRadius, ellipseDist);
    
    // Curve particles radially and tangentially around the text area
    vec2 awayFromCenter = normalize(pos.xy);
    vec2 tangentialFlow = vec2(-awayFromCenter.y, awayFromCenter.x);
    pos.xy += (awayFromCenter * 50.0 + tangentialFlow * 40.0) * inZone; 
    
    // Push deeply behind the text so they don't cross in front
    pos.z -= inZone * 120.0; 
    
    // Send protection strength to fragment for near-zero opacity in the center
    vProtection = inZone;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    vDepth = pos.z;

    // Dynamic sizing (significantly larger)
    gl_PointSize = size * (400.0 / -mvPosition.z);
    gl_PointSize = clamp(gl_PointSize, 2.0, 15.0);
    
    // Smooth lifecycle fade in/out
    float lifeFade = smoothstep(0.0, 0.1, life) * (1.0 - smoothstep(0.9, 1.0, life));
    
    // Base depth alpha (much higher base opacity)
    vAlpha = (smoothstep(-120.0, 20.0, pos.z) * 0.8 + 0.4) * lifeFade;
    
    if (uTransition > 0.7) {
      vAlpha *= 1.0 - smoothstep(0.7, 1.0, uTransition);
    }
    
    gl_Position = projectionMatrix * mvPosition;
  }
`;
const fragmentShader = `
  varying float vAlpha;
  varying float vDepth;
  varying float vProtection;
  
  void main() {
    vec2 xy = gl_PointCoord.xy - vec2(0.5);
    float ll = length(xy);
    if (ll > 0.5) discard;
    
    // Sharper, more visible particle edge
    float baseAlpha = smoothstep(0.5, 0.2, ll) * vAlpha;
    
    // Text Protection Halo: Particles passing behind text fade almost entirely
    float a = baseAlpha * (1.0 - (vProtection * 0.99));
    
    // Magnetic Palette: Exact requested colors
    // #722A00 (darkest) to #D95400 (lightest)
    vec3 colorBack = vec3(0.447, 0.165, 0.0); // #722A00
    vec3 colorMid = vec3(0.588, 0.220, 0.0);  // #963800
    vec3 colorFront = vec3(0.851, 0.329, 0.0); // #D95400
    
    // Z depth mapping
    float depthMix = smoothstep(-50.0, 30.0, vDepth);
    
    vec3 finalColor;
    if (depthMix < 0.5) {
      finalColor = mix(colorBack, colorMid, depthMix * 2.0);
    } else {
      finalColor = mix(colorMid, colorFront, (depthMix - 0.5) * 2.0);
    }
    
    gl_FragColor = vec4(finalColor, a);
  }
`;
function Particles({ transitionProgress, textTransitionProgress, isHoveringCTA, mousePos }) {
    _s();
    const { size, camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const materialRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Fixed particle count to avoid WebGL buffer resizing bugs on initial load
    const particleCount = 3500;
    const [positions, sizes, randoms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Particles.useMemo": ()=>{
            const positions = new Float32Array(particleCount * 3);
            const sizes = new Float32Array(particleCount);
            const randoms = new Float32Array(particleCount);
            for(let i = 0; i < particleCount; i++){
                // X = base radius random scalar (-1 to 1)
                // Y = base angle (0 to 2PI)
                // Z = base depth (-100 to 10)
                positions[i * 3] = (Math.random() - 0.5) * 2.0;
                positions[i * 3 + 1] = Math.random() * Math.PI * 2.0;
                positions[i * 3 + 2] = (Math.random() - 0.5) * 110 - 45;
                // Dramatically increase particle size
                sizes[i] = Math.random() * 5.0 + 3.0;
                randoms[i] = Math.random(); // 0 to 1 for lifecycle offset
            }
            return [
                positions,
                sizes,
                randoms
            ];
        }
    }["Particles.useMemo"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "Particles.useFrame": (state, delta)=>{
            timeRef.current += delta;
            if (materialRef.current) {
                materialRef.current.uniforms.uTime.value = timeRef.current;
                const currentMouse = materialRef.current.uniforms.uMouse.value;
                currentMouse.x += (mousePos.current[0] - currentMouse.x) * 0.12;
                currentMouse.y += (mousePos.current[1] - currentMouse.y) * 0.12;
                const currentHover = materialRef.current.uniforms.uHoveringCTA.value;
                const targetHover = isHoveringCTA ? 1.0 : 0.0;
                materialRef.current.uniforms.uHoveringCTA.value += (targetHover - currentHover) * 0.08;
                materialRef.current.uniforms.uTransition.value = transitionProgress;
                materialRef.current.uniforms.uTextTransition.value = textTransitionProgress;
            }
            if (transitionProgress === 0) {
                const targetX = mousePos.current[0] * 5;
                const targetY = mousePos.current[1] * 5;
                camera.position.x += (targetX - camera.position.x) * 0.01;
                camera.position.y += (targetY - camera.position.y) * 0.01;
                camera.position.z = 90 + Math.sin(timeRef.current * 0.2) * 5.0;
                camera.lookAt(0, 0, 0);
            }
        }
    }["Particles.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("points", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferGeometry", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                        attach: "attributes-position",
                        count: particleCount,
                        array: positions,
                        itemSize: 3
                    }, void 0, false, {
                        fileName: "[project]/components/ParticleField.tsx",
                        lineNumber: 351,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                        attach: "attributes-size",
                        count: particleCount,
                        array: sizes,
                        itemSize: 1
                    }, void 0, false, {
                        fileName: "[project]/components/ParticleField.tsx",
                        lineNumber: 352,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                        attach: "attributes-randomOffset",
                        count: particleCount,
                        array: randoms,
                        itemSize: 1
                    }, void 0, false, {
                        fileName: "[project]/components/ParticleField.tsx",
                        lineNumber: 353,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ParticleField.tsx",
                lineNumber: 350,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("shaderMaterial", {
                ref: materialRef,
                vertexShader: vertexShader,
                fragmentShader: fragmentShader,
                transparent: true,
                depthWrite: false,
                uniforms: {
                    uTime: {
                        value: 0
                    },
                    uMouse: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 0)
                    },
                    uTransition: {
                        value: 0
                    },
                    uTextTransition: {
                        value: 0
                    },
                    uHoveringCTA: {
                        value: 0
                    }
                }
            }, void 0, false, {
                fileName: "[project]/components/ParticleField.tsx",
                lineNumber: 355,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ParticleField.tsx",
        lineNumber: 349,
        columnNumber: 5
    }, this);
}
_s(Particles, "umL1Rufz/S5hJx7+Wtt2Swhdgag=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = Particles;
function ParticleField({ transitionProgress, textTransitionProgress, isHoveringCTA }) {
    _s1();
    const targetMouse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([
        0,
        0
    ]);
    const isTouch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticleField.useEffect": ()=>{
            let animationFrameId;
            let t = 0;
            const handleMouseMove = {
                "ParticleField.useEffect.handleMouseMove": (e)=>{
                    isTouch.current = false;
                    targetMouse.current[0] = e.clientX / window.innerWidth * 2 - 1;
                    targetMouse.current[1] = -(e.clientY / window.innerHeight) * 2 + 1;
                }
            }["ParticleField.useEffect.handleMouseMove"];
            const handleTouchStart = {
                "ParticleField.useEffect.handleTouchStart": ()=>{
                    isTouch.current = true;
                }
            }["ParticleField.useEffect.handleTouchStart"];
            const autonomousUpdate = {
                "ParticleField.useEffect.autonomousUpdate": ()=>{
                    if (isTouch.current) {
                        t += 0.005; // Slow ambient orbit
                        targetMouse.current[0] = Math.sin(t) * 0.6;
                        targetMouse.current[1] = Math.cos(t * 0.8) * 0.6;
                    }
                    animationFrameId = requestAnimationFrame(autonomousUpdate);
                }
            }["ParticleField.useEffect.autonomousUpdate"];
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('touchstart', handleTouchStart);
            autonomousUpdate();
            return ({
                "ParticleField.useEffect": ()=>{
                    window.removeEventListener('mousemove', handleMouseMove);
                    window.removeEventListener('touchstart', handleTouchStart);
                    cancelAnimationFrame(animationFrameId);
                }
            })["ParticleField.useEffect"];
        }
    }["ParticleField.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            pointerEvents: 'none'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            style: {
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0
            },
            camera: {
                position: [
                    0,
                    0,
                    90
                ],
                fov: 45
            },
            dpr: [
                1,
                2
            ],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Particles, {
                transitionProgress: transitionProgress,
                textTransitionProgress: textTransitionProgress,
                isHoveringCTA: isHoveringCTA,
                mousePos: targetMouse
            }, void 0, false, {
                fileName: "[project]/components/ParticleField.tsx",
                lineNumber: 423,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ParticleField.tsx",
            lineNumber: 422,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ParticleField.tsx",
        lineNumber: 421,
        columnNumber: 5
    }, this);
}
_s1(ParticleField, "8/kZ6IonZ67AQzEQDlXkConux1Y=");
_c1 = ParticleField;
var _c, _c1;
__turbopack_context__.k.register(_c, "Particles");
__turbopack_context__.k.register(_c1, "ParticleField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/QuoteSlider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuoteSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const quotes = [
    {
        text: "“Cosuniq made everything click — positioning, product UX, and delivery. Patient, talented, and invested.”",
        author: "Priya N.",
        role: "Operations Lead"
    },
    {
        text: "“Beyond aesthetics, the platform is functional. We’re happier shipping with a team that owns the craft.”",
        author: "Arun K.",
        role: "Founder"
    },
    {
        text: "“Fresh ideas, one-stop for brand, site, and video. Amazing creative technology partner.”",
        author: "Meera S.",
        role: "Marketing Head"
    }
];
function QuoteSlider() {
    _s();
    const [qIndex, setQIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const showQuote = (i)=>{
        setQIndex((i + quotes.length) % quotes.length);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "band band--cream",
        id: "voices",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "slider-head reveal",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "eyebrow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "spark spark--inline"
                                        }, void 0, false, {
                                            fileName: "[project]/components/QuoteSlider.tsx",
                                            lineNumber: 35,
                                            columnNumber: 39
                                        }, this),
                                        " Clients"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/QuoteSlider.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Hear from our partners."
                                }, void 0, false, {
                                    fileName: "[project]/components/QuoteSlider.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/QuoteSlider.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "slider-controls",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "slider-btn",
                                    "aria-label": "Previous quote",
                                    onClick: ()=>showQuote(qIndex - 1),
                                    children: "←"
                                }, void 0, false, {
                                    fileName: "[project]/components/QuoteSlider.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "slider-btn",
                                    "aria-label": "Next quote",
                                    onClick: ()=>showQuote(qIndex + 1),
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/components/QuoteSlider.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/QuoteSlider.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/QuoteSlider.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "quote-slider reveal",
                    children: quotes.map((q, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                            className: `quote-card ${idx === qIndex ? "is-active" : ""}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: q.text
                                }, void 0, false, {
                                    fileName: "[project]/components/QuoteSlider.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: q.author
                                        }, void 0, false, {
                                            fileName: "[project]/components/QuoteSlider.tsx",
                                            lineNumber: 48,
                                            columnNumber: 23
                                        }, this),
                                        " · ",
                                        q.role
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/QuoteSlider.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/components/QuoteSlider.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/QuoteSlider.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/QuoteSlider.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/QuoteSlider.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(QuoteSlider, "W0JE/9y1+Ouz27tV/Xr15hGPT9w=");
_c = QuoteSlider;
var _c;
__turbopack_context__.k.register(_c, "QuoteSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/WorkSlider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorkSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function WorkSlider() {
    _s();
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const slideBy = (dir)=>{
        if (!sliderRef.current) return;
        const amount = Math.min(380, sliderRef.current.clientWidth * 0.85) * dir;
        sliderRef.current.scrollBy({
            left: amount,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "band band--white",
        id: "work",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "slider-head reveal",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "eyebrow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "spark spark--inline"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WorkSlider.tsx",
                                            lineNumber: 19,
                                            columnNumber: 39
                                        }, this),
                                        " Featured work"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/WorkSlider.tsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Work that’s worked."
                                }, void 0, false, {
                                    fileName: "[project]/components/WorkSlider.tsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/WorkSlider.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "slider-controls",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "slider-btn",
                                    "aria-label": "Previous",
                                    onClick: ()=>slideBy(-1),
                                    children: "←"
                                }, void 0, false, {
                                    fileName: "[project]/components/WorkSlider.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "slider-btn",
                                    "aria-label": "Next",
                                    onClick: ()=>slideBy(1),
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/components/WorkSlider.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/WorkSlider.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/WorkSlider.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/WorkSlider.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "work-slider-wrap",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "work-slider",
                    ref: sliderRef,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "work-slide",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "work-slide__img",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/assets/images/dashboard.jpg",
                                            alt: "OpsCloud SaaS dashboard"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WorkSlider.tsx",
                                            lineNumber: 37,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "stat-badge",
                                            children: [
                                                "80+ ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: "projects"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WorkSlider.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 47
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/WorkSlider.tsx",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/WorkSlider.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "work-slide__meta",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "OpsCloud"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WorkSlider.tsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Multi-tenant SaaS for operations teams."
                                        }, void 0, false, {
                                            fileName: "[project]/components/WorkSlider.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "tags",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Software"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WorkSlider.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "UX"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WorkSlider.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 58
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Web"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WorkSlider.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 73
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/WorkSlider.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/WorkSlider.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/WorkSlider.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "work-slide",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "work-slide__img",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/assets/images/laptop.jpg",
                                            alt: "NovaMart ecommerce"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WorkSlider.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "stat-badge",
                                            children: [
                                                "+32% ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: "conversion"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WorkSlider.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 48
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/WorkSlider.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/WorkSlider.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "work-slide__meta",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "NovaMart"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WorkSlider.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Commerce experience built to convert."
                                        }, void 0, false, {
                                            fileName: "[project]/components/WorkSlider.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "tags",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "E-com"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WorkSlider.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Brand"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WorkSlider.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 55
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/WorkSlider.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/WorkSlider.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/WorkSlider.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "work-slide",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "work-slide__img",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/assets/images/strategy.jpg",
                                            alt: "PipeCRM strategy"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WorkSlider.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "stat-badge",
                                            children: [
                                                "2× ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: "pipeline"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WorkSlider.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 46
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/WorkSlider.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/WorkSlider.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "work-slide__meta",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "PipeCRM"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WorkSlider.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Sales CRM with smart follow-ups."
                                        }, void 0, false, {
                                            fileName: "[project]/components/WorkSlider.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "tags",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "CRM"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WorkSlider.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Automation"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WorkSlider.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 53
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/WorkSlider.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/WorkSlider.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/WorkSlider.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "work-slide",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "work-slide__img",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/assets/images/workshop.jpg",
                                            alt: "Brand workshop"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WorkSlider.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "stat-badge",
                                            children: [
                                                "Full ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: "identity"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WorkSlider.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 48
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/WorkSlider.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/WorkSlider.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "work-slide__meta",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "Lumen Brand"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WorkSlider.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Identity system for a growing fintech."
                                        }, void 0, false, {
                                            fileName: "[project]/components/WorkSlider.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "tags",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Brand"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WorkSlider.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Design"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WorkSlider.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 55
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/WorkSlider.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/WorkSlider.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/WorkSlider.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "work-slide",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "work-slide__img",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/assets/images/collab.jpg",
                                            alt: "Video production collab"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WorkSlider.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "stat-badge",
                                            children: [
                                                "16k+ ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: "views"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WorkSlider.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 48
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/WorkSlider.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/WorkSlider.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "work-slide__meta",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "Launch Reels"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WorkSlider.tsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Product film series for social."
                                        }, void 0, false, {
                                            fileName: "[project]/components/WorkSlider.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "tags",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Video"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WorkSlider.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Motion"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WorkSlider.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 55
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/WorkSlider.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/WorkSlider.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/WorkSlider.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/WorkSlider.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/WorkSlider.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/WorkSlider.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(WorkSlider, "wjKMYkN3mXB32DfSYznkohhJ8nw=");
_c = WorkSlider;
var _c;
__turbopack_context__.k.register(_c, "WorkSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_0ekmgul._.js.map