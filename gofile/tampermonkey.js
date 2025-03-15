// ==UserScript==
// @name         GoFileRestrictionsRemover
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Removes the restrictions from the gofile site to download content.
// @author       SUPERCHIEFYT (Elara-Discord-Bots)
// @match        https://gofile.io/d/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gofile.io
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const log = (...args) => console.log(`[${new Date().toLocaleString()}]: `, ...args);
    window.addEventListener("load", async(event) => {
        await sleep(1_000);
        // Don't worry about the eslint errors, this works perfectly
        if (!window.location.href.includes("gofile") || !window.location.pathname.includes("/d/") || !appdata) {
            return;
        }
        function set(overloaded = false, frozen = false) {
            log(`Enjoying the gofile download unlocker?\n- Patreon: https://patreon.com/elaraservices\n- GitHub: https://github.com/SUPERCHIEFYT`);
            const files = [...Object.values(appdata.fileManager.mainContent.data.children)];
            for (const f of files) {
                const updated = [];
                if (f.overloaded !== overloaded) {
                    appdata.fileManager.mainContent.data.children[f.id].overloaded = overloaded;
                    updated.push(`overloaded=${overloaded}`);
                }
                if (f.isFrozen !== frozen) {
                    appdata.fileManager.mainContent.data.children[f.id].isFrozen = frozen;
                    updated.push(`frozen=${frozen}`);
                }
                if (!updated.length) {
                    continue;
                }
                log(`[FILE_UPDATED]: ${f.name} got updated to: ${updated.join(" | ")}`);
            }
            return true;
        }
        set();
        window.set = set;
    })
    // Your code here...
})();
